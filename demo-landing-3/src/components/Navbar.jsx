import { useRef, useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    // Initial entry with a slight bounce
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
    );

    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Academy', href: '#academy' },
    { name: 'Course', href: '#course' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
        <nav 
          ref={navRef} 
          className={`
            pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
            flex items-center justify-between
            ${isScrolled 
                ? 'bg-white/80 backdrop-blur-xl shadow-2xl w-[90%] md:w-[850px] rounded-full py-2 pl-5 pr-2 border border-white/50' 
                : 'bg-transparent w-full max-w-[1280px] py-6 px-0 border-transparent'
            }
          `}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group mr-4 md:mr-8 shrink-0">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
              ${isScrolled ? 'bg-secondary text-white' : 'bg-white/10 text-white backdrop-blur-md'}
            `}>
              <span className="font-display font-bold text-lg">G</span>
            </div>
            <span className={`font-display font-bold text-lg tracking-tight transition-colors duration-300 ${isScrolled ? 'text-secondary' : 'text-white'}`}>
              GolfResort<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-secondary/5 rounded-full p-1 relative">
             {/* Sliding Background Pill (concept) - implemented simply via hover states for now, or we can use layoutId if we had Framer Motion */}
             {navLinks.map((link) => (
               <a 
                 key={link.name}
                 href={link.href}
                 onMouseEnter={() => setActiveLink(link.name)}
                 onMouseLeave={() => setActiveLink(null)}
                 className={`
                    relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${isScrolled ? 'text-secondary' : 'text-white'}
                    hover:text-secondary
                 `}
               >
                 {activeLink === link.name && (
                    <span className="absolute inset-0 bg-white rounded-full shadow-sm -z-10 animate-fade-in-fast" />
                 )}
                 {link.name}
               </a>
             ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-2 ml-4 shrink-0">
            <button className={`
               group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
               ${isScrolled 
                  ? 'bg-secondary text-white hover:bg-primary' 
                  : 'bg-white text-secondary hover:bg-white/90 shadow-lg shadow-black/5'}
            `}>
              Book Tee Time
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-secondary hover:bg-secondary/5' : 'text-white hover:bg-white/10'}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-40 bg-secondary/95 backdrop-blur-3xl transition-all duration-500
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
        flex flex-col justify-center items-center gap-8
      `}>
          {navLinks.map((link, i) => (
             <a 
                key={link.name} 
                href={link.href} 
                className="text-4xl font-display font-medium text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${i * 100}ms` }}
             >
                {link.name}
             </a>
          ))}
          <button className="mt-8 bg-white text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-xl">
             Book a Tee Time
          </button>
      </div>
    </>
  );
}
