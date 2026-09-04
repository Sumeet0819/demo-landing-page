import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import bookingBg from '../assets/hom/hom (18).webp'

export default function FindUs() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    // --- Find Us section pan effect ---
    gsap.fromTo('.findus-img',
      { scale: 1.12 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="findus" className="findus-section py-24 md:py-36 px-6 lg:px-14 bg-[#0e1a12] border-t border-white/8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Info */}
        <div>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1.08] tracking-[-0.04em]">
            Come Find Us
          </h2>
          <p className="mt-6 text-sm leading-7 text-white/55 max-w-md">
            Nestled in the heart of the city, HOUSE of Mori is open for lunch and dinner, six days a week. Walk-ins welcome, reservations preferred.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/35 mb-3">Address</p>
              <address className="not-italic text-sm leading-7 text-white/70">
                771 Waelchi Walks<br />
                Herminiaside, Nevada 97291
              </address>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/35 mb-3">Hours</p>
              <p className="text-sm leading-7 text-white/70">
                Mon – Fri: 12pm – 10pm<br />
                Sat – Sun: 11am – 11pm<br />
                Closed Tuesdays
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/35 mb-3">Contact</p>
              <p className="text-sm leading-7 text-white/70">
                +1 (234) 567 890<br />
                info@houseofmori.com
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/35 mb-3">Follow</p>
              <div className="flex gap-4 text-sm text-white/60">
                <a href="#instagram" className="hover:text-white transition-colors">Instagram</a>
                <a href="#facebook" className="hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="mt-10 rounded-full bg-[#f4f1e8] text-[#0e1a12] px-8 py-4 text-sm font-semibold hover:bg-white active:scale-[0.97] transition-all duration-200"
          >
            Get Directions
          </button>
        </div>

        {/* Map placeholder with ambient image */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
          <img
            src={bookingBg}
            alt="Restaurant location"
            className="findus-img w-full h-full object-cover"
            style={{ filter: 'brightness(0.45) grayscale(0.3)' }}
          />
          <div className="absolute inset-0 bg-[#0e1a12]/40" />
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
            <div className="size-12 rounded-full bg-white/90 flex items-center justify-center text-[#0e1a12] text-xl">
              ◉
            </div>
            <p className="text-sm font-semibold tracking-wide">HOUSE of Mori</p>
            <p className="text-xs text-white/50">Nevada, USA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
