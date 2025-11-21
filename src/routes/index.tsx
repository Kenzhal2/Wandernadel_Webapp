import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import App from '../App';
import ErrorBoundary from '../components/common/ErrorBoundary';
import LoadingSpinner from '../components/common/LoadingSpinner';

// Lazy load views for code splitting
const MapView = lazy(() => import('../views/MapView'));
const PassportView = lazy(() => import('../views/PassportView'));
const AchievementsView = lazy(() => import('../views/AchievementsView'));

/**
 * Application routes configuration
 * Defines all routes for the Wandernadel Web App
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
    errorElement: (
      <ErrorBoundary>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-xl)',
          }}
        >
          <div className="card">
            <h2>Route Error</h2>
            <p>This route could not be loaded. Please try again.</p>
            <button
              className="btn-primary"
              onClick={() => (window.location.href = '/')}
              style={{
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                borderRadius: 'var(--radius-md)',
                marginTop: 'var(--spacing-md)',
              }}
            >
              Go Home
            </button>
          </div>
        </div>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner message="Loading map..." />}>
            <ErrorBoundary>
              <MapView />
            </ErrorBoundary>
          </Suspense>
        ),
      },
      {
        path: 'map',
        element: (
          <Suspense fallback={<LoadingSpinner message="Loading map..." />}>
            <ErrorBoundary>
              <MapView />
            </ErrorBoundary>
          </Suspense>
        ),
      },
      {
        path: 'passport',
        element: (
          <Suspense fallback={<LoadingSpinner message="Loading passport..." />}>
            <ErrorBoundary>
              <PassportView />
            </ErrorBoundary>
          </Suspense>
        ),
      },
      {
        path: 'achievements',
        element: (
          <Suspense fallback={<LoadingSpinner message="Loading achievements..." />}>
            <ErrorBoundary>
              <AchievementsView />
            </ErrorBoundary>
          </Suspense>
        ),
      },
    ],
  },
]);

/**
 * Router provider component
 * Wraps the application with React Router
 */
export function AppRouter() {
  return <RouterProvider router={router} />;
}
