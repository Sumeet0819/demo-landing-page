import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const services = [
  {
    id: "01",
    title: "Furniture Design",
    desc: "The design of furniture holds substantial influence over the aesthetics, ambiance, and usability of an area, exerting a profound effect on our everyday experiences."
  },
  {
    id: "02",
    title: "Interior Details",
    desc: "Incorporating interior detailing introduces dimension, tactile qualities, and captivating visual elements to a room, enhancing the overall design through the addition of those final embellishments."
  },
  {
    id: "03",
    title: "Home Revamping",
    desc: "The design of furniture holds substantial influence over the aesthetics, ambiance, and usability of an area, exerting a profound effect on our everyday experiences."
  }
];

const Services = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".service-card", 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div id="services" ref={containerRef} className="py-24 bg-neutral">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold font-display text-primary text-center mb-20">
          Our Premium <span className="text-secondary italic font-light">Services</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card p-10 rounded-[2.5rem] relative group overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                index === 0 ? 'bg-primary text-white' : 'bg-white hover:bg-primary hover:text-white'
              }`}
            >
              <div className="flex justify-between items-start mb-12">
                <span className={`text-5xl font-light font-display opacity-30 group-hover:opacity-100 transition-opacity ${index === 0 ? 'text-accent' : 'text-gray-300 group-hover:text-accent'}`}>{service.id}</span>
                <span className={`p-4 rounded-full transition-all duration-500 transform group-hover:rotate-45 ${index === 0 ? 'bg-white/10' : 'bg-gray-50 group-hover:bg-white/10'}`}>
                  <ArrowUpRight size={24} className={index !== 0 ? 'text-primary group-hover:text-white' : ''} />
                </span>
              </div>
              
              <h3 className="text-3xl font-bold font-display mb-6">{service.title}</h3>
              <p className={`text-sm leading-relaxed max-w-xs ${index === 0 ? 'text-gray-300' : 'text-secondary group-hover:text-gray-300'}`}>
                {service.desc}
              </p>
              
              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors blur-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
