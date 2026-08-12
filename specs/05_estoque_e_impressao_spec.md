# Especificação: Controle de Estoque e Impressão Térmica Automática

Status: proposta / plano de implementação
Contexto: backend Express + Socket.io com persistência JSON, frontend React + Vite

---

## 1. Decisões definidas

| Tema | Decisão |
|---|---|
| Modelo de estoque | Reserva no carrinho + baixa definitiva na confirmação do pedido |
| Impressora | Térmica USB ligada ao PC que roda o backend (Windows) |
| Impressão automática | Comprovante do cliente, disparado na criação do pedido |
| Via de cozinha | Implementada, porém desligada por padrão (toggle na configuração) |
| Reimpressão manual | Incluída no escopo, botão por pedido no histórico de Vendas |
| Cancelamento de pedido | Devolve o estoque baixado, protegido contra devolução dupla |

### Premissas assumidas (ajuste se divergir)

1. Produtos existentes hoje entram com `controlaEstoque: false` (ilimitado). Nada muda no comportamento atual até o gerente ativar o controle por produto.
2. Falha de impressão nunca bloqueia a venda. O pedido é criado, a falha vira log e aviso na tela do caixa.
3. Reservas vivem apenas em memória. Reiniciar o servidor limpa reservas, que é o comportamento correto para um dado transitório.
4. Um único ponto de impressão (o PC servidor). Não há impressora separada na cozinha.

---

## 2. Refatoração habilitadora (pré-requisito das duas features)

Hoje a criação de pedido está duplicada em `backend/server.js`: `POST /api/orders` (linha 249) e o handler socket `criar_pedido` (linha 601). O mesmo vale para a mudança de status: `PATCH /api/orders/:id/status` (linha 345) e `mudar_status_pedido` (linha 661).

Estoque e impressão precisam entrar exatamente nesses pontos. Duplicar a lógica nos dois caminhos garante divergência.

**Ação:** extrair funções compartilhadas antes de tudo.

```
backend/services/orders.js
  criarPedido(payload)            -> { ok, order } | { ok: false, erro, itensIndisponiveis }
  alterarStatusPedido(id, status, operador)
```

Os dois handlers REST e os dois handlers socket passam a ser cascas finas que chamam essas funções e traduzem o retorno para HTTP ou callback. Sem mudança de contrato externo.

Esforço: ~1h. Risco: baixo, comportamento idêntico.

---

## 3. Feature A: Controle de Estoque

### 3.1 Modelo de dados

Novos campos por produto em `backend/data/menu.json`:

```json
{
  "id": "prod-waffle",
  "categoriaId": "doces_morango",
  "nome": "Waffle",
  "preco": 4,
  "disponivel": true,

  "controlaEstoque": true,
  "estoque": 40,
  "estoqueMinimo": 5
}
```

- `controlaEstoque: false` ou ausente = venda ilimitada (compatível com os dados atuais).
- `estoque` = unidades físicas restantes.
- `estoqueMinimo` = limiar do alerta visual "acabando".
- `disponivel` continua existindo e é independente: o gerente pode desativar um item mesmo com estoque.

Nos itens do pedido, marcar a baixa para evitar devolução dupla:

```json
{ "id": "prod-waffle", "quantidade": 2, "estoqueBaixado": true }
```

### 3.2 Reservas (novo módulo `backend/services/estoque.js`)

Estrutura em memória:

```js
// produtoId -> socketId -> { quantidade, expiraEm }
const reservas = new Map();
```

API interna:

| Função | Responsabilidade |
|---|---|
| `disponivelPara(produtoId, socketId)` | `estoque - reservas de outros sockets` |
| `reservar(produtoId, socketId, quantidade)` | valida e grava, renova TTL |
| `liberar(produtoId, socketId, quantidade)` | decremento parcial |
| `liberarTudo(socketId)` | usado no `disconnect` e no "limpar carrinho" |
| `confirmar(itens, socketId)` | valida tudo, baixa `estoque`, apaga reservas, persiste `menu.json` |
| `devolver(itens)` | usado no cancelamento |
| `varrerExpiradas()` | `setInterval` de 30s liberando TTL vencido |

