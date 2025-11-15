import Hero from '@/components/Hero'
import EbooksSection from '@/components/EbooksSection'
import FormSection from '@/components/FormSection'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EbooksSection />
      <FormSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

