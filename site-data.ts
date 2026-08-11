export const company = {
  name: 'Hussain Designs',
  founder: 'Hussain Ali',
  tagline: 'Modern websites and visual design for businesses and brands',
  description:
    'Hussain Designs is the creative practice of Hussain Ali, specialising in modern websites, graphic design, landing pages, social media design and brand visuals for businesses and brands.',
  email: 's.m.huusai.ali.r@gmail.com',
  emailHref: 'mailto:s.m.huusai.ali.r@gmail.com',
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
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Process', href: '#process' },
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
}

export const services: Service[] = [
  {
    icon: 'Globe',
    title: 'Website Design & Development',
    tagline: 'A polished home for your business.',
    description: 'Responsive business websites with clear structure, thoughtful visuals and a professional experience across desktop, tablet and mobile.',
    features: ['Custom page layouts', 'Responsive development', 'Clear content structure', 'Deployment support'],
    cta: 'Plan my business website',
  },
  {
    icon: 'Palette',
    title: 'Graphic Design',
    tagline: 'Visuals made to communicate clearly.',
    description: 'Purposeful graphics for campaigns, promotions and everyday business communication, aligned with your brand direction.',
    features: ['Posters and promotional graphics', 'Print-ready artwork', 'Custom visual direction', 'Brand-consistent styling'],
    cta: 'Discuss a graphic project',
  },
  {
    icon: 'Camera',
    title: 'Social Media Design',
    tagline: 'Consistent content for every feed.',
    description: 'Scroll-stopping posts, carousels and templates that help your business look considered and recognisable online.',
    features: ['Post and carousel design', 'Content templates', 'Campaign creative', 'Feed aesthetic direction'],
    cta: 'Improve my social presence',
  },
  {
    icon: 'Sparkles',
    title: 'Branding / Visual Design',
    tagline: 'A visual identity people remember.',
    description: 'Cohesive visual foundations that give your business a confident, consistent and premium presence.',
    features: ['Logo direction', 'Colour and type direction', 'Brand visual system', 'Usage-ready assets'],
    cta: 'Shape my brand identity',
  },
  {
    icon: 'Rocket',
    title: 'Landing Pages',
    tagline: 'One focused page for one clear goal.',
    description: 'Focused landing pages that present your offer clearly, guide visitors through the message and make it easy to enquire.',
    features: ['Conversion-focused structure', 'Clear calls to action', 'Mobile-first layout', 'Fast, lightweight build'],
    cta: 'Build my landing page',
  },
]

export interface PortfolioItem {
  title: string
  category: string
  image: string | null
  description: string
  liveUrl?: string
}

export const portfolio: PortfolioItem[] = [
  { title: 'Brand Poster Series', category: 'Graphic Design', image: '/images/work-1.png', description: 'A polished visual series designed to give a campaign a consistent, premium direction.' },
  { title: 'Real Estate Campaign', category: 'Social Media Design', image: '/images/work-2.png', description: 'Clear promotional graphics built to present property information with confidence.' },
  { title: 'Product Launch Creative', category: 'Branding / Visual Design', image: '/images/work-3.png', description: 'A focused launch visual that brings product presentation and brand styling together.' },
  { title: 'Quality Pest Control Sydney', category: 'Website Design & Development', image: null, description: 'Designed and developed a modern business website focused on presenting services clearly, building trust and encouraging customer enquiries.', liveUrl: 'https://5055fd19.quality-pest-control-sydney.pages.dev' },
]

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
}

export const pricing: PricingPlan[] = [
  { icon: 'Globe', name: 'Website Design & Development', description: 'Responsive websites designed around your business, content and goals.', tiers: [{ name: 'Starter', price: '$350+' }, { name: 'Professional', price: '$750+' }, { name: 'Premium', price: '$1,250+' }], features: ['Custom design and development', 'Responsive layouts', 'Clear content structure', 'Deployment support'], featured: true },
  { icon: 'Palette', name: 'Graphic Design', description: 'Professional graphics for campaigns, promotions and business communication.', tiers: [{ name: 'Starter', price: '$50+' }, { name: 'Professional', price: '$120+' }, { name: 'Premium', price: '$250+' }], features: ['Custom visual direction', 'Brand-consistent styling', 'Production-ready assets', 'Clear revision process'] },
  { icon: 'Camera', name: 'Social Media Design', description: 'Consistent social content that helps your business look clear and considered.', tiers: [{ name: 'Single Design', price: '$35+' }, { name: '5 Designs', price: '$150+' }, { name: '10 Designs', price: '$275+' }], features: ['Custom post design', 'Consistent visual system', 'Feed-ready exports', 'Agreed revision rounds'] },
  { icon: 'Sparkles', name: 'Branding / Visual Design', description: 'A cohesive visual direction to help your business present itself professionally.', tiers: [{ name: 'Starter', price: '$150+' }, { name: 'Professional', price: '$300+' }, { name: 'Premium', price: '$500+' }], features: ['Visual identity direction', 'Colour and type guidance', 'Brand-ready assets', 'Organised handoff'] },
]

export const whyChooseMe = [
  { icon: 'Award', title: 'Custom-Designed Solutions', description: 'Every project is shaped around your business, audience and visual direction rather than a one-size-fits-all template.' },
  { icon: 'Zap', title: 'Clear Project Process', description: 'A straightforward path from discovery to delivery keeps decisions focused and the work easy to follow.' },
  { icon: 'Heart', title: 'Business-Focused Design', description: 'The goal is not decoration alone: each layout is created to communicate your offer with clarity and confidence.' },
  { icon: 'MessageCircle', title: 'Direct Communication', description: 'You work directly with the designer responsible for the project, with clear updates and practical conversations.' },
  { icon: 'Smartphone', title: 'Responsive Websites', description: 'Web work is considered across mobile, tablet and desktop so your business presents well wherever it is viewed.' },
  { icon: 'TrendingUp', title: 'International Freelance Projects', description: 'A remote-friendly process makes it simple to collaborate with businesses and brands from different locations.' },
]

export const processSteps = [
  { number: '01', title: 'Discovery', description: 'We discuss your business, audience, goals, content and what the project needs to achieve.' },
  { number: '02', title: 'Direction', description: 'I establish a clear visual and content direction so the project has a confident foundation.' },
  { number: '03', title: 'Design', description: 'I develop the layouts and visual assets, keeping the work aligned with the agreed direction.' },
  { number: '04', title: 'Development', description: 'For websites, the approved design is built into a responsive, functional experience.' },
  { number: '05', title: 'Review', description: 'We review the work together and make the agreed refinements with clear feedback.' },
  { number: '06', title: 'Launch', description: 'You receive organised final files or a ready-to-publish website with deployment support where needed.' },
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

export const budgetOptions = ['Under $350', '$350 – $750', '$750 – $1,250', '$1,250+']

export const stats = [
  { value: 'Selected', label: 'Work' },
  { value: 'Direct', label: 'Communication' },
  { value: 'Clear', label: 'Process' },
  { value: 'Remote', label: 'Worldwide' },
]
