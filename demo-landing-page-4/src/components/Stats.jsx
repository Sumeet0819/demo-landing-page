import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: 50, suffix: '+', label: 'Year Of Experience' },
  { value: 200, suffix: '+', label: 'Field In Progress' },
  { value: 120, suffix: ',000+', label: 'Farmer Around World' },
  { value: 15, prefix: '$', suffix: ' Billion', label: 'Agricultural Product' },
];

const Stats = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-[1400px] mx-auto px-6 py-12 md:py-20 border-b border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {statsData.map((stat, idx) => (
          <div key={idx} className="stat-item opacity-0 flex flex-col gap-3 w-full md:flex-1 md:pl-10 first:pl-0 pt-6 md:pt-0 first:pt-0">
            <h3 className="text-4xl md:text-[3rem] font-medium text-brand-dark tracking-tight">
              {stat.prefix || ''}{stat.value}{stat.suffix || ''}
            </h3>
            <p className="text-[13px] text-gray-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
