import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current, 
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
      
      gsap.fromTo(
        '.banner-text',
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 60%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full px-6 md:px-8 py-10 overflow-hidden max-w-[1600px] mx-auto">
      <div className="w-full rounded-[2rem] overflow-hidden relative h-[60vh] md:h-[80vh]">
        <img 
          ref={imgRef}
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop" 
          alt="Agriculture Field" 
          className="absolute top-[-20%] left-0 w-full h-[140%] object-cover"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/10 flex flex-col justify-between p-10 md:p-14">
          <h2 className="banner-text opacity-0 text-white text-3xl md:text-6xl font-medium max-w-2xl leading-tight mt-4">
            Collaborate And Learn From Industry Experts And Enthusiasts
          </h2>
          
          <div className="flex justify-between items-end w-full">
            <div className="banner-text opacity-0 flex items-center gap-2 text-white text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Farming network
            </div>
            
            <button className="banner-text opacity-0 w-28 h-28 md:w-36 md:h-36 bg-[#FF5A1F] text-white rounded-full flex items-center justify-center text-base font-semibold hover:bg-orange-600 transition-colors hover:scale-105 duration-300 mr-4 mb-4">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
