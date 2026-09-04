import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogData } from '../data/mockData';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.blog-hero',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo(
        '.blog-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.blog-grid', start: 'top 80%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full pt-40 pb-20">
      
      {/* Hero Section */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center mb-24">
        <div className="blog-hero inline-flex items-center gap-2 text-[11px] font-semibold text-gray-500 mb-6 bg-white px-4 py-1.5 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
          Insights & News
        </div>
        <h1 className="blog-hero text-[3rem] md:text-[5rem] font-semibold tracking-tight text-brand-dark mb-6 leading-[1.05]">
          Thoughts On The <br /> Future Of Farming.
        </h1>
        <p className="blog-hero max-w-2xl text-gray-500 text-sm md:text-[16px] leading-relaxed font-medium">
          Dive into our latest research, farm management strategies, and updates on the newest agricultural technology trends.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogData.map((post) => (
            <div key={post.id} className="blog-card flex flex-col gap-6 group cursor-pointer">
              
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9]">
                <img 
                  src={post.thumbnail} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold text-brand-dark">
                  {post.category}
                </div>
              </div>
              
              <div className="flex flex-col pr-4">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-medium text-brand-dark mb-4 leading-snug group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                  Read Article <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Blog;
