import React from 'react';
import { ArrowRight, MapPin, Sparkles, QrCode, Calendar, Heart } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';
import ImageWithFallback from './ImageWithFallback';

export default function Hero({ onOpenQrScanner, onOpenReserve }) {
  return (
    <section id="hero" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-cream-100/60">
      {/* Decorative ambient background accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-terracotta-100/40 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-sage-100/40 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200/80 border border-cream-300 text-espresso-800 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse" />
              <span>{cafeConfig.brand.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-espresso-900 leading-[1.12]">
              {cafeConfig.brand.headline}
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-espresso-700/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Step away from the rush. Savor single-origin coffees starting from <strong className="font-bold text-espresso-900">₹100</strong>, flaky golden sourdough pastries pulled fresh from our stone oven, and calm corners designed for your everyday moments of peace.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-cream-50 bg-terracotta-500 hover:bg-terracotta-600 active:scale-95 rounded-full shadow-warm transition-all duration-200 group"
              >
                <span>Explore Menu (From ₹100)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={onOpenQrScanner}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-espresso-800 bg-cream-200/90 hover:bg-cream-300 active:scale-95 border border-cream-300 rounded-full transition-all duration-200"
              >
                <QrCode className="w-4 h-4 text-terracotta-500" />
                <span>Scan Table QR</span>
              </button>

              <button
                type="button"
                onClick={onOpenReserve}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-espresso-800 bg-transparent hover:bg-cream-200/60 active:scale-95 border border-espresso-300 rounded-full transition-all duration-200"
              >
                <Calendar className="w-4 h-4 text-terracotta-500" />
                <span>Book a Table</span>
              </button>
            </div>

            {/* Quick Metrics / Micro-features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-cream-300/60 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="font-serif text-xl sm:text-2xl font-bold text-espresso-900">₹100</p>
                <p className="text-xs text-espresso-600 mt-0.5">Starting Menu Price</p>
              </div>
              <div className="text-center lg:text-left border-x border-cream-300/70 px-2">
                <p className="font-serif text-xl sm:text-2xl font-bold text-espresso-900">7:30 AM</p>
                <p className="text-xs text-espresso-600 mt-0.5">Fresh Oven Pulls</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-xl sm:text-2xl font-bold text-espresso-900">UPI / QR</p>
                <p className="text-xs text-espresso-600 mt-0.5">Contactless Pay</p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-warm-lg border-4 border-cream-50 bg-cream-200 aspect-[4/5] transform hover:-translate-y-1 transition-transform duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop"
                  alt="Cozy interior of Bean and Bloom Cafe with warm ambient lighting, coffee bar, and greenery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 text-cream-50">
                  <p className="text-xs uppercase tracking-wider text-cream-200 font-medium">Neighborhood Sanctuary</p>
                  <p className="font-serif text-lg font-semibold mt-0.5">Handcrafted in Indiranagar</p>
                </div>
              </div>

              {/* Floating Table QR Callout */}
              <div
                onClick={onOpenQrScanner}
                className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-cream-50/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-warm border border-cream-300 max-w-[230px] hidden sm:flex items-center gap-3.5 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-espresso-900 flex items-center justify-center flex-shrink-0 text-terracotta-400">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-espresso-900 leading-tight">Digital QR Stand</p>
                  <p className="text-[11px] text-espresso-600 mt-0.5 leading-snug">Tap to simulate table menu</p>
                </div>
              </div>

              {/* Floating Coffee Cup Thumbnail */}
              <div className="absolute -top-6 -right-6 bg-cream-50/95 backdrop-blur-md p-3.5 rounded-2xl shadow-warm border border-cream-300 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-cream-200">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=200&auto=format&fit=crop"
                    alt="Latte art"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase text-terracotta-500 tracking-wider">Starting at</span>
                  <p className="text-xs font-bold text-espresso-900">Peaberry Filter</p>
                  <p className="text-[11px] font-bold text-terracotta-600">₹100</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
