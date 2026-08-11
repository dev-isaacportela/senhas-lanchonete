# Sistema de Controle de Pedidos para Lanchonete (Caixa, Cozinha & Chamada TV)

Sistema web completo, responsivo e de alta performance desenvolvido para lanchonetes e estabelecimentos de alimentação ágil, suportando múltiplos operadores simultâneos em tempo real via WebSockets.

---

## 📁 Estrutura de Arquivos (Spec-Driven & Modular Layout)

```text
senhas-lanchonete/
├── .agents/
│   └── rules/
│       └── lanchonete_code_style.md    # Diretrizes de código, design system e convenções
├── specs/
│   ├── 01_requirements_spec.md        # Especificação detalhada de requisitos por perfil
│   ├── 02_architecture_spec.md        # Arquitetura, diagramas de dados e fluxo
│   ├── 03_api_and_socket_events.md    # Contrato REST e eventos WebSockets (Socket.io)
│   └── 04_ui_ux_design_system.md      # Tokens de design, fontes e efeitos sonoros
├── backend/
│   ├── server.js                      # Servidor Node.js + Express + Socket.io
│   ├── package.json                   # Dependências do backend
│   └── data/
│       ├── menu.json                  # Cadastro persistente do cardápio
│       └── orders.json                # Persistência local de pedidos
└── frontend/
    ├── src/
    │   ├── App.jsx                    # Gerenciador Socket.io e roteador de abas
    │   ├── main.jsx                   # Ponto de entrada React
    │   ├── index.css                  # Design System Dark Mode de Alto Contraste
    │   ├── components/
    │   │   ├── CaixaView.jsx          # Painel de Lançamento de Pedidos
    │   │   ├── CozinhaView.jsx        # Painel KDS da Cozinha (Timer + 1 Clique)
    │   │   ├── ChamadaView.jsx        # Tela de Chamada TV no Balcão (Nome Gigante + Ding-Dong)
    │   │   └── CardapioView.jsx       # Gestor de Produtos do Cardápio
    │   └── utils/
    │       └── audioChime.js          # Sinal Sonoro "Ding-Dong" via Web Audio API
    ├── vite.config.js                 # Configuração Vite com Proxy HTTP/WS
    └── package.json                   # Dependências do frontend (React + Lucide + Socket.io)
```

---

## 🚀 Como Executar o Projeto

### 1. Iniciar o Backend
```bash
cd backend
npm install
npm dev
```
O backend rodará em `http://localhost:3001` (suportando conexões via rede local Wi-Fi em `0.0.0.0:3001`).

### 2. Iniciar o Frontend
```bash
cd frontend
npm install
npm run dev
```
Acesse no navegador: `http://localhost:3000` (ou IP local para acessar em smartphones/tablets conectados ao mesmo Wi-Fi).

---

## 🎯 Funcionalidades por Perfil

1. **Caixa (Lançamento Ágil):**
   - Nome do cliente obrigatório + Número de comanda automático.
   - Seleção rápida de produtos por categoria.
   - Adição de observações por item (*"Sem maionese"*, *"Sem cebola"*, etc.).

2. **Cozinha (KDS):**
   - Recebimento instantâneo em tempo real.
   - Cronômetro de tempo de espera com alerta por cor (Verde <5min, Amarelo 5-10min, Vermelho >10min).
   - Botão de 1 clique: *"Iniciar Preparo"* e *"Pronto / Chamar"*.

3. **Chamada Balcão / TV:**
   - Destaque em tamanho GIGANTE do **Nome do Cliente** e **Número da Comanda**.
   - Sinal sonoro sintetizado de campainha ("Ding-Dong") via Web Audio API (sem áudio automático por voz).
   - Botão *"Marcar como Entregue"*.

4. **Gerenciador de Cardápio:**
   - Adicione novos produtos, altere preços e desative itens esgotados com atualização instantânea para os caixas.
