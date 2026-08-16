import { Camera, Globe, Palette, Sparkles, Rocket, ArrowUpRight, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { pricing, company } from '@/lib/site-data'

const iconMap: Record<string, LucideIcon> = { Camera, Globe, Palette, Sparkles, Rocket }

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={<>Starting points, not <span className="text-gold-gradient">guesswork</span></>}
          description="Real starting prices for each service. Final cost depends on your scope — message me on WhatsApp with a sentence about the project and I'll come back with an exact quote."
        />

        {/* Converted from 4 identical cards to a list format with large index numbers.
            A different structural shape from the card grids used elsewhere. */}
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {pricing.map((plan, i) => {
            const Icon = iconMap[plan.icon] ?? Sparkles
            const featured = plan.featured
            return (
              <div
                key={plan.name}
                className={`group grid gap-6 py-8 sm:grid-cols-12 sm:items-start ${featured ? 'bg-gradient-to-r from-gold/[0.05] to-transparent' : ''}`}
              >
                {/* Large index number + icon — replaces the identical icon-badge card header */}
                <div className="flex items-center gap-4 sm:col-span-4">
                  <span className="font-heading text-4xl font-bold text-gold/30 tabular-nums sm:text-5xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`flex size-10 shrink-0 items-center justify-center border ${featured ? 'border-gold/40 bg-gold/10' : 'border-white/15 bg-white/5'} text-gold`}>
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                </div>

                {/* Name + description */}
                <div className="sm:col-span-5">
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-lg font-bold text-foreground">{plan.name}</h3>
                    {featured && (
                      <span className="rounded-full bg-gold-gradient px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-black">
                        Most booked
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
                </div>

                {/* Tiers as a compact inline list, not a bordered sub-card */}
                <div className="sm:col-span-3">
                  {plan.customQuoted ? (
                    <>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Pricing</p>
                      <p className="mt-2 font-heading text-lg font-bold text-gold">Custom-quoted</p>
                      <p className="mt-1 text-xs text-muted-foreground">Priced per project — tell me the goal and I&apos;ll come back with a number.</p>
                    </>
                  ) : (
                    <>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Starts at</p>
                      <div className="mt-2 space-y-1.5">
                        {plan.tiers.map((tier) => (
                          <div key={tier.name} className="flex items-baseline justify-between gap-3 text-sm">
                            <span className="text-foreground/70">{tier.name}</span>
                            <span className="font-heading font-bold text-gold">{tier.price}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${featured ? 'text-gold hover:text-champagne' : 'text-foreground/80 hover:text-gold'}`}
                  >
                    Get a quote
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-10 border-l-2 border-gold/30 pl-5 text-sm text-muted-foreground">
          Need something that doesn&apos;t fit these starting points?{' '}
          <a href="#contact" className="font-semibold text-gold transition-colors hover:text-champagne">Tell me what you&apos;re building</a>
          {' '}and I&apos;ll scope it properly.
        </p>
      </div>
    </section>
  )
}
