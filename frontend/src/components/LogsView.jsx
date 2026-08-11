import React, { useState } from 'react';
import { History, Search, Clock, User, PlusCircle, ChefHat, Bell, CheckCircle2, ShieldAlert, PackageCheck, FileText } from 'lucide-react';

export default function LogsView({ logs, operador }) {
  const [busca, setBusca] = useState('');
  const [filtroAcao, setFiltroAcao] = useState('todas'); // todas | criacao | preparo | pronto | entregue

  const podeVerLogs = operador && (operador.role === 'master' || operador.role === 'caixa');

  if (!podeVerLogs) {
    return (
      <div style={{ background: 'var(--app-surface-1)', border: '1px solid var(--app-border)', borderRadius: 'var(--radius-lg)', padding: '3rem', textAlign: 'center', color: 'var(--app-ink-muted)' }}>
        <ShieldAlert size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
        <h2 style={{ color: 'var(--text-title)' }}>Acesso Restrito aos Logs de Auditoria</h2>
        <p style={{ marginTop: '0.5rem' }}>Esta tela de auditoria é reservada para perfis Master ou Caixa.</p>
      </div>
    );
  }

  // Filter logs
  const logsFiltrados = logs.filter(l => {
    const bateAcao = filtroAcao === 'todas' || l.acao === filtroAcao;
    const buscaLower = busca.toLowerCase().trim();
    const bateBusca = !buscaLower ||
      String(l.numeroPedido).includes(buscaLower) ||
      (l.cliente && l.cliente.toLowerCase().includes(buscaLower)) ||
      (l.usuario && l.usuario.toLowerCase().includes(buscaLower)) ||
      (l.descricao && l.descricao.toLowerCase().includes(buscaLower));
    return bateAcao && bateBusca;
  });

  const getAcaoBadge = (acao) => {
    switch (acao) {
      case 'criacao':
        return (
          <span className="badge badge-pendente" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            <PlusCircle size={13} /> Criação Caixa
          </span>
        );
      case 'preparo':
        return (
          <span className="badge badge-preparo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            <ChefHat size={13} /> Em Preparo
          </span>
        );
      case 'pronto':
        return (
          <span className="badge badge-pronto" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            <Bell size={13} /> Pronto / Chamada TV
          </span>
        );
      case 'entregue':
        return (
          <span className="badge badge-entregue" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            <CheckCircle2 size={13} /> Entregue
          </span>
        );
      default:
        return <span className="badge badge-entregue">{acao}</span>;
    }
  };

  return (
    <div className="logs-container">
      <style>{`
        .logs-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .logs-topbar {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          box-shadow: var(--shadow-md);
        }

        .logs-pills-bar {
          display: flex;
          gap: 0.4rem;
          overflow-x: auto;
          padding-bottom: 0.3rem;
          -webkit-overflow-scrolling: touch;
        }

        .logs-table-wrapper {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          box-shadow: var(--shadow-md);
        }

        .logs-table {
          width: 100%;
          min-width: 800px;
          border-collapse: collapse;
          text-align: left;
        }

        .logs-table th {
          background: var(--app-surface-2);
          padding: 0.9rem 1rem;
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--app-border);
        }

        .logs-table td {
          padding: 0.9rem 1rem;
          border-bottom: 1px solid var(--app-border);
          color: var(--app-ink);
          vertical-align: top;
        }

        .logs-table tr:hover td {
          background: var(--app-surface-2);
        }

        .log-time {
          font-family: monospace;
          font-size: 0.85rem;
          color: var(--app-ink-muted);
          white-space: nowrap;
        }

        .item-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-sm);
          padding: 0.25rem 0.5rem;
          font-size: 0.82rem;
          color: var(--text-title);
        }
      `}</style>

      {/* Cabeçalho */}
      <div className="logs-topbar">
        <div className="view-title" style={{ margin: 0 }}>
          <History size={26} color="var(--primary)" />
          <span>Logs de Auditoria & Detalhamento de Itens</span>
        </div>

        {/* Busca por comanda, operador ou descrição */}
        <div className="search-box">
          <Search size={18} color="var(--app-ink-muted)" />
          <input
            type="text"
            className="search-input"
            placeholder="Buscar por comanda, cliente ou operador..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>

      {/* Filtros de Ação */}
      <div className="logs-pills-bar">
        <button
          className={`cat-pill-btn ${filtroAcao === 'todas' ? 'active' : ''}`}
          onClick={() => setFiltroAcao('todas')}
        >
          Todos os Logs ({logs.length})
        </button>
        <button
          className={`cat-pill-btn ${filtroAcao === 'criacao' ? 'active' : ''}`}
          onClick={() => setFiltroAcao('criacao')}
        >
          Criação ({logs.filter(l => l.acao === 'criacao').length})
        </button>
        <button
          className={`cat-pill-btn ${filtroAcao === 'preparo' ? 'active' : ''}`}
          onClick={() => setFiltroAcao('preparo')}
        >
          Preparo ({logs.filter(l => l.acao === 'preparo').length})
        </button>
        <button
          className={`cat-pill-btn ${filtroAcao === 'pronto' ? 'active' : ''}`}
          onClick={() => setFiltroAcao('pronto')}
        >
          Chamada TV ({logs.filter(l => l.acao === 'pronto').length})
        </button>
        <button
          className={`cat-pill-btn ${filtroAcao === 'entregue' ? 'active' : ''}`}
          onClick={() => setFiltroAcao('entregue')}
        >
          Entregas ({logs.filter(l => l.acao === 'entregue').length})
        </button>
      </div>

      {/* Tabela de Logs */}
      <div className="logs-table-wrapper">
        <table className="logs-table">
          <thead>
            <tr>
              <th>Horário</th>
              <th>Operador</th>
              <th>Ação</th>
              <th>Comanda / Cliente</th>
              <th>Descrição & Detalhes dos Itens / Valores</th>
            </tr>
          </thead>
          <tbody>
            {logsFiltrados.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--app-ink-muted)' }}>
                  Nenhum registro de auditoria encontrado.
                </td>
              </tr>
            ) : (
              logsFiltrados.map(log => {
                const dateObj = new Date(log.timestamp);
                const dataHoraStr = `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;

                return (
                  <tr key={log.id}>
                    <td>
                      <div className="log-time" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Clock size={13} />
                        <span>{dataHoraStr}</span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--text-title)', whiteSpace: 'nowrap' }}>
                        <User size={14} color="var(--primary)" />
                        <span>{log.usuario}</span>
                      </div>
                    </td>
                    <td>{getAcaoBadge(log.acao)}</td>
                    <td>
                      <strong style={{ color: 'var(--primary)' }}>#{log.numeroPedido}</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--app-ink-muted)', marginLeft: '6px' }}>
                        ({log.cliente})
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.9rem', color: 'var(--app-ink)', fontWeight: 600 }}>
                        {log.descricao}
                      </div>

                      {/* Exibição Estruturada de Itens e Preços se disponíveis */}
                      {log.itens && Array.isArray(log.itens) && log.itens.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                          {log.itens.map((it, idx) => (
                            <div key={idx} className="item-chip">
                              <PackageCheck size={12} color="var(--status-pronto)" />
                              <strong style={{ color: 'var(--primary)' }}>{it.quantidade}x</strong>
                              <span>{it.nome}</span>
                              <span style={{ color: 'var(--status-pronto)', fontWeight: 700 }}>
                                (R$ {(it.preco * it.quantidade).toFixed(2)})
                              </span>
                              {it.observacao && (
                                <span style={{ color: 'var(--text-obs)', fontSize: '0.78rem' }}>
                                  [{it.observacao}]
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
