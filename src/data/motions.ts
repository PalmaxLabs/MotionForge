export type Category = 'Hover' | 'Enter/Exit' | 'View Transitions' | 'Microinteractions' | 'Scroll'

export interface Motion {
  id: string
  slug: string
  title: string
  category: Category
  description: string
  previewClass: string
  previewType: 'hover' | 'loop' | 'click'
  previewElement?: string
  css: string
  html: string
  featured?: boolean
  tags?: string[]
}

export const motions: Motion[] = [
  // ─── HOVER EFFECTS (15) ───
  {
    id: '1',
    slug: 'hover-zoom',
    title: 'Hover Zoom',
    category: 'Hover',
    description: 'Suave escalado al pasar el cursor. Ideal para imágenes y cards de producto.',
    previewClass: 'anim-hover-zoom',
    previewType: 'hover',
    featured: true,
    tags: ['scale', 'smooth', 'product'],
    css: `.hover-zoom {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-zoom:hover {
  transform: scale(1.08);
}`,
    html: `<div class="hover-zoom">
  <!-- Tu contenido aquí -->
</div>`,
  },
  {
    id: '2',
    slug: 'hover-elevate',
    title: 'Hover Elevate',
    category: 'Hover',
    description: 'Elevación con sombra Material Design. El elemento "flota" sobre la superficie.',
    previewClass: 'anim-hover-elevate',
    previewType: 'hover',
    featured: true,
    tags: ['shadow', 'elevation', 'material'],
    css: `.hover-elevate {
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
              transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0,0,0,0.12);
}
.hover-elevate:hover {
  box-shadow: 0 12px 32px rgba(0,0,0,0.18);
  transform: translateY(-4px);
}`,
    html: `<div class="hover-elevate">
  <!-- Tu card aquí -->
</div>`,
  },
  {
    id: '3',
    slug: 'hover-glow',
    title: 'Hover Glow',
    category: 'Hover',
    description: 'Efecto de luz azul al hover. Perfecto para CTAs y elementos interactivos.',
    previewClass: 'anim-hover-glow',
    previewType: 'hover',
    featured: true,
    tags: ['glow', 'light', 'cta'],
    css: `.hover-glow {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
              transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(30, 157, 241, 0.5),
              0 0 40px rgba(30, 157, 241, 0.2);
  transform: translateY(-2px);
}`,
    html: `<div class="hover-glow">
  Hover sobre mí
</div>`,
  },
  {
    id: '4',
    slug: 'hover-morph',
    title: 'Border Radius Morph',
    category: 'Hover',
    description: 'Transformación de cuadrado a círculo con spring. Icónico en Material You.',
    previewClass: 'anim-hover-morph',
    previewType: 'hover',
    featured: true,
    tags: ['morph', 'spring', 'material-you'],
    css: `.hover-morph {
  border-radius: 16px;
  transition: border-radius 300ms cubic-bezier(0.34, 1.56, 0.64, 1),
              transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-morph:hover {
  border-radius: 50%;
  transform: scale(1.05);
}`,
    html: `<div class="hover-morph" style="width:80px;height:80px;background:#1e9df1"></div>`,
  },
  {
    id: '5',
    slug: 'hover-underline-expand',
    title: 'Underline Expand',
    category: 'Hover',
    description: 'Línea inferior que se expande desde el centro. Clásico de navegación.',
    previewClass: 'anim-hover-scalex',
    previewType: 'hover',
    featured: false,
    tags: ['underline', 'nav', 'link'],
    css: `.hover-underline {
  position: relative;
}
.hover-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: #1e9df1;
  border-radius: 1px;
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1),
              left 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-underline:hover::after {
  width: 100%;
  left: 0;
}`,
    html: `<span class="hover-underline">Link con underline</span>`,
  },
  {
    id: '6',
    slug: 'hover-tilt',
    title: 'Perspective Tilt',
    category: 'Hover',
    description: 'Inclinación 3D con perspectiva. Efecto premium para portfolio y showcases.',
    previewClass: 'anim-hover-tilt',
    previewType: 'hover',
    featured: true,
    tags: ['3d', 'perspective', 'premium'],
    css: `.hover-tilt {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-tilt:hover {
  transform: perspective(800px)
             rotateX(8deg)
             rotateY(-8deg)
             scale(1.02);
}`,
    html: `<div class="hover-tilt">
  <img src="imagen.jpg" alt="..." />
</div>`,
  },
  {
    id: '7',
    slug: 'hover-color-sweep',
    title: 'Color Sweep',
    category: 'Hover',
    description: 'Barrido de color de izquierda a derecha. Transición fluida al hover.',
    previewClass: 'anim-hover-sweep',
    previewType: 'hover',
    featured: false,
    tags: ['color', 'sweep', 'background'],
    css: `.hover-sweep {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.hover-sweep::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(30,157,241,0.12), rgba(139,92,246,0.12));
  transform: translateX(-100%);
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
.hover-sweep:hover::before {
  transform: translateX(0);
}`,
    html: `<div class="hover-sweep" style="padding:1rem;border-radius:12px">
  Contenido
</div>`,
  },
  {
    id: '8',
    slug: 'hover-shake',
    title: 'Hover Shake',
    category: 'Hover',
    description: 'Vibración de atención al hover. Útil para alertas o botones de error.',
    previewClass: 'anim-hover-shake',
    previewType: 'hover',
    featured: false,
    tags: ['shake', 'alert', 'attention'],
    css: `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-4px) rotate(-1deg); }
  40% { transform: translateX(4px) rotate(1deg); }
  60% { transform: translateX(-3px) rotate(-0.5deg); }
  80% { transform: translateX(3px) rotate(0.5deg); }
}
.hover-shake:hover {
  animation: shake 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}`,
    html: `<button class="hover-shake">⚠️ Botón error</button>`,
  },
  {
    id: '9',
    slug: 'hover-float',
    title: 'Hover Float Loop',
    category: 'Hover',
    description: 'Flotación continua al hover. Perfecto para iconos y elementos decorativos.',
    previewClass: 'anim-hover-float',
    previewType: 'hover',
    featured: false,
    tags: ['float', 'loop', 'icon'],
    css: `@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
.hover-float:hover {
  animation: float 2s ease-in-out infinite;
}`,
    html: `<span class="hover-float" style="display:inline-block">🚀</span>`,
  },
  {
    id: '10',
    slug: 'hover-pulse-ring',
    title: 'Pulse Ring',
    category: 'Hover',
    description: 'Anillo pulsante al hover. Ideal para botones de llamada a la acción urgentes.',
    previewClass: 'anim-hover-pulse',
    previewType: 'hover',
    featured: false,
    tags: ['pulse', 'ring', 'urgent'],
    css: `@keyframes pulseRing {
  0% { box-shadow: 0 0 0 0 rgba(30, 157, 241, 0.4); }
  70% { box-shadow: 0 0 0 12px rgba(30, 157, 241, 0); }
  100% { box-shadow: 0 0 0 0 rgba(30, 157, 241, 0); }
}
.hover-pulse:hover {
  animation: pulseRing 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}`,
    html: `<button class="hover-pulse" style="border-radius:50px;padding:12px 24px">CTA</button>`,
  },
  {
    id: '11',
    slug: 'hover-jelly',
    title: 'Jelly Bounce',
    category: 'Hover',
    description: 'Efecto gelatina con spring physics. Divertido y orgánico para UI playful.',
    previewClass: 'anim-hover-jelly',
    previewType: 'hover',
    featured: false,
    tags: ['jelly', 'spring', 'playful'],
    css: `@keyframes jelly {
  0%, 100% { transform: scale(1, 1); }
  25% { transform: scale(0.95, 1.05); }
  50% { transform: scale(1.05, 0.95); }
  75% { transform: scale(0.98, 1.02); }
}
.hover-jelly:hover {
  animation: jelly 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}`,
    html: `<div class="hover-jelly">Jelly 🫠</div>`,
  },
  {
    id: '12',
    slug: 'hover-rotate',
    title: 'Hover Rotate',
    category: 'Hover',
    description: 'Rotación con spring al hover. Clásico para iconos de configuración.',
    previewClass: 'anim-hover-rotate',
    previewType: 'hover',
    featured: false,
    tags: ['rotate', 'icon', 'settings'],
    css: `.hover-rotate {
  transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.hover-rotate:hover {
  transform: rotate(15deg) scale(1.05);
}`,
    html: `<span class="hover-rotate" style="display:inline-block;font-size:24px">⚙️</span>`,
  },
  {
    id: '13',
    slug: 'hover-bg-shift',
    title: 'Background Shift',
    category: 'Hover',
    description: 'Cambio de fondo suave con transición de color. Perfecto para chips y tags.',
    previewClass: 'anim-hover-bg-shift',
    previewType: 'hover',
    featured: false,
    tags: ['background', 'color', 'chip'],
    css: `.hover-bg-shift {
  background: rgba(30,157,241,0.1);
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),
              transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-bg-shift:hover {
  background: #1e9df1;
  color: white;
  transform: translateY(-2px);
}`,
    html: `<span class="hover-bg-shift" style="padding:6px 16px;border-radius:999px;display:inline-block">Tag</span>`,
  },
  {
    id: '14',
    slug: 'hover-flip-card',
    title: '3D Card Flip',
    category: 'Hover',
    description: 'Volteo 3D de card al hover. Muestra dos caras de contenido distinto.',
    previewClass: 'anim-hover-flip',
    previewType: 'hover',
    featured: true,
    tags: ['3d', 'flip', 'card', 'two-sided'],
    css: `.flip-card {
  perspective: 600px;
  cursor: pointer;
}
.flip-inner {
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
}
.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}
.flip-front, .flip-back {
  backface-visibility: hidden;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flip-back {
  transform: rotateY(180deg);
  background: #1e9df1;
  color: white;
  border-radius: inherit;
}`,
    html: `<div class="flip-card" style="width:120px;height:120px">
  <div class="flip-inner">
    <div class="flip-front">Frente</div>
    <div class="flip-back">Reverso</div>
  </div>
</div>`,
  },
  {
    id: '15',
    slug: 'hover-card-swing',
    title: 'Card Swing',
    category: 'Hover',
    description: 'Oscilación suave desde la parte superior. Ideal para tarjetas de perfil.',
    previewClass: 'anim-card-swing',
    previewType: 'hover',
    featured: false,
    tags: ['swing', 'oscillate', 'profile'],
    css: `@keyframes cardSwing {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(5deg); }
  40% { transform: rotate(-4deg); }
  60% { transform: rotate(3deg); }
  80% { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
}
.card-swing:hover {
  animation: cardSwing 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: top center;
}`,
    html: `<div class="card-swing" style="display:inline-block">🎴 Card</div>`,
  },

  // ─── ENTER / EXIT (15) ───
  {
    id: '16',
    slug: 'fade-in',
    title: 'Fade In',
    category: 'Enter/Exit',
    description: 'El más simple y efectivo. Aparición por opacidad desde 0 a 1.',
    previewClass: 'anim-fade-in',
    previewType: 'loop',
    featured: true,
    tags: ['fade', 'opacity', 'simple'],
    css: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.fade-in {
  animation: fadeIn 400ms cubic-bezier(0, 0, 0.2, 1) forwards;
}`,
    html: `<div class="fade-in">Contenido visible</div>`,
  },
  {
    id: '17',
    slug: 'fade-in-up',
    title: 'Fade In Up',
    category: 'Enter/Exit',
    description: 'Aparición desde abajo con deceleration easing. El estándar de Material Design.',
    previewClass: 'anim-fade-in-up',
    previewType: 'loop',
    featured: true,
    tags: ['fade', 'translate', 'standard'],
    css: `@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in-up {
  animation: fadeInUp 400ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}`,
    html: `<div class="fade-in-up">Aparece desde abajo</div>`,
  },
  {
    id: '18',
    slug: 'fade-in-down',
    title: 'Fade In Down',
    category: 'Enter/Exit',
    description: 'Aparición desde arriba. Ideal para dropdowns, tooltips y notificaciones.',
    previewClass: 'anim-fade-in-down',
    previewType: 'loop',
    featured: false,
    tags: ['fade', 'dropdown', 'notification'],
    css: `@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in-down {
  animation: fadeInDown 400ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}`,
    html: `<div class="fade-in-down">Dropdown o tooltip</div>`,
  },
  {
    id: '19',
    slug: 'scale-in',
    title: 'Scale In',
    category: 'Enter/Exit',
    description: 'Aparición con escala desde 88%. Spring suave para elementos focales.',
    previewClass: 'anim-scale-in',
    previewType: 'loop',
    featured: true,
    tags: ['scale', 'spring', 'focal'],
    css: `@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.88);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.scale-in {
  animation: scaleIn 350ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}`,
    html: `<div class="scale-in">Elemento focal</div>`,
  },
  {
    id: '20',
    slug: 'scale-in-center',
    title: 'Scale In Center',
    category: 'Enter/Exit',
    description: 'Crecimiento desde el punto central. Efecto pop para modales y alerts.',
    previewClass: 'anim-scale-in-center',
    previewType: 'loop',
    featured: false,
    tags: ['scale', 'center', 'modal'],
    css: `@keyframes scaleInCenter {
  from {
    opacity: 0;
    transform: scale(0) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.scale-in-center {
  transform-origin: center;
  animation: scaleInCenter 400ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}`,
    html: `<div class="scale-in-center">Modal pop</div>`,
  },
  {
    id: '21',
    slug: 'slide-in-left',
    title: 'Slide In Left',
    category: 'Enter/Exit',
    description: 'Deslizamiento desde la izquierda. Para sidebars, panels y drawers.',
    previewClass: 'anim-slide-in-left',
    previewType: 'loop',
    featured: false,
    tags: ['slide', 'sidebar', 'panel'],
    css: `@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.slide-in-left {
  animation: slideInLeft 400ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}`,
    html: `<div class="slide-in-left">Sidebar / Drawer</div>`,
  },
  {
    id: '22',
    slug: 'slide-in-right',
    title: 'Slide In Right',
    category: 'Enter/Exit',
    description: 'Deslizamiento desde la derecha. Perfecto para notificaciones toast.',
    previewClass: 'anim-slide-in-right',
    previewType: 'loop',
    featured: false,
    tags: ['slide', 'toast', 'notification'],
    css: `@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.slide-in-right {
  animation: slideInRight 400ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}`,
    html: `<div class="slide-in-right">Toast notification</div>`,
  },
  {
    id: '23',
    slug: 'flip-in-x',
    title: 'Flip In X',
    category: 'Enter/Exit',
    description: 'Volteo horizontal desde 90 grados. Dramático y llamativo.',
    previewClass: 'anim-flip-in-x',
    previewType: 'loop',
    featured: false,
    tags: ['flip', '3d', 'dramatic'],
    css: `@keyframes flipInX {
  from {
    opacity: 0;
    transform: perspective(400px) rotateX(-90deg);
  }
  to {
    opacity: 1;
    transform: perspective(400px) rotateX(0);
  }
}
.flip-in-x {
  animation: flipInX 600ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}`,
    html: `<div class="flip-in-x">Volteo dramático</div>`,
  },
  {
    id: '24',
    slug: 'flip-in-y',
    title: 'Flip In Y',
    category: 'Enter/Exit',
    description: 'Volteo vertical 3D. Efecto de carta revelada.',
    previewClass: 'anim-flip-in-y',
    previewType: 'loop',
    featured: false,
    tags: ['flip', '3d', 'card-reveal'],
    css: `@keyframes flipInY {
  from {
    opacity: 0;
    transform: perspective(400px) rotateY(-90deg);
  }
  to {
    opacity: 1;
    transform: perspective(400px) rotateY(0);
  }
}
.flip-in-y {
  animation: flipInY 600ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}`,
    html: `<div class="flip-in-y">Carta revelada</div>`,
  },
  {
    id: '25',
    slug: 'bounce-in',
    title: 'Bounce In',
    category: 'Enter/Exit',
    description: 'Entrada con rebote elástico. Para elementos de celebración o feedback positivo.',
    previewClass: 'anim-bounce-in',
    previewType: 'loop',
    featured: true,
    tags: ['bounce', 'elastic', 'celebration'],
    css: `@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 0.9; transform: scale(1.05); }
  70% { transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
.bounce-in {
  animation: bounceIn 600ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}`,
    html: `<div class="bounce-in">🎉 ¡Éxito!</div>`,
  },
  {
    id: '26',
    slug: 'stagger-fade',
    title: 'Stagger Fade In',
    category: 'Enter/Exit',
    description: 'Lista de elementos que aparecen en cascada con delay incremental.',
    previewClass: 'anim-stagger',
    previewType: 'loop',
    featured: true,
    tags: ['stagger', 'list', 'cascade'],
    css: `@keyframes staggerFadeIn {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.stagger > * {
  opacity: 0;
  animation: staggerFadeIn 400ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}
.stagger > *:nth-child(1) { animation-delay: 0ms; }
.stagger > *:nth-child(2) { animation-delay: 80ms; }
.stagger > *:nth-child(3) { animation-delay: 160ms; }
.stagger > *:nth-child(4) { animation-delay: 240ms; }
.stagger > *:nth-child(5) { animation-delay: 320ms; }`,
    html: `<ul class="stagger">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>`,
  },
  {
    id: '27',
    slug: 'rotate-in',
    title: 'Rotate In',
    category: 'Enter/Exit',
    description: 'Entrada con rotación desde -200 grados. Efecto de torbellino.',
    previewClass: 'anim-rotate-in',
    previewType: 'loop',
    featured: false,
    tags: ['rotate', 'spin', 'whirl'],
    css: `@keyframes rotateIn {
  from {
    opacity: 0;
    transform: rotate(-200deg) scale(0.5);
  }
  to {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
}
.rotate-in {
  animation: rotateIn 600ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}`,
    html: `<div class="rotate-in">⭐ Estrella</div>`,
  },
  {
    id: '28',
    slug: 'zoom-out-exit',
    title: 'Zoom Out Exit',
    category: 'Enter/Exit',
    description: 'Salida con reducción de escala. La transición de salida estándar de Material.',
    previewClass: 'anim-zoom-out',
    previewType: 'loop',
    featured: false,
    tags: ['exit', 'zoom', 'scale'],
    css: `@keyframes zoomOut {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.85); }
}
.zoom-out {
  animation: zoomOut 300ms cubic-bezier(0.4, 0, 1, 1) forwards;
}`,
    html: `<div class="zoom-out">Elemento cerrándose</div>`,
  },
  {
    id: '29',
    slug: 'expand-in',
    title: 'Expand In',
    category: 'Enter/Exit',
    description: 'Expansión horizontal desde la izquierda. Para menús y progress bars.',
    previewClass: 'anim-expand-in',
    previewType: 'loop',
    featured: false,
    tags: ['expand', 'horizontal', 'menu'],
    css: `@keyframes expandIn {
  from {
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
  }
  to {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: left;
  }
}
.expand-in {
  animation: expandIn 400ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}`,
    html: `<div class="expand-in" style="height:4px;background:#1e9df1;border-radius:2px"></div>`,
  },
  {
    id: '30',
    slug: 'slide-up-exit',
    title: 'Slide Up Exit',
    category: 'Enter/Exit',
    description: 'Salida hacia arriba con fade. Para banners y notificaciones temporales.',
    previewClass: 'anim-slide-up-exit',
    previewType: 'loop',
    featured: false,
    tags: ['exit', 'slide', 'banner'],
    css: `@keyframes slideUpExit {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
}
.slide-up-exit {
  animation: slideUpExit 300ms cubic-bezier(0.4, 0, 1, 1) forwards;
}`,
    html: `<div class="slide-up-exit">Banner temporal</div>`,
  },

  // ─── VIEW TRANSITIONS (5) ───
  {
    id: '31',
    slug: 'cross-fade',
    title: 'Cross Fade',
    category: 'View Transitions',
    description: 'Transición cruzada entre dos estados. El fundido estándar de páginas.',
    previewClass: 'anim-cross-fade-in',
    previewType: 'loop',
    featured: true,
    tags: ['page', 'transition', 'fade'],
    css: `@keyframes crossFadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes crossFadeOut {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(1.02); }
}
.cross-fade-in {
  animation: crossFadeIn 350ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}
.cross-fade-out {
  animation: crossFadeOut 350ms cubic-bezier(0.4, 0, 1, 1) forwards;
}`,
    html: `<div class="cross-fade-in">
  <!-- Página nueva -->
</div>`,
  },
  {
    id: '32',
    slug: 'page-morph',
    title: 'Page Morph',
    category: 'View Transitions',
    description: 'Transición de página con morphing, escala y blur. Sensación de profundidad.',
    previewClass: 'anim-page-morph',
    previewType: 'loop',
    featured: true,
    tags: ['page', 'morph', 'depth'],
    css: `@keyframes pageMorphIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}
.page-morph {
  animation: pageMorphIn 500ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}`,
    html: `<div class="page-morph">
  <!-- Contenido de nueva página -->
</div>`,
  },
  {
    id: '33',
    slug: 'list-to-detail',
    title: 'List to Detail',
    category: 'View Transitions',
    description: 'Transición de lista a detalle. Patrón fundamental de navegación móvil.',
    previewClass: 'anim-list-to-detail',
    previewType: 'loop',
    featured: false,
    tags: ['navigation', 'list', 'detail'],
    css: `@keyframes listToDetail {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.list-to-detail {
  animation: listToDetail 400ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}`,
    html: `<div class="list-to-detail">
  <!-- Vista de detalle -->
</div>`,
  },
  {
    id: '34',
    slug: 'shared-element',
    title: 'Shared Element',
    category: 'View Transitions',
    description: 'Expansión de elemento compartido entre vistas. El patrón hero de Material.',
    previewClass: 'anim-shared-element',
    previewType: 'loop',
    featured: true,
    tags: ['hero', 'shared', 'expand'],
    css: `@keyframes sharedElementExpand {
  from {
    transform: scale(0.3) translate(-40%, -40%);
    opacity: 0;
    border-radius: 50%;
  }
  to {
    transform: scale(1) translate(0, 0);
    opacity: 1;
    border-radius: 16px;
  }
}
.shared-element {
  animation: sharedElementExpand 500ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}`,
    html: `<div class="shared-element">
  <!-- Elemento expandido -->
</div>`,
  },
  {
    id: '35',
    slug: 'slide-transition',
    title: 'Slide Page Transition',
    category: 'View Transitions',
    description: 'Nueva página que desliza desde la derecha. Navegación iOS/Android style.',
    previewClass: 'anim-slide-transition-in',
    previewType: 'loop',
    featured: false,
    tags: ['navigation', 'slide', 'mobile'],
    css: `@keyframes slideTransitionIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideTransitionOut {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-30%); opacity: 0; }
}
.slide-transition-in {
  animation: slideTransitionIn 400ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}`,
    html: `<div class="slide-transition-in">
  <!-- Nueva vista -->
