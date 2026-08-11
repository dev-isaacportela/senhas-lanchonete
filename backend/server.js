const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

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

// Caminhos de Persistência em Disco JSON
const menuPath = path.join(__dirname, 'data/menu.json');
const ordersPath = path.join(__dirname, 'data/orders.json');
const usersPath = path.join(__dirname, 'data/users.json');
const logsPath = path.join(__dirname, 'data/logs.json');
const pixConfigPath = path.join(__dirname, 'data/pix-config.json');

// Garantir que a pasta de dados existe
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Configuração Padrão de Chave PIX
if (!fs.existsSync(pixConfigPath)) {
  const pixPadrao = {
    chavePix: 'festadomorango@exemplo.com',
    tipoChave: 'email',
    nomeBeneficiario: 'Festa do Morango',
    cidadeBeneficiario: 'SAO PAULO'
  };
  fs.writeFileSync(pixConfigPath, JSON.stringify(pixPadrao, null, 2), 'utf-8');
}

// Helpers for Reading & Writing JSON Files safely
function readJSON(filePath, fallback = []) {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (err) {
    console.error(`Erro ao ler arquivo ${filePath}:`, err);
    return fallback;
  }
}

function writeJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Erro ao salvar arquivo ${filePath}:`, err);
  }
}

// Memory Cache synced with JSON files
let orders = readJSON(ORDERS_FILE, []);
let menu = readJSON(MENU_FILE, { categorias: [], produtos: [] });
let users = readJSON(USERS_FILE, []);
let auditLogs = readJSON(LOGS_FILE, []);

// Helper to log actions with detailed items
function registrarLog(pedidoId, numeroPedido, cliente, usuario, acao, descricao, itens = null) {
  const newLog = {
    id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    timestamp: new Date().toISOString(),
    pedidoId,
    numeroPedido,
    cliente,
    usuario: usuario || 'Sistema',
    acao,
    descricao,
    itens: itens || null
  };

  auditLogs.unshift(newLog);
  if (auditLogs.length > 500) auditLogs = auditLogs.slice(0, 500);
  writeJSON(LOGS_FILE, auditLogs);

  if (typeof io !== 'undefined') {
    io.emit('novo_log_auditoria', newLog);
  }
}

// Function to calculate next comanda number
function getNextOrderNumber() {
  if (orders.length === 0) return 101;
  const maxNum = Math.max(...orders.map(o => o.numero || 100));
  return maxNum + 1;
}

// REST Endpoints

// 1. Login com usuário e senha
app.post('/api/auth/login', (req, res) => {
  const { usuario, senha } = req.body;

  if (!usuario || !senha) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }

  const user = users.find(u => u.usuario.toLowerCase() === usuario.trim().toLowerCase() && u.senha === senha.trim());

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
  res.json(users);
});

// Criar novo usuário
app.post('/api/users', (req, res) => {
  const { usuario, nome, senha, role } = req.body;

  if (!usuario || !usuario.trim() || !senha || !senha.trim() || !nome || !nome.trim()) {
    return res.status(400).json({ error: 'Usuário, nome e senha são obrigatórios.' });
  }

  const usuarioFormatado = usuario.trim().toLowerCase();
  const jaExiste = users.some(u => u.usuario.toLowerCase() === usuarioFormatado);
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

  users.push(newUser);
  writeJSON(USERS_FILE, users);

  res.status(201).json({ status: 'success', user: newUser });
});

// Editar usuário existente
app.patch('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { nome, senha, role } = req.body;

  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  if (nome) users[idx].nome = nome.trim();
  if (senha) users[idx].senha = senha.trim();
  if (role) users[idx].role = role;

  writeJSON(USERS_FILE, users);

  res.json({ status: 'success', user: users[idx] });
});

// Excluir usuário
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;

  const target = users.find(u => u.id === id);
  if (!target) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }

  if (target.usuario === 'admin') {
    return res.status(403).json({ error: 'Não é possível excluir a conta master principal (admin).' });
  }

  users = users.filter(u => u.id !== id);
  writeJSON(USERS_FILE, users);

  res.json({ status: 'success', message: 'Usuário excluído com sucesso.' });
});

// 1. Obter todos os pedidos
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

// ----------------------------------------------------
// PIX CONFIGURATION ENDPOINTS
// ----------------------------------------------------
app.get('/api/pix-config', (req, res) => {
  try {
    const pixData = readJSON(pixConfigPath, {
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

    writeJSON(pixConfigPath, novaConfig);
    res.json({ status: 'success', data: novaConfig });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao salvar chave PIX.' });
  }
});

// GET /api/logs - Obter histórico de auditoria
app.get('/api/logs', (req, res) => {
  res.json(auditLogs);
});

// 2. Criar novo pedido com Forma de Pagamento e Pagar Depois (Telefone Obrigatório + Data de Cobrança)
app.post('/api/orders', (req, res) => {
  const { cliente, telefoneCliente, criadoPor, itens, formaPagamento, statusPagamento, dataCobranca } = req.body;
  
  if (!cliente || !cliente.trim()) {
    return res.status(400).json({ error: 'O nome do cliente é obrigatório.' });
  }
  if (!itens || !Array.isArray(itens) || itens.length === 0) {
    return res.status(400).json({ error: 'O pedido deve conter ao menos 1 item.' });
  }

  const formaPgto = formaPagamento || 'pix';
  const isPagarDepois = formaPgto === 'pagar_depois';

  if (isPagarDepois && (!telefoneCliente || !telefoneCliente.trim())) {
    return res.status(400).json({ error: 'O telefone do cliente é obrigatório para a opção Pagar Depois.' });
  }

  const numero = getNextOrderNumber();
  const total = itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  const operadorNome = criadoPor ? criadoPor.trim() : 'Caixa';
  const stPagamento = statusPagamento || (isPagarDepois ? 'pendente_pagamento' : 'pago');

  const newOrder = {
    id: `ORD-${numero}`,
    numero,
    cliente: cliente.trim(),
    telefoneCliente: telefoneCliente ? telefoneCliente.trim() : null,
    criadoPor: operadorNome,
    preparadoPor: null,
    formaPagamento: formaPgto,
    statusPagamento: stPagamento,
    dataCobranca: isPagarDepois ? (dataCobranca || null) : null,
    itens,
    total,
    status: 'pendente',
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString()
  };

  orders.unshift(newOrder);
  writeJSON(ORDERS_FILE, orders);

  // Formatar resumo detalhado dos itens e valores
  const itensResumo = itens.map(i => `${i.quantidade}x ${i.nome} (R$ ${(i.preco * i.quantidade).toFixed(2)})`).join(', ');
  const cobrancaText = isPagarDepois ? ` | PAGAR DEPOIS (Tel: ${telefoneCliente.trim()} | Cobrança: ${dataCobranca || 'Sem data'})` : ` | Forma: ${formaPgto.toUpperCase()}`;

  // Registrar Log de Auditoria
  registrarLog(
    newOrder.id,
    newOrder.numero,
    newOrder.cliente,
    operadorNome,
    'criacao',
    `Abriu o Pedido #${numero} para ${cliente.trim()} | Itens: ${itensResumo}${cobrancaText} | Total: R$ ${total.toFixed(2)}`,
    itens
  );

  // Broadcast Socket Event
  io.emit('novo_pedido_criado', newOrder);

  res.status(201).json({ status: 'success', order: newOrder });
});

