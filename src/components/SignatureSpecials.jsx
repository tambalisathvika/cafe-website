import React from 'react';
import { Sparkles, Plus, Check } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';
import ImageWithFallback from './ImageWithFallback';

export default function SignatureSpecials({ onSelectItem, selectedItems = {} }) {
  return (
    <section id="specials" className="py-20 sm:py-28 bg-cream-100/70 border-y border-cream-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-50 text-terracotta-500 border border-terracotta-100 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Highlights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900 tracking-tight">
            Our Signature Specials
          </h2>
          <p className="text-base sm:text-lg text-espresso-600 mt-3 max-w-xl mx-auto font-normal">
            Three handcrafted recipes that our regulars keep returning for — brewed and baked with rare ingredients and exceptional care.
          </p>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {cafeConfig.signatureSpecials.map((special) => {
            const isAdded = (selectedItems[special.id] || 0) > 0;
            return (
              <div
                key={special.id}
                className="group bg-cream-50 rounded-3xl overflow-hidden border border-cream-300 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col transform hover:-translate-y-1.5"
              >
                {/* Image Container with Badge */}
                <div className="relative aspect-[16/11] overflow-hidden bg-cream-200">
                  <ImageWithFallback
                    src={special.image}
                    alt={special.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-espresso-900/90 backdrop-blur-sm text-cream-50 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                    {special.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-cream-50/95 backdrop-blur-sm text-terracotta-600 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {special.dietary}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs uppercase tracking-widest text-espresso-600 font-semibold">
                        {special.category} • {special.tagline}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso-900 group-hover:text-terracotta-600 transition-colors">
                      {special.name}
                    </h3>

                    <p className="text-sm text-espresso-600/90 mt-2.5 leading-relaxed font-normal">
                      {special.description}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-6 mt-6 border-t border-cream-200 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-espresso-600 block">Sample Price</span>
                      <span className="font-serif text-2xl font-bold text-espresso-900">
                        ₹{special.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectItem(special)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 shadow-sm ${
                        isAdded
                          ? 'bg-sage-600 text-cream-50 hover:bg-sage-700'
                          : 'bg-espresso-900 text-cream-50 hover:bg-terracotta-500'
                      }`}
                      aria-label={`Add ${special.name} to order`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added ({selectedItems[special.id]})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-espresso-600 italic">
            * Signature specials and sample prices are for demonstration. Can be replaced with your seasonal or seasonal roast menu.
          </p>
        </div>

      </div>
    </section>
  );
}
