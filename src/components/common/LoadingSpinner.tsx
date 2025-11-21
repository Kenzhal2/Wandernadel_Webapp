/**
 * Loading Spinner Component
 * Displays a loading indicator with optional message
 */
interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

function LoadingSpinner({ message, size = 'md', fullScreen = false }: LoadingSpinnerProps) {
  const sizeMap = {
    sm: '24px',
    md: '48px',
    lg: '72px',
  };

  const spinnerSize = sizeMap[size];

  const content = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-md)',
      }}
    >
      <div
        style={{
          width: spinnerSize,
          height: spinnerSize,
          border: `4px solid var(--color-gray-200)`,
          borderTop: `4px solid var(--color-forest-green)`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      {message && (
        <p
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--font-size-base)',
            margin: 0,
          }}
        >
          {message}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--color-bg-primary)',
          zIndex: 'var(--z-modal)',
        }}
      >
        {content}
      </div>
    );
  }

  return (
    <div
      style={{
        padding: 'var(--spacing-3xl)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {content}
    </div>
  );
}

export default LoadingSpinner;
