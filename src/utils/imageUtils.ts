/**
 * Image Utility Functions
 * Helper functions for image optimization and processing
 */

/**
 * Get optimized image URL
 * In production, this could integrate with an image CDN
 */
export function getOptimizedImageUrl(
  src: string,
  _options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'png' | 'jpg';
  }
): string {
  // For now, return the original src
  // In production, you could:
  // - Use Vite's ?url import for processed images
  // - Integrate with image CDN (Cloudinary, Imgix, etc.)
  // - Use a custom image optimization service

  if (src.startsWith('http://') || src.startsWith('https://')) {
    // External URL - could add CDN parameters here
    return src;
  }

  // Local asset - Vite will process this during build
  return src;
}

/**
 * Generate responsive srcset string
 */
export function generateSrcSet(
  src: string,
  widths: number[] = [320, 640, 768, 1024, 1280, 1920]
): string {
  return widths.map((width) => `${getOptimizedImageUrl(src, { width })} ${width}w`).join(', ');
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizes(breakpoints?: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}): string {
  const mobile = breakpoints?.mobile || '100vw';
  const tablet = breakpoints?.tablet || '50vw';
  const desktop = breakpoints?.desktop || '33vw';

  return `(max-width: 768px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
}

/**
 * Check if WebP is supported
 */
export function isWebPSupported(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
}

/**
 * Check if AVIF is supported
 */
export function isAVIFSupported(): Promise<boolean> {
  return new Promise((resolve) => {
    const avif = new Image();
    avif.onload = avif.onerror = () => {
      resolve(avif.height === 2);
    };
    avif.src =
      'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
}

/**
 * Get best image format based on browser support
 */
export async function getBestImageFormat(): Promise<'webp' | 'avif' | 'jpg'> {
  if (await isAVIFSupported()) {
    return 'avif';
  }
  if (await isWebPSupported()) {
    return 'webp';
  }
  return 'jpg';
}
