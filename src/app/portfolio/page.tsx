'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const sectors = [
  {
    pct: '65',
    label: 'Real Estate',
    description: 'Income-generating residential, commercial, and mixed-use assets. Primary focus on freehold districts with clear demand drivers and sponsor-level alignment.',
  },
  {
    pct: '25',
    label: 'Construction',
    description: 'Build-to-sell villa and fit-out projects, delivered in partnership with Desert Build LLC. Vertical integration lets us underwrite cost and timeline with confidence.',
  },
  {
    pct: '10',
    label: 'Private Business',
    description: 'Minority stakes in operating businesses with defensible cash flow, sensible valuations, and owner-operators we respect. Selective, not opportunistic.',
  },
];

const geoFocus = [
  { region: 'United Arab Emirates', mandate: 'Core', detail: 'Primary mandate, Dubai core' },
  { region: 'Wider MENA (Saudi, Bahrain, Oman)', mandate: 'Selective', detail: '' },
  { region: 'Outside MENA', mandate: 'Exception', detail: 'Case-by-case co-investment' },
];

const approach = [
  {
    title: 'Quality over quantity',
    description: 'We pass on more opportunities than we pursue. Every investment has to beat a high bar on sponsor quality, asset fundamentals, and alignment.',
  },
  {
    title: 'Asymmetric risk-reward',
    description: 'We model downside scenarios first. If we can live with the worst case, the base and upside cases take care of themselves.',
  },
  {
    title: 'Long-horizon thinking',
    description: 'We are not flippers. Our target hold periods are measured in years, and our returns are measured after tax, fees, and time value.',
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Portfolio" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Portfolio &amp; Strategy</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight max-w-4xl">
              Concentrated by sector. Deliberate by design.
            </h1>
            <p className="text-white/80 text-lg mt-6 max-w-3xl leading-relaxed">
              Our portfolio is built on the sectors where our regional access and operational capability give us a durable edge — real estate, construction, and private business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sector Allocation */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">Target portfolio composition.</h2>
            <p className="text-grey text-lg">Indicative target allocation across active mandates. Actual weights vary by vehicle and investor appetite.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white border border-navy/8 p-10 text-center"
              >
                <div className="font-serif text-5xl lg:text-6xl font-medium text-gold-dark mb-2">{sector.pct}<span className="text-xl">%</span></div>
                <div className="text-navy font-medium text-sm uppercase tracking-[0.1em] mb-4">{sector.label}</div>
                <p className="text-grey text-sm leading-relaxed">{sector.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Geography</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">UAE first. MENA as opportunity demands.</h2>
            <p className="text-grey text-lg leading-relaxed mb-12 max-w-3xl">
              Dubai is our home market and the core of our pipeline. We extend selectively into Abu Dhabi, the Northern Emirates, and wider MENA where a specific opportunity, counterparty, or thesis justifies the diligence investment. We do not pursue exposure for diversification&apos;s sake. If we can&apos;t underwrite a jurisdiction to the same standard as the UAE, we don&apos;t put investor capital there.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl">
              <thead>
                <tr className="border-b border-navy/10">
                  <th className="text-left py-3 text-sm font-semibold text-navy uppercase tracking-wider">Region</th>
                  <th className="text-left py-3 text-sm font-semibold text-navy uppercase tracking-wider">Mandate</th>
                </tr>
              </thead>
              <tbody>
                {geoFocus.map((row) => (
                  <tr key={row.region} className="border-b border-navy/5">
                    <td className="py-4 text-sm text-charcoal">{row.region}</td>
                    <td className="py-4 text-sm">
                      <span className="font-semibold text-gold-dark">{row.mandate}</span>
                      {row.detail && <span className="text-grey"> — {row.detail}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Approach</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">How we think about an opportunity.</h2>
            <p className="text-white/70 text-lg">We apply the same underwriting lens whether the cheque is 1 million dirhams or 100.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 p-8"
              >
                <h3 className="font-serif text-xl font-medium text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Philosophy */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Performance</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">Returns measured the way investors measure them.</h2>
            <p className="text-grey text-lg leading-relaxed">
              We report net-to-investor returns after all fees, expenses, and carry. We benchmark against market alternatives an investor could actually access. And we distinguish realised from unrealised returns in every statement. No dressing up paper marks as performance.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
