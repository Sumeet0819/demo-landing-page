import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Twitter, Linkedin, Facebook, MapPin, Mail, Phone, Sun } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    // Reveal animation
    gsap.fromTo(footerRef.current,
      { yPercent: 20, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%", 
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-secondary text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <Sun size={400} strokeWidth={0.5} />
        </div>

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="font-display text-4xl font-bold mb-6 tracking-tight">GolfResort<span className="text-primary">.</span></h3>
            <p className="text-white/60 text-base leading-relaxed mb-8 font-light">
              A sanctuary where championship fairways meet breathtaking landscapes. Designed for the purist.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
                    <Icon size={18} />
                  </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30 mb-8">Explore</h4>
            <ul className="space-y-4 text-sm text-white/70 font-medium">
              <li><a href="#about" className="hover:text-primary hover:translate-x-1 block transition-all duration-300">About Us</a></li>
              <li><a href="#academy" className="hover:text-primary hover:translate-x-1 block transition-all duration-300">The Academy</a></li>
              <li><a href="#course" className="hover:text-primary hover:translate-x-1 block transition-all duration-300">18-Hole Course</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 block transition-all duration-300">Membership</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30 mb-8">Visit Us</h4>
             <ul className="space-y-6 text-sm text-white/70 font-medium">
                <li className="flex items-start gap-4">
                    <MapPin className="text-primary shrink-0" size={20} />
                    <span>1200 Fairway Drive, <br/> Pebble Beach, CA 93953</span>
                </li>
                 <li className="flex items-center gap-4">
                    <Mail className="text-primary shrink-0" size={20} />
                    <span>concierge@golfresort.com</span>
                </li>
                 <li className="flex items-center gap-4">
                    <Phone className="text-primary shrink-0" size={20} />
                    <span>(555) 123-4567</span>
                </li>
             </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30 mb-8">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-6 font-light">Join our newsletter for exclusive offers and updates.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 text-white text-sm px-6 py-4 rounded-full w-full focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder-white/30 pr-32"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-secondary hover:bg-primary hover:text-white rounded-full px-6 text-xs font-bold uppercase tracking-wide transition-all shadow-lg transform active:scale-95">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-medium tracking-wide">
          <p>&copy; 2024 GolfResort Inc. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
