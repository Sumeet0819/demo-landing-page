import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    // Animate the numbers
    tl.from(".stat-value", {
      textContent: 0,
      duration: 2.5,
      ease: "power1.out",
      snap: { textContent: 1 },
      stagger: 0.2,
    })
    // Animate the whole items fade in
    .from(".stat-item", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }, "<");

    // Parallax image
    gsap.from(".stat-image", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
      y: 100,
    });

  }, { scope: containerRef });

  return (
    <div id="about" ref={containerRef} className="py-24 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          
          <div className="space-y-16">
             <div className="stat-item group">
               <h3 className="text-4xl lg:text-6xl font-bold font-display text-primary mb-2 flex items-baseline">
                 <span className="stat-value">10</span>+ <span className="text-2xl lg:text-3xl ml-2 text-accent">Million</span>
               </h3>
               <p className="text-secondary text-sm max-w-xs group-hover:text-primary transition-colors">
                 Ut Sit Amet Consectetur. Vitae Quam Mauris Habitasse Molestie Mattis Erat Cras Suspendisse Urna.
               </p>
             </div>
             
             <div className="stat-item group">
               <h3 className="text-4xl lg:text-6xl font-bold font-display text-primary mb-2 flex items-baseline">
                 <span className="stat-value">8</span>x <span className="text-2xl lg:text-3xl ml-2 text-accent">More</span>
               </h3>
               <p className="text-secondary text-sm max-w-xs group-hover:text-primary transition-colors">
                 Ut Sit Amet Consectetur. Vitae Quam Mauris Habitasse Molestie Mattis Erat Cras Suspendisse Urna.
               </p>
             </div>
             
             <div className="stat-item group">
               <h3 className="text-4xl lg:text-6xl font-bold font-display text-primary mb-2 flex items-baseline">
                 <span className="stat-value">1</span>+ <span className="text-2xl lg:text-3xl ml-2 text-accent">Million</span>
               </h3>
               <p className="text-secondary text-sm max-w-xs group-hover:text-primary transition-colors">
                 Ut Sit Amet Consectetur. Vitae Quam Mauris Habitasse Molestie Mattis Erat Cras Suspendisse Urna.
               </p>
             </div>
          </div>

          <div className="lg:col-span-1 flex justify-center h-full">
            <div className="stat-image w-full h-[500px] rounded-full overflow-hidden relative group border-8 border-white shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2535&auto=format&fit=crop" 
                 alt="Abuja Transformation" 
                 className="w-full h-full object-cover scale-125 group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>

          <div className="space-y-8 lg:pl-10">
            <h3 className="text-4xl font-bold font-display text-primary leading-tight">
              Abuja, Nigeria. <br />
              The Transformation <br />
              Of <span className="text-accent italic font-light">Real Estate.</span>
            </h3>
            <div className="w-20 h-1 bg-accent/30 rounded-full"></div>
            <p className="text-secondary leading-relaxed text-lg">
              Experiencing A Remarkable Real Estate Transformation, Blending Modern Architecture, Smart Solution, And Rapid Urban-Scaping. With Increasing Investment And Infrastructure Developments.
            </p>
            <p className="text-secondary text-sm leading-relaxed opacity-80">
              Ut Sit Amet Consectetur. Vitae Quam Mauris Habitasse Molestie Mattis Erat Cras Suspendisse Urna. Tellus Luctus In Id Praesent Phasellus. Curabitur Adipiscing Scelerisque Et Est.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;
