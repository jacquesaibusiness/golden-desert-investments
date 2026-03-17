'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import AnimatedCounter from '@/components/AnimatedCounter';

const subsidiaries = [
  {
    title: 'Desert Build',
    category: 'Construction',
    description: 'Full-service construction company delivering residential and commercial projects across Dubai. From G+4 developments to luxury villas.',
    icon: '🏗️',
    href: '/subsidiaries',
  },
  {
    title: 'Haysal Real Estate',
    category: 'Brokerage',
    description: 'Premium real estate brokerage specializing in off-plan sales, property investments, and renovation projects in Dubai.',
    icon: '🏢',
    href: '/subsidiaries',
  },
  {
    title: 'Future Ventures',
    category: 'Innovation',
    description: 'Exploring tokenized real estate, PropTech innovations, and next-generation investment vehicles for the modern investor.',
    icon: '🚀',
    href: '/subsidiaries',
  },
];

const projects = [
  {
    title: 'Jebel Ali Hills G+4',
    type: 'Residential Development',
    value: 'AED 40-50M',
    status: 'In Development',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    title: 'Business Bay Commercial',
    type: 'Commercial Investment',
    value: 'AED 25M',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
  {
    title: 'Dubai Marina Renovation',
    type: 'Renovation & Flip',
    value: 'AED 8M',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            alt="Dubai Skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/65 to-navy/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="text-gold font-semibold text-sm uppercase tracking-[0.3em] mb-4 block">
              Golden Desert Investments
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
              Strategic Investment.
              <span className="text-gold block">Lasting Legacy.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              A Dubai-based investment holding company building enduring value through real estate development, construction, and strategic acquisitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded text-center transition-all duration-200 hover:shadow-lg hover:shadow-gold/30"
              >
                Explore Our Portfolio
              </Link>
              <Link
                href="/investors"
                className="border border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded text-center transition-all duration-200"
              >
                Investor Relations
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={500} prefix="AED " suffix="M+" label="Portfolio Value" />
            <AnimatedCounter end={3} label="Subsidiaries" />
            <AnimatedCounter end={50} suffix="+" label="Projects" />
            <AnimatedCounter end={15} suffix="+" label="Years Combined Experience" />
          </div>
        </div>
      </section>

      {/* Subsidiaries */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Companies"
            title="A Group Built on Excellence"
            description="Three distinct companies, one unified vision — creating lasting value in Dubai's dynamic market"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subsidiaries.map((sub, i) => (
              <motion.div
                key={sub.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Link href={sub.href} className="group block bg-white hover:bg-navy rounded-2xl p-8 transition-all duration-300 h-full shadow-sm hover:shadow-xl">
                  <span className="text-4xl mb-4 block">{sub.icon}</span>
                  <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2 block">{sub.category}</span>
                  <h3 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors">{sub.title}</h3>
                  <p className="text-warm-gray group-hover:text-white/70 transition-colors text-sm leading-relaxed">{sub.description}</p>
                  <span className="inline-flex items-center gap-2 text-gold font-semibold mt-6 text-sm group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Disciplined Capital. Tangible Assets.</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We invest where we see enduring value — in land, in buildings, in communities. Our strategy combines institutional discipline with entrepreneurial agility, focusing on Dubai&apos;s most promising sectors.
              </p>
              <div className="space-y-4">
                {['Land Banking & Strategic Acquisition', 'Build-to-Sell Development', 'Renovation & Value-Add', 'Tokenization & Innovation'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80"
                alt="Dubai Investment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Featured Projects"
            title="Active Investments"
            description="A selection of our current portfolio highlights"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' ? 'bg-green-500/90 text-white' :
                      project.status === 'Active' ? 'bg-gold/90 text-navy' :
                      'bg-navy/90 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider">{project.type}</span>
                  <h3 className="text-lg font-bold text-navy mt-1 mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-warm-gray text-sm">Estimated Value</span>
                    <span className="text-navy font-bold">{project.value}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 rounded transition-all duration-200 hover:shadow-lg"
            >
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=40"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Lasting?</h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              We&apos;re always looking for strategic partners who share our vision for Dubai&apos;s future. Let&apos;s explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/investors"
                className="bg-gold hover:bg-gold-light text-navy font-bold px-10 py-4 rounded transition-all duration-200 hover:shadow-lg hover:shadow-gold/30"
              >
                Investment Inquiries
              </Link>
              <Link
                href="/contact"
                className="border border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-10 py-4 rounded transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
