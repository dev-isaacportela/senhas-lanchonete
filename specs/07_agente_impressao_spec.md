# Especificação: Agente de Impressão Local

Status: proposta / plano de implementação
Contexto: backend hospedado na nuvem (Render, Linux), impressora térmica USB ligada ao PC do caixa

---

## 1. O problema

A impressora está num cabo USB dentro da rede local. O backend está num datacenter. Nenhum servidor remoto alcança esse cabo — não é limitação do código, é topologia.

A solução é inverter a direção: em vez do servidor procurar a impressora, **um agente rodando no PC da impressora procura o servidor**. Conexão de saída, sem abrir porta, sem redirecionamento de roteador, sem túnel.

```
[Render / Linux]                          [PC do caixa / Windows]
   servidor  ──── websocket (saída) ────   agente  ──USB──  impressora
   monta os bytes ESC/POS                  escreve no spooler
```

## 2. Decisões

| Tema | Decisão | Porquê |
|---|---|---|
| Quem monta os bytes ESC/POS | O **servidor** | Layout e configuração já vivem lá e são editados pela aba Impressora. O agente vira um driver burro que nunca precisa de atualização quando o layout muda. |
| Transporte | Socket.io, mesma conexão do app | Já é dependência, já reconecta sozinho, e a conexão de saída atravessa qualquer NAT. |
| Autenticação | Token compartilhado por variável de ambiente | O servidor é público. Sem isso, qualquer um conecta fingindo ser o agente e recebe nome e telefone dos clientes. |
| Nome da impressora | Fica na configuração do servidor, alimentada pela lista que o agente reporta | Mantém a aba Impressora funcionando sem mudança de UX. |
| Job perdido com agente offline | Fila no servidor com TTL de 10 minutos | Comprovante de 40 minutos atrás não serve para ninguém. |
| Confirmação | O agente dá `ack`; sem ack o job volta para a fila | Sem isso, uma queda no meio do envio significa cliente sem comanda e ninguém sabe. |

### Premissas

1. Um único agente por vez. Dois agentes conectados imprimiriam em duplicidade — o servidor aceita o mais recente e recusa os outros.
2. O agente roda no mesmo Windows da impressora, então reaproveita `driver-windows.js` e `raw-print.ps1` sem alteração.
3. Sem internet não há impressão — mas também não há pedido, porque o pedido nasce no servidor. O agente não precisa funcionar offline.

---

## 3. Arquitetura

### 3.1 Arquivos

**Novos**
```
agente/
  index.js              # cliente socket, autenticação, reconexão
  fila-local.js         # dedup por jobId e retry local
  package.json          # socket.io-client + dotenv
  .env.example          # SERVIDOR_URL e AGENTE_TOKEN
  README.md             # instalação no PC do caixa
backend/services/printer/driver-agente.js   # envia o job pelo socket e espera ack
backend/services/printer/agentes.js         # registro dos agentes conectados
```

**Modificados**
```
backend/services/printer/index.js   # escolhe o transporte: spooler local ou agente
backend/server.js                   # handlers de registro e ack do agente
frontend/src/components/ImpressoraView.jsx   # painel de status do agente
```

O agente **não** importa `escpos.js` nem `layout.js`. Ele recebe bytes prontos. É o que permite mexer no comprovante sem tocar na máquina do caixa.

### 3.2 Eventos socket novos

| Evento | Direção | Payload |
|---|---|---|
| `agente_registrar` | agente → servidor | `{ token, hostname, impressoras: [] }`, callback `{ ok, erro }` |
| `agente_imprimir` | servidor → agente | `{ jobId, nomeImpressora, descricao, bufferBase64 }`, callback `{ ok, erro, motivo }` |
| `agente_impressoras` | agente → servidor | `{ impressoras: [] }` — atualiza a lista sem reconectar |
| `agente_status` | servidor → todos | `{ conectado, hostname, desde, impressoras }` — alimenta o painel da UI |

`agente_imprimir` usa o callback do Socket.io como ack. Sem resposta em 30s, o job é considerado falho e volta para a fila.

### 3.3 Segurança

O token vai em `AGENTE_TOKEN`, nos dois lados. O servidor:

- Recusa `agente_registrar` com token errado e **não** revela se o token existe.
- Só emite `agente_imprimir` para sockets que estão na sala `agentes` — nunca por broadcast.
- Registra em auditoria toda conexão e desconexão de agente.

Comparação do token com `crypto.timingSafeEqual`, não com `===`.

