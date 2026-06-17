import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { teamData, timelineData } from '../data/mockData';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo(
        '.about-el',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );

      // Team card animations
      gsap.fromTo(
        '.team-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.team-section', start: 'top 75%' }
        }
      );

      // Timeline animations
      gsap.fromTo(
        '.timeline-item',
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.timeline-section', start: 'top 75%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full pt-40 pb-20">
      
      {/* Hero Section */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center mb-32">
        <div className="about-el inline-flex items-center gap-2 text-[11px] font-semibold text-gray-500 mb-6 bg-white px-4 py-1.5 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
          Our Story
        </div>
        <h1 className="about-el text-[3rem] md:text-[5rem] font-semibold tracking-tight text-brand-dark mb-6 leading-[1.05]">
          Rooted in Tradition. <br /> Built for the Future.
        </h1>
        <p className="about-el max-w-2xl text-gray-500 text-sm md:text-[16px] leading-relaxed font-medium">
          Rultivo was born from a simple idea: farming should work with nature, not against it. We combine decades of agricultural legacy with cutting-edge robotics and AI to help farmers grow more while using less.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section px-6 md:px-8 max-w-4xl mx-auto mb-32">
        <h2 className="text-3xl font-medium text-brand-dark mb-16 text-center">Our Journey</h2>
        <div className="flex flex-col gap-8 relative border-l border-gray-300 ml-4 md:ml-12 pl-8 md:pl-12 py-4">
          {timelineData.map((item, idx) => (
            <div key={idx} className="timeline-item relative">
              {/* Dot */}
              <div className="absolute w-4 h-4 bg-brand-dark rounded-full -left-[41px] md:-left-[57px] top-1.5 border-4 border-brand-gray"></div>
              <span className="text-brand-orange font-bold text-sm tracking-widest">{item.year}</span>
              <h3 className="text-xl font-semibold text-brand-dark mt-1 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section px-6 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium text-brand-dark mb-16 text-center">Meet The Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="team-card group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-1">{member.role}</p>
                <h3 className="text-white text-2xl font-medium mb-3">{member.name}</h3>
                <p className="text-gray-300 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
