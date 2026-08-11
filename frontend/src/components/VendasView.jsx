import React, { useState } from 'react';
import { DollarSign, BarChart3, ShoppingBag, TrendingUp, CheckCircle, Clock, ShieldAlert, Calendar, Check, CreditCard, Phone, ChevronDown, ChevronUp, User, Search, Filter, RefreshCw, FileText, Tag, ArrowRight, Layers } from 'lucide-react';

export default function VendasView({ pedidos, operador }) {
  const [expandidoId, setExpandidoId] = useState(null);
  
  // Filtros de Período e Busca
  const [filtroPeriodo, setFiltroPeriodo] = useState('hoje'); // hoje | ontem | 7dias | todos | custom
  const [filtroStatus, setFiltroStatus] = useState('todos'); // todos | pagos | fiado | entregues | cancelados
  const [busca, setBusca] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

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

  const toggleExpandir = (id) => {
    setExpandidoId(prev => prev === id ? null : id);
  };

  const handleQuitarPagamento = (e, pedidoId) => {
    e.stopPropagation();
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

  // Filtragem de Pedidos por Período, Status e Busca
  const pedidosFiltrados = pedidos.filter(p => {
    // 1. Filtro por Busca (Comanda, Cliente, Telefone)
    if (busca.trim()) {
      const q = busca.toLowerCase().trim();
      const numStr = `#${p.numero}`.toLowerCase();
      const clienteStr = (p.cliente || '').toLowerCase();
      const telStr = (p.telefoneCliente || '').toLowerCase();
      const bateBusca = numStr.includes(q) || clienteStr.includes(q) || telStr.includes(q);
      if (!bateBusca) return false;
    }

    // 2. Filtro por Status
    if (filtroStatus === 'pagos' && isPendente(p)) return false;
    if (filtroStatus === 'fiado' && !isPendente(p)) return false;
    if (filtroStatus === 'entregues' && p.status !== 'entregue') return false;
    if (filtroStatus === 'cancelados' && p.status !== 'cancelado') return false;
    if (filtroStatus !== 'cancelados' && p.status === 'cancelado') return false;

    // 3. Filtro por Período de Data
    if (!p.criadoEm) return true;
    const dataCriacao = new Date(p.criadoEm);
    const agora = new Date();

    if (filtroPeriodo === 'hoje') {
      return dataCriacao.toDateString() === agora.toDateString();
    } else if (filtroPeriodo === 'ontem') {
      const ontem = new Date();
      ontem.setDate(agora.getDate() - 1);
      return dataCriacao.toDateString() === ontem.toDateString();
    } else if (filtroPeriodo === '7dias') {
      const limite = new Date();
      limite.setDate(agora.getDate() - 7);
      return dataCriacao >= limite;
    } else if (filtroPeriodo === 'custom') {
      if (dataInicio) {
        const dIni = new Date(dataInicio);
        dIni.setHours(0, 0, 0, 0);
        if (dataCriacao < dIni) return false;
      }
      if (dataFim) {
        const dFim = new Date(dataFim);
        dFim.setHours(23, 59, 59, 999);
        if (dataCriacao > dFim) return false;
      }
    }

    return true;
  });

  // Cálculo de Métricas Financeiras baseadas nos pedidos filtrados
  const pedidosValidos = pedidosFiltrados.filter(p => p.status !== 'cancelado');
  const pedidosPagos = pedidosValidos.filter(p => !isPendente(p));
  const pedidosPendentesPgto = pedidosValidos.filter(p => isPendente(p));

  const totalFaturamento = pedidosPagos.reduce((acc, p) => acc + (Number(p.total) || 0), 0);
  const totalPendenteCobrar = pedidosPendentesPgto.reduce((acc, p) => acc + (Number(p.total) || 0), 0);
  
  const totalPedidosCount = pedidosValidos.length;
  const ticketMedio = totalPedidosCount > 0 ? (totalFaturamento + totalPendenteCobrar) / totalPedidosCount : 0;

  const getFormaPgtoBadge = (p) => {
    if (p.formaPagamento === 'pagar_depois' || p.statusPagamento === 'pendente_pagamento') {
      const dataStr = p.dataCobranca ? new Date(p.dataCobranca).toLocaleDateString() : 'Sem Data';
      if (p.statusPagamento === 'pago') {
        return (
          <span className="badge badge-pronto">
            <Check size={12} /> Pagar Depois (Quitado)
          </span>
        );
      }
      return (
        <span className="badge badge-preparo">
          <Clock size={12} /> Pagar Depois ({dataStr})
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
          gap: 1.25rem;
        }

        .vendas-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--app-surface-1);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--app-border);
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        /* Card de Filtros com Dropdown Selects */
        .vendas-filtros-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          display: flex;
          gap: 0.85rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .vendas-search-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.5rem 0.9rem;
          flex: 1.5;
          min-width: 240px;
          min-height: 44px;
        }

        .vendas-search-input {
          border: none !important;
          background: transparent !important;
          color: var(--text-title) !important;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.92rem;
          outline: none;
          width: 100%;
        }

        .dropdown-filter-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          min-width: 180px;
          flex: 1;
        }

        .dropdown-filter-select {
          background: var(--app-surface-2);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.55rem 0.85rem;
          color: var(--text-title);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          outline: none;
          cursor: pointer;
          width: 100%;
          min-height: 44px;
          transition: border-color 130ms ease;
        }

        .dropdown-filter-select:focus {
          border-color: var(--primary);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .metric-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .metric-icon-box {
          background: rgba(21, 107, 22, 0.12);
          color: var(--primary);
          padding: 0.7rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metric-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .metric-value {
          font-family: var(--font-title);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-title);
          line-height: 1.1;
        }

        /* Tabela de Vendas Desktop */
        .vendas-table-wrapper {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow-x: auto;
        }

        .vendas-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .vendas-table th {
          background: var(--app-surface-2);
          padding: 0.75rem 0.9rem;
          font-family: var(--font-title);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--app-border);
        }

        .vendas-table td {
          padding: 0.75rem 0.9rem;
          border-bottom: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
        }

        .vendas-table tr.row-exp:hover td {
          background: var(--app-surface-2);
          cursor: pointer;
        }

        .exp-details-box {
          background: var(--app-surface-2);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          margin: 0.4rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        /* Lista Compacta Mobile (< 768px) */
        .vendas-mobile-list {
          display: none;
          flex-direction: column;
          gap: 0.6rem;
        }

        .venda-card-mobile {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .venda-card-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .venda-card-details {
          border-top: 1px dashed var(--app-border);
          padding-top: 0.55rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        @media (max-width: 768px) {
          .vendas-table-wrapper {
            display: none;
          }
          .vendas-mobile-list {
            display: flex;
          }
          .vendas-filtros-card {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>

      {/* Cabeçalho de Vendas & Histórico */}
      <div className="vendas-header">
        <div className="view-title" style={{ margin: 0 }}>
          <BarChart3 size={24} color="var(--primary)" />
          <span>Faturamento & Histórico de Pedidos Anteriores</span>
        </div>
        <div className="badge badge-pronto">
          <span>{pedidosFiltrados.length} Registros Encontrados</span>
        </div>
      </div>

      {/* Barra de Filtros com Dropdown Selects Elegantes */}
      <div className="vendas-filtros-card">
        {/* Campo de Pesquisa */}
        <div className="vendas-search-box">
          <Search size={18} color="var(--primary)" />
          <input
            type="text"
            className="vendas-search-input"
            placeholder="Buscar por comanda #, cliente ou WhatsApp..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {/* Dropdown 1: Seleção de Período / Data */}
        <div className="dropdown-filter-group">
          <select
            className="dropdown-filter-select"
            value={filtroPeriodo}
            onChange={(e) => setFiltroPeriodo(e.target.value)}
          >
            <option value="hoje">Período: Hoje</option>
            <option value="ontem">Período: Ontem</option>
            <option value="7dias">Período: Últimos 7 dias</option>
            <option value="todos">Período: Todos os Pedidos</option>
            <option value="custom">Período: Data Personalizada</option>
          </select>
        </div>

        {/* Dropdown 2: Seleção de Status / Tipo de Pagamento */}
        <div className="dropdown-filter-group">
          <select
            className="dropdown-filter-select"
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
          >
            <option value="todos">Status: Todos os Pedidos</option>
            <option value="pagos">Status: Quitados / Pagos</option>
            <option value="fiado">Status: Pagar Depois (Fiado)</option>
            <option value="entregues">Status: Entregues</option>
            <option value="cancelados">Status: Cancelados</option>
          </select>
        </div>
      </div>

      {/* Inputs de Data Personalizada se filtroPeriodo === 'custom' */}
      {filtroPeriodo === 'custom' && (
        <div className="vendas-filtros-card" style={{ background: 'var(--app-surface-2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 600, flex: 1 }}>
            <Calendar size={18} color="var(--primary)" />
            <span style={{ color: 'var(--text-title)' }}>Data Inicial:</span>
            <input
              type="date"
              className="form-input"
              style={{ minHeight: '38px', padding: '0.35rem 0.7rem', flex: 1 }}
              value={dataInicio}
              onChange={(e) => setDataInicio(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 600, flex: 1 }}>
            <span style={{ color: 'var(--text-title)' }}>Data Final:</span>
            <input
              type="date"
              className="form-input"
              style={{ minHeight: '38px', padding: '0.35rem 0.7rem', flex: 1 }}
              value={dataFim}
              onChange={(e) => setDataFim(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Grade de Métricas Financeiras */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon-box" style={{ background: '#e6f9f0', color: '#0d8a57' }}>
            <DollarSign size={26} />
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
            <Calendar size={26} />
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
            <ShoppingBag size={26} />
          </div>
          <div>
            <div className="metric-label">Comandas Válidas</div>
            <div className="metric-value">{totalPedidosCount} comanda(s)</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box">
            <TrendingUp size={26} />
          </div>
          <div>
            <div className="metric-label">Ticket Médio</div>
            <div className="metric-value">R$ {ticketMedio.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* Tabela Desktop Expansível */}
      <div className="vendas-table-wrapper">
        <table className="vendas-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}></th>
              <th>Comanda</th>
              <th>Data / Horário</th>
              <th>Cliente / Contato</th>
              <th>Forma Pagamento</th>
              <th>Valor Total</th>
              <th>Status Pedido</th>
              <th>Atendente / Cozinha</th>
              <th style={{ textAlign: 'right' }}>Ação de Quitação</th>
            </tr>
          </thead>
          <tbody>
            {pedidosFiltrados.length === 0 ? (
              <tr>
                <td colSpan="9" style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--app-ink-muted)' }}>
                  Nenhum pedido encontrado para os filtros selecionados.
                </td>
              </tr>
            ) : (
              pedidosFiltrados.map(p => {
                const estaExpandido = expandidoId === p.id;
                const dataFormatada = p.criadoEm ? new Date(p.criadoEm).toLocaleString() : 'Recente';

                return (
                  <React.Fragment key={p.id}>
                    <tr className="row-exp" onClick={() => toggleExpandir(p.id)}>
                      <td style={{ textAlign: 'center' }}>
                        {estaExpandido ? <ChevronUp size={16} color="var(--primary)" /> : <ChevronDown size={16} color="var(--app-ink-muted)" />}
                      </td>
                      <td><strong style={{ color: 'var(--text-title)' }}>#{p.numero}</strong></td>
                      <td style={{ fontSize: '0.82rem', color: 'var(--app-ink-muted)' }}>{dataFormatada}</td>
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
                        <span className={`badge badge-${p.status === 'pronto' ? 'pronto' : (p.status === 'entregue' ? 'entregue' : (p.status === 'entrega_parcial' ? 'entregue' : 'preparo'))}`}>
                          {p.status === 'entrega_parcial' ? 'PARCIAL' : p.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ fontSize: '0.82rem' }}>
                        <div>Caixa: <strong>{p.criadoPor || 'Caixa'}</strong></div>
                        {p.preparadoPor && <div style={{ color: 'var(--app-ink-muted)' }}>Cozinha: {p.preparadoPor}</div>}
                      </td>
                      <td>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          {isPendente(p) ? (
                            <button
                              className="btn btn-warning"
                              style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem', minHeight: '36px' }}
                              onClick={(e) => handleQuitarPagamento(e, p.id)}
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

                    {/* Linha Expandida com Itens da Comanda Anterior */}
                    {estaExpandido && (
                      <tr>
                        <td colSpan="9" style={{ padding: '0.5rem 1rem', background: 'var(--app-surface-2)' }}>
                          <div className="exp-details-box">
                            <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-title)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                              <FileText size={16} color="var(--primary)" />
                              <span>Itens Lançados na Comanda #{p.numero}:</span>
                            </div>

                            {p.itens && p.itens.length > 0 ? (
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem', marginTop: '0.3rem' }}>
                                {p.itens.map((item, idx) => (
                                  <div key={idx} style={{ background: 'var(--app-surface-1)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--app-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                      <strong style={{ color: 'var(--primary)' }}>{item.quantidade}x</strong> {item.nome}
                                      {item.observacao && (
                                        <div style={{ fontSize: '0.78rem', color: 'var(--text-obs)' }}>Obs: {item.observacao}</div>
                                      )}
                                    </div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--status-pronto)' }}>
                                      R$ {(item.preco * item.quantidade).toFixed(2)}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <span style={{ fontSize: '0.82rem', color: 'var(--app-ink-muted)' }}>Sem detalhes dos itens registrados nesta comanda antiga.</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Lista Compacta Expansível Exclusiva para Mobile (< 768px) */}
      <div className="vendas-mobile-list">
        {pedidosFiltrados.length === 0 ? (
          <div style={{ background: 'var(--app-surface-1)', padding: '2rem', textAlign: 'center', color: 'var(--app-ink-muted)', borderRadius: 'var(--radius-md)', border: '1px solid var(--app-border)' }}>
            Nenhum pedido encontrado para os filtros selecionados.
          </div>
        ) : (
          pedidosFiltrados.map(p => {
            const estaExpandido = expandidoId === p.id;
            const dataFormatada = p.criadoEm ? new Date(p.criadoEm).toLocaleString() : 'Recente';

            return (
              <div key={p.id} className="venda-card-mobile" onClick={() => toggleExpandir(p.id)}>
                <div className="venda-card-summary">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong style={{ color: 'var(--text-title)', fontSize: '0.95rem' }}>#{p.numero}</strong>
                    <span style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.9rem' }}>{p.cliente}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong style={{ color: 'var(--color-primary)', fontSize: '0.95rem' }}>
                      R$ {(Number(p.total) || 0).toFixed(2)}
                    </strong>
                    {estaExpandido ? <ChevronUp size={16} color="var(--primary)" /> : <ChevronDown size={16} color="var(--app-ink-muted)" />}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.1rem' }}>
                  <div>{getFormaPgtoBadge(p)}</div>
                  <span className={`badge badge-${p.status === 'pronto' ? 'pronto' : (p.status === 'entregue' ? 'entregue' : (p.status === 'entrega_parcial' ? 'entregue' : 'preparo'))}`}>
                    {p.status === 'entrega_parcial' ? 'PARCIAL' : p.status.toUpperCase()}
                  </span>
                </div>

                {/* Detalhes Expansíveis ao Clicar */}
                {estaExpandido && (
                  <div className="venda-card-details">
                    <div style={{ fontSize: '0.8rem', color: 'var(--app-ink-muted)' }}>
                      Realizado em: <strong>{dataFormatada}</strong>
                    </div>

                    {p.telefoneCliente && (
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-attention)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
                        <Phone size={13} />
                        <span>Contato / WhatsApp: <strong>{p.telefoneCliente}</strong></span>
                      </div>
                    )}

                    {/* Itens do Pedido */}
                    <div style={{ borderTop: '1px dashed var(--app-border)', paddingTop: '0.4rem', marginTop: '0.2rem' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-title)', marginBottom: '0.3rem' }}>
                        Itens do Pedido:
                      </div>
                      {p.itens && p.itens.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          {p.itens.map((item, idx) => (
                            <div key={idx} style={{ background: 'var(--app-surface-2)', padding: '0.35rem 0.55rem', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', display: 'flex', justifyContent: 'space-between' }}>
                              <span><strong>{item.quantidade}x</strong> {item.nome} {item.observacao ? `(${item.observacao})` : ''}</span>
                              <strong style={{ color: 'var(--status-pronto)' }}>R$ {(item.preco * item.quantidade).toFixed(2)}</strong>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span style={{ fontSize: '0.78rem', color: 'var(--app-ink-muted)' }}>Sem itens listados.</span>
                      )}
                    </div>

                    <div style={{ fontSize: '0.82rem', color: 'var(--app-ink-muted)', display: 'flex', gap: '0.8rem', marginTop: '0.3rem' }}>
                      <span>Caixa: <strong>{p.criadoPor || 'Caixa'}</strong></span>
                      {p.preparadoPor && <span>Cozinha: <strong>{p.preparadoPor}</strong></span>}
                    </div>

                    <div style={{ marginTop: '0.3rem', display: 'flex', justifyContent: 'flex-end' }}>
                      {isPendente(p) ? (
                        <button
                          className="btn btn-warning"
                          style={{ width: '100%', padding: '0.45rem', fontSize: '0.85rem' }}
                          onClick={(e) => handleQuitarPagamento(e, p.id)}
                        >
                          <Check size={14} /> Quitar / Marcar Pago
                        </button>
                      ) : (
                        <span style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <CheckCircle size={15} /> Pagamento Confirmado / Quitado
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
