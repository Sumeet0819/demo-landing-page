import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { properties } from '../data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Properties = () => {
  const [activeTab, setActiveTab] = useState('Apartment');
  const containerRef = useRef(null);

  useGSAP(() => {
    // Staggered reveal
    gsap.from(".property-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  const handleCardHover = (e, enter) => {
    const img = e.currentTarget.querySelector('img');
    const badge = e.currentTarget.querySelector('.badge');
    
    if (enter) {
      gsap.to(img, { scale: 1.1, duration: 0.6, ease: "power2.out" });
      gsap.to(badge, { y: -5, opacity: 1, duration: 0.3 });
    } else {
      gsap.to(img, { scale: 1, duration: 0.6, ease: "power2.out" });
      gsap.to(badge, { y: 0, duration: 0.3 });
    }
  };

  const tabs = ['Apartment', 'Office', 'Warehouse'];

  return (
    <div id="properties" ref={containerRef} className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        {/* Tabs - Pill Shaped & Centered */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full inline-flex shadow-sm border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-500 relative z-10 ${
                  activeTab === tab
                    ? 'text-white'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md"></span> 
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="property-card group cursor-pointer bg-white rounded-[2rem] p-3 shadow-sm hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div className="relative h-72 rounded-[1.5rem] overflow-hidden mb-4 bg-gray-200">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="badge absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-primary shadow-sm" >
                  {property.category}
                </div>
              </div>
              
              <div className="px-3 pb-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold font-display text-primary mb-1 group-hover:text-accent transition-colors">{property.title}</h3>
                    <p className="text-secondary text-sm">{property.location}</p>
                  </div>
                </div>
                
                <p className="text-secondary text-xs leading-relaxed line-clamp-2 opacity-80">
                  {property.features}
                </p>

                <div className="pt-3 flex items-center justify-between border-t border-gray-100 mt-2">
                  <span className="text-lg font-bold text-primary">{property.price}</span>
                  <button className="bg-neutral-dark text-primary p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg]">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
