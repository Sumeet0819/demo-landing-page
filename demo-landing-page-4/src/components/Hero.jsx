import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-el',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );

      // Continuous floating animation for stars
      gsap.to('.hero-star', {
        y: '-=15',
        rotation: 10,
        yoyo: true,
        repeat: -1,
        duration: 2,
        ease: 'sine.inOut',
        stagger: 0.5,
        delay: 1.5 // Start after entrance
      });

      gsap.to(imgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Mouse parallax for title
      const handleMouseMove = (e) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 30;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 30;
        gsap.to(titleRef.current, { x: xPos, y: yPos, duration: 1, ease: 'power2.out' });
      };

      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full pt-40 flex flex-col items-center overflow-hidden">
      {/* Background with vertical lines pattern */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[-1] opacity-30 flex justify-between px-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-full border-l border-dashed border-gray-300"></div>
        ))}
      </div>

      {/* Decorative stars */}
      <div className="hero-star absolute top-48 left-[15%] text-[#0F3F34] hero-el opacity-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="currentColor"/></svg>
      </div>
      <div className="hero-star absolute top-40 right-[15%] text-[#0F3F34] hero-el opacity-0 scale-75">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="currentColor"/></svg>
      </div>
      <div className="hero-star absolute top-80 right-[25%] text-[#0F3F34] hero-el opacity-0 scale-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="currentColor"/></svg>
      </div>
      <div className="hero-star absolute top-[60%] left-[25%] text-[#0F3F34] hero-el opacity-0 scale-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="currentColor"/></svg>
      </div>

      {/* Top content */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center z-10 flex flex-col items-center">
        <div className="hero-el opacity-0 inline-flex items-center gap-2 text-[11px] font-semibold text-gray-500 mb-6 bg-white px-4 py-1.5 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
          Top Notch Webinar Platform
        </div>
        
        <h1 ref={titleRef} className="hero-el opacity-0 text-[3.5rem] md:text-[5rem] font-semibold tracking-tight text-brand-dark mb-6 leading-[1.05]">
          Bring Fresh Growth <br /> To Agriculture.
        </h1>
        
        <p className="hero-el opacity-0 max-w-lg text-gray-500 text-sm md:text-[15px] mb-10 leading-relaxed font-medium">
          Experience the ultimate agricultural journey with expert insights, <br className="hidden md:block"/> premium solutions, and sustainable practices.
        </p>

        <button className="hero-el opacity-0 group bg-[#2A2B27] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-orange transition-colors duration-500 flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(255,90,31,0.3)]">
          Get Started <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full mt-24 overflow-hidden relative h-[50vh] md:h-[70vh] hero-el opacity-0">
        {/* Top fade gradient */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
        
        <img 
          ref={imgRef}
          src="https://images.unsplash.com/photo-1511199791920-1675ac669a78?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Agricultural Landscape" 
          className="absolute top-[0%] left-0 w-full h-[100%] object-cover"
        />
        
        {/* Bottom overlay text on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-16 py-8 md:py-12 flex flex-col md:flex-row justify-between items-end">
          <h2 className="text-white text-3xl md:text-[2.5rem] font-medium leading-tight">
            The Journey to a <br /> Perfection.
          </h2>
          <div className="mt-4 md:mt-0 text-white text-base md:text-lg font-medium">
            Book a Free Consultation
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
