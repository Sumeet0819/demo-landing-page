import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const faqs = [
  { q: 'How long has your restaurant been established?', a: 'HOUSE of Mori has welcomed guests for more than 25 years, building a legacy of culinary excellence and warm hospitality.' },
  { q: 'Do you serve Japanese cuisine?', a: 'Yes. Our menu draws deeply from Japanese techniques and seasonal ingredients, blended with global culinary influences.' },
  { q: 'Can your restaurant be a wedding venue?', a: 'Absolutely. We offer bespoke private event and wedding dining arrangements for intimate to large gatherings.' },
  { q: 'What are your signature dishes?', a: 'Our beloved signatures include Homemade Gyoza, Grilled Salmon, and our seasonal chef specials that change monthly.' },
  { q: 'Do you offer vegetarian or plant-based options?', a: 'Yes, our menu includes a thoughtfully curated selection of plant-based and vegetarian dishes made with fresh, seasonal produce.' },
  { q: 'How can I make a reservation?', a: 'You can reserve a table directly through our website, by phone, or walk in. We recommend booking in advance for weekends.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`border-b border-white/10 transition-colors duration-300 ${open ? 'border-white/20' : ''}`}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-light pr-8 group-hover:text-white/80 transition-colors">
          {q}
        </span>
        <span
          className="shrink-0 size-8 rounded-full border border-white/30 flex items-center justify-center text-lg transition-transform duration-500"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? '200px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="pb-6 text-sm leading-7 text-white/60 max-w-2xl">{a}</p>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    // --- FAQ section entrance ---
    gsap.fromTo('.faq-item',
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.07,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="faq-section py-24 md:py-36 px-6 lg:px-14 bg-[#060806] border-t border-white/8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
        <div className="lg:sticky lg:top-32 self-start">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.08] tracking-[-0.04em]">
            Frequently Asked
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/45 max-w-xs">
            Find the details you need before your visit. Our team is always happy to help with anything not covered here.
          </p>
          <button
            type="button"
            className="mt-8 rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium hover:bg-white hover:text-[#060806] transition-all duration-300 active:scale-[0.97]"
          >
            Contact Us
          </button>
        </div>
        <div className="divide-y divide-white/10">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <FaqItem q={faq.q} a={faq.a} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
