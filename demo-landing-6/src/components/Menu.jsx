import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import menuGyoza from '../assets/hom/hom (20).webp'
import menuSalmonMix from '../assets/hom/hom (5)_enhanced.jpg'
import menuBreakfast from '../assets/hom/hom (6)_enhanced.jpg'
import menuGrilledSalmon from '../assets/hom/hom (7)_enhanced.jpg'

gsap.registerPlugin(ScrollTrigger)

const signatureDishes = [
  { title: 'Homemade Gyoza', image: menuGyoza },
  { title: 'Salmon Mix Plate', image: menuSalmonMix },
  { title: 'English Breakfast', image: menuBreakfast },
  { title: 'Grilled Salmon', image: menuGrilledSalmon },
]

export default function Menu() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    // --- Signature Dishes: GSAP ScrollTrigger pin left panel ---
    if (window.innerWidth >= 1024) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: '.pin-left',
        pinSpacing: false,
      })
    }

    // --- Dish cards: image scale + fade-in as they scroll into view ---
    gsap.utils.toArray('.dish-card').forEach(card => {
      const img = card.querySelector('img')
      if (!img) return
      // scale up from slightly small as the card enters viewport
      gsap.fromTo(card,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      )
      // image scale scrub: starts at 1.12, settles to 1 as card centres in viewport
      gsap.fromTo(img,
        { scale: 1.12 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          }
        }
      )
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="menu" className="pin-section relative flex flex-col lg:flex-row bg-[#e7e8d9] text-[#0a0a0a]">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="pin-left flex lg:h-screen w-full lg:w-1/2 flex-col justify-center px-6 lg:px-20 py-16 lg:py-0 border-b lg:border-b-0 lg:border-r border-black/10 lg:sticky top-0 z-10 bg-[#e7e8d9]">
        <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#58705e] mb-5">Our Signature</p>
        <h2 className="text-[clamp(3rem,5vw,5rem)] font-light leading-[1.1] tracking-[-0.03em] max-w-md">
          Where Taste Meets the Myth
        </h2>
        <p className="mt-6 text-base text-black/55 max-w-sm leading-7">
          Our signature dishes draw from timeless techniques and seasonal ingredients — each plate a small ceremony.
        </p>
        <a
          href="#flip-menu"
          className="mt-10 self-start rounded-full bg-[#1b3026] px-7 py-3.5 text-sm font-semibold text-[#f4f1e8] hover:bg-[#254235] active:scale-[0.97] transition-all duration-200"
        >
          Full Menu
        </a>
      </div>
      <div className="w-full lg:w-1/2 py-12 lg:py-32 px-6 lg:px-20 flex flex-row lg:flex-col gap-6 lg:gap-24 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar relative z-0">
        {signatureDishes.map((dish, i) => (
          <div key={i} className="dish-card group relative aspect-[4/5] overflow-hidden rounded-2xl w-[80vw] sm:w-[60vw] lg:w-full max-w-lg shrink-0 snap-center mx-auto lg:mx-0">
            <img
              src={dish.image}
              alt={dish.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <p className="text-xl font-semibold text-white">{dish.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
