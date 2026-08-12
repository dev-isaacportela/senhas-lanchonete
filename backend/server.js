const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const store = require('./store');
const ordersService = require('./services/orders');
const estoqueService = require('./services/estoque');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE']
  }
});

// O store precisa do io para emitir 'novo_log_auditoria' de dentro do registrarLog
store.setIo(io);

const pixConfigPath = store.PIX_CONFIG_FILE;

// Configuração Padrão de Chave PIX
if (!fs.existsSync(pixConfigPath)) {
  const pixPadrao = {
    chavePix: 'festadomorango@exemplo.com',
    tipoChave: 'email',
    nomeBeneficiario: 'Festa do Morango',
    cidadeBeneficiario: 'SAO PAULO'
  };
  store.writeJSON(pixConfigPath, pixPadrao);
}

// REST Endpoints

// 1. Login com usuário e senha
app.post('/api/auth/login', (req, res) => {
  const { usuario, senha } = req.body;

  if (!usuario || !senha) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }

  const user = store.users.find(u => u.usuario.toLowerCase() === usuario.trim().toLowerCase() && u.senha === senha.trim());

  if (!user) {
    return res.status(401).json({ error: 'Usuário ou senha incorretos.' });
  }

  res.json({
    status: 'success',
    user: {
      id: user.id,
      usuario: user.usuario,
      nome: user.nome,
      role: user.role
    }
  });
});

// CRUD de Usuários (Apenas Admin/Master)

// Obter todos os usuários
app.get('/api/users', (req, res) => {
  res.json(store.users);
});

// Criar novo usuário
app.post('/api/users', (req, res) => {
  const { usuario, nome, senha, role } = req.body;

  if (!usuario || !usuario.trim() || !senha || !senha.trim() || !nome || !nome.trim()) {
    return res.status(400).json({ error: 'Usuário, nome e senha são obrigatórios.' });
  }

  const usuarioFormatado = usuario.trim().toLowerCase();
  const jaExiste = store.users.some(u => u.usuario.toLowerCase() === usuarioFormatado);
  if (jaExiste) {
    return res.status(400).json({ error: 'Este nome de usuário já está em uso.' });
  }

  const newUser = {
    id: `u-${Date.now()}`,
    usuario: usuarioFormatado,
    nome: nome.trim(),
    senha: senha.trim(),
    role: role || 'cozinha'
  };

  store.users.push(newUser);
  store.salvarUsuarios();

  res.status(201).json({ status: 'success', user: newUser });
});

// Editar usuário existente
app.patch('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { nome, senha, role } = req.body;

  const idx = store.users.findIndex(u => u.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  if (nome) store.users[idx].nome = nome.trim();
  if (senha) store.users[idx].senha = senha.trim();
  if (role) store.users[idx].role = role;

  store.salvarUsuarios();

  res.json({ status: 'success', user: store.users[idx] });
});

// Excluir usuário
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;

  const target = store.users.find(u => u.id === id);
  if (!target) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  if (target.usuario === 'admin') {
    return res.status(403).json({ error: 'Não é possível excluir a conta master principal (admin).' });
  }

  store.users = store.users.filter(u => u.id !== id);
  store.salvarUsuarios();

  res.json({ status: 'success', message: 'Usuário excluído com sucesso.' });
});

// 1. Obter todos os pedidos
app.get('/api/orders', (req, res) => {
  res.json(store.orders);
});

// ----------------------------------------------------
// PIX CONFIGURATION ENDPOINTS
// ----------------------------------------------------
app.get('/api/pix-config', (req, res) => {
  try {
    const pixData = store.readJSON(pixConfigPath, {
      chavePix: 'festadomorango@exemplo.com',
      tipoChave: 'email',
      nomeBeneficiario: 'Festa do Morango',
      cidadeBeneficiario: 'SAO PAULO'
    });
    res.json(pixData);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao ler configuração PIX.' });
  }
});

