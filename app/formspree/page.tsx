import Hero from '@/components/Hero'
import EbooksSection from '@/components/EbooksSection'
import FormSectionFormspree from '@/components/FormSectionFormspree'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function FormspreePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EbooksSection />
      <FormSectionFormspree />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

