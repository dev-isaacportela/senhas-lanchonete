# Agente de impressão local

A impressora está num cabo USB dentro da lanchonete. O servidor está num datacenter. Nenhum servidor remoto alcança esse cabo — não é limitação de código, é topologia.

A solução inverte a direção: em vez de o servidor procurar a impressora, **este agente, rodando no PC da impressora, procura o servidor**. Conexão de saída, sem abrir porta, sem redirecionar roteador.

```
[VPS / Linux]                            [PC do caixa / Windows]
   servidor  ──── websocket (saída) ───   agente  ──USB──  impressora
   monta os bytes ESC/POS                 escreve no spooler
```

O agente nunca monta o comprovante. Recebe bytes prontos e os escreve. É o que permite mudar o layout pela aba Impressora sem nunca mais tocar nesta máquina.

---

## Estado: spike (Etapa 1)

`spike.js` existe para responder uma pergunta só — sai papel? — e **não deve ir para o evento como está**. Falta o que as Etapas 4 e 5 da spec trazem:

- sem deduplicação por `jobId`: reenviar o mesmo trabalho imprime de novo
- sem fila local nem retry: trabalho que chega durante uma queda se perde
- sem reporte contínuo de impressoras

## Instalar no PC do caixa

Precisa do repositório inteiro na máquina — o agente reaproveita o driver que vive em `backend/services/printer/`.

```bash
cd agente
npm install
copy .env.example .env
```

Preencha o `.env` com o endereço do servidor e o token. O token tem que ser idêntico ao `AGENTE_TOKEN` do servidor; se estiver errado, o agente é recusado e sai com mensagem clara em vez de ficar reconectando em silêncio.

```bash
npm run spike
```

Conectado, o log mostra o hostname e as impressoras instaladas.

## Verificar o spike

Do seu computador, com o agente rodando no PC do caixa:

```bash
curl https://seu.dominio.com.br/api/printer/spike-agente
```

- [ ] O log do servidor mostra o registro do agente
- [ ] Sai papel, ou aparece no emulador ESC/POS
- [ ] Derrubar o Wi-Fi do PC e religar: o agente reconecta sozinho e um novo `curl` volta a imprimir

Para ver quem está conectado sem imprimir nada:

```bash
curl https://seu.dominio.com.br/api/printer/spike-agente/status
```

**Se o agente cair de minuto em minuto** com a conexão parada, o culpado é o `proxy_read_timeout` do nginx. O `deploy/nginx-lanchonete.conf` já sobe com 3600s.
