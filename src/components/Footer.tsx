import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Market Insights', href: '/insights' },
  ],
  Services: [
    { label: 'Investment Management', href: '/services' },
    { label: 'SPV Structuring', href: '/services' },
    { label: 'Due Diligence', href: '/services' },
    { label: 'Investor Relations', href: '/services' },
  ],
  Contact: [
    { label: 'info@goldendesert.ae', href: 'mailto:info@goldendesert.ae' },
    { label: 'Dubai, UAE', href: '/contact' },
    { label: 'Investor enquiry', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/gd-logo-dark.png" alt="Golden Desert Investment Consultant" width={64} height={64} className="object-contain" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Independent investment advisory for high-net-worth investors and family offices. Dubai-based. UAE &amp; MENA mandate.
            </p>
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

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/30 text-xs text-center">
            &copy; 2026 Golden Desert Investment Consultant LLC. All rights reserved. Licensed in the Emirate of Dubai. A Desert Group company.
          </p>
        </div>
      </div>
    </footer>
  );
}
