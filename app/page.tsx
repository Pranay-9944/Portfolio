import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Skills from '@/components/Skills'
import dynamic from 'next/dynamic'

const SocialSidebar = dynamic(() => import('@/components/SocialSidebar'), { ssr: false })

export default function Home() {
  return (
    <main className="grid-bg">
      <Navbar />
      <SocialSidebar />

      <Hero />

     
        <About />

        <Projects />

        <Skills />

        <Contact />

      <Footer />
    </main>
  )
}