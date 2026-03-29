import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMotionBySlug, motions } from '../data/motions'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import { Badge } from '../components/ui/Badge'
import { AnimationPreview } from '../components/motion/AnimationPreview'

const categoryBadgeColor: Record<string, 'blue' | 'purple' | 'pink' | 'green' | 'orange'> = {
  'Hover': 'blue',
  'Enter/Exit': 'purple',
  'View Transitions': 'pink',
  'Microinteractions': 'green',
  'Scroll': 'orange',
}

export const MotionDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const motion = getMotionBySlug(slug || '')
  const { copy } = useCopyToClipboard()
  const [copied, setCopied] = useState<'css' | 'html' | 'full' | null>(null)
  const [speed, setSpeed] = useState(1)

  const related = motions
    .filter(m => m.category === motion?.category && m.slug !== motion?.slug)
    .slice(0, 3)

  const handleCopy = async (type: 'css' | 'html' | 'full') => {
    if (!motion) return
    const text = type === 'css' ? motion.css :
      type === 'html' ? motion.html :
      `/* === ${motion.title} === */\n/* Category: ${motion.category} */\n\n${motion.css}\n\n/* HTML */\n${motion.html}`
    await copy(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  if (!motion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass rounded-3xl p-12 text-center max-w-md">
          <div className="text-6xl mb-4">😵</div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--n-900)' }}>
            Animación no encontrada
          </h2>
          <p className="text-sm mb-6" style={{ color: 'var(--n-500)' }}>
            El slug "{slug}" no coincide con ninguna animación.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/gallery')}>
            ← Volver al Gallery
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-enter min-h-screen">
      {/* Back nav */}
      <div className="px-4 md:px-8 py-4 flex items-center gap-3">
        <button
          className="btn btn-ghost"
          onClick={() => navigate(-1)}
        >
          ← Volver
        </button>
        <span style={{ color: 'var(--n-300)' }}>/</span>
        <span className="text-sm" style={{ color: 'var(--n-500)' }}>{motion.category}</span>
        <span style={{ color: 'var(--n-300)' }}>/</span>
        <span className="text-sm font-medium" style={{ color: 'var(--n-800)' }}>{motion.title}</span>
      </div>

      <div className="px-4 md:px-8 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: Preview */}
          <div className="flex flex-col gap-6">
            {/* Large Preview */}
            <div
              className="glass-modal rounded-3xl p-6"
              style={{ boxShadow: 'var(--glass-shadow-modal)' }}
            >
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--n-900)' }}>
                Preview en vivo
              </h2>
              <div
                className="flex items-center justify-center rounded-2xl overflow-hidden"
                style={{
                  height: 280,
                  background: 'linear-gradient(135deg, rgba(30,157,241,0.05), rgba(139,92,246,0.05))',
                  border: '1px solid var(--glass-border-subtle)',
                }}
              >
                <div style={{ transform: `scale(${speed})`, transition: 'transform 0.3s ease' }}>
                  <AnimationPreview motion={motion} size="lg" />
                </div>
              </div>

              {/* Controls */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-xs font-medium" style={{ color: 'var(--n-500)' }}>
                    Velocidad: {speed}x
                  </span>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.25"
                    value={speed}
                    onChange={e => setSpeed(Number(e.target.value))}
                    className="flex-1"
                  />
                </div>
                <div className="flex gap-2">
                  {[0.5, 1, 2].map(s => (
                    <button
                      key={s}
                      className={`btn text-xs py-1 px-3 ${speed === s ? 'btn-primary' : ''}`}
                      onClick={() => setSpeed(s)}
                    >
                      {s}x
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="glass rounded-2xl p-5">
                <h3 className="font-semibold mb-3" style={{ color: 'var(--n-800)' }}>
                  🔗 Relacionadas
                </h3>
                <div className="flex flex-col gap-2">
                  {related.map(r => (
                    <button
                      key={r.id}
                      className="flex items-center gap-3 p-3 rounded-xl text-left hover:bg-white/20 transition-all"
                      onClick={() => navigate(`/motion/${r.slug}`)}
                      style={{ transition: 'all var(--t-fast)' }}
                    >
                      <span className="text-lg">
                        {r.category === 'Hover' ? '🖱️' :
                          r.category === 'Enter/Exit' ? '🎬' :
                          r.category === 'View Transitions' ? '🔄' :
                          r.category === 'Microinteractions' ? '⚡' : '📜'}
                      </span>
                      <div>
                        <div className="font-medium text-sm" style={{ color: 'var(--n-800)' }}>{r.title}</div>
                        <div className="text-xs" style={{ color: 'var(--n-400)' }}>{r.category}</div>
                      </div>
                      <span className="ml-auto text-sm" style={{ color: 'var(--n-400)' }}>→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Code + Info */}
          <div className="flex flex-col gap-6">
            {/* Header info */}
            <div className="glass-modal rounded-3xl p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h1
                  className="font-extrabold leading-tight"
                  style={{ fontSize: 'var(--text-3xl)', color: 'var(--n-900)', letterSpacing: '-0.03em' }}
                >
                  {motion.title}
                </h1>
                {motion.featured && <span className="text-2xl">⭐</span>}
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Badge color={categoryBadgeColor[motion.category] || 'blue'}>
                  {motion.category}
                </Badge>
                {motion.previewType === 'loop' && <Badge>Loop</Badge>}
                {motion.previewType === 'hover' && <Badge>Hover</Badge>}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--n-600)' }}>
                {motion.description}
              </p>
              {motion.tags && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {motion.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        background: 'var(--glass-bg-subtle)',
                        color: 'var(--n-500)',
                        border: '1px solid var(--glass-border-subtle)',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* CSS Code */}
            <div className="glass rounded-2xl overflow-hidden">
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: '1px solid var(--glass-border-subtle)' }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: '#1e9df1' }}
                  />
                  <span className="text-xs font-semibold" style={{ color: 'var(--n-600)' }}>
                    styles.css
                  </span>
                </div>
                <button
                  className={`btn text-xs py-1.5 px-3 ${copied === 'css' ? 'copy-success' : ''}`}
                  onClick={() => handleCopy('css')}
                  style={{
                    background: copied === 'css' ? '#10b981' : 'var(--accent-primary)',
                    color: 'white',
                    transition: 'all var(--t-fast)',
                  }}
                >
                  {copied === 'css' ? '✓ Copiado!' : '📋 Copy CSS'}
                </button>
              </div>
              <div className="code-block" style={{ borderRadius: 0, maxHeight: 280 }}>
                <pre>{motion.css}</pre>
              </div>
            </div>

            {/* HTML Code */}
            <div className="glass rounded-2xl overflow-hidden">
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: '1px solid var(--glass-border-subtle)' }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: '#f59e0b' }}
                  />
                  <span className="text-xs font-semibold" style={{ color: 'var(--n-600)' }}>
                    index.html
                  </span>
                </div>
                <button
                  className={`btn text-xs py-1.5 px-3 ${copied === 'html' ? 'copy-success' : ''}`}
                  onClick={() => handleCopy('html')}
                  style={{
                    background: copied === 'html' ? '#10b981' : 'var(--glass-bg)',
                    color: copied === 'html' ? 'white' : 'var(--n-700)',
                    transition: 'all var(--t-fast)',
                  }}
                >
                  {copied === 'html' ? '✓ Copiado!' : '🏷️ Copy HTML'}
                </button>
              </div>
              <div className="code-block" style={{ borderRadius: 0, maxHeight: 200 }}>
                <pre>{motion.html}</pre>
              </div>
            </div>

            {/* Copy All */}
            <button
              className={`btn btn-primary w-full py-3 text-base ${copied === 'full' ? 'copy-success' : ''}`}
              onClick={() => handleCopy('full')}
              style={{
                background: copied === 'full' ? '#10b981' : 'var(--accent-primary)',
                transition: 'all var(--t-fast)',
              }}
            >
              {copied === 'full' ? '✓ ¡Todo copiado al clipboard!' : '📦 Copiar CSS + HTML completo'}
            </button>

            {/* How it works */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: 'var(--accent-soft)',
                border: '1px solid var(--accent-soft-border)',
              }}
            >
              <h3 className="font-semibold mb-2 text-sm" style={{ color: 'var(--accent-primary)' }}>
                💡 Cómo usarlo
              </h3>
              <ol className="text-xs space-y-1.5" style={{ color: 'var(--n-600)' }}>
                <li>1. Copia el CSS y pégalo en tu archivo de estilos</li>
                <li>2. Copia el HTML base y adáptalo a tu estructura</li>
                <li>3. Aplica la clase al elemento que quieras animar</li>
                <li>4. ¡Listo! Sin dependencias, sin build steps</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
