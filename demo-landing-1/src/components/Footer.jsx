import React, { useRef } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".footer-col", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <footer ref={containerRef} className="bg-primary text-white pt-24 pb-10 rounded-t-[3rem] mt-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-accent/5 blur-[100px] pointer-events-none rounded-full opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="footer-col space-y-6">
            <span className="font-display font-bold text-3xl">
              Canyon<span className="text-accent">.</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Discover top listings, explore virtual tours, and connect with trusted agents in minutes.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Linkedin} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="font-bold text-lg mb-8 font-display">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <FooterLink>Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#properties">Properties</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-col">
            <h4 className="font-bold text-lg mb-8 font-display">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <FooterLink>FAQ</FooterLink>
              <FooterLink>Support Center</FooterLink>
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4 className="font-bold text-lg mb-8 font-display">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to our newsletter to get the latest update.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
              />
              <button className="absolute right-2 top-2 bg-accent w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                <Send size={18} className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-col border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Canyon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href = "#", children }) => (
  <li>
    <a href={href} className="flex items-center gap-2 hover:text-accent transition-all duration-300 group w-fit">
      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-[1px] bg-accent"></span>
      {children}
    </a>
  </li>
)

const SocialIcon = ({ icon: Icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-transparent flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1">
    <Icon size={18} />
  </a>
);

export default Footer;
