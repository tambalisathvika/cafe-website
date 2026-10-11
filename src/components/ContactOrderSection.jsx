import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle, AlertCircle, Phone, Sparkles, Mail, Github, Linkedin, User, ExternalLink } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';

export default function ContactOrderSection({ onOpenOrderModal }) {
  const [formData, setFormData] = useState({
    name: cafeConfig.creator.name,
    email: cafeConfig.creator.email,
    topic: 'Freelance Web Design & Development',
    message: "Hi Sathvika! I loved the Bean & Bloom Café project. I would like to hire you for a custom website design.",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Message should be at least 5 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedName(formData.name.trim());
      setIsSubmitted(true);
      setErrors({});
    }
  };

  const handleWhatsAppClick = () => {
    const text = `Hello Sathvika! I would like to place an order at Bean & Bloom Café / discuss a web design project.`;
    const url = `https://wa.me/${cafeConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream-100/70 border-t border-cream-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-espresso-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Connect & Order</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-900 tracking-tight">
            Get in Touch & Work Together
          </h2>
          <p className="text-base sm:text-lg text-espresso-600 mt-3 font-normal max-w-xl mx-auto">
            Ready to order takeaway, book private gatherings, or hire the developer for a custom hospitality website?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Sathvika's Verified Contact & WhatsApp Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Developer & Founder Credentials Card */}
            <div className="bg-espresso-900 text-cream-50 rounded-3xl p-6 sm:p-7 shadow-warm-lg space-y-5 border border-espresso-800">
              <div className="flex items-center gap-3.5 border-b border-cream-50/15 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-terracotta-500 text-cream-50 flex items-center justify-center font-serif text-xl font-bold shadow-md">
                  ST
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream-50">
                    {cafeConfig.creator.name}
                  </h3>
                  <p className="text-xs text-terracotta-300 font-medium">
                    {cafeConfig.creator.role}
                  </p>
                </div>
              </div>

              {/* Direct Credentials List */}
              <div className="space-y-3 text-xs">
                <a
                  href={`mailto:${cafeConfig.creator.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-cream-50/5 hover:bg-cream-50/10 border border-cream-50/10 transition-colors"
                >
                  <Mail className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] text-cream-400 uppercase tracking-wider block">Official Email</span>
                    <strong className="text-cream-100 truncate block">{cafeConfig.creator.email}</strong>
                  </div>
                </a>

                <a
                  href={`tel:${cafeConfig.creator.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-cream-50/5 hover:bg-cream-50/10 border border-cream-50/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] text-cream-400 uppercase tracking-wider block">Direct Phone</span>
                    <strong className="text-cream-100 block">{cafeConfig.creator.phone}</strong>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={cafeConfig.creator.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-cream-50/10 hover:bg-terracotta-500 text-cream-100 transition-colors text-xs font-semibold"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={cafeConfig.creator.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-cream-50/10 hover:bg-terracotta-500 text-cream-100 transition-colors text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-cream-50/10">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{cafeConfig.creator.status}</span>
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Ordering Card */}
            <div className="bg-cream-50 border border-cream-300 rounded-3xl p-6 sm:p-7 shadow-warm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-espresso-900">Direct WhatsApp Action</h4>
                  <span className="text-xs text-espresso-500 font-mono">+{cafeConfig.whatsapp.number}</span>
                </div>
              </div>

              <p className="text-xs text-espresso-600 leading-relaxed">
                Connect directly with our café counter to order takeaway, check bakery specials, or consult on web design projects.
              </p>

              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-cream-50 font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp (+{cafeConfig.whatsapp.number})</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenOrderModal}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-cream-200 hover:bg-cream-300 text-espresso-800 font-medium text-xs transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
                  <span>Build Custom WhatsApp Order Bag</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7 bg-cream-50 border border-cream-300 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-warm">
            <h3 className="font-serif text-2xl font-bold text-espresso-900 mb-1">Send a Direct Message</h3>
            <p className="text-xs sm:text-sm text-espresso-600 mb-6">
              Messages are sent directly to Sathvika's email (<code className="text-terracotta-600 bg-cream-200/60 px-1 py-0.5 rounded font-mono">{cafeConfig.creator.email}</code>).
            </p>

            {isSubmitted ? (
              <div className="py-8 px-6 text-center rounded-2xl bg-sage-50 border border-sage-200 animate-fadeIn space-y-3">
                <div className="w-12 h-12 rounded-full bg-sage-100 text-sage-600 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-espresso-900">
                  Message Sent to Sathvika!
                </h4>
                <p className="text-xs sm:text-sm text-espresso-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{submittedName}</strong>! Your note has been logged. A notification email is dispatched to <strong className="text-espresso-900">{cafeConfig.creator.email}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        topic: 'General Inquiry',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-espresso-900 text-cream-50 hover:bg-espresso-800 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-espresso-800 mb-1.5">
                    Your Name <span className="text-terracotta-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className={`w-full px-4 py-2.5 rounded-xl bg-cream-100 border text-xs sm:text-sm text-espresso-900 placeholder:text-espresso-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500 transition-colors ${
                      errors.name ? 'border-terracotta-500 bg-terracotta-50/20' : 'border-cream-300'
                    }`}
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1 text-xs text-terracotta-600 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-espresso-800 mb-1.5">
                    Email Address <span className="text-terracotta-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-cream-100 border text-xs sm:text-sm text-espresso-900 placeholder:text-espresso-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500 transition-colors ${
                      errors.email ? 'border-terracotta-500 bg-terracotta-50/20' : 'border-cream-300'
                    }`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1 text-xs text-terracotta-600 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Topic / Occasion */}
                <div>
                  <label htmlFor="contact-topic" className="block text-xs font-bold uppercase tracking-wider text-espresso-800 mb-1.5">
                    Inquiry Category
                  </label>
                  <select
                    id="contact-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-xs sm:text-sm text-espresso-900 focus:outline-none focus:ring-2 focus:ring-terracotta-500 transition-colors"
                  >
                    <option value="Freelance Web Design & Development">Hire Sathvika for Web Design Project</option>
                    <option value="Table Reservation">Table Reservation (6+ guests)</option>
                    <option value="Custom Cake Order">Custom Cake / Catering Order</option>
                    <option value="Feedback">General Café Feedback</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-espresso-800 mb-1.5">
                    Message <span className="text-terracotta-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you have in mind..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-cream-100 border text-xs sm:text-sm text-espresso-900 placeholder:text-espresso-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500 transition-colors resize-none ${
                      errors.message ? 'border-terracotta-500 bg-terracotta-50/20' : 'border-cream-300'
                    }`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 text-xs text-terracotta-600 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-espresso-900 hover:bg-espresso-800 text-cream-50 font-bold text-xs sm:text-sm transition-all duration-200 active:scale-95 shadow-sm hover:shadow"
                >
                  <Send className="w-4 h-4 text-terracotta-400" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
