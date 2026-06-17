import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reviewsData } from '../data/mockData';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.review-hero',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );

      gsap.fromTo(
        '.review-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.review-grid', start: 'top 80%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-20 bg-brand-gray border-t border-gray-200">
      
      {/* Header Section */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center mb-16">
        <div className="review-hero inline-flex items-center gap-2 text-[11px] font-semibold text-gray-500 mb-6 bg-white px-4 py-1.5 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
          Success Stories
        </div>
        <h2 className="review-hero text-3xl md:text-5xl font-medium tracking-tight text-brand-dark mb-6 leading-tight">
          Trusted by Farmers <br /> Around the Globe.
        </h2>
        <p className="review-hero max-w-2xl text-gray-500 text-sm md:text-base leading-relaxed font-medium">
          Don't just take our word for it. See how Rultivo is helping real agricultural businesses scale efficiently and sustainably.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="review-grid px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map((review) => (
            <div key={review.id} className="review-card group cursor-pointer bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between hover:-translate-y-3 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-transparent transition-all duration-500">
              
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-orange transform group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg md:text-xl text-brand-dark font-medium leading-relaxed mb-8 group-hover:text-black transition-colors duration-300">
                  "{review.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative overflow-hidden rounded-full w-12 h-12">
                  <img src={review.avatar} alt={review.author} className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark">{review.author}</h4>
                  <p className="text-xs text-gray-500 font-medium group-hover:text-brand-orange transition-colors duration-300">{review.farm}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
