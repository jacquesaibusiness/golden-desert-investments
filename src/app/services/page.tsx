'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Investment Management',
    description: 'End-to-end portfolio construction: deal origination, underwriting, structuring, execution, and active asset management. We work across real estate, construction, and private business, with a bias toward assets we can understand, influence, and exit on our own timetable.',
    points: [
      'Origination from proprietary regional network',
      'Underwriting with downside-first modelling',
      'Active asset management through exit',
    ],
  },
  {
    num: '02',
    title: 'SPV Structuring',
    description: 'Each investment sits inside a purpose-built special purpose vehicle — giving investors a ring-fenced legal perimeter, transparent fund flow from subscription through distribution, and a bespoke waterfall designed to reward outcomes rather than activity. Our SPV framework is built on UAE-compliant structures with institutional-grade documentation.',
    points: [
      'Deal-specific legal perimeters',
      'Institutional documentation suite',
      'Clean waterfall mechanics',
    ],
  },
  {
    num: '03',
    title: 'Due Diligence',
    description: 'Document-driven diligence on sponsors, counterparties, and assets. We specialise in the UAE regulatory and market environment — the place where a global DD firm\'s playbook fails and a local broker\'s shrug begins. Our diligence pack typically includes legal, financial, commercial, and sponsor-background review, delivered to institutional standards.',
    points: [
      'Legal & title diligence',
      'Sponsor & counterparty background',
      'Financial & commercial underwriting',
    ],
  },
  {
    num: '04',
    title: 'Investor Relations',
    description: 'From first conversation through distribution and exit, we maintain direct, candid communication. Investors receive quarterly reports with asset-level performance, capital-account statements, and transparent notes on risks or developments. When things change, we tell you — before you read it somewhere else.',
    points: [
      'Quarterly investor reports',
      'Capital-account statements',
      'Direct access to leadership',
    ],
  },
];

const processStages = [
  {
    num: '1',
    title: 'Origination',
    description: 'Opportunity sourced, initial fit check against thesis and investor appetite.',
  },
  {
    num: '2',
    title: 'Diligence',
    description: 'Legal, financial, commercial, and sponsor review. Written memo to investors.',
  },
  {
    num: '3',
    title: 'Structuring',
    description: 'SPV formation, documentation, capital call schedule, waterfall mechanics.',
  },
  {
    num: '4',
    title: 'Execution & Stewardship',
    description: 'Deployment, active management, quarterly reporting, exit planning.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Services</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight max-w-4xl">
              Four core services. One integrated mandate.
            </h1>
            <p className="text-white/80 text-lg mt-6 max-w-3xl leading-relaxed">
              We do a small number of things, deliberately well. Every engagement starts with the same question: is there a version of this opportunity we would commit our own capital to?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-navy/8 p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-1">
                    <span className="font-serif text-3xl font-medium text-gold-dark">{service.num}</span>
                  </div>
                  <div className="lg:col-span-11">
                    <h2 className="font-serif text-2xl font-medium text-navy mb-4">{service.title}</h2>
                    <p className="text-grey leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 text-sm text-grey">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="text-gold-dark mt-1">&#8226;</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">The Golden Desert investment process.</h2>
            <p className="text-white/70 text-lg">Four stages. Built for discipline. Designed for transparency.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 p-8"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gold font-serif text-xl font-semibold">{stage.num}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-3">{stage.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
