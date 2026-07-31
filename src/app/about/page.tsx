'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">About Golden Desert</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight max-w-4xl">
              An independent advisory firm, built for investors who expect more.
            </h1>
            <p className="text-white/80 text-lg mt-6 max-w-3xl leading-relaxed">
              We combine the discipline of institutional investing with the agility and alignment of a founder-led team. Our only business is delivering risk-adjusted returns for the capital we steward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">Why Golden Desert exists.</h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                The UAE has become one of the most active investment jurisdictions in the world — but most investors from the region, and increasingly from outside it, struggle to find an advisory partner that is both genuinely local and genuinely independent.
              </p>
              <p className="text-grey leading-relaxed mb-6">
                Global houses provide credibility but limited local nuance. Regional sovereign vehicles are world-class but inaccessible to private capital. Local brokers often lack the structuring rigour institutional investors expect.
              </p>
              <p className="text-grey leading-relaxed">
                Golden Desert was founded to close that gap. We are independent of any bank, developer, or sovereign mandate. Our founders are operators — not salespeople — with deep roots in Dubai&apos;s real estate and construction markets and a track record of putting their own capital alongside investors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Structure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Structure</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">A focused holding company with SPV-driven execution.</h2>
            <p className="text-grey text-lg leading-relaxed mb-12 max-w-3xl">
              Golden Desert Investment Consultant LLC is the holding entity. Each investment is executed through a purpose-built special purpose vehicle (SPV), creating a clean legal perimeter around assets, investor capital, and returns.
            </p>
          </motion.div>

          {/* Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="space-y-4">
              <div className="bg-navy text-white p-8 text-center">
                <h3 className="font-serif text-xl font-medium mb-1">Golden Desert Investment Consultant LLC</h3>
                <p className="text-white/60 text-sm">Holding Company &middot; Mandate Origination</p>
              </div>
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gold"></div>
              </div>
              <div className="bg-gold/10 border border-gold/30 p-8 text-center">
                <h3 className="font-serif text-xl font-medium text-navy mb-1">Deal-Specific SPV</h3>
                <p className="text-grey text-sm">Ring-fenced assets &middot; Defined waterfall</p>
              </div>
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gold"></div>
              </div>
              <div className="bg-cream-warm p-8 text-center">
                <h3 className="font-serif text-xl font-medium text-navy mb-1">Qualified Investors</h3>
                <p className="text-grey text-sm">Direct co-investment &middot; Quarterly reporting</p>
              </div>
            </div>

            <div className="flex justify-center gap-8 mt-8 text-sm text-grey">
              <span>Ring-fenced risk per deal</span>
              <span>&middot;</span>
              <span>Transparent fund flow</span>
              <span>&middot;</span>
              <span>Flexible co-investment</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Positioning</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-12">Where Golden Desert fits.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white/5 border border-white/10 p-8"
            >
              <h3 className="font-serif text-xl font-medium text-white mb-4">Vs. regional sovereigns</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Firms like ADIA and Mubadala set the institutional bar. We complement them by serving capital that is too private, too agile, or too specific to fit within a sovereign mandate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white/5 border border-white/10 p-8"
            >
              <h3 className="font-serif text-xl font-medium text-white mb-4">Vs. global houses</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Blackstone and Brookfield offer scale. We offer ground-truth — deal flow that never reaches a global deal team&apos;s screen, underwritten by people who live in this market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 p-8"
            >
              <h3 className="font-serif text-xl font-medium text-white mb-4">Vs. local brokers</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Plenty of firms will sell you a property. We structure an investment. The difference shows up in diligence, alignment, and what happens after the wire transfer clears.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Governance</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">Institutional standards as a baseline, not a feature.</h2>
            <p className="text-grey text-lg leading-relaxed mb-12 max-w-3xl">
              Every investor relationship at Golden Desert begins with full AML/KYC onboarding, documented source-of-funds verification, and a written investment agreement. Every SPV maintains separate books, independent accounting, and quarterly investor reporting.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['AML/KYC', 'SPV Books', 'Reporting', 'Audit Trail'].map((pillar, i) => (
              <motion.div
                key={pillar}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-navy/8 p-6 text-center"
              >
                <div className="font-serif text-lg font-medium text-navy">{pillar}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
