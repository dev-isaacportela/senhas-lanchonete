# Plano de Execução Linear: Estoque e Impressão Térmica

Companheiro de `05_estoque_e_impressao_spec.md`. Aquele documento define **o quê**; este define **em que ordem**.

## Princípios de ordenação

1. **Risco de hardware primeiro.** A Etapa 1 é um teste descartável na impressora física. Se ela não aceitar RAW, a abordagem inteira muda, e é melhor descobrir isso em 30 minutos do que na décima hora.
2. **Toda etapa termina com o sistema funcionando.** Nenhuma etapa deixa o app quebrado. Dá para parar em qualquer ponto e ainda ter algo operável.
3. **Backend antes do frontend, dentro de cada feature.** O frontend só consome contratos já testáveis via `curl` ou console.
4. **Checkpoints explícitos.** Etapas 5, 12, 17 e 21 são só validação, sem código novo. São os pontos de parada seguros.

Marcações: `[R]` = etapa de risco, `[C]` = checkpoint de validação.

---

## ETAPA 1 [R] - Spike da impressora física

**Objetivo:** provar que dá para enviar bytes ESC/POS crus para a impressora USB deste PC. Nada mais.

**Fazer**
- Instalar a impressora no Windows e anotar o nome exato (`Get-Printer | Select Name`).
- Escrever `backend/scripts/raw-print.ps1`: `Add-Type` com P/Invoke em `winspool.drv` (`OpenPrinter`, `StartDocPrinter` com `pDataType = "RAW"`, `WritePrinter`, `EndDocPrinter`).
- Escrever `backend/scripts/spike-print.js`: monta um buffer com `ESC @` (init), texto ASCII, `LF LF LF`, `GS V 0` (corte) e chama o `.ps1`.
- Rodar `node backend/scripts/spike-print.js`.

**Verificar**
- [ ] Saiu papel impresso
- [ ] O corte automático funcionou
- [ ] Sem caixa de diálogo do Windows aparecendo

**Se falhar:** tentar o fallback de impressora compartilhada (`copy /b arquivo.bin \\localhost\NOME`). Se os dois falharem, **pare e me avise** — significa que a impressora só aceita o driver gráfico e o plano de impressão precisa ser redesenhado (provavelmente via renderização em imagem, o que muda o escopo).

**Commit:** `spike: validar impressao RAW ESC/POS via spooler do Windows`

---

## ETAPA 2 [R] - Spike de acentuação e largura

**Objetivo:** descobrir a code page e a largura reais antes de escrever qualquer layout.

**Fazer**
- Estender o spike para imprimir uma régua de colunas (`123456789012...` até 48) e a frase `Ação, pêssego, comanda nº 1, R$ 5,00`.
- Testar `ESC t 2` (CP850) com o texto convertido por `iconv-lite`, e `ESC t 16` (WPC1252).

**Verificar**
- [ ] Anotar em quantas colunas a régua quebra a linha (32 = bobina 58mm, 48 = 80mm)
- [ ] Anotar qual code page renderiza `ç ã ê º` corretamente

Esses dois números viram os defaults de `printer-config.json`. Sem eles, o layout seria chute.

**Commit:** `spike: definir code page e largura de colunas da termica`

---

## ETAPA 3 - Preparação do terreno

**Fazer**
- `git checkout -b feat/estoque-impressao`
- Copiar `backend/data/` para um backup fora do repositório. Todas as etapas seguintes escrevem em `menu.json` e `orders.json`.
- Rodar backend e frontend, confirmar que o fluxo Caixa → Cozinha → TV está funcionando **antes** de qualquer mudança. É a linha de base de comparação.
- `cd backend && npm install iconv-lite`

**Commit:** `chore: preparar branch e dependencia iconv-lite`

---

## ETAPA 4 - Extrair estado e persistência para `store.js`

