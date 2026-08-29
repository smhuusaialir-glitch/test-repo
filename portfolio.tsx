import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { PortfolioVisual } from '@/components/portfolio-visual'
import { SectionHeading } from '@/components/section-heading'
import { portfolio, company } from '@/lib/site-data'

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="Portfolio"
          title={<>Selected <span className="text-gold-gradient">work</span></>}
          description="A small set of recent projects. Each one was built from a blank file — no recycled layout, no stock template dressed up."
        />

        {/* 2-column grid so every image is large and the whole artwork is visible. */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {portfolio.map((item, i) => (
            <article key={`${item.title}-${i}`} className="group flex h-full min-w-0 flex-col border border-white/10 bg-card">
              {/* Image box — 4:5 portrait, object-cover so every card is the same size */}
              <figure className="relative aspect-square w-full shrink-0 overflow-hidden bg-secondary/30">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.category}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <PortfolioVisual category="Website Design" className="h-full w-full" />
                )}
              </figure>

              {/* Text outside the image, never overlapping */}
              <div className="flex min-h-[250px] flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{item.category}</p>
                <h3 className="mt-1 font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-gold transition-colors hover:text-champagne"
                  >
                    View live site
                    <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-gold/30 pl-5">
          <p className="text-sm text-muted-foreground">
            More recent work lives on Instagram —{' '}
            <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-gold transition-colors hover:text-champagne">
              {company.instagramHandle}
              <InstagramIcon className="size-3.5" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
