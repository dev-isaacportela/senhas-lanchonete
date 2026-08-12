import React, { useState, useEffect } from 'react';
import { Printer, RefreshCw, Check, AlertTriangle, CheckCircle2, ShieldAlert, FileText, Ruler, Type } from 'lucide-react';

const CODE_PAGES = [
  { id: 'cp850', nome: 'CP850 (Multilíngue) — padrão' },
  { id: 'cp860', nome: 'CP860 (Português)' },
  { id: 'win1252', nome: 'WPC1252 (Windows Latin-1)' },
  { id: 'cp858', nome: 'CP858 (Multilíngue + Euro)' },
  { id: 'cp437', nome: 'CP437 (EUA / padrão antigo)' }
];

export default function ImpressoraView({ operador }) {
  const [config, setConfig] = useState(null);
  const [impressoras, setImpressoras] = useState([]);
  const [carregandoImpressoras, setCarregandoImpressoras] = useState(false);
  const [salvando, setSalvando] = useState(false);
  const [aviso, setAviso] = useState(null);
  const [fila, setFila] = useState({ pendentes: 0, historico: [] });

  const temPermissao = operador && operador.role === 'master';

  const carregarFila = () => {
    fetch('/api/printer/fila')
      .then(res => res.json())
      .then(setFila)
      .catch(() => { /* painel de diagnóstico, falha não é crítica */ });
  };

  const carregarImpressoras = () => {
    setCarregandoImpressoras(true);
    fetch('/api/printer/impressoras')
      .then(res => res.json())
      .then(data => {
        if (data.impressoras) {
          setImpressoras(data.impressoras);
        } else {
          setAviso({ tipo: 'erro', texto: data.error || 'Não foi possível listar as impressoras.' });
        }
      })
      .catch(() => setAviso({ tipo: 'erro', texto: 'Erro de conexão ao listar as impressoras.' }))
      .finally(() => setCarregandoImpressoras(false));
  };

  useEffect(() => {
    if (!temPermissao) return;

    fetch('/api/printer-config')
      .then(res => res.json())
      .then(setConfig)
      .catch(() => setAviso({ tipo: 'erro', texto: 'Erro ao carregar a configuração da impressora.' }));

    carregarImpressoras();
    carregarFila();
  }, [temPermissao]);

  if (!temPermissao) {
    return (
      <div style={{ background: 'var(--app-surface-1)', border: '1px solid var(--app-border)', borderRadius: 'var(--radius-lg)', padding: '3rem', textAlign: 'center', color: 'var(--app-ink-muted)' }}>
        <ShieldAlert size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
        <h2 style={{ color: 'var(--text-title)' }}>Acesso Restrito à Impressora</h2>
        <p style={{ marginTop: '0.5rem' }}>Apenas a Conta Master pode configurar a impressão de comprovantes.</p>
      </div>
    );
  }

  if (!config) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--app-ink-muted)' }}>
        Carregando configuração da impressora...
      </div>
    );
  }

  const atualizar = (campo, valor) => setConfig(prev => ({ ...prev, [campo]: valor }));
  const atualizarVia = (via, valor) => setConfig(prev => ({ ...prev, vias: { ...prev.vias, [via]: valor } }));

  const salvar = () => {
    setSalvando(true);
    setAviso(null);

    fetch('/api/printer-config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    })
      .then(res => res.json())
      .then(data => {
        if (data.config) {
          setConfig(data.config);
          setAviso({ tipo: 'ok', texto: 'Configuração salva. Já vale para o próximo pedido.' });
        } else {
          setAviso({ tipo: 'erro', texto: data.error || 'Erro ao salvar.' });
        }
      })
      .catch(() => setAviso({ tipo: 'erro', texto: 'Erro de conexão ao salvar.' }))
      .finally(() => setSalvando(false));
  };

  // Imprime com a configuração da tela, mesmo sem salvar — permite testar
  // uma largura diferente sem comprometer a configuração que está valendo.
  const imprimirTeste = () => {
    setAviso(null);

    fetch('/api/printer/teste', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ config })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setAviso({ tipo: 'ok', texto: 'Teste enviado para a impressora. Confira o papel: a régua mostra em quantas colunas a linha quebra.' });
        } else {
          setAviso({ tipo: 'erro', texto: data.error || 'Falha ao enviar o teste.' });
        }
        setTimeout(carregarFila, 1500);
      })
      .catch(() => setAviso({ tipo: 'erro', texto: 'Erro de conexão ao enviar o teste.' }));
  };

  return (
    <div className="impressora-container">
      <style>{`
        .impressora-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 900px;
        }

        .impressora-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: var(--shadow-md);
        }

        .impressora-card-titulo {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-title);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid var(--app-border);
          padding-bottom: 0.7rem;
        }

        .impressora-linha {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }

        @media (max-width: 720px) {
          .impressora-linha { grid-template-columns: 1fr; }
        }

        .switch-linha {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.7rem 0.85rem;
          cursor: pointer;
          color: var(--app-ink);
          text-align: left;
          width: 100%;
        }

        .switch-linha.ativo {
          border-color: var(--status-pronto);
        }

        .switch-caixa {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          border: 2px solid var(--app-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .switch-linha.ativo .switch-caixa {
          background: var(--status-pronto);
          border-color: var(--status-pronto);
          color: #fff;
        }

        .switch-linha strong { display: block; font-size: 0.9rem; color: var(--text-title); }
        .switch-linha small { display: block; font-size: 0.76rem; color: var(--app-ink-muted); margin-top: 2px; }

        .aviso-box {
          border-radius: var(--radius-md);
          padding: 0.8rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.88rem;
        }

        .aviso-ok { background: rgba(22, 163, 74, 0.14); border: 1px solid var(--status-pronto); color: var(--status-pronto); }
        .aviso-erro { background: rgba(250, 15, 0, 0.13); border: 1px solid var(--primary); color: var(--primary); }

        .job-linha {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.6rem;
          padding: 0.5rem 0.7rem;
          border-radius: var(--radius-sm);
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          font-size: 0.82rem;
        }

        .job-ok { color: var(--status-pronto); font-weight: 700; }
        .job-falha { color: var(--primary); font-weight: 700; }
      `}</style>

      <div className="view-title" style={{ margin: 0 }}>
        <Printer size={26} color="var(--primary)" />
        <span>Impressora Térmica</span>
      </div>

      {aviso && (
        <div className={`aviso-box ${aviso.tipo === 'ok' ? 'aviso-ok' : 'aviso-erro'}`}>
          {aviso.tipo === 'ok' ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
          <span>{aviso.texto}</span>
        </div>
      )}

      {/* Ligar/desligar e escolher a impressora */}
      <div className="impressora-card">
        <div className="impressora-card-titulo">
          <Printer size={18} color="var(--primary)" /> Impressão automática
        </div>

        <button
          className={`switch-linha ${config.habilitado ? 'ativo' : ''}`}
          onClick={() => atualizar('habilitado', !config.habilitado)}
        >
          <span className="switch-caixa">{config.habilitado && <Check size={14} />}</span>
          <span>
            <strong>Imprimir o comprovante ao fechar o pedido</strong>
            <small>
              {config.habilitado
                ? 'Ligado: cada pedido novo sai impresso sem clique.'
                : 'Desligado: nenhum comprovante sai sozinho. A reimpressão manual continua funcionando.'}
            </small>
          </span>
        </button>

        <div className="form-group">
          <label className="form-label">Impressora do Windows</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <select
              className="form-input"
              value={config.nomeImpressora || ''}
              onChange={(e) => atualizar('nomeImpressora', e.target.value)}
              style={{ flex: 1 }}
            >
              <option value="">— Selecione a impressora —</option>
              {impressoras.map(nome => (
                <option key={nome} value={nome}>{nome}</option>
              ))}
              {config.nomeImpressora && !impressoras.includes(config.nomeImpressora) && (
                <option value={config.nomeImpressora}>{config.nomeImpressora} (não encontrada agora)</option>
              )}
            </select>
            <button
              className="btn btn-secondary"
              onClick={carregarImpressoras}
              disabled={carregandoImpressoras}
              title="Atualizar a lista de impressoras instaladas"
            >
              <RefreshCw size={16} /> {carregandoImpressoras ? '...' : 'Atualizar'}
            </button>
          </div>
        </div>
      </div>

      {/* Formato do papel */}
      <div className="impressora-card">
        <div className="impressora-card-titulo">
          <Ruler size={18} color="var(--primary)" /> Formato da bobina
        </div>

        <div className="impressora-linha">
          <div className="form-group">
            <label className="form-label">Largura</label>
            <select
              className="form-input"
              value={config.larguraColunas}
              onChange={(e) => atualizar('larguraColunas', parseInt(e.target.value, 10))}
            >
              <option value={32}>32 colunas — bobina 58mm</option>
              <option value={48}>48 colunas — bobina 80mm</option>
              <option value={42}>42 colunas — 80mm fonte compacta</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Tabela de caracteres (acentuação)</label>
            <select
              className="form-input"
              value={config.codePage}
              onChange={(e) => atualizar('codePage', e.target.value)}
            >
              {CODE_PAGES.map(cp => (
                <option key={cp.id} value={cp.id}>{cp.nome}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          className={`switch-linha ${config.cortarPapel ? 'ativo' : ''}`}
          onClick={() => atualizar('cortarPapel', !config.cortarPapel)}
        >
          <span className="switch-caixa">{config.cortarPapel && <Check size={14} />}</span>
          <span>
            <strong>Cortar o papel ao final</strong>
            <small>Desligue apenas se a impressora não tiver guilhotina.</small>
          </span>
        </button>

        <button
          className={`switch-linha ${config.semAcentos ? 'ativo' : ''}`}
          onClick={() => atualizar('semAcentos', !config.semAcentos)}
        >
          <span className="switch-caixa">{config.semAcentos && <Check size={14} />}</span>
          <span>
            <strong>Remover acentos ao imprimir</strong>
            <small>Plano B: use se nenhuma tabela de caracteres sair correta no teste.</small>
          </span>
        </button>
      </div>

      {/* Vias */}
      <div className="impressora-card">
        <div className="impressora-card-titulo">
          <FileText size={18} color="var(--primary)" /> Vias impressas
        </div>

        <button
          className={`switch-linha ${config.vias?.cliente ? 'ativo' : ''}`}
          onClick={() => atualizarVia('cliente', !config.vias?.cliente)}
        >
          <span className="switch-caixa">{config.vias?.cliente && <Check size={14} />}</span>
          <span>
            <strong>Via do cliente</strong>
            <small>Comanda, itens, total e forma de pagamento.</small>
          </span>
        </button>

        <button
          className={`switch-linha ${config.vias?.cozinha ? 'ativo' : ''}`}
          onClick={() => atualizarVia('cozinha', !config.vias?.cozinha)}
        >
          <span className="switch-caixa">{config.vias?.cozinha && <Check size={14} />}</span>
          <span>
            <strong>Via da cozinha</strong>
            <small>Sem preços, itens em fonte grande e comanda gigante.</small>
          </span>
        </button>

        <div className="form-group" style={{ maxWidth: '220px' }}>
          <label className="form-label">Cópias da via do cliente</label>
          <input
            type="number"
            min="1"
            max="5"
            className="form-input"
            value={config.copiasCliente}
            onChange={(e) => atualizar('copiasCliente', parseInt(e.target.value, 10) || 1)}
          />
        </div>
      </div>

      {/* Textos fixos */}
      <div className="impressora-card">
        <div className="impressora-card-titulo">
          <Type size={18} color="var(--primary)" /> Cabeçalho e rodapé
        </div>

        <div className="form-group">
          <label className="form-label">Cabeçalho</label>
          <input
            type="text"
            className="form-input"
            value={config.cabecalho || ''}
            onChange={(e) => atualizar('cabecalho', e.target.value)}
            placeholder="FESTA DO MORANGO"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Subtítulo</label>
          <input
            type="text"
            className="form-input"
            value={config.subCabecalho || ''}
            onChange={(e) => atualizar('subCabecalho', e.target.value)}
            placeholder="Desbravadores Apocalipse"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Rodapé</label>
          <input
            type="text"
            className="form-input"
            value={config.rodape || ''}
            onChange={(e) => atualizar('rodape', e.target.value)}
            placeholder="Aguarde ser chamado no balcao"
          />
        </div>
      </div>

      {/* Ações */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button className="btn btn-primary" onClick={salvar} disabled={salvando}>
          <Check size={18} /> {salvando ? 'Salvando...' : 'Salvar configuração'}
        </button>
        <button className="btn btn-secondary" onClick={imprimirTeste}>
          <Printer size={18} /> Imprimir teste
        </button>
        <button className="btn btn-secondary" onClick={carregarFila}>
          <RefreshCw size={16} /> Atualizar fila
        </button>
      </div>

      {/* Diagnóstico */}
      <div className="impressora-card">
        <div className="impressora-card-titulo">
          <FileText size={18} color="var(--primary)" /> Últimas impressões
          {fila.pendentes > 0 && (
            <span style={{ fontSize: '0.8rem', color: 'var(--status-preparo)', fontWeight: 700 }}>
              ({fila.pendentes} na fila)
            </span>
          )}
        </div>

        {(!fila.historico || fila.historico.length === 0) ? (
          <div style={{ color: 'var(--app-ink-muted)', fontSize: '0.86rem' }}>
            Nenhuma impressão registrada ainda nesta sessão do servidor.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '320px', overflowY: 'auto' }}>
            {fila.historico.map(job => (
              <div key={job.id} className="job-linha">
                <span>
                  <strong>{job.descricao}</strong>
                  <span style={{ color: 'var(--app-ink-muted)' }}> · {new Date(job.quandoEm).toLocaleTimeString('pt-BR')}</span>
                  {job.tentativas > 1 && (
                    <span style={{ color: 'var(--status-preparo)' }}> · {job.tentativas} tentativas</span>
                  )}
                  {!job.ok && <div style={{ color: 'var(--app-ink-muted)', marginTop: '2px' }}>{job.erro}</div>}
                </span>
                <span className={job.ok ? 'job-ok' : 'job-falha'}>
                  {job.ok ? 'OK' : 'FALHOU'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
