import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Trees, Flag, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const satData = [
    { value: 18, label: "Championship Holes", icon: Flag },
    { value: 1530, label: "Acres of Green", icon: Trees },
    { value: 50, label: "Years of Heritage", icon: Trophy },
    { value: 9200, label: "Global Members", icon: Users }
];

export default function Stats() {
    const containerRef = useRef(null);
    const numRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            numRefs.current.forEach((el, index) => {
                if(!el) return;
                const endValue = satData[index].value;
                
                const obj = { val: 0 };
                
                gsap.to(obj, {
                    val: endValue,
                    duration: 2.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    onUpdate: () => {
                        el.innerText = Math.floor(obj.val) + "+";
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-secondary text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary" />
            
            <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center max-w-[1280px] relative z-10">
                {satData.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <div key={i} className="flex flex-col items-center group cursor-default p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                            <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-primary group-hover:text-white text-primary transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6">
                                <Icon size={32} strokeWidth={1.5} />
                            </div>
                            <span 
                                ref={el => numRefs.current[i] = el}
                                className="text-4xl md:text-6xl font-display font-bold text-white mb-2 block tracking-tight"
                            >
                                0+
                            </span>
                            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-primary-light transition-colors duration-300">
                                {s.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