Se o token vazar, o pior caso é alguém receber comprovantes (nome do cliente, telefone de fiado, itens) e gastar a bobina. Não há escrita de dados por esse canal — o agente só recebe.

---

## 4. Plano de execução linear

Mesma disciplina do plano 06: risco primeiro, toda etapa termina com o sistema funcionando, backend antes do frontend.

`[R]` = etapa de risco, `[C]` = checkpoint.

### ETAPA 1 [R] — Spike do canal ponta a ponta

**Objetivo:** provar que um processo na sua casa recebe bytes do Render e imprime. Nada mais.

**Fazer**
- `agente/spike.js`: conecta no Socket.io do Render, emite `agente_registrar` com um token fixo, escuta `agente_imprimir` e chama o `imprimirRaw` do `driver-windows.js` já existente.
- No servidor, um handler temporário que aceita o token e dispara um job de teste ao receber `GET /api/printer/spike-agente`.

**Verificar**
- [ ] O agente conecta no Render e o log do servidor mostra o registro
- [ ] Chamar o endpoint faz sair papel (ou aparecer no `escpos_emulator`)
- [ ] Derrubar o Wi-Fi e voltar: o agente reconecta sozinho

**Se falhar:** se o Render bloquear websocket persistente ou derrubar a conexão a cada poucos minutos, **pare e me avise** — a abordagem muda para long-polling do agente em `GET /api/printer/proximo-job`, que funciona igual mas com mais latência.

**Commit:** `spike: validar canal de impressao servidor -> agente local`

---

### ETAPA 2 — Contrato e autenticação de verdade

**Fazer**
- `backend/services/printer/agentes.js`: registro em memória `socketId -> { hostname, desde, impressoras }`, com `registrar`, `remover`, `ativo()` e `listar()`.
- Validação do token com `timingSafeEqual`, lendo de `process.env.AGENTE_TOKEN`.
- Um agente por vez: ao registrar um novo, desconectar o anterior.
- Log de auditoria `agente_conectado` e `agente_desconectado`.

**Verificar**
- [ ] Token errado é recusado e o socket não entra na sala `agentes`
- [ ] Dois agentes: o segundo assume e o primeiro é desconectado
- [ ] Sem `AGENTE_TOKEN` no servidor, o registro é recusado (não passa livre)

**Commit:** `feat: registro e autenticacao do agente de impressao`

---

### ETAPA 3 — Transporte selecionável

**Fazer**
- `driver-agente.js` com a mesma interface do `driver-windows.js`: `disponivel()`, `listarImpressoras()`, `imprimirRaw(nome, buffer, descricao)`.
- `printer/index.js` escolhe: spooler local quando `process.platform === 'win32'`, agente quando há agente conectado, nenhum caso contrário.
- O motivo `plataforma_nao_suportada` vira `sem_agente` quando o servidor é Linux e não há agente.

**Verificar**
- [ ] No Windows local, nada muda: continua imprimindo pelo spooler
- [ ] No Render sem agente, `imprimirPedido` retorna `sem_agente` e não enfileira
- [ ] No Render com agente, o job chega e imprime

**Commit:** `feat: transporte de impressao selecionavel entre spooler e agente`

---

### ETAPA 4 — Fila com ack e TTL

**Fazer**
- Job pendente guarda `jobId`, `criadoEm` e `tentativas`.
- Sem ack em 30s ou com ack de erro: volta para a fila, até 3 tentativas.
- Job com mais de 10 minutos é descartado com log — comprovante velho não serve.
- Ao conectar um agente, despachar o que estiver pendente.

**Verificar**
- [ ] Criar pedido com o agente desligado, ligar o agente: o comprovante sai
- [ ] Matar o agente no meio do job: o job volta e sai na reconexão
- [ ] Job de 11 minutos é descartado, com registro no histórico

**Commit:** `feat: fila de jobs com ack e expiracao para o agente`

---

### ETAPA 5 — Dedup no agente

**Fazer**
- `agente/fila-local.js` guarda os `jobId` impressos nos últimos 30 minutos.
- Job repetido é confirmado com `ok` **sem imprimir de novo**.

Isso é o que impede a reconexão de gerar comprovante duplicado quando o ack se perde no caminho de volta.

**Verificar**
- [ ] Reenviar o mesmo `jobId` duas vezes gera um único papel
- [ ] Reiniciar o agente limpa a lista (comportamento aceito: a janela de risco é a reconexão, não o restart)

**Commit:** `feat: deduplicacao de jobs por id no agente`

---

### ETAPA 6 [C] — Checkpoint de backend

Sem código novo. Validar por `curl` e pelo log, sem UI.

