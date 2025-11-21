import ErrorTestComponent from '../components/test/ErrorTestComponent';
import LazyImage from '../components/common/LazyImage';
import OptimizedImage from '../components/common/OptimizedImage';

/**
 * Map View Component
 * Displays interactive map with stamp locations and GPS tracking
 */
function MapView() {
  return (
    <div className="container section">
      <h1>Map View</h1>
      <p className="responsive-text">
        Interactive map showing stamp locations in Saxon Switzerland
      </p>
      <div
        style={{
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--color-card-bg)',
          border: '1px solid var(--color-card-border)',
          borderRadius: 'var(--radius-lg)',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Map component will be implemented here
        </p>
      </div>

      {/* Lazy Loading Image Test - Scroll down to see lazy loading in action */}
      <div
        style={{
          marginTop: 'var(--spacing-3xl)',
          padding: 'var(--spacing-lg)',
        }}
      >
        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Lazy Loading Test</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
          Scroll down to see images load only when they enter the viewport. Check the Network tab in
          DevTools to verify images are loaded on demand.
        </p>

        {/* Test 1: Simple LazyImage */}
        <div
          style={{
            marginBottom: 'var(--spacing-2xl)',
            backgroundColor: 'var(--color-card-bg)',
            border: '1px solid var(--color-card-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)',
          }}
        >
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Test 1: LazyImage Component</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            This image uses the LazyImage component with Intersection Observer.
          </p>
          <LazyImage
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
            alt="Mountain landscape in Saxon Switzerland"
            style={{
              width: '100%',
              maxWidth: '800px',
              borderRadius: 'var(--radius-md)',
              margin: '0 auto',
              display: 'block',
            }}
            threshold={0.1}
            rootMargin="50px"
          />
        </div>

        {/* Test 2: OptimizedImage with responsive srcset */}
        <div
          style={{
            marginBottom: 'var(--spacing-2xl)',
            backgroundColor: 'var(--color-card-bg)',
            border: '1px solid var(--color-card-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)',
          }}
        >
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Test 2: OptimizedImage Component</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            This image uses OptimizedImage with responsive srcset for different screen sizes.
          </p>
          <OptimizedImage
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop"
            alt="Hiking trail in mountains"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
            style={{
              width: '100%',
              maxWidth: '800px',
              borderRadius: 'var(--radius-md)',
              margin: '0 auto',
              display: 'block',
            }}
          />
        </div>

        {/* Test 3: Multiple images to test lazy loading */}
        <div
          style={{
            marginBottom: 'var(--spacing-2xl)',
            backgroundColor: 'var(--color-card-bg)',
            border: '1px solid var(--color-card-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)',
          }}
        >
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Test 3: Multiple Lazy Images</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            Multiple images below - only visible ones will load. Scroll to see them load one by one.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-lg)',
            }}
          >
            <LazyImage
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop"
              alt="Forest path"
              style={{
                width: '100%',
                borderRadius: 'var(--radius-md)',
              }}
            />
            <LazyImage
              src="https://images.unsplash.com/photo-1511497584788-876760111969?w=600&h=400&fit=crop"
              alt="Mountain view"
              style={{
                width: '100%',
                borderRadius: 'var(--radius-md)',
              }}
            />
            <LazyImage
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop"
              alt="Nature landscape"
              style={{
                width: '100%',
                borderRadius: 'var(--radius-md)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Error Boundary Test Component - Remove after testing */}
      <ErrorTestComponent />
    </div>
  );
}

export default MapView;
