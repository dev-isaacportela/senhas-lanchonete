# Plano de Ação Sequencial

Ordem única de execução para colocar o sistema na nuvem com impressão funcionando e sem perder dados.

Companheiro de `07_agente_impressao_spec.md`, que detalha o **como** do agente. Este documento define **em que ordem** e **o que vem antes**.

## Princípio de ordenação

Perda de dado vem antes de conveniência. Comprovante que não sai é um cliente irritado; histórico de vendas que evapora é a prestação de contas do evento inteiro. Por isso a persistência vem primeiro, mesmo sendo menos visível.

Cada bloco termina com o sistema utilizável. Dá para parar em qualquer checkpoint.

`[R]` = risco, `[C]` = checkpoint, `[!]` = decisão sua, não minha.

---

# BLOCO 0 — Medir antes de mexer

Duas perguntas sem resposta hoje. Nenhuma linha de código.

## Passo 1 — Confirmar a perda de dado

**Fazer**
- Criar um pedido em produção, anotar o número.
- Disparar um deploy qualquer no Render (pode ser "Clear build cache & deploy").
- Abrir Vendas depois que subir.

**Resultado esperado:** o pedido sumiu, e a numeração voltou para onde estava no último commit.

**Porquê:** `backend/data/*.json` está versionado. O Render clona o repositório a cada deploy, então o disco do container nasce com os dados do git, não com os dados de produção. Não é só efemeridade — é reversão. Precisa ser visto para ser levado a sério.

## Passo 2 [!] — Verificar o plano do Render

**Fazer:** abrir o painel do serviço e anotar se é Free ou pago.

Isso decide o Passo 4:

| Plano | Caminho |
|---|---|
| Free | Disco persistente **não existe**. Vai ter que ser banco externo ou upgrade. |
| Starter ou acima | Disco persistente resolve em 15 minutos, sem mudar código. |

**Me traga essas duas respostas antes do Bloco 1.** O resto do plano depende delas.

---

# BLOCO 1 — Parar de perder dados

## Passo 3 — Tirar os dados de operação do versionamento

**Objetivo:** o repositório deixa de sobrescrever a produção a cada deploy.

**Fazer**
- `git rm --cached backend/data/orders.json backend/data/logs.json`
- `.gitignore` com esses dois arquivos.
- Manter `menu.json`, `users.json` e `pix-config.json` versionados — são configuração, e servem de semente numa instalação nova.
- No boot, `store.js` cria `orders.json` e `logs.json` vazios se não existirem (já faz, via fallback do `readJSON`).

**Verificar**
- [ ] Clonar o repositório numa pasta limpa e subir: o app funciona com pedidos vazios
- [ ] Um deploy não zera mais os pedidos existentes

**Commit:** `chore: remover dados de operacao do versionamento`

> Isso sozinho **não** resolve. O disco do container continua efêmero: reiniciar ainda apaga. Mas para de piorar a cada deploy, e é pré-requisito do Passo 4.

## Passo 4 [!] — Persistir de verdade

Escolha conforme o Passo 2:

### 4a. Disco persistente (Render Starter ou acima) — **recomendado**

**Fazer**
- Criar um disco no serviço, ponto de montagem `/var/data`.
- Variável de ambiente `LANCHONETE_DATA_DIR=/var/data`.
- Copiar `menu.json`, `users.json` e `pix-config.json` para o disco no primeiro boot, se estiverem ausentes.

**Esforço: ~30min. Zero mudança de código** — o `LANCHONETE_DATA_DIR` já existe no `store.js`.

**Verificar**
- [ ] Criar pedido, reiniciar o serviço, o pedido continua lá
- [ ] Fazer um deploy, o pedido continua lá

### 4b. Banco gerenciado (se ficar no Free)

Trocar a persistência JSON por Postgres ou SQLite hospedado.

**Esforço: 6 a 10h.** Reescreve `store.js`, todas as leituras e escritas, e a numeração sequencial de comanda precisa virar transação. É trabalho real, não configuração.

### 4c. Não persistir na nuvem

Aceitar que a nuvem é para testar e treinar, e rodar o backend local no dia do evento. **Esforço: zero, e resolve também a impressão** — mas encerra o Bloco 2 aqui.

