import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Pricing } from '@/components/pricing'
import { WhyUs } from '@/components/why-us'
import { Process } from '@/components/process'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { Toaster } from '@/components/ui/sonner'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <WhyUs />
        <Process />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <Toaster position="top-center" theme="dark" />
    </>
  )
}
