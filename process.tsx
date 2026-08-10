import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { processSteps } from '@/lib/site-data'

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Process" title={<>A simple path from <span className="text-gold-gradient">idea to launch</span></>} description="A clear, collaborative process designed to keep things smooth, transparent and focused on results." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
              <div className="relative h-full rounded-3xl border border-white/10 bg-card p-7">
                <span className="font-heading text-5xl font-bold text-gold/20">{step.number}</span>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                {i < processSteps.length - 1 && <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gold/30 lg:block" />}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
