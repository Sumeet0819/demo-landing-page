import React, { useEffect, useState } from 'react';
import Button from './ui/Button';
import { Menu } from 'lucide-react';

const Navbar = () => {


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center text-white transition-all duration-300 bg-transparent`}>
      <div className="text-xl font-semibold tracking-wide">
        CozyNest
      </div>

      <div className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-full border transition-all duration-300 bg-white/5 border-white/10`}>
        {['Accommodation', 'Leisure', 'Gallery', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button variant="primary" className="hidden md:flex text-sm py-2 px-5">
          Book now
        </Button>
        <button className="md:hidden text-white p-2">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
