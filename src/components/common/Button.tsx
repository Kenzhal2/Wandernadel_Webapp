import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
}

/**
 * Button Component
 * Reusable button with multiple variants and sizes
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  style,
  ...props
}: ButtonProps) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'var(--font-weight-semibold)',
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--transition-base)',
    cursor: 'pointer',
    border: '2px solid transparent',
    fontFamily: 'var(--font-family-body)',
    ...style,
  };

  const sizeStyles = {
    sm: {
      padding: 'var(--spacing-xs) var(--spacing-md)',
      fontSize: 'var(--font-size-sm)',
      minHeight: '36px',
    },
    md: {
      padding: 'var(--spacing-sm) var(--spacing-lg)',
      fontSize: 'var(--font-size-base)',
      minHeight: '44px',
    },
    lg: {
      padding: 'var(--spacing-md) var(--spacing-xl)',
      fontSize: 'var(--font-size-lg)',
      minHeight: '52px',
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-button-primary-bg)',
      color: 'var(--color-button-primary-text)',
      borderColor: 'var(--color-button-primary-bg)',
    },
    secondary: {
      backgroundColor: 'var(--color-button-secondary-bg)',
      color: 'var(--color-button-secondary-text)',
      borderColor: 'var(--color-button-secondary-bg)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-button-outline-text)',
      borderColor: 'var(--color-button-outline-border)',
    },
  };

  const hoverStyles = {
    primary: {
      backgroundColor: 'var(--color-button-primary-hover)',
      borderColor: 'var(--color-button-primary-hover)',
    },
    secondary: {
      backgroundColor: 'var(--color-button-secondary-hover)',
      borderColor: 'var(--color-button-secondary-hover)',
    },
    outline: {
      backgroundColor: 'var(--color-button-outline-hover-bg)',
      color: 'var(--color-button-outline-hover-text)',
    },
  };

  return (
    <button
      className={`btn-${variant} ${className}`}
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...(fullWidth && { width: '100%' }),
      }}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyles[variant]);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, variantStyles[variant]);
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
