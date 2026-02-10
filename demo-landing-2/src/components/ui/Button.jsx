import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-white text-neutral-900 hover:bg-neutral-200",
    outline: "border border-white/20 text-white hover:bg-white/10",
    ghost: "text-white/70 hover:text-white",
    dark: "bg-neutral-800 text-white hover:bg-neutral-700"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
