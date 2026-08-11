import { Camera, Globe, Palette, Sparkles, Check, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { pricing, company } from '@/lib/site-data'

const iconMap: Record<string, LucideIcon> = { Camera, Globe, Palette, Sparkles }

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Pricing" title={<>Simple, transparent <span className="text-gold-gradient">starting prices</span></>} description="Clear starting points for every service. Final pricing depends on your scope — message me on WhatsApp for an exact quote." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.map((plan, i) => {
            const Icon = iconMap[plan.icon] ?? Sparkles
            return (
              <Reveal key={plan.name} delay={i * 80}>
                <div className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${plan.featured ? 'border-gold/40 bg-card gold-glow' : 'border-white/10 bg-card hover:border-gold/20'}`}>
                  {plan.featured && <span className="absolute right-5 top-5 rounded-full bg-gold-gradient px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-black">Popular</span>}
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
                  <div className="mt-5 space-y-2 border-t border-white/10 pt-5">
                    {plan.tiers.map((tier) => (
                      <div key={tier.name} className="flex items-baseline justify-between gap-3">
                        <span className="text-sm text-foreground/80">{tier.name}</span>
                        <span className="font-heading text-xl font-bold text-gold">{tier.price}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2.5} />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all ${plan.featured ? 'bg-gold-gradient text-black hover:scale-[1.02]' : 'border border-white/15 bg-white/5 text-foreground hover:border-gold/40 hover:text-gold'}`}>
                    Get Started
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need something custom?{' '}
          <a href="#contact" className="font-semibold text-gold transition-colors hover:text-gold-soft">Let&apos;s discuss your project</a>
        </p>
      </div>
    </section>
  )
}
