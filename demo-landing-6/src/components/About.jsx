import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function About() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    // --- Scrubbing Text Reveal ---
    gsap.fromTo('.scrub-word',
      { opacity: 0.1, color: '#ffffff' },
      {
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.about-trigger',
          start: 'top 75%',
          end: 'bottom 50%',
          scrub: 1.5,
        }
      }
    )

    // --- Body Text Fade In ---
    gsap.fromTo('.about-body-text',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.about-body-container',
          start: 'top 85%',
        }
      }
    )
  }, { scope: sectionRef })

  const heroText = "House of Mori is a celebration of heritage, nature, and human connection. Rooted in our family's vision of a green oasis, it brings together the warmth of a café and the vibrancy of a restaurant."

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-48 px-6 lg:px-20 bg-[#060806]">
      <div className="about-trigger max-w-5xl mx-auto mb-16 md:mb-24">
        <p className="text-[clamp(1.6rem,3.2vw,3.4rem)] font-light leading-[1.35] text-white">
          {heroText.split(' ').map((word, i) => (
            <span key={i} className="scrub-word inline-block mr-[0.28em]">{word}</span>
          ))}
        </p>
      </div>

      <div className="about-body-container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 border-t border-white/10 pt-12 md:pt-16">
        <div className="about-body-text">
          <h3 className="text-sm tracking-[0.2em] uppercase text-white/40 mb-6">Our Roots</h3>
          <p className="text-white/70 font-light leading-relaxed text-base md:text-lg">
            The name <em className="text-white">Mori</em> translates to “forest” in Japanese, an homage to the verdant landscapes of our hometown, Silvassa, while honoring our ancestral roots in the Mori Rajput clan. Surrounded by lush greenery and organic design, it is a destination where experiences unfold naturally.
          </p>
        </div>
        <div className="about-body-text">
          <h3 className="text-sm tracking-[0.2em] uppercase text-white/40 mb-6">Café HOM</h3>
          <p className="text-white/70 font-light leading-relaxed text-base md:text-lg">
            Nestled within lies Café HOM—a heartfelt tribute to our matriarch, Ramaba Mohansinh Parmar. A visionary who built an empire and raised five children as a single mother, her enduring legacy lives on in our hand-painted tiles, natural elements, and deep pride in Indian craftsmanship.
          </p>
        </div>
      </div>
    </section>
  )
}
