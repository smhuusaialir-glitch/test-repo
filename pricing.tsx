import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { pricing, company } from '@/lib/site-data'

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-secondary/30 py-8 lg:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={<>Starting points, not <span className="text-gold-gradient">guesswork</span></>}
          description="Real starting prices for each service. Final cost depends on your scope — message me on WhatsApp with a sentence about the project and I'll come back with an exact quote."
        />

        {/* Clean list with a number, the service, and a clearly separated price block */}
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {pricing.map((plan, i) => {
            const featured = plan.featured
            return (
              <div
                key={plan.name}
                className={`grid gap-6 py-8 sm:grid-cols-12 sm:items-start ${featured ? 'bg-gradient-to-r from-gold/[0.05] to-transparent' : ''}`}
              >
                {/* Large index number */}
                <div className="sm:col-span-1">
                  <span className="font-heading text-4xl font-bold text-gold/30 tabular-nums sm:text-5xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Name + description */}
                <div className="sm:col-span-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-lg font-bold text-foreground">{plan.name}</h3>
                    {featured && (
                      <span className="rounded-full bg-gold-gradient px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-black">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price block — more space, separated by a thin gold rule on desktop */}
                <div className="sm:col-span-6 sm:border-l sm:border-gold/20 sm:pl-6">
                  {plan.customQuoted ? (
                    <>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Pricing</p>
                      <p className="mt-3 font-heading text-xl font-bold text-gold">Custom-quoted</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">Priced per project — tell me the goal and I&apos;ll come back with a number.</p>
                    </>
                  ) : (
                    <>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Starts at</p>
                      <div className="mt-3 space-y-2.5">
                        {plan.tiers.map((tier) => (
                          <div key={tier.name} className="flex items-baseline justify-between gap-4 text-sm">
                            <span className="text-foreground/70">{tier.name}</span>
                            <span className="font-heading text-base font-bold text-gold">{tier.price}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-champagne"
                  >
                    Get a quote
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-8 border-l-2 border-gold/30 pl-5 text-sm text-muted-foreground">
          Need something that doesn&apos;t fit these starting points?{' '}
          <a href="#contact" className="font-semibold text-gold transition-colors hover:text-champagne">Tell me what you&apos;re building</a>
          {' '}and I&apos;ll scope it properly.
        </p>
      </div>
    </section>
  )
}
