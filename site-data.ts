export const company = {
  name: 'Hussain Designs',
  founder: 'Hussain Ali',
  tagline: 'Modern websites and visual design for businesses and brands',
  description:
    'Hussain Designs is the creative practice of Hussain Ali, a solo designer building websites, landing pages, social content and brand visuals for businesses and service companies.',
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
  slug: string
}

export const services: Service[] = [
  {
    icon: 'Globe',
    title: 'Website Design & Development',
    tagline: 'A real home for your business online.',
    description: 'Responsive business websites built with a clear page structure, legible typography and layouts that hold up on a phone, tablet and desktop. Hand-coded, not a page builder.',
    features: ['Custom page layouts, no recycled templates', 'Responsive build tested on real devices', 'Content structured around what you actually offer', 'Deployment to your domain, handled'],
    cta: 'Plan my business website',
    image: '/images/service-website.jpg',
    slug: 'website-design',
  },
  {
    icon: 'Palette',
    title: 'Graphic Design',
    tagline: 'Visuals that say what you mean.',
    description: 'Posters, flyers and promotional artwork for campaigns and day-to-day business use, drawn around your existing colours and type, not dropped onto a stock layout.',
    features: ['Posters and promotional graphics', 'Print-ready artwork at correct bleed and DPI', 'Visual direction built from your brand', 'Files organised for handoff, not a flat export'],
    cta: 'Discuss a graphic project',
    image: '/images/service-graphic.jpg',
    slug: 'graphic-design',
  },
  {
    icon: 'Camera',
    title: 'Social Media Design',
    tagline: 'A feed that reads as one body of work.',
    description: 'Posts, carousels, AI-generated videos and reusable templates so your feed stops looking like ten different designers made it. Built around a consistent grid, type pair and colour set.',
    features: ['Single posts and multi-slide carousels', 'AI video creation for reels and shorts', 'Editable templates your team can reuse', 'Feed direction, what goes next to what'],
    cta: 'Improve my social presence',
    image: '/images/service-social.jpg',
    slug: 'social-media-design',
  },
  {
    icon: 'Sparkles',
    title: 'Branding / Visual Design',
    tagline: 'The pieces that make you recognisable.',
    description: 'Logo direction, colour and type choices, and a small set of usage rules, enough to keep your business looking like one business across every touchpoint.',
    features: ['Logo direction with layout variants', 'Colour and type pairing, documented', 'A short brand system, not a 60-page deck', 'Exported assets ready to drop into anything'],
    cta: 'Shape my brand identity',
    image: '/images/service-branding.jpg',
    slug: 'branding',
  },
  {
    icon: 'Rocket',
    title: 'Landing Pages',
    tagline: 'One page, one job.',
    description: 'A single focused page for a launch, a service or an ad campaign, built to carry one message clearly and point the reader at one action.',
    features: ['Structure written around a single conversion goal', 'One clear call to action, repeated where it helps', 'Mobile-first, because that is where it loads', 'Lightweight build, fast even on slow data'],
    cta: 'Build my landing page',
    image: '/images/service-landing.jpg',
    slug: 'landing-pages',
  },
]

export interface ServiceProcedureSection {
  heading: string
  body: string
}

export interface ServiceProcedure {
  slug: string
  title: string
  tagline: string
  intro: string
  sections: ServiceProcedureSection[]
  outcomes: string[]
}

