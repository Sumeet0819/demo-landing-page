import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Properties from './components/Properties';
import Guide from './components/Guide';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Blog from './components/Blog';
import Services from './components/Services';
import Footer from './components/Footer';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

function App() {
  
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Get the timestamp from the callback to render lenis
    function update(time) {
      lenis.raf(time * 1000);
    }
    
    // Bind GSAP ticker to Lenis
    gsap.ticker.add(update);
    
    // Disable lag smoothing in GSAP to prevent jumps during heavy loads
    gsap.ticker.lagSmoothing(0);

    // Sync ScrollTrigger with Lenis scroll event
    lenis.on('scroll', ScrollTrigger.update);

    // Initial refresh
    ScrollTrigger.refresh();

    // Handle anchor clicks for smooth scrolling with Lenis
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a');
      if (link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          if (targetId === '' || targetId === 'top') {
             lenis.scrollTo(0);
          } else {
             const targetElem = document.getElementById(targetId);
             if (targetElem) {
               lenis.scrollTo(targetElem);
             }
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      // Cleanup
      lenis.destroy();
      gsap.ticker.remove(update);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral selection:bg-accent/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Properties />
        <Guide />
        <Testimonials />
        <Stats />
        <Blog />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
