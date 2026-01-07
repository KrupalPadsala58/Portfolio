import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Services from '@/components/sections/Services'
import Works from '@/components/sections/Works'
import Resume from '@/components/sections/Resume'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-accent selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Works />
      <Resume />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
