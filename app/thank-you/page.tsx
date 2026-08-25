import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'
import { company } from '@/lib/site-data'

export const metadata = {
  title: 'Thank You — Your Enquiry Is In',
  description: 'Your project enquiry has been received. Hussain will reply on WhatsApp shortly.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckCircle2 className="size-8" strokeWidth={1.6} />
        </div>
        <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Thank you — your enquiry is in.
        </h1>
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
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-base font-medium text-foreground/80 transition-colors hover:text-gold"
          >
            <MessageCircle className="size-4" />
            Back to home
          </a>
        </div>
      </div>
    </main>
  )
}
