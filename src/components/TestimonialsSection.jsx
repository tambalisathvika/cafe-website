import React from 'react';
import { Star, MessageSquareQuote, Heart } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-cream-50 relative border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-espresso-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500" />
            <span>Community Love</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-900 tracking-tight">
            What Our Regulars & Critics Say
          </h2>
          <p className="text-sm sm:text-base text-espresso-600 mt-2 font-normal max-w-lg mx-auto">
            Real stories from our sun-drenched patio, brew counters, and slow mornings.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cafeConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream-100/60 border border-cream-200/90 rounded-3xl p-6 sm:p-7 shadow-warm hover:shadow-warm-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-sm text-espresso-800 leading-relaxed italic">
                  “{t.comment}”
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-6 mt-6 border-t border-cream-200/70 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-serif text-sm font-bold text-espresso-900 truncate">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-espresso-600 truncate">{t.role}</p>
                  <span className="inline-block mt-0.5 text-[10px] font-semibold text-terracotta-600">
                    Favorites: {t.favoriteItem}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
