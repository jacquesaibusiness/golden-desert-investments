'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

const categories = [
  { title: 'Real Estate Development', description: 'Ground-up residential and mixed-use projects in prime Dubai locations.', icon: '🏗️', count: '12 Projects' },
  { title: 'Construction', description: 'Full-service construction via Desert Build — G+4 buildings, villas, commercial fit-outs.', icon: '🔨', count: '25+ Projects' },
  { title: 'Property Sales', description: 'Off-plan and secondary market investments through Haysal Real Estate.', icon: '🏢', count: '15+ Active' },
  { title: 'Land Banking', description: 'Strategic land acquisitions in high-growth corridors for future development.', icon: '📍', count: 'AED 80M+' },
];

const projects = [
  { title: 'Jebel Ali Hills G+4', category: 'Real Estate Development', value: 'AED 40-50M', status: 'In Development', location: 'Jebel Ali Hills', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', description: 'Flagship G+4 residential development with premium finishes and modern amenities.' },
  { title: 'Business Bay Tower', category: 'Real Estate Development', value: 'AED 65M', status: 'Planning', location: 'Business Bay', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80', description: 'Commercial tower project in the heart of Dubai\'s business district.' },
  { title: 'Dubai Marina Residences', category: 'Property Sales', value: 'AED 28M', status: 'Active', location: 'Dubai Marina', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80', description: 'Portfolio of premium marina-front apartments for resale and rental yield.' },
  { title: 'JVC Villa Complex', category: 'Construction', value: 'AED 18M', status: 'Completed', location: 'Jumeirah Village Circle', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', description: 'Cluster of luxury villas delivered on time and under budget by Desert Build.' },
  { title: 'Al Barsha Land Plot', category: 'Land Banking', value: 'AED 35M', status: 'Acquired', location: 'Al Barsha', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', description: 'Strategic land acquisition in Al Barsha for future mixed-use development.' },
  { title: 'Downtown Renovation', category: 'Property Sales', value: 'AED 12M', status: 'Completed', location: 'Downtown Dubai', image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80', description: 'Full renovation and flip of 8 luxury apartments in Downtown Dubai.' },
];

const statusColor = (status: string) => {
  switch (status) {
    case 'Completed': return 'bg-green-500/90 text-white';
    case 'Active': case 'Acquired': return 'bg-gold/90 text-navy';
    case 'In Development': case 'Planning': return 'bg-navy/90 text-white';
    default: return 'bg-gray-500/90 text-white';
  }
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Portfolio" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold font-semibold text-sm uppercase tracking-[0.3em] mb-4 block">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Our Investments</h1>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Investment Categories" title="Diversified Strategy" description="Our portfolio spans four core investment verticals" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-cream hover:border-gold/30 transition-colors"
              >
                <span className="text-4xl mb-4 block">{cat.icon}</span>
                <h3 className="text-lg font-bold text-navy mb-2">{cat.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-4">{cat.description}</p>
                <span className="text-gold font-bold text-sm">{cat.count}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Projects" title="Portfolio Highlights" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(project.status)}`}>{project.status}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-navy px-3 py-1 rounded-full text-xs font-bold">{project.value}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg font-bold text-navy mt-1 mb-2">{project.title}</h3>
                  <p className="text-warm-gray text-sm mb-3">{project.description}</p>
                  <div className="flex items-center gap-2 text-warm-gray text-xs">
                    <span>📍</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
