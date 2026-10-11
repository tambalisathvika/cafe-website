import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';
import ImageWithFallback from './ImageWithFallback';

export default function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const gallery = cafeConfig.gallery;

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-espresso-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Atmosphere & Space</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900 tracking-tight">
            Little Moments at Bean & Bloom
          </h2>
          <p className="text-base sm:text-lg text-espresso-600 mt-3 font-normal max-w-xl mx-auto">
            Take a visual tour through our sun-dappled tables, brewing counters, and peaceful garden seating.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-cream-200 border border-cream-300 shadow-warm cursor-pointer aspect-[4/3] transform hover:-translate-y-1 transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View full image: ${item.title}`}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay with Editorial Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-espresso-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-cream-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-cream-50">{item.title}</h3>
                    <p className="text-xs text-cream-200 mt-0.5">{item.subtitle}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cream-50/20 backdrop-blur-md flex items-center justify-center text-cream-50">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-espresso-900/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-cream-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-cream-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-cream-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-espresso-800 max-h-[70vh] flex items-center justify-center">
              <img
                src={gallery[activeImageIndex].image}
                alt={gallery[activeImageIndex].alt}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="text-center mt-4 text-cream-100">
              <h4 className="font-serif text-xl font-bold">
                {gallery[activeImageIndex].title}
              </h4>
              <p className="text-sm text-cream-300 mt-1">
                {gallery[activeImageIndex].subtitle}
              </p>
              <span className="text-xs text-cream-400 mt-2 block">
                {activeImageIndex + 1} of {gallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
