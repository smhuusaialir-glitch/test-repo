import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { serviceProcedures, services } from '@/lib/site-data'

export function generateStaticParams() {
  return Object.keys(serviceProcedures).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((p) => {
    const procedure = serviceProcedures[p.slug]
    if (!procedure) return {}
    return {
      title: `${procedure.title} : How It Works`,
      description: procedure.intro,
    }
  })
}

export default function ServiceProcedurePage({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((p) => {
    const procedure = serviceProcedures[p.slug]
    if (!procedure) notFound()

    const service = services.find((s) => s.slug === p.slug)

    return (
      <main className="pt-24">
        <article className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4" />
            Back to services
          </Link>

          {/* Header */}
          <header className="mt-6 border-b border-white/10 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Service</p>
            <h1 className="mt-3 max-w-4xl text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {procedure.title}
            </h1>
            <p className="mt-2 text-base font-semibold text-champagne">{procedure.tagline}</p>
            <p className="mt-3 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground">
              {procedure.intro}
            </p>
            {service?.image && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={service.image}
                  alt={`${procedure.title} : visual`}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            )}
          </header>

          {/* Sections */}
          <section className="mt-10 max-w-5xl space-y-8">
            {procedure.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-xl font-bold text-foreground">{section.heading}</h2>
                <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">{section.body}</p>
              </div>
            ))}
          </section>

          {/* Outcomes */}
          <section className="mt-10 max-w-5xl rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.05] to-transparent p-6 sm:p-7">
            <h2 className="font-heading text-xl font-bold text-foreground">What you get</h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {procedure.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2.5} />
                  <span className="text-foreground/90">{outcome}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-10 max-w-5xl border-t border-white/10 pt-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Ready to start?</h2>
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
    )
  })
}
