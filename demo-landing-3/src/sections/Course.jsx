import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Course() {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                opacity: 0,
                x: -50,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            gsap.to(imageRef.current, {
                yPercent: 15, // Parallax movement
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
        <section ref={containerRef} id="course" className="py-32 bg-secondary/5 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1280px] grid md:grid-cols-2 gap-20 items-center">
                
                {/* Text Content */}
                <div ref={textRef} className="order-2 md:order-1 max-w-lg">
                    <span className="text-primary font-bold tracking-[0.25em] uppercase block mb-6 text-xs bg-white/50 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-secondary/5">The Challenge</span>
                    <h2 className="text-5xl md:text-7xl font-display font-medium mb-8 text-secondary leading-[1]">
                        Quality Course, <br/> <span className="italic font-light text-primary">Confident Ball.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-secondary/70 font-light leading-relaxed mb-10">
                        Our 18-hole championship course is meticulously maintained to ensure the highest quality of play. From the lush fairways to the challenging greens, every detail is crafted to test your skill.
                    </p>
                    
                    <div className="flex gap-4">
                        <button className="bg-secondary text-white px-8 py-4 rounded-full font-medium transition-all shadow-xl hover:bg-primary hover:shadow-primary/30 transform hover:-translate-y-1 flex items-center gap-3 group">
                            Download Course Guide
                            <span className="group-hover:translate-x-1 transition-transform">↓</span>
                        </button>
                    </div>

                    {/* Stats mini-grid */}
                    <div className="grid grid-cols-3 gap-6 mt-12 border-t border-secondary/10 pt-8">
                        <div>
                            <span className="block text-3xl font-display font-bold text-secondary">72</span>
                            <span className="text-xs uppercase tracking-wider text-secondary/50">Par</span>
                        </div>
                         <div>
                            <span className="block text-3xl font-display font-bold text-secondary">7.2k</span>
                            <span className="text-xs uppercase tracking-wider text-secondary/50">Yards</span>
                        </div>
                         <div>
                            <span className="block text-3xl font-display font-bold text-secondary">140</span>
                            <span className="text-xs uppercase tracking-wider text-secondary/50">Slope</span>
                        </div>
                    </div>
                </div>

                {/* Image Container with Parallax Image */}
                <div className="order-1 md:order-2 h-[600px] w-full relative overflow-hidden rounded-[2.5rem] shadow-2xl group">
                    <img 
                        ref={imageRef}
                        src="https://images.unsplash.com/photo-1623567341691-1f47b5cf949e?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Quality Course" 
                        className="absolute inset-0 w-full h-[120%] object-cover object-center -top-[10%] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Floating badge */}
                    <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg">
                        <span className="block text-2xl font-bold text-secondary text-center">18</span>
                        <span className="text-xs uppercase tracking-wider text-secondary/60">Holes</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
