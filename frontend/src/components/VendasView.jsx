import React from 'react';
import { DollarSign, BarChart3, ShoppingBag, TrendingUp, CheckCircle, Clock, ShieldAlert, Award, Calendar, Check, AlertTriangle, CreditCard, Phone } from 'lucide-react';

export default function VendasView({ pedidos, operador }) {
  // Check permission (Master or Caixa only)
  const temPermissao = operador && (operador.role === 'master' || operador.role === 'caixa');

  if (!temPermissao) {
    return (
      <div style={{ background: 'var(--app-surface-1)', border: '1px solid var(--app-border)', borderRadius: 'var(--radius-lg)', padding: '3rem', textAlign: 'center', color: 'var(--app-ink-muted)' }}>
        <ShieldAlert size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
        <h2 style={{ color: 'var(--text-title)' }}>Acesso Restrito ao Financeiro</h2>
        <p style={{ marginTop: '0.5rem' }}>Esta visão de faturamento é reservada apenas para Contas Master ou Caixa.</p>
      </div>
    );
  }

  const handleQuitarPagamento = (pedidoId) => {
    if (window.confirm('Deseja confirmar a quitação/recebimento deste pedido pendente?')) {
      fetch(`/api/orders/${pedidoId}/pagamento`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          statusPagamento: 'pago'
        })
      })
        .then(res => res.json())
        .catch(err => console.error('Erro ao quitar pagamento:', err));
    }
  };

  // Helper robusto para determinar se o pedido está pendente de cobrança/pagamento
  const isPendente = (p) => {
    if (p.statusPagamento === 'pago') return false;
    return p.statusPagamento === 'pendente_pagamento' || p.formaPagamento === 'pagar_depois';
  };

  // Calculate Sales Metrics
  const pedidosValidos = pedidos.filter(p => p.status !== 'cancelado');
  const pedidosPagos = pedidosValidos.filter(p => !isPendente(p));
  const pedidosPendentesPgto = pedidosValidos.filter(p => isPendente(p));

  const totalFaturamento = pedidosPagos.reduce((acc, p) => acc + (Number(p.total) || 0), 0);
  const totalPendenteCobrar = pedidosPendentesPgto.reduce((acc, p) => acc + (Number(p.total) || 0), 0);
  
  const totalPedidos = pedidosValidos.length;
  const ticketMedio = totalPedidos > 0 ? (totalFaturamento + totalPendenteCobrar) / totalPedidos : 0;

  const getFormaPgtoBadge = (p) => {
    if (p.formaPagamento === 'pagar_depois' || p.statusPagamento === 'pendente_pagamento') {
      const dataStr = p.dataCobranca ? new Date(p.dataCobranca).toLocaleDateString() : 'Sem Data';
      if (p.statusPagamento === 'pago') {
        return (
          <span className="badge badge-pronto">
            <Check size={12} /> Pagar Depois (Quitado {dataStr})
          </span>
        );
      }
      return (
        <span className="badge badge-preparo">
          <Clock size={12} /> Pagar Depois (Cobrar: {dataStr})
        </span>
      );
    }

    return (
      <span className="badge badge-pendente">
        <CreditCard size={12} /> {p.formaPagamento ? p.formaPagamento.toUpperCase() : 'PIX'}
      </span>
    );
  };

  return (
    <div className="vendas-container">
      <style>{`
        .vendas-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .vendas-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--app-surface-1);
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--app-border);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
        }

        .metric-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .metric-icon-box {
          background: rgba(21, 107, 22, 0.12);
          color: var(--primary);
          padding: 0.75rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metric-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .metric-value {
          font-family: var(--font-title);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-title);
          line-height: 1.1;
        }

        .vendas-table-wrapper {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .vendas-table {
          width: 100%;
          min-width: 800px;
          border-collapse: collapse;
          text-align: left;
        }

        .vendas-table th {
          background: var(--app-surface-2);
          padding: 0.9rem 1rem;
          font-family: var(--font-title);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--app-border);
        }

        .vendas-table td {
          padding: 0.9rem 1rem;
          border-bottom: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
        }

        .vendas-table tr:hover td {
          background: var(--app-surface-2);
        }
      `}</style>

      {/* Cabeçalho de Faturamento */}
      <div className="vendas-header">
        <div className="view-title" style={{ margin: 0 }}>
          <BarChart3 size={26} color="var(--primary)" />
          <span>Faturamento & Controle de Cobrança (Pagar Depois)</span>
        </div>
        <div className="badge badge-pronto">
          <span>Relatório em Tempo Real</span>
        </div>
      </div>

      {/* Grade de Métricas Financeiras */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon-box" style={{ background: 'var(--color-primary-bg)', color: 'var(--color-primary)' }}>
            <DollarSign size={28} />
          </div>
          <div>
            <div className="metric-label">Total Recebido / Pago</div>
            <div className="metric-value" style={{ color: 'var(--color-primary)' }}>
              R$ {totalFaturamento.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box" style={{ background: 'var(--color-attention-bg)', color: 'var(--color-attention)' }}>
            <Calendar size={28} />
          </div>
          <div>
            <div className="metric-label">Pendente (Pagar Depois)</div>
            <div className="metric-value" style={{ color: 'var(--color-attention)' }}>
              R$ {totalPendenteCobrar.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box" style={{ background: '#e6f9f0', color: '#0d8a57' }}>
            <ShoppingBag size={28} />
          </div>
          <div>
            <div className="metric-label">Total de Comandas</div>
            <div className="metric-value">{totalPedidos} comanda(s)</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box">
            <TrendingUp size={28} />
          </div>
          <div>
            <div className="metric-label">Ticket Médio</div>
            <div className="metric-value">R$ {ticketMedio.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* Histórico de Comandas e Status de Pagamento */}
      <div className="vendas-table-wrapper">
        <table className="vendas-table">
          <thead>
            <tr>
              <th>Comanda</th>
              <th>Cliente / Contato</th>
              <th>Pagamento</th>
              <th>Valor Total</th>
              <th>Status Pedido</th>
              <th>Atendente / Cozinha</th>
              <th style={{ textAlign: 'right' }}>Ação de Quitação</th>
            </tr>
          </thead>
          <tbody>
            {pedidosValidos.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--app-ink-muted)' }}>
                  Nenhum pedido registrado no sistema ainda.
                </td>
              </tr>
            ) : (
              pedidosValidos.map(p => (
                <tr key={p.id}>
                  <td><strong style={{ color: 'var(--text-title)' }}>#{p.numero}</strong></td>
                  <td>
                    <strong style={{ color: 'var(--primary)' }}>{p.cliente}</strong>
                    {p.telefoneCliente && (
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-attention)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '2px', fontWeight: 600 }}>
                        <Phone size={12} />
                        <span>{p.telefoneCliente}</span>
                      </div>
                    )}
                  </td>
                  <td>{getFormaPgtoBadge(p)}</td>
                  <td><strong style={{ color: 'var(--color-primary)' }}>R$ {(Number(p.total) || 0).toFixed(2)}</strong></td>
                  <td>
                    <span className={`badge badge-${p.status === 'pronto' ? 'pronto' : (p.status === 'entregue' ? 'entregue' : 'preparo')}`}>
                      {p.status.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.85rem' }}>
                    <div>Lançado: <strong>{p.criadoPor || 'Caixa'}</strong></div>
                    {p.preparadoPor && <div style={{ color: 'var(--app-ink-muted)' }}>Preparo: {p.preparadoPor}</div>}
                  </td>
                  <td>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      {isPendente(p) ? (
                        <button
                          className="btn btn-warning"
                          style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem' }}
                          onClick={() => handleQuitarPagamento(p.id)}
                        >
                          <Check size={14} /> Quitar / Marcar Pago
                        </button>
                      ) : (
                        <span style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <CheckCircle size={15} /> Quitado
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
