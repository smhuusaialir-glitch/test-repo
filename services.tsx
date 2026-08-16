import Image from 'next/image'
import { Camera, Globe, Rocket, Sparkles, Palette, ArrowUpRight, Check, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { services } from '@/lib/site-data'

const iconMap: Record<string, LucideIcon> = { Camera, Globe, Rocket, Sparkles, Palette }

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-secondary/30 py-20 lg:pt-14 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="Services"
          title={<>What I actually build<span className="text-gold">.</span></>}
          description="Five focused services. Each one starts from a blank file and is shaped around your business — not pulled from a folder of starter themes."
        />

        <div className="mt-14 space-y-10 lg:space-y-14">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles
            const hasImage = Boolean(service.image)
            // Alternate image side for visual rhythm — but only for image services
            const imageLeft = hasImage && i % 2 === 0

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden border border-white/10 bg-card"
              >
                {hasImage ? (
                  /* Image + text service: both columns stretch to the same height,
                     image fills the full column, text is vertically centered. */
                  <div className="grid items-stretch lg:grid-cols-2">
                    {/* Image side */}
                    <div className={`relative h-full min-h-[320px] overflow-hidden lg:min-h-full ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                      <Image
                        src={service.image!}
                        alt={`${service.title} — visual`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                      {/* Icon badge over the image — solid, no glassmorphism */}
                      <div className="absolute left-5 top-5 flex size-11 items-center justify-center border border-gold/30 bg-background text-gold transition-colors group-hover:bg-gold group-hover:text-black">
                        <Icon className="size-5" strokeWidth={1.6} />
                      </div>
                    </div>

                    {/* Text side */}
                    <div className={`flex flex-col justify-center p-7 sm:p-9 ${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                      <h3 className="font-heading text-2xl font-bold text-foreground">{service.title}</h3>
                      <p className="mt-1.5 text-sm font-semibold text-champagne">{service.tagline}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                      <ul className="mt-5 space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-sm">
                            <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2.5} />
                            <span className="text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        className="mt-6 inline-flex items-center justify-between gap-2 self-start rounded-full border border-gold/30 bg-gold/5 px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-black"
                      >
                        {service.cta}
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Text-only service (Landing Pages) — clean, no image, "one page, one job" */
                  <div className="flex flex-col p-7 sm:p-9">
                    <div className="flex items-center gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center border border-gold/30 bg-background text-gold transition-colors group-hover:bg-gold group-hover:text-black">
                        <Icon className="size-5" strokeWidth={1.6} />
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-foreground">{service.title}</h3>
                    </div>
                    <p className="mt-4 text-sm font-semibold text-champagne">{service.tagline}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm">
                          <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2.5} />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center justify-between gap-2 self-start rounded-full border border-gold/30 bg-gold/5 px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-black"
                    >
                      {service.cta}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* Bottom banner — different shape from the cards above */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-l-2 border-gold/40 bg-gradient-to-r from-gold/[0.06] to-transparent p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground">
              Not sure which service fits?
            </h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Send me a message on WhatsApp with a sentence about your business. I&apos;ll tell you which service actually fits — and which one doesn&apos;t.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            Get a recommendation
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
