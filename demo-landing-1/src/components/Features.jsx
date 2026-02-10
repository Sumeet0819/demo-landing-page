import React, { useRef } from 'react';
import { Waves, Trees, Maximize } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const featuresData = [
  {
    icon: Waves,
    title: "Private Pool",
    desc: "Enhance Relaxation And Exclusivity."
  },
  {
    icon: Trees,
    title: "Private Garden",
    desc: "Provides Greenery And A Serene Environment."
  },
  {
    icon: Maximize,
    title: "Spacious Balcony",
    desc: "Offers Great Views And Outdoor Relaxation."
  }
];

const Features = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(".feature-card", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });
  }, { scope: containerRef });

  const handleMouseEnter = (e) => {
    const icon = e.currentTarget.querySelector('.feature-icon');
    gsap.to(icon, { scale: 1.1,  duration: 0.3, ease: "back.out(1.7)" });
  };

  const handleMouseLeave = (e) => {
    const icon = e.currentTarget.querySelector('.feature-icon');
    gsap.to(icon, { scale: 1,  duration: 0.3, ease: "power1.out" });
  };

  return (
    <div ref={containerRef} className="bg-neutral py-24 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card flex items-center gap-6 flex-1 min-w-[300px] p-6 rounded-2xl  hover:shadow-lg transition-all duration-300 cursor-default group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="feature-icon w-16 h-16 rounded-full bg-secondary-light/10 flex items-center justify-center flex-shrink-0 text-secondary group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                <feature.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-primary mb-2 group-hover:translate-x-1 transition-transform">{feature.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
