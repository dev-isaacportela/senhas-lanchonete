# Deploy na VPS

Runbook de provisionamento do zero numa VPS Linux (Ubuntu/Debian) com acesso SSH e nada mais.

Substitui o Bloco 1 do `08_plano_acao_sequencial.md`, que foi escrito para o Render. O Bloco 2 (agente de impressão) continua valendo inteiro e sem mudança.

`[R]` = risco, `[C]` = checkpoint, `[!]` = decisão sua.

---

## O que a VPS muda

| Tema | Render | VPS |
|---|---|---|
| Persistência | Disco efêmero; exigia disco pago montado em `/var/data` | **Disco real.** Basta manter os dados fora da pasta do deploy |
| Passo 2 do plano 08 (plano pago) | Decidia tudo | Não se aplica |
| Websocket ocioso | Risco externo, podia inviabilizar o agente | `proxy_read_timeout` no seu nginx |
| Agente de impressão | Obrigatório | **Obrigatório do mesmo jeito.** A impressora está no USB do PC do caixa, e a VPS está num datacenter |
| Uptime, TLS, firewall, backup | Da plataforma | **Seus** |

A última linha é o preço real da troca. Ganhou controle sobre o que quebrava a impressão; assumiu tudo o que a plataforma fazia calado.

---

## Premissas

- Ubuntu 22.04 ou 24.04, ou Debian 12. Usuário com `sudo`.
- Um domínio apontando para o IP da VPS. Sem domínio não há TLS, e sem TLS o celular na rede móvel recusa o `wss://` do Socket.io.
- O `frontend/dist` está versionado, então **a VPS não precisa buildar o frontend**. Nada de instalar vite nem as devDependencies numa máquina de 1 GB.

---

## Passo 1 — Usuário e pastas

O serviço não roda como root. Se alguém achar um furo na aplicação, que ache dentro de uma conta sem poder nenhum.

```bash
sudo adduser --system --group --home /srv/lanchonete lanchonete
sudo mkdir -p /srv/lanchonete /var/lib/lanchonete
sudo chown -R lanchonete:lanchonete /srv/lanchonete /var/lib/lanchonete
```

Duas pastas, dois propósitos, e essa separação é o coração do Bloco 1:

- `/srv/lanchonete` — o código. Descartável, sobrescrito a cada atualização.
- `/var/lib/lanchonete` — os dados. **Nunca** tocados por `git pull`.

## Passo 2 — Node

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs git
node -v
```

Qualquer LTS de 20 para cima serve. O código usa `??` e encadeamento opcional, nada exótico.

## Passo 3 — Código

```bash
sudo -u lanchonete git clone https://github.com/dev-isaacportela/senhas-lanchonete.git /srv/lanchonete
cd /srv/lanchonete
sudo -u lanchonete git checkout feat/estoque-impressao
```

**[!]** Os commits de persistência estão em `feat/estoque-impressao` e a `main` está atrás. Ou faz o merge antes, ou faz o checkout da branch — mas confira em qual você está antes de seguir, porque numa `main` desatualizada nada deste runbook funciona.

Se o repositório for privado, use uma deploy key de leitura em vez de senha.

## Passo 4 — Dependências

```bash
cd /srv/lanchonete/backend
sudo -u lanchonete npm install --omit=dev
```

Dentro de `backend/`, não na raiz. O `postinstall` da raiz instala também o frontend inteiro com vite e as devDependencies — uns 200 MB que a VPS não vai usar, já que o `dist` vem pronto do git.

## Passo 5 — Serviço

```bash
sudo cp /srv/lanchonete/deploy/lanchonete.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now lanchonete
sudo systemctl status lanchonete
```

O `LANCHONETE_DATA_DIR=/var/lib/lanchonete` já vem no arquivo. No primeiro boot o log mostra a semeadura:

```bash
sudo journalctl -u lanchonete -n 30 --no-pager
```

```
[store] semente copiada para o disco: menu.json
[store] semente copiada para o disco: users.json
[store] semente copiada para o disco: pix-config.json
```

Essas três linhas são a prova de que os dados estão fora da pasta do código. **Se não aparecerem no primeiro boot, pare aqui** — sem isso o Bloco 1 inteiro não aconteceu.

**Verificar**

- [ ] `curl -s localhost:3001/api/orders` responde `[]`
- [ ] `ls /var/lib/lanchonete` mostra os JSON
- [ ] `sudo systemctl restart lanchonete` e o serviço volta sozinho

## Passo 6 — Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

A 3001 fica fechada de fora de propósito: o serviço escuta em `127.0.0.1` (o `HOST` no arquivo do systemd) e quem fala com a internet é o nginx.

## Passo 7 — Nginx e TLS

```bash
sudo apt-get install -y nginx certbot python3-certbot-nginx
sudo cp /srv/lanchonete/deploy/nginx-lanchonete.conf /etc/nginx/sites-available/lanchonete
sudo sed -i 's/SEU_DOMINIO/seu.dominio.com.br/' /etc/nginx/sites-available/lanchonete
sudo ln -sf /etc/nginx/sites-available/lanchonete /etc/nginx/sites-enabled/lanchonete
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d seu.dominio.com.br
```

O `proxy_read_timeout 3600s` do arquivo é margem, não salvação: o Socket.io manda ping a cada 25s, então a conexão do agente não fica ociosa perto dos 60s padrão do nginx. A regra é só manter o timeout acima de `pingInterval + pingTimeout` (45s). O que derruba o agente de verdade é a plataforma parar o processo por inatividade — foi isso o Render Free, não timeout de socket.

**Verificar**

- [ ] `https://seu.dominio.com.br` abre o sistema
- [ ] O KDS da cozinha recebe um pedido novo sem recarregar a página — se só atualiza no F5, o websocket não subiu e o proxy está errado
- [ ] Celular na **rede móvel**, sem Wi-Fi, consegue criar pedido

