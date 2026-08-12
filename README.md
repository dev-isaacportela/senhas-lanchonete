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
│   ├── server.js                      # Rotas REST, handlers de socket e bootstrap
│   ├── store.js                       # Estado em memória e persistência JSON
│   ├── services/
│   │   ├── orders.js                  # Criação e mudança de status de pedido
│   │   ├── estoque.js                 # Reservas de carrinho, baixa e devolução
│   │   └── printer/
│   │       ├── escpos.js              # Construtor de comandos ESC/POS
│   │       ├── layout.js              # Comprovante do cliente e via de cozinha
│   │       ├── driver-windows.js      # Envio RAW ao spooler do Windows
│   │       ├── fila.js                # Fila serial com retry e histórico
│   │       └── index.js               # API pública de impressão
│   ├── scripts/
│   │   ├── raw-print.ps1              # P/Invoke em winspool.drv (impressão RAW)
│   │   └── spike-print.js             # Diagnóstico de largura e code page
│   ├── package.json                   # Dependências do backend
│   └── data/
│       ├── menu.json                  # Cardápio + estoque persistente
│       ├── orders.json                # Persistência local de pedidos
│       └── printer-config.json        # Configuração da impressora térmica
└── frontend/
    ├── src/
    │   ├── App.jsx                    # Gerenciador Socket.io e roteador de abas
    │   ├── main.jsx                   # Ponto de entrada React
    │   ├── index.css                  # Design System Dark Mode de Alto Contraste
    │   ├── components/
    │   │   ├── CaixaView.jsx          # Painel de Lançamento de Pedidos
    │   │   ├── CozinhaView.jsx        # Painel KDS da Cozinha (Timer + 1 Clique)
    │   │   ├── ChamadaView.jsx        # Tela de Chamada TV no Balcão (Nome Gigante + Ding-Dong)
    │   │   ├── CardapioView.jsx       # Gestor de Produtos do Cardápio e Estoque
    │   │   └── ImpressoraView.jsx     # Configuração e teste da impressora térmica
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
   - Controle de estoque por produto: quantidade, alerta mínimo e reposição rápida.

5. **Impressora (somente conta Master):**
   - Configuração da impressora térmica, página de teste e histórico das últimas impressões.

---

## 📦 Controle de Estoque

O controle é **desligado por padrão** em todo produto. Enquanto estiver desligado, o item vende ilimitado — nada muda em relação ao comportamento anterior.

**Para ativar:** Cardápio → Editar produto → *"Controlar estoque deste produto"* → informe a quantidade e o alerta mínimo.

Com o controle ligado:

- O card no Caixa mostra `Restam N`, `Últimas N` (no alerta mínimo) ou `ESGOTADO`.
- Item esgotado fica opaco e não entra no carrinho.
- **Reserva no carrinho:** ao adicionar um item, as unidades ficam reservadas para aquele caixa. Um segundo caixa vê o saldo cair na hora e não consegue vender a mesma unidade.
- A reserva é devolvida ao remover o item, limpar o carrinho, sair da tela, fechar o navegador, ou automaticamente após 10 minutos de carrinho abandonado.
- A **baixa definitiva** acontece ao fechar o pedido, e é tudo-ou-nada: se faltar qualquer item, o pedido não é criado e o caixa recebe a lista do que precisa ajustar — sem perder o carrinho.
- **Cancelar** um pedido devolve o estoque. Cancelar de novo não devolve em dobro.

Reservas vivem só em memória: reiniciar o servidor limpa carrinhos abandonados e preserva o estoque, que fica em `backend/data/menu.json`.

Reposição rápida fica na coluna *Estoque* do Cardápio (`-1` / `+1` / `Repor`), e todo ajuste manual entra no log de auditoria com o nome do operador.

---

## 🖨️ Impressora Térmica

O comprovante é gerado em **ESC/POS** e entregue ao spooler do Windows em modo **RAW**, sem passar pelo driver gráfico — é isso que preserva corte de papel, negrito e fonte dupla. Não há dependência nativa nem compilação.

### ⚠️ A impressão exige o backend rodando no PC da impressora

A impressora é **USB**. Quem imprime é o processo Node que enxerga o spooler do Windows daquela máquina — então o backend precisa estar rodando **no próprio PC em que a impressora está ligada**.

Num deploy na nuvem (Render, Railway, Docker Linux) isso não existe: não há spooler nem `Get-Printer`, e nenhum servidor remoto alcança um cabo USB na sua mesa. O sistema detecta isso e degrada sem quebrar:

- A aba Impressora mostra um aviso explicando, em vez de erro.
- O botão de imprimir some do Caixa.
- Nenhum job é enfileirado, então não há aviso de falha a cada venda.
- **Pedidos, cozinha, TV, vendas e estoque continuam funcionando normalmente.**

Ou seja: dá para usar a nuvem no dia a dia e, no dia do evento, rodar o backend no PC do caixa para ter a impressão:

```bash
cd backend
npm start
```

Os outros dispositivos acessam pelo IP desse PC na rede Wi-Fi (`http://192.168.x.x:3001`).

### Configurar

1. Instale a impressora no Windows normalmente e anote o nome.
2. Entre como **Master** → aba **Impressora**.
3. Selecione a impressora na lista (o botão *Atualizar* relê o `Get-Printer` do Windows).
4. Clique em **Imprimir teste** — a página traz uma régua de colunas e uma amostra de acentuação.
5. No papel:
   - **Conte em que número a régua quebra a linha.** 32 = bobina de 58mm, 48 = bobina de 80mm. Ajuste o campo *Largura*.
   - **Confira `ç ã ê º`.** Se sair corrompido, troque a *Tabela de caracteres* (CP850 → CP860 → WPC1252) e teste de novo. Se nenhuma funcionar, ligue *Remover acentos ao imprimir*.
6. Só então ligue **"Imprimir o comprovante ao fechar o pedido"**.

Os defaults de fábrica são 32 colunas e CP850.

### Comportamento

- A impressão é **assíncrona e nunca bloqueia a venda**. Impressora desligada, sem papel ou offline: o pedido é criado normalmente e aparece um aviso persistente na tela do caixa.
- A fila é **serial** (a térmica não aceita jobs concorrentes) com 3 tentativas e backoff curto. Três pedidos seguidos saem em ordem.
- A **via de cozinha** existe e vem desligada: sem preços, itens em fonte grande e comanda gigante.
- **Reimprimir** fica em Vendas, em cada pedido. Sai marcada com `** 2a VIA **`, funciona mesmo com a impressão automática desligada e gera log de auditoria com quem reimprimiu.

### Se o envio RAW falhar

Existe um script de diagnóstico independente do app:

```bash
node backend/scripts/spike-print.js --listar
```

```bash
node backend/scripts/spike-print.js --impressora "NOME EXATO DA IMPRESSORA"
```

Se o PowerShell estiver bloqueado por política de execução, o plano B é compartilhar a impressora no Windows e enviar o arquivo direto para o compartilhamento:

```bash
node backend/scripts/spike-print.js --arquivo
```

```bash
copy /b backend\scripts\spike-output.bin \\localhost\NOME_COMPARTILHADO
```

---

## 🧪 Testar sem tocar nos dados reais

O servidor aceita `LANCHONETE_DATA_DIR` para apontar para uma cópia descartável de `backend/data`:

```bash
LANCHONETE_DATA_DIR=/caminho/para/copia PORT=3099 node backend/server.js
```
