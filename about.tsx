import Image from 'next/image'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { company } from '@/lib/site-data'

const points = [
  'Clean, brand-focused design concepts',
  'Direct communication with the founder',
  'A clear process from direction to delivery',
  'Premium aesthetic on every project, big or small',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gold/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <Image src="/images/logo.png" alt="Hussain Designs — brand mark" width={1254} height={1254} className="aspect-square w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-3 rounded-2xl border border-gold/30 bg-background/90 px-5 py-3 backdrop-blur-md sm:-right-5">
                <p className="font-heading text-sm font-bold text-gold">Hussain Ali</p>
                <p className="text-xs text-muted-foreground">Founder &amp; Designer</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading align="left" eyebrow="About" title={<>A studio built on <span className="text-gold-gradient">clean design</span> and real conversations</>} description="Hussain Designs is the creative practice of Hussain Ali — a visual and web designer who believes great design should feel effortless, intentional and unmistakably premium." />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              I work with businesses to create social media content, websites and landing pages that look like they belong to a high-end brand — not a template. Every concept is built around your identity, refined through direct conversation, and delivered with care.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gold transition-colors hover:text-gold-soft">{company.instagramHandle}</a>
              <span className="text-sm text-muted-foreground">{company.location}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
