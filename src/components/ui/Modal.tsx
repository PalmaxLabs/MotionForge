import React, { useEffect } from 'react'
import { cn } from '../../utils/cn'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
}

const sizeMap = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-3xl',
  xl: 'max-w-5xl',
  full: 'max-w-[95vw] w-full',
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  size = 'xl',
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ animation: 'fadeIn 200ms ease forwards' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 cursor-pointer"
        style={{
          background: 'rgba(15,23,42,0.5)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
        onClick={onClose}
      />
      {/* Modal Content */}
      <div
        className={cn(
          'glass-modal relative z-10 w-full rounded-3xl overflow-hidden',
          sizeMap[size],
          className
        )}
        style={{
          maxHeight: '90vh',
          overflowY: 'auto',
          animation: 'scaleIn 300ms cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

interface ModalHeaderProps {
  title: string
  onClose: () => void
  subtitle?: string
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose, subtitle }) => (
  <div className="flex items-start justify-between p-6 border-b" style={{ borderColor: 'var(--glass-border)' }}>
    <div>
      <h2 className="text-2xl font-bold" style={{ color: 'var(--n-900)' }}>{title}</h2>
      {subtitle && <p className="text-sm mt-1" style={{ color: 'var(--n-500)' }}>{subtitle}</p>}
    </div>
    <button
      onClick={onClose}
      className="btn btn-ghost ml-4 flex-shrink-0 w-9 h-9 p-0 flex items-center justify-center rounded-full"
      style={{ fontSize: 20 }}
      aria-label="Close"
    >
      ✕
    </button>
  </div>
)
