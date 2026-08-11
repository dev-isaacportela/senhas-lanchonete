import React, { useState, useEffect } from 'react';
import { Tv, Volume2, VolumeX, CheckCircle, Bell, ArrowRight, UserCheck } from 'lucide-react';
import { playChimeSound } from '../utils/audioChime';

export default function ChamadaView({ pedidos, ultimoPedidoChamado, onMudarStatus }) {
  const [somAtivo, setSomAtivo] = useState(true);

  // Trigger sound chime whenever a new order is called
  useEffect(() => {
    if (ultimoPedidoChamado && somAtivo) {
      playChimeSound();
    }
  }, [ultimoPedidoChamado, somAtivo]);

  const pedidosProntos = pedidos.filter(p => p.status === 'pronto');
  const pedidosEntregues = pedidos
    .filter(p => p.status === 'entregue')
    .slice(0, 8); // Mostrar os últimos 8 entregues

  const pedidoEmDestaque = ultimoPedidoChamado && ultimoPedidoChamado.status === 'pronto'
    ? ultimoPedidoChamado
    : pedidosProntos[0];

  return (
    <div className="chamada-tv-container">
      <style>{`
        .chamada-tv-container {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 1.25rem;
          height: calc(100dvh - 110px);
        }

        @media (max-width: 1024px) {
          .chamada-tv-container {
            grid-template-columns: 1fr;
            height: auto !important;
          }
        }

        .tv-main-panel {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          box-shadow: var(--shadow-lg);
        }

        .tv-panel-controls {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .destaque-label {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--status-pronto);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }

        .destaque-card {
          width: 100%;
          max-width: 700px;
          background: var(--app-surface-2);
          border: 3px solid var(--status-pronto);
          border-radius: var(--radius-lg);
          padding: clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 1.5rem);
          box-shadow: var(--glow-pronto);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .destaque-comanda {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 10vw, 4.5rem);
          font-weight: 900;
          color: var(--text-title);
          line-height: 1;
        }

        .destaque-cliente {
          font-family: var(--font-display);
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 900;
          color: var(--status-pronto);
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.1;
          word-break: break-word;
          text-shadow: 0 0 25px rgba(45, 157, 120, 0.4);
        }

        .destaque-acoes {
          margin-top: 1.25rem;
        }

        .tv-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .sidebar-section {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }

        .sidebar-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-title);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid var(--app-border);
          padding-bottom: 0.6rem;
        }

        .prontos-lista {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          overflow-y: auto;
          max-height: 280px;
        }

        @media (max-width: 1024px) {
          .prontos-lista {
            max-height: none !important;
            overflow-y: visible !important;
          }
        }

        .pronto-item {
          background: var(--app-surface-2);
          border: 1px solid var(--status-pronto);
          border-radius: var(--radius-md);
          padding: 0.8rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 130ms ease;
        }

        .pronto-item:hover {
          background: var(--app-border);
          transform: translateX(4px);
        }

        .entregues-lista {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .entregue-chip {
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          color: var(--app-ink-muted);
          padding: 0.4rem 0.7rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .chamada-vazio {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--app-ink-muted);
          padding: 3rem 1rem;
        }
      `}</style>

      {/* Painel Principal de Chamada (Destaque TV) */}
      <div className="tv-main-panel">
        <div className="tv-panel-controls">
          <button
            className={`btn btn-secondary ${somAtivo ? '' : 'muted'}`}
            style={{ padding: '0.4rem 0.8rem' }}
            onClick={() => {
              setSomAtivo(!somAtivo);
              if (!somAtivo) playChimeSound();
            }}
          >
            {somAtivo ? <Volume2 size={18} color="var(--status-pronto)" /> : <VolumeX size={18} color="var(--primary)" />}
            <span style={{ fontSize: '0.85rem' }}>{somAtivo ? 'Som Ativo' : 'Mudo'}</span>
          </button>
        </div>

        <div className="destaque-label">
          <Bell size={22} color="var(--status-pronto)" />
          <span>Pronto para Retirada no Balcão</span>
        </div>

        {pedidoEmDestaque ? (
          <div className="destaque-card">
            <div className="destaque-comanda">#{pedidoEmDestaque.numero}</div>
            <div className="destaque-cliente">{pedidoEmDestaque.cliente}</div>
            
            <div className="destaque-acoes">
              <button
                className="btn btn-success"
                style={{ padding: '0.9rem 2rem', fontSize: '1.15rem', borderRadius: 'var(--radius-md)' }}
                onClick={() => onMudarStatus(pedidoEmDestaque.id, 'entregue')}
              >
                <UserCheck size={22} /> Marcar como Entregue
              </button>
            </div>
          </div>
        ) : (
          <div className="chamada-vazio">
            <Tv size={64} strokeWidth={1.5} color="var(--app-ink-muted)" />
            <h2 style={{ color: 'var(--text-title)' }}>Aguardando Próximo Pedido...</h2>
            <p>Os nomes dos clientes aparecerão aqui assim que a cozinha marcar o pedido como pronto.</p>
          </div>
        )}
      </div>

      {/* Barra Lateral: Fila de Prontos & Histórico de Entregues */}
      <div className="tv-sidebar">
        {/* Outros Prontos */}
        <div className="sidebar-section">
          <div className="sidebar-title">
            <CheckCircle size={18} color="var(--status-pronto)" />
            <span>Fila no Balcão ({pedidosProntos.length})</span>
          </div>

          <div className="prontos-lista">
            {pedidosProntos.length === 0 ? (
              <span style={{ fontSize: '0.85rem', color: 'var(--app-ink-muted)', textAlign: 'center', padding: '1rem 0' }}>
                Nenhum outro pedido pronto no momento.
              </span>
            ) : (
              pedidosProntos.map(p => (
                <div
                  key={p.id}
                  className="pronto-item"
                  onClick={() => onMudarStatus(p.id, 'entregue')}
                >
                  <div>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--text-title)' }}>#{p.numero}</strong>
                    <div style={{ color: 'var(--status-pronto)', fontWeight: 700, fontSize: '0.95rem' }}>{p.cliente}</div>
                  </div>
                  <button className="btn btn-secondary" style={{ padding: '0.4rem 0.6rem', fontSize: '0.8rem' }}>
                    Entregue <ArrowRight size={14} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Histórico Entregues */}
        <div className="sidebar-section">
          <div className="sidebar-title">
            <UserCheck size={18} color="var(--app-ink-muted)" />
            <span>Últimos Entregues</span>
          </div>
          <div className="entregues-lista">
            {pedidosEntregues.length === 0 ? (
              <span style={{ fontSize: '0.85rem', color: 'var(--app-ink-muted)' }}>Nenhum pedido entregue ainda.</span>
            ) : (
              pedidosEntregues.map(p => (
                <div key={p.id} className="entregue-chip">
                  <span>#{p.numero}</span>
                  <strong style={{ color: 'var(--app-ink)' }}>{p.cliente}</strong>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
