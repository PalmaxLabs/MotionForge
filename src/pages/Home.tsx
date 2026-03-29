import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getFeaturedMotions, motions } from '../data/motions'
import { MotionCard } from '../components/motion/MotionCard'
import { Motion } from '../data/motions'

export const Home: React.FC = () => {
  const navigate = useNavigate()
  const featured = getFeaturedMotions()

  const handleMotionClick = (motion: Motion) => {
    navigate(`/motion/${motion.slug}`)
  }

  return (
    <div className="page-enter min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-20 pb-16 px-4 overflow-hidden">
        {/* Floating orbs */}
        <div
          className="absolute top-10 left-1/4 w-64 h-64 rounded-full opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--accent-primary), transparent)',
            filter: 'blur(60px)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full opacity-15 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #8b5cf6, transparent)',
            filter: 'blur(50px)',
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        />

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          style={{
            background: 'var(--glass-bg-strong)',
            border: '1px solid var(--accent-soft-border)',
            color: 'var(--accent-primary)',
            backdropFilter: 'blur(16px)',
            boxShadow: 'var(--glass-shadow-card)',
            animation: 'fadeInDown 500ms cubic-bezier(0.05, 0.7, 0.1, 1) forwards',
          }}
        >
          ⚡ 52+ animaciones Material Design listas para usar
        </div>

        {/* Title */}
        <h1
          className="font-extrabold mb-4 leading-none"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: 'var(--n-900)',
            letterSpacing: '-0.04em',
            animation: 'fadeInUp 600ms cubic-bezier(0.05, 0.7, 0.1, 1) 100ms both',
          }}
        >
          Material{' '}
          <span className="gradient-text">Motion</span>{' '}
          Gallery
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-xl text-lg mb-8"
          style={{
            color: 'var(--n-600)',
            animation: 'fadeInUp 600ms cubic-bezier(0.05, 0.7, 0.1, 1) 200ms both',
          }}
        >
          Colección de animaciones CSS puras inspiradas en Material Design. Copy-paste directo en tu proyecto.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3 justify-center"
          style={{ animation: 'fadeInUp 600ms cubic-bezier(0.05, 0.7, 0.1, 1) 300ms both' }}
        >
          <button
            className="btn btn-primary px-8 py-3 text-base"
            onClick={() => navigate('/gallery')}
          >
            🚀 Explorar todas las animaciones
          </button>
          <button
            className="btn px-6 py-3 text-base"
            onClick={() => navigate('/playground')}
          >
            🎮 Ir al Playground
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-12"
          style={{ animation: 'fadeInUp 600ms cubic-bezier(0.05, 0.7, 0.1, 1) 400ms both' }}
        >
          {[
            { label: 'Animaciones', value: motions.length + '+' },
            { label: 'Categorías', value: '5' },
            { label: 'CSS puro', value: '100%' },
            { label: 'Sin librerías', value: '0' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-extrabold gradient-text"
                style={{ letterSpacing: '-0.03em' }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: 'var(--n-500)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Grid */}
      <section className="px-4 md:px-8 pb-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: 'var(--n-900)', letterSpacing: '-0.02em' }}
            >
              ✨ Destacadas
            </h2>
            <p className="text-sm mt-1" style={{ color: 'var(--n-500)' }}>
              Las animaciones más populares y versátiles
            </p>
          </div>
          <button
            className="btn"
            onClick={() => navigate('/gallery')}
          >
            Ver todas →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {featured.map(motion => (
            <MotionCard
              key={motion.id}
              motion={motion}
              onClick={handleMotionClick}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 md:px-8 pb-20 max-w-7xl mx-auto">
        <h2
          className="text-2xl font-bold mb-8"
          style={{ color: 'var(--n-900)', letterSpacing: '-0.02em' }}
        >
          📦 Categorías
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { icon: '🖱️', name: 'Hover', count: 15, color: 'var(--accent-primary)', path: '/gallery?cat=Hover' },
            { icon: '🎬', name: 'Enter/Exit', count: 15, color: '#8b5cf6', path: '/gallery?cat=Enter%2FExit' },
            { icon: '🔄', name: 'Transitions', count: 5, color: '#ec4899', path: '/gallery?cat=View+Transitions' },
            { icon: '⚡', name: 'Micro', count: 10, color: '#10b981', path: '/gallery?cat=Microinteractions' },
            { icon: '📜', name: 'Scroll', count: 5, color: '#f59e0b', path: '/gallery?cat=Scroll' },
          ].map(cat => (
            <button
              key={cat.name}
              className="card p-4 text-center flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => navigate(cat.path)}
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="font-semibold text-sm" style={{ color: 'var(--n-800)' }}>{cat.name}</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-bold"
                style={{ background: `${cat.color}20`, color: cat.color }}
              >
                {cat.count}+
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-10 text-center"
        style={{
          borderTop: '1px solid var(--glass-border)',
          background: 'var(--glass-bg-subtle)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <p className="text-sm" style={{ color: 'var(--n-500)' }}>
          Creado con ❤️ por{' '}
          <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>
            Material Motion Gallery
          </span>
          {' '}· CSS puro · Sin librerías JS
        </p>
        <p className="text-xs mt-2" style={{ color: 'var(--n-400)' }}>
          Inspirado en Material Design 3 · Google
        </p>
      </footer>
    </div>
  )
}
