import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = "", ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Distance from the center of the button
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    
    // Limit displacement to a maximum of 16px
    const maxDisplacement = 16;
    const x = (deltaX / (width / 2)) * maxDisplacement;
    const y = (deltaY / (height / 2)) * maxDisplacement;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.2 }}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
