import { SectionHeading } from '@/components/section-heading'
import { processSteps } from '@/lib/site-data'

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-secondary/30 py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title={<>From first message to <span className="text-gold-gradient">live</span></>}
          description="Six steps. You always know which step we're on, what's next, and what I need from you."
        />

        {/* Two-column process: number on the left, content on the right — no overlap. */}
        <ol className="mt-10 space-y-8">
          {processSteps.map((step, i) => (
            <li key={step.number} className="grid gap-4 sm:grid-cols-[4rem_1fr] sm:items-start">
              {/* Number in its own column, never touching the heading */}
              <span className="flex size-12 items-center justify-center rounded-full border border-gold/40 bg-background font-heading text-lg font-bold text-gold tabular-nums">
                {step.number}
              </span>

              <div>
                <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">{step.title}</h3>
                <p className="mt-2.5 max-w-xl text-base leading-relaxed text-muted-foreground">{step.description}</p>

                {/* A small hand-placed mark between entries */}
                {i < processSteps.length - 1 && (
                  <span className="mt-5 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold/40">
                    <span className="h-px w-6 bg-gold/30" />
                    then
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
