import React from 'react'
import { cn } from '../../utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
  glass?: 'default' | 'strong' | 'subtle'
}

const glassMap = {
  default: 'glass',
  strong: 'glass-strong',
  subtle: 'glass-subtle',
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  onClick,
  glass = 'default',
}) => {
  return (
    <div
      className={cn(
        glassMap[glass],
        'rounded-2xl',
        hover && 'card cursor-pointer',
        className
      )}
      onClick={onClick}
      style={{ borderRadius: 'var(--r-xl)' }}
    >
      {children}
    </div>
  )
}