export const serviceProcedures: Record<string, ServiceProcedure> = {
  'website-design': {
    slug: 'website-design',
    title: 'Website Design & Development',
    tagline: 'A real home for your business online.',
    intro: 'A website is not a brochure, it is the first place a potential customer goes to decide if they trust you. Here is how I build one that actually does the job.',
    sections: [
      {
        heading: 'Why your business needs a proper website',
        body: 'Social media is rented space. You do not own the platform, the algorithm, or the reach. A website is the one place online where you control the message, the layout, and the experience, completely. When someone searches for your business, the website is what tells them you are real, credible, and professional. Without one, you are leaving that first impression to a Facebook page or an Instagram bio.',
      },
      {
        heading: 'How I improve your existing website',
        body: 'If you already have a website that is slow, outdated, or hard to navigate on mobile, I rebuild it from the ground up. I audit your current content, restructure it around what your customers actually need to know, and design a clean, fast, responsive layout that works on every device. No page builder, no heavy framework, just hand-coded pages that load fast and read clearly.',
      },
      {
        heading: 'How we work together',
        body: 'Discovery call to understand your business and audience. I come back with a written direction, page structure, type, colour, content hierarchy. You approve it before any pixel is drawn. I build the site, you review it, we refine it over two revision rounds, and I deploy it to your domain with handover notes. You are never left guessing what stage the project is at.',
      },
    ],
    outcomes: [
      'A fast, professional website you own and control',
      'Mobile-first design that works on every device',
      'Clear content structure around what you actually offer',
      'Deployed to your domain with SEO metadata configured',
    ],
  },
  'graphic-design': {
    slug: 'graphic-design',
    title: 'Graphic Design',
    tagline: 'Visuals that say what you mean.',
    intro: 'Good graphic design is not decoration, it is communication. Here is how I create visuals that actually carry your message.',
    sections: [
      {
        heading: 'Why professional visuals matter',
        body: 'People judge a business by how it looks before they read a single word. A poster, a flyer, or a social graphic that is poorly laid out tells the viewer you cut corners. Professional visuals communicate that you take your business seriously, and by extension, you will take their project seriously too.',
      },
      {
        heading: 'How I build visuals from your brand',
        body: 'I do not start from a stock template. I start from your brand, your colours, your type, your tone. Every piece is drawn around your identity so the set reads as one body of work, not a collection of unrelated downloads. Print artwork is delivered at correct bleed and DPI, ready for the printer. Digital artwork is exported in the right formats for every platform.',
      },
      {
        heading: 'How we work together',
        body: 'You tell me what the piece is for and who it needs to reach. I come back with a direction, layout, colour, type. You approve, I build the final artwork, and we refine over two revision rounds. Files are delivered organised and labelled, not as a flat export dumped in a folder.',
      },
    ],
    outcomes: [
      'Print-ready artwork at correct bleed and DPI',
      'Visuals built from your brand, not a stock template',
      'Organised, labelled files for clean handoff',
      'A consistent visual language across every piece',
    ],
  },
  'social-media-design': {
    slug: 'social-media-design',
    title: 'Social Media Design',
    tagline: 'A feed that reads as one body of work.',
    intro: 'Your feed is the first thing a potential follower sees. Here is how I make it look like one business, not ten different designers.',
    sections: [
      {
        heading: 'Why your feed needs a consistent system',
        body: 'A feed that looks like ten different designers made it tells the viewer you do not have a brand. A consistent grid, type pair, and colour set tells them you are organised, intentional, and worth following. The visuals you post are a direct reflection of how you run your business, make them look like they belong together.',
      },
      {
        heading: 'How I use AI video to boost your content',
        body: 'AI-generated video is now a serious tool for reels, shorts, and social content. I create AI videos that fit your brand, motion graphics, animated text, visual effects, and short-form video content that sits naturally next to your static posts. This is not generic AI output; each video is directed around your colour palette, type, and message so it reads as part of your feed, not a random clip.',
      },
      {
        heading: 'How we work together',
        body: 'I audit your current feed and come back with a visual direction, grid system, type pair, colour set, and content formats. You approve the direction. I build posts, carousels, AI videos, and editable templates your team can reuse. We refine over two revision rounds, and you receive a content set that is ready to schedule.',
      },
    ],
    outcomes: [
      'A consistent feed that reads as one brand',
      'AI-generated videos for reels and shorts',
      'Editable templates your team can reuse',
      'A clear grid system and visual direction',
    ],
  },
  'branding': {
    slug: 'branding',
    title: 'Branding / Visual Design',
    tagline: 'The pieces that make you recognisable.',
    intro: 'A brand is not a logo, it is the set of rules that keep you looking like one business everywhere. Here is how I build one.',
    sections: [
      {
        heading: 'Why you need a brand system',
        body: 'Without a brand system, every touchpoint, your website, your social posts, your business card, your flyer, looks slightly different. Over time, this erodes recognition. A brand system keeps your colours, type, and logo usage consistent across every platform, so a customer recognises you instantly, wherever they encounter you.',
      },
      {
        heading: 'How I shape your identity',
        body: 'I do not deliver a 60-page brand book nobody will read. I deliver a short, practical system, logo direction with variants, a colour palette, a type pairing, and a few usage rules that are easy to follow. Enough to keep you consistent, not so much that it becomes a document that sits in a folder and is never opened.',
      },
      {
        heading: 'How we work together',
        body: 'Discovery to understand your business, audience, and where you appear online. I come back with two or three logo directions and a colour/type pairing. You pick one, I refine it, and we lock the system. Assets are exported and organised, ready to drop into your website, social posts, and print materials.',
      },
    ],
    outcomes: [
      'Logo direction with layout variants',
      'A practical brand system, not a 60-page deck',
      'Colour and type pairing, documented',
      'Exported assets ready for any platform',
    ],
  },
  'landing-pages': {
    slug: 'landing-pages',
    title: 'Landing Pages',
    tagline: 'One page, one job.',
    intro: 'A landing page is not a homepage, it is a single page built to do one thing. Here is how I build one that converts.',
    sections: [
      {
        heading: 'Why a landing page is different from a website',
        body: 'Your website presents your whole business. A landing page presents one offer, one launch, or one campaign, and it exists to drive one action. Whether you are running ads, launching a product, or promoting a service, a focused landing page converts better than sending traffic to a homepage where the visitor gets lost in navigation.',
      },
      {
        heading: 'How I build a page that converts',
        body: 'I start from the conversion goal, what do you want the visitor to do? Every section is then structured around that single action. One clear call to action, repeated where it helps. Mobile-first, because that is where most of your traffic loads. Lightweight build, so the page is fast even on slow data. No distractions, no unnecessary sections, no wasted space.',
      },
      {
        heading: 'How we work together',
        body: 'You tell me the goal, sign-ups, sales, enquiries, downloads. I come back with a page structure written around that goal. You approve, I build it, we refine over two revision rounds, and I deploy it. The page is lightweight, fast, and focused on one job.',
      },
    ],
    outcomes: [
      'A page built around one conversion goal',
      'Mobile-first, lightweight, fast-loading',
      'One clear call to action, no distractions',
      'Deployed and ready to receive traffic',
    ],
  },
}

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
  { title: 'Brand Poster Series', category: 'Graphic Design', image: '/images/work-1.png', description: 'A poster series for a campaign, one visual language carried across four formats so the set reads as one piece, not four separate jobs.' },
  { title: 'Real Estate Campaign', category: 'Social Media Design', image: '/images/work-2.png', description: 'Listing graphics for a property campaign. Property details, price and contact laid out so a viewer on a phone can read them in three seconds.' },
  { title: 'Product Launch Creative', category: 'Branding / Visual Design', image: '/images/work-3.png', description: 'A launch visual that ties product photography, type and colour into one composition, used across the announcement and the sales page.' },
]

