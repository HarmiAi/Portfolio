import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const PremiumButton = ({ children, icon: Icon, href, onClick, className = "", ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    
    // Magnetic pull displacement (limit to 12px)
    const maxDisplacement = 12;
    const x = (deltaX / (width / 2)) * maxDisplacement;
    const y = (deltaY / (height / 2)) * maxDisplacement;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const ButtonContent = () => (
    <>
      {/* Morphing background layer */}
      <motion.div 
        className="absolute inset-0 bg-[#84a98c] rounded-full z-0"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1.05 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      
      {/* Label Text */}
      <motion.span 
        className="relative z-10 font-sans font-bold text-xs tracking-widest uppercase transition-colors"
        animate={{ color: isHovered ? '#0b0f14' : '#f8fafc' }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.span>
      
      {/* Icon Wrapper */}
      {Icon && (
        <div className="relative z-10 ml-4 w-9 h-9 rounded-full bg-[#11161d] border border-[#354f52]/40 flex items-center justify-center overflow-hidden">
          {/* Animated sliding icon */}
          <motion.div
            className="flex items-center justify-center w-full h-full text-[#f8fafc]"
            animate={{ 
              x: isHovered ? [0, 26, -26, 0] : 0,
              color: isHovered ? '#0b0f14' : '#f8fafc',
              backgroundColor: isHovered ? '#f8fafc' : '#11161d'
            }}
            transition={{ 
              x: isHovered ? { duration: 0.6, times: [0, 0.4, 0.41, 1], ease: "easeInOut" } : { duration: 0.3 },
              color: { duration: 0.5 },
              backgroundColor: { duration: 0.5 }
            }}
          >
            <Icon className="text-xs" />
          </motion.div>
        </div>
      )}
    </>
  );

  const wrapperClasses = `relative overflow-hidden inline-flex items-center pl-6 pr-2.5 py-2 rounded-full bg-[#0b0f14] border border-[#354f52]/40 shadow-lg cursor-pointer select-none ${className}`;

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={wrapperClasses}
        {...props}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={wrapperClasses}
      {...props}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default PremiumButton;
