import React, { useState } from 'react';
import { Calendar, Clock, Users, X, CheckCircle, Sparkles, MapPin, Heart, Mail, Phone } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';
import { sounds } from '../utils/audio';

export default function TableReservationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState('form'); // 'form' | 'confirmed'
  const [partySize, setPartySize] = useState('2 Guests');
  const [date, setDate] = useState('Today, Evening');
  const [timeSlot, setTimeSlot] = useState('5:30 PM (Sunset Coffee)');
  const [seatingZone, setSeatingZone] = useState('Sunlit Garden Patio');
  const [name, setName] = useState(cafeConfig.creator.name);
  const [phone, setPhone] = useState(cafeConfig.creator.phone);
  const [email, setEmail] = useState(cafeConfig.creator.email);
  const [occasion, setOccasion] = useState('Casual Catchup / Coffee');
  const [specialNote, setSpecialNote] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');

  const timeSlots = [
    '8:30 AM (Morning Brew & Bakes)',
    '11:00 AM (Brunch & Slow Read)',
    '3:30 PM (Afternoon Tea & Work)',
    '5:30 PM (Sunset Coffee)',
    '7:30 PM (Evening Desserts)',
  ];

  const handleBook = (e) => {
    e.preventDefault();
    const code = `BNB-RES-${Math.floor(100 + Math.random() * 900)}`;
    setConfirmationCode(code);
    setStep('confirmed');
    sounds.playSuccess();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Table Reservation"
    >
      <div
        className="bg-cream-50 border border-cream-300 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-cream-200 flex items-center justify-between bg-cream-100/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-espresso-900 text-cream-100 flex items-center justify-center shadow-sm">
              <Calendar className="w-4 h-4 text-terracotta-400" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-espresso-900">
                Reserve Your Café Table
              </h3>
              <p className="text-xs text-espresso-500">Zero booking fee • Instant confirmed pass</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-espresso-600 hover:text-espresso-900 hover:bg-cream-200 transition-colors"
            aria-label="Close reservation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {step === 'confirmed' ? (
            <div className="text-center py-4 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-terracotta-600">
                  Pass Confirmed
                </span>
                <h4 className="font-serif text-2xl font-bold text-espresso-900 mt-1">
                  Table Reserved for {name}!
                </h4>
              </div>

              {/* Digital Pass Card */}
              <div className="bg-white p-5 rounded-2xl border-2 border-dashed border-cream-300 shadow-sm text-left space-y-3 font-sans">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-serif font-bold text-espresso-900">{cafeConfig.brand.name}</span>
                  <span className="font-mono text-xs font-bold text-terracotta-600">{confirmationCode}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-500 block">Date & Time:</span>
                    <strong className="text-espresso-900">{date} • {timeSlot.split(' ')[0]}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Party Size:</span>
                    <strong className="text-espresso-900">{partySize}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Zone:</span>
                    <strong className="text-espresso-900">{seatingZone}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Guest Contact:</span>
                    <strong className="text-espresso-900">{phone}</strong>
                  </div>
                </div>

                <div className="pt-2 border-t text-[11px] text-gray-500">
                  📍 {cafeConfig.contact.displayAddress} (Table reserved for 15 mins)
                </div>
              </div>

              <p className="text-xs text-espresso-600">
                Confirmation logged for <strong>{email}</strong>.
              </p>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-full bg-espresso-900 text-cream-50 text-xs sm:text-sm font-semibold hover:bg-espresso-800 transition-colors shadow-sm"
              >
                Done & Return to Menu
              </button>
            </div>
          ) : (
            <form onSubmit={handleBook} className="space-y-4">
              {/* Party Size */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-terracotta-500" />
                  <span>Number of Guests:</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['1 Guest', '2 Guests', '4 Guests', '6+ Group'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPartySize(p)}
                      className={`py-2 rounded-xl text-xs font-semibold border transition-colors ${
                        partySize === p
                          ? 'bg-espresso-900 text-cream-50 border-espresso-900'
                          : 'bg-cream-100 text-espresso-800 border-cream-300 hover:bg-cream-200'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-terracotta-500" />
                  <span>Select Time Window:</span>
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                >
                  {timeSlots.map((ts) => (
                    <option key={ts} value={ts}>
                      {ts}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Seating Zone */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                  <span>Seating Atmosphere:</span>
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {cafeConfig.seatingZones.map((zone) => (
                    <button
                      key={zone.id}
                      type="button"
                      onClick={() => setSeatingZone(zone.name)}
                      className={`p-2.5 rounded-xl border text-left transition-colors ${
                        seatingZone === zone.name
                          ? 'bg-sage-600 text-white border-sage-600'
                          : 'bg-cream-100 text-espresso-800 border-cream-300 hover:bg-cream-200'
                      }`}
                    >
                      <strong className="block text-xs">{zone.name}</strong>
                      <span className="text-[10px] opacity-80 block truncate">{zone.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1">
                    Phone:
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1">
                  Email for Confirmation:
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                />
              </div>

              {/* Special Note */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-espresso-800 mb-1">
                  Special Request (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Quiet desk for remote work, pet accompanying"
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-cream-300 text-xs text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-espresso-900 hover:bg-espresso-800 text-cream-50 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-terracotta-400" />
                <span>Confirm Reservation for {name}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
