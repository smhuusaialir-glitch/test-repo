import Link from 'next/link'
import { Mail, MessageCircle, ArrowUp, ExternalLink } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { Logo } from '@/components/logo'
import { company, navLinks, services } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">{company.description}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (<li key={link.href}><a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-gold">{link.label}</a></li>))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (<li key={s.title}><Link href={`/services/${s.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-gold">{s.title}</Link></li>))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Get in Touch</h3>
            <ul className="mt-5 space-y-4">
              <li><a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"><MessageCircle className="mt-0.5 size-4 shrink-0" />{company.whatsappDisplay}</a></li>
              <li><a href={company.emailHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"><Mail className="mt-0.5 size-4 shrink-0" />{company.email}</a></li>
              <li><a href={company.instagram} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"><InstagramIcon className="mt-0.5 size-4 shrink-0" />{company.instagramHandle}</a></li>
              <li><a href={company.fiverr} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"><ExternalLink className="mt-0.5 size-4 shrink-0" />Fiverr</a></li>
              <li><a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"><ExternalLink className="mt-0.5 size-4 shrink-0" />LinkedIn</a></li>
              <li><a href={company.x} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"><ExternalLink className="mt-0.5 size-4 shrink-0" />X / Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <a href="#hero" className="inline-flex items-center gap-2 transition-colors hover:text-gold">Back to top<ArrowUp className="size-3.5" /></a>
        </div>
      </div>
    </footer>
  )
}
