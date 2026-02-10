import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "PGA Instructors",
    desc: "No gimmicks, no hacks. Just proven coaching methods from tour-level professionals.",
    img: "https://images.unsplash.com/photo-1633597467998-cae481a6be4e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Private", "Group"]
  },
  {
    title: "Elegant Clubhouse",
    desc: "Locally sourced ingredients, gourmet meals, and sunset views. Latest golf gear, branded apparel and expert fitting services.",
    img: "https://images.unsplash.com/photo-1761971976407-db2374e4ae12?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Dining", "Social"]
  },
  {
    title: "Lush Landscape",
    desc: "No downloads, no setup—just breathtaking scenery and challenging hazards at every hole.",
    img: "https://images.unsplash.com/photo-1743625749446-f16eefdb1a07?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Green View", "Drill"]
  }
];

export default function Academy() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
        // Use a timeline for more stability with ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(".academy-card", {
            y: 150,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out"
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out"
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="academy" className="py-24 md:py-32 bg-white text-secondary relative">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase block mb-6">Golf Academy</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 leading-tight">
                Professional Coaching & <br/> <span className="italic font-light text-secondary/60">Golf Academy</span>
            </h2>
            <p className="text-secondary/60 text-lg md:text-xl font-light leading-relaxed">
                Locally sourced ingredients, gourmet meals, and sunset views. Latest golf gear, branded apparel, and expert fitting services.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
                <div key={i} className="academy-card group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Image */}
                    <img 
                        src={s.img} 
                        alt={s.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Tags */}
                    <div className="absolute top-6 right-6 flex gap-2">
                         {s.tags.map((tag, idx) => (
                             <span key={idx} className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{tag}</span>
                         ))}
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl font-display font-bold mb-3 text-white">{s.title}</h3>
                        <p className="text-white/80 font-light text-base opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 mb-6 leading-relaxed">
                            {s.desc}
                        </p>
                        
                        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                             <button className="bg-white text-secondary px-6 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-colors">
                                 Read more →
                             </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