- [ ] Pedido criado no Render imprime no PC de casa
- [ ] Agente offline não gera aviso de falha em toda venda
- [ ] Três pedidos seguidos saem em ordem
- [ ] Venda nunca trava, em nenhum dos cenários acima

---

### ETAPA 7 — Lista de impressoras vinda do agente

**Fazer**
- O agente envia `impressoras` no registro e sempre que reconecta.
- `GET /api/printer/impressoras` devolve essa lista quando o servidor é Linux.

Assim o seletor da aba Impressora volta a funcionar em produção, sem mudança na tela.

**Verificar**
- [ ] O seletor lista as impressoras do PC do caixa, não do servidor
- [ ] Sem agente, a lista vem vazia com o motivo `sem_agente`

**Commit:** `feat: seletor de impressoras alimentado pelo agente`

---

### ETAPA 8 — Painel de status na aba Impressora

**Fazer**
- Bloco no topo: agente conectado ou não, hostname, conectado desde quando.
- Listener de `agente_status` para atualizar em tempo real.
- Quando não há agente, a tela explica o que fazer em vez de só mostrar erro.

Sem isso, você descobre que o agente morreu quando o cliente reclamar que não recebeu comanda.

**Verificar**
- [ ] Fechar o agente muda o painel para desconectado em segundos
- [ ] Reabrir volta para conectado com o hostname certo

**Commit:** `feat: painel de status do agente de impressao`

---

### ETAPA 9 — Empacotar para o PC do caixa

**Fazer**
- `agente/README.md` com o passo a passo: copiar a pasta, `npm install`, preencher `.env`, `npm start`.
- `.env.example` com `SERVIDOR_URL` e `AGENTE_TOKEN`.
- Atalho na Inicialização do Windows, para o agente subir junto com a máquina.

**Verificar**
- [ ] Instalar do zero numa pasta limpa seguindo só o README funciona
- [ ] Reiniciar o Windows e o agente volta sozinho

**Commit:** `docs: instalacao do agente de impressao no PC do caixa`

---

### ETAPA 10 [C] — Validação final

- [ ] Pedido pelo celular, na rede móvel, imprime no PC de casa
- [ ] Desligar o Wi-Fi do PC por 1 minuto no meio de um pedido e religar
- [ ] Fechar o agente, criar 3 pedidos, reabrir: os 3 comprovantes saem
- [ ] Clique duplo em Reimprimir não gera duas impressões
- [ ] Token errado no `.env` é recusado com mensagem clara
- [ ] Atualizar o `README.md` principal com a seção do agente

**Commit:** `docs: documentar o agente de impressao no README`

---

## 5. Esforço

| Etapa | Entrega | Acumulado |
|---|---|---|
| 1 [R] | Spike do canal | ~40min |
| 2-3 | Autenticação e transporte | ~2h |
| 4-5 | Fila, ack e dedup | ~3h30 |
| 6 [C] | Checkpoint de backend | ~3h45 |
| 7-8 | Seletor e painel de status | ~5h |
| 9-10 | Empacotamento e validação | ~6h |

Ponto de parada seguro: **Etapa 6**. Dali em diante já imprime; o resto é diagnóstico e conforto.

---

## 6. Riscos

| Risco | Impacto | Mitigação |
|---|---|---|
| Render derruba websocket ocioso | Alto | Reconexão automática do Socket.io + fila pendente. Se for agressivo demais, cair para long-polling (Etapa 1). |
| Agente fechado sem ninguém notar | Alto | Painel de status na aba Impressora + agente na Inicialização do Windows |
| Comprovante duplicado na reconexão | Médio | Dedup por `jobId` na Etapa 5 |
| Token vazado | Médio | Só permite receber comprovantes, nunca escrever. Trocar o token e reiniciar os dois lados resolve. |
| Internet cai no evento | Alto | **Não tem mitigação neste desenho.** Sem internet não há pedido nem impressão. É o preço de manter o servidor na nuvem. |

---

## 7. O que este plano não resolve

**O disco do Render é efêmero.** Todo deploy ou reinício apaga `orders.json`, `menu.json` e `logs.json`, porque o plano gratuito não tem disco persistente. Hoje isso já acontece — o agente não muda nada aí. Se a operação vai mesmo viver na nuvem, isso precisa ser resolvido antes, com disco persistente pago ou troca da persistência JSON por um banco gerenciado.

Vale medir isso antes de investir as 6 horas do agente: não adianta o comprovante sair perfeito se o histórico de vendas some no próximo deploy.
