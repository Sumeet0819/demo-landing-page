import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Reveal text overlapping 
    tl.from(textRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.out"
    })
    .from(imageRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out"
    }, "-=1.2");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-neutral overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div ref={textRef} className="space-y-10">
            <div className="inline-block ">
              <span className="bg-white/80 backdrop-blur-sm border border-white/60 text-primary font-bold px-6 py-2.5 rounded-full text-sm tracking-wide shadow-sm inline-flex items-center gap-2.5 hover:scale-105 transition-transform duration-300 ring-1 ring-gray-100/50">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                Welcome To Canyon
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold font-display leading-[1] text-primary tracking-tight">
              Find Your <br />
              <span className="text-secondary-light">Dream Home.</span>
            </h1>
            
            <p className="text-secondary text-xl max-w-lg leading-relaxed font-light">
              Discover top listings, explore virtual tours, and connect with trusted agents in minutes.
            </p>
            
            <div className="flex flex-wrap gap-5 items-center pt-4">
              <button className="bg-primary text-white px-10 py-5 rounded-full font-medium hover:scale-105 transition-transform duration-300 flex items-center gap-3 shadow-xl shadow-primary/20">
                Browse Listing
                <ArrowRight size={20} />
              </button>
              
              <button className="bg-white border border-gray-200 text-primary px-10 py-5 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                   <Play size={14} className="fill-current" />
                </div>
                How it works
              </button>
            </div>
            
            <div className="pt-12 flex items-center gap-16 border-t border-gray-200/60">
              <div>
                <p className="text-4xl font-bold font-display text-primary">1500+</p>
                <p className="text-secondary text-sm mt-1">Property Ready</p>
              </div>
              <div>
                <p className="text-4xl font-bold font-display text-primary">500+</p>
                <p className="text-secondary text-sm mt-1">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
             <div ref={imageRef} className="relative h-[500px] lg:h-[650px] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" 
                  alt="Luxury Home" 
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Modern Glass Card */}
                <div className="absolute bottom-6 left-6 right-6 lg:left-10 lg:right-auto bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl max-w-xs text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 p-3 rounded-2xl">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                       </svg>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Modern Villa</p>
                      <p className="text-white/70 text-sm">Beverly Hills, CA</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                     <div>
                       <p className="text-xs text-white/60 mb-1">Starting Price</p>
                       <p className="text-2xl font-bold font-display">$2.5M</p>
                     </div>
                     <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-accent transition-colors">
                        <ArrowRight size={20} />
                     </button>
                  </div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -z-10 top-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"></div>
             <div className="absolute -z-10 bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-[80px]"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
