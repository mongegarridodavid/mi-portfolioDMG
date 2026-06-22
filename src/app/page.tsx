'use client'
import NetworkBackground from '@/components/ui/NetworkBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Info from '@/components/Info'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#020b1e] text-slate-100">
      <NetworkBackground />
      <main className="relative min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col gap-12 pb-24">
          <Hero />
          <Experience />
          <Projects />
          <Info />
          <Contacto />
          <Footer />

        </div>
      </main>
    </div>
  )
}