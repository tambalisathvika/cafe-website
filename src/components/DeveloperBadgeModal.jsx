import React from 'react';
import { X, Sparkles, Mail, Phone, Github, Linkedin, ExternalLink, Code2, Award, CheckCircle2, MessageSquare } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';

export default function DeveloperBadgeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Meet the Developer: Tambali Sathvika"
    >
      <div
        className="bg-cream-50 border border-cream-300 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with warm editorial backdrop */}
        <div className="bg-espresso-900 text-cream-50 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-terracotta-500/20 rounded-full blur-3xl pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-cream-300 hover:text-white hover:bg-cream-50/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-terracotta-500 text-cream-50 flex items-center justify-center font-serif text-2xl font-bold shadow-lg ring-4 ring-white/10">
              ST
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cream-50/10 text-terracotta-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Lead Designer & Developer</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream-50">
                {cafeConfig.creator.name}
              </h3>
              <p className="text-xs text-cream-300 mt-0.5">
                Full-Stack Web Architect • Open for Client Projects
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-espresso-800">
          
          {/* Pitch Narrative */}
          <div className="bg-cream-100/70 p-4 rounded-2xl border border-cream-200 space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-terracotta-600">
              Why This Project Stands Out
            </h4>
            <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed font-normal">
              Designed and built from scratch by <strong>{cafeConfig.creator.name}</strong> to demonstrate how modern cafes can increase average order value and eliminate table bottlenecks with thoughtful digital craft.
            </p>
          </div>

          {/* Technical Highlights Grid */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-espresso-900">
              Architectural Highlights
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-white border border-cream-200 shadow-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-espresso-900 font-serif">Contactless QR</strong>
                  <span className="text-[11px] text-espresso-600">Dynamic table stand generator & camera simulator</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-cream-200 shadow-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-espresso-900 font-serif">Full Checkout</strong>
                  <span className="text-[11px] text-espresso-600">UPI, Card, Cash & printable tax invoice tokens</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-cream-200 shadow-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-espresso-900 font-serif">Pocket-Friendly</strong>
                  <span className="text-[11px] text-espresso-600">20+ items starting from ₹100 with budget filter</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-cream-200 shadow-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-espresso-900 font-serif">Table Reservations</strong>
                  <span className="text-[11px] text-espresso-600">Seating zone selection & digital passes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Credentials Card */}
          <div className="p-4 rounded-2xl bg-espresso-900 text-cream-100 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-terracotta-400 font-bold block">
              Direct Contact & Social Profiles
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <a
                href={`mailto:${cafeConfig.creator.email}`}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2 truncate"
              >
                <Mail className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                <span className="truncate">{cafeConfig.creator.email}</span>
              </a>

              <a
                href={`tel:${cafeConfig.creator.phone}`}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                <span>{cafeConfig.creator.phone}</span>
              </a>

              <a
                href={cafeConfig.creator.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={cafeConfig.creator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer CTAs */}
        <div className="p-4 sm:p-5 border-t border-cream-200 bg-cream-100/70 flex flex-col sm:flex-row gap-2.5">
          <a
            href={`https://wa.me/${cafeConfig.whatsapp.number}?text=${encodeURIComponent(
              "Hi Sathvika! I checked your Bean & Bloom Café website and I would love to discuss a project with you."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-cream-50 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Hire Sathvika on WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-full bg-cream-200 hover:bg-cream-300 text-espresso-800 font-semibold text-xs transition-colors"
          >
            Back to Website
          </button>
        </div>

      </div>
    </div>
  );
}
