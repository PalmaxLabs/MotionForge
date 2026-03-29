import React from 'react'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  loading?: boolean
  as?: 'button' | 'a'
  href?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn',
  ghost: 'btn-ghost',
  destructive: 'btn-destructive',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-xs px-3 py-1.5 gap-1.5',
  md: '',
  lg: 'text-base px-6 py-3 gap-2',
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  icon,
  iconRight,
  loading,
  children,
  className,
  disabled,
  as: Tag = 'button',
  href,
  ...props
}) => {
  const classes = cn('btn', variantClasses[variant], sizeClasses[size], className)

  if (Tag === 'a') {
    return (
      <a href={href} className={classes}>
        {loading ? <span className="anim-spinner" style={{ width: 16, height: 16, borderWidth: 2 }} /> : icon}
        {children}
        {iconRight}
      </a>
    )
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span
          className="anim-spinner"
          style={{ width: 16, height: 16, borderWidth: 2 }}
        />
      ) : icon}
      {children}
      {iconRight}
    </button>
  )
}
