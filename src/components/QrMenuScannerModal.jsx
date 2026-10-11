import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode, X, Check, Copy, Download, Smartphone, Sparkles, UtensilsCrossed, Camera, ScanLine } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';

export default function QrMenuScannerModal({ isOpen, onClose, currentTable, onSelectTable }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('stand'); // 'stand' | 'camera'
  const [selectedTable, setSelectedTable] = useState(currentTable || 'Table 4 (Patio)');
  const [copied, setCopied] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);

  const tables = [
    'Takeaway Counter',
    'Table 1 (Window Nook)',
    'Table 2 (Window Nook)',
    'Table 3 (Indoor Cozy)',
    'Table 4 (Patio)',
    'Table 5 (Garden Patio)',
    'Table 6 (Brew Bar)',
    'Table 7 (Quiet Study)',
    'Table 8 (Quiet Study)',
  ];

  // Construct URL for QR code
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://beanandbloomcafe.sample';
  const qrDataUrl = `${currentUrl}?table=${encodeURIComponent(selectedTable)}#menu`;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(qrDataUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleApplyTable = () => {
    onSelectTable(selectedTable);
    onClose();
  };

  // Simulate scanning QR code via phone camera
  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanSuccess(false);

    setTimeout(() => {
      setIsScanning(false);
      setScanSuccess(true);
      setTimeout(() => {
        onSelectTable(selectedTable);
        onClose();
      }, 1000);
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Table QR Menu Scanner"
    >
      <div
        className="bg-cream-50 border border-cream-300 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-cream-200 flex items-center justify-between bg-cream-100/60">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-espresso-900 text-cream-100 flex items-center justify-center shadow-sm">
              <QrCode className="w-5 h-5 text-terracotta-400" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-espresso-900">
                Scan & Dine Digital QR Menu
              </h3>
              <p className="text-xs text-espresso-500">Contactless table ordering & live scanner</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-espresso-600 hover:text-espresso-900 hover:bg-cream-200 transition-colors"
            aria-label="Close QR modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex border-b border-cream-200 bg-cream-100/40 px-4 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('stand')}
            className={`pb-2.5 px-4 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'stand'
                ? 'border-terracotta-500 text-espresso-900'
                : 'border-transparent text-espresso-500 hover:text-espresso-800'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Table Stand QR</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('camera')}
            className={`pb-2.5 px-4 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'camera'
                ? 'border-terracotta-500 text-espresso-900'
                : 'border-transparent text-espresso-500 hover:text-espresso-800'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Camera Scanner Simulator</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* Table Selector */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1.5">
              Select Dining Table Location:
            </label>
            <select
              value={selectedTable}
              onChange={(e) => setSelectedTable(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs sm:text-sm font-medium text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
            >
              {tables.map((tbl) => (
                <option key={tbl} value={tbl}>
                  {tbl}
                </option>
              ))}
            </select>
          </div>

          {activeTab === 'stand' ? (
            /* TAB 1: Stand Mockup */
            <div className="bg-gradient-to-b from-cream-100 to-cream-200/80 p-5 rounded-3xl border border-cream-300 text-center flex flex-col items-center justify-center shadow-inner relative">
              <div className="bg-white p-4 rounded-2xl shadow-md border border-cream-200 flex flex-col items-center">
                <QRCodeSVG
                  value={qrDataUrl}
                  size={170}
                  level="M"
                  bgColor="#FFFFFF"
                  fgColor="#1C120C"
                  includeMargin={false}
                />
                <p className="font-serif text-sm font-bold text-espresso-900 mt-2.5">
                  {cafeConfig.brand.name}
                </p>
                <span className="text-[11px] font-bold text-terracotta-600 uppercase tracking-widest mt-0.5">
                  {selectedTable}
                </span>
              </div>

              <p className="text-xs text-espresso-600 mt-3 max-w-xs leading-relaxed">
                Scan with any phone camera or tap the button below to load this table into your session.
              </p>
            </div>
          ) : (
            /* TAB 2: Camera Scanner Simulator */
            <div className="bg-espresso-900 text-cream-50 p-6 rounded-3xl text-center space-y-4 relative overflow-hidden">
              <div className="relative w-48 h-48 mx-auto bg-black/60 rounded-2xl border-2 border-cream-50/20 overflow-hidden flex items-center justify-center">
                
                {/* Viewfinder corner guides */}
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-terracotta-400" />
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-terracotta-400" />
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-terracotta-400" />
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-terracotta-400" />

                {/* Animated laser scan line */}
                {isScanning && (
                  <div className="absolute inset-x-0 h-0.5 bg-terracotta-400 shadow-[0_0_12px_#C25B3A] animate-bounce" />
                )}

                {scanSuccess ? (
                  <div className="text-emerald-400 space-y-1 animate-scaleUp">
                    <Check className="w-10 h-10 mx-auto" />
                    <p className="text-xs font-bold">QR Detected!</p>
                  </div>
                ) : (
                  <div className="p-3 bg-white/10 rounded-xl">
                    <QRCodeSVG
                      value={qrDataUrl}
                      size={100}
                      level="L"
                      bgColor="transparent"
                      fgColor="#FAF6ED"
                    />
                  </div>
                )}
              </div>

              <div>
                <p className="text-xs font-bold text-cream-100">
                  {scanSuccess ? `Connected to ${selectedTable}!` : 'Simulate Scanning Table QR Stand'}
                </p>
                <p className="text-[11px] text-cream-400 mt-0.5">
                  Point camera at the table QR code on table stand to unlock instant table ordering.
                </p>
              </div>

              <button
                type="button"
                onClick={handleSimulateScan}
                disabled={isScanning || scanSuccess}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 active:scale-95 text-white font-bold text-xs transition-all shadow-md"
              >
                {isScanning ? (
                  <>
                    <ScanLine className="w-4 h-4 animate-spin" />
                    <span>Scanning Table QR...</span>
                  </>
                ) : (
                  <>
                    <Camera className="w-4 h-4" />
                    <span>Scan {selectedTable} Now</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Quick info badges */}
          <div className="grid grid-cols-2 gap-2 text-[11px] text-espresso-700">
            <div className="p-2.5 bg-cream-100 rounded-xl border border-cream-200 flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5 text-terracotta-500 flex-shrink-0" />
              <span>Zero App Download</span>
            </div>
            <div className="p-2.5 bg-cream-100 rounded-xl border border-cream-200 flex items-center gap-2">
              <UtensilsCrossed className="w-3.5 h-3.5 text-terracotta-500 flex-shrink-0" />
              <span>Served to Your Seat</span>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-cream-200 bg-cream-100/70 space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleApplyTable}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-espresso-900 hover:bg-espresso-800 text-cream-50 font-bold text-xs sm:text-sm transition-all active:scale-95 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-terracotta-400" />
              <span>Order as {selectedTable}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-cream-200 hover:bg-cream-300 text-espresso-800 font-medium text-xs transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy QR Link</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
