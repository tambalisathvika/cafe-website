import React from 'react';
import { Leaf, Sun, Coffee, Sparkles, Award } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function OurStory() {
  const storyPoints = [
    {
      icon: Coffee,
      title: "Thoughtfully Brewed",
      desc: "Directly partnered with shade-grown coffee estates across Chikmagalur, roasted weekly to preserve fragrant floral and chocolate notes.",
    },
    {
      icon: Leaf,
      title: "Honest Scratch Baking",
      desc: "Pure farm butter, stoneground flours, unrefined jaggery, and natural sourdough starters without artificial additives or preservatives.",
    },
    {
      icon: Sun,
      title: "Your Unrushed Sanctuary",
      desc: "Whether you need a sunlit corner to write your next chapter, connect with friends, or simply daydream over a warm mug.",
    },
  ];

  return (
    <section id="story" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side: Split Image Grid with Editorial Frame */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-warm border-4 border-cream-100 bg-cream-200 aspect-[4/3] sm:aspect-[16/11]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop"
                  alt="Barista thoughtfully preparing a fresh pour-over coffee"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Offset Second Image */}
              <div className="absolute -bottom-10 -right-6 sm:-bottom-12 sm:-right-8 w-1/2 rounded-2xl overflow-hidden shadow-warm-lg border-4 border-cream-50 bg-cream-200 aspect-square hidden sm:block">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop"
                  alt="Fresh artisan bread loaf and flour"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote Seal */}
              <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 bg-espresso-900 text-cream-50 p-4 sm:p-5 rounded-2xl shadow-warm max-w-[200px]">
                <p className="font-serif italic text-sm text-cream-200 leading-snug">
                  “Good coffee takes patience; genuine warmth takes care.”
                </p>
                <span className="block text-[10px] uppercase tracking-wider text-terracotta-400 font-semibold mt-2">
                  — The Bean & Bloom Creed
                </span>
              </div>
            </div>
          </div>

          {/* Text Side: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Story & Philosophy</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900 tracking-tight leading-[1.2]">
                Crafting moments that make you want to stay a little longer.
              </h2>
            </div>

            <div className="space-y-4 text-espresso-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Bean & Bloom Café was born out of a simple belief: in a fast-paced world, everyone deserves a quiet place to breathe, sip something extraordinary, and feel instantly at home.
              </p>
              <p>
                We started in 2023 with a small vintage espresso machine and a sourdough starter named Blossom. Today, our roasters and pastry chefs work side by side every morning, ensuring that every pour has a nuanced story and every pastry has that unmistakable freshly-baked crunch.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-4 pt-2">
              {storyPoints.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-cream-100/80 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-terracotta-50 text-terracotta-500 border border-terracotta-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-espresso-900">{item.title}</h3>
                      <p className="text-sm text-espresso-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
