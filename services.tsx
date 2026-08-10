import { Camera, Globe, Rocket, Sparkles, ArrowUpRight, Check, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { ServiceVisual } from '@/components/service-visual'
import { services } from '@/lib/site-data'

const iconMap: Record<string, LucideIcon> = { Camera, Globe, Rocket, Sparkles }

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title={<>Everything your brand needs to <span className="text-gold-gradient">look premium</span></>}
          description="Four focused services, each crafted to make your business stand out and convert — from a single post to a full website."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles
            return (
              <Reveal key={service.title} delay={i * 80}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card transition-all duration-300 hover:border-gold/30 hover:-translate-y-1">
                  {/* Visual header */}
                  <div className="relative h-44 overflow-hidden border-b border-white/10">
                    <ServiceVisual icon={service.icon} className="h-full w-full" />
                    <div className="absolute left-5 top-5 flex size-12 items-center justify-center rounded-2xl border border-gold/30 bg-background/80 text-gold backdrop-blur-md transition-colors group-hover:bg-gold-gradient group-hover:text-black">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-heading text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="mt-1.5 text-sm font-semibold text-gold">{service.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

                    <ul className="mt-5 space-y-2.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm">
                          <Check className="size-4 shrink-0 text-gold" strokeWidth={2.5} />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center justify-between gap-2 rounded-full border border-gold/30 bg-gold/5 px-5 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold-gradient hover:text-black"
                    >
                      {service.cta}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Bottom persuasive banner */}
        <Reveal className="mt-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gold/20 bg-gradient-to-r from-gold/10 via-card to-card p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Not sure which service fits your business?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Send me a message on WhatsApp — I&apos;ll recommend the right approach for your brand and budget. No pressure, no obligation.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Get a Free Recommendation
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
