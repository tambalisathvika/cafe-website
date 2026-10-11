import React, { useState } from 'react';
import { Coffee, Award, Sparkles, Check, Gift } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function LoyaltyClub() {
  const [stamps, setStamps] = useState(4);
  const [hasUnlocked, setHasUnlocked] = useState(false);

  const handleAddStamp = () => {
    sounds.playStamp();
    if (stamps < 5) {
      setStamps((prev) => prev + 1);
    } else if (stamps === 5) {
      setStamps(6);
      setHasUnlocked(true);
      sounds.playSuccess();
    }
  };

  const handleReset = () => {
    setStamps(1);
    setHasUnlocked(false);
  };

  return (
    <section className="py-16 bg-cream-100/80 border-b border-cream-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-espresso-900 rounded-3xl p-6 sm:p-10 text-cream-50 shadow-warm-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50/10 text-terracotta-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>The Bloom Coffee Pass</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream-50 leading-tight">
              Sip 5 Handcrafted Coffees, Your 6th One is On the House.
            </h2>

            <p className="text-xs sm:text-sm text-cream-200 leading-relaxed max-w-lg">
              Collect digital bean stamps on every visit to Bean & Bloom. Unlock secret tasting menus, complimentary baker's cruffins, and neighborhood roastery perks.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={handleAddStamp}
                disabled={stamps >= 6}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all active:scale-95 shadow-sm ${
                  stamps >= 6
                    ? 'bg-emerald-600 text-white cursor-default'
                    : 'bg-terracotta-500 hover:bg-terracotta-600 text-white'
                }`}
              >
                {stamps >= 6 ? (
                  <>
                    <Gift className="w-4 h-4" />
                    <span>Reward Unlocked!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Try Digital Stamp ({stamps}/6)</span>
                  </>
                )}
              </button>

              {stamps >= 6 && (
                <button
                  onClick={handleReset}
                  className="text-xs text-cream-300 hover:text-white underline"
                >
                  Reset Demo
                </button>
              )}
            </div>
          </div>

          {/* Right Stamp Card Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="bg-cream-50 text-espresso-900 p-6 sm:p-7 rounded-3xl shadow-xl border-2 border-cream-200 w-full max-w-md transform hover:rotate-1 transition-transform">
              <div className="flex items-center justify-between border-b border-cream-200 pb-3 mb-4">
                <div>
                  <h3 className="font-serif text-base font-bold text-espresso-900">
                    Bean & Bloom Loyalty Stamp
                  </h3>
                  <span className="text-[10px] text-espresso-500 uppercase tracking-widest font-bold">
                    Cardholder: Valued Guest
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-terracotta-600 font-bold text-xs">
                  ★
                </div>
              </div>

              {/* 6 Stamps Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 my-2">
                {[1, 2, 3, 4, 5, 6].map((num) => {
                  const isStamped = num <= stamps;
                  const isFreeCup = num === 6;
                  return (
                    <div
                      key={num}
                      className={`aspect-square rounded-2xl flex flex-col items-center justify-center border-2 transition-all duration-300 ${
                        isStamped
                          ? isFreeCup
                            ? 'bg-emerald-100 border-emerald-500 text-emerald-800 scale-105'
                            : 'bg-terracotta-50 border-terracotta-500 text-terracotta-600'
                          : 'bg-cream-100 border-dashed border-cream-300 text-espresso-400'
                      }`}
                    >
                      {isStamped ? (
                        <>
                          <Check className="w-5 h-5 mb-0.5 animate-scaleUp" />
                          <span className="text-[10px] font-bold">
                            {isFreeCup ? 'FREE!' : `Cup #${num}`}
                          </span>
                        </>
                      ) : (
                        <>
                          <Coffee className="w-5 h-5 opacity-40 mb-0.5" />
                          <span className="text-[9px] uppercase font-bold text-espresso-400">
                            {isFreeCup ? 'Free Cup' : `Cup ${num}`}
                          </span>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Reward Reveal */}
              {hasUnlocked ? (
                <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center animate-fadeIn">
                  <p className="text-xs font-bold text-emerald-900">
                    🎉 Free Pastry Voucher Unlocked!
                  </p>
                  <p className="text-[11px] text-emerald-700 mt-0.5">
                    Use code <strong className="font-mono bg-white px-1.5 py-0.5 rounded border border-emerald-300">BLOOM10</strong> at checkout for 10% off!
                  </p>
                </div>
              ) : (
                <p className="text-[11px] text-espresso-500 text-center mt-4">
                  {6 - stamps} more {6 - stamps === 1 ? 'coffee' : 'coffees'} until your free handcrafted drink.
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
