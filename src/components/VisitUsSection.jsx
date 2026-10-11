import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, Wifi, Heart, Coffee, ShieldCheck, UserCheck } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';

export default function VisitUsSection() {
  return (
    <section id="visit" className="py-20 sm:py-28 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-espresso-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Find Your Way</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900 tracking-tight">
            Visit Our Neighborhood Café
          </h2>
          <p className="text-base sm:text-lg text-espresso-600 mt-3 font-normal max-w-xl mx-auto">
            Nestled beneath leafy rain trees in Indiranagar. Drop by for a quiet morning espresso, an afternoon read, or evening conversation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Hours of Hospitality */}
          <div className="lg:col-span-5 bg-cream-100/70 border border-cream-300 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-warm">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-espresso-900 text-cream-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-terracotta-400" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-espresso-900">Opening Hours</h3>
                  <p className="text-xs text-espresso-600">Freshly brewing all week</p>
                </div>
              </div>

              <div className="space-y-4">
                {cafeConfig.hours.map((slot, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-cream-50 border border-cream-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wider text-terracotta-600 font-bold">
                        {slot.label}
                      </p>
                      <p className="text-sm font-semibold text-espresso-900 mt-0.5">{slot.days}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-serif text-base font-bold text-espresso-900">{slot.time}</p>
                      <p className="text-[11px] text-sage-700 font-medium">{slot.status}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-cream-200/50 rounded-xl text-xs text-espresso-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage-500 flex-shrink-0" />
                <span>Bakery counter opens at 7:30 AM. Last kitchen orders taken 30 minutes before closing.</span>
              </div>
            </div>

            {/* Quick Amenities */}
            <div className="pt-8 mt-6 border-t border-cream-300/80">
              <h4 className="text-xs uppercase tracking-wider font-bold text-espresso-700 mb-3">
                Café Highlights & Amenities
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs text-espresso-800">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-terracotta-500" />
                  <span>High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-terracotta-500" />
                  <span>Pet-Friendly Patio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-terracotta-500" />
                  <span>Specialty Brew Bar</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-terracotta-500" />
                  <span>Accessible Seating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Location & Contact */}
          <div className="lg:col-span-7 bg-espresso-900 text-cream-50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-warm-lg relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-terracotta-500 text-cream-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50">Location & Getting Here</h3>
                    <p className="text-xs text-cream-300">Bengaluru flagship sanctuary</p>
                  </div>
                </div>

                <span className="text-[10px] tracking-widest uppercase bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 font-bold">
                  Verified Contact
                </span>
              </div>

              {/* Founder & Developer Banner */}
              <div className="bg-cream-50/10 border border-cream-50/20 rounded-2xl p-4 mb-6 flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-terracotta-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-terracotta-300 font-semibold uppercase tracking-wider">
                    Managed by {cafeConfig.creator.name}
                  </p>
                  <p className="text-xs text-cream-200 mt-0.5 leading-relaxed">
                    Flagship café operations and freelance web design inquiries led by <strong>{cafeConfig.creator.name}</strong>. Reach out directly for table reservations, events, or website design projects.
                  </p>
                </div>
              </div>

              {/* Contact Item Rows with Sathvika's Credentials */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-cream-50/5 border border-cream-50/10">
                  <MapPin className="w-5 h-5 text-terracotta-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-cream-300 font-medium">Physical Address</p>
                    <p className="text-sm font-semibold text-cream-50 mt-0.5">
                      {cafeConfig.contact.displayAddress}
                    </p>
                    <p className="text-xs text-cream-300 mt-0.5">
                      Landmark: {cafeConfig.contact.landmark}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-cream-50/5 border border-cream-50/10">
                    <Phone className="w-5 h-5 text-terracotta-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-cream-300 font-medium">Direct Phone & WhatsApp</p>
                      <a href={`tel:${cafeConfig.creator.phone}`} className="text-sm font-semibold text-cream-50 mt-0.5 block hover:text-terracotta-300">
                        {cafeConfig.creator.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-cream-50/5 border border-cream-50/10">
                    <Mail className="w-5 h-5 text-terracotta-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-cream-300 font-medium">Direct Gmail</p>
                      <a href={`mailto:${cafeConfig.creator.email}`} className="text-sm font-semibold text-cream-50 mt-0.5 block hover:text-terracotta-300 break-all">
                        {cafeConfig.creator.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <div className="relative z-10 pt-8 mt-6 border-t border-cream-50/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-cream-300 text-center sm:text-left">
                Click below to open live Google Maps directions to the café.
              </p>

              <a
                href={cafeConfig.contact.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-md flex-shrink-0"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Maps</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
