import React from 'react';
import Button from './ui/Button';
import { Instagram, Facebook, Twitter, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral-950 text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
                <div className="text-3xl font-bold tracking-wide mb-6">CozyNest</div>
                <p className="text-neutral-400 text-sm max-w-sm mb-8">
                    Escape the ordinary. Experience nature in its purest form without sacrificing comfort. Your sanctuary awaits.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-all">
                        <Instagram size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-all">
                        <Facebook size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-all">
                        <Twitter size={18} />
                    </a>
                </div>
            </div>

            <div>
                <h4 className="text-lg font-medium mb-6">Explore</h4>
                <ul className="space-y-4 text-sm text-neutral-400">
                    <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#accommodation" className="hover:text-white transition-colors">Accommodation</a></li>
                    <li><a href="#leisure" className="hover:text-white transition-colors">Activities</a></li>
                    <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
                    <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-lg font-medium mb-6">Newsletter</h4>
                <p className="text-neutral-400 text-xs mb-4">Subscribe for exclusive offers.</p>
                <div className="relative">
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-4 text-sm focus:outline-none focus:border-white/30 transition-colors text-white placeholder:text-neutral-600"
                    />
                    <button className="absolute right-1 top-1 w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 hover:scale-95 transition-transform cursor-pointer">
                        <Send size={16} className="-ml-1" />
                    </button>
                </div>
            </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
            <div>© 2026 CozyNest. All rights reserved.</div>
            <div className="flex gap-6">
                <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