**Commit:** `feat: persistir dados em disco configuravel`

## Passo 5 [C] — Checkpoint de dados

- [ ] Deploy não apaga pedido
- [ ] Reinício não apaga pedido
- [ ] Cardápio e usuários sobrevivem aos dois
- [ ] Backup manual dos JSON baixado e guardado fora do Render

**Só passe daqui se os quatro estiverem verdes.** Impressão em cima de dado que some é esforço jogado fora.

---

# BLOCO 2 — Impressão pela nuvem

Executa `07_agente_impressao_spec.md` na ordem de lá. Resumo da sequência:

## Passo 6 [R] — Spike do canal (~40min)

Agente conecta no Render, recebe bytes, sai papel. **É o passo que pode matar o plano**: se o Render derrubar websocket ocioso, a abordagem vira long-polling. Descobrir isso agora custa 40 minutos; descobrir na quinta hora custa a tarde.

**Gate:** se o spike falhar dos dois jeitos, pare e reavalie o Bloco 2 inteiro contra a opção 4c.

## Passo 7 — Autenticação por token (Etapa 2 da spec 07)

Antes de qualquer coisa funcionar bonito. O servidor é público; sem token, qualquer um recebe nome e telefone dos seus clientes.

## Passo 8 — Transporte selecionável (Etapa 3)

Windows local usa spooler, nuvem usa agente. O mesmo código serve os dois.

## Passo 9 — Fila com ack, TTL e dedup (Etapas 4 e 5)

As duas etapas que parecem burocracia e são o que separa "funciona na minha mesa" de "funciona no movimento".

## Passo 10 [C] — Checkpoint de impressão

- [ ] Pedido pelo celular na rede móvel imprime no PC de casa
- [ ] Agente offline não gera aviso de falha em toda venda
- [ ] Três pedidos seguidos saem em ordem
- [ ] Venda nunca trava

**Aqui já está entregável.** Os passos seguintes são diagnóstico e conforto.

## Passo 11 — Seletor e painel de status (Etapas 7 e 8)

Sem o painel, você descobre que o agente morreu quando o cliente reclama.

## Passo 12 — Empacotar e autostart (Etapa 9)

---

# BLOCO 3 — Prontidão para o evento

## Passo 13 — Ensaio geral

**Fazer:** simular uma hora de movimento com pelo menos dois dispositivos reais, estoque ligado em dois produtos e a impressora conectada.

**Verificar**
- [ ] Estoque zerando no meio do movimento bloqueia a venda com aviso claro
- [ ] Impressora sem papel: venda continua, aviso aparece
- [ ] Agente derrubado e religado: comprovantes pendentes saem
- [ ] Fluxo Caixa → Cozinha → TV → Entregue intacto

## Passo 14 — Plano B escrito

Uma folha impressa, colada no PC do caixa:

- Como subir o backend local se a internet cair (`cd backend && npm start` + o IP)
- Como desligar a impressão automática se a impressora travar
- Onde ficam os JSON para backup manual
- Telefone de quem sabe mexer

**Commit:** `docs: plano de contingencia do evento`

---

# Resumo da sequência

| Bloco | Passos | Entrega | Acumulado |
|---|---|---|---|
| 0 | 1-2 | Diagnóstico e decisão | ~30min |
| 1 | 3-5 [C] | **Dados param de sumir** | ~1h30 (4a) / ~11h (4b) |
| 2 | 6-10 [C] | **Impressão pela nuvem** | +4h |
| 2 | 11-12 | Diagnóstico e empacotamento | +2h |
| 3 | 13-14 | Prontidão para o evento | +2h |

Total pelo caminho 4a: **~9h30**. Pelo caminho 4b: **~19h**.

## Se o tempo apertar

A sequência tem duas saídas honestas:

1. **Parar no Passo 5.** Dados seguros na nuvem, impressão só no PC local no dia do evento. Custa ~1h30 e resolve o risco maior.
2. **Passo 4c direto.** Nuvem para treinar, local no dia. Custo zero, e a impressão funciona porque o backend está na mesma máquina da impressora.

A opção 2 é a que eu escolheria se o evento fosse semana que vem.
