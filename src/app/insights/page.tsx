'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const articles = [
  {
    tag: 'Featured',
    quarter: 'Q2 2026',
    sector: 'UAE Real Estate',
    title: 'Dubai residential: the case for discipline in a hot market.',
    body: 'Dubai\'s residential market has delivered another strong year, but the signals beneath the headline numbers are more nuanced than they appear. Record transaction volumes mask widening dispersion between districts, and average price growth obscures a meaningful divergence between genuine demand and speculative inventory churn. This quarter, we examine what we\'re still buying, what we\'re declining, and where we think the market is misreading its own data.',
    author: 'Jacques Le Roux',
  },
  {
    tag: 'Commentary',
    quarter: 'Q2 2026',
    sector: 'SPV Structuring',
    title: 'Why SPV structuring matters more than ever in 2026.',
    body: 'The UAE\'s corporate tax regime, expanding AML requirements, and the maturation of the local private-capital ecosystem have changed what "good structuring" means for private investors. We walk through the three structural decisions that we see costing investors the most — and the frameworks we use when underwriting new vehicles for our own mandates.',
    author: 'Mogammad Junaid Kader',
  },
  {
    tag: 'Outlook',
    quarter: 'Q2 2026',
    sector: 'Construction & Build-to-Sell',
    title: 'The build-to-sell villa thesis: where it still works, where it doesn\'t.',
    body: 'Villa build-to-sell was one of the defining Dubai trades of the past cycle. Margins have compressed as land costs rose and the pool of qualified contractors tightened, but the thesis is not dead — it has just narrowed. We look at what separates a project worth pursuing from one that merely looks like one on a one-page teaser.',
    author: 'Bojan Veljkovic',
  },
  {
    tag: 'Brief',
    quarter: 'Q1 2026',
    sector: 'Macro',
    title: 'UAE macro backdrop: the quiet divergence from global trends.',
    body: 'While developed-market rates remain elevated and growth forecasts soften, the UAE is running a distinctly different macro story — demographic tailwinds, sovereign balance-sheet strength, and infrastructure investment that outpaces most peer economies. We examine how this environment shapes our sector allocation and our view on cycle timing.',
    author: 'Claudia',
  },
];

const sources = [
  {
    name: 'Dubai Land Department',
    description: 'Transaction data, rental indexes, and registered broker / developer records — the primary source for most Dubai market conclusions.',
  },
  {
    name: 'Central Bank of the UAE',
    description: 'Monetary policy, banking sector data, and macro indicators essential to understanding the financing environment.',
  },
  {
    name: 'DIFC & ADGM',
    description: 'Regulatory frameworks and case law that increasingly shape how private capital is structured and deployed in the region.',
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            alt="Insights"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Market Insights</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight max-w-4xl">
              Commentary from the ground. Analysis from the desk.
            </h1>
            <p className="text-white/80 text-lg mt-6 max-w-3xl leading-relaxed">
              Our view on the UAE and MENA investment landscape — written by the team underwriting the market, not by a research department abstracted from it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white border border-navy/8 p-10 ${i === 0 ? 'border-l-4 border-l-gold' : ''}`}
              >
                <div className="flex flex-wrap gap-3 mb-4 text-xs uppercase tracking-wider">
                  <span className="text-gold font-semibold">{article.tag}</span>
                  <span className="text-grey">&middot;</span>
                  <span className="text-grey">{article.quarter}</span>
                  <span className="text-grey">&middot;</span>
                  <span className="text-grey">{article.sector}</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-navy mb-4 italic">{article.title}</h2>
                <p className="text-grey leading-relaxed mb-4">{article.body}</p>
                <p className="text-sm text-gold-dark font-medium">— {article.author}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Research Sources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Sources</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy">Research sources.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sources.map((source, i) => (
              <motion.div
                key={source.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-navy/8 p-8"
              >
                <h3 className="font-serif text-lg font-medium text-navy mb-3">{source.name}</h3>
                <p className="text-grey text-sm leading-relaxed">{source.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quarterly Letter */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold font-medium text-xs uppercase tracking-[0.15em] mb-6 block">Investor Communication</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">Quarterly letter to investors.</h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
              Each quarter we publish a private letter to our investor base covering market commentary, portfolio updates, and the deals we said yes — and no — to, with reasoning. Available to qualified investors and introduced contacts.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
