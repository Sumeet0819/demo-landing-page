import { useState, useCallback } from 'react'
import cafeHero from '../assets/hom/hom (1)_enhanced.jpg'
import aboutCafeOne from '../assets/hom/hom (2)_enhanced.jpg'
import aboutCafeTwo from '../assets/hom/hom (3)_enhanced.jpg'

const testimonials = [
  { quote: 'The only thing we are known for is to serve you with our best always.', author: 'Arya Vincent', role: 'Loyal Guest' },
  { quote: 'An unforgettable dining experience that perfectly balances comfort and luxury.', author: 'Lisa Damian', role: 'Food Critic' },
  { quote: 'Every bite tells a story. A masterful execution of flavor.', author: 'Marcus Thorne', role: 'Regular Patron' },
]

const testimonialImages = [aboutCafeOne, aboutCafeTwo, cafeHero]

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const nextTestimonial = useCallback(() => setActiveTestimonial(p => (p + 1) % testimonials.length), [])
  const prevTestimonial = useCallback(() => setActiveTestimonial(p => p === 0 ? testimonials.length - 1 : p - 1), [])

  return (
    <section className="py-24 md:py-36 px-6 lg:px-14 bg-[#060806]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <img
            key={activeTestimonial}
            src={testimonialImages[activeTestimonial]}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.65) grayscale(0.1)', animation: 'fadeIn 0.6s ease' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div>
          <span className="font-serif text-[9rem] leading-none opacity-10 block -mb-10">"</span>
          <p
            className="text-2xl md:text-[2.4rem] font-light leading-[1.3] mb-10 min-h-[160px]"
            style={{ animation: 'fadeIn 0.5s ease' }}
            key={`q-${activeTestimonial}`}
          >
            {testimonials[activeTestimonial].quote}
          </p>
          <div className="flex items-center justify-between border-t border-white/15 pt-8">
            <div>
              <p className="font-semibold text-base">{testimonials[activeTestimonial].author}</p>
              <p className="text-sm text-white/45 mt-0.5">{testimonials[activeTestimonial].role}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="size-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 active:scale-90"
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="size-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 active:scale-90"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
