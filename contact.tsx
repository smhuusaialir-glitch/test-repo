'use client'

import { useState } from 'react'
import { Send, Mail, MessageCircle, Loader, CheckCircle2, ArrowRight } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SectionHeading } from '@/components/section-heading'
import { company, services, budgetOptions } from '@/lib/site-data'

export function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)

    if (!selectedService) {
      toast.error('Please select a service.')
      return
    }

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
        setSubmitted(true)
        return
      }
      await new Promise((r) => setTimeout(r, 600))
      const enc = encodeURIComponent
      const message = `*New Project Enquiry — Hussain Designs*%0A%0A` +
        `*Name:* ${enc(payload.name || '-')}%0A` +
        `*Email:* ${enc(payload.email || '-')}%0A` +
        `*Phone:* ${enc(payload.phone || '-')}%0A` +
        `*Business:* ${enc(payload.business || '-')}%0A` +
        `*Service:* ${enc(payload.service || '-')}%0A` +
        `*Budget:* ${enc(payload.budget || '-')}%0A` +
        `*Details:* ${enc(payload.details || '-')}`
      window.open(`${company.whatsappHref}?text=${message}`, '_blank', 'noopener,noreferrer')
      toast.success('Opening WhatsApp with your enquiry details…')
      form.reset(); setSelectedService(''); setSelectedBudget('')
      setSubmitted(true)
    } catch {
      toast.error('Something went wrong. Please message me directly on WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/30 py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="mx-auto max-w-2xl py-6 text-center lg:py-10">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gold/15 text-gold">
              <CheckCircle2 className="size-8" strokeWidth={1.6} />
            </div>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Thank you — your enquiry is in.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;ve received your details and will personally reply on WhatsApp shortly. If you opened WhatsApp
              with your message pre-filled, just hit send there and we&apos;ll pick it up from there.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-base font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                Continue on WhatsApp
                <ArrowRight className="size-4" />
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-1.5 text-base font-medium text-foreground/80 transition-colors hover:text-gold"
              >
                Send another enquiry
              </button>
            </div>
          </div>
        ) : (
        <>
        <SectionHeading
          align="left"
          eyebrow="Contact"
          title={<>Tell me what you&apos;re <span className="text-gold-gradient">building</span></>}
          description="A sentence about your business and what you need is enough. I read every message myself and reply on WhatsApp."
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="border border-white/10 bg-card p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">Message me or drop a DM</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Message on WhatsApp or DM me on Instagram. I personally read and reply to every message.</p>
                <div className="mt-6 divide-y divide-white/10">
                  <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-4 transition-colors hover:text-gold">
                    <MessageCircle className="size-6 shrink-0 text-gold" strokeWidth={1.6} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground group-hover:text-gold">WhatsApp</p>
                      <p className="text-sm font-bold text-foreground group-hover:text-gold">{company.whatsappDisplay}</p>
                    </div>
                  </a>
                  <a href={company.emailHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-4 transition-colors hover:text-gold">
                    <Mail className="size-6 shrink-0 text-gold" strokeWidth={1.6} />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground group-hover:text-gold">Email</p>
                      <p className="truncate text-sm font-bold text-foreground group-hover:text-gold">{company.email}</p>
                    </div>
                  </a>
                  <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-4 transition-colors hover:text-gold">
                    <InstagramIcon className="size-6 shrink-0 text-gold" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground group-hover:text-gold">Instagram</p>
                      <p className="text-sm font-bold text-foreground group-hover:text-gold">{company.instagramHandle}</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="border-l-2 border-gold/40 bg-gradient-to-br from-gold/[0.06] to-transparent p-6">
                <p className="font-heading text-base font-bold text-foreground">{company.location}</p>
                <p className="mt-1 text-sm text-muted-foreground">Fully remote — working with clients worldwide.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="border border-white/10 bg-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-bold text-foreground">Project enquiry</h3>
              <p className="mt-1 text-sm text-muted-foreground">Fill in the form and I&apos;ll continue the conversation on WhatsApp.</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="name">Name *</Label><Input id="name" name="name" placeholder="Your full name" required /></div>
                <div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" placeholder="you@example.com" required /></div>
                <div className="space-y-2"><Label htmlFor="phone">Phone *</Label><Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required /></div>
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
                {submitting ? (<><Loader className="size-4 animate-spin" />Sending…</>) : (<><Send className="size-4" />Send enquiry</>)}
              </button>
              <p className="mt-4 text-xs text-muted-foreground">By submitting, you agree to be contacted on WhatsApp regarding your enquiry.</p>
            </form>
          </div>
        </div>
        </>
        )}
      </div>
    </section>
  )
}
