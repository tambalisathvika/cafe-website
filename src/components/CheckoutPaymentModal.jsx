import React, { useState, useMemo } from 'react';
import {
  CreditCard,
  QrCode,
  CheckCircle,
  X,
  Lock,
  Sparkles,
  Printer,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Clock,
  Heart,
  Tag,
  Download
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { cafeConfig } from '../config/cafeConfig';
import { sounds } from '../utils/audio';

export default function CheckoutPaymentModal({
  isOpen,
  onClose,
  selectedItems,
  onClearOrder,
  currentTable = 'Table 4 (Patio)',
}) {
  if (!isOpen) return null;

  // Aggregate items map
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

  // Pricing calculations
  const itemsSubtotal = useMemo(() => {
    return orderLines.reduce((acc, curr) => acc + curr.lineTotal, 0);
  }, [orderLines]);

  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card' | 'counter'
  const [upiId, setUpiId] = useState('tambalisathvika@oksbi');
  const [selectedUpiApp, setSelectedUpiApp] = useState('GPay');
  const [tipAmount, setTipAmount] = useState(20);
  const [promoCodeInput, setPromoCodeInput] = useState('BLOOM10');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  // Card fields
  const [cardData, setCardData] = useState({
    number: '4532 8910 2345 6789',
    name: cafeConfig.creator.name,
    expiry: '08/28',
    cvv: '842',
  });

  const [customerName, setCustomerName] = useState(cafeConfig.creator.name);
  const [customerPhone, setCustomerPhone] = useState(cafeConfig.creator.phone);

  // Processing state & Success invoice state
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderReceipt, setOrderReceipt] = useState(null);

  // Apply promo
  const handleApplyPromo = () => {
    const code = promoCodeInput.trim().toUpperCase();
    if (cafeConfig.promoCodes[code]) {
      const perk = cafeConfig.promoCodes[code];
      let disc = 0;
      if (perk.discountPercent) {
        disc = Math.round((itemsSubtotal * perk.discountPercent) / 100);
      } else if (perk.discountFlat) {
        disc = perk.discountFlat;
      }
      setAppliedDiscount(disc);
      setPromoMessage(`Success! Code ${code} applied (${perk.description})`);
    } else {
      setAppliedDiscount(0);
      setPromoMessage('Invalid code. Try "BLOOM10" (10% off) or "SATHVIKA" (20% off)!');
    }
  };

  // GST 5% on restaurant food
  const effectiveSubtotal = Math.max(0, itemsSubtotal - appliedDiscount);
  const gstAmount = Math.round(effectiveSubtotal * 0.05);
  const grandTotal = effectiveSubtotal + gstAmount + tipAmount;

  const handlePayNow = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedReceipt = {
        orderId: `BNB-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        customerName: customerName || cafeConfig.creator.name,
        customerPhone: customerPhone || cafeConfig.creator.phone,
        customerEmail: cafeConfig.creator.email,
        table: currentTable,
        method: paymentMethod === 'upi' ? `UPI (${selectedUpiApp})` : paymentMethod === 'card' ? 'Visa Card' : 'Counter Cash',
        items: [...orderLines],
        subtotal: itemsSubtotal,
        discount: appliedDiscount,
        gst: gstAmount,
        tip: tipAmount,
        total: grandTotal,
        prepTimeMinutes: 12,
      };

      setOrderReceipt(generatedReceipt);
      sounds.playSuccess();
      onClearOrder();
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Secure Checkout & Payment Gateway"
    >
      <div
        className="bg-cream-50 border border-cream-300 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[94vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-cream-200 flex items-center justify-between bg-cream-100/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-espresso-900 text-cream-100 flex items-center justify-center shadow-sm">
              <CreditCard className="w-4 h-4 text-terracotta-400" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-espresso-900 flex items-center gap-2">
                <span>{orderReceipt ? 'Order Confirmed & Tax Invoice' : 'Instant Café Payment Gateway'}</span>
                <span className="text-[10px] font-sans font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  100% Encrypted
                </span>
              </h3>
              <p className="text-xs text-espresso-500">
                {orderReceipt ? `Receipt ID: ${orderReceipt.orderId}` : `${currentTable} • Bill To: ${cafeConfig.creator.name}`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-espresso-600 hover:text-espresso-900 hover:bg-cream-200 transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* VIEW A: ORDER CONFIRMATION & DIGITAL RECEIPT */}
          {orderReceipt ? (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Success Badge Banner */}
              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-emerald-950">
                  Payment Verified! Token Dispatched
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                  Receipt generated for <strong>{orderReceipt.customerName}</strong>. Ready in ~12 mins at <strong>{orderReceipt.table}</strong>.
                </p>
              </div>

              {/* Live Kitchen Status Tracker */}
              <div className="bg-cream-100/70 p-4 rounded-2xl border border-cream-200 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-espresso-700">Live Kitchen Prep Tracker</span>
                  <span className="flex items-center gap-1 text-terracotta-600 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Est. {orderReceipt.prepTimeMinutes} mins</span>
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                  <div className="p-2 rounded-xl bg-emerald-600 text-white font-semibold">
                    1. Received ✓
                  </div>
                  <div className="p-2 rounded-xl bg-amber-500 text-white font-semibold animate-pulse">
                    2. Brewing ☕
                  </div>
                  <div className="p-2 rounded-xl bg-cream-200 text-espresso-600">
                    3. Oven Fresh
                  </div>
                  <div className="p-2 rounded-xl bg-cream-200 text-espresso-600">
                    4. At Table
                  </div>
                </div>
              </div>

              {/* Digital Tax Invoice Receipt Card */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-cream-300 shadow-sm font-sans space-y-4">
                <div className="flex items-start justify-between border-b pb-3">
                  <div>
                    <h5 className="font-serif text-lg font-bold text-espresso-900">
                      {cafeConfig.brand.name}
                    </h5>
                    <p className="text-xs text-gray-500">GSTIN: 29AABCU9603R1ZM</p>
                    <p className="text-xs text-gray-500">{cafeConfig.contact.displayAddress}</p>
                    <p className="text-xs text-terracotta-600 font-semibold mt-0.5">Contact: {cafeConfig.creator.email}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold font-mono text-terracotta-600">
                      {orderReceipt.orderId}
                    </span>
                    <p className="text-[11px] text-gray-500">{orderReceipt.date}</p>
                    <span className="inline-block mt-1 bg-cream-100 text-espresso-800 text-[10px] font-bold px-2 py-0.5 rounded">
                      {orderReceipt.table}
                    </span>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="bg-cream-50 p-2.5 rounded-xl border border-cream-200 text-xs text-gray-700 flex justify-between">
                  <span><strong>Customer:</strong> {orderReceipt.customerName}</span>
                  <span><strong>Phone:</strong> {orderReceipt.customerPhone}</span>
                </div>

                {/* Items Breakdown */}
                <div className="space-y-2 text-xs">
                  {orderReceipt.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-gray-700">
                      <span>
                        {item.qty}x {item.name}
                      </span>
                      <span className="font-mono">₹{item.lineTotal}</span>
                    </div>
                  ))}
                </div>

                {/* Financial Summary */}
                <div className="border-t pt-3 space-y-1.5 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-mono">₹{orderReceipt.subtotal}</span>
                  </div>
                  {orderReceipt.discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-semibold">
                      <span>Special Discount:</span>
                      <span className="font-mono">-₹{orderReceipt.discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>GST (5%):</span>
                    <span className="font-mono">₹{orderReceipt.gst}</span>
                  </div>
                  {orderReceipt.tip > 0 && (
                    <div className="flex justify-between">
                      <span>Barista Love & Tip:</span>
                      <span className="font-mono">₹{orderReceipt.tip}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-bold text-espresso-900 border-t pt-2">
                    <span>Grand Total Paid ({orderReceipt.method}):</span>
                    <span className="font-mono text-base">₹{orderReceipt.total}</span>
                  </div>
                </div>
              </div>

              {/* Receipt Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handlePrint}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-espresso-900 text-cream-50 font-semibold text-xs sm:text-sm hover:bg-espresso-800 transition-colors shadow-sm"
                >
                  <Printer className="w-4 h-4 text-terracotta-400" />
                  <span>Print / Save Tax Invoice</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full bg-cream-200 hover:bg-cream-300 text-espresso-800 font-medium text-xs transition-colors"
                >
                  Done & Close
                </button>
              </div>

            </div>
          ) : (
            /* VIEW B: CHECKOUT & PAYMENT SELECTION */
            <div className="space-y-6">
              
              {/* If no items, display friendly guidance */}
              {orderLines.length === 0 ? (
                <div className="text-center py-8 space-y-3">
                  <ShoppingBag className="w-10 h-10 text-espresso-400 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-espresso-900">Your bag is currently empty</h4>
                  <p className="text-xs text-espresso-600 max-w-xs mx-auto">
                    Add any items from our menu starting from ₹100 to test the instant checkout gateway.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-full bg-espresso-900 text-cream-50 text-xs font-bold"
                  >
                    Back to Menu
                  </button>
                </div>
              ) : (
                <>
                  {/* Order Items Summary */}
                  <div className="bg-cream-100/60 p-4 rounded-2xl border border-cream-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-espresso-800">
                        Order Items ({orderLines.length})
                      </span>
                      <span className="text-xs font-semibold text-terracotta-600">
                        Subtotal: ₹{itemsSubtotal}
                      </span>
                    </div>

                    <div className="max-h-28 overflow-y-auto space-y-1.5 text-xs text-espresso-700 divide-y divide-cream-200/60">
                      {orderLines.map((line) => (
                        <div key={line.id} className="pt-1.5 first:pt-0 flex justify-between">
                          <span className="truncate max-w-[200px]">
                            {line.qty}x {line.name}
                          </span>
                          <span className="font-mono">₹{line.lineTotal}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Customer Credentials */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1">
                        Customer Name:
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1">
                        Phone / SMS:
                      </label>
                      <input
                        type="text"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                      />
                    </div>
                  </div>

                  {/* Promo Code Box */}
                  <div className="bg-cream-100/50 p-3.5 rounded-2xl border border-cream-200 space-y-2">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-3.5 h-3.5 text-espresso-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Promo code (e.g. BLOOM10, SATHVIKA)"
                          value={promoCodeInput}
                          onChange={(e) => setPromoCodeInput(e.target.value)}
                          className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white border border-cream-300 text-xs uppercase font-bold text-espresso-900 placeholder:normal-case placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                        />
                      </div>
                      <button
                        onClick={handleApplyPromo}
                        className="px-4 py-1.5 rounded-xl bg-espresso-900 text-cream-50 text-xs font-semibold hover:bg-espresso-800 transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {promoMessage && (
                      <p className={`text-[11px] ${appliedDiscount > 0 ? 'text-emerald-700 font-bold' : 'text-terracotta-600'}`}>
                        {promoMessage}
                      </p>
                    )}
                  </div>

                  {/* Tip / Barista Love Jar */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-2 flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500" />
                      <span>Barista Support Tip:</span>
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[0, 20, 50, 100].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setTipAmount(amt)}
                          className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                            tipAmount === amt
                              ? 'bg-terracotta-500 text-white border-terracotta-500 shadow-sm'
                              : 'bg-cream-100 text-espresso-700 border-cream-300 hover:bg-cream-200'
                          }`}
                        >
                          {amt === 0 ? 'No Tip' : `+ ₹${amt}`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Payment Method Selector Tabs */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-2">
                      Choose Payment Method:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('upi')}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          paymentMethod === 'upi'
                            ? 'bg-espresso-900 text-cream-50 border-espresso-900 shadow-sm'
                            : 'bg-cream-100 text-espresso-800 border-cream-300 hover:bg-cream-200'
                        }`}
                      >
                        <QrCode className="w-4 h-4 mx-auto mb-1 text-terracotta-400" />
                        <span className="text-xs font-bold block">UPI Instant</span>
                        <span className="text-[10px] opacity-80">GPay, PhonePe</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          paymentMethod === 'card'
                            ? 'bg-espresso-900 text-cream-50 border-espresso-900 shadow-sm'
                            : 'bg-cream-100 text-espresso-800 border-cream-300 hover:bg-cream-200'
                        }`}
                      >
                        <CreditCard className="w-4 h-4 mx-auto mb-1 text-terracotta-400" />
                        <span className="text-xs font-bold block">Card</span>
                        <span className="text-[10px] opacity-80">Debit / Credit</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('counter')}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          paymentMethod === 'counter'
                            ? 'bg-espresso-900 text-cream-50 border-espresso-900 shadow-sm'
                            : 'bg-cream-100 text-espresso-800 border-cream-300 hover:bg-cream-200'
                        }`}
                      >
                        <ShoppingBag className="w-4 h-4 mx-auto mb-1 text-terracotta-400" />
                        <span className="text-xs font-bold block">Pay Counter</span>
                        <span className="text-[10px] opacity-80">Cash or POS</span>
                      </button>
                    </div>
                  </div>

                  {/* METHOD 1: UPI Form */}
                  {paymentMethod === 'upi' && (
                    <div className="bg-cream-100/70 p-4 rounded-2xl border border-cream-300 space-y-4 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-espresso-800">Fast UPI Apps:</span>
                        <div className="flex gap-1.5">
                          {['GPay', 'PhonePe', 'Paytm', 'BHIM'].map((app) => (
                            <button
                              key={app}
                              type="button"
                              onClick={() => setSelectedUpiApp(app)}
                              className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-colors ${
                                selectedUpiApp === app
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : 'bg-white text-espresso-700 border-cream-300'
                              }`}
                            >
                              {app}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3.5 rounded-xl border border-cream-200">
                        <div className="bg-white p-2 rounded-lg border border-cream-200 flex-shrink-0">
                          <QRCodeSVG
                            value={`upi://pay?pa=tambalisathvika@oksbi&pn=TambaliSathvika&am=${grandTotal}&cu=INR`}
                            size={84}
                            level="M"
                          />
                        </div>
                        <div className="space-y-1.5 text-center sm:text-left flex-1">
                          <p className="text-xs font-bold text-espresso-900">Scan to pay with any UPI App</p>
                          <p className="text-[11px] text-espresso-500">
                            Or verify your UPI ID:
                          </p>
                          <input
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            placeholder="yourname@okaxis"
                            className="w-full px-3 py-1.5 rounded-lg bg-cream-50 border border-cream-300 text-xs font-mono text-espresso-900"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* METHOD 2: Card Form */}
                  {paymentMethod === 'card' && (
                    <div className="bg-cream-100/70 p-4 rounded-2xl border border-cream-300 space-y-3 animate-fadeIn">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1">
                          Cardholder Name:
                        </label>
                        <input
                          type="text"
                          value={cardData.name}
                          onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white border border-cream-300 text-xs font-medium text-espresso-900"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1">
                          Card Number:
                        </label>
                        <input
                          type="text"
                          value={cardData.number}
                          onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                          placeholder="4532 0000 0000 0000"
                          className="w-full px-3 py-2 rounded-xl bg-white border border-cream-300 text-xs font-mono text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1">
                            Expiry (MM/YY):
                          </label>
                          <input
                            type="text"
                            value={cardData.expiry}
                            onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                            placeholder="MM/YY"
                            className="w-full px-3 py-2 rounded-xl bg-white border border-cream-300 text-xs font-mono text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1">
                            CVV:
                          </label>
                          <input
                            type="password"
                            maxLength={3}
                            value={cardData.cvv}
                            onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                            placeholder="•••"
                            className="w-full px-3 py-2 rounded-xl bg-white border border-cream-300 text-xs font-mono text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* METHOD 3: Pay at counter notice */}
                  {paymentMethod === 'counter' && (
                    <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-1 animate-fadeIn">
                      <p className="font-bold">Pay at Counter Token</p>
                      <p>
                        Placing this order sends your items immediately to the kitchen. You can settle the bill via cash or physical card machine at the counter when collecting your order.
                      </p>
                    </div>
                  )}

                  {/* Final Cost Calculation Recap */}
                  <div className="p-4 rounded-2xl bg-cream-100 border border-cream-200 space-y-1.5 text-xs text-espresso-700">
                    <div className="flex justify-between">
                      <span>Food & Beverage Subtotal:</span>
                      <span className="font-mono">₹{itemsSubtotal}</span>
                    </div>
                    {appliedDiscount > 0 && (
                      <div className="flex justify-between text-emerald-700 font-bold">
                        <span>Discount Applied:</span>
                        <span className="font-mono">-₹{appliedDiscount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Restaurant GST (5%):</span>
                      <span className="font-mono">₹{gstAmount}</span>
                    </div>
                    {tipAmount > 0 && (
                      <div className="flex justify-between">
                        <span>Barista Tip:</span>
                        <span className="font-mono">₹{tipAmount}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm sm:text-base font-bold text-espresso-900 border-t border-cream-300 pt-2 mt-1">
                      <span>Total Payable:</span>
                      <span className="font-mono text-xl text-espresso-900">₹{grandTotal}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={handlePayNow}
                      disabled={isProcessing}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-espresso-900 hover:bg-espresso-800 active:scale-95 text-cream-50 font-bold text-sm transition-all shadow-md"
                    >
                      {isProcessing ? (
                        <>
                          <Sparkles className="w-4 h-4 animate-spin text-terracotta-400" />
                          <span>Verifying with Payment Gateway...</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 text-terracotta-400" />
                          <span>Authorize & Pay ₹{grandTotal}</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-espresso-500 text-center flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Interactive payment simulator • Zero real bank deduction</span>
                    </p>
                  </div>
                </>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
