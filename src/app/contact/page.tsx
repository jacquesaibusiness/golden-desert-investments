'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const interestOptions = [
  'Investment allocation — general',
  'Real estate',
  'Construction / build-to-sell',
  'Private business',
  'SPV structuring',
  'Co-investment',
  'Media / press',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. We will respond within two business days.');
    setFormData({ name: '', email: '', phone: '', organisation: '', interest: '', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            alt="Contact"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Investor Enquiry</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white">Start a conversation.</h1>
            <p className="text-white/80 text-lg mt-6 max-w-3xl leading-relaxed">
              We respond to qualified enquiries within two business days. Share a few details and we&apos;ll set up a call.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Direct Contact</span>
              <h2 className="font-serif text-2xl font-medium text-navy mb-8">Get in touch.</h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-navy font-semibold text-sm mb-1">Office</h4>
                  <p className="text-grey text-sm">Dubai, United Arab Emirates</p>
                </div>
                <div>
                  <h4 className="text-navy font-semibold text-sm mb-1">Email</h4>
                  <p className="text-grey text-sm">info@goldendesert.ae</p>
                </div>
                <div>
                  <h4 className="text-navy font-semibold text-sm mb-1">Response time</h4>
                  <p className="text-grey text-sm">Within two business days</p>
                </div>
              </div>

              {/* Notice Block */}
              <div className="bg-cream-warm border border-gold/20 p-6">
                <p className="text-sm text-charcoal leading-relaxed">
                  Golden Desert works with qualified investors and introduced contacts only. Investment opportunities are not offered on this website. All enquiries are treated confidentially and subject to our AML / KYC onboarding process.
                </p>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white border border-navy/8 p-8">
                <h3 className="font-serif text-xl font-medium text-navy mb-6">Send an enquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-navy/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Email *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-navy/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-navy/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="organisation" className="block text-sm font-medium text-navy mb-1">Organisation</label>
                      <input
                        id="organisation"
                        type="text"
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        className="w-full border border-navy/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-navy mb-1">Area of Interest *</label>
                    <select
                      id="interest"
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full border border-navy/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream/50 text-charcoal"
                    >
                      <option value="">Select an area of interest</option>
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">Message *</label>
                    <textarea
                      id="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-navy/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none bg-cream/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-gold hover:bg-gold-light text-navy font-medium px-8 py-3 text-sm uppercase tracking-[0.05em] transition-all duration-200"
                  >
                    Submit Enquiry
                  </button>

                  <p className="text-xs text-grey mt-4">
                    By submitting this form, you acknowledge that Golden Desert may contact you to discuss your enquiry. We do not share your information with third parties.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
