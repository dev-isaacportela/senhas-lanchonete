# Design System & Visual Guidelines (Adobe Spectrum & Anti-Slop Directives)

---
version: 1.0.0
name: Adobe Spectrum Lanchonete
description: >-
  Creative enterprise platform UI anchored in Adobe's iconic red (#FA0F00)
  against dark tool surfaces (#1B1B1B, #252525, #303030) for high contrast KDS,
  Caixa, TV Chamada, and Cardápio management.
colors:
  primary: '#FA0F00'
  on-primary: '#ffffff'
  primary-hover: '#E00D00'
  ink: '#1B1B1B'
  ink-muted: '#6E6E6E'
  canvas: '#ffffff'
  surface-1: '#F5F5F5'
  surface-2: '#E8E8E8'
  border: '#D3D3D3'
  app-canvas: '#1B1B1B'
  app-surface-1: '#252525'
  app-surface-2: '#303030'
  app-border: '#404040'
  app-ink: '#EBEBEB'
  blue-link: '#0265DC'
  success: '#008000'
typography:
  display:
    fontFamily: 'Source Sans Pro, -apple-system, sans-serif'
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: '-0.01em'
  body:
    fontFamily: 'Source Sans Pro, -apple-system, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
spacing:
  base: 8px
  scale: [4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96]
radius:
  sm: 2px
  md: 4px
  lg: 8px
  pill: 9999px
shadows:
  card: '0 1px 4px rgba(0,0,0,0.12)'
  elevated: '0 4px 16px rgba(0,0,0,0.15)'
  app-elevated: '0 8px 32px rgba(0,0,0,0.5)'
motion:
  duration-fast: 130ms
  duration-base: 250ms
  easing: 'cubic-bezier(0.45, 0, 0.40, 1)'
---

## 🎨 Principais Diretrizes Visuais

1. **Red Signature (`#FA0F00`)**: Vermelho Adobe vibrante para marca, destaque de poder criativo e botões de chamada primários.
2. **Superfícies Dark Creative Cloud (`#1B1B1B`, `#252525`, `#303030`, `#404040`)**: Fundo escuro de alto desempenho projetado para operar sem fadiga visual em ambientes de cozinha e balcão.
3. **Tipografia Limpa**: `Source Sans Pro` / `Inter` com hierarquia rigorosa.
4. **Disciplina Anti-Em-Dash**: Proibido o uso do travessão `—` ou en-dash `–` em títulos, botões e textos visíveis. Utilizar hífen simples `-` ou pontuação limpa.
5. **Acessibilidade WCAG AA**: Alto contraste (15.8:1 no app-ink sobre app-canvas), alvos de toque de 44px+ e alinhamentos de 8px.
