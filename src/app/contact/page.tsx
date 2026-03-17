'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const contactInfo = [
  { icon: '📍', title: 'Office Address', value: 'Business Bay, Dubai, UAE', detail: 'Golden Desert Investments HQ' },
  { icon: '📞', title: 'Phone', value: '+971 XX XXX XXXX', detail: 'Sun–Thu, 9AM–6PM GST' },
  { icon: '✉️', title: 'Email', value: 'info@goldendesertinvestments.ae', detail: 'General inquiries' },
  { icon: '💼', title: 'Investor Relations', value: 'investors@goldendesertinvestments.ae', detail: 'Investment opportunities' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80" alt="Contact" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold font-semibold text-sm uppercase tracking-[0.3em] mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Contact Us</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <SectionHeading subtitle="Reach Us" title="Let&apos;s Talk" center={false} />
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <h4 className="text-navy font-semibold text-sm">{info.title}</h4>
                      <p className="text-navy font-medium">{info.value}</p>
                      <p className="text-warm-gray text-xs mt-0.5">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden h-[200px] bg-navy/5 flex items-center justify-center border border-gold/10">
                <div className="text-center text-warm-gray">
                  <span className="text-3xl block mb-2">🗺️</span>
                  <p className="text-sm">Business Bay, Dubai</p>
                  <p className="text-xs">Interactive map coming soon</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                    <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-warm-gray">
                      <option value="">Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                      <option value="media">Media & Press</option>
                    </select>
                  </div>
                  <textarea placeholder="Your message..." rows={6} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
                  <button type="submit" className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold/30">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