**Objetivo:** hoje `orders`, `menu`, `users`, `auditLogs`, `readJSON`, `writeJSON` e `registrarLog` são variáveis soltas no topo do `server.js` (linhas 44-91). Os módulos de estoque e impressão precisam alcançar esse estado sem `require` circular.

**Fazer**
- Criar `backend/store.js` exportando os caches, `readJSON`/`writeJSON`, `registrarLog` e um `setIo(io)` (o `registrarLog` emite `novo_log_auditoria`, então precisa da instância do socket).
- `server.js` passa a importar do store e chama `store.setIo(io)` logo após criar o `io`.

**Verificar**
- [ ] App sobe sem erro
- [ ] Criar pedido, mudar status, editar produto: tudo idêntico
- [ ] Logs de auditoria ainda aparecem em tempo real no `LogsView`

Zero mudança de comportamento. Se algo mudou, é bug de extração.

**Commit:** `refactor: extrair estado e persistencia para store.js`

---

## ETAPA 5 - Unificar criação e mudança de status do pedido

**Objetivo:** a lógica está duplicada entre REST (`server.js:249` e `:345`) e socket (`:601` e `:661`). Estoque e impressão entram exatamente aqui. Duplicar seria garantir divergência.

**Fazer**
- Criar `backend/services/orders.js` com `criarPedido(payload)` e `alterarStatusPedido(id, status, operador)`, retornando `{ ok, order }` ou `{ ok: false, erro }`.
- Mover a lógica do handler REST para lá (é a versão mais completa, com validação de telefone para "pagar depois").
- Os 4 handlers viram cascas: chamam a função e traduzem o retorno para HTTP ou callback do socket.

**Verificar**
- [ ] Criar pedido pela UI (caminho socket) funciona
- [ ] Criar pedido via `curl` no `POST /api/orders` funciona
- [ ] "Pagar depois" sem telefone é rejeitado nos dois caminhos
- [ ] Numeração de comanda continua sequencial

**Commit:** `refactor: unificar criacao e mudanca de status em services/orders.js`

---

## ETAPA 6 [C] - Checkpoint de regressão

Sem código novo. Rodar o fluxo completo e comparar com a linha de base da Etapa 3.

- [ ] Caixa lança pedido com observação em item
- [ ] Cozinha inicia preparo e marca pronto
- [ ] TV toca o som e mostra a chamada
- [ ] Entrega parcial por item funciona
- [ ] Vendas mostra o pedido e a quitação de "pagar depois"
- [ ] Logs registram tudo

**Este é o ponto de não retorno seguro.** Daqui em diante entra comportamento novo. Se algo estiver estranho, resolva agora.

---

## ETAPA 7 - Schema de estoque no menu

**Fazer**
- No carregamento do menu no `store.js`, normalizar cada produto com `controlaEstoque: false`, `estoque: 0`, `estoqueMinimo: 0` quando ausentes. Migração implícita, sem script separado.
- Corrigir `POST /api/menu/produto` (`server.js:468`): hoje ele reconstrói o objeto no update e **descartaria os campos novos**. Precisa preservá-los no merge.

**Verificar**
- [ ] `menu.json` ganhou os campos em todos os produtos após o primeiro boot
- [ ] Editar nome/preço de um produto pelo Cardápio não zera os campos de estoque
- [ ] Todos os produtos continuam vendáveis (controle desligado por padrão)

**Commit:** `feat: adicionar campos de estoque ao schema de produtos`

---

## ETAPA 8 - Motor de reservas

**Fazer**
- Criar `backend/services/estoque.js` com o mapa `produtoId -> socketId -> { quantidade, expiraEm }`, e as funções `disponivelPara`, `reservar`, `liberar`, `liberarTudo`, `confirmar`, `devolver`, `varrerExpiradas`.
- TTL de 10 minutos, `setInterval` de varredura a cada 30s.
- Sem integração ainda. Módulo puro, testável isoladamente.