export const caseStudies: Record<string, CaseStudy> = {
  'quality-pest-control-sydney': {
    slug: 'quality-pest-control-sydney',
    client: 'Quality Pest Control Sydney',
    project: 'Business Website Design & Development',
    category: 'Website Design & Development',
    liveUrl: 'https://5055fd19.quality-pest-control-sydney.pages.dev',
    summary: 'A complete website redesign for a Sydney pest control company, replacing an outdated site with a fast, professional, mobile-first presence built to convert visitors into phone enquiries.',
    challenge: 'The client\'s old website was outdated, slow, hard to navigate on mobile, and buried the phone number. In a market full of generic templated sites, they needed a credible, modern presence that made it effortless for stressed homeowners to pick up the phone and call.',
    approach: 'Discovery conversation to understand services and audience. The old site\'s content was audited and restructured, not copied. Design built mobile-first, since most people searching for pest control are on their phone. Every page structured around one goal: get the visitor to call.',
    solution: 'A hand-coded, responsive website with a clean, professional design. Homepage leads with a clear value proposition and prominent call-to-action. Service pages answer what the pest is, how it\'s treated, and why to call now. Lightweight build, no page builders, no heavy frameworks.',
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
      'Lightweight build, no page builder',
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
        body: 'Hand-coded, no page builder, no heavy framework. Each service page built as a standalone, SEO-optimised page with its own meta data. Sticky header with the phone number on mobile so it\'s always one tap away.',
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
  { icon: 'Globe', name: 'Website Design & Development', description: 'Responsive websites built around your actual services and content, hand-coded, not a page builder.', tiers: [{ name: 'Starter', price: '$350+' }, { name: 'Professional', price: '$750+' }, { name: 'Premium', price: '$1,250+' }], features: ['Custom design and development', 'Responsive layouts tested on devices', 'Content structured around your offer', 'Deployment to your domain'], featured: true },
  { icon: 'Palette', name: 'Graphic Design', description: 'Posters, flyers and promotional artwork drawn from your brand, not dropped on a stock layout.', tiers: [{ name: 'Starter', price: '$50+' }, { name: 'Professional', price: '$120+' }, { name: 'Premium', price: '$250+' }], features: ['Custom visual direction', 'Brand colours and type, applied', 'Print-ready files at correct bleed', 'Two agreed revision rounds'] },
  { icon: 'Camera', name: 'Social Media Design', description: 'Posts and carousels built around one consistent grid so your feed stops looking like ten designers made it.', tiers: [{ name: 'Single Design', price: '$35+' }, { name: '5 Designs', price: '$150+' }, { name: '10 Designs', price: '$275+' }], features: ['Custom post and carousel design', 'One visual system across the set', 'Feed-ready exports', 'Agreed revision rounds'] },
  { icon: 'Sparkles', name: 'Branding / Visual Design', description: 'Logo direction, colour and type, enough to keep you looking like one business everywhere.', tiers: [{ name: 'Starter', price: '$150+' }, { name: 'Professional', price: '$300+' }, { name: 'Premium', price: '$500+' }], features: ['Logo direction with variants', 'Colour and type pairing, documented', 'A short brand system, not a 60-page deck', 'Assets ready to drop into anything'] },
  { icon: 'Rocket', name: 'Landing Pages', description: 'A single focused page for a launch, a service or an ad campaign. Priced per project, one page, one job.', tiers: [], features: ['Structure written around one conversion goal', 'One clear call to action', 'Mobile-first, lightweight build', 'Fast even on slow data'], customQuoted: true },
]

export const whyChooseMe = [
  { icon: 'Award', title: 'No recycled templates', description: 'Every project starts from a blank file. The layout, type and colour choices come from your business and your audience, not a folder of starter themes.' },
  { icon: 'Zap', title: 'A process you can actually follow', description: 'Discovery, direction, design, build, review, launch. You see where the work is at, what is next, and what I need from you at each step.' },
  { icon: 'Heart', title: 'Design that does a job', description: 'A website is not a decoration. Each layout is built to communicate what you offer and move the reader toward picking up the phone or sending a message.' },
  { icon: 'MessageCircle', title: 'You talk to the person doing the work', description: 'No account manager, no handoff to a junior. The person you brief is the person who opens the file and draws the layout.' },
  { icon: 'Smartphone', title: 'Built for the phone first', description: 'Most of your visitors arrive on a phone. The mobile layout is designed first, then expanded, not the other way around.' },
  { icon: 'TrendingUp', title: 'Working across time zones', description: 'Remote process, async updates, and a workflow that handles clients across different time zones without anyone waiting up at 2am.' },
]

export const processSteps = [
  { number: '01', title: 'Discovery', description: 'A call or a long message, whichever you prefer. You tell me what the business does, who it serves, what content you have, and what a good outcome looks like.' },
  { number: '02', title: 'Direction', description: 'I come back with a written direction: layout approach, type pairing, colour, and the page structure. We agree on it before any pixel is drawn.' },
  { number: '03', title: 'Design', description: 'Layouts and visual assets built against the agreed direction. You see real work, not a moodboard, and you see it early.' },
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

export const budgetOptions = ['Under $350', '$350 to $750', '$750 to $1,250', '$1,250+']

export const stats = [
  { value: 'Solo', label: 'Designer, no handoff' },
  { value: '1:1', label: 'You talk to me directly' },
  { value: '6 steps', label: 'Discovery to launch' },
  { value: 'Remote', label: 'Working worldwide' },
]
