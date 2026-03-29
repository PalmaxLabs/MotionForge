import React from 'react'
import { cn } from '../../utils/cn'
import { Category, categories } from '../../data/motions'

interface SidebarProps {
  selectedCategory: Category | 'Todas'
  onCategoryChange: (cat: Category | 'Todas') => void
  searchQuery: string
  onSearchChange: (q: string) => void
  isOpen: boolean
  onClose: () => void
  totalCount: number
  filteredCount: number
}

const categoryIcons: Record<string, string> = {
  'Todas': '✨',
  'Hover': '🖱️',
  'Enter/Exit': '🎬',
  'View Transitions': '🔄',
  'Microinteractions': '⚡',
  'Scroll': '📜',
}

const categoryColors: Record<string, string> = {
  'Hover': 'blue',
  'Enter/Exit': 'purple',
  'View Transitions': 'pink',
  'Microinteractions': 'green',
  'Scroll': 'orange',
}

const easing = [
  'cubic-bezier(0.4, 0, 0.2, 1) — Material Standard',
  'cubic-bezier(0.0, 0, 0.2, 1) — Decelerate',
  'cubic-bezier(0.4, 0, 1, 1) — Accelerate',
  'cubic-bezier(0.34, 1.56, 0.64, 1) — Spring',
  'cubic-bezier(0.2, 0, 0, 1) — Emphasized',
  'cubic-bezier(0.05, 0.7, 0.1, 1) — Spatial Decelerate',
  'cubic-bezier(0.3, 0, 0.8, 0.15) — Spatial Accelerate',
  'linear — Linear',
  'ease — CSS Ease',
  'ease-in-out — Smooth',
]

export const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  isOpen,
  onClose,
  totalCount,
  filteredCount,
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          style={{ background: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(4px)' }}
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'sidebar fixed md:static inset-y-16 left-0 z-40 md:z-auto',
          'p-4 flex flex-col gap-5 overflow-y-auto',
          'transition-transform duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
        style={{
          width: 'var(--sidebar-width)',
          top: '4rem',
          height: 'calc(100vh - 4rem)',
        }}
      >
        {/* Search */}
        <div>
          <label className="text-xs font-semibold mb-2 block" style={{ color: 'var(--n-500)' }}>
            BUSCAR ANIMACIÓN
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: 'var(--n-400)' }}>
              🔍
            </span>
            <input
              type="text"
              placeholder="zoom, fade, ripple..."
              value={searchQuery}
              onChange={e => onSearchChange(e.target.value)}
              className="input-glass pl-9"
            />
          </div>
        </div>

        {/* Result count */}
        <div
          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium"
          style={{ background: 'var(--accent-soft)', color: 'var(--accent-primary)', border: '1px solid var(--accent-soft-border)' }}
        >
          <span>Mostrando</span>
          <span className="font-bold">{filteredCount} / {totalCount}</span>
        </div>

        {/* Categories */}
        <div>
          <label className="text-xs font-semibold mb-2 block" style={{ color: 'var(--n-500)' }}>
            CATEGORÍAS
          </label>
          <div className="flex flex-col gap-1">
            {(['Todas', ...categories] as const).map(cat => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat as Category | 'Todas')}
                  className={cn(
                    'flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-all',
                    'w-full'
                  )}
                  style={{
                    background: isActive ? 'var(--accent-soft)' : 'transparent',
                    color: isActive ? 'var(--accent-primary)' : 'var(--n-600)',
                    border: isActive ? '1px solid var(--accent-soft-border)' : '1px solid transparent',
                    transform: isActive ? 'translateX(2px)' : 'none',
                    transition: 'all var(--t-fast)',
                  }}
                >
                  <span>{categoryIcons[cat] || '📦'}</span>
                  <span className="flex-1">{cat}</span>
                  {isActive && <span style={{ fontSize: 10 }}>●</span>}
                </button>
              )
            })}
          </div>
        </div>

        {/* Easing Reference */}
        <div>
          <label className="text-xs font-semibold mb-2 block" style={{ color: 'var(--n-500)' }}>
            EASINGS MATERIAL
          </label>
          <div className="flex flex-col gap-1">
            {easing.slice(0, 5).map((e, i) => (
              <div
                key={i}
                className="px-3 py-2 rounded-lg text-xs font-mono"
                style={{
                  background: 'var(--glass-bg-subtle)',
                  color: 'var(--n-600)',
                  border: '1px solid var(--glass-border-subtle)',
                  lineHeight: '1.4',
                }}
              >
                {e}
              </div>
            ))}
          </div>
        </div>

        {/* Quick tip */}
        <div
          className="p-3 rounded-xl text-xs"
          style={{
            background: 'var(--accent-soft)',
            border: '1px solid var(--accent-soft-border)',
            color: 'var(--n-600)',
          }}
        >
          <span className="font-semibold block mb-1" style={{ color: 'var(--accent-primary)' }}>
            💡 Tip
          </span>
          Haz hover sobre los elementos para ver la animación en acción. Haz click en cualquier card para ver el código completo.
        </div>
      </aside>
    </>
  )
}