**Verificar**
- [ ] Script rápido no node: reservar 2 de 3, conferir que `disponivelPara` de outro socket retorna 1
- [ ] Reserva expirada é liberada pela varredura

**Commit:** `feat: motor de reservas de estoque em memoria`

---

## ETAPA 9 - Eventos socket de reserva

**Fazer**
- Handlers `reservar_item`, `liberar_item`, `liberar_carrinho` no `server.js`.
- Broadcast `estoque_atualizado` a cada mudança.
- `liberarTudo(socket.id)` no handler `disconnect` (`server.js:764`).

**Verificar**
- [ ] Pelo console do navegador em duas abas: reservar numa e ver o broadcast chegar na outra
- [ ] Fechar uma aba libera a reserva dela

**Commit:** `feat: eventos socket de reserva e liberacao de estoque`

---

## ETAPA 10 - Baixa na confirmação e devolução no cancelamento

**Fazer**
- Em `criarPedido`, antes de persistir: `estoque.confirmar(itens, socketId)`. Tudo-ou-nada. Se faltar, retornar `{ ok: false, erro: 'estoque_insuficiente', itensIndisponiveis }` e **não criar o pedido**.
- Marcar `estoqueBaixado: true` nos itens baixados.
- Em `alterarStatusPedido`, quando `status === 'cancelado'`, chamar `estoque.devolver(itens)` apenas nos itens com `estoqueBaixado`, e limpar a flag para impedir devolução dupla.
- Logs `estoque_baixa` e `estoque_devolucao`.

**Verificar**
- [ ] Produto com estoque 2: criar pedido de 2 zera o estoque em `menu.json`
- [ ] Novo pedido do mesmo produto é rejeitado com a lista de itens indisponíveis
- [ ] Cancelar o pedido devolve o estoque para 2
- [ ] Cancelar de novo **não** devolve para 4
- [ ] Produto com `controlaEstoque: false` nunca é bloqueado

**Commit:** `feat: baixa de estoque na confirmacao e devolucao no cancelamento`

---

## ETAPA 11 - Ajuste manual de estoque

**Fazer**
- `PATCH /api/menu/produto/:id/estoque` aceitando `{ valor }` ou `{ delta }`, com log de auditoria `estoque_ajuste` registrando o operador.
- `GET /api/estoque` para snapshot.

**Verificar**
- [ ] `curl` com `{ delta: 10 }` repõe e persiste
- [ ] O ajuste aparece no `LogsView`
- [ ] Estoque não fica negativo

**Commit:** `feat: endpoint de ajuste manual de estoque`

---

## ETAPA 12 [C] - Checkpoint de estoque no backend

Backend de estoque completo. Validar por `curl` e console, **sem UI ainda**.

- [ ] Reserva, liberação, baixa, devolução e ajuste manual, todos funcionando
- [ ] `menu.json` consistente após reiniciar o servidor
- [ ] Reservas somem no restart (comportamento esperado)

---

## ETAPA 13 - Estado de estoque no `App.jsx`

**Fazer**
- Listener `estoque_atualizado` mesclando no estado `menu` (já existe em `App.jsx:52`).
- Handlers `handleReservarItem`, `handleLiberarItem`, `handleLiberarCarrinho`, `handleAjustarEstoque`, repassados como props.

**Verificar**
- [ ] `console.log` do menu mostra o estoque atualizando ao reservar de outra aba

**Commit:** `feat: sincronizar estado de estoque no App`

---

## ETAPA 14 - Caixa com bloqueio de venda

O coração do pedido original: quando acaba, não vende.

**Fazer**
- Badge no card: `Restam N`, `Últimas N` (abaixo do mínimo), `ESGOTADO`.
- Card esgotado fica opaco e não clicável.
- `adicionarAoCarrinho` (`CaixaView.jsx:88`) chama `reservar_item` e **só atualiza o carrinho no callback de sucesso**.
- `alterarQuantidade` (`:103`) reserva no `+` e libera no `-`; botão `+` desabilitado no limite.
- Limpar carrinho e desmontar o componente emitem `liberar_carrinho`.
- Erro `estoque_insuficiente` no envio abre aviso listando o que remover, **sem apagar o carrinho**.
- Estilos de badge no `index.css`.