TTL de reserva: **10 minutos**, renovado a cada interação com o carrinho. Um caixa que abandona a tela devolve o estoque sozinho.

`confirmar` é tudo-ou-nada: valida os itens todos antes de decrementar qualquer um. Como o Node é single-threaded e não há `await` no meio, a operação é atômica na prática.

### 3.3 Eventos Socket novos

| Evento | Direção | Payload |
|---|---|---|
| `reservar_item` | cliente -> servidor | `{ produtoId, quantidade }`, callback `{ ok, disponivel }` |
| `liberar_item` | cliente -> servidor | `{ produtoId, quantidade }` |
| `liberar_carrinho` | cliente -> servidor | `{}` |
| `estoque_atualizado` | servidor -> todos | `[{ produtoId, estoque, reservado, disponivel }]` |

`estoque_atualizado` é broadcast para todos, então o Caixa 2 vê em tempo real o que o Caixa 1 acabou de reservar.

Ao criar pedido, se algum item não tiver estoque, o retorno é rejeição com a lista de itens problemáticos:

```json
{ "erro": "estoque_insuficiente",
  "itensIndisponiveis": [{ "produtoId": "prod-waffle", "nome": "Waffle", "pedido": 3, "disponivel": 1 }] }
```

### 3.4 Endpoints REST novos

| Método | Rota | Uso |
|---|---|---|
| `PATCH` | `/api/menu/produto/:id/estoque` | `{ valor }` (definir) ou `{ delta }` (repor/abater). Gera log de auditoria |
| `GET` | `/api/estoque` | Snapshot para telas que não usam socket |

`POST /api/menu/produto` (linha 468) passa a aceitar e preservar `controlaEstoque`, `estoque`, `estoqueMinimo`. Atenção: hoje ele reconstrói o objeto e descartaria campos novos na edição.

### 3.5 Frontend

**`CaixaView.jsx`**
- Card de produto ganha badge: `Restam N` (normal), `Últimas N` (abaixo do mínimo, âmbar), `ESGOTADO` (zero, card desabilitado e opaco).
- `adicionarAoCarrinho` (linha 88) passa a chamar `reservar_item` e só atualiza o estado no callback de sucesso. Latência em rede local é irrelevante e evita carrinho mentindo sobre disponibilidade.
- `alterarQuantidade` (linha 103) reserva no `+1` e libera no `-1`; botão `+` desabilitado no limite.
- Limpar carrinho e desmontagem do componente emitem `liberar_carrinho`.
- Erro `estoque_insuficiente` no envio abre aviso listando o que remover, sem apagar o carrinho.

**`CardapioView.jsx`**
- Modal de produto ganha: switch "Controlar estoque", campo "Quantidade", campo "Alerta mínimo". Hoje o modal monta o payload na linha ~94 e precisa incluir os campos novos.
- Card do produto exibe o saldo e botões rápidos `-1 / +1 / Repor`, chamando `PATCH .../estoque`.
- Filtro extra "Somente itens acabando".

**`App.jsx`**
- Handlers `handleReservarItem`, `handleLiberarItem`, `handleAjustarEstoque`, e listener de `estoque_atualizado` mesclando no `menu` (o estado já existe na linha 52).

### 3.6 Auditoria

`registrarLog` (linha 71) recebe ações novas: `estoque_ajuste`, `estoque_baixa`, `estoque_devolucao`. O `LogsView` já renderiza qualquer ação genérica; só conferir se há ícone/cor por tipo a adicionar.

---

## 4. Feature B: Impressão Térmica Automática

### 4.1 Estratégia técnica (impressora USB no Windows)

