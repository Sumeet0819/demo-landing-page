import React, { useRef } from 'react';
import Section from './ui/Section';
import { Star, Quote } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Elena Sokolova",
    role: "Guest",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "An unforgettable experience! The cabin was perfect, the view was breathtaking, and the silence was exactly what we needed. Highly recommend for a weekend getaway.",
    rating: 5
  },
  {
    name: "Mark Ivanov",
    role: "Photographer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "As a photographer, I found endless inspiration here. The light, the textures, the architecture - everything is top notch. The service was also impeccable.",
    rating: 5
  },
  {
    name: "Anna Petrova",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    text: "The attention to detail in the interior design is amazing. It feels like a home away from home, but stylish and modern. Will definitely come back.",
    rating: 5
  }
];

const Testimonials = () => {
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    gsap.from('.review-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 100,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  const handleMouseEnter = contextSafe((e) => {
    const card = e.currentTarget;
    const quote = card.querySelector('.quote-icon');
    const stars = card.querySelector('.stars-container');

    gsap.to(card, {
      y: -10,
      scale: 1.02,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      duration: 0.4,
      ease: 'power2.out'
    });

    if (quote) {
      gsap.to(quote, {
        rotate: 15,
        scale: 1.2,
        color: 'rgba(255, 255, 255, 0.5)',
        duration: 0.4,
        ease: 'back.out(1.7)'
      });
    }

    if (stars) {
      gsap.to(stars, {
        x: 5,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  });

  const handleMouseLeave = contextSafe((e) => {
    const card = e.currentTarget;
    const quote = card.querySelector('.quote-icon');
    const stars = card.querySelector('.stars-container');

    gsap.to(card, {
      y: 0,
      scale: 1,
      borderColor: 'rgba(255, 255, 255, 0.05)',
      boxShadow: 'none',
      duration: 0.4,
      ease: 'power2.out'
    });

    if (quote) {
      gsap.to(quote, {
        rotate: 0,
        scale: 1,
        color: 'rgba(255, 255, 255, 0.1)',
        duration: 0.4,
        ease: 'power2.out'
      });
    }

    if (stars) {
      gsap.to(stars, {
        x: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  });

  return (
    <Section id="testimonials" dark className="bg-neutral-800">
      <div ref={containerRef}>
        <div className="mb-16 text-center">
            <span className="text-sm font-mono text-neutral-500 block mb-2">(04)</span>
            <h2 className="text-3xl md:text-4xl font-light text-white">Guest Reviews</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
                <div 
                    key={i} 
                    className="review-card bg-neutral-900/50 p-8 rounded-3xl border border-white/5 relative cursor-default"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Quote className="quote-icon absolute top-8 right-8 text-white/10 w-8 h-8 transition-colors" />
                    <div className="stars-container flex gap-1 mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-cream-50 text-cream-50" />
                        ))}
                    </div>
                    
                    <p className="text-neutral-300 leading-relaxed mb-8 min-h-[100px]">
                        "{review.text}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h4 className="text-white font-medium">{review.name}</h4>
                            <p className="text-neutral-500 text-xs">{review.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