**Verificar**
- [ ] Produto zerado não entra no carrinho
- [ ] Duas abas, produto com estoque 1: só uma consegue reservar
- [ ] Fechar uma aba devolve a disponibilidade para a outra em tempo real
- [ ] Envio com estoque estourado mostra o item culpado e preserva o carrinho

**Commit:** `feat: bloquear venda de produtos sem estoque no caixa`

---

## ETAPA 15 - Gestão de estoque no Cardápio

**Fazer**
- Modal de produto ganha switch "Controlar estoque", "Quantidade" e "Alerta mínimo". O payload é montado por volta de `CardapioView.jsx:94` e precisa incluir os campos.
- Card mostra o saldo e botões rápidos `-1 / +1 / Repor`.
- Filtro "Somente itens acabando".

**Verificar**
- [ ] Ativar controle num produto e definir 5 unidades reflete no Caixa na hora
- [ ] Reposição rápida funciona e gera log
- [ ] Editar preço não afeta o estoque

**Commit:** `feat: gestao de estoque no gerenciador de cardapio`

---

## ETAPA 16 [C] - Checkpoint da feature de estoque

Feature completa e entregável. Rodar o bloco "Estoque" do checklist da spec 05.

- [ ] `cd frontend && npm run build` (o backend serve `frontend/dist`, que está versionado)
- [ ] Teste com dois dispositivos reais na rede Wi-Fi, não só duas abas

**Se precisar entregar só o estoque, para aqui.** A impressão é independente daqui em diante.

---

## ETAPA 17 - Núcleo ESC/POS

**Fazer**
- `backend/services/printer/escpos.js`: builder com init, alinhamento, negrito, tamanho duplo, linha divisória, `linhaColunas(esquerda, direita)` respeitando a largura, feed e corte. Conversão de texto via `iconv-lite` com a code page da Etapa 2.
- `backend/services/printer/driver-windows.js`: promover o spike da Etapa 1 a módulo, mais `listarImpressoras()` via `Get-Printer`.

**Verificar**
- [ ] Página de teste gerada pelo builder sai idêntica ao spike
- [ ] `linhaColunas` alinha o preço na margem direita exata

**Commit:** `feat: nucleo ESC/POS e driver de impressao Windows`

---

## ETAPA 18 - Configuração e teste pela UI

**Fazer**
- `printer-config.json` com os defaults descobertos nas Etapas 1 e 2.
- `GET`/`POST /api/printer-config`, `GET /api/printer/impressoras`, `POST /api/printer/teste`.
- `ImpressoraView.jsx` e nova aba restrita a `master` (padrão de `App.jsx:424`): seletor de impressora, largura, vias, cabeçalho, rodapé, botão "Imprimir teste".

**Verificar**
- [ ] Seletor lista as impressoras reais do Windows
- [ ] Botão de teste imprime e reporta sucesso/erro na tela
- [ ] Trocar a largura para 48 e testar mostra o layout mudando

Antes de qualquer impressão automática, já dá para configurar e diagnosticar pela interface. Isso torna as próximas etapas muito mais rápidas de depurar.

**Commit:** `feat: configuracao e teste de impressora pela interface`

---

## ETAPA 19 - Layout do comprovante do cliente

**Fazer**
- `printer/layout.js`: cabeçalho, número da comanda em fonte dupla, cliente, data, itens com observação, total, bloco de pagamento (com destaque para "pagar depois"), rodapé, corte.
- Expor no endpoint de teste uma opção para renderizar um pedido real, permitindo iterar sem criar vendas.

