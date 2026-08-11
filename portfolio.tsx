import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { PortfolioVisual } from '@/components/portfolio-visual'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { portfolio, company } from '@/lib/site-data'

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Portfolio" title={<>Selected <span className="text-gold-gradient">Work</span></>} description="Selected work across websites, campaigns and visual design — each project shaped around clear communication and a polished brand experience." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <Reveal key={`${item.title}-${i}`} delay={(i % 3) * 80}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-card">
                {item.image ? (
                  <Image src={item.image} alt={`${item.title} — ${item.category}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                ) : (
                  <PortfolioVisual category="Website Design" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">{item.category}</p>
                  <p className="mt-1 font-heading text-lg font-bold text-foreground">{item.title}</p>
                  <p className="mt-2 max-w-sm text-xs leading-relaxed text-foreground/75">{item.description}</p>
                  {item.liveUrl && <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-background/70 px-3.5 py-2 text-xs font-semibold text-gold backdrop-blur-sm transition-colors hover:bg-gold-gradient hover:text-black">View Live Website <ArrowUpRight className="size-3.5" /></a>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Explore more selected work on Instagram{' '}
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
