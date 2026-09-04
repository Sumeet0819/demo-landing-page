import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import cafeHero from '../assets/hom/hom (8)_enhanced.jpg'
import aboutCafeOne from '../assets/hom/hom (9)_enhanced.jpg'
import aboutCafeTwo from '../assets/hom/hom (10)_enhanced.jpg'
import menuGyoza from '../assets/hom/hom (11)_enhanced.jpg'
import menuSalmonMix from '../assets/hom/hom (12).webp'
import menuBreakfast from '../assets/hom/hom (13).webp'
import menuGrilledSalmon from '../assets/hom/hom (14).webp'
import expAppetizer from '../assets/hom/hom (15).webp'
import expMain from '../assets/hom/hom (16).webp'
import expDrinks from '../assets/hom/hom (17).webp'

const galleryImages = [
  cafeHero, aboutCafeOne, aboutCafeTwo,
  menuGyoza, menuSalmonMix, menuBreakfast,
  menuGrilledSalmon, expAppetizer, expMain, expDrinks,
  cafeHero, aboutCafeOne,
]

export default function Gallery() {
  const sectionRef = useRef(null)
  const galleryTrackRef = useRef(null)

  useGSAP(() => {
    // --- Rolling Gallery GSAP: infinite x scroll ---
    const track = galleryTrackRef.current
    if (track) {
      const totalWidth = track.scrollWidth / 2
      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        repeat: -1,
        duration: 28,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      })
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="gallery" className="py-20 overflow-hidden bg-[#060806]">
      <div className="mb-12 px-6 lg:px-14">
        <h2 className="text-3xl md:text-5xl font-light tracking-[-0.03em] max-w-lg">
          A Glimpse of the Experience
        </h2>
      </div>
      <div className="overflow-hidden">
        <div ref={galleryTrackRef} className="flex gap-5 w-max will-change-transform">
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div
              key={i}
              className="group relative shrink-0 overflow-hidden rounded-2xl"
              style={{ width: 'clamp(260px, 22vw, 380px)', aspectRatio: '4/5' }}
            >
              <img
                src={img}
                alt={`Gallery ${(i % galleryImages.length) + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'brightness(0.75) contrast(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
