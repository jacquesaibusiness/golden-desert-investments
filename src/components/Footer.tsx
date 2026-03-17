import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Portfolio', href: '/portfolio' },
    { label: 'Subsidiaries', href: '/subsidiaries' },
    { label: 'Investor Relations', href: '/investors' },
  ],
  Subsidiaries: [
    { label: 'Desert Build', href: '/subsidiaries' },
    { label: 'Haysal Real Estate', href: '/subsidiaries' },
    { label: 'Future Ventures', href: '/subsidiaries' },
  ],
  'Quick Links': [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo-light.jpg" alt="Golden Desert Investments" width={48} height={48} className="rounded" />
              <div>
                <span className="text-white font-bold text-xl">GOLDEN DESERT</span>
                <span className="block text-gold text-[10px] tracking-[0.25em] uppercase">Investments</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              A Dubai-based investment holding company with a diversified portfolio spanning real estate development, construction, and property investments.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded bg-white/5 hover:bg-gold/20 border border-white/10 flex items-center justify-center transition-colors text-xs text-white/60 hover:text-gold"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/50 hover:text-gold text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-white/50">
            <span>📍 Business Bay, Dubai, UAE</span>
            <span>✉️ info@goldendesertinvestments.ae</span>
          </div>
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Golden Desert Investments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
