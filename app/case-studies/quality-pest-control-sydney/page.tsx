import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import { caseStudies } from '@/lib/site-data'

export const metadata = {
  title: 'Case Study | Quality Pest Control Sydney',
  description: 'A complete business website redesign for a Sydney pest control company, replacing an outdated site with a fast, professional, mobile-first online presence built to convert visitors into phone enquiries.',
}

export default function QualityPestControlCaseStudy() {
  const cs = caseStudies['quality-pest-control-sydney']

  return (
    <>
      <main className="pt-24">
        <article className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>

          {/* Header */}
          <header className="mt-6 border-b border-white/10 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{cs.category}</p>
            <h1 className="mt-3 max-w-4xl text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {cs.client}
            </h1>
            <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              {cs.summary}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href={cs.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                View live site
                <ExternalLink className="size-4" />
              </a>
              <span className="text-sm text-muted-foreground">{cs.project}</span>
            </div>
          </header>

          {/* Challenge */}
          <section className="mt-10 max-w-5xl">
            <h2 className="font-heading text-xl font-bold text-foreground">The challenge</h2>
            <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">{cs.challenge}</p>
          </section>

          {/* Approach */}
          <section className="mt-10 max-w-5xl">
            <h2 className="font-heading text-xl font-bold text-foreground">The approach</h2>
            <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">{cs.approach}</p>
          </section>

          {/* Solution */}
          <section className="mt-10 max-w-5xl">
            <h2 className="font-heading text-xl font-bold text-foreground">The solution</h2>
            <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">{cs.solution}</p>
          </section>

          {/* Detailed sections */}
          <section className="mt-10 max-w-5xl space-y-6">
            {cs.sections.map((section) => (
              <div key={section.heading}>
                <h3 className="font-heading text-lg font-bold text-foreground">{section.heading}</h3>
                <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">{section.body}</p>
              </div>
            ))}
          </section>

          {/* Results */}
          <section className="mt-10 max-w-5xl rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.05] to-transparent p-6 sm:p-7">
            <h2 className="font-heading text-xl font-bold text-foreground">Results</h2>
            <ul className="mt-4 space-y-2.5">
              {cs.results.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2.5} />
                  <span className="text-sm leading-relaxed text-foreground/90">{result}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Features */}
          <section className="mt-10 max-w-5xl">
            <h2 className="font-heading text-xl font-bold text-foreground">What was built</h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {cs.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2.5} />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tech stack */}
          <section className="mt-10 max-w-5xl">
            <h2 className="font-heading text-xl font-bold text-foreground">Tech stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {cs.techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-card px-3.5 py-1.5 text-sm text-foreground/80">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-10 border-t border-white/10 pt-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Want a site like this?</h2>
                <p className="mt-1.5 max-w-md text-sm text-muted-foreground">
                  Tell me about your business and I&apos;ll come back with a direction and a quote.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                Start a project
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
