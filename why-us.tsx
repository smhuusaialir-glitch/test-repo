import { SectionHeading } from '@/components/section-heading'
import { whyChooseMe } from '@/lib/site-data'

export function WhyUs() {
  return (
    <section id="why-me" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="Why work with me"
          title={<>Six things that are <span className="text-gold-gradient">actually true</span></>}
          description="Not a list of adjectives. These are the things that are different about working with a solo designer versus an agency or a template marketplace."
        />

        {/* Converted from 3 identical cards to an editorial list with large numbers.
            Alternating alignment so no two rows look structurally identical. */}
        <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
          {whyChooseMe.map((item, i) => {
            const flip = i % 2 === 1
            return (
              <div
                key={item.title}
                className={`group grid gap-5 py-9 sm:grid-cols-12 sm:items-start ${flip ? 'sm:[direction:rtl]' : ''}`}
              >
                {/* Large number — the structural anchor, replaces the identical icon badge */}
                <div className="sm:col-span-2 sm:[direction:ltr]">
                  <span className="font-heading text-5xl font-bold text-gold/25 tabular-nums sm:text-6xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title + description take the wider column */}
                <div className="sm:col-span-9 sm:[direction:ltr]">
                  <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">{item.title}</h3>
                  <p className="mt-2.5 max-w-xl text-base leading-relaxed text-muted-foreground">{item.description}</p>
                </div>

                {/* A small hand-placed mark on the right — a dot, not an icon */}
                <div className="hidden sm:col-span-1 sm:flex sm:justify-end sm:[direction:ltr]">
                  <span className="mt-2 size-1.5 rounded-full bg-gold/50 transition-colors group-hover:bg-gold" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
