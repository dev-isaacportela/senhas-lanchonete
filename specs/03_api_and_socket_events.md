# Especificação de APIs REST e Eventos WebSocket (Socket.io)

## 🌐 Endpoints REST HTTP

| Método | Rota | Descrição | Corpo da Requisição | Resposta |
|---|---|---|---|---|
| `GET` | `/api/orders` | Retorna todos os pedidos ativos e recentes | N/A | `[ { order } ]` |
| `POST` | `/api/orders` | Cria um novo pedido no sistema | `{ cliente, itens }` | `{ status: 'success', order }` |
| `PATCH` | `/api/orders/:id/status` | Atualiza o status do pedido | `{ status }` | `{ status: 'success', order }` |
| `GET` | `/api/menu` | Retorna o cardápio atualizado | N/A | `{ categorias, produtos }` |
| `POST` | `/api/menu` | Adiciona/atualiza produto no cardápio | `{ produto }` | `{ status: 'success', menu }` |

---

## ⚡ Eventos Socket.io (Tempo Real)

### Servidor -> Clientes (Broadcast)
1. `pedidos_iniciais`: Enviado ao se conectar. Transmite todo o estado atual dos pedidos.
2. `novo_pedido_criado`: Emitido quando o Caixa lança um pedido.
   - Payload: Objeto do pedido completo.
3. `status_pedido_atualizado`: Emitido quando a Cozinha altera para `em_preparo` ou `pronto`.
   - Payload: `{ id, status, cliente, numero }`.
4. `pedido_chamado`: Emitido especificamente quando o pedido fica `pronto`. Dispara a animação e o som "Ding-Dong" na TV.
5. `cardapio_atualizado`: Emitido ao alterar produtos no gerenciador.

### Cliente -> Servidor (Emissão de Ações)
1. `criar_pedido`: Caixa envia dados do novo pedido.
2. `mudar_status_pedido`: Cozinha ou Balcão alteram estado (`pendente` -> `em_preparo` -> `pronto` -> `entregue`).
