'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({ subtitle, title, description, light, center = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl font-medium mb-4 ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl ${center ? 'mx-auto' : ''} text-lg ${light ? 'text-white/70' : 'text-warm-gray'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
