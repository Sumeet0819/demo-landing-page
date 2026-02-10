import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useReveal = (config = {}) => {
  const ref = useRef(null);
  const { 
    from = { y: 50, opacity: 0 }, 
    to = { y: 0, opacity: 1 }, 
    duration = 1, 
    ease = "power2.out", 
    delay = 0,
    scrollTrigger = {}
  } = config;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(element, 
        from,
        { 
          ...to, 
          duration, 
          ease, 
          delay,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
            ...scrollTrigger
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [JSON.stringify(config)]); // careful with dependencies

  return ref;
};

export default useReveal;
