import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface HeaderProps {
  darkMode: boolean
  onToggleDark: () => void
  onMenuToggle: () => void
  sidebarOpen: boolean
}

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/gallery', label: 'Galería' },
  { to: '/playground', label: 'Playground' },
]

export const Header: React.FC<HeaderProps> = ({ darkMode, onToggleDark, onMenuToggle, sidebarOpen }) => {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'anim-sticky-header h-16 flex items-center justify-between px-4 md:px-6 z-40',
        scrolled ? 'scrolled' : ''
      )}
      style={{
        background: scrolled ? 'var(--glass-bg-strong)' : 'var(--glass-bg)',
        backdropFilter: 'blur(var(--glass-blur))',
        WebkitBackdropFilter: 'blur(var(--glass-blur))',
        borderBottom: '1px solid var(--glass-border)',
        transition: 'all var(--t-normal)',
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2.5 font-bold text-lg no-underline"
        style={{ color: 'var(--n-900)', letterSpacing: '-0.02em' }}
      >
        <span
          className="w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary), #8b5cf6)',
            boxShadow: '0 4px 12px rgba(30,157,241,0.3)',
          }}
        >
          ⚡
        </span>
        <span className="hidden sm:block">
          Material <span style={{ color: 'var(--accent-primary)' }}>Motion</span>
        </span>
      </Link>

      {/* Nav (desktop) */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all no-underline',
              location.pathname === link.to
                ? 'text-white shadow-sm'
                : 'hover:bg-white/30'
            )}
            style={{
              color: location.pathname === link.to ? 'white' : 'var(--n-700)',
              background: location.pathname === link.to ? 'var(--accent-primary)' : 'transparent',
              transition: 'all var(--t-fast)',
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Dark mode toggle */}
        <button
          onClick={onToggleDark}
          className="w-9 h-9 rounded-xl flex items-center justify-center transition-all text-lg glass"
          style={{ transition: 'all var(--t-fast)' }}
          title={darkMode ? 'Modo claro' : 'Modo oscuro'}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Badge count */}
        <span
          className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{
            background: 'var(--accent-soft)',
            color: 'var(--accent-primary)',
            border: '1px solid var(--accent-soft-border)',
          }}
        >
          ✨ 52+ animaciones
        </span>

        {/* Mobile hamburger */}
        <button
          onClick={onMenuToggle}
          className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center glass"
          aria-label="Toggle menu"
        >
          <span style={{ fontSize: 20 }}>{sidebarOpen ? '✕' : '☰'}</span>
        </button>
      </div>
    </header>
  )
}
