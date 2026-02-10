import React, { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  // Handle Scroll Effect
  useGSAP(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hover animations for links
  const handleMouseEnter = (e) => {
    gsap.to(e.target, { scale: 1.05, duration: 0.2, ease: "power1.out" });
  };
  
  const handleMouseLeave = (e) => {
    gsap.to(e.target, { scale: 1, duration: 0.2, ease: "power1.out" });
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform ${
        isScrolled 
          ? 'py-2 ' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className={`
        mx-auto transition-all duration-500 ease-in-out
        ${isScrolled 
          ? 'container max-w-5xl bg-white/70 backdrop-blur-xl rounded-full shadow-sm px-6 py-2 mt-2' 
          : 'container px-4 sm:px-6 lg:px-8 bg-transparent' 
        }
      `}>
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className={`font-display font-bold text-2xl transition-colors ${isScrolled ? 'text-primary' : 'text-primary'}`}>
              Canyon<span className="text-accent">.</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 items-center">
            {['Home', 'Properties', 'About', 'Blog'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${isScrolled 
                    ? 'text-primary hover:text-accent' 
                    : 'text-secondary hover:text-primary'
                  }
                `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item === 'About' ? 'About Us' : item}
              </a>
            ))}
            
            <button 
              className={`
                ml-4 px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:shadow-lg
                ${isScrolled ? 'bg-primary text-white hover:bg-accent' : 'bg-primary text-white hover:bg-primary-light'}
              `}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full p-4">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-4 space-y-2">
            {['Home', 'Properties', 'About Us', 'Blog'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="block px-4 py-3 rounded-xl text-base font-medium text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-2">
              <button className="w-full bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-light transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
