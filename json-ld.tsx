import { company, services, pricing } from '@/lib/site-data'

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'Organization'],
    name: company.name,
    description: company.description,
    url: 'https://hussaindesigns.com',
    founder: { '@type': 'Person', name: company.founder, sameAs: [company.instagram, company.fiverr, company.linkedin, company.x] },
    email: company.email,
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer service', contactMethod: 'WhatsApp', telephone: `+${company.whatsappNumber}`, availableLanguage: ['English', 'Urdu'] }],
    sameAs: [company.instagram, company.fiverr, company.linkedin, company.x],
    areaServed: 'Worldwide',
    knowsAbout: services.map((s) => s.title),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Design Services',
      itemListElement: pricing.map((p) => ({
        '@type': 'Offer',
        price: p.tiers[0] ? p.tiers[0].price.replace(/[^0-9.]/g, '') : '0',
        priceCurrency: 'USD',
        description: p.description,
        itemOffered: { '@type': 'Service', name: p.name },
      })),
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