## Passo 8 — Backup

O Passo 5 do plano 08 exige backup fora da máquina, e esta é a parte que não tem plataforma para fazer por você.

```bash
sudo tee /usr/local/bin/backup-lanchonete.sh >/dev/null <<'EOF'
#!/bin/bash
set -euo pipefail
DESTINO=/var/backups/lanchonete
mkdir -p "$DESTINO"
tar -czf "$DESTINO/dados-$(date +%F-%H%M).tar.gz" -C /var/lib/lanchonete .
# Mantem 14 dias de copias locais
find "$DESTINO" -name 'dados-*.tar.gz' -mtime +14 -delete
EOF
sudo chmod +x /usr/local/bin/backup-lanchonete.sh
sudo crontab -l 2>/dev/null | { cat; echo "*/30 * * * * /usr/local/bin/backup-lanchonete.sh"; } | sudo crontab -
```

**Isso é metade do trabalho.** Cópia guardada na mesma VPS não sobrevive à VPS. No dia do evento, puxe pelo menos uma vez para o seu computador:

```bash
scp usuario@seu.dominio.com.br:/var/backups/lanchonete/dados-*.tar.gz .
```

## Passo 9 [C] — Checkpoint de dados

Equivale ao Passo 5 do plano 08, adaptado. Os quatro precisam estar verdes antes do Bloco 2.

- [ ] Criar pedido → `git pull` + `systemctl restart lanchonete` → o pedido continua lá
- [ ] Criar pedido → `sudo reboot` na VPS → o pedido continua lá
- [ ] Mudar o estoque de um produto pela tela → reiniciar → o valor novo continua
- [ ] Um `.tar.gz` de backup baixado para fora da VPS

O terceiro item é o que o Render não conseguia entregar: o estoque mora dentro do `menu.json`, que é versionado, e a semeadura só preenche o que está faltando.

---

## Atualizar depois

```bash
cd /srv/lanchonete
sudo -u lanchonete git pull
sudo -u lanchonete npm install --omit=dev --prefix backend
sudo systemctl restart lanchonete
```

Os dados não são tocados: estão em `/var/lib/lanchonete`, e `orders.json` e `logs.json` nem existem mais no repositório.

---

## O que este runbook não resolve

**A API de usuários é aberta.** `GET /api/users` devolve a lista com as senhas em texto puro, e `POST /api/users` cria usuário `master`, ambos sem autenticação. Num domínio público isso é o sistema inteiro entregue a quem descobrir o endereço. As senhas de fábrica são `123`.

Enquanto não houver autenticação de verdade, o mínimo honesto:

- Trocar as senhas de todos os usuários antes de apontar o domínio.
- Se o evento chegar antes da correção, restringir por IP no nginx as rotas `/api/users` e a tela de configuração.

**Internet caiu, sistema parou.** Continua sem mitigação, igual ao Render. O pedido nasce no servidor. Vale ter o backend local ensaiado como plano B — é o Passo 14 do plano 08.
