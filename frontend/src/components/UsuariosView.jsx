import React, { useState, useEffect } from 'react';
import { Users, UserPlus, Shield, Key, Edit, Trash2, CheckCircle2, ShieldAlert, Award, ShoppingBag, ChefHat, Tv, Eye, EyeOff, User } from 'lucide-react';

export default function UsuariosView({ operador }) {
  const [usuarios, setUsuarios] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [modoEdicao, setModoEdicao] = useState(false);

  // Form State
  const [usuarioAtual, setUsuarioAtual] = useState({
    id: '',
    nome: '',
    usuario: '',
    senha: '',
    role: 'cozinha'
  });

  const [mostrarSenha, setMostrarSenha] = useState({});
  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  // Check permission (Master only)
  const isMaster = operador && operador.role === 'master';

  const [pixConfig, setPixConfig] = useState({
    chavePix: '',
    tipoChave: 'email',
    nomeBeneficiario: '',
    cidadeBeneficiario: 'SAO PAULO'
  });
  const [salvandoPix, setSalvandoPix] = useState(false);

  useEffect(() => {
    if (isMaster) {
      carregarUsuarios();
      carregarPixConfig();
    }
  }, [isMaster]);

  const carregarPixConfig = () => {
    fetch('/api/pix-config')
      .then(res => res.json())
      .then(dados => {
        if (dados && dados.chavePix) {
          setPixConfig(dados);
        }
      })
      .catch(err => console.error('Erro ao carregar PIX config:', err));
  };

  const handleSalvarPixConfig = (e) => {
    e.preventDefault();
    setSalvandoPix(true);
    fetch('/api/pix-config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pixConfig)
    })
      .then(res => res.json())
      .then(data => {
        setSalvandoPix(false);
        if (data && data.status === 'success') {
          setMensagemSucesso('Chave PIX atualizada com sucesso!');
          setTimeout(() => setMensagemSucesso(null), 4000);
        } else {
          alert(data.error || 'Erro ao salvar chave PIX.');
        }
      })
      .catch(() => {
        setSalvandoPix(false);
        alert('Erro de conexão ao salvar chave PIX.');
      });
  };

  const carregarUsuarios = () => {
    fetch('/api/users')
      .then(res => res.json())
      .then(dados => setUsuarios(dados))
      .catch(err => console.error('Erro ao carregar usuários:', err));
  };

  if (!isMaster) {
    return (
      <div style={{ background: 'var(--app-surface-1)', border: '1px solid var(--app-border)', borderRadius: 'var(--radius-lg)', padding: '3rem', textAlign: 'center', color: 'var(--app-ink-muted)' }}>
        <ShieldAlert size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
        <h2 style={{ color: 'var(--text-title)' }}>Acesso Restrito à Gestão de Contas</h2>
        <p style={{ marginTop: '0.5rem' }}>Apenas a Conta Master pode gerenciar as contas de acesso dos funcionários.</p>
      </div>
    );
  }

  const toggleMostrarSenha = (id) => {
    setMostrarSenha(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAbrirCriar = () => {
    setUsuarioAtual({ id: '', nome: '', usuario: '', senha: '', role: 'cozinha' });
    setModoEdicao(false);
    setModalAberto(true);
  };

  const handleAbrirEditar = (user) => {
    setUsuarioAtual({ ...user });
    setModoEdicao(true);
    setModalAberto(true);
  };

  const handleSalvar = (e) => {
    e.preventDefault();
    if (!usuarioAtual.nome.trim() || !usuarioAtual.usuario.trim() || !usuarioAtual.senha.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    const endpoint = modoEdicao ? `/api/users/${usuarioAtual.id}` : '/api/users';
    const method = modoEdicao ? 'PATCH' : 'POST';

    fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuarioAtual)
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.status === 'success') {
          setMensagemSucesso(modoEdicao ? 'Conta atualizada com sucesso!' : 'Nova conta criada com sucesso!');
          setModalAberto(false);
          carregarUsuarios();
          setTimeout(() => setMensagemSucesso(null), 4000);
        } else {
          alert(data.error || 'Erro ao salvar usuário.');
        }
      })
      .catch(err => alert('Erro de conexão com o servidor.'));
  };

  const handleExcluir = (id, nome) => {
    if (window.confirm(`Tem certeza que deseja excluir a conta de "${nome}"?`)) {
      fetch(`/api/users/${id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(data => {
          if (data && data.status === 'success') {
            setMensagemSucesso(`Conta de "${nome}" excluída com sucesso.`);
            carregarUsuarios();
            setTimeout(() => setMensagemSucesso(null), 4000);
          } else {
            alert(data.error || 'Erro ao excluir conta.');
          }
        });
    }
  };

  const getBadgeRole = (role) => {
    switch (role) {
      case 'master':
        return (
          <span className="badge badge-role-master">
            <Award size={13} /> Master (Admin)
          </span>
        );
      case 'caixa':
        return (
          <span className="badge badge-role-caixa">
            <ShoppingBag size={13} /> Caixa (Atendente)
          </span>
        );
      case 'cozinha':
        return (
          <span className="badge badge-role-cozinha">
            <ChefHat size={13} /> Cozinha (KDS)
          </span>
        );
      case 'tv':
        return (
          <span className="badge badge-role-tv">
            <Tv size={13} /> Monitor TV
          </span>
        );
      default:
        return <span className="badge badge-role-tv">{role}</span>;
    }
  };

  return (
    <div className="usuarios-container">
      <style>{`
        .usuarios-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .usuarios-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--app-surface-1);
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--app-border);
        }

        .usuarios-table-wrapper {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .usuarios-table {
          width: 100%;
          min-width: 700px;
          border-collapse: collapse;
          text-align: left;
        }

        .usuarios-table th {
          background: var(--app-surface-2);
          padding: 0.9rem 1rem;
          font-family: var(--font-title);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--app-border);
        }

        .usuarios-table td {
          padding: 0.9rem 1rem;
          border-bottom: 1px solid var(--app-border);
          color: var(--app-ink);
          font-weight: 600;
        }

        .usuarios-table tr:hover td {
          background: var(--app-surface-2);
        }

        /* Insígnias em Tons de Verde Hasteados */
        .badge-role-master {
          background-color: #eef7ec !important;
          color: #156b16 !important;
          border: 1px solid #b7dfb8 !important;
        }

        .badge-role-caixa {
          background-color: #e6f9f0 !important;
          color: #0d8a57 !important;
          border: 1px solid #a3ebc9 !important;
        }

        .badge-role-cozinha {
          background-color: #f2f7ed !important;
          color: #4a7c2a !important;
          border: 1px solid #cae0ba !important;
        }

        .badge-role-tv {
          background-color: #e8f5f3 !important;
          color: #207a6d !important;
          border: 1px solid #b2e0d8 !important;
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          padding: 1rem;
        }

        .modal-card {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 480px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
      `}</style>

      {/* Cabeçalho */}
      <div className="usuarios-header">
        <div className="view-title" style={{ margin: 0 }}>
          <Users size={26} color="var(--primary)" />
          <span>Gestão de Contas & Operadores</span>
        </div>
        <button className="btn btn-primary" onClick={handleAbrirCriar}>
          <UserPlus size={18} /> Nova Conta
        </button>
      </div>

      {mensagemSucesso && (
        <div style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
          <CheckCircle2 size={18} />
          <span>{mensagemSucesso}</span>
        </div>
      )}

      {/* Tabela de Usuários */}
      <div className="usuarios-table-wrapper">
        <table className="usuarios-table">
          <thead>
            <tr>
              <th>Nome Completo</th>
              <th>Usuário de Login</th>
              <th>Função / Permissão</th>
              <th>Senha de Acesso</th>
              <th style={{ textAlign: 'right' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(u => (
              <tr key={u.id}>
                <td>
                  <strong style={{ color: 'var(--text-title)' }}>{u.nome}</strong>
                </td>
                <td>
                  <strong style={{ color: 'var(--primary)' }}>{u.usuario}</strong>
                </td>
                <td>{getBadgeRole(u.role)}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
                      {mostrarSenha[u.id] ? u.senha : '••••••••'}
                    </span>
                    <button
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.4rem', minHeight: '30px' }}
                      onClick={() => toggleMostrarSenha(u.id)}
                      title="Revelar/Ocultar Senha"
                    >
                      {mostrarSenha[u.id] ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.4rem' }}>
                    <button
                      className="btn btn-secondary"
                      style={{ padding: '0.4rem 0.6rem', minHeight: '34px' }}
                      onClick={() => handleAbrirEditar(u)}
                    >
                      <Edit size={14} /> Editar
                    </button>
                    {u.usuario !== 'admin' && (
                      <button
                        className="btn btn-secondary"
                        style={{ padding: '0.4rem 0.6rem', minHeight: '34px', color: 'var(--status-urgente)', borderColor: 'var(--status-urgente)' }}
                        onClick={() => handleExcluir(u.id, u.nome)}
                      >
                        <Trash2 size={14} /> Excluir
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card de Configuração da Chave PIX (Admin/Master) */}
      <div style={{ background: 'var(--app-surface-1)', border: '1px solid var(--app-border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
        <h3 style={{ color: 'var(--text-title)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Key size={20} color="var(--primary)" />
          <span>Configuração da Chave PIX do Estabelecimento</span>
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--app-ink-muted)', marginBottom: '1rem' }}>
          Esta chave PIX será utilizada para gerar automaticamente o <strong>QR Code PIX com valor dinâmico</strong> para o cliente no Caixa.
        </p>

        <form onSubmit={handleSalvarPixConfig} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
          <div className="form-group">
            <label className="form-label">Tipo de Chave PIX *</label>
            <select
              className="form-input"
              value={pixConfig.tipoChave}
              onChange={(e) => setPixConfig({ ...pixConfig, tipoChave: e.target.value })}
            >
              <option value="email">E-mail</option>
              <option value="cpf_cnpj">CPF / CNPJ</option>
              <option value="telefone">Telefone (DDD + Número)</option>
              <option value="aleatoria">Chave Aleatória (EVP)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Chave PIX *</label>
            <input
              type="text"
              className="form-input"
              placeholder="Ex: festadomorango@gmail.com"
              value={pixConfig.chavePix}
              onChange={(e) => setPixConfig({ ...pixConfig, chavePix: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Nome do Beneficiário *</label>
            <input
              type="text"
              className="form-input"
              placeholder="Ex: Festa do Morango"
              value={pixConfig.nomeBeneficiario}
              onChange={(e) => setPixConfig({ ...pixConfig, nomeBeneficiario: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Cidade *</label>
            <input
              type="text"
              className="form-input"
              placeholder="Ex: SAO PAULO"
              value={pixConfig.cidadeBeneficiario}
              onChange={(e) => setPixConfig({ ...pixConfig, cidadeBeneficiario: e.target.value })}
              required
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={salvandoPix}>
              {salvandoPix ? 'Salvando...' : 'Salvar Chave PIX'}
            </button>
          </div>
        </form>
      </div>

      {/* Modal Criar / Editar Usuário */}
      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3 style={{ color: 'var(--text-title)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={20} color="var(--primary)" />
              {modoEdicao ? 'Editar Conta de Acesso' : 'Cadastrar Nova Conta de Acesso'}
            </h3>

            <form onSubmit={handleSalvar} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Nome Completo do Operador *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ex: Mariana Santos"
                  value={usuarioAtual.nome}
                  onChange={(e) => setUsuarioAtual({ ...usuarioAtual, nome: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Usuário de Login *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ex: mariana"
                  value={usuarioAtual.usuario}
                  onChange={(e) => setUsuarioAtual({ ...usuarioAtual, usuario: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Senha de Acesso *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Digite a senha..."
                  value={usuarioAtual.senha}
                  onChange={(e) => setUsuarioAtual({ ...usuarioAtual, senha: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Função / Nível de Permissão *</label>
                <select
                  className="form-input"
                  value={usuarioAtual.role}
                  onChange={(e) => setUsuarioAtual({ ...usuarioAtual, role: e.target.value })}
                >
                  <option value="cozinha">Cozinheiro (Apenas Cozinha KDS + TV)</option>
                  <option value="caixa">Atendente Caixa (Caixa + Vendas + KDS + Logs)</option>
                  <option value="master">Gerente Master (Acesso Total + Contas + Cardápio)</option>
                  <option value="tv">Monitor TV (Apenas Chamada de Balcão)</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <button type="button" className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setModalAberto(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  {modoEdicao ? 'Atualizar Conta' : 'Criar Conta'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
