'use client'

import { Plus } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/section-heading'
import { faqs, company } from '@/lib/site-data'

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-8 lg:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gold-gradient">answered straight</span></>}
          description="The things people actually ask before starting a project. Still unclear on something? Message me on WhatsApp."
        />
        <Accordion className="mt-8 border-y border-white/10 px-6">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`} className="border-white/10">
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 border-l-2 border-gold/30 pl-5">
          <p className="text-sm text-muted-foreground">
            Still have a question?{' '}
            <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-gold transition-colors hover:text-champagne">
              <Plus className="size-3.5" />
              Message me on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
