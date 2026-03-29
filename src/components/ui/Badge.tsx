import React from 'react'
import { cn } from '../../utils/cn'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  color?: 'blue' | 'purple' | 'pink' | 'green' | 'orange' | 'default'
}

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 border-blue-200 text-blue-600',
  purple: 'bg-purple-50 border-purple-200 text-purple-600',
  pink: 'bg-pink-50 border-pink-200 text-pink-600',
  green: 'bg-emerald-50 border-emerald-200 text-emerald-600',
  orange: 'bg-orange-50 border-orange-200 text-orange-600',
  default: 'badge',
}

export const Badge: React.FC<BadgeProps> = ({ children, className, color = 'default' }) => {
  if (color === 'default') {
    return <span className={cn('badge', className)}>{children}</span>
  }
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border',
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  )
}
