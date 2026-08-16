'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { company, stats } from '@/lib/site-data'

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Hand-placed diagonal rule as an anchoring mark — not a glow orb */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 hidden h-px w-1/4 rule-diagonal opacity-40 lg:block" />
        <div className="absolute right-8 top-28 hidden size-2 rounded-full bg-gold/60 lg:block" />
        <div className="absolute right-24 bottom-32 hidden size-1.5 rounded-full bg-champagne/50 lg:block" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Asymmetric two-column: text left, laptop image right.
            Items aligned to top so image tops line up with the headline top.
            Stacks on mobile with image below the content. */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            {/* Eyebrow with a hand-placed mark instead of a pill badge */}
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold/60" />
              <span>Hussain Ali</span>
              <span className="text-muted-foreground/60">—</span>
              <span className="text-champagne/80">Visual &amp; Web Design</span>
            </div>

            <h1 className="mt-7 text-balance text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
              Websites and visuals
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              built from <span className="text-gold-gradient italic">scratch.</span>
            </h1>

            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              I&apos;m Hussain — a solo designer working with small businesses and service companies.
              Websites, landing pages, social content and brand visuals. No page builder, no recycled
              template, no account manager between us.
            </p>

            {/* Asymmetric button row: primary left, secondary as a quiet text link */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-3.5 text-base font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                Start a Project
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-base font-medium text-foreground/80 transition-colors hover:text-gold"
              >
                <InstagramIcon className="size-4" />
                See the work on Instagram
                <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Hero laptop image — controlled 3:2 crop, never taller than text, top-aligned */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
              <Image
                src="/images/hero-laptop.jpg"
                alt="A laptop showing a designed website on screen"
                width={1408}
                height={768}
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Stats strip — centered */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 justify-items-center gap-x-8 gap-y-8 border-l-2 border-gold/30 pl-6 sm:grid-cols-4 sm:pl-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-2xl font-bold text-gold sm:text-[1.75rem]">{stat.value}</div>
              <div className="mt-1.5 text-xs leading-snug text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
