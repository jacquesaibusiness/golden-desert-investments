'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const subsidiaries = [
  {
    name: 'Desert Build',
    tagline: 'Building Excellence',
    description: 'Our full-service construction subsidiary delivering residential and commercial projects across Dubai. From ground-up G+4 developments to luxury villa construction and commercial fit-outs, Desert Build combines engineering precision with architectural vision.',
    services: ['G+4 Residential Buildings', 'Luxury Villa Construction', 'Commercial Fit-Outs', 'Renovation & Refurbishment', 'Project Management'],
    stats: [
      { label: 'Projects Delivered', value: '25+' },
      { label: 'Under Construction', value: 'AED 50M+' },
      { label: 'Team Size', value: '80+' },
    ],
    logo: '/logo-dark.jpg',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    href: '#',
    color: 'from-amber-900/80 to-navy/80',
  },
  {
    name: 'Haysal Real Estate',
    tagline: 'Your Gateway to Dubai Property',
    description: 'Premium real estate brokerage specializing in off-plan sales, secondary market transactions, and investment advisory. With access to 1,800+ projects from top developers, Haysal connects investors with the best opportunities in Dubai.',
    services: ['Off-Plan Property Sales', 'Secondary Market Brokerage', 'Investment Advisory', 'Renovation & Flip Projects', 'Property Management'],
    stats: [
      { label: 'Projects Listed', value: '1,800+' },
      { label: 'Developers', value: '500+' },
      { label: 'Clients Served', value: '200+' },
    ],
    logo: '/logo-dark.jpg',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
    href: '#',
    color: 'from-blue-900/80 to-navy/80',
  },
];

export default function SubsidiariesPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80" alt="Subsidiaries" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold font-semibold text-sm uppercase tracking-[0.3em] mb-4 block">Our Companies</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Subsidiaries</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {subsidiaries.map((sub, i) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="py-16 first:pt-16"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                <div className={`relative h-[400px] rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <Image src={sub.image} alt={sub.name} fill className="object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${sub.color}`} />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <Image src={sub.logo} alt={sub.name} width={40} height={40} className="rounded" />
                    <span className="text-white font-bold text-xl">{sub.name}</span>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                  <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-2 block">{sub.tagline}</span>
                  <h2 className="text-3xl font-bold text-navy mb-4">{sub.name}</h2>
                  <p className="text-warm-gray leading-relaxed mb-6">{sub.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {sub.stats.map((stat) => (
                      <div key={stat.label} className="bg-navy/5 rounded-xl p-4 text-center">
                        <div className="text-navy font-bold text-xl">{stat.value}</div>
                        <div className="text-warm-gray text-xs mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h4 className="text-navy font-semibold mb-3 text-sm uppercase tracking-wider">Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {sub.services.map((service) => (
                        <span key={service} className="bg-cream border border-gold/20 text-navy text-xs font-medium px-3 py-1.5 rounded-full">{service}</span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={sub.href}
                    className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 rounded transition-all duration-200"
                  >
                    Visit Website →
                  </Link>
                </div>
              </div>
              {i < subsidiaries.length - 1 && <div className="border-b border-gold/10 mt-16" />}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Future Ventures */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold text-4xl mb-4 block">🚀</span>
            <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Coming Soon</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Future Ventures</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Our innovation arm exploring tokenized real estate, PropTech solutions, and next-generation investment vehicles. Launching 2025.
            </p>
            <Link href="/investors" className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded transition-all duration-200 hover:shadow-lg hover:shadow-gold/30">
              Register Interest
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
