import React, { useRef } from 'react';
import Section from './ui/Section';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Features = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <Section className="py-0 md:py-0" dark>
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full min-h-[600px]">
        {/* Awards Card */}
        <div className="feature-card bg-[#fdfaf5] text-neutral-900 rounded-3xl p-8 md:p-12 flex flex-col justify-center">
             <h2 className="text-3xl md:text-4xl font-serif mb-12">
                CozyNest best <br/> according to awards:
             </h2>

             <div className="space-y-8">
                {[
                    { title: 'AD Design Award', desc: 'Stylish design CozyNest deserved an architectural award as "Best Resort"' },
                    { title: '50 Best Tastes of Russia 2023', desc: 'Our restaurant entered the list of recommended for visiting as the best place in the country' },
                    { title: 'Best in Tourism', desc: 'Restaurant CozyNest won in nomination "Best catering facility"' }
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                        <Star className="w-5 h-5 mt-1 fill-neutral-800 text-neutral-800 shrink-0" />
                        <div>
                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                            <p className="text-neutral-600 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
             </div>
        </div>

        {/* Feature Image */}
        <div className="feature-card rounded-3xl overflow-hidden h-[500px] md:h-auto relative">
             <img 
                src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop" 
                alt="Cozy cabin exterior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
             />
        </div>
      </div>
    </Section>
  );
};

export default Features;
