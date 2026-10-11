import React from 'react';
import { Sparkles, QrCode, Calendar, Clock, Wifi } from 'lucide-react';

export default function LiveVibeBanner({ onOpenReserve, onOpenQrScanner, currentTable }) {
  return (
    <div className="bg-espresso-900 text-cream-100 text-xs py-2.5 px-4 border-b border-espresso-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Real-time Live Status Pulse */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none">
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>

          <span className="font-semibold text-emerald-400 whitespace-nowrap">Live Café Vibe:</span>
          <span className="text-cream-200 whitespace-nowrap">
            Peaceful & Sunlit (42% Capacity)
          </span>
          <span className="text-espresso-600 hidden md:inline">•</span>
          <span className="text-cream-300 hidden md:inline truncate">
            🔥 Sourdough cruffins pulled fresh 15m ago
          </span>
        </div>

        {/* Right: Quick Table QR & Reservation Actions */}
        <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto justify-end">
          {currentTable && (
            <span className="text-[11px] font-bold bg-terracotta-500/20 text-terracotta-300 border border-terracotta-500/30 px-2 py-0.5 rounded-full">
              📍 {currentTable}
            </span>
          )}

          <button
            onClick={onOpenQrScanner}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-100 text-[11px] font-medium transition-colors"
            aria-label="Scan Table QR Code"
          >
            <QrCode className="w-3 h-3 text-terracotta-400" />
            <span>Scan Table QR</span>
          </button>

          <button
            onClick={onOpenReserve}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 text-[11px] font-bold transition-colors shadow-sm"
            aria-label="Reserve a Table"
          >
            <Calendar className="w-3 h-3" />
            <span>Reserve Table</span>
          </button>
        </div>

      </div>
    </div>
  );
}
