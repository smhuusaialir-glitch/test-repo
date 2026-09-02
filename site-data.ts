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
    summary: 'A complete business website for a Sydney-based pest control company — designed and built from scratch to present services clearly, load fast on mobile, and convert visitors into phone enquiries.',
    challenge: 'The client was operating with an outdated website that looked dated, loaded slowly, and did not reflect the professionalism of their service. On mobile — where most of their potential customers were searching — the old site was difficult to navigate, had tiny tap targets, and buried the phone number below the fold. In a competitive Sydney pest control market filled with generic templated sites, the client needed a credible, modern online presence that would build trust with stressed homeowners and businesses dealing with an urgent pest problem, and make it effortless for them to pick up the phone and call.',
    approach: 'I started with a discovery conversation to understand the client\'s services, their frustrations with the old website, target audience, and competitive landscape. From there I developed a written direction covering the page structure, colour palette, typography, and content hierarchy. The old site\'s content was audited and restructured — not copied across — so the new site would communicate services clearly rather than dumping everything on one cluttered page. The design was built mobile-first, since most people searching for pest control are on their phone dealing with an urgent problem. Every page was structured around a single goal: get the visitor to call or message.',
    solution: 'A hand-coded, responsive website with a clean, professional design. The homepage leads with a clear value proposition and a prominent call-to-action. Service pages are structured around what the customer needs to know — what the pest is, how it\'s treated, and why to call now. The entire site is lightweight with no heavy frameworks or page builders, meaning it loads fast even on slow mobile data.',
    results: [
      'Replaced an outdated, slow-loading website with a modern, professional online presence',
      'Fast-loading pages — the site loads in under 2 seconds on a 4G connection',
      'Clear service presentation that eliminates visitor confusion',
      'Prominent click-to-call and WhatsApp contact options on every page',
      'Professional design that stands apart from generic templated competitors',
      'Fully responsive — works seamlessly on phone, tablet, and desktop',
      'Deployed to the client domain with proper SEO metadata',
    ],
    features: [
      'Mobile-first responsive layout',
      'Click-to-call phone numbers on every page',
      'WhatsApp integration for quick enquiries',
      'Service-specific pages with clear treatment information',
      'SEO-optimised meta tags and structured data',
      'Fast, lightweight build — no page builder, no heavy frameworks',
      'Accessible navigation and readable typography',
      'Contact form with service selection',
    ],
    techStack: [
      'Hand-coded HTML/CSS/JS',
      'Responsive design (mobile-first)',
      'Cloudflare Pages deployment',
      'SEO metadata and structured data',
    ],
    sections: [
      {
        heading: 'Discovery & Research',
        body: 'The client\'s existing website was outdated — slow to load, difficult to navigate on mobile, and visually stuck in an earlier era of web design. The phone number was buried, service information was disorganised, and the site did not build the kind of trust a pest control customer needs before making a call. I began by understanding the Sydney pest control market, what customers actually search for, and what information a visitor needs before they trust a company enough to call. The key insight: visitors are often stressed, dealing with an urgent pest problem, and they want to find a credible, professional service fast. The old site was adding friction instead of removing it.',
      },
      {
        heading: 'Design Direction',
        body: 'The visual direction was built around trust and clarity. A clean, professional colour palette with strong contrast for readability. Typography chosen for legibility on small screens. Every page was wireframed mobile-first, with the call-to-action placed where the thumb naturally rests. The design avoids the cluttered, template-heavy look that dominates the pest control industry.',
      },
      {
        heading: 'Development',
        body: 'The site was hand-coded — no page builder, no heavy framework. This keeps the page weight minimal and load times fast. Each service page was built as a standalone, SEO-optimised page with its own meta description, headings, and structured data. The navigation was kept simple and accessible, with a sticky header containing the phone number on mobile so it\'s always one tap away.',
      },
      {
        heading: 'Launch & Deployment',
        body: 'The site was deployed to Cloudflare Pages for fast global delivery and reliable uptime. SEO metadata, Open Graph tags, and structured data were configured so the site is indexed correctly and looks professional when shared. The client was given handover notes and stayed supported for the first week after launch.',
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
