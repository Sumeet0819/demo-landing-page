import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const btnRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Container reveal
            gsap.from(containerRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%"
                }
            });

             // Content stagger
             gsap.from(contentRef.current.children, {
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%"
                }
            });

            // Parallax bg
            gsap.to(bgRef.current, {
                scale: 1.2,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-20 px-4 md:px-6 bg-white">
            <div ref={containerRef} className="container mx-auto max-w-[1280px] h-[500px] rounded-[3rem] relative overflow-hidden shadow-2xl group text-center flex flex-col justify-center items-center isolate">
                 {/* Background Image with Overlay */}
                 <div className="absolute inset-0 z-[-1]">
                    <img 
                        ref={bgRef}
                        src="https://images.unsplash.com/photo-1500932334442-8761ee4810a7?q=80&w=2070&auto=format&fit=crop" 
                        alt="Golf Course Sunset" 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent" />
                 </div>
                 
                 <div ref={contentRef} className="relative z-10 max-w-4xl px-6">
                    <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white/80 mb-6 backdrop-blur-md">
                        Membership 2024
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-8 leading-[0.9] tracking-tight">
                        Ready to <span className="italic font-light text-primary-light">Tee Off?</span> <br/>
                        Join the Legacy.
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 font-light mb-12 max-w-xl mx-auto leading-relaxed">
                        Experience the pinnacle of golfing luxury. Limited memberships available for the upcoming season.
                    </p>
                    
                    <button ref={btnRef} className="bg-white hover:bg-primary-light text-secondary text-lg px-10 py-4 rounded-full font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto group/btn">
                        Become a Member 
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                 </div>
            </div>
        </section>
    );
}
