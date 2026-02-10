import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current, {
                opacity: 0,
                x: 80,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    toggleActions: "play none none reverse"
                }
            });

            gsap.from(imageRef.current, {
                scale: 0.9,
                opacity: 0,
                y: 100,
                duration: 1.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-[1280px]">
                {/* Image */}
                <div ref={imageRef} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group cursor-none">
                    <img 
                        src="https://images.unsplash.com/photo-1605144884374-ecbb643615f6?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Golfer putting" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Floating Overlay Card */}
                    <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="font-display font-medium text-lg italic text-secondary">
                            "The perfect swing is a journey, not a destination."
                        </p>
                    </div>
                </div>

                {/* Text */}
                <div ref={contentRef} className="lg:pl-8">
                    <div className="flex gap-3 mb-6">
                        <span className="bg-accent text-secondary/80 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Our Story</span>
                        <span className="border border-secondary/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-secondary/60">About us</span>
                         <span className="border border-secondary/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-secondary/60">Game</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-display font-medium text-secondary mb-10 leading-[1] tracking-tight">
                        A Premier Golfing <br/> <span className="text-primary italic font-light">Destination</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                         <img 
                            src="https://images.unsplash.com/photo-1500932334442-8761ee4810a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            className="rounded-xl aspect-square object-cover shadow-md hover:scale-105 transition-transform duration-500"
                         />
                         <div className="flex flex-col justify-center">
                            <p className="text-lg text-secondary/70 font-light leading-relaxed mb-6">
                                Established in <span className="text-primary font-medium">1986</span>, Pine Ridge Golf Club spans over <span className="text-primary font-medium">150 acres</span> of rolling hills, mature trees, and breathtaking water features.
                            </p>
                             <p className="text-lg text-secondary/70 font-light leading-relaxed">
                                Designed by renowned architect Robert Trent Jones Jr., the course challenges pros while welcoming casual players.
                            </p>
                         </div>
                    </div>

                    <button className="bg-secondary text-white px-8 py-4 rounded-full font-medium transition-all shadow-xl hover:bg-primary hover:scale-105 transform active:scale-95 flex items-center w-fit gap-3 group">
                        Discover 
                         <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