app.post('/api/pix-config', (req, res) => {
  try {
    const { chavePix, tipoChave, nomeBeneficiario, cidadeBeneficiario } = req.body;
    if (!chavePix || !nomeBeneficiario) {
      return res.status(400).json({ error: 'Chave PIX e Nome do Beneficiário são obrigatórios.' });
    }

    const novaConfig = {
      chavePix: String(chavePix).trim(),
      tipoChave: String(tipoChave || 'email').trim(),
      nomeBeneficiario: String(nomeBeneficiario).trim(),
      cidadeBeneficiario: String(cidadeBeneficiario || 'SAO PAULO').trim().toUpperCase()
    };

    store.writeJSON(pixConfigPath, novaConfig);
    res.json({ status: 'success', data: novaConfig });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao salvar chave PIX.' });
  }
});

// GET /api/logs - Obter histórico de auditoria
app.get('/api/logs', (req, res) => {
  res.json(store.auditLogs);
});

// 2. Criar novo pedido com Forma de Pagamento e Pagar Depois (Telefone Obrigatório + Data de Cobrança)
app.post('/api/orders', (req, res) => {
  const resultado = ordersService.criarPedido(req.body);

  if (!resultado.ok) {
    return res.status(resultado.status || 400).json({
      error: resultado.mensagem,
      erro: resultado.erro,
      itensIndisponiveis: resultado.itensIndisponiveis
    });
  }

  res.status(201).json({ status: 'success', order: resultado.order });
});

// Atualizar Pagamento do Pedido (Ex: Quitar Pagar Depois)
app.patch('/api/orders/:id/pagamento', (req, res) => {
  const { id } = req.params;
  const { statusPagamento, formaPagamento } = req.body;

  const idx = store.orders.findIndex(o => o.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Pedido não encontrado.' });
  }

  if (statusPagamento) store.orders[idx].statusPagamento = statusPagamento;
  if (formaPagamento) store.orders[idx].formaPagamento = formaPagamento;
  store.orders[idx].atualizadoEm = new Date().toISOString();

  store.salvarPedidos();

  const updatedOrder = store.orders[idx];

  // Audit Log
  store.registrarLog(
    updatedOrder.id,
    updatedOrder.numero,
    updatedOrder.cliente,
    'Caixa',
    'status',
    `Atualizou pagamento do Pedido #${updatedOrder.numero} para ${statusPagamento === 'pago' ? 'PAGO / QUITADO' : statusPagamento}`
  );

  io.emit('status_pedido_atualizado', updatedOrder);
  res.json({ status: 'success', order: updatedOrder });
});

// 3. Atualizar status do pedido
app.patch('/api/orders/:id/status', (req, res) => {
  const { id } = req.params;
  const { status, preparadoPor } = req.body;

  const resultado = ordersService.alterarStatusPedido(id, status, preparadoPor);

  if (!resultado.ok) {
    return res.status(resultado.status || 400).json({
      error: resultado.mensagem,
      erro: resultado.erro
    });
  }

  res.json({ status: 'success', order: resultado.order });
});

// Atualizar baixa de item individual do pedido via REST API
app.patch('/api/orders/:id/itens/:itemIndex', (req, res) => {
  const { id, itemIndex } = req.params;
  const { entregue, operadorNome } = req.body;
  const idx = parseInt(itemIndex, 10);

  const orderIndex = store.orders.findIndex(o => o.id === id);
  if (orderIndex === -1) {
    return res.status(404).json({ error: 'Pedido não encontrado.' });
  }

  const order = store.orders[orderIndex];
  if (!order.itens || !order.itens[idx]) {
    return res.status(404).json({ error: 'Item não encontrado.' });
  }

  const novoStatusItem = entregue !== undefined ? entregue : !order.itens[idx].entregue;
  order.itens[idx].entregue = novoStatusItem;

  const totalItens = order.itens.reduce((acc, i) => acc + (i.quantidade || 1), 0);
  const entreguesItens = order.itens.filter(i => i.entregue).reduce((acc, i) => acc + (i.quantidade || 1), 0);

  if (entreguesItens >= totalItens) {
    order.status = 'entregue';
  } else if (entreguesItens > 0) {
    order.status = 'entrega_parcial';
  } else {
    if (order.status === 'entregue' || order.status === 'entrega_parcial') {
      order.status = 'em_preparo';
    }
  }

  order.atualizadoEm = new Date().toISOString();
  store.salvarPedidos();

  const opNome = operadorNome ? operadorNome.trim() : 'Atendente';
  const itemObj = order.itens[idx];
  const itemNome = `${itemObj.quantidade}x ${itemObj.nome}`;
  const descLog = novoStatusItem
    ? `Entregou item '${itemNome}' do Pedido #${order.numero} (${order.cliente}) [Entrega Parcial ${entreguesItens}/${totalItens} itens]`
    : `Desmarcou entrega do item '${itemNome}' do Pedido #${order.numero} (${order.cliente})`;

  store.registrarLog(
    order.id,
    order.numero,
    order.cliente,
    opNome,
    'status',
    descLog,
    order.itens
  );

  io.emit('status_pedido_atualizado', order);
  res.json({ status: 'success', order });
});

