# Plano de Ação Sequencial

Ordem única de execução para colocar o sistema na nuvem com impressão funcionando e sem perder dados.

Companheiro de `07_agente_impressao_spec.md`, que detalha o **como** do agente. Este documento define **em que ordem** e **o que vem antes**.

> **Atualização de 12/08/2026 — a hospedagem mudou de Render para VPS Linux.**
>
> Os Blocos 0 e 1 foram escritos contra o Render e estão superados pelo `09_deploy_vps.md`, que provisiona a VPS do zero. Ficam aqui como registro do porquê.
>
> **Do Bloco 2 em diante nada muda.** O agente de impressão continua obrigatório: a impressora segue no cabo USB do PC do caixa e a VPS segue num datacenter. Trocar de hospedagem não move um cabo.
>
> Já concluído: Passo 3 e o código do Passo 4.

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

**Resolvido de outro jeito: a hospedagem virou VPS.** A pergunta existia porque o disco do Render dependia de plano pago. Numa VPS o disco é real e a questão desaparece.

Fica o registro do que a pergunta protegia: sem disco persistente, a única saída honesta era trocar a persistência JSON por um banco gerenciado — 6 a 10 horas de reescrita. A escolha da VPS comprou isso por uma linha de configuração.

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

## Passo 4 — Persistir de verdade

**Caminho executado: VPS com os dados fora da pasta do deploy.** O provisionamento está no `09_deploy_vps.md`; aqui fica só o princípio.

`/srv/lanchonete` é o código, descartável e sobrescrito a cada `git pull`. `/var/lib/lanchonete` são os dados, apontados por `LANCHONETE_DATA_DIR` e nunca tocados por atualização.

O `store.js` semeia um diretório externo no primeiro boot, copiando `menu.json`, `users.json` e `pix-config.json` — e **só o que estiver faltando**. Sobrescrever o que já existe traria de volta o problema que a separação veio resolver: o estoque mora dentro do `menu.json`, e voltaria ao valor do commit a cada atualização.

**Verificar**
- [ ] Criar pedido, reiniciar o serviço, o pedido continua lá
- [ ] `git pull` + restart, o pedido continua lá
- [ ] Estoque alterado pela tela sobrevive aos dois

**Commit:** `feat: persistir dados em disco configuravel` — feito.

## Passo 5 [C] — Checkpoint de dados

Detalhado no Passo 9 do `09_deploy_vps.md`.

- [ ] `git pull` + restart não apaga pedido
- [ ] Reboot da VPS não apaga pedido
- [ ] Cardápio, estoque e usuários sobrevivem aos dois
- [ ] Backup dos JSON baixado e guardado fora da VPS

**Só passe daqui se os quatro estiverem verdes.** Impressão em cima de dado que some é esforço jogado fora.

---

# BLOCO 2 — Impressão pela nuvem

Executa `07_agente_impressao_spec.md` na ordem de lá. Resumo da sequência:

## Passo 6 [R] — Spike do canal (~40min)

Agente conecta na VPS, recebe bytes, sai papel.

**Este risco era menor do que parecia.** O Socket.io manda ping a cada 25s, então a conexão do agente não fica ociosa perto de nenhum timeout de proxy — basta manter o `proxy_read_timeout` acima de 45s, e o `09_deploy_vps.md` sobe com 3600s.

O que ameaça o agente é a plataforma **parar o processo** por inatividade, que era o spin-down do Render Free. Numa VPS isso não existe. Continua valendo rodar o spike antes das outras cinco horas, mas ele deixou de ser um gate que pode matar o desenho.

## Passo 7 — Autenticação por token (Etapa 2 da spec 07)

Antes de qualquer coisa funcionar bonito. O servidor é público; sem token, qualquer um recebe nome e telefone dos seus clientes.

## Passo 8 — Transporte selecionável (Etapa 3)

Windows local usa spooler, nuvem usa agente. O mesmo código serve os dois.

**Correção da spec 07:** a Etapa 3 escolhe o transporte por `process.platform === 'win32'`. A regra funciona na VPS Linux por acidente, não por desenho — num host Windows sem impressora ela mandaria os comprovantes para o spooler da máquina errada, em silêncio. A escolha deve ser configuração explícita (`spooler`, `agente` ou automático), não dedução de plataforma.

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
| 0 | 1-2 | Diagnóstico e decisão | feito |
| 1 | 3-4 | Código da persistência | feito |
| 1 | 09_deploy_vps | **Provisionar a VPS do zero** | ~2h |
| 1 | 5 [C] | **Dados param de sumir** | +15min |
| 2 | 6-10 [C] | **Impressão pela VPS** | +4h |
| 2 | 11-12 | Diagnóstico e empacotamento | +2h |
| 3 | 13-14 | Prontidão para o evento | +2h |

Total a partir daqui: **~10h**.

A VPS acrescentou ~2h de provisionamento que o Render fazia calado, e devolveu isso em risco: o websocket do agente deixou de depender de decisão de plataforma.

## Se o tempo apertar

A saída honesta que sobrou é **parar depois do Passo 5**: dados seguros na VPS e o backend local no PC do caixa no dia do evento, onde a impressão funciona pelo spooler sem agente nenhum.

Isso custa as ~2h de provisionamento e resolve o risco maior. As ~6h do agente ficam para depois do evento — ou para antes dele, se a agenda permitir.
