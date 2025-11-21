import { useState } from 'react';

/**
 * Test Component for Error Boundary
 * This component intentionally throws errors for testing purposes
 * DO NOT USE IN PRODUCTION
 */
function ErrorTestComponent() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('Test error: This is an intentional error for testing error boundaries');
  }

  return (
    <div
      style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: 'var(--color-card-bg)',
        border: '1px solid var(--color-card-border)',
        borderRadius: 'var(--radius-lg)',
        marginTop: 'var(--spacing-xl)',
      }}
    >
      <h3>Error Boundary Test</h3>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
        Click the button below to trigger an error and test the error boundary.
      </p>
      <button
        className="btn-primary"
        onClick={() => setShouldError(true)}
        style={{
          padding: 'var(--spacing-sm) var(--spacing-lg)',
          borderRadius: 'var(--radius-md)',
          fontWeight: 'var(--font-weight-semibold)',
        }}
      >
        Trigger Error
      </button>
    </div>
  );
}

export default ErrorTestComponent;
