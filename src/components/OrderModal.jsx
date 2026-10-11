import React, { useMemo } from 'react';
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  MessageSquare,
  ArrowRight,
  CreditCard,
  QrCode,
  CheckCircle2
} from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';

export default function OrderModal({
  isOpen,
  onClose,
  selectedItems,
  onUpdateQuantity,
  onClearOrder,
  onProceedToPayment,
  onOpenQrScanner,
  currentTable = 'Table 4 (Patio)',
}) {
  if (!isOpen) return null;

  // Aggregate items from signature specials and menu
  const allItemsMap = useMemo(() => {
    const map = {};
    cafeConfig.signatureSpecials.forEach((item) => {
      map[item.id] = item;
    });
    cafeConfig.menuItems.forEach((item) => {
      map[item.id] = item;
    });
    return map;
  }, []);

  // Compute order lines
  const orderLines = useMemo(() => {
    return Object.entries(selectedItems)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const item = allItemsMap[id] || { name: 'Special Item', price: 120 };
        return {
          id,
          name: item.name,
          price: item.price,
          qty,
          lineTotal: item.price * qty,
        };
      });
  }, [selectedItems, allItemsMap]);

  const grandTotal = useMemo(() => {
    return orderLines.reduce((acc, curr) => acc + curr.lineTotal, 0);
  }, [orderLines]);

  // Generate WhatsApp formatted text
  const generateWhatsAppMessage = () => {
    if (orderLines.length === 0) {
      return cafeConfig.whatsapp.defaultMessage;
    }
    const lines = orderLines
      .map((item) => `• ${item.qty}x ${item.name} (₹${item.lineTotal})`)
      .join('\n');

    return `Hello Bean & Bloom Café! I would like to place an order from ${currentTable}:\n\n${lines}\n\nEstimated Total: ₹${grandTotal}\n\nPlease confirm availability and prep time. Thank you!`;
  };

  const handleSendWhatsApp = () => {
    const msg = generateWhatsAppMessage();
    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${cafeConfig.whatsapp.number}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Your Order Bag"
    >
      <div
        className="bg-cream-50 border border-cream-300 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-cream-200 flex items-center justify-between bg-cream-100/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-espresso-900 text-cream-100 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-terracotta-400" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-espresso-900">
                Your Café Order Bag
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-terracotta-600">
                  {currentTable}
                </span>
                <button
                  type="button"
                  onClick={onOpenQrScanner}
                  className="text-[10px] text-espresso-600 underline hover:text-espresso-900 flex items-center gap-0.5"
                >
                  <QrCode className="w-3 h-3" />
                  <span>Change Table</span>
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-espresso-600 hover:text-espresso-900 hover:bg-cream-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {orderLines.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-12 h-12 rounded-full bg-cream-200 text-espresso-400 mx-auto flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-espresso-900">Your bag is empty</h4>
              <p className="text-xs text-espresso-600 max-w-xs mx-auto">
                Explore our menu starting from ₹100 or signature specials and click “Add” to curate your coffee run.
              </p>
              <button
                onClick={onClose}
                className="mt-2 inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold bg-espresso-900 text-cream-50 hover:bg-espresso-800 transition-colors"
              >
                <span>Browse Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {orderLines.map((line) => (
                <div
                  key={line.id}
                  className="p-3 rounded-2xl bg-cream-100 border border-cream-200 flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-sm font-bold text-espresso-900 truncate">
                      {line.name}
                    </h5>
                    <p className="text-xs text-espresso-500 mt-0.5">₹{line.price} each</p>
                  </div>

                  {/* Quantity Modifier */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-cream-300 rounded-full bg-cream-50 px-1 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(line.id, line.qty - 1)}
                        className="p-1 rounded-full text-espresso-700 hover:text-terracotta-600 transition-colors"
                        aria-label={`Decrease quantity of ${line.name}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 text-center font-bold text-xs text-espresso-900">
                        {line.qty}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(line.id, line.qty + 1)}
                        className="p-1 rounded-full text-espresso-700 hover:text-terracotta-600 transition-colors"
                        aria-label={`Increase quantity of ${line.name}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="font-serif text-sm font-bold text-espresso-900 w-14 text-right">
                      ₹{line.lineTotal}
                    </span>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center pt-1 text-xs">
                <span className="text-espresso-500">Items: {orderLines.length}</span>
                <button
                  onClick={onClearOrder}
                  className="text-terracotta-600 hover:text-terracotta-700 flex items-center gap-1 font-medium transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All Items</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {orderLines.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-cream-200 bg-cream-100/70 space-y-3.5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-espresso-600 block">Subtotal</span>
                <span className="font-serif text-2xl font-bold text-espresso-900">₹{grandTotal}</span>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                  Instant Table Delivery
                </span>
                <span className="text-[11px] text-espresso-500 block mt-0.5">Ready in ~12 mins</span>
              </div>
            </div>

            {/* Two Checkout Options */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={onProceedToPayment}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-espresso-900 hover:bg-espresso-800 text-cream-50 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
              >
                <CreditCard className="w-4 h-4 text-terracotta-400" />
                <span>Pay Now (UPI / Card / Cash) & Get Receipt</span>
              </button>

              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-cream-50 font-semibold text-xs transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Or Send Order to WhatsApp (+{cafeConfig.whatsapp.number})</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
