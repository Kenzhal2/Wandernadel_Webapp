import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 * and displays a fallback UI instead of crashing the app
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to error reporting service (e.g., Sentry)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  override render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-xl)',
            backgroundColor: 'var(--color-bg-primary)',
          }}
        >
          <div
            className="card"
            style={{
              maxWidth: '600px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ color: 'var(--color-error)', marginBottom: 'var(--spacing-md)' }}>
              Something went wrong
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {import.meta.env.DEV && this.state.error && (
              <details
                style={{
                  marginBottom: 'var(--spacing-lg)',
                  textAlign: 'left',
                  backgroundColor: 'var(--color-gray-100)',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-sm)',
                }}
              >
                <summary style={{ cursor: 'pointer', marginBottom: 'var(--spacing-sm)' }}>
                  Error Details (Development Only)
                </summary>
                <pre
                  style={{
                    overflow: 'auto',
                    color: 'var(--color-error)',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
              <button
                className="btn-primary"
                onClick={this.handleReset}
                style={{
                  padding: 'var(--spacing-sm) var(--spacing-lg)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 'var(--font-weight-semibold)',
                }}
              >
                Try Again
              </button>
              <button
                className="btn-outline"
                onClick={() => (window.location.href = '/')}
                style={{
                  padding: 'var(--spacing-sm) var(--spacing-lg)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 'var(--font-weight-semibold)',
                }}
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