O caminho recomendado é gerar bytes **ESC/POS** no Node e entregá-los ao spooler do Windows em modo **RAW**, sem passar pelo driver gráfico. Isso preserva corte de papel, negrito, fonte dupla e alinhamento.

**Driver primário: RAW via spooler do Windows.**
Node grava o buffer num arquivo temporário e chama um script PowerShell que faz P/Invoke em `winspool.drv` (`OpenPrinter` / `StartDocPrinter` com `pDataType = "RAW"` / `WritePrinter` / `EndDocPrinter`). Zero dependências nativas, zero `node-gyp`, funciona com qualquer impressora instalada no Windows.

**Fallback: compartilhamento de impressora.**
`copy /b arquivo.bin \\localhost\NOME_COMPARTILHADO`. Exige a impressora compartilhada, mas é uma linha de comando e serve como plano B se a política de execução do PowerShell atrapalhar.

**Alternativa descartada:** `node-thermal-printer` + `@thiagoelg/node-printer`. Funciona, mas exige compilação nativa no Windows, o que é a fonte mais comum de instalação quebrada no dia do evento.

**Acentuação:** ESC/POS não usa UTF-8. Selecionar code page com `ESC t 2` (CP850) e converter o texto com `iconv-lite` (JS puro, sem build). Fallback de segurança: remover acentos via `normalize('NFD')` se a impressora não aceitar a code page.

### 4.2 Estrutura de arquivos

```
backend/services/printer/
  escpos.js           # construtor de comandos: init, negrito, tamanho, alinhamento, corte, feed
  layout.js           # monta comprovante do cliente e via de cozinha a partir do pedido
  driver-windows.js   # envio RAW ao spooler + listagem de impressoras
  fila.js             # fila serial, retry (3 tentativas), registro de falhas
  index.js            # API pública: imprimirPedido(order, { vias })
backend/data/printer-config.json
```

### 4.3 Configuração (`printer-config.json`)

```json
{
  "habilitado": true,
  "nomeImpressora": "POS-58",
  "larguraColunas": 32,
  "codePage": "cp850",
  "cortarPapel": true,
  "vias": { "cliente": true, "cozinha": false },
  "copiasCliente": 1,
  "cabecalho": "FESTA DO MORANGO",
  "subCabecalho": "Desbravadores Apocalipse",
  "rodape": "Aguarde ser chamado no balcao"
}
```

`larguraColunas`: 32 para bobina de 58mm, 48 para 80mm. Todo o layout é calculado a partir desse número, nada hardcoded.

### 4.4 Layout do comprovante do cliente

```
        FESTA DO MORANGO
     Desbravadores Apocalipse
--------------------------------
        COMANDA  113             <- fonte dupla altura/largura
--------------------------------
Cliente: Isaac
11/08/2026 14:59
--------------------------------
2x Waffle              R$   8,00
1x Torta de morango    R$  10,00
   obs: sem calda
--------------------------------
TOTAL                  R$  18,00
Pagamento: PIX - PAGO
--------------------------------
  Aguarde ser chamado no balcao
          Obrigado!
[corte]
```

Para `formaPagamento: "pagar_depois"`, o bloco de pagamento vira destaque: `PENDENTE - Tel: ... - Cobranca: ...`, usando os campos que já existem no pedido.

Via de cozinha (quando ligada): sem preços, itens e observações em fonte grande, número da comanda gigante.

### 4.5 Integração e tolerância a falha

No `criarPedido` compartilhado, após persistir e emitir `novo_pedido_criado`:

```js
filaImpressao.enfileirar(newOrder, { vias: config.vias });
```

Chamada não bloqueante. A fila é serial (impressora térmica não aceita jobs concorrentes), com 3 tentativas e backoff curto. O resultado vira evento socket:

| Evento | Payload |
|---|---|
| `impressao_status` | `{ pedidoId, numero, ok: true }` |
| `impressao_falhou` | `{ pedidoId, numero, erro, motivo }` |

