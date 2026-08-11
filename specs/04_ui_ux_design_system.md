# Especificação de UI/UX e Design System

## 🎨 Paleta de Cores (Dark Mode de Alto Contraste)

```css
:root {
  /* Backgrounds */
  --bg-dark: #0f172a;        /* Slate 900 */
  --bg-card: #1e293b;        /* Slate 800 */
  --bg-card-hover: #334155;  /* Slate 700 */

  /* Cores Principais */
  --primary: #3b82f6;       /* Blue 500 */
  --primary-glow: rgba(59, 130, 246, 0.4);

  /* Status */
  --status-pendente: #06b6d4;  /* Cyan 500 */
  --status-preparo: #f59e0b;   /* Amber 500 */
  --status-pronto: #10b981;    /* Emerald 500 */
  --status-entregue: #64748b;  /* Slate 500 */
  --status-urgente: #ef4444;   /* Red 500 */

  /* Textos */
  --text-main: #f8fafc;       /* Slate 50 */
  --text-muted: #94a3b8;      /* Slate 400 */
  --text-highlight: #fef08a;  /* Yellow 200 para observações */
}
```

---

## 🔊 Sintetizador Sonoro ("Ding-Dong" via Web Audio API)
Para garantir funcionamento 100% confiável sem falhas de carregamento de arquivo MP3 ou políticas de bloqueio de autoplay nos navegadores:
- Utilizaremos a **Web Audio API** do HTML5.
- Ao acionar a chamada, sintetizaremos duas frequências sequenciais (ex: 523.25Hz [C5] seguido de 392.00Hz [G4]) com envelope de ganho suave decay (som limpo de campainha de balcão).

---

## 📺 Dispositivo & Layout das Visões
1. **Caixa (Mobile / Tablet / PC)**: Layout com 2 colunas: Cardápio interativo na esquerda e Carrinho/Resumo do Cliente na direita.
2. **Cozinha (KDS TV / Tablet)**: Grade responsiva de cartões grandes, timer dinâmico atualizado a cada segundo e botões de toque fácil (mínimo 48px de altura).
3. **Chamada Balcão (TV 4K / Full HD)**: 
   - Lado Esquerdo: Último cliente chamado com Nome e Número em **fonte de 96px+** piscando com efeito de brilho verde esmeralda.
   - Lado Direito: Grade de pedidos prontos para retirada rápida.
