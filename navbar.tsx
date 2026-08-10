'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { company, navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-500', scrolled ? 'border-b border-white/10 bg-background/85 backdrop-blur-xl' : 'border-b border-transparent bg-transparent')}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="#hero" aria-label={`${company.name} home`}>
          <Logo />
        </Link>
        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-gold">{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-4 xl:flex">
          <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]">
            Let&apos;s Talk
          </a>
        </div>
        <button type="button" onClick={() => setOpen((v) => !v)} className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground xl:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      <div className={cn('overflow-hidden border-white/10 bg-background/95 backdrop-blur-xl transition-[max-height] duration-300 ease-out xl:hidden', open ? 'max-h-[40rem] border-b' : 'max-h-0')}>
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-white/5 hover:text-gold">{link.label}</a>
            </li>
          ))}
          <li className="mt-2 px-1">
            <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3 text-base font-semibold text-black">Let&apos;s Talk</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
