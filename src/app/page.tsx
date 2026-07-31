'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Hero Background Image */}
          <Image
            src="/hero-desert-villas.jpg"
            alt="Aerial view of a Golden Desert residential villa community at golden hour"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="mb-8">
              <Image src="/gd-logo-dark.png" alt="Golden Desert Investment Consultant" width={160} height={160} className="object-contain" />
            </div>
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-6 block">
              Dubai · Est. 2024
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 leading-[1.05] -tracking-[0.01em]">
              Regional expertise.
              <span className="text-gold italic font-normal block">Global</span> standards.
            </h1>
            <p className="text-white/82 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Golden Desert Investment Consultant is an independent advisory firm deploying institutional capital across the UAE and wider MENA region. We structure, underwrite, and steward investments with the discipline of a family office and the agility of a founder-led team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-light text-navy font-medium px-8 py-4 rounded-sm text-center transition-all duration-200 text-sm uppercase tracking-[0.05em]"
              >
                Request an Introduction
              </Link>
              <Link
                href="/about"
                className="border border-white/40 hover:border-gold text-white hover:text-gold font-medium px-8 py-4 rounded-sm text-center transition-all duration-200 text-sm uppercase tracking-[0.05em]"
              >
                Our Approach
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
      <section className="bg-cream py-12 border-t border-navy/10 border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-serif text-3xl lg:text-4xl font-medium text-navy mb-2">
                UAE <span className="text-gold-dark">·</span> MENA
              </div>
              <div className="text-xs text-grey uppercase tracking-[0.1em]">Primary Focus</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl lg:text-4xl font-medium text-navy mb-2">
                <span className="text-gold-dark">3</span>
              </div>
              <div className="text-xs text-grey uppercase tracking-[0.1em]">Sector Verticals</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl lg:text-4xl font-medium text-navy mb-2">
                <span className="text-gold-dark">SPV</span>
              </div>
              <div className="text-xs text-grey uppercase tracking-[0.1em]">Structured Deals</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl lg:text-4xl font-medium text-navy mb-2">
                <span className="text-gold-dark">4</span>
              </div>
              <div className="text-xs text-grey uppercase tracking-[0.1em]">Partners & Directors</div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">Disciplined capital. Deliberate returns.</h2>
            <p className="text-grey text-lg leading-relaxed">
              We originate, structure, and manage investment opportunities where our regional access and analytical rigour create asymmetric outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white border border-navy/8 p-10 transition-all duration-200 hover:border-gold hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="w-12 h-12 text-gold-dark mb-6">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">Investment Management</h3>
              <p className="text-grey text-sm leading-relaxed mb-4">
                End-to-end portfolio construction: origination, due diligence, structuring, execution, and ongoing asset management across real estate, construction, and private business.
              </p>
              <ul className="space-y-2 text-sm text-grey">
                <li>• Origination from proprietary regional network</li>
                <li>• Underwriting with downside-first modelling</li>
                <li>• Active asset management through exit</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white border border-navy/8 p-10 transition-all duration-200 hover:border-gold hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="w-12 h-12 text-gold-dark mb-6">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">SPV Structuring</h3>
              <p className="text-grey text-sm leading-relaxed mb-4">
                Bespoke special-purpose vehicles for real estate and operating assets. Clean legal perimeters, transparent fund flow, and investor-friendly waterfall economics.
              </p>
              <ul className="space-y-2 text-sm text-grey">
                <li>• Deal-specific legal perimeters</li>
                <li>• Institutional documentation suite</li>
                <li>• Clean waterfall mechanics</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-navy/8 p-10 transition-all duration-200 hover:border-gold hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="w-12 h-12 text-gold-dark mb-6">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">Due Diligence</h3>
              <p className="text-grey text-sm leading-relaxed mb-4">
                Deep, document-driven diligence on sponsors, assets, and jurisdictions. We say no more than we say yes — and our investors thank us for it.
              </p>
              <ul className="space-y-2 text-sm text-grey">
                <li>• Legal & title diligence</li>
                <li>• Sponsor & counterparty background</li>
                <li>• Financial & commercial underwriting</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-medium text-xs uppercase tracking-[0.15em] mb-6 block">Philosophy</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
            Built for investors who expect more than product.
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            We operate as an extension of our investors' own teams. Every deal is underwritten against the question: <em className="italic">would we put our own capital into this, on these terms?</em> If the answer isn't an unequivocal yes, we pass.
          </p>
          <p className="text-white/82 leading-relaxed mb-12 max-w-3xl mx-auto">
            That discipline is the reason our pipeline is curated — not packaged — and why we limit the number of investors per vehicle. Independence matters. So does alignment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-serif text-2xl font-semibold">1</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">Capital preservation first</h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Downside scenarios modelled before upside. No exceptions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-serif text-2xl font-semibold">2</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">Structural alignment</h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Sponsors have skin in the game. Waterfalls reward outcomes, not activity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-serif text-2xl font-semibold">3</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">Transparency always</h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Quarterly reporting, open books, direct access to decision-makers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Focus */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">Three sectors. One thesis.</h2>
            <p className="text-grey text-lg leading-relaxed">
              Regional demographic tailwinds, institutional-grade assets, and operational expertise we can underwrite because we live it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white border border-navy/8 p-10 text-center"
            >
              <div className="font-serif text-5xl lg:text-6xl font-medium text-gold-dark line-height-1 mb-2">65<span className="text-xl">%</span></div>
              <div className="text-navy font-medium text-sm uppercase tracking-[0.1em] mb-4">Real Estate</div>
              <p className="text-grey text-sm leading-relaxed">
                Income-generating residential, commercial, and mixed-use assets across Dubai freehold districts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white border border-navy/8 p-10 text-center"
            >
              <div className="font-serif text-5xl lg:text-6xl font-medium text-gold-dark line-height-1 mb-2">25<span className="text-xl">%</span></div>
              <div className="text-navy font-medium text-sm uppercase tracking-[0.1em] mb-4">Construction</div>
              <p className="text-grey text-sm leading-relaxed">
                Build-to-sell and fit-out projects executed by our affiliated contractor, Desert Build LLC.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-navy/8 p-10 text-center"
            >
              <div className="font-serif text-5xl lg:text-6xl font-medium text-gold-dark line-height-1 mb-2">10<span className="text-xl">%</span></div>
              <div className="text-navy font-medium text-sm uppercase tracking-[0.1em] mb-4">Private Business</div>
              <p className="text-grey text-sm leading-relaxed">
                Minority stakes in operating businesses with defensible cash flow and owner-operator alignment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,97,0.1)_0%,transparent_60%)]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-medium text-xs uppercase tracking-[0.15em] mb-6 block">Invest with us</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4 leading-tight max-w-3xl mx-auto">Considering your next investment allocation?</h2>
            <p className="text-white/82 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Golden Desert works with a select group of qualified investors. If our approach resonates, we'd welcome an introductory conversation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-navy font-medium px-10 py-4 rounded-sm transition-all duration-200 text-sm uppercase tracking-[0.05em]"
            >
              Request an Introduction
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
