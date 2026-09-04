import React from 'react';
import Section from './ui/Section';
import { ArrowUpRight, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const CabinCard = ({ image, title, guests, large = false }) => (
  <div className={`relative group overflow-hidden rounded-3xl ${large ? 'h-[500px] md:h-[640px]' : 'h-[300px]'}`}>
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
        <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white mb-2">
                <Users size={12} /> {guests} people
            </div>
            <h3 className="text-white text-lg font-medium">{title}</h3>
        </div>
        <button className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:scale-110 transition-transform">
            <ArrowUpRight size={20} />
        </button>
    </div>
  </div>
);

const Accommodation = () => {
  const containerRef = React.useRef(null);

  useGSAP(() => {
    gsap.from('.cabin-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <Section id="accommodation" dark className="pb-0">
      <div ref={containerRef}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <span className="text-sm font-mono text-neutral-500 block mb-2">(02)</span>
                <h2 className="text-xl font-medium text-neutral-400 mb-8">Accommodation</h2>
            </div>
            <p className="md:max-w-md text-2xl font-light leading-tight">
                Every morning you will wake up to birds singing and enjoy views of picturesque forests, meadows and reservoirs.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card - Left Column */}
            <div className="md:col-span-1 cabin-card">
                <CabinCard 
                    image="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1000&auto=format&fit=crop"
                    title="Lodge with pool"
                    guests="1-6"
                    large
                />
            </div>

            {/* Grid - Right Column (2x2) */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                    { title: 'Lodge Family', guests: '1-4', img: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1000&auto=format&fit=crop' },
                    { title: 'A-frame', guests: '1-2', img: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1000&auto=format&fit=crop' },
                    { title: 'Lodge with grill', guests: '1-4', img: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1000&auto=format&fit=crop' },
                    { title: 'Lodge Standard', guests: '1-2', img: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop' }
                ].map((cabin, i) => (
                    <div key={i} className="cabin-card">
                        <CabinCard 
                            image={cabin.img}
                            title={cabin.title}
                            guests={cabin.guests}
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Accommodation;
