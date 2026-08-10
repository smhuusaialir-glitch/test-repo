import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { PortfolioVisual } from '@/components/portfolio-visual'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { portfolio, company } from '@/lib/site-data'

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Portfolio" title={<>Selected <span className="text-gold-gradient">design work</span></>} description="A curated selection of recent projects. Quality over quantity — every piece is crafted with the same premium, brand-focused approach." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <Reveal key={`${item.title}-${i}`} delay={(i % 3) * 80}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-card">
                {item.image ? (
                  <>
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
                  </>
                ) : (
                  <div className="relative h-full w-full">
                    <PortfolioVisual category={item.category} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="flex size-16 items-center justify-center rounded-full border border-gold/30 bg-background/60 text-gold backdrop-blur-sm">
                        <Sparkles className="size-6" strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                )}
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">{item.category}</p>
                  <p className="mt-1 font-heading text-lg font-bold text-foreground">{item.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            See more work on Instagram{' '}
            <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-gold transition-colors hover:text-gold-soft">
              {company.instagramHandle}
              <InstagramIcon className="size-3.5" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
