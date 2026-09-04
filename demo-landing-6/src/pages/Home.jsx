import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import LogoClip from '../components/LogoClip'
import About from '../components/About'
import Marquee from '../components/Marquee'
import Experience from '../components/Experience'
import Gallery from '../components/Gallery'
import Menu from '../components/Menu'
import FlipBookMenu from '../components/FlipBookMenu'
import Testimonials from '../components/Testimonials'
import FaqSection from '../components/FaqSection'
import FindUs from '../components/FindUs'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

function Home() {
  const lenisRef = useRef(null)
  const mainRef = useRef(null)

  // --- Lenis smooth scroll ---
  useEffect(() => {
    window.scrollTo(0, 0)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: 0.075, smoothWheel: true })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add(time => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return (
    <main ref={mainRef} id="top" className="overflow-x-hidden w-full bg-[#060806] text-white">
      <Nav />
      <Hero />
      <LogoClip />
      <About />
      <Marquee />
      <Experience />
      <Gallery />
      <Menu />
      <FlipBookMenu />
      <Testimonials />
      <FaqSection />
      <FindUs />
      <Cta />
      <Footer />

      {/* ── Global CSS for animations ── */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  )
}

export default Home
