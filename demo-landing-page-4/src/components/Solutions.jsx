import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: 'Farming Precision',
    desc: 'Our precision farming employs state-of-the-art technology to optimize every aspect of farm operations.',
    img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'Crop Surveillance',
    desc: 'Track your crop health and growth in real-time with our innovative solutions.',
    img: 'https://images.unsplash.com/photo-1559884733-d8cb87702a8a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Automated Farming',
    desc: 'Enhance farm efficiency and productivity with our cutting edge automation solutions.',
    img: 'https://images.unsplash.com/photo-1530836369250-ef71a3f5e43c?q=80&w=2070&auto=format&fit=crop'
  }
];

const Solutions = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.sol-head',
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );

      gsap.fromTo(
        '.sol-card',
        { y: 80, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.sol-grid', start: 'top 80%' }
        }
      );

      gsap.fromTo(
        '.sol-banner',
        { scale: 0.95, opacity: 0 },
        { 
          scale: 1, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.sol-banner', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-[1400px] mx-auto px-6 py-20 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
        <h2 className="sol-head opacity-0 text-3xl md:text-4xl font-medium text-brand-dark w-full md:w-1/3 leading-snug">
          Next-Gen Solutions For Optimal Crop Growth
        </h2>
        <p className="sol-head opacity-0 text-gray-500 text-sm font-medium w-full md:w-1/4 leading-relaxed mt-2 md:mr-[10%]">
          As previously noted, edge devices can help farmers maximize crop yields. Our precision farming, crop monitoring, and automation solutions aim to revolutionize agriculture.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="sol-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {solutions.map((sol, idx) => (
          <div key={idx} className="sol-card opacity-0 flex flex-col gap-4 group">
            <div className="overflow-hidden rounded-3xl aspect-[4/3]">
              <img 
                src={sol.img} 
                alt={sol.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium text-brand-dark mt-2">{sol.title}</h3>
            <p className="text-gray-400 text-xs font-medium leading-relaxed max-w-[80%]">{sol.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom Info Banner */}
      <div className="sol-banner opacity-0 flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto py-10">
        <div className="w-full md:w-1/3 rounded-3xl overflow-hidden aspect-video relative">
          <img 
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop" 
            alt="Agriculture Tech Chart" 
            className="w-full h-full object-cover brightness-75"
          />
          {/* Faux HUD Graphic */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-brand-light-green border-dashed animate-[spin_10s_linear_infinite]"></div>
            <div className="w-8 h-8 rounded-full border-2 border-brand-light-green absolute"></div>
          </div>
        </div>
        <h3 className="w-full md:w-2/3 text-2xl md:text-3xl font-medium text-brand-dark leading-snug">
          Changing The Game In Farming With Sustainable Practices And Cool Technologies, Shaping The Future Of Agriculture
        </h3>
      </div>
    </section>
  );
};

export default Solutions;
