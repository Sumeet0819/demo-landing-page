import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    // Move cursor logic
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    // Hover interactions
    const onHover = () => {
      gsap.to(cursor, { scale: 0.5, duration: 0.3 });
      gsap.to(follower, { scale: 3, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'transparent', duration: 0.3 });
    };

    const onLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.5)', duration: 0.3 });
    };

    document.addEventListener('mousemove', moveCursor);
    
    // Add interactions to clickable elements
    const clickables = document.querySelectorAll('a, button, .cursor-pointer');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onLeave);
    });

    // Cleanup to handle dynamic elements (optional, simple version here)
    const observer = new MutationObserver((mutations) => {
        const newClickables = document.querySelectorAll('a, button, .cursor-pointer');
        newClickables.forEach(el => {
            el.removeEventListener('mouseenter', onHover); // prevent duplicates
            el.removeEventListener('mouseleave', onLeave);
            el.addEventListener('mouseenter', onHover);
            el.addEventListener('mouseleave', onLeave);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', onHover);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  // Only show on desktop
  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] mix-blend-difference">
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default CustomCursor;
