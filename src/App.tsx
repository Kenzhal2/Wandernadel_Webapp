import { Outlet, Link, useLocation } from 'react-router-dom';

/**
 * Root App Component
 * Provides layout and navigation for all routes
 */
function App() {
  const location = useLocation();

  // Determine active route for navigation highlighting
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: 'var(--color-forest-green)',
          color: 'var(--color-text-on-primary)',
          padding: 'var(--spacing-md)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div className="container">
          <h1 style={{ margin: 0, fontSize: 'var(--font-size-2xl)' }}>
            Sächsische Schweiz Wandernadel
          </h1>
        </div>
      </header>

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          borderBottom: '1px solid var(--color-border-light)',
          padding: 'var(--spacing-sm) 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              gap: 'var(--spacing-md)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/map"
              style={{
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: isActive('/map')
                  ? 'var(--font-weight-bold)'
                  : 'var(--font-weight-normal)',
                backgroundColor: isActive('/map') ? 'var(--color-forest-green)' : 'transparent',
                color: isActive('/map')
                  ? 'var(--color-text-on-primary)'
                  : 'var(--color-text-primary)',
                transition: 'all var(--transition-base)',
              }}
            >
              Map
            </Link>
            <Link
              to="/passport"
              style={{
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: isActive('/passport')
                  ? 'var(--font-weight-bold)'
                  : 'var(--font-weight-normal)',
                backgroundColor: isActive('/passport')
                  ? 'var(--color-forest-green)'
                  : 'transparent',
                color: isActive('/passport')
                  ? 'var(--color-text-on-primary)'
                  : 'var(--color-text-primary)',
                transition: 'all var(--transition-base)',
              }}
            >
              Passport
            </Link>
            <Link
              to="/achievements"
              style={{
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: isActive('/achievements')
                  ? 'var(--font-weight-bold)'
                  : 'var(--font-weight-normal)',
                backgroundColor: isActive('/achievements')
                  ? 'var(--color-forest-green)'
                  : 'transparent',
                color: isActive('/achievements')
                  ? 'var(--color-text-on-primary)'
                  : 'var(--color-text-primary)',
                transition: 'all var(--transition-base)',
              }}
            >
              Achievements
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          borderTop: '1px solid var(--color-border-light)',
          padding: 'var(--spacing-md)',
          textAlign: 'center',
          color: 'var(--color-text-secondary)',
          fontSize: 'var(--font-size-sm)',
        }}
      >
        <div className="container">
          <p style={{ margin: 0 }}>© 2024 Sächsische Schweiz Wandernadel</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
