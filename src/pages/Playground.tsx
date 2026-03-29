import React, { useState } from 'react'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

const easingOptions = [
  { label: 'Material Standard', value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  { label: 'Decelerate (Enter)', value: 'cubic-bezier(0.0, 0.0, 0.2, 1)' },
  { label: 'Accelerate (Exit)', value: 'cubic-bezier(0.4, 0.0, 1, 1)' },
  { label: 'Spring Bounce', value: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
  { label: 'Emphasized', value: 'cubic-bezier(0.2, 0, 0, 1)' },
  { label: 'Spatial Decelerate', value: 'cubic-bezier(0.05, 0.7, 0.1, 1)' },
  { label: 'Spatial Accelerate', value: 'cubic-bezier(0.3, 0, 0.8, 0.15)' },
  { label: 'Linear', value: 'linear' },
  { label: 'CSS Ease', value: 'ease' },
  { label: 'Ease In Out', value: 'ease-in-out' },
  { label: 'Ease In', value: 'ease-in' },
  { label: 'Ease Out', value: 'ease-out' },
]

const propertyConfigs = {
  scale: { from: 'scale(0.85)', to: 'scale(1)' },
  translateY: { from: 'translateY(24px)', to: 'translateY(0)' },
  translateX: { from: 'translateX(-32px)', to: 'translateX(0)' },
  rotate: { from: 'rotate(-15deg)', to: 'rotate(0deg)' },
  opacity: { from: '0', to: '1', prop: 'opacity' },
  skewX: { from: 'skewX(-10deg)', to: 'skewX(0deg)' },
}

interface Props {
  properties: Record<string, boolean>
}

export const Playground: React.FC = () => {
  const { copy } = useCopyToClipboard()
  const [duration, setDuration] = useState(400)
  const [delay, setDelay] = useState(0)
  const [easing, setEasing] = useState(easingOptions[0].value)
  const [iterationCount, setIterationCount] = useState<'1' | 'infinite'>('1')
  const [properties, setProperties] = useState({
    scale: true,
    translateY: true,
    translateX: false,
    rotate: false,
    opacity: true,
    skewX: false,
  })
  const [bgColor, setBgColor] = useState('#1e9df1')
  const [shape, setShape] = useState<'square' | 'circle' | 'rounded'>('rounded')
  const [replayKey, setReplayKey] = useState(0)
  const [copied, setCopied] = useState(false)

  const buildAnimation = () => {
    const transforms: string[] = []
    const fromTransforms: string[] = []
    let hasOpacity = false

    Object.entries(properties).forEach(([key, active]) => {
      if (!active) return
      const cfg = propertyConfigs[key as keyof typeof propertyConfigs]
      if (key === 'opacity') {
        hasOpacity = true
        return
      }
      if (cfg) {
        fromTransforms.push(cfg.from)
        transforms.push(cfg.to)
      }
    })

    const fromStyle = [
      hasOpacity ? 'opacity: 0;' : '',
      fromTransforms.length ? `transform: ${fromTransforms.join(' ')};` : '',
    ].filter(Boolean).join(' ')

    const toStyle = [
      hasOpacity ? 'opacity: 1;' : '',
      transforms.length ? `transform: ${transforms.join(' ')};` : '',
    ].filter(Boolean).join(' ')

    return {
      keyframes: `@keyframes playgroundAnim {\n  from { ${fromStyle} }\n  to { ${toStyle} }\n}`,
      className: `.playground-element {\n  animation: playgroundAnim ${duration}ms ${easing} ${delay}ms ${iterationCount} forwards;\n}`,
      fromStyle,
      toStyle,
    }
  }

  const { keyframes, className, fromStyle, toStyle } = buildAnimation()

  const shapeStyle = {
    square: '8px',
    circle: '50%',
    rounded: '24px',
  }

  const fullCode = `${keyframes}\n\n${className}`

  const handleCopy = async () => {
    await copy(fullCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const replay = () => setReplayKey(k => k + 1)

  const toggleProp = (key: string) => {
    setProperties(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
  }

  return (
    <div className="page-enter min-h-screen px-4 md:px-8 py-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1
          className="text-3xl font-extrabold"
          style={{ color: 'var(--n-900)', letterSpacing: '-0.03em' }}
        >
          🎮 Playground
        </h1>
        <p className="mt-1" style={{ color: 'var(--n-500)' }}>
          Construye tu animación personalizada con knobs en tiempo real
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Controls Panel */}
        <div className="lg:col-span-2 flex flex-col gap-5">

          {/* Duration */}
          <div className="glass rounded-2xl p-5">
            <label className="text-xs font-semibold block mb-3" style={{ color: 'var(--n-500)' }}>
              ⏱️ DURACIÓN: <span style={{ color: 'var(--accent-primary)' }}>{duration}ms</span>
            </label>
            <input
              type="range"
              min="50"
              max="2000"
              step="50"
              value={duration}
              onChange={e => setDuration(Number(e.target.value))}
            />
            <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--n-400)' }}>
              <span>50ms</span>
              <span>2000ms</span>
            </div>
            <div className="flex gap-2 mt-3 flex-wrap">
              {[150, 300, 500, 800].map(d => (
                <button
                  key={d}
                  className={`btn text-xs py-1 px-3 ${duration === d ? 'btn-primary' : ''}`}
                  onClick={() => setDuration(d)}
                >
                  {d}ms
                </button>
              ))}
            </div>
          </div>

          {/* Delay */}
          <div className="glass rounded-2xl p-5">
            <label className="text-xs font-semibold block mb-3" style={{ color: 'var(--n-500)' }}>
              ⌛ DELAY: <span style={{ color: 'var(--accent-primary)' }}>{delay}ms</span>
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              step="50"
              value={delay}
              onChange={e => setDelay(Number(e.target.value))}
            />
            <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--n-400)' }}>
              <span>0ms</span>
              <span>1000ms</span>
            </div>
          </div>

          {/* Easing */}
          <div className="glass rounded-2xl p-5">
            <label className="text-xs font-semibold block mb-3" style={{ color: 'var(--n-500)' }}>
              📐 EASING
            </label>
            <select
              className="input-glass"
              value={easing}
              onChange={e => setEasing(e.target.value)}
            >
              {easingOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <p className="text-xs mt-2 font-mono" style={{ color: 'var(--n-400)' }}>{easing}</p>
          </div>

          {/* Iteration */}
          <div className="glass rounded-2xl p-5">
            <label className="text-xs font-semibold block mb-3" style={{ color: 'var(--n-500)' }}>
              🔁 ITERACIONES
            </label>
            <div className="flex gap-2">
              {(['1', 'infinite'] as const).map(v => (
                <button
                  key={v}
                  className={`btn flex-1 text-sm ${iterationCount === v ? 'btn-primary' : ''}`}
                  onClick={() => setIterationCount(v)}
                >
                  {v === '1' ? '1× (una vez)' : '∞ Loop'}
                </button>
              ))}
            </div>
          </div>

          {/* Properties */}
          <div className="glass rounded-2xl p-5">
            <label className="text-xs font-semibold block mb-3" style={{ color: 'var(--n-500)' }}>
              🎛️ PROPIEDADES CSS
            </label>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(properties).map(([key, active]) => (
                <label
                  key={key}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={() => toggleProp(key)}
                  />
                  <span className="text-sm font-medium" style={{ color: 'var(--n-700)' }}>
                    {key}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Appearance */}
          <div className="glass rounded-2xl p-5">
            <label className="text-xs font-semibold block mb-3" style={{ color: 'var(--n-500)' }}>
              🎨 APARIENCIA
            </label>
            <div className="flex items-center gap-3 mb-3">
              <label className="text-sm" style={{ color: 'var(--n-700)' }}>Color:</label>
              <input
                type="color"
                value={bgColor}
                onChange={e => setBgColor(e.target.value)}
                className="w-8 h-8 rounded-lg border-0 cursor-pointer"
                style={{ padding: 0 }}
              />
              <span className="text-xs font-mono" style={{ color: 'var(--n-400)' }}>{bgColor}</span>
            </div>
            <div className="flex gap-2">
              {(['square', 'circle', 'rounded'] as const).map(s => (
                <button
                  key={s}
                  className={`btn flex-1 text-xs py-1.5 ${shape === s ? 'btn-primary' : ''}`}
                  onClick={() => setShape(s)}
                >
                  {s === 'square' ? '⬛' : s === 'circle' ? '🔵' : '🟦'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preview + Code */}
        <div className="lg:col-span-3 flex flex-col gap-5">

          {/* Preview */}
          <div className="glass-modal rounded-3xl p-6 flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-4">
              <h2 className="text-lg font-bold" style={{ color: 'var(--n-900)' }}>
                Preview en Vivo
              </h2>
              <button className="btn btn-ghost text-sm" onClick={replay}>
                ↺ Reproducir
              </button>
            </div>

            <div
              className="w-full flex items-center justify-center rounded-2xl"
              style={{
                height: 300,
                background: 'linear-gradient(135deg, rgba(30,157,241,0.04), rgba(139,92,246,0.04))',
                border: '1px solid var(--glass-border-subtle)',
              }}
            >
              <style>{`
                @keyframes playgroundAnim {
                  from { ${fromStyle} }
                  to { ${toStyle} }
                }
                .pg-el-${replayKey} {
                  animation: playgroundAnim ${duration}ms ${easing} ${delay}ms ${iterationCount} forwards;
                }
              `}</style>
              <div
                key={replayKey}
                className={`pg-el-${replayKey} flex items-center justify-center font-bold text-white text-2xl`}
                style={{
                  width: 100,
                  height: 100,
                  background: bgColor,
                  borderRadius: shapeStyle[shape],
                  boxShadow: `0 8px 32px ${bgColor}50`,
                  cursor: 'pointer',
                }}
                onClick={replay}
              >
                ⚡
              </div>
            </div>

            <p className="text-xs mt-3" style={{ color: 'var(--n-400)' }}>
              Click en el elemento para reproducir · Duración: {duration}ms · Easing: {easingOptions.find(e => e.value === easing)?.label}
            </p>
          </div>

          {/* Generated Code */}
          <div className="glass rounded-2xl overflow-hidden">
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: '1px solid var(--glass-border-subtle)' }}
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <span className="text-xs font-semibold ml-2" style={{ color: 'var(--n-500)' }}>
                  CSS generado
                </span>
              </div>
              <button
                className={`btn text-xs py-1.5 px-3 ${copied ? 'copy-success' : ''}`}
                onClick={handleCopy}
                style={{
                  background: copied ? '#10b981' : 'var(--accent-primary)',
                  color: 'white',
                  transition: 'all var(--t-fast)',
                }}
              >
                {copied ? '✓ Copiado!' : '📋 Copy full code'}
              </button>
            </div>
            <div className="code-block" style={{ borderRadius: 0 }}>
              <pre style={{ whiteSpace: 'pre-wrap' }}>{fullCode}</pre>
            </div>
          </div>

          {/* Quick Reference */}
          <div
            className="p-4 rounded-2xl"
            style={{
              background: 'var(--accent-soft)',
              border: '1px solid var(--accent-soft-border)',
            }}
          >
            <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--accent-primary)' }}>
              🎓 Curva de bezier actual
            </h3>
            <p className="text-xs font-mono" style={{ color: 'var(--n-600)' }}>
              {easing}
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--n-500)' }}>
              {easingOptions.find(e => e.value === easing)?.label} — Duración total: {duration + delay}ms
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
