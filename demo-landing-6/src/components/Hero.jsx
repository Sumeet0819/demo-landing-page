import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import cafeHero from '../assets/hom/nighttime_cafe_hero.jpg'

export default function Hero() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    // --- Hero: title clip-path reveal ---
    gsap.fromTo('.hero-title',
      { y: 80, clipPath: 'inset(100% 0% 0% 0%)' },
      {
        y: 0,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.4,
        ease: 'power4.out',
        stagger: 0.12,
        delay: 0.3,
      }
    )

    // --- Hero: buttons & sub text fade up ---
    gsap.fromTo('.hero-sub',
      { y: 24, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', delay: 0.9 }
    )
    gsap.fromTo('.hero-btn',
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 1.05,
      }
    )

    // --- Hero BG Ken Burns (entrance) ---
    gsap.fromTo('.hero-bg-img',
      { scale: 1.08 },
      { scale: 1, duration: 2.2, ease: 'power2.out' }
    )
    // scrub: true = 1:1 with scroll, no extra lag on top of Lenis lerp
    gsap.to('.hero-scroll-wrapper', {
      opacity: 0.12,
      scale: 0.96,
      y: 50, // smooth parallax pan
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="hero-section relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 overflow-hidden bg-[#060806]">
        <div className="hero-scroll-wrapper absolute inset-0">
          <img
            src={cafeHero}
            alt=""
            aria-hidden="true"
            className="hero-bg-img absolute inset-0 w-full h-full object-cover"
            style={{
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}
          />
          {/* Hardware-accelerated brightness overlay */}
          <div className="absolute inset-0 bg-black/45" />
        </div>
        {/* dark radial wash */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(6,8,6,0.85)_80%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#060806] to-transparent pointer-events-none" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto">
        <div className="overflow-hidden mb-2">
          <h1 className="hero-title text-[clamp(3.5rem,7vw,7rem)] font-light leading-[1.03] tracking-[-0.04em]">
            The Pleasure
          </h1>
        </div>
        <div className="overflow-hidden mb-2">
          <h1 className="hero-title text-[clamp(3.5rem,7vw,7rem)] font-light leading-[1.03] tracking-[-0.04em]">
            of Variety
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-title font-serif italic text-[clamp(2.8rem,5.5vw,5.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-white/70">
            on Your Plate
          </h1>
        </div>

        <p className="hero-sub mt-8 max-w-md text-sm leading-7 text-white/55 font-light">
          A dining experience where seasonal craft meets timeless hospitality — in every plate we serve.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            className="hero-btn group relative overflow-hidden rounded-full bg-white px-9 py-4 text-sm font-semibold text-[#060806] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="relative z-10">Book a Table</span>
            <span className="absolute inset-0 bg-[#f4f1e8] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
          <button
            type="button"
            className="hero-btn rounded-full border border-white/40 px-9 py-4 text-sm font-semibold text-white/90 hover:bg-white/10 hover:border-white/60 transition-all duration-300 active:scale-[0.98]"
          >
            Explore Menu
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30 animate-pulse" />
        Scroll
      </div>
    </section>
  )
}
