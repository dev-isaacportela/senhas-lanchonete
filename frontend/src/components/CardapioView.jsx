import React, { useState } from 'react';
import { Utensils, Plus, Edit2, Trash2, ToggleLeft, ToggleRight, Search, Check, FolderPlus, Tag, AlertCircle, Beef, Sparkles, CupSoda, Cookie, Pizza, Coffee } from 'lucide-react';

const ICONES_DISPONIVEIS = [
  { id: 'burger', nome: 'Hambúrguer', component: <Beef size={18} /> },
  { id: 'fries', nome: 'Porção', component: <Sparkles size={18} /> },
  { id: 'drink', nome: 'Bebida', component: <CupSoda size={18} /> },
  { id: 'dessert', nome: 'Sobremesa', component: <Cookie size={18} /> },
  { id: 'pizza', nome: 'Pizza', component: <Pizza size={18} /> },
  { id: 'coffee', nome: 'Café', component: <Coffee size={18} /> },
  { id: 'utensils', nome: 'Geral', component: <Utensils size={18} /> }
];

function getCategoriaIcon(icone) {
  const achado = ICONES_DISPONIVEIS.find(i => i.id === icone);
  return achado ? achado.component : <Utensils size={16} />;
}

export default function CardapioView({
  menu,
  onSalvarProduto,
  onExcluirProduto,
  onToggleDisponivel,
  onSalvarCategoria,
  onExcluirCategoria
}) {
  const [categoriaFiltro, setCategoriaFiltro] = useState('todas');
  const [busca, setBusca] = useState('');

  // Modais State
  const [modalProdutoAberto, setModalProdutoAberto] = useState(false);
  const [modalCategoriaAberto, setModalCategoriaAberto] = useState(false);
  
  const [produtoEditando, setProdutoEditando] = useState(null);
  const [prodNome, setProdNome] = useState('');
  const [prodCategoriaId, setProdCategoriaId] = useState('');
  const [prodPreco, setProdPreco] = useState('');
  const [prodDescricao, setProdDescricao] = useState('');

  const [catNome, setCatNome] = useState('');
  const [catIcone, setCatIcone] = useState('burger');

  const categorias = menu?.categorias || [];
  const produtos = menu?.produtos || [];

  // Filtering products
  const produtosFiltrados = produtos.filter(p => {
    const bateCategoria = categoriaFiltro === 'todas' || p.categoriaId === categoriaFiltro;
    const bateBusca = !busca.trim() || 
      p.nome.toLowerCase().includes(busca.toLowerCase()) || 
      (p.descricao && p.descricao.toLowerCase().includes(busca.toLowerCase()));
    return bateCategoria && bateBusca;
  });

  // Open Product Modal (Create/Edit)
  const abrirModalProduto = (prod = null) => {
    if (prod) {
      setProdutoEditando(prod);
      setProdNome(prod.nome);
      setProdCategoriaId(prod.categoriaId);
      setProdPreco(prod.preco.toString());
      setProdDescricao(prod.descricao || '');
    } else {
      setProdutoEditando(null);
      setProdNome('');
      setProdCategoriaId(categorias[0]?.id || 'lanches');
      setProdPreco('');
      setProdDescricao('');
    }
    setModalProdutoAberto(true);
  };

  // Open Category Modal
  const abrirModalCategoria = () => {
    setCatNome('');
    setCatIcone('burger');
    setModalCategoriaAberto(true);
  };

  // Submit Product Form
  const handleSalvarProdutoSubmit = (e) => {
    e.preventDefault();
    if (!prodNome.trim() || !prodPreco || !prodCategoriaId) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    onSalvarProduto({
      id: produtoEditando ? produtoEditando.id : undefined,
      categoriaId: prodCategoriaId,
      nome: prodNome.trim(),
      preco: parseFloat(prodPreco),
      descricao: prodDescricao.trim(),
      disponivel: produtoEditando ? produtoEditando.disponivel : true
    });

    setModalProdutoAberto(false);
  };

  // Submit Category Form
  const handleSalvarCategoriaSubmit = (e) => {
    e.preventDefault();
    if (!catNome.trim()) {
      alert('O nome da categoria é obrigatório.');
      return;
    }

    onSalvarCategoria({
      nome: catNome.trim(),
      icone: catIcone
    });

    setModalCategoriaAberto(false);
  };

  // Confirm Product Deletion
  const handleConfirmExcluirProduto = (prod) => {
    if (window.confirm(`Tem certeza que deseja excluir o produto "${prod.nome}"?`)) {
      onExcluirProduto(prod.id);
    }
  };

  // Confirm Category Deletion
  const handleConfirmExcluirCategoria = (cat) => {
    const qtdProdutos = produtos.filter(p => p.categoriaId === cat.id).length;
    if (qtdProdutos > 0) {
      alert(`Não é possível excluir a categoria "${cat.nome}" pois ela possui ${qtdProdutos} produto(s) vinculado(s).`);
      return;
    }

    if (window.confirm(`Deseja excluir a categoria "${cat.nome}"?`)) {
      onExcluirCategoria(cat.id).then(res => {
        if (res && res.error) {
          alert(res.error);
        } else if (categoriaFiltro === cat.id) {
          setCategoriaFiltro('todas');
        }
      });
    }
  };

  return (
    <div className="cardapio-crud-container">
      <style>{`
        .cardapio-crud-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .crud-topbar {
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

        .crud-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .search-box {
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-md);
          padding: 0.5rem 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          max-width: 320px;
        }

        .search-input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-title);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          width: 100%;
        }

        .cat-pills-bar {
          display: flex;
          gap: 0.4rem;
          overflow-x: auto;
          padding-bottom: 0.4rem;
          -webkit-overflow-scrolling: touch;
        }

        .cat-pill-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.9rem;
          border-radius: var(--radius-md);
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          color: var(--app-ink);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 130ms ease;
        }

        .cat-pill-btn.active {
          background: var(--primary);
          color: var(--on-primary);
          border-color: var(--primary);
          box-shadow: 0 2px 8px var(--primary-glow);
        }

        .crud-table-wrapper {
          background: var(--app-surface-1);
          border: 1px solid var(--app-border);
          border-radius: var(--radius-lg);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          box-shadow: var(--shadow-md);
        }

        .crud-table {
          width: 100%;
          min-width: 700px;
          border-collapse: collapse;
          text-align: left;
        }

        .crud-table th {
          background: var(--app-surface-2);
          padding: 0.9rem 1rem;
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--app-ink-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--app-border);
        }

        .crud-table td {
          padding: 0.9rem 1rem;
          border-bottom: 1px solid var(--app-border);
          color: var(--app-ink);
          vertical-align: middle;
        }

        .crud-table tr:hover td {
          background: var(--app-surface-2);
        }

        .action-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          justify-content: flex-end;
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(4px);
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
          max-width: 520px;
          padding: 1.5rem;
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-title);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid var(--app-border);
          padding-bottom: 0.75rem;
        }

        .icone-selector {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 0.3rem;
        }

        .icone-opt {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.45rem 0.75rem;
          border-radius: var(--radius-md);
          background: var(--app-canvas);
          border: 1px solid var(--app-border);
          color: var(--app-ink);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }

        .icone-opt.selected {
          border-color: var(--primary);
          background: var(--primary);
          color: var(--on-primary);
        }
      `}</style>

      {/* Barra de Ações Superior */}
      <div className="crud-topbar">
        <div className="view-title" style={{ margin: 0 }}>
          <Utensils size={26} color="var(--primary)" />
          <span>Gestão do Cardápio</span>
        </div>

        {/* Busca */}
        <div className="search-box">
          <Search size={18} color="var(--app-ink-muted)" />
          <input
            type="text"
            className="search-input"
            placeholder="Buscar produto por nome..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {/* Botões de Ação Novo Produto / Categoria */}
        <div className="crud-actions">
          <button className="btn btn-secondary" onClick={abrirModalCategoria}>
            <FolderPlus size={18} color="var(--status-preparo)" /> + Categoria
          </button>
          <button className="btn btn-primary" onClick={() => abrirModalProduto()}>
            <Plus size={18} /> + Produto
          </button>
        </div>
      </div>

      {/* Filtro por Categorias */}
      <div className="cat-pills-bar">
        <button
          className={`cat-pill-btn ${categoriaFiltro === 'todas' ? 'active' : ''}`}
          onClick={() => setCategoriaFiltro('todas')}
        >
          <Tag size={14} /> Todas ({produtos.length})
        </button>
        {categorias.map(cat => {
          const qtd = produtos.filter(p => p.categoriaId === cat.id).length;
          return (
            <div key={cat.id} style={{ display: 'flex', alignItems: 'center' }}>
              <button
                className={`cat-pill-btn ${categoriaFiltro === cat.id ? 'active' : ''}`}
                onClick={() => setCategoriaFiltro(cat.id)}
              >
                {getCategoriaIcon(cat.icone)} <span>{cat.nome}</span> ({qtd})
              </button>
              {qtd === 0 && (
                <button
                  title="Excluir Categoria Vazia"
                  style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', padding: '0 0.3rem' }}
                  onClick={() => handleConfirmExcluirCategoria(cat)}
                >
                  <Trash2 size={13} />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Tabela de Produtos (CRUD) */}
      <div className="crud-table-wrapper">
        <table className="crud-table">
          <thead>
            <tr>
              <th>Disponibilidade</th>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Descrição</th>
              <th style={{ textAlign: 'right' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtosFiltrados.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--app-ink-muted)' }}>
                  <AlertCircle size={32} style={{ marginBottom: '0.5rem', display: 'block', margin: '0 auto' }} />
                  Nenhum produto encontrado. Clique em <strong>"+ Produto"</strong> para adicionar.
                </td>
              </tr>
            ) : (
              produtosFiltrados.map(prod => {
                const cat = categorias.find(c => c.id === prod.categoriaId);
                return (
                  <tr key={prod.id}>
                    <td>
                      <button
                        className="btn btn-secondary"
                        style={{ padding: '0.35rem 0.7rem', fontSize: '0.8rem' }}
                        onClick={() => onToggleDisponivel(prod.id)}
                      >
                        {prod.disponivel ? (
                          <span style={{ color: 'var(--status-pronto)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 700 }}>
                            <ToggleRight size={18} /> Ativo
                          </span>
                        ) : (
                          <span style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 700 }}>
                            <ToggleLeft size={18} /> Esgotado
                          </span>
                        )}
                      </button>
                    </td>
                    <td>
                      <strong style={{ color: 'var(--text-title)', fontSize: '1rem' }}>{prod.nome}</strong>
                    </td>
                    <td>
                      <span className="badge badge-pendente">
                        {getCategoriaIcon(cat?.icone)} {cat?.nome || prod.categoriaId}
                      </span>
                    </td>
                    <td>
                      <strong style={{ color: 'var(--status-pronto)', fontSize: '1.05rem' }}>
                        R$ {prod.preco.toFixed(2)}
                      </strong>
                    </td>
                    <td style={{ fontSize: '0.85rem', color: 'var(--app-ink-muted)', maxWidth: '280px' }}>
                      {prod.descricao || '-'}
                    </td>
                    <td>
                      <div className="action-group">
                        <button
                          className="btn btn-secondary"
                          style={{ padding: '0.4rem 0.7rem', fontSize: '0.82rem' }}
                          onClick={() => abrirModalProduto(prod)}
                        >
                          <Edit2 size={14} /> Editar
                        </button>
                        <button
                          className="btn btn-secondary"
                          style={{ padding: '0.4rem 0.7rem', fontSize: '0.82rem', color: 'var(--primary)' }}
                          onClick={() => handleConfirmExcluirProduto(prod)}
                        >
                          <Trash2 size={14} /> Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Criar / Editar Produto */}
      {modalProdutoAberto && (
        <div className="modal-backdrop" onClick={() => setModalProdutoAberto(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">
              <Utensils size={20} color="var(--primary)" />
              <span>{produtoEditando ? 'Editar Produto' : 'Cadastrar Novo Produto'}</span>
            </div>

            <form onSubmit={handleSalvarProdutoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Nome do Produto *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ex: X-Salada Bacon Especial"
                  value={prodNome}
                  onChange={(e) => setProdNome(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Categoria *</label>
                <select
                  className="form-input"
                  value={prodCategoriaId}
                  onChange={(e) => setProdCategoriaId(e.target.value)}
                  required
                >
                  {categorias.map(c => (
                    <option key={c.id} value={c.id}>{c.nome}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Preço em R$ *</label>
                <input
                  type="number"
                  step="0.10"
                  className="form-input"
                  placeholder="24.90"
                  value={prodPreco}
                  onChange={(e) => setProdPreco(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Descrição / Ingredientes</label>
                <textarea
                  className="form-input"
                  rows="3"
                  placeholder="Ingredientes e detalhes (ex: Pão brioche, 160g hambúrguer, cheddar)..."
                  value={prodDescricao}
                  onChange={(e) => setProdDescricao(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setModalProdutoAberto(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  <Check size={18} /> Salvar Produto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Criar Categoria */}
      {modalCategoriaAberto && (
        <div className="modal-backdrop" onClick={() => setModalCategoriaAberto(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">
              <FolderPlus size={20} color="var(--status-preparo)" />
              <span>Nova Categoria do Cardápio</span>
            </div>

            <form onSubmit={handleSalvarCategoriaSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Nome da Categoria *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ex: Combos Promocionais, Sobremesas..."
                  value={catNome}
                  onChange={(e) => setCatNome(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Ícone da Categoria</label>
                <div className="icone-selector">
                  {ICONES_DISPONIVEIS.map(ico => (
                    <button
                      type="button"
                      key={ico.id}
                      className={`icone-opt ${catIcone === ico.id ? 'selected' : ''}`}
                      onClick={() => setCatIcone(ico.id)}
                    >
                      {ico.component}
                      <span>{ico.nome}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setModalCategoriaAberto(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-success">
                  <Check size={18} /> Criar Categoria
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
