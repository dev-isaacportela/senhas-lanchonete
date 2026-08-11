import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { ShoppingBag, ChefHat, Tv, Utensils, Wifi, WifiOff, Sun, Moon, User, LogOut, ShieldCheck, Lock, ArrowRight, BarChart3, Users, History, AlertTriangle } from 'lucide-react';

import CaixaView from './components/CaixaView';
import CozinhaView from './components/CozinhaView';
import ChamadaView from './components/ChamadaView';
import CardapioView from './components/CardapioView';
import VendasView from './components/VendasView';
import UsuariosView from './components/UsuariosView';
import LogsView from './components/LogsView';

// Initialize Socket.io connection
const socket = io(window.location.origin, {
  transports: ['websocket', 'polling']
});

export default function App() {
  const [visaoAtiva, setVisaoAtiva] = useState('caixa'); // caixa | cozinha | chamada | cardapio | vendas | usuarios | logs
  const [conectado, setConectado] = useState(false);
  const [tema, setTema] = useState(() => {
    return localStorage.getItem('tema_lanchonete') || 'claro';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    document.body.setAttribute('data-theme', tema);
  }, [tema]);

  // Operador Autenticado State
  const [operador, setOperador] = useState(() => {
    try {
      const salvo = localStorage.getItem('operador_lanchonete');
      return salvo ? JSON.parse(salvo) : null;
    } catch {
      return null;
    }
  });

  const [usuarioInput, setUsuarioInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');
  const [erroAuth, setErroAuth] = useState(null);
  const [carregandoAuth, setCarregandoAuth] = useState(false);

  const [pedidos, setPedidos] = useState([]);
  const [menu, setMenu] = useState([]);
  const [logs, setLogs] = useState([]);
  const [ultimoPedidoChamado, setUltimoPedidoChamado] = useState(null);

  // Apply theme to html data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('tema_lanchonete', tema);
  }, [tema]);

  const toggleTema = () => {
    setTema(prev => prev === 'escuro' ? 'claro' : 'escuro');
  };

  // Fetch initial logs
  useEffect(() => {
    fetch('/api/logs')
      .then(res => res.json())
      .then(dados => setLogs(dados))
      .catch(err => console.error('Erro ao buscar logs:', err));
  }, []);

  // Login handler with backend password authentication
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErroAuth(null);

    if (!usuarioInput.trim() || !senhaInput.trim()) {
      setErroAuth('Preencha usuário e senha.');
      return;
    }

    setCarregandoAuth(true);

    fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usuario: usuarioInput.trim(),
        senha: senhaInput.trim()
      })
    })
      .then(res => res.json())
      .then(data => {
        setCarregandoAuth(false);
        if (data && data.status === 'success') {
          const userLogged = data.user;
          setOperador(userLogged);
          localStorage.setItem('operador_lanchonete', JSON.stringify(userLogged));

          // Auto-navigate to appropriate view based on role
          if (userLogged.role === 'cozinha') setVisaoAtiva('cozinha');
          else if (userLogged.role === 'tv') setVisaoAtiva('chamada');
          else setVisaoAtiva('caixa');
        } else {
          setErroAuth(data.error || 'Credenciais inválidas.');
        }
      })
      .catch(err => {
        setCarregandoAuth(false);
        setErroAuth('Erro de conexão com o servidor.');
      });
  };

  const handleLogout = () => {
    setOperador(null);
    localStorage.removeItem('operador_lanchonete');
    setUsuarioInput('');
    setSenhaInput('');
    setErroAuth(null);
  };

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Conectado ao servidor Socket.io');
      setConectado(true);
    });

    socket.on('disconnect', () => {
      console.log('Desconectado do servidor Socket.io');
      setConectado(false);
    });

    // Iniciais
    socket.on('pedidos_iniciais', (dados) => {
      setPedidos(Array.isArray(dados) ? dados : []);
    });

    socket.on('cardapio_inicial', (dados) => {
      setMenu(Array.isArray(dados) ? dados : (dados && Array.isArray(dados.produtos) ? dados.produtos : []));
    });

    // Eventos em tempo real
    socket.on('novo_pedido_criado', (novoPedido) => {
      setPedidos(prev => [novoPedido, ...prev.filter(p => p.id !== novoPedido.id)]);
    });

    socket.on('status_pedido_atualizado', (pedidoAtualizado) => {
      setPedidos(prev => prev.map(p => p.id === pedidoAtualizado.id ? pedidoAtualizado : p));
    });

    socket.on('pedido_chamado', (pedidoPronto) => {
      setUltimoPedidoChamado(pedidoPronto);
    });

    socket.on('cardapio_atualizado', (novoMenu) => {
      setMenu(Array.isArray(novoMenu) ? novoMenu : (novoMenu && Array.isArray(novoMenu.produtos) ? novoMenu.produtos : []));
    });

    socket.on('novo_log_auditoria', (novoLog) => {
      setLogs(prev => [novoLog, ...prev.filter(l => l.id !== novoLog.id)]);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pedidos_iniciais');
      socket.off('cardapio_inicial');
      socket.off('novo_pedido_criado');
      socket.off('status_pedido_atualizado');
      socket.off('pedido_chamado');
      socket.off('cardapio_atualizado');
      socket.off('novo_log_auditoria');
    };
  }, []);

  // Handlers para ações com rastreamento de operador
  const handleEnviarPedido = (pedidoData, callback) => {
    socket.emit('criar_pedido', {
      ...pedidoData,
      criadoPor: operador ? `${operador.nome}` : 'Caixa'
    }, callback);
  };

  const handleMudarStatus = (id, status) => {
    socket.emit('mudar_status_pedido', {
      id,
      status,
      preparadoPor: operador ? `${operador.nome}` : 'Cozinha'
    });
  };

  const handleAlternarItemEntregue = (orderId, itemIndex, entregue) => {
    // 1. Atualização Otimista Instantânea no Estado do React
    setPedidos(prev => prev.map(order => {
      if (order.id !== orderId) return order;

      const novosItens = (order.itens || []).map((item, idx) => {
        if (idx !== itemIndex) return item;
        const novoEntregue = entregue !== undefined ? entregue : !item.entregue;
        return { ...item, entregue: novoEntregue };
      });

      const totalCount = novosItens.reduce((acc, i) => acc + (i.quantidade || 1), 0);
      const entreguesCount = novosItens.filter(i => i.entregue).reduce((acc, i) => acc + (i.quantidade || 1), 0);

      let novoStatus = order.status;
      if (entreguesCount >= totalCount) novoStatus = 'entregue';
      else if (entreguesCount > 0) novoStatus = 'entrega_parcial';
      else if (order.status === 'entregue' || order.status === 'entrega_parcial') novoStatus = 'em_preparo';

      return {
        ...order,
        itens: novosItens,
        status: novoStatus
      };
    }));

    // 2. Transmissão em Tempo Real via Socket.io
    socket.emit('alternar_item_entregue', {
      orderId,
      itemIndex,
      entregue,
      operadorNome: operador ? `${operador.nome}` : 'Atendente'
    });

    // 3. Fallback via API REST HTTP
    fetch(`/api/orders/${orderId}/itens/${itemIndex}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        entregue,
        operadorNome: operador ? `${operador.nome}` : 'Atendente'
      })
    })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.order) {
          setPedidos(prev => prev.map(p => p.id === data.order.id ? data.order : p));
        }
      })
      .catch(err => console.error('Erro ao alternar item:', err));
  };

  const handleSalvarProduto = (produtoData) => {
    fetch('/api/menu/produto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(produtoData)
    })
      .then(res => res.json())
      .catch(err => console.error('Erro ao salvar produto:', err));
  };

  const handleExcluirProduto = (id) => {
    fetch(`/api/menu/produto/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .catch(err => console.error('Erro ao excluir produto:', err));
  };

  const handleToggleDisponivel = (id) => {
    fetch(`/api/menu/produto/${id}/disponivel`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .catch(err => console.error('Erro ao alterar disponibilidade:', err));
  };

  const handleSalvarCategoria = (categoriaData) => {
    fetch('/api/menu/categoria', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(categoriaData)
    })
      .then(res => res.json())
      .catch(err => console.error('Erro ao salvar categoria:', err));
  };

  const handleExcluirCategoria = (id) => {
    return fetch(`/api/menu/categoria/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json());
  };

  // IF NOT AUTHENTICATED: RENDER CLEAN AUTHENTICATION GATE SCREEN WITH PASSWORD
  if (!operador) {
    return (
      <div className="login-gate-screen">
        <style>{`
          .login-gate-screen {
            min-height: 100vh;
            min-height: 100dvh;
            background: var(--app-canvas);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
          }

          .login-gate-card {
            background: var(--app-surface-1);
            border: 1px solid var(--app-border);
            border-radius: var(--radius-lg);
            width: 100%;
            max-width: 440px;
            padding: 2rem;
            box-shadow: var(--shadow-lg);
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .login-brand {
            display: flex;
            align-items: center;
            gap: 0.85rem;
          }

          .login-brand-icon {
            background: var(--primary);
            color: var(--on-primary);
            padding: 0.6rem 0.8rem;
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 14px var(--primary-glow);
          }

          .login-brand-title {
            font-family: var(--font-display);
            font-size: 1.5rem;
            font-weight: 900;
            color: var(--text-title);
            line-height: 1.1;
          }

          .login-brand-subtitle {
            font-size: 0.82rem;
            color: var(--primary);
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
        `}</style>

        <div className="login-gate-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="login-brand">
              <div>
                <div className="login-brand-title">Festa do Morango</div>
                <div className="login-brand-subtitle">Desbravadores Apocalipse</div>
              </div>
            </div>

            {/* Alternador de tema na tela de login */}
            <button className="theme-toggle-btn" onClick={toggleTema} title="Alternar Tema">
              {tema === 'escuro' ? <Sun size={16} color="var(--status-preparo)" /> : <Moon size={16} color="var(--primary)" />}
            </button>
          </div>

          {erroAuth && (
            <div style={{ background: 'rgba(250, 15, 0, 0.15)', border: '1px solid var(--primary)', color: '#FF5247', padding: '0.75rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
              <AlertTriangle size={18} />
              <span>{erroAuth}</span>
            </div>
          )}

          {/* Formulário Autenticado Limpo */}
          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div className="form-group">
              <label className="form-label">Usuário *</label>
              <input
                type="text"
                className="form-input"
                placeholder="Digite seu usuário..."
                value={usuarioInput}
                onChange={(e) => setUsuarioInput(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <label className="form-label">Senha *</label>
              <input
                type="password"
                className="form-input"
                placeholder="Digite sua senha..."
                value={senhaInput}
                onChange={(e) => setSenhaInput(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={carregandoAuth}
              style={{ padding: '0.9rem', fontSize: '1.05rem', minHeight: '50px', marginTop: '0.5rem' }}
            >
              {carregandoAuth ? 'Autenticando...' : 'Entrar no Sistema'} <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // SYSTEM UNLOCKED - VERIFY PERMISSIONS FOR CURRENT ROLE
  const podeLancarPedidos = operador.role === 'master' || operador.role === 'caixa';
  const podeGerenciarCardapio = operador.role === 'master';
  const podeGerenciarUsuarios = operador.role === 'master';
  const podeVerVendas = operador.role === 'master' || operador.role === 'caixa';
  const podeVerLogs = operador.role === 'master' || operador.role === 'caixa';

  return (
    <div className="app-container">
      {/* Cabeçalho Principal Otimizado para Desktop e Mobile */}
      <header className="app-header">
        <div className="brand-logo">
          <div>
            <span style={{ display: 'block', lineHeight: 1.1 }}>Festa do Morango</span>
            <div className="brand-logo-subtitle" style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>
              Desbravadores Apocalipse
            </div>
          </div>
        </div>

        {/* Abas de Navegação Condicionais por Permissão */}
        <nav className="nav-tabs">
          {podeLancarPedidos && (
            <button
              className={`nav-btn ${visaoAtiva === 'caixa' ? 'active' : ''}`}
              onClick={() => setVisaoAtiva('caixa')}
            >
              <ShoppingBag size={18} /> Caixa
            </button>
          )}

          <button
            className={`nav-btn ${visaoAtiva === 'cozinha' ? 'active' : ''}`}
            onClick={() => setVisaoAtiva('cozinha')}
          >
            <ChefHat size={18} /> Cozinha (KDS)
          </button>

          <button
            className={`nav-btn ${visaoAtiva === 'chamada' ? 'active' : ''}`}
            onClick={() => setVisaoAtiva('chamada')}
          >
            <Tv size={18} /> Chamada TV
          </button>

          {podeVerVendas && (
            <button
              className={`nav-btn ${visaoAtiva === 'vendas' ? 'active' : ''}`}
              onClick={() => setVisaoAtiva('vendas')}
            >
              <BarChart3 size={18} /> Vendas
            </button>
          )}

          {podeVerLogs && (
            <button
              className={`nav-btn ${visaoAtiva === 'logs' ? 'active' : ''}`}
              onClick={() => setVisaoAtiva('logs')}
            >
              <History size={18} /> Logs
            </button>
          )}

          {podeGerenciarCardapio && (
            <button
              className={`nav-btn ${visaoAtiva === 'cardapio' ? 'active' : ''}`}
              onClick={() => setVisaoAtiva('cardapio')}
            >
              <Utensils size={18} /> Cardápio
            </button>
          )}

          {podeGerenciarUsuarios && (
            <button
              className={`nav-btn ${visaoAtiva === 'usuarios' ? 'active' : ''}`}
              onClick={() => setVisaoAtiva('usuarios')}
            >
              <Users size={18} /> Contas
            </button>
          )}
        </nav>

        {/* Ações do Cabeçalho: Operador + Tema + Status WebSocket */}
        <div className="header-actions">
          {/* Badge do Operador Logado Otimizado */}
          <button
            className="user-badge-btn"
            onClick={handleLogout}
            title={`Operador: ${operador.nome} (${operador.role.toUpperCase()}) - Clique para sair`}
          >
            <User size={15} style={{ flexShrink: 0 }} />
            <span className="user-badge-name">{operador.nome}</span>
            <LogOut size={13} style={{ flexShrink: 0, marginLeft: '2px' }} />
          </button>

          {/* Botão Tema Claro / Escuro Otimizado */}
          <button className="theme-toggle-btn" onClick={toggleTema} title="Alternar entre Tema Claro e Escuro">
            {tema === 'escuro' ? (
              <>
                <Sun size={16} color="var(--status-preparo)" />
                <span className="theme-label">Claro</span>
              </>
            ) : (
              <>
                <Moon size={16} color="var(--blue-link)" />
                <span className="theme-label">Escuro</span>
              </>
            )}
          </button>

          {/* Indicador de Status WebSocket Otimizado */}
          <div className="socket-status">
            <div className={`status-dot ${conectado ? 'connected' : 'disconnected'}`}></div>
            {conectado ? (
              <span className="socket-status-text" style={{ color: 'var(--status-pronto)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Wifi size={14} /> Online
              </span>
            ) : (
              <span className="socket-status-text" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <WifiOff size={14} /> Conectando...
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main-content">
        {visaoAtiva === 'caixa' && (
          podeLancarPedidos ? (
            <CaixaView menu={menu} operador={operador} onEnviarPedido={handleEnviarPedido} />
          ) : (
            <div style={{ background: 'var(--app-surface-1)', border: '1px solid var(--app-border)', borderRadius: 'var(--radius-lg)', padding: '3rem', textAlign: 'center', color: 'var(--app-ink-muted)' }}>
              <Lock size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h2 style={{ color: 'var(--text-title)' }}>Acesso Restrito ao Caixa</h2>
              <p style={{ marginTop: '0.5rem' }}>Sua conta ({operador.role}) tem acesso apenas para preparar pedidos e chamar no balcão.</p>
            </div>
          )
        )}

        {visaoAtiva === 'cozinha' && (
          <CozinhaView
            pedidos={pedidos}
            operador={operador}
            onMudarStatus={handleMudarStatus}
            onAlternarItemEntregue={handleAlternarItemEntregue}
          />
        )}

        {visaoAtiva === 'chamada' && (
          <ChamadaView
            pedidos={pedidos}
            ultimoPedidoChamado={ultimoPedidoChamado}
            onMudarStatus={handleMudarStatus}
            onAlternarItemEntregue={handleAlternarItemEntregue}
          />
        )}

        {visaoAtiva === 'vendas' && (
          <VendasView pedidos={pedidos} operador={operador} />
        )}

        {visaoAtiva === 'logs' && (
          <LogsView logs={logs} operador={operador} />
        )}

        {visaoAtiva === 'cardapio' && (
          podeGerenciarCardapio ? (
            <CardapioView
              menu={menu}
              onSalvarProduto={handleSalvarProduto}
              onExcluirProduto={handleExcluirProduto}
              onToggleDisponivel={handleToggleDisponivel}
              onSalvarCategoria={handleSalvarCategoria}
              onExcluirCategoria={handleExcluirCategoria}
            />
          ) : (
            <div style={{ background: 'var(--app-surface-1)', border: '1px solid var(--app-border)', borderRadius: 'var(--radius-lg)', padding: '3rem', textAlign: 'center', color: 'var(--app-ink-muted)' }}>
              <Lock size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h2 style={{ color: 'var(--text-title)' }}>Acesso Restrito à Gestão do Cardápio</h2>
              <p style={{ marginTop: '0.5rem' }}>Apenas a Conta Master pode cadastrar ou alterar produtos do cardápio.</p>
            </div>
          )
        )}

        {visaoAtiva === 'usuarios' && (
          <UsuariosView operador={operador} />
        )}
      </main>

      {/* Navegação Inferior Exclusiva para Mobile (< 1024px) */}
      <nav className="mobile-bottom-nav">
        <div className="mobile-nav-items">
          {podeLancarPedidos && (
            <button
              className={`mobile-nav-item ${visaoAtiva === 'caixa' ? 'active' : ''}`}
              onClick={() => setVisaoAtiva('caixa')}
            >
              <ShoppingBag size={20} />
              <span>Caixa</span>
            </button>
          )}

          <button
            className={`mobile-nav-item ${visaoAtiva === 'cozinha' ? 'active' : ''}`}
            onClick={() => setVisaoAtiva('cozinha')}
          >
            <ChefHat size={20} />
            <span>Cozinha</span>
          </button>

          <button
            className={`mobile-nav-item ${visaoAtiva === 'chamada' ? 'active' : ''}`}
            onClick={() => setVisaoAtiva('chamada')}
          >
            <Tv size={20} />
            <span>TV Balcão</span>
          </button>

          {podeVerVendas && (
            <button
              className={`mobile-nav-item ${visaoAtiva === 'vendas' ? 'active' : ''}`}
              onClick={() => setVisaoAtiva('vendas')}
            >
              <BarChart3 size={20} />
              <span>Vendas</span>
            </button>
          )}

          {podeVerLogs && (
            <button
              className={`mobile-nav-item ${visaoAtiva === 'logs' ? 'active' : ''}`}
              onClick={() => setVisaoAtiva('logs')}
            >
              <History size={20} />
              <span>Logs</span>
            </button>
          )}

          {podeGerenciarCardapio && (
            <button
              className={`mobile-nav-item ${visaoAtiva === 'cardapio' ? 'active' : ''}`}
              onClick={() => setVisaoAtiva('cardapio')}
            >
              <Utensils size={20} />
              <span>Cardápio</span>
            </button>
          )}

          {podeGerenciarUsuarios && (
            <button
              className={`mobile-nav-item ${visaoAtiva === 'usuarios' ? 'active' : ''}`}
              onClick={() => setVisaoAtiva('usuarios')}
            >
              <Users size={20} />
              <span>Contas</span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
