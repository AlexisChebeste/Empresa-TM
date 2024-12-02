import { useState, useEffect } from 'react';

export function useOptimizedImage(src, sizes = '100vw') {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
      setCurrentSrc(src);
    };
  }, [src]);

  const generateSrcSet = () => {
    
    return `
      ${src}?w=480 480w,
      ${src}?w=768 768w,
      ${src}?w=1024 1024w,
      ${src}?w=1280 1280w
    `;
  };

  return {
    src: currentSrc,
    srcSet: generateSrcSet(),
    sizes,
    loading: "lazy",
    className: `transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`,
  };
}

