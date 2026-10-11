import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import SignatureSpecials from './components/SignatureSpecials';
import MenuSection from './components/MenuSection';
import LoyaltyClub from './components/LoyaltyClub';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import VisitUsSection from './components/VisitUsSection';
import ContactOrderSection from './components/ContactOrderSection';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import CheckoutPaymentModal from './components/CheckoutPaymentModal';
import QrMenuScannerModal from './components/QrMenuScannerModal';
import TableReservationModal from './components/TableReservationModal';
import DeveloperBadgeModal from './components/DeveloperBadgeModal';
import LiveVibeBanner from './components/LiveVibeBanner';
import { ShoppingBag, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { cafeConfig } from './config/cafeConfig';
import { sounds } from './utils/audio';

export default function App() {
  // Modal states
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);

  // Table state
  const [currentTable, setCurrentTable] = useState('Table 4 (Patio)');

  // Cart / Bag state
  const [selectedItems, setSelectedItems] = useState({});

  // Toast notification for added item
  const [toast, setToast] = useState({ message: '', visible: false });

  // Add item or increment count with audio feedback
  const handleSelectItem = (item) => {
    sounds.playPop();

    setSelectedItems((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));

    // Trigger visual toast confirmation
    setToast({
      message: `Added "${item.name}" (₹${item.price}) to bag!`,
      visible: true,
    });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3200);
  };

  // Modify quantity directly
  const handleUpdateQuantity = (id, newQty) => {
    sounds.playPop();
    setSelectedItems((prev) => {
      const next = { ...prev };
      if (newQty <= 0) {
        delete next[id];
      } else {
        next[id] = newQty;
      }
      return next;
    });
  };

  const handleClearOrder = () => {
    setSelectedItems({});
  };

  const handleProceedToPayment = () => {
    setIsOrderModalOpen(false);
    setIsPaymentModalOpen(true);
  };

  // Total items in bag
  const totalItemCount = Object.values(selectedItems).reduce((sum, count) => sum + count, 0);

  // Bag total calculation
  const totalBagAmount = Object.entries(selectedItems).reduce((sum, [id, qty]) => {
    const item =
      cafeConfig.menuItems.find((m) => m.id === id) ||
      cafeConfig.signatureSpecials.find((s) => s.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-cream-50 text-espresso-900 selection:bg-terracotta-100 selection:text-terracotta-600 font-sans">
      
      {/* 1. Live Ambient Status Banner */}
      <LiveVibeBanner
        onOpenReserve={() => setIsReserveModalOpen(true)}
        onOpenQrScanner={() => setIsQrModalOpen(true)}
        currentTable={currentTable}
      />

      {/* 2. Responsive Navigation Header */}
      <Navbar
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        onOpenQrScanner={() => setIsQrModalOpen(true)}
        onOpenReserve={() => setIsReserveModalOpen(true)}
        onOpenDeveloperModal={() => setIsDeveloperModalOpen(true)}
        orderCount={totalItemCount}
        currentTable={currentTable}
      />

      {/* 3. Main Sections Flow */}
      <main id="main-content">
        <Hero
          onOpenQrScanner={() => setIsQrModalOpen(true)}
          onOpenReserve={() => setIsReserveModalOpen(true)}
        />
        
        <OurStory />

        <SignatureSpecials
          onSelectItem={handleSelectItem}
          selectedItems={selectedItems}
        />

        <MenuSection
          onSelectItem={handleSelectItem}
          selectedItems={selectedItems}
          onOpenQrScanner={() => setIsQrModalOpen(true)}
          currentTable={currentTable}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />

        {/* The Bloom Coffee Loyalty Pass */}
        <LoyaltyClub />

        {/* Customer & Critic Reviews */}
        <TestimonialsSection />

        <GallerySection />

        <VisitUsSection />

        <ContactOrderSection
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Modals */}
      
      {/* Order Bag Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedItems={selectedItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearOrder={handleClearOrder}
        onProceedToPayment={handleProceedToPayment}
        onOpenQrScanner={() => setIsQrModalOpen(true)}
        currentTable={currentTable}
      />

      {/* Secure Checkout & Payment Gateway Modal */}
      <CheckoutPaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        selectedItems={selectedItems}
        onClearOrder={handleClearOrder}
        currentTable={currentTable}
      />

      {/* Table QR Menu Scanner & Digital Stand Modal */}
      <QrMenuScannerModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        currentTable={currentTable}
        onSelectTable={(tbl) => setCurrentTable(tbl)}
      />

      {/* Free Table Reservation Modal */}
      <TableReservationModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
      />

      {/* Developer Portfolio Spotlight Modal */}
      <DeveloperBadgeModal
        isOpen={isDeveloperModalOpen}
        onClose={() => setIsDeveloperModalOpen(false)}
      />

      {/* 6. Live Interactive Item Added Toast */}
      {toast.visible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-espresso-900 text-cream-50 px-5 py-3 rounded-full shadow-2xl border border-cream-200/20 flex items-center gap-3 animate-scaleUp">
          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toast.message}</span>
          <button
            onClick={() => setIsOrderModalOpen(true)}
            className="inline-flex items-center gap-1 text-xs font-bold text-terracotta-400 hover:text-terracotta-300 ml-1 underline"
          >
            <span>View Bag (₹{totalBagAmount})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 7. Floating Developer Stamp Pill (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <button
          onClick={() => setIsDeveloperModalOpen(true)}
          className="group flex items-center gap-2 bg-cream-50/95 hover:bg-espresso-900 text-espresso-900 hover:text-cream-50 px-3.5 py-2 rounded-full shadow-warm border border-cream-300 transition-all text-xs font-bold hover:scale-105 active:scale-95"
          title="Meet the Developer: Tambali Sathvika"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Developed by Sathvika</span>
          <Sparkles className="w-3.5 h-3.5 text-terracotta-500 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* 8. Mobile Sticky Bag Button (Bottom Right) */}
      {totalItemCount > 0 && !toast.visible && (
        <div className="fixed bottom-6 right-6 z-40 sm:hidden animate-scaleUp">
          <button
            onClick={() => setIsOrderModalOpen(true)}
            className="flex items-center gap-2.5 bg-espresso-900 text-cream-50 px-5 py-3 rounded-full shadow-warm-lg border border-cream-200/20 active:scale-95"
            aria-label="View current order bag"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-terracotta-400" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-terracotta-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {totalItemCount}
              </span>
            </div>
            <span className="text-xs font-bold">Bag (₹{totalBagAmount})</span>
          </button>
        </div>
      )}

    </div>
  );
}
