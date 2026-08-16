import { SectionHeading } from '@/components/section-heading'
import { processSteps } from '@/lib/site-data'

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title={<>From first message to <span className="text-gold-gradient">live</span></>}
          description="Six steps. You always know which step we're on, what's next, and what I need from you."
        />

        {/* Vertical timeline — a different structural shape from the card grids.
            A single ruled line with offset entries, not a row of identical cards. */}
        <ol className="mt-14 relative border-l border-gold/25 pl-8 sm:pl-12">
          {processSteps.map((step, i) => (
            <li key={step.number} className={`relative ${i === processSteps.length - 1 ? 'pb-0' : 'pb-12'}`}>
              {/* Node on the rule — the number sits on the line, not in a card */}
              <span
                className="absolute -left-[2.6rem] flex size-12 items-center justify-center rounded-full border border-gold/40 bg-background font-heading text-lg font-bold text-gold tabular-nums sm:-left-[3.4rem] sm:size-14 sm:text-xl"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">{step.title}</h3>
              <p className="mt-2.5 max-w-xl text-base leading-relaxed text-muted-foreground">{step.description}</p>

              {/* A small hand-placed mark between entries — not on the last one */}
              {i < processSteps.length - 1 && (
                <span className="mt-6 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold/40">
                  <span className="h-px w-6 bg-gold/30" />
                  then
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