// Atualizar Pagamento do Pedido (Ex: Quitar Pagar Depois)
app.patch('/api/orders/:id/pagamento', (req, res) => {
  const { id } = req.params;
  const { statusPagamento, formaPagamento } = req.body;

  const idx = orders.findIndex(o => o.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Pedido não encontrado.' });
  }

  if (statusPagamento) orders[idx].statusPagamento = statusPagamento;
  if (formaPagamento) orders[idx].formaPagamento = formaPagamento;
  orders[idx].atualizadoEm = new Date().toISOString();

  writeJSON(ORDERS_FILE, orders);

  const updatedOrder = orders[idx];

  // Audit Log
  registrarLog(
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

  const orderIndex = orders.findIndex(o => o.id === id);
  if (orderIndex === -1) {
    return res.status(404).json({ error: 'Pedido não encontrado.' });
  }

  const validStatus = ['pendente', 'em_preparo', 'pronto', 'entregue', 'cancelado'];
  if (!validStatus.includes(status)) {
    return res.status(400).json({ error: 'Status inválido.' });
  }

  orders[orderIndex].status = status;
  const operadorNome = preparadoPor ? preparadoPor.trim() : 'Cozinha';

  if (preparadoPor) {
    orders[orderIndex].preparadoPor = operadorNome;
  }
  orders[orderIndex].atualizadoEm = new Date().toISOString();
  
  writeJSON(ORDERS_FILE, orders);

  const updatedOrder = orders[orderIndex];

  // Registrar Log de Auditoria
  let acaoLog = 'status';
  let descLog = `Atualizou status do Pedido #${updatedOrder.numero} para ${status}`;

  if (status === 'em_preparo') {
    acaoLog = 'preparo';
    descLog = `Iniciou o preparo do Pedido #${updatedOrder.numero} (${updatedOrder.cliente})`;
  } else if (status === 'pronto') {
    acaoLog = 'pronto';
    descLog = `Marcou o Pedido #${updatedOrder.numero} (${updatedOrder.cliente}) como PRONTO e chamou no balcão`;
  } else if (status === 'entregue') {
    acaoLog = 'entregue';
    descLog = `Finalizou e entregou o Pedido #${updatedOrder.numero} para ${updatedOrder.cliente}`;
  }

  registrarLog(
    updatedOrder.id,
    updatedOrder.numero,
    updatedOrder.cliente,
    operadorNome,
    acaoLog,
    descLog
  );

  // Broadcast Status Change
  io.emit('status_pedido_atualizado', updatedOrder);

  // Special event when marked as 'pronto' for TV notification & sound
  if (status === 'pronto') {
    io.emit('pedido_chamado', updatedOrder);
  }

  res.json({ status: 'success', order: updatedOrder });
});

// 4. Obter Cardápio
app.get('/api/menu', (req, res) => {
  res.json(menu);
});

// 5. Adicionar/Editar produto no cardápio
app.post('/api/menu/produto', (req, res) => {
  const { id, categoriaId, nome, descricao, preco, disponivel } = req.body;
  
  if (!nome || !preco || !categoriaId) {
    return res.status(400).json({ error: 'Dados incompletos para o produto.' });
  }

  let produtoAtualizado;
  const prodIndex = menu.produtos.findIndex(p => p.id === id);

  if (prodIndex >= 0) {
    menu.produtos[prodIndex] = {
      ...menu.produtos[prodIndex],
      categoriaId,
      nome: nome.trim(),
      descricao: (descricao || '').trim(),
      preco: parseFloat(preco),
      disponivel: disponivel !== undefined ? disponivel : true
    };
    produtoAtualizado = menu.produtos[prodIndex];
  } else {
    produtoAtualizado = {
      id: `prod-${Date.now()}`,
      categoriaId,
      nome: nome.trim(),
      descricao: (descricao || '').trim(),
      preco: parseFloat(preco),
      disponivel: disponivel !== undefined ? disponivel : true
    };
    menu.produtos.push(produtoAtualizado);
  }

  writeJSON(MENU_FILE, menu);
  io.emit('cardapio_atualizado', menu);

  res.json({ status: 'success', produto: produtoAtualizado, menu });
});

// 6. Excluir produto do cardápio
app.delete('/api/menu/produto/:id', (req, res) => {
  const { id } = req.params;
  const prodIndex = menu.produtos.findIndex(p => p.id === id);

  if (prodIndex === -1) {
    return res.status(404).json({ error: 'Produto não encontrado.' });
  }

  const produtoRemovido = menu.produtos.splice(prodIndex, 1)[0];
  writeJSON(MENU_FILE, menu);
  io.emit('cardapio_atualizado', menu);

  res.json({ status: 'success', produto: produtoRemovido, menu });
});

// 7. Toggle disponibilidade do produto
app.patch('/api/menu/produto/:id/disponivel', (req, res) => {
  const { id } = req.params;
  const prodIndex = menu.produtos.findIndex(p => p.id === id);

  if (prodIndex === -1) {
    return res.status(404).json({ error: 'Produto não encontrado.' });
  }

  menu.produtos[prodIndex].disponivel = !menu.produtos[prodIndex].disponivel;
  writeJSON(MENU_FILE, menu);
  io.emit('cardapio_atualizado', menu);

  res.json({ status: 'success', produto: menu.produtos[prodIndex], menu });
});

// 8. Adicionar/Editar categoria no cardápio
app.post('/api/menu/categoria', (req, res) => {
  const { id, nome, icone } = req.body;

  if (!nome || !nome.trim()) {
    return res.status(400).json({ error: 'O nome da categoria é obrigatório.' });
  }

  const catId = id || nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  const catIndex = menu.categorias.findIndex(c => c.id === catId || c.id === id);

  if (catIndex >= 0) {
    menu.categorias[catIndex] = {
      ...menu.categorias[catIndex],
      nome: nome.trim(),
      icone: icone || 'utensils'
    };
  } else {
    menu.categorias.push({
      id: catId,
      nome: nome.trim(),
      icone: icone || 'utensils'
    });
  }

  writeJSON(MENU_FILE, menu);
  io.emit('cardapio_atualizado', menu);

  res.json({ status: 'success', menu });
});

// 9. Excluir categoria
app.delete('/api/menu/categoria/:id', (req, res) => {
  const { id } = req.params;
  const catIndex = menu.categorias.findIndex(c => c.id === id);

  if (catIndex === -1) {
    return res.status(404).json({ error: 'Categoria não encontrada.' });
  }

  // Check if there are products in this category
  const produtosNaCategoria = menu.produtos.filter(p => p.categoriaId === id);
  if (produtosNaCategoria.length > 0) {
    return res.status(400).json({ error: 'Não é possível excluir uma categoria que possui produtos cadastrados.' });
  }

  menu.categorias.splice(catIndex, 1);
  writeJSON(MENU_FILE, menu);
  io.emit('cardapio_atualizado', menu);

  res.json({ status: 'success', menu });
});


// Socket.io Connection Logic
io.on('connection', (socket) => {
  console.log(`[Socket.io] Novo cliente conectado: ${socket.id}`);

  // Transmit initial state immediately upon connection
  socket.emit('pedidos_iniciais', orders);
  socket.emit('cardapio_inicial', menu);

  // Client triggers creation
  socket.on('criar_pedido', (pedidoData, callback) => {
    const { cliente, telefoneCliente, criadoPor, itens, formaPagamento, statusPagamento, dataCobranca } = pedidoData;
    if (!cliente || !itens || itens.length === 0) {
      if (callback) callback({ error: 'Dados de pedido inválidos' });
      return;
    }

    const formaPgto = formaPagamento || 'pix';
    const isPagarDepois = formaPgto === 'pagar_depois';

    if (isPagarDepois && (!telefoneCliente || !telefoneCliente.trim())) {
      if (callback) callback({ error: 'Telefone do cliente é obrigatório para Pagar Depois' });
      return;
    }

    const numero = getNextOrderNumber();
    const total = itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    const operadorNome = criadoPor ? criadoPor.trim() : 'Caixa';
    const stPagamento = statusPagamento || (isPagarDepois ? 'pendente_pagamento' : 'pago');

    const newOrder = {
      id: `ORD-${numero}`,
      numero,
      cliente: cliente.trim(),
      telefoneCliente: telefoneCliente ? telefoneCliente.trim() : null,
      criadoPor: operadorNome,
      preparadoPor: null,
      formaPagamento: formaPgto,
      statusPagamento: stPagamento,
      dataCobranca: isPagarDepois ? (dataCobranca || null) : null,
      itens,
      total,
      status: 'pendente',
      criadoEm: new Date().toISOString(),
      atualizadoEm: new Date().toISOString()
    };

    orders.unshift(newOrder);
    writeJSON(ORDERS_FILE, orders);

    // Formatar resumo detalhado dos itens e valores
    const itensResumo = itens.map(i => `${i.quantidade}x ${i.nome} (R$ ${(i.preco * i.quantidade).toFixed(2)})`).join(', ');
    const cobrancaText = isPagarDepois ? ` | PAGAR DEPOIS (Tel: ${telefoneCliente.trim()} | Cobrança: ${dataCobranca || 'Sem data'})` : ` | Forma: ${formaPgto.toUpperCase()}`;

    // Audit Log
    registrarLog(
      newOrder.id,
      newOrder.numero,
      newOrder.cliente,
      operadorNome,
      'criacao',
      `Abriu o Pedido #${numero} para ${cliente.trim()} | Itens: ${itensResumo}${cobrancaText} | Total: R$ ${total.toFixed(2)}`,
      itens
    );

    io.emit('novo_pedido_criado', newOrder);
    if (callback) callback({ status: 'success', order: newOrder });
  });

  // Client triggers status change
  socket.on('mudar_status_pedido', ({ id, status, preparadoPor }, callback) => {
    const orderIndex = orders.findIndex(o => o.id === id);
    if (orderIndex !== -1) {
      const operadorNome = preparadoPor ? preparadoPor.trim() : 'Cozinha';

      orders[orderIndex].status = status;
      if (preparadoPor) {
        orders[orderIndex].preparadoPor = operadorNome;
      }
      orders[orderIndex].atualizadoEm = new Date().toISOString();
      writeJSON(ORDERS_FILE, orders);

      const updatedOrder = orders[orderIndex];

      // Audit Log
      let acaoLog = 'status';
      let descLog = `Atualizou status do Pedido #${updatedOrder.numero} para ${status}`;

      if (status === 'em_preparo') {
        acaoLog = 'preparo';
        descLog = `Iniciou o preparo do Pedido #${updatedOrder.numero} (${updatedOrder.cliente})`;
      } else if (status === 'pronto') {
        acaoLog = 'pronto';
        descLog = `Marcou o Pedido #${updatedOrder.numero} (${updatedOrder.cliente}) como PRONTO e chamou no balcão`;
      } else if (status === 'entregue') {
        acaoLog = 'entregue';
        descLog = `Finalizou e entregou o Pedido #${updatedOrder.numero} para ${updatedOrder.cliente}`;
      }

      registrarLog(
        updatedOrder.id,
        updatedOrder.numero,
        updatedOrder.cliente,
        operadorNome,
        acaoLog,
        descLog
      );

      io.emit('status_pedido_atualizado', updatedOrder);

      if (status === 'pronto') {
        io.emit('pedido_chamado', updatedOrder);
      }

      if (callback) callback({ status: 'success', order: updatedOrder });
    }
  });

  socket.on('disconnect', () => {
    console.log(`[Socket.io] Cliente desconectado: ${socket.id}`);
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

// Iniciar Servidor HTTP + WebSocket
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor da Festa do Morango rodando na porta ${PORT}`);
  console.log(`👉 Acesse localmente: http://localhost:${PORT}`);
});
