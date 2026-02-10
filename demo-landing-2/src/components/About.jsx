import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        gsap.from('.about-title', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.about-content', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
            },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });

    }, { scope: containerRef });

  return (
    <Section id="about" className="min-h-[60vh] flex items-center" dark>
      <div ref={containerRef} className="w-full">
        {/* Top Row: Label and Main Headline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="about-title">
            <span className="text-sm font-mono text-neutral-500 block mb-2">(01)</span>
            <h2 className="text-xl font-medium text-neutral-400">About Us</h2>
          </div>
          
          <div className="about-content">
            <h3 className="text-2xl md:text-4xl font-light leading-tight">
              Our mission — to create ideal conditions for relaxation, where every guest can enjoy silence, clean air, and picturesque landscapes.
            </h3>
          </div>
        </div>

        {/* Bottom Row: Detailed Text and Button */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
             <div className="about-content max-w-md text-neutral-400 text-sm leading-relaxed space-y-4">
                <p>
                    Welcome to CozyNest!
                </p>
                <p>
                    We provide a unique opportunity to relax in cozy houses located in the most picturesque and quiet corners of nature. Our homes offer ideal conditions for those seeking solitude and peace away from the city hustle.
                </p>
             </div>
             
             <div className="about-content flex md:justify-end">
                <Button variant="outline" className="group">
                    Ordered <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
             </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
