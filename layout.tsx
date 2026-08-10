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
    default: 'Hussain Designs | Premium Social Media, Website & Landing Page Design',
    template: '%s | Hussain Designs',
  },
  description:
    'Hussain Designs is a premium creative studio by Hussain Ali — social media design, website design, landing pages and AI-assisted website development. Clean, brand-focused concepts that convert.',
  keywords: [
    'Hussain Designs', 'Hussain Ali', 'Social Media Design', 'Website Design',
    'Landing Page Design', 'AI-Assisted Website Development', 'Premium Design Studio',
    'Creative Agency', 'Poster Design', 'Brand Design',
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
    description: 'Premium social media design, website design, landing pages and AI-assisted development by Hussain Ali. Clean, brand-focused concepts that convert.',
    images: [{ url: '/images/logo.png', width: 1254, height: 1254, alt: 'Hussain Designs logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hussain Designs | Premium Visual & Web Design Studio',
    description: 'Premium social media design, website design, landing pages and AI-assisted development by Hussain Ali.',
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
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
