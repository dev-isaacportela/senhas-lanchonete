# Plano da noite: backend local exposto por túnel

Proposta para o cenário real: **uma noite só, aparelhos em redes diferentes, menos de uma semana.**

Substitui o Bloco 2 do `08_plano_acao_sequencial.md` e o `09_deploy_vps.md` para este evento. Nenhum dos dois some — continuam válidos se o sistema virar rotina depois.

---

## A ideia

O backend roda no PC do caixa, onde a impressora está. Um túnel de saída publica esse backend na internet, então os celulares da equipe alcançam o sistema de qualquer rede.

```
[celular da equipe]          [PC do caixa]
   dados moveis  ──── internet ────  cloudflared ──> localhost:3001
                                          |
                                     impressora USB
```

É a mesma inversão de direção da spec 07 — conexão de saída, sem abrir porta no roteador — só que aplicada ao servidor inteiro em vez de só à impressora. E é por isso que ela dispensa o agente.

## Por que isto e não a nuvem

| | Nuvem + agente | Túnel + backend local |
|---|---|---|
| Impressão | ~6h de código novo | **já funciona**, pelo spooler, desde o commit `4dc5fdf` |
| Servidor | provisionar e manter | nenhum |
| Persistência | disco, semeadura, checkpoint | arquivos locais, como sempre foi |
| Alcance pela internet | sim | sim |
| Trabalho até a noite | ~8h | **~30min** |
| Custo | R$ 0 a R$ 27 | R$ 0 |

O app não precisa de nenhuma mudança: o frontend usa `window.location.origin` no Socket.io e caminhos relativos em todo `fetch`, então ele se conecta sozinho ao endereço pelo qual foi aberto.

---

## Montagem, no PC do caixa

### 1. Instalar o cloudflared

```powershell
winget install --id Cloudflare.cloudflared
```

### 2. Subir o backend

```powershell
cd backend
npm start
```

Deixe em `0.0.0.0` (o padrão). **Não** use `HOST=127.0.0.1` aqui — aquilo é para VPS com nginx na frente.

### 3. Abrir o túnel

```powershell
cloudflared tunnel --url http://localhost:3001
```

Ele imprime uma URL parecida com `https://algo-aleatorio.trycloudflare.com`. **Anote essa URL.** É por ela que todo mundo entra.

### 4. Testar antes de qualquer coisa

- [ ] Abrir a URL num celular **com Wi-Fi desligado**, só dados móveis
- [ ] Criar um pedido por esse celular
- [ ] Ver o pedido aparecer na cozinha sem recarregar a página — se só aparece no F5, o websocket não subiu
- [ ] Sair o comprovante na impressora

### 5. Distribuir

Gere um QR code da URL e cole no balcão. Digitar `algo-aleatorio.trycloudflare.com` no celular alheio é pedido de erro.

---

## Os riscos, e o que fazer

**A URL muda se o túnel reiniciar.** É o risco número um. O túnel rápido gera um subdomínio aleatório a cada execução, então fechar a janela do `cloudflared` invalida o endereço de todo mundo no meio do movimento.

- Não feche a janela. Minimize.
- Se cair, rode de novo e redistribua a URL nova. Tenha o QR code fácil de regerar.
- Se você tiver um domínio próprio, um túnel nomeado com conta na Cloudflare dá URL fixa, também de graça. Vale a hora de configurar se a noite for importante.

**A internet do PC do caixa vira ponto único.** Se ela cair, todos param. Numa hospedagem em nuvem o risco não sumiria — só mudaria de lugar, e a impressão morreria junto.

**O sistema fica público naquela noite.** A URL é aleatória e não indexada, mas quem tiver o link tem o sistema. Veja a seção de segurança abaixo.

**Limite de 200 requisições simultâneas** no túnel rápido. Para uma lanchonete é folga enorme; não se preocupe.

---

## Antes de publicar: o mínimo de segurança

Enquanto `GET /api/users` devolver as senhas em texto puro, qualquer pessoa com o link do QR code lê a senha do `admin` e entra como gerente. Hoje ela é `123`.

Para uma noite, dois ajustes bastam:

1. **Parar de devolver o campo `senha`** em `GET /api/users`.
2. **Trocar as senhas** de todos os usuários por algo não óbvio.

Não é autenticação de verdade — é fechar a porta que está escancarada. A correção completa está registrada como tarefa separada.

---

## Plano B da noite

Se o túnel ou a internet caírem e não voltarem:

1. Ligue um roteador ou o hotspot de um celular.
2. Conecte o PC do caixa e os aparelhos da equipe nessa rede.
3. Todos acessam `http://IP-DO-PC:3001` — descubra o IP com `ipconfig`.

**Isso funciona sem internet nenhuma**, porque o servidor está na mesma rede. Deixe o IP anotado no papel junto com a URL do túnel.

Outras linhas para a folha colada no PC:

- Como desligar a impressão automática se a impressora travar: aba Impressora, desmarcar habilitado
- Os dados ficam em `backend/data/` — copie a pasta para um pendrive no fim da noite
- Telefone de quem sabe mexer
