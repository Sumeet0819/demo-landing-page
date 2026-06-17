import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Home } from 'lucide-react';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <nav ref={navRef} className="w-full fixed top-0 left-0 z-50 px-8 py-6 flex items-center justify-between pointer-events-none">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold pointer-events-auto cursor-pointer text-brand-dark">
        {/* Abstract logo icon for Rultivo */}
        <div className="flex gap-[2px] items-center">
          <div className="w-[5px] h-[5px] rounded-full bg-brand-dark"></div>
          <div className="flex flex-col gap-[2px]">
             <div className="w-[5px] h-[5px] rounded-full bg-brand-dark"></div>
             <div className="w-[5px] h-[5px] rounded-full bg-brand-dark"></div>
          </div>
          <div className="flex flex-col gap-[2px] mt-2">
             <div className="w-[5px] h-[5px] rounded-full bg-brand-dark"></div>
             <div className="w-[5px] h-[5px] rounded-full bg-brand-dark"></div>
          </div>
        </div>
        <span className="text-xl tracking-tight">Rultivo</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-2 bg-[#2E3129] p-1.5 rounded-full pointer-events-auto shadow-sm">
        <a href="#home" className="flex items-center gap-2 bg-white text-[#2E3129] px-5 py-2 rounded-full text-sm font-semibold transition-colors">
          <Home className="w-4 h-4" />
          Home
        </a>
        <a href="#about" className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors">About Us</a>
        <a href="#reviews" className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors">Reviews</a>
        <a href="#products" className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors">Products</a>
        <a href="#blog" className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors">Blog</a>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-6 pointer-events-auto text-brand-dark">
        <button className="hover:opacity-70 transition-opacity text-sm font-semibold">Sign In</button>
        <button className="border border-gray-400 px-5 py-2 rounded-full text-sm font-semibold hover:border-brand-dark transition-colors">
          Sign up Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
