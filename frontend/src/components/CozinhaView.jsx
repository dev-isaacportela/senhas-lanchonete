import React, { useState, useEffect } from 'react';
import { ChefHat, Clock, Play, Bell, AlertTriangle, CheckCircle, MessageSquare, User, Filter } from 'lucide-react';

export default function CozinhaView({ pedidos, operador, onMudarStatus }) {
  const [agora, setAgora] = useState(Date.now());
  const [filtro, setFiltro] = useState('ativos'); // ativos | pendentes | preparo | meus

  // Timer tick for wait time updating every second
  useEffect(() => {
    const timer = setInterval(() => {
      setAgora(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pedidosAtivos = pedidos.filter(p => p.status === 'pendente' || p.status === 'em_preparo');

  const pedidosExibidos = pedidosAtivos.filter(p => {
    if (filtro === 'pendentes') return p.status === 'pendente';
    if (filtro === 'preparo') return p.status === 'em_preparo';
    if (filtro === 'meus' && operador) return p.preparadoPor && p.preparadoPor.includes(operador.nome);
    return true; // todos os ativos
  });

  const calcularEsperaMinutos = (criadoEm) => {
    const inicio = new Date(criadoEm).getTime();
    const diffMs = agora - inicio;
    return Math.floor(diffMs / 60000);
  };

  const formatarTempoEspera = (criadoEm) => {
    const inicio = new Date(criadoEm).getTime();
    const diffMs = Math.max(0, agora - inicio);
    const min = Math.floor(diffMs / 60000);
    const seg = Math.floor((diffMs % 60000) / 1000);
    return `${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;
  };

  const getCorStatusEspera = (criadoEm) => {
    const min = calcularEsperaMinutos(criadoEm);
    if (min >= 10) return 'urgente';
    if (min >= 5) return 'alerta';
    return 'normal';
  };

  return (
    <div className="cozinha-container">
      <style>{`
        .cozinha-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cozinha-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--app-surface-1);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--app-border);
        }

        @media (max-width: 768px) {
          .cozinha-header {
            flex-direction: column;
            align-items: stretch;
            gap: 0.85rem;
            padding: 0.85rem;
          }
          .cozinha-header .nav-tabs {
            display: flex !important;
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            padding: 0.25rem;
          }
        }

        .cozinha-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }

        .kds-card {
          background: var(--app-surface-1);
          border: 2px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-md);
          transition: border-color 130ms ease, transform 130ms ease;
        }

        .kds-card.normal {
          border-color: rgba(45, 157, 120, 0.4);
        }

        .kds-card.alerta {
          border-color: var(--status-preparo);
        }

        .kds-card.urgente {
          border-color: var(--primary);
          box-shadow: 0 0 15px rgba(250, 15, 0, 0.4);
          animation: pulseBorder 1.5s infinite;
        }

        @keyframes pulseBorder {
          0%, 100% { border-color: var(--primary); }
          50% { border-color: #ff5247; }
        }

        .kds-card-header {
          background: var(--app-surface-2);
          padding: 0.9rem 1rem;
          border-bottom: 1px solid var(--app-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .comanda-num {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1.6rem;
          color: var(--text-title);
          line-height: 1;
        }

        .cliente-nome {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--blue-link);
        }

        .preparador-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--status-preparo);
          background: rgba(230, 134, 25, 0.12);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(230, 134, 25, 0.3);
          margin-top: 0.2rem;
        }

        .timer-box {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-family: monospace;
          font-size: 1.05rem;
          font-weight: 700;
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-sm);
          background: var(--app-canvas);
        }

        .timer-box.normal { color: var(--status-pronto); }
        .timer-box.alerta { color: var(--status-preparo); }
        .timer-box.urgente { color: var(--primary); }

        .kds-card-body {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .kds-item-row {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
        }

        .kds-item-row:last-child {
          border-bottom: none;
        }

        .item-line {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
        }

        .item-qtd-badge {
          background: var(--primary);
          color: var(--on-primary);
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 0.95rem;
          width: 26px;
          height: 26px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .item-titulo {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-title);
        }

        .item-obs-highlight {
          background: rgba(255, 229, 143, 0.12);
          color: var(--text-obs);
          border: 1px solid rgba(255, 229, 143, 0.3);
          border-radius: var(--radius-sm);
          padding: 0.3rem 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.2rem;
        }

        .kds-card-footer {
          padding: 0.8rem 1rem;
          background: var(--app-surface-2);
          border-top: 1px solid var(--app-border);
        }

        .btn-kds {
          width: 100%;
          padding: 0.85rem;
          font-size: 1rem;
          border-radius: var(--radius-md);
        }

        .kds-vazio {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 1rem;
          background: var(--app-surface-1);
          border-radius: var(--radius-lg);
          border: 1px dashed var(--app-border);
          color: var(--app-ink-muted);
          gap: 0.8rem;
        }
      `}</style>

      {/* Barra de Controle do KDS */}
      <div className="cozinha-header">
        <div className="view-title" style={{ margin: 0 }}>
          <ChefHat size={26} color="var(--status-preparo)" />
          <span>Painel da Cozinha (KDS)</span>
        </div>

        {/* Filtros rápidos */}
        <div className="nav-tabs">
          <button
            className={`nav-btn ${filtro === 'ativos' ? 'active' : ''}`}
            onClick={() => setFiltro('ativos')}
          >
            Todos ({pedidosAtivos.length})
          </button>
          <button
            className={`nav-btn ${filtro === 'pendentes' ? 'active' : ''}`}
            onClick={() => setFiltro('pendentes')}
          >
            Novos ({pedidosAtivos.filter(p => p.status === 'pendente').length})
          </button>
          <button
            className={`nav-btn ${filtro === 'preparo' ? 'active' : ''}`}
            onClick={() => setFiltro('preparo')}
          >
            Em Preparo ({pedidosAtivos.filter(p => p.status === 'em_preparo').length})
          </button>
          {operador && (
            <button
              className={`nav-btn ${filtro === 'meus' ? 'active' : ''}`}
              onClick={() => setFiltro('meus')}
            >
              Meus Pedidos ({pedidosAtivos.filter(p => p.preparadoPor && p.preparadoPor.includes(operador.nome)).length})
            </button>
          )}
        </div>
      </div>

      {/* Grade de Cartões KDS */}
      <div className="cozinha-grid">
        {pedidosExibidos.length === 0 ? (
          <div className="kds-vazio">
            <CheckCircle size={48} color="var(--status-pronto)" />
            <h3 style={{ color: 'var(--text-title)' }}>Nenhum pedido pendente nesta visualização!</h3>
            <p>Os pedidos criados no caixa aparecerão automaticamente aqui.</p>
          </div>
        ) : (
          pedidosExibidos.map(order => {
            const nivelEspera = getCorStatusEspera(order.criadoEm);
            const tempoStr = formatarTempoEspera(order.criadoEm);

            return (
              <div key={order.id} className={`kds-card ${nivelEspera}`}>
                {/* Cabeçalho do Cartão */}
                <div className="kds-card-header">
                  <div>
                    <div className="comanda-num">#{order.numero}</div>
                    <div className="cliente-nome">{order.cliente}</div>
                    {order.formaPagamento === 'pagar_depois' ? (
                      <span className="badge badge-preparo" style={{ fontSize: '0.72rem', marginTop: '0.2rem' }}>
                        Pagar Depois ({order.dataCobranca ? new Date(order.dataCobranca).toLocaleDateString() : 'Sem data'})
                      </span>
                    ) : (
                      <span className="badge badge-pendente" style={{ fontSize: '0.72rem', marginTop: '0.2rem' }}>
                        {order.formaPagamento ? order.formaPagamento.toUpperCase() : 'PIX'}
                      </span>
                    )}
                    {order.preparadoPor && (
                      <div className="preparador-badge">
                        <User size={12} />
                        <span>Preparo: {order.preparadoPor}</span>
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
                    <span className={`badge badge-${order.status === 'pendente' ? 'pendente' : 'preparo'}`}>
                      {order.status === 'pendente' ? 'Novo' : 'Em Preparo'}
                    </span>
                    <div className={`timer-box ${nivelEspera}`}>
                      <Clock size={14} />
                      <span>{tempoStr}</span>
                    </div>
                  </div>
                </div>

                {/* Itens do Pedido */}
                <div className="kds-card-body">
                  {order.itens.map((item, idx) => (
                    <div key={idx} className="kds-item-row">
                      <div className="item-line">
                        <span className="item-qtd-badge">{item.quantidade}x</span>
                        <span className="item-titulo">{item.nome}</span>
                      </div>
                      {item.observacao && (
                        <div className="item-obs-highlight">
                          <MessageSquare size={13} color="var(--text-obs)" />
                          <span>OBS: {item.observacao}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Ações da Cozinha (1 Clique com atribuição de operador) */}
                <div className="kds-card-footer">
                  {order.status === 'pendente' ? (
                    <button
                      className="btn btn-warning btn-kds"
                      onClick={() => onMudarStatus(order.id, 'em_preparo')}
                    >
                      <Play size={18} /> Iniciar Preparo
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-kds"
                      onClick={() => onMudarStatus(order.id, 'pronto')}
                    >
                      <Bell size={18} /> Pronto / Chamar Cliente
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