**Verificar**
- [ ] Item com nome longo não quebra o alinhamento do preço
- [ ] Observação aparece indentada sob o item
- [ ] Pedido "pagar depois" mostra telefone e data de cobrança
- [ ] Acentos corretos

**Commit:** `feat: layout do comprovante do cliente`

---

## ETAPA 20 - Impressão automática com fila

**Fazer**
- `printer/fila.js`: fila serial (térmica não aceita jobs concorrentes), 3 tentativas com backoff curto, histórico dos últimos jobs.
- Hook não bloqueante no `criarPedido`, após persistir e emitir `novo_pedido_criado`.
- Eventos `impressao_status` e `impressao_falhou` com motivo tratado.
- `App.jsx` exibe aviso persistente em falha. Falha silenciosa significa cliente sem comprovante.

**Verificar**
- [ ] Criar pedido imprime sem clique
- [ ] **Impressora desligada: o pedido é criado normalmente** e o caixa recebe o aviso
- [ ] Papel acabado tem o mesmo comportamento
- [ ] Três pedidos seguidos saem em ordem, sem embaralhar
- [ ] Desligar no config para de imprimir na hora

O teste da impressora desligada é o mais importante da etapa. Venda nunca pode travar por causa de periférico.

**Commit:** `feat: impressao automatica do comprovante com fila e retry`

---

## ETAPA 21 - Via de cozinha e reimpressão

**Fazer**
- Layout da via de cozinha: sem preços, itens e observações em fonte grande, comanda gigante. Desligada por padrão no config.
- `POST /api/orders/:id/reimprimir` reusando o mesmo layout e a mesma fila, com marca `** 2a VIA **`.
- Funciona mesmo com a impressão automática desligada.
- Log de auditoria `reimpressao` com operador.
- Botão "Reimprimir" no `VendasView`, nos **dois** blocos de renderização (tabela desktop `:548` e cards mobile `:679`), com trava de clique duplo.

**Verificar**
- [ ] Via de cozinha sai legível a distância quando ativada
- [ ] Reimpressão sai com `2a VIA` e conteúdo idêntico ao original
- [ ] Reimprimir com automático desligado funciona
- [ ] Clique duplo não gera duas impressões
- [ ] Reimpressão aparece nos logs

**Commit:** `feat: via de cozinha e reimpressao manual de pedidos`

---

## ETAPA 22 [C] - Validação final

- [ ] Checklist completo das seções 8 da spec 05 (estoque, impressão, regressão)
- [ ] `cd frontend && npm run build`
- [ ] Teste de ponta a ponta com dispositivos reais na rede
- [ ] Simular o pior caso: impressora offline + estoque zerando no meio do movimento
- [ ] Reiniciar o servidor com pedidos em aberto e conferir a integridade dos JSON
- [ ] Atualizar o `README.md` com a seção de configuração da impressora
- [ ] Merge em `main`

**Commit:** `docs: documentar configuracao de impressora e estoque no README`

---

## Resumo da sequência

| Etapa | Entrega | Acumulado |
|---|---|---|
| 1-2 [R] | Spikes de hardware | ~1h |
| 3 | Branch, backup, dependência | ~1,5h |
| 4-5 | Refatoração habilitadora | ~3h |
| 6 [C] | Checkpoint de regressão | ~3,5h |
| 7-11 | Estoque no backend | ~7h |
| 12 [C] | Checkpoint de backend | ~7,5h |
| 13-15 | Estoque no frontend | ~11h |
| 16 [C] | **Estoque entregável** | ~12h |
| 17-18 | Núcleo e configuração de impressão | ~15h |
| 19-20 | Comprovante automático | ~17,5h |
| 21 | Cozinha e reimpressão | ~18,5h |
| 22 [C] | **Tudo entregável** | ~20h |

Duas entregas parciais possíveis: **Etapa 16** (estoque completo) e **Etapa 22** (tudo). Os checkpoints 6 e 12 são pontos de parada seguros dentro do desenvolvimento.
