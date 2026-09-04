import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Marquee() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    // --- Marquee ---
    gsap.to('.marquee-inner', {
      xPercent: -50,
      ease: 'none',
      repeat: -1,
      duration: 22,
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-14 border-y border-white/8 overflow-hidden bg-[#060806]">
      <div className="flex whitespace-nowrap select-none">
        <div className="marquee-inner flex gap-14 px-7 text-[clamp(3rem,6vw,6rem)] font-light tracking-tight opacity-25 uppercase">
          <span>25+ Years</span><span className="text-white/40">—</span>
          <span>160+ Branches</span><span className="text-white/40">—</span>
          <span>450+ Chefs</span><span className="text-white/40">—</span>
          <span>5K+ Reviews</span><span className="text-white/40">—</span>
          <span>25+ Years</span><span className="text-white/40">—</span>
          <span>160+ Branches</span><span className="text-white/40">—</span>
          <span>450+ Chefs</span><span className="text-white/40">—</span>
          <span>5K+ Reviews</span><span className="text-white/40">—</span>
        </div>
      </div>
    </section>
  )
}
