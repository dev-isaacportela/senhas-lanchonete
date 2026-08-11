# Diretrizes de Código e Estilo do Projeto (Sistema de Pedidos Lanchonete)

## 📌 Visão Geral
Este documento define as regras de desenvolvimento, design e arquitetura de código para o Sistema de Controle de Pedidos de Lanchonete.

---

## 🎨 Design System e Convenções Visuais
- **Tema Base**: Dark Mode Profissional (alto contraste, HSL dinamizado), projetado especificamente para legibilidade em monitores de cozinha (KDS) e telas de chamada em TV à distância.
- **Tipografia**: Importar Google Fonts (`Inter` e `Outfit`).
- **Cores de Status do Pedido**:
  - `Pendente / Recebido` (Novo na Cozinha): Azul / Ciano elétrico (`hsl(200, 90%, 55%)`)
  - `Em Preparo`: Amarelo / Âmbar (`hsl(40, 95%, 55%)`)
  - `Pronto / Chamar`: Verde Esmeralda (`hsl(145, 80%, 50%)`) - com animação de pulso visual
  - `Entregue / Concluído`: Cinza Escuro Suave (`hsl(220, 15%, 40%)`)
- **Alertas de Tempo de Espera**:
  - `< 5 minutos`: Borda Verde
  - `5 a 10 minutos`: Borda Amarela
  - `> 10 minutos`: Borda Vermelha Piscante

---

## 💻 Convenções de Backend (Node.js + Express + Socket.io)
- **Estrutura Modular**: Manter servidor REST e manipuladores Socket.io organizados de forma limpa.
- **Formato dos Pedidos**:
  ```json
  {
    "id": "ORD-101",
    "numero": 101,
    "cliente": "João Silva",
    "itens": [
      {
        "id": "prod-1",
        "nome": "X-Salada Especial",
        "quantidade": 2,
        "preco": 24.90,
        "observacao": "Sem maionese, molho verde à parte"
      }
    ],
    "total": 49.80,
    "status": "pendente", // pendente | em_preparo | pronto | entregue | cancelado
    "criadoEm": "2026-08-11T09:15:00.000Z",
    "atualizadoEm": "2026-08-11T09:15:00.000Z"
  }
  ```
- **Persistência**: Gravação síncrona/segura em arquivo local JSON (`backend/data/orders.json` e `backend/data/menu.json`).

---

## ⚡ Convenções de Frontend (React + Vite)
- Componentes funcionais limpos, modularizados.
- Estado sincronizado em tempo real via Socket.io com fallback e reconexão automática.
- Sintetizador de áudio Web Audio API (sem arquivos MP3 externos quebrados).
