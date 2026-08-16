import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { testimonials } from '@/lib/site-data'

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 border-y border-white/5 bg-secondary/20 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="Client perspective"
          title={<>What the client <span className="text-gold-gradient">actually said</span></>}
          description="One real quote, not a wall of five-star avatars. More references available on request."
        />
        {/* Asymmetric: large quote, offset left, with a hand-placed mark.
            Not a centered glassmorphism card. */}
        <figure className="mx-auto mt-12 max-w-3xl border-l-2 border-gold/40 bg-gradient-to-br from-gold/[0.05] to-transparent p-8 sm:p-12">
          <Quote className="size-9 text-gold/60" strokeWidth={1.2} />
          <blockquote className="mt-6 font-heading text-2xl leading-snug text-foreground sm:text-[1.75rem] sm:leading-snug">
            “{testimonials[0].quote}”
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3 text-sm">
            <span className="size-2 rounded-full bg-gold" />
            <span className="font-semibold text-foreground">{testimonials[0].name}</span>
            <span className="text-muted-foreground">— {testimonials[0].role}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
