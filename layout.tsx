import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { JsonLd } from '@/components/json-ld'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { company } from '@/lib/site-data'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const siteUrl = 'https://hussaindesigns.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hussain Designs | Modern Websites & Graphic Design for Businesses',
    template: '%s | Hussain Designs',
  },
  description:
    'Hussain Designs creates modern websites, graphic design, landing pages, social media design and brand visuals for businesses and brands.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  keywords: [
    'Hussain Designs', 'Hussain Ali', 'Social Media Design', 'Website Design',
    'Landing Page Design', 'Website Development', 'Premium Design Studio',
    'Graphic Design', 'Brand Design', 'Business Website',
  ],
  authors: [{ name: 'Hussain Ali', url: company.instagram }],
  creator: 'Hussain Ali',
  publisher: 'Hussain Designs',
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Hussain Designs',
    title: 'Hussain Designs | Premium Visual & Web Design Studio',
    description: 'Modern websites, graphic design, landing pages and brand visuals by Hussain Ali for businesses and brands.',
    images: [{ url: '/images/logo.png', width: 1254, height: 1254, alt: 'Hussain Designs logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hussain Designs | Premium Visual & Web Design Studio',
    description: 'Modern websites, graphic design, landing pages and brand visuals by Hussain Ali for businesses and brands.',
    images: ['/images/logo.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0D0D0D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <JsonLd />
        <WhatsAppButton />
      </body>
    </html>
  )
}
