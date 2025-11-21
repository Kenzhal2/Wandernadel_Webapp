import { useState, useRef, useEffect, ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  threshold?: number;
  rootMargin?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * LazyImage Component
 * Lazy loads images using Intersection Observer API
 * Only loads images when they enter the viewport
 */
function LazyImage({
  src,
  alt,
  placeholder,
  threshold = 0.1,
  rootMargin = '50px',
  onLoad,
  onError,
  ...imgProps
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: load immediately if Intersection Observer is not supported
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: hasError ? 'var(--color-gray-200)' : 'var(--color-gray-100)',
        ...imgProps.style,
      }}
    >
      {/* Placeholder or loading state */}
      {!isLoaded && !hasError && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-gray-100)',
            zIndex: 1,
          }}
        >
          {placeholder ? (
            <img
              src={placeholder}
              alt=""
              aria-hidden="true"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.5,
              }}
            />
          ) : (
            <div
              style={{
                width: '48px',
                height: '48px',
                border: '4px solid var(--color-gray-200)',
                borderTop: '4px solid var(--color-forest-green)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-gray-200)',
            color: 'var(--color-text-tertiary)',
            fontSize: 'var(--font-size-sm)',
          }}
        >
          Failed to load image
        </div>
      )}

      {/* Actual image */}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity var(--transition-base)',
          ...imgProps.style,
        }}
        {...imgProps}
      />
    </div>
  );
}

export default LazyImage;
