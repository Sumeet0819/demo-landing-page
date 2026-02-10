import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Accommodation from './components/Accommodation';
import Leisure from './components/Leisure';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import 'lenis/dist/lenis.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen text-white selection:bg-white/30 selection:text-white cursor-none">
      <CustomCursor />
      <Navbar />
      
      <Hero />
      
      <div className="relative z-10 bg-neutral-900">
        <About />
        <Features />
        <Accommodation />
        <Leisure />
        <Testimonials />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}

export default App;