Motivos tratados com mensagem própria: impressora não encontrada, sem papel/offline, spooler parado, configuração desabilitada.

### 4.6 Endpoints REST

| Método | Rota | Uso |
|---|---|---|
| `GET` | `/api/printer-config` | Configuração atual |
| `POST` | `/api/printer-config` | Salvar configuração |
| `GET` | `/api/printer/impressoras` | Lista impressoras do Windows (`Get-Printer`), para montar o seletor |
| `POST` | `/api/printer/teste` | Página de teste com régua de colunas e amostra de acentuação |
| `POST` | `/api/orders/:id/reimprimir` | Reimprime um pedido existente. Body `{ vias, operadorNome }` |

### 4.6.1 Reimpressão manual

Reimprimir usa exatamente o mesmo `layout.js` e a mesma fila da impressão automática, então não há risco de as duas vias divergirem com o tempo. O único acréscimo é a marca `** 2a VIA **` no cabeçalho, para o cliente e o operador distinguirem de um comprovante original.

Regras:
- Funciona com a impressão automática desligada. Desligar o automático não deve impedir a emissão pontual de um comprovante.
- Gera log de auditoria `reimpressao`, registrando quem reimprimiu e quando. Comprovante duplicado circulando é algo que precisa ser rastreável.
- Escolha das vias no momento da reimpressão: cliente, cozinha, ou ambas.

### 4.7 Frontend

Nova aba **Impressora**, visível apenas para `role: master` (seguindo o padrão de `podeGerenciarCardapio` no `App.jsx:424`):

`frontend/src/components/ImpressoraView.jsx`
- Switch ligar/desligar impressão automática.
- Select de impressora populado pelo endpoint de listagem.
- Escolha de largura 58mm / 80mm.
- Checkboxes das vias e número de cópias.
- Campos de cabeçalho e rodapé.
- Botão "Imprimir teste" com retorno de sucesso/erro em tela.
- Painel dos últimos jobs com status.

`App.jsx` ganha os listeners `impressao_status` e `impressao_falhou`, exibindo aviso persistente em caso de falha, já que uma falha silenciosa significa cliente sem comprovante.

`VendasView.jsx` ganha o botão **Reimprimir** na coluna de ações, ao lado do botão de quitação já existente. A view renderiza a lista duas vezes (tabela desktop na linha ~548 e cards mobile na linha ~679), então o botão precisa entrar nos dois blocos. Estado de carregamento por pedido para evitar clique duplo enfileirando duas impressões.

---

## 5. Fases de implementação

| # | Fase | Entrega | Esforço |
|---|---|---|---|
| 0 | Refatoração habilitadora | `services/orders.js` com `criarPedido` e `alterarStatusPedido` compartilhados | ~1h |
| 1 | Estoque - backend | `services/estoque.js`, campos no menu, reservas, baixa, devolução, endpoints, eventos | ~3h |
| 2 | Estoque - frontend Caixa | Badges, bloqueio no esgotado, reserva ao adicionar, erro de estoque insuficiente | ~2h |
| 3 | Estoque - frontend Cardápio | Campos no modal, ajuste rápido, filtro de itens acabando | ~1,5h |
| 4 | Impressão - núcleo | `escpos.js`, `layout.js`, `driver-windows.js`, endpoint de teste | ~3h |
| 5 | Impressão - integração | Fila, retry, hook no `criarPedido`, eventos de status | ~1,5h |
| 6 | Impressão - frontend | `ImpressoraView.jsx`, avisos de falha | ~2h |
| 7 | Reimpressão manual | Endpoint, marca de 2a via, log, botão no `VendasView` | ~0,5h |
| 8 | Validação | Checklist abaixo + `npm run build` | ~1,5h |

Total estimado: **16 a 18 horas**. As fases 1-3 e 4-7 são independentes entre si depois da fase 0, então dá para entregar estoque primeiro e impressão depois.

---

## 6. Arquivos afetados

