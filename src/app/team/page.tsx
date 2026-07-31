'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Bojan Veljkovic',
    role: 'Owner & Managing Partner',
    bio: 'Bojan founded Golden Desert to bring institutional discipline to private investment opportunities in the UAE. He leads investor relationships, capital formation, and final investment decisions. His background spans international business development and long-horizon investment in emerging markets.',
  },
  {
    name: 'Mogammad Junaid Kader',
    role: 'Chief Operating Officer',
    bio: 'Junaid is responsible for firm operations, investment execution, and governance. He oversees the SPV framework, investor onboarding, and the firm’s compliance and reporting infrastructure. His background combines financial operations with construction and real estate delivery.',
  },
  {
    name: 'Jacques Le Roux',
    role: 'Head of Real Estate Operations',
    bio: 'Jacques leads real estate origination, underwriting, and asset management. His work spans identification of freehold opportunities, developer and broker due diligence, construction oversight via our affiliate Desert Build LLC, and ongoing asset performance management.',
  },
  {
    name: 'Claudia',
    role: 'Finance & Operations Director',
    bio: 'Claudia runs finance, treasury, and SPV accounting across the Golden Desert portfolio. She is responsible for quarterly investor reporting, audit coordination, and the operational machinery that ensures every dirham of investor capital is accounted for and documented.',
  },
];

const values = [
  {
    title: 'Fiduciary mindset',
    description: 'We treat every dirham as we’d treat our own — because much of it is.',
  },
  {
    title: 'Operators, not intermediaries',
    description: 'We don’t sell products. We underwrite opportunities we believe in and manage them through to exit.',
  },
  {
    title: 'Transparent by default',
    description: 'Quarterly reporting, open books, and direct access to the decision-makers at every stage.',
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Leadership</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight max-w-4xl">
              A team that underwrites with its own experience — and its own capital.
            </h1>
            <p className="text-white/80 text-lg mt-6 max-w-3xl leading-relaxed">
              Golden Desert is founder-led and operator-built. Every partner has carried responsibility for assets, investor capital, or regulated transactions — often all three.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-navy/8 p-10"
              >
                <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-2xl font-medium text-gold-dark">
                    {member.name.split(' ')[0][0]}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-navy mb-1">{member.name}</h3>
                <p className="text-gold text-sm font-medium mb-4">{member.role}</p>
                <p className="text-grey text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Philosophy */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold font-medium text-xs uppercase tracking-[0.15em] mb-6 block">Philosophy</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">Small team. Deliberate pace.</h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
              We have no ambition to be the largest investment firm in Dubai — only to be the most thoughtful partner to the investors we work with. That&apos;s why we keep the team lean, the pipeline curated, and our calendar open to the people who trust us with their capital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-gold font-semibold text-xs uppercase tracking-[0.15em] mb-4 block">Values</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy">What drives us.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-navy/8 p-8 text-center"
              >
                <h3 className="font-serif text-xl font-medium text-navy mb-3">{value.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
