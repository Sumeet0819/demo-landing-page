import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import bookingBg from '../assets/hom/hom (23).webp'

export default function Cta() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    // --- CTA section ---
    gsap.fromTo('.cta-headline',
      { y: 60, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.1,
        ease: 'power4.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="cta-section relative py-32 md:py-48 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: `url(${bookingBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-[#030d07]/80 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center">
        <p className="text-xs font-semibold tracking-[0.4em] uppercase text-white/40 mb-6">Ready to Dine?</p>
        <h2 className="cta-headline text-[clamp(3.5rem,8vw,9rem)] font-light leading-none tracking-tight mb-12">
          Reserve Your Table
        </h2>
        <button
          type="button"
          className="rounded-full bg-[#f4f1e8] px-12 py-5 text-base font-semibold text-[#173727] hover:scale-[1.04] active:scale-[0.97] transition-transform duration-300"
        >
          Book Now
        </button>
      </div>
    </section>
  )
}
