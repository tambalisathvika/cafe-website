import React, { useState } from 'react';
import { Coffee } from 'lucide-react';

/**
 * ImageWithFallback
 * Gracefully handles loading states and network fallbacks with a warm cafe aesthetic.
 */
export default function ImageWithFallback({
  src,
  alt,
  className = '',
  aspectRatio = '',
  fallbackText = 'Bean & Bloom Café',
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-cream-200 border border-cream-300 flex flex-col items-center justify-center text-espresso-600 p-4 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center mb-2 shadow-inner">
          <Coffee className="w-6 h-6 text-terracotta-500" />
        </div>
        <p className="text-xs font-serif font-medium text-espresso-700">{fallbackText}</p>
        <span className="text-[10px] text-espresso-500 uppercase tracking-wider mt-0.5">Artisanal Café</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Subtle skeleton placeholder until loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-cream-200 animate-pulse flex items-center justify-center">
          <Coffee className="w-5 h-5 text-cream-400 animate-bounce" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
}
