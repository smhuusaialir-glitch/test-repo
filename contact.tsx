'use client'

import { useState } from 'react'
import { Send, Mail, MessageCircle, Loader } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { company, services, budgetOptions } from '@/lib/site-data'

export function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const payload = {
      name: (data.get('name') as string)?.trim(),
      email: (data.get('email') as string)?.trim(),
      phone: (data.get('phone') as string)?.trim(),
      business: (data.get('business') as string)?.trim(),
      service: selectedService || '',
      budget: selectedBudget || '',
      details: (data.get('details') as string)?.trim(),
    }

    setSubmitting(true)
    try {
      if (company.contactEndpoint) {
        const res = await fetch(company.contactEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        if (!res.ok) throw new Error('Request failed')
        toast.success('Thank you! Your enquiry has been received.')
        form.reset(); setSelectedService(''); setSelectedBudget('')
        return
      }
      await new Promise((r) => setTimeout(r, 600))
      const message = `*New Project Enquiry — Hussain Designs*%0A%0A` +
        `*Name:* ${payload.name || '-'}%0A` +
        `*Email:* ${payload.email || '-'}%0A` +
        `*Phone:* ${payload.phone || '-'}%0A` +
        `*Business:* ${payload.business || '-'}%0A` +
        `*Service:* ${payload.service || '-'}%0A` +
        `*Budget:* ${payload.budget || '-'}%0A` +
        `*Details:* ${payload.details || '-'}`
      window.open(`${company.whatsappHref}?text=${message}`, '_blank', 'noopener,noreferrer')
      toast.success('Opening WhatsApp with your enquiry details…')
      form.reset(); setSelectedService(''); setSelectedBudget('')
    } catch {
      toast.error('Something went wrong. Please message me directly on WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contact" title={<>Let&apos;s build something <span className="text-gold-gradient">premium</span></>} description="Have a project in mind? Tell me what you&apos;re building and let&apos;s create something professional together." />
        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-3xl border border-white/10 bg-card p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">Get in touch</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">WhatsApp is the fastest way to reach me. I personally read and reply to every message.</p>
                <div className="mt-6 space-y-4">
                  <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-gold/30">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold"><MessageCircle className="size-5" /></span>
                    <div><p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">WhatsApp</p><p className="text-sm font-bold text-foreground">{company.whatsappDisplay}</p></div>
                  </a>
                  <a href={company.emailHref} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-gold/30">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold"><Mail className="size-5" /></span>
                    <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</p><p className="truncate text-sm font-bold text-foreground">{company.email}</p></div>
                  </a>
                  <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-gold/30">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold"><InstagramIcon className="size-5" /></span>
                    <div><p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Instagram</p><p className="text-sm font-bold text-foreground">{company.instagramHandle}</p></div>
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/10 to-transparent p-6">
                <p className="font-heading text-base font-bold text-foreground">{company.location}</p>
                <p className="mt-1 text-sm text-muted-foreground">Working with clients worldwide — fully remote.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-bold text-foreground">Project Enquiry</h3>
              <p className="mt-1 text-sm text-muted-foreground">Fill in the form and I&apos;ll continue the conversation on WhatsApp.</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="name">Name *</Label><Input id="name" name="name" placeholder="Your full name" required /></div>
                <div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" placeholder="you@example.com" required /></div>
                <div className="space-y-2"><Label htmlFor="phone">Phone *</Label><Input id="phone" name="phone" type="tel" placeholder="+92 3xx xxxxxxx" required /></div>
                <div className="space-y-2"><Label htmlFor="business">Business Name</Label><Input id="business" name="business" placeholder="Your business (optional)" /></div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Required *</Label>
                  <Select name="service" value={selectedService} onValueChange={(v) => setSelectedService(v ?? '')} required>
                    <SelectTrigger id="service"><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>{services.map((s) => (<SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>))}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget</Label>
                  <Select name="budget" value={selectedBudget} onValueChange={(v) => setSelectedBudget(v ?? '')}>
                    <SelectTrigger id="budget"><SelectValue placeholder="Select a range" /></SelectTrigger>
                    <SelectContent>{budgetOptions.map((b) => (<SelectItem key={b} value={b}>{b}</SelectItem>))}</SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-5 space-y-2"><Label htmlFor="details">Project Details *</Label><Textarea id="details" name="details" rows={5} required placeholder="Tell me about your brand, your goals, timeline and anything that will help me understand the project…" /></div>
              <button type="submit" disabled={submitting} className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 text-base font-semibold text-black transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto">
                {submitting ? (<><Loader className="size-4 animate-spin" />Sending…</>) : (<><Send className="size-4" />Send Enquiry</>)}
              </button>
              <p className="mt-4 text-xs text-muted-foreground">By submitting, you agree to be contacted on WhatsApp regarding your enquiry.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
