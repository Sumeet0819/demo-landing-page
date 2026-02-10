import React, { useRef } from 'react';
import { Star, PlayCircle, Quote, ArrowRight } from 'lucide-react';
import { testimonials } from '../data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".testimonial-content", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".testimonial-image", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="py-20 bg-neutral relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold font-display text-center mb-20">
          Satisfied Clients <span className="text-accent italic font-light">Speak.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Grid Images/Video Placeholder */}
          <div className="testimonial-image relative h-[450px] md:h-[550px] group">
            <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gray-200 rounded-[2rem] overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors duration-500 cursor-pointer">
                 <PlayCircle size={64} className="text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
               </div>
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-white p-4 rounded-[2rem] shadow-2xl transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop" 
                 alt="Interior" 
                 className="w-full h-full object-cover rounded-3xl"
               />
            </div>
          </div>

          {/* Right - Content */}
          <div className="testimonial-content space-y-8">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative group">
                <div className="absolute top-8 right-8 text-accent/20">
                  <Quote size={48} fill="currentColor" />
                </div>
                
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-50" />
                    <div className="absolute -bottom-1 -right-1 bg-accent rounded-full p-1 text-white">
                      <Star size={10} fill="currentColor" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-primary">{item.name}</h4>
                    <p className="text-secondary text-sm">{item.role}</p>
                    <div className="flex gap-1 mt-2 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-secondary italic leading-relaxed relative z-10">
                  "{item.quote}"
                </p>
                
                <div className="pt-8">
                  <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-accent transition-colors flex items-center gap-2 group/btn">
                    See More 
                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
