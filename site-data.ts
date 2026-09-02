export const company = {
  name: 'Hussain Designs',
  founder: 'Hussain Ali',
  tagline: 'Modern websites and visual design for businesses and brands',
  description:
    'Hussain Designs is the creative practice of Hussain Ali — a solo designer building websites, landing pages, social content and brand visuals for businesses and service companies.',
  email: 'hussain.designs061@gmail.com',
  emailHref: 'mailto:hussain.designs061@gmail.com',
  whatsappNumber: '923482241940',
  whatsappDisplay: '+92 348 2241940',
  whatsappHref: 'https://wa.me/923482241940',
  instagram: 'https://www.instagram.com/hussainali.designs/',
  instagramHandle: '@hussainali.designs',
  fiverr: 'https://www.fiverr.com/s/bd4AVBY',
  linkedin: 'https://www.linkedin.com/in/hussain-ali-712659368',
  x: 'https://x.com/Hussainaliriz9',
  location: 'Remote · Working Worldwide',
  contactEndpoint: '',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export interface Service {
  icon: string
  title: string
  tagline: string
  description: string
  features: string[]
  cta: string
  image?: string
}

export const services: Service[] = [
  {
    icon: 'Globe',
    title: 'Website Design & Development',
    tagline: 'A real home for your business online.',
    description: 'Responsive business websites built with a clear page structure, legible typography and layouts that hold up on a phone, tablet and desktop. Hand-coded, not a page builder.',
    features: ['Custom page layouts — no recycled templates', 'Responsive build tested on real devices', 'Content structured around what you actually offer', 'Deployment to your domain, handled'],
    cta: 'Plan my business website',
    image: '/images/service-website.jpg',
  },
  {
    icon: 'Palette',
    title: 'Graphic Design',
    tagline: 'Visuals that say what you mean.',
    description: 'Posters, flyers and promotional artwork for campaigns and day-to-day business use — drawn around your existing colours and type, not dropped onto a stock layout.',
    features: ['Posters and promotional graphics', 'Print-ready artwork at correct bleed and DPI', 'Visual direction built from your brand', 'Files organised for handoff, not a flat export'],
    cta: 'Discuss a graphic project',
    image: '/images/service-graphic.jpg',
  },
  {
    icon: 'Camera',
    title: 'Social Media Design',
    tagline: 'A feed that reads as one body of work.',
    description: 'Posts, carousels and reusable templates so your feed stops looking like ten different designers made it. Built around a consistent grid, type pair and colour set.',
    features: ['Single posts and multi-slide carousels', 'Editable templates your team can reuse', 'Campaign creative for launches and offers', 'Feed direction — what goes next to what'],
    cta: 'Improve my social presence',
    image: '/images/service-social.jpg',
  },
  {
    icon: 'Sparkles',
    title: 'Branding / Visual Design',
    tagline: 'The pieces that make you recognisable.',
    description: 'Logo direction, colour and type choices, and a small set of usage rules — enough to keep your business looking like one business across every touchpoint.',
    features: ['Logo direction with layout variants', 'Colour and type pairing, documented', 'A short brand system, not a 60-page deck', 'Exported assets ready to drop into anything'],
    cta: 'Shape my brand identity',
    image: '/images/service-branding.jpg',
  },
  {
    icon: 'Rocket',
    title: 'Landing Pages',
    tagline: 'One page, one job.',
    description: 'A single focused page for a launch, a service or an ad campaign — built to carry one message clearly and point the reader at one action.',
    features: ['Structure written around a single conversion goal', 'One clear call to action, repeated where it helps', 'Mobile-first, because that is where it loads', 'Lightweight build — fast even on slow data'],
    cta: 'Build my landing page',
    image: '/images/service-landing.jpg',
  },
]

export interface CaseStudySection {
  heading: string
  body: string
}

export interface CaseStudy {
  slug: string
  client: string
  project: string
  category: string
  liveUrl: string
  summary: string
  challenge: string
  approach: string
  solution: string
  results: string[]
  features: string[]
  techStack: string[]
  sections: CaseStudySection[]
}

export interface PortfolioItem {
  title: string
  category: string
  image: string | null
  description: string
  liveUrl?: string
  caseStudySlug?: string
}

export const portfolio: PortfolioItem[] = [
  { title: 'Quality Pest Control Sydney', category: 'Website Design & Development', image: null, description: 'A business website built to present pest control services clearly, load fast and turn visitors into phone enquiries. Hand-coded, responsive, deployed to the client domain.', liveUrl: 'https://5055fd19.quality-pest-control-sydney.pages.dev', caseStudySlug: 'quality-pest-control-sydney' },
  { title: 'Brand Poster Series', category: 'Graphic Design', image: '/images/work-1.png', description: 'A poster series for a campaign — one visual language carried across four formats so the set reads as one piece, not four separate jobs.' },
  { title: 'Real Estate Campaign', category: 'Social Media Design', image: '/images/work-2.png', description: 'Listing graphics for a property campaign. Property details, price and contact laid out so a viewer on a phone can read them in three seconds.' },
  { title: 'Product Launch Creative', category: 'Branding / Visual Design', image: '/images/work-3.png', description: 'A launch visual that ties product photography, type and colour into one composition — used across the announcement and the sales page.' },
]

export const caseStudies: Record<string, CaseStudy> = {
  'quality-pest-control-sydney': {
    slug: 'quality-pest-control-sydney',
    client: 'Quality Pest Control Sydney',
    project: 'Business Website Design & Development',
    category: 'Website Design & Development',
    liveUrl: 'https://5055fd19.quality-pest-control-sydney.pages.dev',
    summary: 'A complete website redesign for a Sydney pest control company — replacing an outdated site with a fast, professional, mobile-first presence built to convert visitors into phone enquiries.',
    challenge: 'The client\'s old website was outdated — slow, hard to navigate on mobile, and buried the phone number. In a market full of generic templated sites, they needed a credible, modern presence that made it effortless for stressed homeowners to pick up the phone and call.',
    approach: 'Discovery conversation to understand services and audience. The old site\'s content was audited and restructured — not copied. Design built mobile-first, since most people searching for pest control are on their phone. Every page structured around one goal: get the visitor to call.',
    solution: 'A hand-coded, responsive website with a clean, professional design. Homepage leads with a clear value proposition and prominent call-to-action. Service pages answer what the pest is, how it\'s treated, and why to call now. Lightweight build — no page builders, no heavy frameworks.',
    results: [
      'Replaced an outdated, slow website with a modern professional presence',
      'Loads in under 2 seconds on 4G',
      'Click-to-call and WhatsApp on every page',
      'Stands apart from generic templated competitors',
      'Fully responsive across phone, tablet, and desktop',
      'Deployed with proper SEO metadata',
    ],
    features: [
      'Mobile-first responsive layout',
      'Click-to-call on every page',
      'WhatsApp integration',
      'Service-specific pages with clear treatment info',
      'SEO-optimised meta tags and structured data',
      'Lightweight build — no page builder',
      'Accessible navigation and readable typography',
      'Contact form with service selection',
    ],
    techStack: [
      'Hand-coded HTML/CSS/JS',
      'Mobile-first responsive design',
      'Cloudflare Pages',
      'SEO metadata & structured data',
    ],
    sections: [
      {
        heading: 'Discovery & Research',
        body: 'The old site was slow, hard to navigate on mobile, and visually stuck in an earlier era. The phone number was buried and service info was disorganised. I researched the Sydney pest control market and found the key insight: visitors are stressed, dealing with an urgent problem, and want to find a credible service fast. The old site was adding friction instead of removing it.',
      },
      {
        heading: 'Design Direction',
        body: 'Built around trust and clarity. Clean colour palette with strong contrast, typography chosen for small-screen legibility. Every page wireframed mobile-first with the call-to-action placed where the thumb naturally rests. The design avoids the cluttered, template-heavy look that dominates the pest control industry.',
      },
      {
        heading: 'Development',
        body: 'Hand-coded — no page builder, no heavy framework. Each service page built as a standalone, SEO-optimised page with its own meta data. Sticky header with the phone number on mobile so it\'s always one tap away.',
      },
      {
        heading: 'Launch & Deployment',
        body: 'Deployed to Cloudflare Pages for fast global delivery. SEO metadata, Open Graph tags, and structured data configured for correct indexing and professional sharing. Client received handover notes and support for the first week.',
      },
    ],
  },
}

export interface PricingTier {
  name: string
  price: string
}

export interface PricingPlan {
  icon: string
  name: string
  description: string
  tiers: PricingTier[]
  features: string[]
  featured?: boolean
  customQuoted?: boolean
}

export const pricing: PricingPlan[] = [
  { icon: 'Globe', name: 'Website Design & Development', description: 'Responsive websites built around your actual services and content — hand-coded, not a page builder.', tiers: [{ name: 'Starter', price: '$350+' }, { name: 'Professional', price: '$750+' }, { name: 'Premium', price: '$1,250+' }], features: ['Custom design and development', 'Responsive layouts tested on devices', 'Content structured around your offer', 'Deployment to your domain'], featured: true },
  { icon: 'Palette', name: 'Graphic Design', description: 'Posters, flyers and promotional artwork drawn from your brand — not dropped on a stock layout.', tiers: [{ name: 'Starter', price: '$50+' }, { name: 'Professional', price: '$120+' }, { name: 'Premium', price: '$250+' }], features: ['Custom visual direction', 'Brand colours and type, applied', 'Print-ready files at correct bleed', 'Two agreed revision rounds'] },
  { icon: 'Camera', name: 'Social Media Design', description: 'Posts and carousels built around one consistent grid so your feed stops looking like ten designers made it.', tiers: [{ name: 'Single Design', price: '$35+' }, { name: '5 Designs', price: '$150+' }, { name: '10 Designs', price: '$275+' }], features: ['Custom post and carousel design', 'One visual system across the set', 'Feed-ready exports', 'Agreed revision rounds'] },
  { icon: 'Sparkles', name: 'Branding / Visual Design', description: 'Logo direction, colour and type — enough to keep you looking like one business everywhere.', tiers: [{ name: 'Starter', price: '$150+' }, { name: 'Professional', price: '$300+' }, { name: 'Premium', price: '$500+' }], features: ['Logo direction with variants', 'Colour and type pairing, documented', 'A short brand system, not a 60-page deck', 'Assets ready to drop into anything'] },
  { icon: 'Rocket', name: 'Landing Pages', description: 'A single focused page for a launch, a service or an ad campaign. Priced per project — one page, one job.', tiers: [], features: ['Structure written around one conversion goal', 'One clear call to action', 'Mobile-first, lightweight build', 'Fast even on slow data'], customQuoted: true },
]

export const whyChooseMe = [
  { icon: 'Award', title: 'No recycled templates', description: 'Every project starts from a blank file. The layout, type and colour choices come from your business and your audience — not a folder of starter themes.' },
  { icon: 'Zap', title: 'A process you can actually follow', description: 'Discovery, direction, design, build, review, launch. You see where the work is at, what is next, and what I need from you at each step.' },
  { icon: 'Heart', title: 'Design that does a job', description: 'A website is not a decoration. Each layout is built to communicate what you offer and move the reader toward picking up the phone or sending a message.' },
  { icon: 'MessageCircle', title: 'You talk to the person doing the work', description: 'No account manager, no handoff to a junior. The person you brief is the person who opens the file and draws the layout.' },
  { icon: 'Smartphone', title: 'Built for the phone first', description: 'Most of your visitors arrive on a phone. The mobile layout is designed first, then expanded — not the other way around.' },
  { icon: 'TrendingUp', title: 'Working across time zones', description: 'Remote process, async updates, and a workflow that handles clients across different time zones without anyone waiting up at 2am.' },
]

export const processSteps = [
  { number: '01', title: 'Discovery', description: 'A call or a long message — whichever you prefer. You tell me what the business does, who it serves, what content you have, and what a good outcome looks like.' },
  { number: '02', title: 'Direction', description: 'I come back with a written direction: layout approach, type pairing, colour, and the page structure. We agree on it before any pixel is drawn.' },
  { number: '03', title: 'Design', description: 'Layouts and visual assets built against the agreed direction. You see real work, not a moodboard — and you see it early.' },
  { number: '04', title: 'Development', description: 'For websites: the approved design is hand-coded into a responsive, fast-loading build. No page builder, no heavy framework.' },
  { number: '05', title: 'Review', description: 'We walk through the work together. You mark what to adjust, I make the agreed changes. Two revision rounds are built into every package.' },
  { number: '06', title: 'Launch', description: 'You receive organised final files, or a deployed website on your domain with handover notes. I stay reachable for the first week after launch.' },
]

export const faqs = [
  { question: 'What types of websites do you build?', answer: 'I build modern business websites, service websites, landing pages and portfolio-style sites with responsive layouts and clear calls to action.' },
  { question: 'Do you work with international clients?', answer: 'Yes. The process is remote-friendly, with communication and project delivery handled online for businesses in different locations.' },
  { question: 'How long does a website take?', answer: 'Timelines depend on page count, content and scope. After reviewing your brief, I will confirm a realistic delivery window before work begins.' },
  { question: 'Can you redesign an existing website?', answer: 'Yes. I can improve the structure, visual presentation, responsiveness and clarity of an existing website while keeping what already works.' },
  { question: 'Do you provide deployment?', answer: 'Deployment support is available for website projects. We can discuss the platform, domain and hosting requirements during discovery.' },
  { question: 'How many revisions are included?', answer: 'The included revision rounds depend on the agreed package and scope. The details are confirmed clearly before the project starts.' },
  { question: 'Can I request a custom package?', answer: 'Absolutely. If your needs do not fit a starting package, share your brief and I will suggest a suitable scope and quote.' },
  { question: 'How do I get started with a project?', answer: 'Send a message through the contact form or WhatsApp with a short brief. I will reply with the next steps and any questions needed to scope the work.' },
]

export const testimonials = [
  { quote: 'Hussain understood the brief quickly and turned it into a website that feels clear, credible and genuinely built for our customers.', name: 'Quality Pest Control Sydney', role: 'Business website client' },
]

export const availability = 'Now booking a limited number of projects for the next production window.'

export const budgetOptions = ['Under $350', '$350 – $750', '$750 – $1,250', '$1,250+']

export const stats = [
  { value: 'Solo', label: 'Designer, no handoff' },
  { value: '1:1', label: 'You talk to me directly' },
  { value: '6 steps', label: 'Discovery to launch' },
  { value: 'Remote', label: 'Working worldwide' },
]
