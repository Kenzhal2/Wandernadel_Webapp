import { useState, ImgHTMLAttributes } from 'react';
import LazyImage from './LazyImage';

interface OptimizedImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'onError' | 'onLoad'> {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  placeholder?: string;
  quality?: number;
  format?: 'webp' | 'avif' | 'png' | 'jpg';
}

/**
 * OptimizedImage Component
 * Provides responsive images with multiple formats and sizes
 * Uses lazy loading and modern image formats when supported
 */
function OptimizedImage({
  src,
  alt,
  srcSet,
  sizes,
  placeholder,
  quality: _quality = 80,
  format: _format,
  ...imgProps
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  // Generate optimized image URL
  // In production, this could use an image CDN or optimization service
  const getOptimizedSrc = (originalSrc: string) => {
    // For now, return the original src
    // In production, you could use:
    // - Image CDN (Cloudinary, Imgix, etc.)
    // - Vite's built-in image optimization
    // - Custom image optimization service
    return originalSrc;
  };

  // Generate srcset for responsive images
  const generateSrcSet = () => {
    if (srcSet) return srcSet;

    // Generate default srcset if not provided
    const widths = [320, 640, 768, 1024, 1280, 1920];
    return widths.map((width) => `${getOptimizedSrc(src)} ${width}w`).join(', ');
  };

  return (
    <LazyImage
      src={imageSrc}
      alt={alt}
      srcSet={generateSrcSet()}
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
      {...(placeholder && { placeholder })}
      onError={() => {
        // Fallback to original src if optimized version fails
        if (imageSrc !== src) {
          setImageSrc(src);
        }
      }}
      {...imgProps}
    />
  );
}

export default OptimizedImage;
