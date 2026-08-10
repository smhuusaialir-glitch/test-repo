import { Award, Zap, Heart, MessageCircle, Smartphone, TrendingUp, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { whyChooseMe } from '@/lib/site-data'

const iconMap: Record<string, LucideIcon> = { Award, Zap, Heart, MessageCircle, Smartphone, TrendingUp }

export function WhyUs() {
  return (
    <section id="why-me" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why Choose Me" title={<>A premium experience, <span className="text-gold-gradient">end to end</span></>} description="No agencies, no middlemen. Just thoughtful design, fast delivery and direct communication with the person building your brand." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseMe.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Award
            return (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="group h-full rounded-3xl border border-white/10 bg-card p-7 transition-all duration-300 hover:border-gold/30">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold transition-colors group-hover:bg-gold-gradient group-hover:text-black">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
