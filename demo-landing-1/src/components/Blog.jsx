import React, { useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    id: 1,
    title: "Massive Royal Mansion In Aso-Rock Asokoro.",
    price: "$ 133,500",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Verd Residence In North Asokoro.",
    price: "$ 133,500",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Agbindion In The Rock Asokoro.",
    price: "$ 133,500",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Massive Royal Mansion In The Rock Asokoro.",
    price: "$ 133,500",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2670&auto=format&fit=crop"
  }
];

const Blog = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".blog-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <div id="blog" ref={containerRef} className="py-24 bg-neutral-dark/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-bold font-display text-primary">
            Latest <span className="text-accent italic font-light">News & Blogs</span>
          </h2>
          <div className="flex gap-2">
             <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-300 active:scale-95">
               <ArrowRight className="rotate-180" size={20} />
             </button>
             <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-all duration-300 active:scale-95">
               <ArrowRight size={20} />
             </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card group cursor-pointer">
              <div className="h-64 overflow-hidden rounded-[1.5rem] mb-5 bg-gray-200 relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-xl text-primary mb-2 line-clamp-2 leading-snug group-hover:text-accent transition-colors">
                  {blog.title}
                </h4>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-sm text-secondary bg-white px-3 py-1 rounded-full">{blog.price}</span>
                  <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <ArrowRight size={16} />
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

export default Blog;
