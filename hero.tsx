'use client'

import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { company, stats } from '@/lib/site-data'

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-gold/5 blur-[100px]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold animate-fade-up">
            <span className="size-1.5 rounded-full bg-gold" />
            Premium Design Studio
          </div>
          <h1 className="mt-8 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground animate-fade-up sm:text-6xl lg:text-7xl" style={{ animationDelay: '0.1s' }}>
            Design that makes<br />your brand feel <span className="text-gold-gradient italic">unforgettable</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground animate-fade-up sm:text-xl" style={{ animationDelay: '0.2s' }}>
            I&apos;m Hussain Ali — creating modern websites and graphic design for businesses and brands. From a focused landing page to a complete visual direction, I make your business look professional and communicate with confidence.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row" style={{ animationDelay: '0.3s' }}>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-3.5 text-base font-semibold text-black transition-transform hover:scale-[1.03]">
              Start a Project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-gold/40 hover:text-gold">
              <InstagramIcon className="size-4" />
              View My Work
            </a>
          </div>
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 animate-fade-up sm:grid-cols-4" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background/40 px-4 py-6 text-center">
                <div className="font-heading text-2xl font-bold text-gold sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
