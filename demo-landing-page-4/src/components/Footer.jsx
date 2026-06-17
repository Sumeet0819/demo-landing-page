import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F7F7F7] px-6 py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        {/* Brand */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 pr-10">
          <div className="flex items-center gap-2 font-bold text-xl text-brand-dark">
            <div className="relative w-5 h-5 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-brand-dark rounded-full absolute top-0"></div>
              <div className="w-1.5 h-1.5 bg-brand-dark rounded-full absolute bottom-0"></div>
              <div className="w-1.5 h-1.5 bg-brand-dark rounded-full absolute left-0"></div>
              <div className="w-1.5 h-1.5 bg-brand-dark rounded-full absolute right-0"></div>
              <div className="w-2 h-2 bg-brand-dark rounded-sm rotate-45"></div>
            </div>
            <span className="text-xl tracking-tight">Cultiva</span>
          </div>
          <p className="text-gray-500 text-xs max-w-sm leading-relaxed font-medium">
            We are a custom build builder located in Dallas, TX, 
            serving Highland Park, Preston Hollow, and surrounding areas.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="p-2.5 rounded-full border border-gray-300 hover:border-brand-dark hover:text-brand-dark text-gray-500 transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="p-2.5 rounded-full border border-gray-300 hover:border-brand-dark hover:text-brand-dark text-gray-500 transition-colors">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="p-2.5 rounded-full border border-gray-300 hover:border-brand-dark hover:text-brand-dark text-gray-500 transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="p-2.5 rounded-full border border-gray-300 hover:border-brand-dark hover:text-brand-dark text-gray-500 transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-medium">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-brand-dark mb-2 tracking-wide uppercase text-[10px]">COMPANY</h4>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Features</a>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Pricing</a>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">About Us</a>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-brand-dark mb-2 tracking-wide uppercase text-[10px]">RESOURCE</h4>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Blog</a>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Customer Stories</a>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Information</a>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Legal</a>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Payment</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-brand-dark mb-2 tracking-wide uppercase text-[10px]">CAREER</h4>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Jobs</a>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Hiring</a>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">News</a>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Tips & Tricks</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-brand-dark mb-2 tracking-wide uppercase text-[10px]">HELP</h4>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">FAQ</a>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Help Center</a>
            <a href="#" className="text-gray-500 hover:text-brand-dark transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
