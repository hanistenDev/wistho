import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Benefits from '@/components/sections/Benefits'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Team from '@/components/sections/Team'
import FAQ from '@/components/sections/FAQ'
import CTABanner from '@/components/sections/CTABanner'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Team />
      <FAQ />
      <CTABanner />
      <Contact />
    </>
  )
}
