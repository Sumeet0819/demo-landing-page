import React from 'react';
import Section from './ui/Section';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const activities = [
    {
        title: "Spa & Wellness",
        desc: "Relax in our panoramic sauna or book a massage session right in your cabin.",
        img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Forest Trails",
        desc: "Miles of marked trails for hiking, running, or cycling through the ancient pine forest.",
        img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Gastronomy",
        desc: "Organic breakfast delivered to your door and a restaurant with local cuisine nearby.",
        img: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Winter Sports",
        desc: "Cross-country skiing and snowshoeing equipment available for rent during winter.",
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop"
    }
];

const Leisure = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        gsap.from('.leisure-card', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power2.out'
        });
    }, { scope: containerRef });

  return (
    <Section id="leisure" dark className="min-h-[60vh]">
        <div ref={containerRef}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                <div>
                    <span className="text-sm font-mono text-neutral-500 block mb-2">(03)</span>
                    <h2 className="text-xl font-medium text-neutral-400">Leisure</h2>
                </div>
                <div className="md:max-w-md text-right">
                    <h3 className="text-2xl md:text-3xl font-light leading-tight">
                        Here begin adventures, new gastronomic experiences, and harmony with nature.
                    </h3>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {activities.map((item, i) => (
                    <div key={i} className="leisure-card group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                            <h4 className="text-xl font-medium text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {item.title}
                            </h4>
                            <p className="text-sm text-neutral-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
  );
};

export default Leisure;
