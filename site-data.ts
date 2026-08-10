export const company = {
  name: 'Hussain Designs',
  founder: 'Hussain Ali',
  tagline: 'Premium Visual & Web Design Studio',
  description:
    'Hussain Designs is a premium creative studio by Hussain Ali, specialising in social media design, website design, landing pages, and AI-assisted website development. Clean, brand-focused concepts that help businesses look and convert like luxury.',
  email: 's.m.huusai.ali.r@gmail.com',
  emailHref: 'mailto:s.m.huusai.ali.r@gmail.com',
  whatsappNumber: '923482241940',
  whatsappDisplay: '+92 348 2241940',
  whatsappHref: 'https://wa.me/923482241940',
  instagram: 'https://www.instagram.com/hussainali.designs/',
  instagramHandle: '@hussainali.designs',
  location: 'Remote · Working Worldwide',
  foundedYear: 2024,
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
    icon: 'Camera',
    title: 'Social Media Design',
    tagline: 'Stop the scroll. Start the conversation.',
    description:
      'Your audience judges your brand in seconds. I design scroll-stopping posters, carousels and brand kits that make your business look premium on every feed — so you attract better clients, not just likes.',
    features: ['Post & carousel design', 'Brand kit & templates', 'Ad creative', 'Feed aesthetic direction'],
    cta: 'Make my brand stand out',
  },
  {
    icon: 'Globe',
    title: 'Website Design',
    tagline: 'Your website is your 24/7 salesperson.',
    description:
      'A premium website builds trust before you even speak to a client. I design elegant, responsive websites that communicate professionalism at every scroll — turning visitors into enquiries while you sleep.',
    features: ['Multi-page design', 'Responsive layouts', 'UX & content structure', 'Design handoff'],
    cta: 'Design my business website',
  },
  {
    icon: 'Rocket',
    title: 'Landing Page Design',
    tagline: 'One page. One goal. More enquiries.',
    description:
      'When someone clicks your ad or link, you have seconds to convince them. I build high-converting landing pages with one clear call to action — minimal, fast and engineered to turn clicks into paying clients.',
    features: ['Single-page conversion design', 'Hero & CTA strategy', 'Mobile-first', 'Fast & lightweight'],
    cta: 'Build my conversion page',
  },
  {
    icon: 'Sparkles',
    title: 'AI-Assisted Website Development',
    tagline: 'Custom quality. Fraction of the timeline.',
    description:
      'Get a production-ready website that looks and performs like a custom agency build — delivered in days, not weeks. AI accelerates the repetitive work while I direct every detail of design, structure and quality.',
    features: ['AI-assisted build', 'Production-ready code', 'SEO optimised', 'Performance focused'],
    cta: 'Launch my website fast',
  },
]

export interface PortfolioItem {
  title: string
  category: string
  image: string | null
  placeholder?: boolean
}

export const portfolio: PortfolioItem[] = [
  { title: 'Brand Poster Series', category: 'Social Media Design', image: '/images/work-1.png' },
  { title: 'Real Estate Campaign', category: 'Poster Design', image: '/images/work-2.png' },
  { title: 'Product Launch Creative', category: 'Social Media Design', image: '/images/work-3.png' },
  { title: 'Reserved for Your Brand', category: 'Social Media Design', image: null, placeholder: true },
  { title: 'Reserved for Your Brand', category: 'Website Design', image: null, placeholder: true },
  { title: 'Reserved for Your Brand', category: 'Landing Page', image: null, placeholder: true },
]

export interface PricingPlan {
  icon: string
  name: string
  price: string
  unit: string
  description: string
  features: string[]
  featured?: boolean
}