**Novos**
```
backend/services/orders.js
backend/services/estoque.js
backend/services/printer/{escpos,layout,driver-windows,fila,index}.js
backend/scripts/raw-print.ps1
backend/data/printer-config.json
frontend/src/components/ImpressoraView.jsx
```

**Modificados**
```
backend/server.js               # extração + rotas novas + eventos novos
backend/data/menu.json          # campos de estoque (migração automática na carga)
backend/package.json            # + iconv-lite
frontend/src/App.jsx            # handlers, listeners, nova aba
frontend/src/components/CaixaView.jsx      # reservas e badges
frontend/src/components/CardapioView.jsx   # gestão de estoque
frontend/src/components/VendasView.jsx     # botão Reimprimir (tabela + cards)
frontend/src/index.css          # estilos de badge e alerta
```

---

## 7. Riscos e mitigações

| Risco | Impacto | Mitigação |
|---|---|---|
| Acentuação sai corrompida na térmica | Médio | Code page configurável + botão de teste + fallback sem acentos |
| Largura errada quebra o layout | Baixo | Página de teste com régua de colunas antes do evento |
| PowerShell bloqueado por ExecutionPolicy | Alto | Invocar com `-ExecutionPolicy Bypass -File`; fallback via impressora compartilhada |
| Impressora offline no meio do evento | Alto | Fila com retry, aviso visível no caixa, venda nunca bloqueada |
| Estoque trava venda por reserva órfã | Médio | TTL de 10 min + liberação no `disconnect` + varredura periódica |
| Dois caixas na última unidade | Médio | É exatamente o que o modelo de reserva resolve |
| Edição de produto zerar o estoque | Médio | `POST /api/menu/produto` precisa preservar campos novos no merge |

---

## 8. Checklist de validação manual

**Estoque**
- [ ] Produto sem `controlaEstoque` continua vendendo ilimitado
- [ ] Produto com estoque 3: caixa adiciona 3, botão `+` desabilita no quarto
- [ ] Caixa 1 reserva 2 de 3; Caixa 2 vê "Restam 1" em tempo real
- [ ] Caixa 1 fecha o navegador; Caixa 2 volta a ver "Restam 3"
- [ ] Produto zerado aparece como ESGOTADO e não entra no carrinho
- [ ] Fechar pedido baixa o estoque e persiste em `menu.json`
- [ ] Cancelar pedido devolve o estoque, e cancelar de novo não devolve em dobro
- [ ] Reiniciar o servidor preserva o estoque e limpa as reservas
- [ ] Ajuste manual de estoque aparece no log de auditoria

**Impressão**
- [ ] Página de teste sai com colunas alinhadas e acentos corretos
- [ ] Criar pedido imprime o comprovante do cliente sem clique
- [ ] Papel acabado: pedido é criado normalmente e o caixa recebe o aviso
- [ ] Impressora desligada: aviso claro, sem travar a tela
- [ ] Pedido "pagar depois" imprime o bloco de cobrança
- [ ] Observação de item aparece no comprovante
- [ ] Desligar a impressão na configuração para de imprimir imediatamente
- [ ] Reimprimir do histórico sai com a marca `2a VIA` e conteúdo idêntico ao original
- [ ] Reimpressão funciona mesmo com a impressão automática desligada
- [ ] Clique duplo em Reimprimir não gera duas impressões
- [ ] Reimpressão aparece no log de auditoria com o operador correto

**Regressão**
- [ ] Fluxo Caixa -> Cozinha -> TV -> Entregue intacto
- [ ] Entrega parcial por item continua funcionando
- [ ] `cd frontend && npm run build` regenerado, já que o backend serve `frontend/dist`

---

## 9. Fora do escopo (decisões suas)

- **Impressora separada na cozinha**: a arquitetura de driver suporta, bastaria uma segunda entrada de configuração.
- **Impressão ao marcar Pronto**: não marcada.
- **Relatório de consumo de estoque** no `VendasView`: possível derivar do histórico depois.
