'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const values = [
  { title: 'Integrity', description: 'Transparent dealings and honest partnerships form the foundation of every investment decision.', icon: '🛡️' },
  { title: 'Excellence', description: 'We pursue the highest standards in construction, management, and investor relations.', icon: '⭐' },
  { title: 'Innovation', description: 'Embracing technology and new models like tokenization to stay ahead of the market.', icon: '💡' },
  { title: 'Legacy', description: 'Building assets and communities that endure for generations, not just quarterly returns.', icon: '🏛️' },
];

const timeline = [
  { year: '2010', title: 'Foundation', description: 'Core team begins operations in Dubai real estate market.' },
  { year: '2015', title: 'Desert Build Established', description: 'Construction subsidiary launched to control build quality and margins.' },
  { year: '2019', title: 'Haysal Real Estate', description: 'Brokerage arm established to capture off-plan and secondary market opportunities.' },
  { year: '2022', title: 'Golden Desert Investments', description: 'Holding company formalized to unify operations under one strategic umbrella.' },
  { year: '2024', title: 'Jebel Ali Hills', description: 'Flagship G+4 development project launched — AED 40-50M investment.' },
  { year: '2025', title: 'Expansion', description: 'Exploring tokenization, new land acquisitions, and regional expansion.' },
];

const leaders = [
  { name: 'Chairman', role: 'Chairman & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'CEO', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { name: 'CFO', role: 'Chief Financial Officer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80"
            alt="Dubai"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold font-semibold text-sm uppercase tracking-[0.3em] mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Building Dubai&apos;s Future</h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeading subtitle="Our Story" title="From Vision to Reality" center={false} />
              <p className="text-warm-gray leading-relaxed mb-6">
                Golden Desert Investments was born from a simple conviction: Dubai&apos;s real estate market rewards those who combine local expertise with institutional discipline. Our founders, with over 15 years of combined experience, built a holding company that doesn&apos;t just invest in properties — it creates ecosystems of value.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Through our subsidiaries — Desert Build and Haysal Real Estate — we control the entire value chain from land acquisition to construction to sales. This vertical integration allows us to deliver superior returns while maintaining the highest quality standards.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Our Story" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10"
            >
              <span className="text-gold text-3xl mb-4 block">🔭</span>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/60 leading-relaxed">
                To be Dubai&apos;s most trusted investment holding group — known for disciplined capital allocation, exceptional build quality, and creating lasting value for our partners and communities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10"
            >
              <span className="text-gold text-3xl mb-4 block">🎯</span>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/60 leading-relaxed">
                To build, acquire, and manage a diversified real estate portfolio that delivers superior risk-adjusted returns while contributing to Dubai&apos;s urban development and economic growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Leadership" title="Our Team" description="Experienced professionals driving strategic growth" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gold/20">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-navy">{leader.name}</h3>
                <p className="text-gold text-sm font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Milestones" title="Our Journey" />
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                  <span className="text-gold font-bold text-lg">{item.year}</span>
                  <h4 className="text-navy font-bold text-lg">{item.title}</h4>
                  <p className="text-warm-gray text-sm">{item.description}</p>
                </div>
                <div className="relative z-10 w-4 h-4 bg-gold rounded-full border-4 border-cream shrink-0 mt-1 ml-6 md:ml-0" />
                <div className="flex-1 md:hidden ml-4">
                  <span className="text-gold font-bold text-lg">{item.year}</span>
                  <h4 className="text-navy font-bold text-lg">{item.title}</h4>
                  <p className="text-warm-gray text-sm">{item.description}</p>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Our Values" title="What We Stand For" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm text-center"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-lg font-bold text-navy mb-2">{value.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
