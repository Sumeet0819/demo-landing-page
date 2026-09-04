import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Technology Irrigation',
    img: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop',
    number: '01',
    hasControls: true
  },
  {
    topTitle: 'Get\nStarted Now',
    title: 'Organic Fertilizer',
    img: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    number: '02',
    isCTA: true
  },
  {
    title: 'Technology Irrigation',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop',
    number: '03'
  },
  {
    title: 'Agricultural Monitoring',
    img: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    number: '04'
  }
];

const FeaturesGallery = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feat-text',
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );

      gsap.fromTo(
        '.feat-img-container',
        { y: 100, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.feat-gallery', start: 'top 80%' }
        }
      );

      // Parallax effect on images
      gsap.utils.toArray('.parallax-img').forEach(img => {
        gsap.fromTo(img, 
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-[1400px] mx-auto px-6 py-20 md:py-32 overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
        <div className="flex flex-col gap-16 w-full md:w-1/3">
          <span className="feat-text opacity-0 text-sm font-medium text-gray-500">2024</span>
          <div className="feat-text opacity-0 flex gap-4 text-[10px] font-semibold uppercase tracking-widest cursor-pointer">
            <span className="text-brand-dark hover:text-brand-orange transition-colors">Organic farm</span>
            <span className="text-gray-400 hover:text-brand-dark transition-colors">Automation farm</span>
            <span className="text-gray-400 hover:text-brand-dark transition-colors">Bio-medical farm</span>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 feat-text opacity-0 flex flex-col gap-8">
          <h2 className="text-2xl md:text-4xl font-medium text-brand-dark leading-snug">
            Despite Advances In Agri-Tech, Traditional Labor-Intensive Farming Highlights Ongoing Inefficiencies.
          </h2>
          <div className="flex gap-12 text-xs font-semibold text-gray-400 uppercase tracking-widest cursor-pointer">
            <span className="hover:text-brand-dark transition-colors">Harvesting Legacy</span>
            <span className="hover:text-brand-dark transition-colors">Planting Tomorrow</span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="feat-gallery grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        {features.map((feat, idx) => (
          <div key={idx} className={`feat-img-container opacity-0 flex flex-col gap-4 ${idx === 0 ? 'pb-12' : ''} ${feat.isCTA ? 'pb-8' : ''}`}>
            
            {/* Top Content for CTA card */}
            {feat.isCTA && (
              <div className="flex justify-between items-start w-full px-2">
                <h3 className="text-2xl font-medium text-brand-dark leading-tight whitespace-pre-line group-hover:text-brand-orange transition-colors duration-300 cursor-pointer">
                  {feat.topTitle}
                </h3>
                <div className="bg-brand-dark text-white p-2 rounded-full cursor-pointer hover:bg-brand-orange hover:scale-110 transition-all duration-300 shrink-0 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            )}

            <div className={`relative rounded-3xl overflow-hidden group ${idx === 0 ? 'aspect-[3/4]' : (idx === 1 ? 'aspect-[4/5]' : 'aspect-[3/4]')}`}>
              <img 
                src={feat.img} 
                alt={feat.title || feat.topTitle} 
                className="parallax-img w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="flex justify-between items-center px-2 font-medium">
              <span className="text-xs text-brand-dark">{feat.number}</span>
              <h3 className="text-xs text-brand-dark">{feat.title}</h3>
            </div>

            {feat.hasControls && (
              <div className="flex justify-center gap-3 mt-4">
                <button className="p-2.5 rounded-full border border-gray-300 hover:border-brand-dark transition-colors">
                  <ArrowLeft className="w-4 h-4 text-brand-dark" />
                </button>
                <button className="p-2.5 rounded-full bg-brand-dark hover:bg-black transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGallery;
