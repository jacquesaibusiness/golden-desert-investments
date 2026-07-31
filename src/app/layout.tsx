import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Golden Desert Investment Consultant — Regional Expertise, Global Standards',
  description: 'Golden Desert Investment Consultant LLC is a Dubai-based investment advisory firm specialising in SPV structuring, real estate, and institutional capital deployment across the UAE and MENA.',
  keywords: 'Dubai investments, investment advisory, SPV structuring, real estate, Golden Desert Investment Consultant, MENA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#0B1F3A" />
      </head>
      <body className="bg-cream antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
