import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Entry Animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(imageRef.current, 
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8 }
      );
      
      tl.fromTo(textRef.current.children, 
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 1.2 },
          "-=1.2"
      );

      // Scroll Parallax Effect
      gsap.to(imageRef.current, {
          yPercent: 30, // Stronger parallax
          ease: 'none',
          scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true
          }
      });
    }, containerRef); 

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-start">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none bg-black">
        <img 
            ref={imageRef}
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop" 
            alt="Golf Course Landscape" 
            className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-[1280px] pt-20">
        <div ref={textRef} className="max-w-4xl text-white">
          <div className="inline-flex items-center gap-3 mb-6 mix-blend-screen opacity-90">
             <span className="w-12 h-[1px] bg-white/60" />
             <span className="text-sm md:text-base uppercase tracking-[0.25em] font-medium text-white/80">Est. 1924 • Pebble Creek</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-medium leading-[0.9] mb-8 tracking-tight drop-shadow-2xl">
            Unwind, Play, and <br/> 
            <span className="italic font-light text-primary-light brightness-125">Perfect Your Swing</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 font-light mb-12 max-w-xl leading-relaxed drop-shadow-lg">
            A championship experience awaits you on lush, world-class fairways. Your Next Legendary Round Starts Here.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <button className="group bg-white/10 hover:bg-white text-white hover:text-secondary border border-white/20 backdrop-blur-md px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3">
              Join Our Team
              <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-secondary transition-colors" />
            </button>
            
            <button className="bg-primary hover:bg-primary-dark text-white border border-transparent px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-primary/20 flex items-center gap-2 transform hover:translate-x-1">
              Discover
              <span className="opacity-60 text-xs tracking-widest uppercase ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
