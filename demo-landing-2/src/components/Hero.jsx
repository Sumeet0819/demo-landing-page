import React, {  useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-text-line', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power4.out',
    })
    .from('.hero-chip', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
    }, '-=0.5')
    .from('.hero-card', {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8');

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 p-[.5rem] rounded-md">
        <img 
          src="https://images.unsplash.com/photo-1758745019085-00d5aa01298a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Cabin in woods" 
          className="w-full h-full object-cover brightness-[0.8] rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-12">
            <div ref={textRef} className="overflow-hidden">
              <h1 className="hero-text-line text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] mb-4 tracking-tight">
                Your sanctuary <br />
                away from the hustle
              </h1>
              <p className="hero-text-line text-lg text-white/80 font-light mt-4 max-w-md">
                Rent homes not far from Moscow
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {['Seclusion & serenity', 'Eco-friendly', 'Natural beauty', 'Comfort & convenience'].map((text, i) => (
                <span key={i} className="hero-chip px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm text-white transition-colors hover:bg-white/10">
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Slider Widget */}
          <div className="hidden lg:flex justify-end items-end">
            <div className="hero-card w-96 backdrop-blur-md bg-white/10 rounded-3xl border border-white/10 p-5">
              {/* Progress Bar */}
              <div className="flex items-center gap-3 text-white/80 text-xs mb-4 font-medium">
                <span>01</span>
                <div className="h-[2px] bg-white/20 flex-1 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-white rounded-full"></div>
                </div>
                <span>05</span>
              </div>

              {/* Content */}
              <div className="flex items-center gap-4">
                 <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=400&auto=format&fit=crop" 
                      alt="Thumbnail" 
                      className="w-full h-full object-cover"
                    />
                 </div>
                 
                 <div className="flex-1">
                    <h3 className="text-white text-lg font-medium leading-tight mb-1">Lodge with terrace and grill</h3>
                    <p className="text-white/60 text-xs">Up to 6 guests</p>
                 </div>

                 <button className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
                    <ArrowUpRight size={20} />
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
