# Especificação de Requisitos Funcionais e Não-Funcionais

## 🎯 Escopo do Sistema
Sistema de gerenciamento ágil de pedidos para lanchonetes de atendimento presencial/balcão, integrando as visões do **Caixa**, da **Cozinha (KDS)** e do **Painel de Chamada no Balcão/TV**.

---

## 📋 Módulos e Requisitos Funcionais

### 1. Módulo Caixa (Lançamento de Pedidos)
- **RF1.1**: Registrar novo pedido vinculando o **Nome do Cliente** (obrigatório) e o **Número do Pedido/Comanda** (gerado automaticamente).
- **RF1.2**: Navegar no cardápio por categorias (Hambúrgueres, Bebidas, Porções, Sobremesas).
- **RF1.3**: Adicionar itens com seletor de quantidade rápida (+ / - / teclado numeric).
- **RF1.4**: Inserir observações personalizadas por item (ex: *"Sem maionese"*, *"Sem cebola"*, *"Bem passado"*).
- **RF1.5**: Visualizar resumo do pedido com cálculo automático de total em R$.
- **RF1.6**: Botão "Finalizar e Enviar para Cozinha" com confirmação instantânea via WebSocket.

---

### 2. Módulo Cozinha (KDS - Kitchen Display System)
- **RF2.1**: Receber novos pedidos em tempo real via WebSockets sem atualizar a página.
- **RF2.2**: Exibir pedidos organizados em cartões com:
  - Número da Comanda e Nome do Cliente em destaque.
  - Lista de itens e suas respectivas observações destacadas.
  - Cronômetro de tempo de espera com código de cor (Verde: <5m, Amarelo: 5-10m, Vermelho: >10m).
- **RF2.3**: Ação de 1 clique para alterar o status:
  - De **Pendente** para **Em Preparo**.
  - De **Em Preparo** para **Pronto / Chamar**.
- **RF2.4**: Opção de cancelar pedido se necessário.

---

### 3. Módulo Painel de Chamada (TV / Monitor do Balcão)
- **RF3.1**: Interface maximizável em Fullscreen otimizada para visualização à distância (TVs e Monitores de Balcão).
- **RF3.2**: Destaque Gigante do **Nome do Cliente** e **Número do Pedido** quando o pedido é marcado como **"Pronto / Chamar"**.
- **RF3.3**: Disparo automático de **Sinal Sonoro de Campainha ("Ding-Dong")** sintetizado quando um novo cliente é chamado. Sem sintetização de voz automática.
- **RF3.4**: Botão "Marcar como Entregue" para remover o pedido da lista de chamadas ativas.
- **RF3.5**: Exibição dos últimos pedidos entregues em histórico lateral/inferior.

---

### 4. Módulo Gerenciador de Cardápio
- **RF4.1**: Adicionar novos produtos com Nome, Preço, Categoria, Descrição e Imagem/Ícone.
- **RF4.2**: Editar preço ou desativar temporariamente itens esgotados.
- **RF4.3**: Atualização instantânea em tempo real no Caixa quando o cardápio for alterado.

---

## ⚡ Requisitos Não-Funcionais (RNF)
- **RNF1**: Sincronização em tempo real via **Socket.io** com latência inferior a 100ms na rede local Wi-Fi.
- **RNF2**: Responsividade total para smartphones, tablets, notebooks e Smart TVs.
- **RNF3**: Efeito sonoro sintetizado em Web Audio API nativa para evitar falhas com arquivos de áudio externos.
- **RNF4**: Design de alto contraste com fontes grandes para visibilidade de longe.
