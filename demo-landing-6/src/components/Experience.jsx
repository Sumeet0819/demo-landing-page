import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import expAppetizer from '../assets/hom/hom (20).webp'
import expMain from '../assets/hom/hom (21).webp'
import expDrinks from '../assets/hom/hom (22).webp'

const bentoFeatures = [
  { title: 'Fresh Ingredients', desc: 'Sourced daily from local farms.', span: 'md:col-span-2 md:row-span-2', img: expAppetizer },
  { title: "Chef's Specialties", desc: 'Crafted with passion.', span: 'md:col-span-1 md:row-span-1', bg: 'bg-[#1b3026]' },
  { title: 'Private Events', desc: 'Spaces for celebrations.', span: 'md:col-span-1 md:row-span-1', img: expMain },
  { title: 'Seasonal Drinks', desc: 'A curated selection.', span: 'md:col-span-1 md:row-span-2', img: expDrinks },
  { title: '160+ Branches', desc: 'Worldwide presence.', span: 'md:col-span-1 md:row-span-1', bg: 'bg-[#254235]' },
  { title: '25 Years Legacy', desc: 'Culinary excellence since 1999.', span: 'md:col-span-2 md:row-span-1', bg: 'bg-stone-900' },
]

export default function Experience() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    // --- Bento card hover physics ---
    gsap.utils.toArray('.bento-card').forEach(card => {
      const img = card.querySelector('.bento-img')
      if (!img) return
      card.addEventListener('mouseenter', () => gsap.to(img, { scale: 1.06, duration: 0.8, ease: 'power2.out' }))
      card.addEventListener('mouseleave', () => gsap.to(img, { scale: 1, duration: 0.8, ease: 'power2.out' }))
    })

    // --- Bento cards scroll entrance ---
    gsap.fromTo('.bento-card',
      { y: 60, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="experience" className="bento-section py-24 md:py-36 px-6 lg:px-14 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 grid-flow-dense" style={{ gridAutoRows: '260px' }}>
        {bentoFeatures.map((f, i) => (
          <div
            key={i}
            className={`bento-card group relative overflow-hidden rounded-3xl ${f.span} ${f.bg || 'bg-[#161816]'} min-h-[260px]`}
          >
            {f.img && (
              <img
                src={f.img}
                alt={f.title}
                className="bento-img absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(0.65)' }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 z-10">
              <h3 className="text-xl md:text-2xl font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-white/60">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