// 4. Obter Cardápio
app.get('/api/menu', (req, res) => {
  res.json(store.menu);
});

// 5. Adicionar/Editar produto no cardápio
app.post('/api/menu/produto', (req, res) => {
  const { id, categoriaId, nome, descricao, preco, disponivel, controlaEstoque, estoque, estoqueMinimo } = req.body;

  if (!nome || !preco || !categoriaId) {
    return res.status(400).json({ error: 'Dados incompletos para o produto.' });
  }

  // Campos de estoque so entram no merge quando vierem no payload. Sem isso,
  // editar nome ou preco pelo Cardapio zeraria o estoque do produto.
  const camposEstoque = {};
  if (controlaEstoque !== undefined) camposEstoque.controlaEstoque = !!controlaEstoque;
  if (estoque !== undefined) camposEstoque.estoque = Math.max(0, parseInt(estoque, 10) || 0);
  if (estoqueMinimo !== undefined) camposEstoque.estoqueMinimo = Math.max(0, parseInt(estoqueMinimo, 10) || 0);

  let produtoAtualizado;
  const prodIndex = store.menu.produtos.findIndex(p => p.id === id);

  if (prodIndex >= 0) {
    store.menu.produtos[prodIndex] = {
      ...store.menu.produtos[prodIndex],
      categoriaId,
      nome: nome.trim(),
      descricao: (descricao || '').trim(),
      preco: parseFloat(preco),
      disponivel: disponivel !== undefined ? disponivel : true,
      ...camposEstoque
    };
    produtoAtualizado = store.menu.produtos[prodIndex];
  } else {
    produtoAtualizado = store.normalizarProdutoEstoque({
      id: `prod-${Date.now()}`,
      categoriaId,
      nome: nome.trim(),
      descricao: (descricao || '').trim(),
      preco: parseFloat(preco),
      disponivel: disponivel !== undefined ? disponivel : true,
      ...camposEstoque
    }).produto;
    store.menu.produtos.push(produtoAtualizado);
  }

  store.salvarMenu();
  io.emit('cardapio_atualizado', store.menu);

  res.json({ status: 'success', produto: produtoAtualizado, menu: store.menu });
});

// 5.1 Ajuste manual de estoque (definir com { valor } ou repor com { delta })
app.patch('/api/menu/produto/:id/estoque', (req, res) => {
  const { id } = req.params;
  const { valor, delta, operadorNome } = req.body;

  const resultado = estoqueService.ajustar(id, { valor, delta });

  if (!resultado.ok) {
    const naoEncontrado = resultado.erro === 'produto_nao_encontrado';
    return res.status(naoEncontrado ? 404 : 400).json({
      error: naoEncontrado
        ? 'Produto não encontrado.'
        : 'Informe { valor } para definir ou { delta } para repor/abater.',
      erro: resultado.erro
    });
  }

  const operador = operadorNome ? String(operadorNome).trim() : 'Gerente';
  const sinal = resultado.novo >= resultado.anterior ? '+' : '';
  const variacao = resultado.novo - resultado.anterior;

  store.registrarLog(
    null,
    null,
    resultado.produto.nome,
    operador,
    'estoque_ajuste',
    `Ajustou o estoque de '${resultado.produto.nome}': ${resultado.anterior} -> ${resultado.novo} (${sinal}${variacao})`
  );

  io.emit('cardapio_atualizado', store.menu);

  res.json({
    status: 'success',
    produto: resultado.produto,
    anterior: resultado.anterior,
    novo: resultado.novo
  });
});

