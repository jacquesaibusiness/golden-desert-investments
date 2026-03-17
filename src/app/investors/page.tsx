'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import AnimatedCounter from '@/components/AnimatedCounter';

const whyDubai = [
  { title: 'Tax-Free Returns', description: 'Zero income tax, zero capital gains tax — maximizing net investor returns.' },
  { title: 'Population Growth', description: 'Dubai targets 5.8M residents by 2040, driving sustained real estate demand.' },
  { title: 'Global Hub', description: 'World-class infrastructure, connectivity, and business-friendly regulations.' },
  { title: 'Freehold Ownership', description: 'Full foreign ownership rights in designated freehold areas across the city.' },
];

const approach = [
  { title: 'Acquire', description: 'Identify undervalued land and properties in high-growth corridors.', step: '01' },
  { title: 'Develop', description: 'Build or renovate through Desert Build with cost control and quality assurance.', step: '02' },
  { title: 'Market', description: 'Sell through Haysal Real Estate with access to local and international buyers.', step: '03' },
  { title: 'Return', description: 'Distribute returns to investors with full transparency and reporting.', step: '04' },
];

export default function InvestorsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', investment: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our team will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', investment: '', message: '' });
  };

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80" alt="Investors" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold font-semibold text-sm uppercase tracking-[0.3em] mb-4 block">Investor Relations</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Grow With Us</h1>
          </motion.div>
        </div>
      </section>

      {/* Key Figures */}
      <section className="bg-navy py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={500} prefix="AED " suffix="M+" label="Total Portfolio" />
            <AnimatedCounter end={40} suffix="%" label="Avg. ROI" />
            <AnimatedCounter end={50} suffix="+" label="Projects" />
            <AnimatedCounter end={100} suffix="%" label="On-Time Delivery" />
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Our Approach" title="How We Invest" description="A vertically integrated model that maximizes returns at every stage" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-white rounded-2xl p-8 shadow-sm"
              >
                <span className="text-gold/20 text-6xl font-bold absolute top-4 right-6">{item.step}</span>
                <div className="relative">
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dubai */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="The Market" title="Why Dubai?" description="A global destination for real estate investment" light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyDubai.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership & Form */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading subtitle="Partnership" title="Investment Opportunities" center={false} />
              <p className="text-warm-gray leading-relaxed mb-6">
                We offer structured partnership opportunities for qualified investors looking to participate in Dubai&apos;s real estate growth. Our minimum investment starts at AED 1M with flexible structures.
              </p>
              <div className="space-y-4 mb-8">
                {['Joint venture development projects', 'Co-investment in land banking', 'Profit-sharing construction deals', 'Tokenized real estate participation'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                    </div>
                    <span className="text-navy text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-navy font-bold mb-2">Minimum Investment</h4>
                <p className="text-gold text-2xl font-bold">AED 1,000,000</p>
                <p className="text-warm-gray text-sm mt-1">Subject to opportunity and structure</p>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-6">Investment Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                  <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                  <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                  <select value={formData.investment} onChange={(e) => setFormData({ ...formData, investment: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-warm-gray">
                    <option value="">Investment Range</option>
                    <option value="1-5m">AED 1M - 5M</option>
                    <option value="5-10m">AED 5M - 10M</option>
                    <option value="10-25m">AED 10M - 25M</option>
                    <option value="25m+">AED 25M+</option>
                  </select>
                  <textarea placeholder="Tell us about your investment goals..." rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
                  <button type="submit" className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold/30">
                    Submit Inquiry
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
