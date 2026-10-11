import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, ShoppingBag, QrCode, Calendar, Sparkles, UserCheck } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';

export default function Navbar({
  onOpenOrderModal,
  onOpenQrScanner,
  onOpenReserve,
  onOpenDeveloperModal,
  orderCount = 0,
  currentTable,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-warm py-3 border-b border-cream-200'
          : 'bg-cream-50/80 backdrop-blur-sm py-3.5 border-b border-cream-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-terracotta-500 rounded-lg p-1"
            aria-label={`${cafeConfig.brand.name} Home`}
          >
            <div className="w-10 h-10 rounded-full bg-espresso-900 text-cream-100 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <Coffee className="w-5 h-5 text-terracotta-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-espresso-900 group-hover:text-terracotta-600 transition-colors">
                {cafeConfig.brand.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-espresso-600 -mt-1 hidden sm:block">
                Coffee & Bakery
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-espresso-700 hover:text-terracotta-600 hover:bg-cream-100/70 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Developer Profile + QR Menu + Reserve + Order CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Developer Spotlight Pill */}
            <button
              onClick={onOpenDeveloperModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-terracotta-600 bg-terracotta-50 hover:bg-terracotta-100 rounded-full transition-all border border-terracotta-200 shadow-sm animate-pulse hover:animate-none"
              title="View Developer Credentials & Portfolio"
            >
              <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
              <span className="hidden sm:inline">By</span>
              <span>Sathvika</span>
            </button>

            {/* Table QR button */}
            <button
              onClick={onOpenQrScanner}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-espresso-800 bg-cream-200/80 hover:bg-cream-300 rounded-full transition-colors border border-cream-300"
              aria-label="Scan Table QR Code"
            >
              <QrCode className="w-3.5 h-3.5 text-terracotta-500" />
              <span>QR Menu</span>
            </button>

            {/* Table Reserve button */}
            <button
              onClick={onOpenReserve}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-espresso-800 hover:text-terracotta-600 rounded-full transition-colors"
              aria-label="Reserve Table"
            >
              <Calendar className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Reserve</span>
            </button>

            {/* Order Bag CTA button */}
            <button
              onClick={onOpenOrderModal}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-cream-50 bg-espresso-900 hover:bg-espresso-800 active:scale-95 rounded-full transition-all duration-200 shadow-sm hover:shadow group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-espresso-900"
              aria-label="Open Order Modal"
            >
              <ShoppingBag className="w-4 h-4 text-terracotta-400 group-hover:rotate-12 transition-transform" />
              <span>Order Now</span>
              {orderCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-terracotta-500 text-cream-50 text-[11px] font-bold rounded-full flex items-center justify-center ring-2 ring-cream-50 animate-scaleUp">
                  {orderCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg text-espresso-800 hover:text-terracotta-600 hover:bg-cream-200 focus:outline-none focus:ring-2 focus:ring-terracotta-500 transition-colors"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-cream-200 ${
          isOpen ? 'max-h-[34rem] opacity-100 bg-cream-50 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-2">
          
          {/* Developer Card in Mobile Menu */}
          <div
            onClick={() => {
              handleLinkClick();
              onOpenDeveloperModal();
            }}
            className="p-3 bg-terracotta-50 border border-terracotta-200 rounded-2xl flex items-center justify-between cursor-pointer mb-2"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-terracotta-500 text-white flex items-center justify-center font-bold text-xs">
                ST
              </div>
              <div>
                <strong className="text-xs text-espresso-900 block font-serif">Tambali Sathvika</strong>
                <span className="text-[10px] text-terracotta-700">Lead Full-Stack Web Developer</span>
              </div>
            </div>
            <span className="text-[10px] font-bold bg-white text-terracotta-600 px-2 py-0.5 rounded-full border border-terracotta-200">
              View Profile
            </span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-2 text-sm font-medium text-espresso-800 hover:text-terracotta-600 hover:bg-cream-200/60 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 border-t border-cream-200 space-y-2">
            <button
              onClick={() => {
                handleLinkClick();
                onOpenQrScanner();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-espresso-800 bg-cream-200 rounded-xl hover:bg-cream-300 transition-colors"
            >
              <QrCode className="w-4 h-4 text-terracotta-500" />
              <span>Scan & Dine Digital QR Menu</span>
            </button>

            <button
              onClick={() => {
                handleLinkClick();
                onOpenReserve();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-espresso-800 bg-cream-200 rounded-xl hover:bg-cream-300 transition-colors"
            >
              <Calendar className="w-4 h-4 text-terracotta-500" />
              <span>Reserve a Table</span>
            </button>

            <button
              onClick={() => {
                handleLinkClick();
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-cream-50 bg-espresso-900 rounded-xl hover:bg-espresso-800 transition-colors shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-terracotta-400" />
              <span>View Order Bag ({orderCount} items)</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