// 5.2 Snapshot de estoque para telas que não usam socket
app.get('/api/estoque', (req, res) => {
  res.json(estoqueService.snapshot());
});

// 6. Excluir produto do cardápio
app.delete('/api/menu/produto/:id', (req, res) => {
  const { id } = req.params;
  const prodIndex = store.menu.produtos.findIndex(p => p.id === id);

  if (prodIndex === -1) {
    return res.status(404).json({ error: 'Produto não encontrado.' });
  }

  const produtoRemovido = store.menu.produtos.splice(prodIndex, 1)[0];
  store.salvarMenu();
  io.emit('cardapio_atualizado', store.menu);

  res.json({ status: 'success', produto: produtoRemovido, menu: store.menu });
});

// 7. Toggle disponibilidade do produto
app.patch('/api/menu/produto/:id/disponivel', (req, res) => {
  const { id } = req.params;
  const prodIndex = store.menu.produtos.findIndex(p => p.id === id);

  if (prodIndex === -1) {
    return res.status(404).json({ error: 'Produto não encontrado.' });
  }

  store.menu.produtos[prodIndex].disponivel = !store.menu.produtos[prodIndex].disponivel;
  store.salvarMenu();
  io.emit('cardapio_atualizado', store.menu);

  res.json({ status: 'success', produto: store.menu.produtos[prodIndex], menu: store.menu });
});

// 8. Adicionar/Editar categoria no cardápio
app.post('/api/menu/categoria', (req, res) => {
  const { id, nome, icone } = req.body;

  if (!nome || !nome.trim()) {
    return res.status(400).json({ error: 'O nome da categoria é obrigatório.' });
  }

  const catId = id || nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  const catIndex = store.menu.categorias.findIndex(c => c.id === catId || c.id === id);

  if (catIndex >= 0) {
    store.menu.categorias[catIndex] = {
      ...store.menu.categorias[catIndex],
      nome: nome.trim(),
      icone: icone || 'utensils'
    };
  } else {
    store.menu.categorias.push({
      id: catId,
      nome: nome.trim(),
      icone: icone || 'utensils'
    });
  }

  store.salvarMenu();
  io.emit('cardapio_atualizado', store.menu);

  res.json({ status: 'success', menu: store.menu });
});

// 9. Excluir categoria
app.delete('/api/menu/categoria/:id', (req, res) => {
  const { id } = req.params;
  const catIndex = store.menu.categorias.findIndex(c => c.id === id);

  if (catIndex === -1) {
    return res.status(404).json({ error: 'Categoria não encontrada.' });
  }

  // Check if there are products in this category
  const produtosNaCategoria = store.menu.produtos.filter(p => p.categoriaId === id);
  if (produtosNaCategoria.length > 0) {
    return res.status(400).json({ error: 'Não é possível excluir uma categoria que possui produtos cadastrados.' });
  }

  store.menu.categorias.splice(catIndex, 1);
  store.salvarMenu();
  io.emit('cardapio_atualizado', store.menu);

  res.json({ status: 'success', menu: store.menu });
});


