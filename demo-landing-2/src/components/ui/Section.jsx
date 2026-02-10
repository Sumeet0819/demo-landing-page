import React from 'react';

const Section = ({ 
  children, 
  id, 
  className = "", 
  containerClass = "",
  dark = true 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 px-6 md:px-12 relative ${dark ? 'bg-neutral-900 text-white' : 'bg-stone-50 text-neutral-900'} ${className}`}
    >
      <div className={`max-w-7xl mx-auto ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
