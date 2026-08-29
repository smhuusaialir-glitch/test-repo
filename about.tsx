import Image from 'next/image'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { company } from '@/lib/site-data'

const points = [
  'Every project starts from a blank file',
  'You talk to me — the person doing the work',
  'A six-step process, not a black box',
  'Built for the phone first, expanded to desktop',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Asymmetric: image and text stretch to the same height, like the service cards. */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="relative h-full min-h-[300px] lg:col-span-5">
            {/* Creative environment image — fills the full text column height */}
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
              <Image
                src="/images/about-creative.jpg"
                alt="A digital design creative environment with design work on screen"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
            {/* Name plate — solid, offset and slightly off the card edge */}
            <div className="absolute -bottom-4 -right-3 border border-gold/30 bg-background px-5 py-3 sm:-right-5">
              <p className="font-heading text-sm font-bold text-gold">Hussain Ali</p>
              <p className="text-xs text-muted-foreground">Founder &amp; Designer</p>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7">
            <SectionHeading
              align="left"
              eyebrow="About"
              title={<>A studio of one, <span className="text-gold-gradient">on purpose</span></>}
              description="Hussain Designs is the creative practice of Hussain Ali — a visual and web designer who works alone, by choice."
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              I help brands build websites, social content and brand visuals that feel like they belong to one
              business — not a template someone else is also using. Every concept
              is drawn around your identity, refined through direct conversation with me, and delivered with the files
              actually organised.
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
            <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:gap-4">
              <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gold transition-colors hover:text-champagne">{company.instagramHandle}</a>
              <span className="text-sm text-muted-foreground">{company.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