// Socket.io Connection Logic
io.on('connection', (socket) => {
  console.log(`[Socket.io] Novo cliente conectado: ${socket.id}`);

  // Transmit initial state immediately upon connection
  socket.emit('pedidos_iniciais', store.orders);
  socket.emit('cardapio_inicial', store.menu);
  socket.emit('estoque_atualizado', estoqueService.snapshot());

  // Client triggers creation
  socket.on('criar_pedido', (pedidoData, callback) => {
    // socketId identifica de quem sao as reservas que viram venda
    const resultado = ordersService.criarPedido({ ...(pedidoData || {}), socketId: socket.id });

    if (!resultado.ok) {
      if (callback) {
        callback({
          error: resultado.mensagem,
          erro: resultado.erro,
          itensIndisponiveis: resultado.itensIndisponiveis
        });
      }
      return;
    }

    if (callback) callback({ status: 'success', order: resultado.order });
  });

  // Client triggers status change
  socket.on('mudar_status_pedido', ({ id, status, preparadoPor }, callback) => {
    const resultado = ordersService.alterarStatusPedido(id, status, preparadoPor);

    if (!resultado.ok) {
      if (callback) callback({ error: resultado.mensagem, erro: resultado.erro });
      return;
    }

    if (callback) callback({ status: 'success', order: resultado.order });
  });

  // Client triggers item-level partial delivery update
  socket.on('alternar_item_entregue', ({ orderId, itemIndex, entregue, operadorNome }, callback) => {
    const orderIndex = store.orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;

    const order = store.orders[orderIndex];
    if (!order.itens || !order.itens[itemIndex]) return;

    const novoStatusItem = entregue !== undefined ? entregue : !order.itens[itemIndex].entregue;
    order.itens[itemIndex].entregue = novoStatusItem;

    const totalItens = order.itens.reduce((acc, i) => acc + (i.quantidade || 1), 0);
    const entreguesItens = order.itens.filter(i => i.entregue).reduce((acc, i) => acc + (i.quantidade || 1), 0);

    if (entreguesItens >= totalItens) {
      order.status = 'entregue';
    } else if (entreguesItens > 0) {
      order.status = 'entrega_parcial';
    } else {
      if (order.status === 'entregue' || order.status === 'entrega_parcial') {
        order.status = 'em_preparo';
      }
    }

    order.atualizadoEm = new Date().toISOString();
    store.salvarPedidos();

    const opNome = operadorNome ? operadorNome.trim() : 'Atendente';
    const itemObj = order.itens[itemIndex];
    const itemNome = `${itemObj.quantidade}x ${itemObj.nome}`;
    const descLog = novoStatusItem
      ? `Entregou item '${itemNome}' do Pedido #${order.numero} (${order.cliente}) [Entrega Parcial ${entreguesItens}/${totalItens} itens]`
      : `Desmarcou entrega do item '${itemNome}' do Pedido #${order.numero} (${order.cliente})`;

    store.registrarLog(
      order.id,
      order.numero,
      order.cliente,
      opNome,
      'status',
      descLog,
      order.itens
    );

    io.emit('status_pedido_atualizado', order);
    if (callback) callback({ status: 'success', order });
  });

  // ----------------------------------------------------
  // ESTOQUE: reservas de carrinho
  // ----------------------------------------------------

  socket.on('reservar_item', ({ produtoId, quantidade } = {}, callback) => {
    const resultado = estoqueService.reservar(produtoId, socket.id, quantidade ?? 1);
    if (callback) callback(resultado);
  });

  socket.on('liberar_item', ({ produtoId, quantidade } = {}, callback) => {
    const resultado = estoqueService.liberar(produtoId, socket.id, quantidade ?? 1);
    if (callback) callback(resultado);
  });

  socket.on('liberar_carrinho', (_payload, callback) => {
    const afetados = estoqueService.liberarTudo(socket.id);
    if (callback) callback({ ok: true, produtosLiberados: afetados });
  });

  socket.on('solicitar_estoque', (_payload, callback) => {
    if (callback) callback({ ok: true, estoque: estoqueService.snapshot() });
  });

  socket.on('disconnect', () => {
    console.log(`[Socket.io] Cliente desconectado: ${socket.id}`);
    // Caixa que fecha o navegador devolve na hora o que estava segurando
    estoqueService.liberarTudo(socket.id);
  });
});

const PORT = process.env.PORT || 3001;

// Servir frontend compilado em produção (dist)
const distPath = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(distPath, 'index.html'));
    }
  });
}

// Varredura periódica de reservas de carrinho com TTL vencido
estoqueService.iniciarVarredura();

// Iniciar Servidor HTTP + WebSocket
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor da Festa do Morango rodando na porta ${PORT}`);
  console.log(`👉 Acesse localmente: http://localhost:${PORT}`);
});
