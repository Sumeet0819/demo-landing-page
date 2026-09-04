import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import aboutCafeOne from '../assets/hom/hom_19_landscape.jpg'

export default function LogoClip() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    // --- Logo clip image reveal on scroll ---
    gsap.fromTo('.logo-clip-wrap',
      { clipPath: 'inset(0% 50% 0% 50%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        }
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="logo-clip-section py-24 md:py-36 px-6 bg-[#060806] flex flex-col items-center justify-center overflow-hidden">
      <div
        className="logo-clip-wrap w-full max-w-7xl mx-auto relative  overflow-hidden"
        style={{ aspectRatio: '16 / 6' }}
      >
        <img
          src={aboutCafeOne}
          alt="House of Mori atmosphere"
          className="absolute inset-0 w-full h-full object-cover"
          // Removed the heavy brightness/grayscale filter since the generated image is already beautifully graded
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#060806]/60 via-transparent to-[#060806]/60" />
      </div>
      <p className="mt-8 text-sm font-medium tracking-[0.4em] uppercase text-white/35">House of Mori — Est. 1999</p>
    </section>
  )
}
