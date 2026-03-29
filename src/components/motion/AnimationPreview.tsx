import React, { useState } from 'react'
import { Motion } from '../../data/motions'

interface AnimationPreviewProps {
  motion: Motion
  size?: 'sm' | 'lg'
}

const categoryGradients: Record<string, string> = {
  'Hover': 'linear-gradient(135deg, rgba(30,157,241,0.08), rgba(59,130,246,0.12))',
  'Enter/Exit': 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(168,85,247,0.12))',
  'View Transitions': 'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(244,114,182,0.12))',
  'Microinteractions': 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(52,211,153,0.12))',
  'Scroll': 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(251,191,36,0.12))',
}

export const AnimationPreview: React.FC<AnimationPreviewProps> = ({ motion, size = 'sm' }) => {
  const [key, setKey] = useState(0)
  const height = size === 'lg' ? '240px' : '160px'
  const gradient = categoryGradients[motion.category] || categoryGradients['Hover']

  const replay = () => {
    if (motion.previewType === 'loop') {
      setKey(prev => prev + 1)
    }
  }

  const renderPreview = () => {
    const cls = `${motion.previewClass}`

    switch (motion.slug) {
      case 'loading-spinner':
        return <div className="anim-spinner" style={{ width: 48, height: 48, borderWidth: 4 }} />

      case 'loading-dots':
        return (
          <div className="anim-dots flex gap-2">
            <span /><span /><span />
          </div>
        )

      case 'progress-bar':
        return (
          <div className="w-48">
            <div className="anim-progress-bar">
              <div key={key} className="anim-progress-bar-fill" />
            </div>
          </div>
        )

      case 'toggle-switch': {
        const [on, setOn] = useState(false)
        return (
          <div
            className={`anim-toggle-switch ${on ? 'active' : ''}`}
            onClick={() => setOn(!on)}
          >
            <div className="anim-toggle-knob" />
          </div>
        )
      }

      case 'skeleton-pulse':
        return (
          <div className="w-40 flex flex-col gap-2">
            <div className="anim-skeleton" style={{ height: 14, width: '80%' }} />
            <div className="anim-skeleton" style={{ height: 14, width: '60%' }} />
            <div className="anim-skeleton" style={{ height: 14, width: '70%' }} />
          </div>
        )

      case 'gradient-text':
        return <span className="anim-gradient-shift font-bold text-2xl">Motion</span>

      case 'typewriter':
        return <span key={key} className="anim-typewriter font-mono text-sm">Material Motion...</span>

      case 'morphing-shape':
        return (
          <div className="anim-morph-bg" style={{ width: 80, height: 80 }} />
        )

      case 'neon-glow':
        return <span className="anim-neon font-bold text-3xl">NEON</span>

      case 'marquee':
        return (
          <div className="anim-marquee w-44">
            <div className="anim-marquee-inner text-sm font-medium" style={{ color: 'var(--n-700)' }}>
              React • Vue • Angular • Svelte • React • Vue • Angular • Svelte •
            </div>
          </div>
        )

      case 'stagger-fade':
        return (
          <div key={key} className="anim-stagger flex flex-col gap-1.5">
            {['Item 1', 'Item 2', 'Item 3'].map((item, i) => (
              <div
                key={i}
                className="px-3 py-1.5 rounded-lg text-sm font-medium"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent-primary)' }}
              >
                {item}
              </div>
            ))}
          </div>
        )

      case 'hover-flip-card':
        return (
          <div className="anim-hover-flip" style={{ width: 90, height: 90 }}>
            <div className="anim-hover-flip-inner" style={{ width: '100%', height: '100%', position: 'relative' }}>
              <div className="anim-flip-front" style={{ borderRadius: 12, background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', width: '100%', height: '100%' }}>
                <span style={{ fontSize: 28 }}>🎴</span>
              </div>
              <div className="anim-flip-back" style={{ borderRadius: 12, width: '100%', height: '100%' }}>
                <span style={{ fontSize: 22 }}>✨</span>
              </div>
            </div>
          </div>
        )

      case 'ripple-effect':
        return (
          <button
            key={key}
            className="anim-ripple px-5 py-2.5 rounded-xl font-medium text-white"
            style={{ background: 'var(--accent-primary)', border: 'none', cursor: 'pointer' }}
            onClick={replay}
          >
            Click me
          </button>
        )

      case 'hover-morph':
        return (
          <div
            className="anim-hover-morph flex items-center justify-center font-bold text-white text-2xl"
            style={{ width: 80, height: 80, background: 'linear-gradient(135deg, var(--accent-primary), #8b5cf6)' }}
          >
            M
          </div>
        )

      case 'hover-tilt':
        return (
          <div
            className="anim-hover-tilt rounded-2xl flex items-center justify-center font-bold text-white"
            style={{ width: 100, height: 80, background: 'linear-gradient(135deg, var(--accent-primary), #8b5cf6)', cursor: 'pointer' }}
          >
            🎭 Tilt
          </div>
        )

      default:
        if (motion.previewType === 'loop') {
          return (
            <div
              key={key}
              className={cls}
              style={{ cursor: 'pointer' }}
              onClick={replay}
            >
              <div className="preview-element" style={{ width: 72, height: 72 }}>
                {motion.category === 'Hover' ? '🖱️' :
                  motion.category === 'Enter/Exit' ? '🎬' :
                  motion.category === 'View Transitions' ? '🔄' :
                  motion.category === 'Microinteractions' ? '⚡' : '📜'}
              </div>
            </div>
          )
        }
        return (
          <div
            className={cls + ' preview-element'}
            style={{ width: 72, height: 72, cursor: 'pointer' }}
          >
            🎯
          </div>
        )
    }
  }

  return (
    <div
      className="preview-box relative overflow-hidden cursor-pointer"
      style={{ height, background: gradient, borderRadius: 12 }}
      onClick={replay}
      title="Click para reproducir"
    >
      {renderPreview()}

      {/* Replay hint */}
      {motion.previewType === 'loop' && (
        <span
          className="absolute bottom-2 right-2 text-xs px-2 py-0.5 rounded-full opacity-60"
          style={{ background: 'var(--glass-bg-subtle)', color: 'var(--n-500)', backdropFilter: 'blur(8px)' }}
        >
          ↺ replay
        </span>
      )}

      {motion.previewType === 'hover' && (
        <span
          className="absolute bottom-2 right-2 text-xs px-2 py-0.5 rounded-full opacity-60"
          style={{ background: 'var(--glass-bg-subtle)', color: 'var(--n-500)', backdropFilter: 'blur(8px)' }}
        >
          hover
        </span>
      )}
    </div>
  )
}