export const pricing: PricingPlan[] = [
  {
    icon: 'Camera',
    name: 'Social Media Design',
    price: '$25',
    unit: 'starting from',
    description: 'Premium post and carousel design that makes your brand stand out on every feed.',
    features: ['Custom post design', 'Carousel layouts', 'Brand-consistent styling', '2 revisions included'],
  },
  {
    icon: 'Rocket',
    name: 'Landing Pages',
    price: '$80',
    unit: 'starting from',
    description: 'A focused single-page design built to convert visitors into enquiries.',
    features: ['Single-page design', 'Conversion-focused layout', 'Mobile responsive', '2 revisions included'],
    featured: true,
  },
  {
    icon: 'Globe',
    name: 'Business Website',
    price: '$120',
    unit: 'starting from',
    description: 'A complete multi-page website design that communicates trust and professionalism.',
    features: ['Multi-page design', 'Responsive on all devices', 'Content structure', '3 revisions included'],
  },
  {
    icon: 'Sparkles',
    name: 'AI-Assisted Development',
    price: '$180',
    unit: 'starting from',
    description: 'A production-ready website built faster with AI-assisted development.',
    features: ['Production-ready build', 'SEO optimised', 'Performance focused', 'Ongoing support'],
  },
]

export const whyChooseMe = [
  { icon: 'Award', title: 'Premium Quality', description: 'Every design is crafted to look and feel like a high-end creative agency — never template, never generic.' },
  { icon: 'Zap', title: 'Fast Turnaround', description: 'AI-assisted workflows mean you get premium results delivered in a fraction of the usual time.' },
  { icon: 'Heart', title: 'Brand-Focused', description: 'Clean, intentional concepts built around your brand identity — not random stock graphics.' },
  { icon: 'MessageCircle', title: 'WhatsApp Support', description: 'Direct, personal communication with the founder. No account managers, no delays.' },
  { icon: 'Smartphone', title: 'Responsive First', description: 'Every design and build looks flawless on mobile, tablet and desktop from day one.' },
  { icon: 'TrendingUp', title: 'Conversion Driven', description: 'Designs engineered to do more than look good — they turn visitors into client enquiries.' },
]

export const processSteps = [
  { number: '01', title: 'Discovery', description: 'We start with a WhatsApp conversation about your brand, goals and vision for the project.' },
  { number: '02', title: 'Concept', description: 'I craft clean, brand-focused design concepts and share them with you for feedback.' },
  { number: '03', title: 'Refine', description: 'We refine the chosen direction together through clear, focused revision rounds.' },
  { number: '04', title: 'Deliver', description: 'You receive polished, production-ready designs or a built, optimised website — ready to launch.' },
]

export const faqs = [
  { question: 'How do I get started with a project?', answer: 'Simply message me on WhatsApp using the button on this page. Share a quick brief about your brand and what you need, and I will guide you through the next steps personally.' },
  { question: 'How long does a typical project take?', answer: 'Social media designs are usually delivered within 1–3 days. Landing pages and websites typically take 3–7 days depending on scope. AI-assisted development helps keep timelines short without compromising quality.' },
  { question: 'Do you offer revisions?', answer: 'Yes. Every package includes revisions so we can refine the work until it feels right for your brand. Additional revisions beyond the included amount are available at a small fee.' },
  { question: 'What is AI-assisted website development?', answer: 'It is a modern approach where AI tools accelerate the build process — handling repetitive coding tasks quickly — while I direct the design, structure and quality. You get a custom, production-ready website delivered faster and more affordably.' },
  { question: 'How do payments work?', answer: 'Payments are discussed over WhatsApp before the project begins. Typically a small deposit secures your slot, with the balance due on delivery. Details are always agreed upfront — no surprises.' },
  { question: 'Can you work with my existing brand identity?', answer: 'Absolutely. If you already have a logo, colours or brand guidelines, I will design everything to match. If not, I can help establish a clean, consistent visual identity from scratch.' },
]

export const budgetOptions = ['Under $100', '$100 – $250', '$250 – $500', '$500 – $1,000', '$1,000+']

export const stats = [
  { value: '4+', label: 'Design Disciplines' },
  { value: '100%', label: 'Brand-Focused' },
  { value: 'Fast', label: 'AI-Assisted Delivery' },
  { value: '1:1', label: 'Direct Founder Support' },
]
