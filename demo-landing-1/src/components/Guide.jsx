import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const steps = [
  {
    step: "Step 1",
    title: "Search: Use Filter To Find Properties That Match Your Needs.",
  },
  {
    step: "Step 2",
    title: "Connect: Reach Out To Agents Or Sellers Directly.",
  },
  {
    step: "Step 3",
    title: "Visit: Schedule A Tour To See The Property In Person.",
  },
  {
    step: "Step 4",
    title: "Close: Finalize The Deal And Move Into Your New Home.",
  }
];

const Guide = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(".guide-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    )
    .fromTo(".guide-step",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }, "-=0.8"
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="py-24 bg-white rounded-[3rem] mx-4 lg:mx-8 mb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative guide-title sticky top-32">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
             <h2 className="text-5xl lg:text-7xl font-bold font-display text-primary leading-tight relative z-10">
               User guide for <br />
               <span className="text-secondary/50 italic font-light">First Timers</span>
             </h2>
             <p className="mt-8 text-lg text-secondary/80 max-w-sm leading-relaxed">
                Navigating the real estate market can be overwhelming. We've simplified the process for you.
             </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="guide-step flex gap-6 p-6 md:p-8 rounded-3xl border border-transparent hover:border-gray-100 hover:shadow-lg hover:bg-white transition-all duration-300 group"
              >
                <div className="flex-shrink-0 relative mt-1"> 
                   <span className="text-lg font-bold text-accent group-hover:scale-110 block transition-transform duration-300">{step.step}</span>
                   <div className="absolute -inset-3 bg-accent/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
                </div>
                <p className="text-xl font-medium text-primary leading-relaxed max-w-md group-hover:text-primary-light transition-colors">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
