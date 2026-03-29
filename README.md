# ⚡ Material Motion Gallery

Una galería minimalista de **52+ animaciones CSS** inspiradas en **Material Design**, 100% frontend, lista para copiar y pegar en cualquier proyecto.

## 🌐 URLs

- **Dev Server**: http://localhost:3000
- **GitHub**: https://github.com/PalmaxLabs/MotionForge

## ✨ Características

### Páginas
| Ruta | Descripción |
|------|-------------|
| `/` | Hero glassmorphism + 12 animaciones destacadas + stats |
| `/gallery` | 52+ cards con preview, filtros y búsqueda |
| `/motion/:slug` | Detalle completo con code panel + copy buttons |
| `/playground` | Constructor de animaciones con knobs en tiempo real |
| `/*` | 404 glassmorphism con ilustración |

### Animaciones (52+)
| Categoría | Cantidad | Ejemplos |
|-----------|----------|---------|
| 🖱️ Hover | 15 | zoom, elevate, glow, tilt, morph, flip, sweep |
| 🎬 Enter/Exit | 15 | fade-in, scale-in, bounce, stagger, flip, slide |
| 🔄 View Transitions | 5 | cross-fade, page-morph, shared-element, slide |
| ⚡ Microinteractions | 10 | spinner, dots, ripple, progress, toggle, skeleton |
| 📜 Scroll | 5 | reveal, marquee, sticky-header, neon, parallax |
| 🎁 Bonus | 2 | focus-ring, heart-burst |

## 🏗️ Stack Tecnológico

- **React 18** + TypeScript
- **Vite 5** (dev server)
- **Tailwind CSS 3**
- **React Router 6**
- **CSS puro** (zero JS animation libraries)

## 🎨 Design System

```css
/* Glassmorphism tokens */
--glass-bg: rgba(255,255,255,0.72)
--glass-blur: 16px
--glass-shadow-card: 0 4px 24px rgba(0,0,0,0.08)...

/* Material Motion timings */
--t-fast: 150ms cubic-bezier(0.4,0,0.2,1)
--t-normal: 250ms cubic-bezier(0.4,0,0.2,1)
--ease-spring: cubic-bezier(0.34,1.56,0.64,1)
```

## 🚀 Cómo Ejecutar

```bash
npm install
npm run dev          # Development (http://localhost:3000)
npm run build        # Build producción
npm run preview      # Preview build
```

## 📁 Estructura

```
src/
├── components/
│   ├── ui/           # Button, Card, Modal, Badge
│   ├── layout/       # Header, Sidebar
│   └── motion/       # AnimationPreview, MotionCard
├── pages/            # Home, Gallery, MotionDetail, Playground, NotFound
├── data/             # motions.ts (52 animation definitions)
├── hooks/            # useCopyToClipboard
├── utils/            # cn (classnames utility)
└── styles/
    ├── globals.css   # Design tokens + glassmorphism base
    └── animations.css # 52+ @keyframes definitions
```

## 🔧 Funcionalidades

- **Copy CSS/HTML** — Botones que copian al clipboard con feedback visual
- **Filtros por categoría** — Sidebar con 5 categorías
- **Búsqueda en tiempo real** — Por nombre, descripción y tags
- **Playground** — Knobs: duración, easing, delay, propiedades CSS, color, forma
- **Dark Mode** — Toggle con CSS custom properties
- **Responsive** — Mobile (1col) / Tablet (2col) / Desktop (3col + sidebar)
- **Stagger animations** — Cards entran en cascada al cargar

## Creado con ❤️ · Material Design 3 · CSS puro · Sin librerías JS de animación
