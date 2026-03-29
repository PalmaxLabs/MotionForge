import React, { useState } from 'react'
import { Motion } from '../../data/motions'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import { Badge } from '../ui/Badge'
import { AnimationPreview } from './AnimationPreview'
import { cn } from '../../utils/cn'

interface MotionCardProps {
  motion: Motion
  onClick: (motion: Motion) => void
}

const categoryBadgeColor: Record<string, 'blue' | 'purple' | 'pink' | 'green' | 'orange'> = {
  'Hover': 'blue',
  'Enter/Exit': 'purple',
  'View Transitions': 'pink',
  'Microinteractions': 'green',
  'Scroll': 'orange',
}

export const MotionCard: React.FC<MotionCardProps> = ({ motion, onClick }) => {
  const { copy, copiedId } = useCopyToClipboard()
  const [copyTarget, setCopyTarget] = useState<'css' | 'html' | null>(null)

  const handleCopyCSS = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setCopyTarget('css')
    await copy(motion.css, `${motion.id}-css`)
    setTimeout(() => setCopyTarget(null), 2000)
  }

  const handleCopyHTML = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setCopyTarget('html')
    await copy(motion.html, `${motion.id}-html`)
    setTimeout(() => setCopyTarget(null), 2000)
  }

  const isCSSCopied = copyTarget === 'css'
  const isHTMLCopied = copyTarget === 'html'

  return (
    <div
      className="card stagger-item flex flex-col overflow-hidden"
      onClick={() => onClick(motion)}
      style={{ cursor: 'pointer' }}
    >
      {/* Preview Area */}
      <div className="p-3">
        <AnimationPreview motion={motion} />
      </div>

      {/* Content */}
      <div className="px-4 pb-2 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3
            className="font-semibold leading-tight"
            style={{ fontSize: 'var(--text-base)', color: 'var(--n-800)' }}
          >
            {motion.title}
          </h3>
          {motion.featured && (
            <span className="text-xs flex-shrink-0" title="Destacado">⭐</span>
          )}
        </div>

        <Badge color={categoryBadgeColor[motion.category] || 'blue'}>
          {motion.category}
        </Badge>

        <p
          className="mt-2 text-xs leading-relaxed line-clamp-2 flex-1"
          style={{ color: 'var(--n-500)' }}
        >
          {motion.description}
        </p>
      </div>

      {/* Actions */}
      <div
        className="px-4 pb-4 pt-2 flex gap-2"
        style={{ borderTop: '1px solid var(--glass-border-subtle)', marginTop: 8 }}
      >
        <button
          className={cn(
            'btn btn-primary flex-1 text-xs py-2',
            isCSSCopied && 'copy-success'
          )}
          onClick={handleCopyCSS}
          style={{
            background: isCSSCopied ? '#10b981' : 'var(--accent-primary)',
            transition: 'all var(--t-fast)',
          }}
        >
          {isCSSCopied ? '✓ CSS Copiado' : '📋 Copy CSS'}
        </button>
        <button
          className={cn(
            'btn flex-1 text-xs py-2',
            isHTMLCopied && 'copy-success'
          )}
          onClick={handleCopyHTML}
          style={{
            background: isHTMLCopied ? '#10b981' : 'var(--glass-bg)',
            color: isHTMLCopied ? 'white' : 'var(--n-700)',
            transition: 'all var(--t-fast)',
          }}
        >
          {isHTMLCopied ? '✓ HTML Copiado' : '🏷️ Copy HTML'}
        </button>
      </div>
    </div>
  )
}