</div>`,
  },

  // ─── MICROINTERACTIONS (10) ───
  {
    id: '36',
    slug: 'loading-spinner',
    title: 'Loading Spinner',
    category: 'Microinteractions',
    description: 'Spinner de carga circular. El indicador de carga universal de Material.',
    previewClass: 'anim-spinner',
    previewType: 'loop',
    featured: true,
    tags: ['loading', 'spinner', 'indicator'],
    css: `@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid rgba(30, 157, 241, 0.15);
  border-top-color: #1e9df1;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}`,
    html: `<div class="spinner"></div>`,
  },
  {
    id: '37',
    slug: 'loading-dots',
    title: 'Loading Dots',
    category: 'Microinteractions',
    description: 'Tres puntos rebotando. Para estados de "escribiendo" en chats.',
    previewClass: 'anim-dots',
    previewType: 'loop',
    featured: false,
    tags: ['loading', 'dots', 'chat'],
    css: `@keyframes dotBounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}
.dots span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #1e9df1;
  animation: dotBounce 1.2s ease-in-out infinite;
}
.dots span:nth-child(2) { animation-delay: 0.2s; }
.dots span:nth-child(3) { animation-delay: 0.4s; }`,
    html: `<div class="dots" style="display:flex;gap:6px">
  <span></span>
  <span></span>
  <span></span>
</div>`,
  },
  {
    id: '38',
    slug: 'button-press',
    title: 'Button Press',
    category: 'Microinteractions',
    description: 'Compresión al click con feedback táctil. Respuesta inmediata al input.',
    previewClass: 'anim-btn-press',
    previewType: 'click',
    featured: false,
    tags: ['button', 'press', 'tactile'],
    css: `.btn-press {
  transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-press:active {
  transform: scale(0.94);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}`,
    html: `<button class="btn-press" style="padding:12px 24px;border-radius:12px">
  Presiona aquí
</button>`,
  },
  {
    id: '39',
    slug: 'ripple-effect',
    title: 'Ripple Effect',
    category: 'Microinteractions',
    description: 'Ondas de Material Design al hacer click. El efecto más icónico de Material.',
    previewClass: 'anim-ripple',
    previewType: 'click',
    featured: true,
    tags: ['ripple', 'material', 'iconic'],
    css: `@keyframes ripple {
  from {
    transform: scale(0);
    opacity: 0.6;
  }
  to {
    transform: scale(4);
    opacity: 0;
  }
}
.ripple {
  position: relative;
  overflow: hidden;
}
.ripple::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 60px; height: 60px;
  background: rgba(255,255,255,0.4);
  border-radius: 50%;
  transform: translate(-50%,-50%) scale(0);
  animation: ripple 0.8s ease-out;
}`,
    html: `<button class="ripple" style="padding:12px 24px">
  Click me
</button>`,
  },
  {
    id: '40',
    slug: 'progress-bar',
    title: 'Progress Bar',
    category: 'Microinteractions',
    description: 'Barra de progreso con gradiente animado. Para cargas y procesos.',
    previewClass: 'anim-progress-bar',
    previewType: 'loop',
    featured: false,
    tags: ['progress', 'loading', 'gradient'],
    css: `@keyframes progressFill {
  from { width: 0%; }
  to { width: 75%; }
}
.progress-bar {
  height: 6px;
  background: rgba(30, 157, 241, 0.15);
  border-radius: 3px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #1e9df1, #8b5cf6);
  border-radius: 3px;
  animation: progressFill 1.5s cubic-bezier(0.05, 0.7, 0.1, 1) forwards;
}`,
    html: `<div class="progress-bar">
  <div class="progress-fill"></div>
</div>`,
  },
  {
    id: '41',
    slug: 'toggle-switch',
    title: 'Toggle Switch',
    category: 'Microinteractions',
    description: 'Interruptor con física de spring. Feedback visual instantáneo.',
    previewClass: 'anim-toggle-switch',
    previewType: 'click',
    featured: true,
    tags: ['toggle', 'switch', 'spring'],
    css: `.toggle-switch {
  display: inline-flex;
  width: 52px;
  height: 28px;
  background: #cbd5e1;
  border-radius: 14px;
  position: relative;
  cursor: pointer;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.toggle-switch.active { background: #1e9df1; }
.toggle-knob {
  position: absolute;
  top: 3px; left: 3px;
  width: 22px; height: 22px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toggle-switch.active .toggle-knob {
  transform: translateX(24px);
}`,
    html: `<div class="toggle-switch" onclick="this.classList.toggle('active')">
  <div class="toggle-knob"></div>
</div>`,
  },
  {
    id: '42',
    slug: 'skeleton-pulse',
    title: 'Skeleton Loader',
    category: 'Microinteractions',
    description: 'Placeholder pulsante mientras carga contenido. Mejor UX que spinner.',
    previewClass: 'anim-skeleton',
    previewType: 'loop',
    featured: false,
    tags: ['skeleton', 'placeholder', 'loading'],
    css: `@keyframes skeletonPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.skeleton {
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 200% 100%;
  animation: skeletonPulse 1.5s ease-in-out infinite;
  border-radius: 8px;
}`,
    html: `<div class="skeleton" style="height:20px;width:80%;margin-bottom:8px"></div>
<div class="skeleton" style="height:20px;width:60%"></div>`,
  },
  {
    id: '43',
    slug: 'gradient-text',
    title: 'Gradient Text Shift',
    category: 'Microinteractions',
    description: 'Texto con gradiente animado en loop. Perfecto para títulos hero.',
    previewClass: 'anim-gradient-shift',
    previewType: 'loop',
    featured: true,
    tags: ['gradient', 'text', 'hero'],
    css: `@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.gradient-text {
  background: linear-gradient(270deg, #1e9df1, #8b5cf6, #ec4899, #1e9df1);
  background-size: 300% 300%;
  animation: gradientShift 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`,
    html: `<h1 class="gradient-text" style="font-size:2rem;font-weight:800">
  Material Motion
</h1>`,
  },
  {
    id: '44',
    slug: 'typewriter',
    title: 'Typewriter Effect',
    category: 'Microinteractions',
    description: 'Texto que aparece letra a letra con cursor parpadeante. Clásico.',
    previewClass: 'anim-typewriter',
    previewType: 'loop',
    featured: false,
    tags: ['typewriter', 'text', 'cursor'],
    css: `@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}
@keyframes blink {
  50% { border-color: transparent; }
}
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #1e9df1;
  animation: typewriter 2s steps(20) forwards,
             blink 0.75s step-end infinite;
  width: 0;
}`,
    html: `<p class="typewriter">Hola, soy un efecto typewriter...</p>`,
  },
  {
    id: '45',
    slug: 'morphing-shape',
    title: 'Morphing Shape',
    category: 'Microinteractions',
    description: 'Forma que cambia de border-radius en loop. Orgánico y llamativo.',
    previewClass: 'anim-morph-bg',
    previewType: 'loop',
    featured: false,
    tags: ['morph', 'shape', 'organic'],
    css: `@keyframes morphBg {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  33% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  66% {
    border-radius: 60% 40% 30% 70% / 40% 50% 60% 50%;
  }
}
.morph-bg {
  background: linear-gradient(135deg, #1e9df1, #8b5cf6);
  animation: morphBg 6s ease-in-out infinite;
}`,
    html: `<div class="morph-bg" style="width:80px;height:80px"></div>`,
  },

  // ─── SCROLL ANIMATIONS (5) ───
  {
    id: '46',
    slug: 'reveal-on-scroll',
    title: 'Reveal on Scroll',
    category: 'Scroll',
    description: 'Elementos que aparecen al entrar en el viewport. Usa IntersectionObserver.',
    previewClass: 'anim-reveal is-visible',
    previewType: 'loop',
    featured: true,
    tags: ['scroll', 'reveal', 'intersection'],
    css: `.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 600ms cubic-bezier(0.05, 0.7, 0.1, 1),
              transform 600ms cubic-bezier(0.05, 0.7, 0.1, 1);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}`,
    html: `<div class="reveal">
  Aparece al hacer scroll
</div>
<script>
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('is-visible');
  });
});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
</script>`,
  },
  {
    id: '47',
    slug: 'reveal-from-left',
    title: 'Reveal from Left',
    category: 'Scroll',
    description: 'Elementos que aparecen desde la izquierda al scrollear.',
    previewClass: 'anim-reveal-left is-visible',
    previewType: 'loop',
    featured: false,
    tags: ['scroll', 'reveal', 'left'],
    css: `.reveal-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 500ms cubic-bezier(0.05, 0.7, 0.1, 1),
              transform 500ms cubic-bezier(0.05, 0.7, 0.1, 1);
}
.reveal-left.is-visible {
  opacity: 1;
  transform: translateX(0);
}`,
    html: `<div class="reveal-left">Aparece desde la izquierda</div>`,
  },
  {
    id: '48',
    slug: 'marquee',
    title: 'Marquee Scroll',
    category: 'Scroll',
    description: 'Desplazamiento continuo horizontal. Para logos, tags y anuncios.',
    previewClass: 'anim-marquee',
    previewType: 'loop',
    featured: false,
    tags: ['marquee', 'scroll', 'loop'],
    css: `@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee {
  overflow: hidden;
  white-space: nowrap;
}
.marquee-inner {
  display: inline-block;
  animation: marquee 10s linear infinite;
}
.marquee:hover .marquee-inner {
  animation-play-state: paused;
}`,
    html: `<div class="marquee">
  <div class="marquee-inner">
    Logo1 • Logo2 • Logo3 • Logo4 • Logo5 •
    Logo1 • Logo2 • Logo3 • Logo4 • Logo5 •
  </div>
</div>`,
  },
  {
    id: '49',
    slug: 'sticky-shrink',
    title: 'Sticky Header Shrink',
    category: 'Scroll',
    description: 'Header que se comprime al hacer scroll. Patrón de navegación premium.',
    previewClass: 'anim-sticky-header scrolled',
    previewType: 'loop',
    featured: false,
    tags: ['sticky', 'header', 'scroll'],
    css: `.sticky-header {
  position: sticky;
  top: 0;
  transition: padding 250ms cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  padding: 1.5rem;
}
.sticky-header.scrolled {
  padding: 0.5rem 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}`,
    html: `<header class="sticky-header" id="header">
  Navega abajo...
</header>
<script>
window.addEventListener('scroll', () => {
  document.querySelector('#header')
    .classList.toggle('scrolled', window.scrollY > 50);
});
</script>`,
  },
  {
    id: '50',
    slug: 'neon-glow',
    title: 'Neon Glow Pulse',
    category: 'Scroll',
    description: 'Resplandor neón pulsante. Para elementos especiales en dark mode.',
    previewClass: 'anim-neon',
    previewType: 'loop',
    featured: false,
    tags: ['neon', 'glow', 'dark'],
    css: `@keyframes neonPulse {
  0%, 100% {
    text-shadow: 0 0 8px rgba(30,157,241,0.8),
                 0 0 20px rgba(30,157,241,0.4);
  }
  50% {
    text-shadow: 0 0 16px rgba(30,157,241,1),
                 0 0 40px rgba(30,157,241,0.6);
  }
}
.neon {
  color: #1e9df1;
  animation: neonPulse 2s ease-in-out infinite;
}`,
    html: `<h2 class="neon" style="font-size:2rem;font-weight:800">
  NEON
</h2>`,
  },

  // ─── BONUS (6+) ───
  {
    id: '51',
    slug: 'focus-ring',
    title: 'Focus Ring',
    category: 'Microinteractions',
    description: 'Anillo de enfoque accesible con transición suave. Imprescindible para a11y.',
    previewClass: 'anim-focus-ring',
    previewType: 'hover',
    featured: false,
    tags: ['focus', 'accessibility', 'a11y'],
    css: `.focus-ring {
  outline: none;
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.focus-ring:focus-visible {
  box-shadow: 0 0 0 3px rgba(30, 157, 241, 0.4);
}`,
    html: `<button class="focus-ring" style="padding:10px 20px;border-radius:8px">
  Presiona Tab
</button>`,
  },
  {
    id: '52',
    slug: 'heart-burst',
    title: 'Heart Burst',
    category: 'Microinteractions',
    description: 'Explosión del corazón al hacer click. Like/favorite con feedback táctil.',
    previewClass: 'anim-heart-burst',
    previewType: 'click',
    featured: false,
    tags: ['heart', 'like', 'social'],
    css: `@keyframes heartBurst {
  0% { transform: scale(1); }
  30% { transform: scale(0.7); }
  60% { transform: scale(1.3); }
  80% { transform: scale(0.9); }
  100% { transform: scale(1); }
}
.heart-burst:active {
  animation: heartBurst 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
  color: #f4212e;
}`,
    html: `<button class="heart-burst" style="font-size:24px;background:none;border:none;cursor:pointer">
  ❤️
</button>`,
  },
]

export const categories: Category[] = ['Hover', 'Enter/Exit', 'View Transitions', 'Microinteractions', 'Scroll']

export const getFeaturedMotions = () => motions.filter(m => m.featured).slice(0, 12)
export const getMotionBySlug = (slug: string) => motions.find(m => m.slug === slug)
export const getMotionsByCategory = (category: Category) => motions.filter(m => m.category === category)
