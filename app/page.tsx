import { Header } from '@/components/header'
import { Hero } from '@/components/sections/hero'
import { Problem } from '@/components/sections/problem'
import { Solution } from '@/components/sections/solution'
import { Features } from '@/components/sections/features'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Comparison } from '@/components/sections/comparison'
import { Testimonials } from '@/components/sections/testimonials'
import { Pricing } from '@/components/sections/pricing'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Comparison />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
