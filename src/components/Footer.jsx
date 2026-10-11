import React from 'react';
import { Coffee, ArrowUp, Heart, MapPin, Phone, Mail, Instagram, Facebook, Github, Linkedin, ExternalLink } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu (From ₹100)', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#visit' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-espresso-900 text-cream-100 border-t border-espresso-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-cream-50/10">
          
          {/* Col 1: Brand & Creator Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-cream-100 text-espresso-900 flex items-center justify-center shadow-sm">
                <Coffee className="w-5 h-5 text-terracotta-600" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-cream-50">
                {cafeConfig.brand.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-cream-300 leading-relaxed max-w-sm">
              {cafeConfig.brand.tagline} Single-origin roast bar, golden sourdough bakes starting from ₹100, and quiet neighborhood seating.
            </p>

            {/* Sathvika Creator Badge */}
            <div className="p-3.5 rounded-2xl bg-cream-50/5 border border-cream-50/10 space-y-1.5 max-w-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-terracotta-300 uppercase tracking-widest font-bold">
                  Designed & Developed By
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                  Active Portfolio
                </span>
              </div>
              <p className="font-serif text-sm font-bold text-cream-50">{cafeConfig.creator.name}</p>
              <div className="flex flex-wrap gap-2 text-xs text-cream-300 pt-1">
                <a href={`mailto:${cafeConfig.creator.email}`} className="hover:text-terracotta-300 underline">
                  {cafeConfig.creator.email}
                </a>
                <span>•</span>
                <a href={`tel:${cafeConfig.creator.phone}`} className="hover:text-terracotta-300 underline">
                  {cafeConfig.creator.phone}
                </a>
              </div>
            </div>

            <div className="pt-1 flex items-center gap-3">
              <a
                href={cafeConfig.creator.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream-50/10 hover:bg-terracotta-500 text-cream-100 hover:text-cream-50 flex items-center justify-center transition-all text-xs"
                title="Sathvika GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={cafeConfig.creator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream-50/10 hover:bg-terracotta-500 text-cream-100 hover:text-cream-50 flex items-center justify-center transition-all text-xs"
                title="Sathvika LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${cafeConfig.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream-50/10 hover:bg-emerald-600 text-cream-100 hover:text-cream-50 flex items-center justify-center transition-all text-xs"
                title="WhatsApp Sathvika"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-serif text-sm font-bold uppercase tracking-wider text-cream-50">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream-300 hover:text-terracotta-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Hours Summary */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-serif text-sm font-bold uppercase tracking-wider text-cream-50">
              Hospitality Hours
            </p>
            <div className="space-y-2 text-xs text-cream-300">
              <div>
                <p className="font-semibold text-cream-100">Monday – Friday</p>
                <p className="text-cream-400">7:30 AM – 9:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-cream-100">Saturday – Sunday</p>
                <p className="text-cream-400">8:00 AM – 10:00 PM</p>
              </div>
              <p className="text-[11px] text-terracotta-300 pt-1">
                Kitchen closes 30 mins before end of service.
              </p>
            </div>
          </div>

          {/* Col 4: Location & Credentials Contact */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-serif text-sm font-bold uppercase tracking-wider text-cream-50">
              Direct Contact
            </p>
            <div className="space-y-2 text-xs text-cream-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-terracotta-400 flex-shrink-0 mt-0.5" />
                <span>{cafeConfig.contact.displayAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                <a href={`tel:${cafeConfig.creator.phone}`} className="hover:text-terracotta-300">
                  {cafeConfig.creator.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                <a href={`mailto:${cafeConfig.creator.email}`} className="hover:text-terracotta-300 break-all">
                  {cafeConfig.creator.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p>© {new Date().getFullYear()} {cafeConfig.brand.name}. Created by <strong className="text-cream-100">{cafeConfig.creator.name}</strong>.</p>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">Gmail: {cafeConfig.creator.email}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-full bg-cream-50/10 hover:bg-terracotta-500 text-cream-200 hover:text-cream-50 transition-all text-xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
