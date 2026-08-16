import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { PortfolioVisual } from '@/components/portfolio-visual'
import { SectionHeading } from '@/components/section-heading'
import { portfolio, company } from '@/lib/site-data'

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 py-20 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="Portfolio"
          title={<>Selected <span className="text-gold-gradient">work</span></>}
          description="A small set of recent projects. Each one was built from a blank file — no recycled layout, no stock template dressed up."
        />

        {/* 2-column grid so every image is large and the whole artwork is visible. */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {portfolio.map((item, i) => (
            <article key={`${item.title}-${i}`} className="group border border-white/10 bg-card">
              {/* Image box — same aspect, object-contain so the whole artwork shows */}
              <figure className="relative aspect-[4/3] w-full bg-secondary/30">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.category}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <PortfolioVisual category="Website Design" className="h-full w-full" />
                )}
              </figure>

              {/* Text outside the image, never overlapping */}
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{item.category}</p>
                <h3 className="mt-1 font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-champagne"
                  >
                    View live site
                    <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-gold/30 pl-5">
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
