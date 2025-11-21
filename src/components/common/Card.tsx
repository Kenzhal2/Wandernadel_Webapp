import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

/**
 * Card Component
 * Reusable card container with consistent styling
 */
function Card({
  children,
  padding = 'md',
  hover = false,
  className = '',
  style,
  ...props
}: CardProps) {
  const paddingMap = {
    none: '0',
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-lg)',
    lg: 'var(--spacing-xl)',
  };

  return (
    <div
      className={`card ${className}`}
      style={{
        backgroundColor: 'var(--color-card-bg)',
        border: '1px solid var(--color-card-border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        padding: paddingMap[padding],
        transition: hover ? 'all var(--transition-base)' : 'none',
        ...(hover && {
          cursor: 'pointer',
        }),
        ...style,
      }}
      onMouseEnter={
        hover
          ? (e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }
          : undefined
      }
      onMouseLeave={
        hover
          ? (e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.transform = 'translateY(0)';
            }
          : undefined
      }
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
