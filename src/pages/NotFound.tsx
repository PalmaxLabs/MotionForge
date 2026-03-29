import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'var(--bg-gradient)' }}
    >
      <div
        className="glass-modal rounded-3xl p-12 text-center max-w-lg w-full anim-scale-in"
        style={{ boxShadow: 'var(--glass-shadow-modal)' }}
      >
        {/* Animated illustration */}
        <div
          className="anim-bounce-in text-8xl mb-6 block"
          style={{ display: 'block', lineHeight: 1 }}
        >
          🎭
        </div>

        {/* 404 */}
        <div
          className="text-8xl font-extrabold mb-2 gradient-text"
          style={{ letterSpacing: '-0.06em', lineHeight: 1 }}
        >
          404
        </div>

        {/* Title */}
        <h1
          className="text-3xl font-bold mt-4 mb-3"
          style={{ color: 'var(--n-900)', letterSpacing: '-0.03em' }}
        >
          Motion no encontrada
        </h1>

        {/* Description */}
        <p
          className="text-base mb-8 max-w-sm mx-auto"
          style={{ color: 'var(--n-600)', lineHeight: 1.6 }}
        >
          Parece que esta animación se ha desvanecido... o quizás nunca existió. ¿Será un efecto de fade-out permanente?
        </p>

        {/* Animated boxes */}
        <div className="flex justify-center gap-3 mb-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-md"
              style={{
                background: 'var(--accent-primary)',
                opacity: 0.3 + i * 0.35,
                animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            className="btn btn-primary px-8 py-3 text-base"
            onClick={() => navigate('/')}
          >
            🏠 Ir al inicio
          </button>
          <button
            className="btn px-6 py-3 text-base"
            onClick={() => navigate('/gallery')}
          >
            ✨ Ver galería
          </button>
        </div>

        {/* Tips */}
        <div
          className="mt-8 p-4 rounded-2xl text-left"
          style={{
            background: 'var(--accent-soft)',
            border: '1px solid var(--accent-soft-border)',
          }}
        >
          <p className="text-xs font-semibold mb-1" style={{ color: 'var(--accent-primary)' }}>
            💡 ¿Sabías que?
          </p>
          <p className="text-xs" style={{ color: 'var(--n-600)' }}>
            El error 404 podría animarse con un <strong>fade-in</strong> + <strong>slide-up</strong> para una mejor UX.
            ¡Copia el código de esa animación en la galería!
          </p>
        </div>
      </div>
    </div>
  )
}
