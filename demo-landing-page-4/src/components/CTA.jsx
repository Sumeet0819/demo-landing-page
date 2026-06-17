import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      gsap.fromTo(
        '.cta-content',
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 60%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden flex items-center justify-center mt-12 px-6">
      <img 
        ref={imgRef}
        src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2070&auto=format&fit=crop" 
        alt="Join Revolution" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="cta-content opacity-0 relative z-10 flex flex-col items-center text-center w-full max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 leading-tight">
          Join the Agricultural<br />Revolution Today!
        </h2>
        
        <div className="flex w-full max-w-md bg-white rounded-full overflow-hidden p-1.5 pl-6 items-center">
          <input 
            type="email" 
            placeholder="Email address" 
            className="flex-1 outline-none text-brand-dark bg-transparent text-sm font-medium placeholder-gray-400"
          />
          <button className="bg-[#1F221B] text-white px-5 py-2.5 rounded-full hover:bg-black transition-colors font-medium flex items-center gap-2 text-sm shrink-0">
            Subscribe <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
