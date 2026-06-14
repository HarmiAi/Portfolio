import React, { useRef, useEffect, useState } from 'react';

const InteractivePortrait = ({ className = "", style = {}, ...props }) => {
  const containerRef = useRef(null);
  const layer2Ref = useRef(null);
  
  // Coordinates and radius with interpolation/inertia
  const coordsRef = useRef({
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    currentRadius: 0,
    targetRadius: 0,
    isHovered: false
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Mobile devices do not support hover cursor mask
    if (isMobile) return;

    const container = containerRef.current;
    const layer2 = layer2Ref.current;
    if (!container || !layer2) return;

    let animationId = null;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const coords = coordsRef.current;
      coords.targetX = e.clientX - rect.left;
      coords.targetY = e.clientY - rect.top;
    };

    const handleMouseEnter = (e) => {
      const rect = container.getBoundingClientRect();
      const coords = coordsRef.current;
      coords.isHovered = true;
      coords.targetRadius = 160; // radius of reveal bubble
      coords.targetX = e.clientX - rect.left;
      coords.targetY = e.clientY - rect.top;
      // Instantly place coordinates first time to avoid dragging from (0,0)
      if (coords.currentRadius === 0) {
        coords.currentX = coords.targetX;
        coords.currentY = coords.targetY;
      }
    };

    const handleMouseLeave = () => {
      const coords = coordsRef.current;
      coords.isHovered = false;
      coords.targetRadius = 0; // shrink reveal bubble
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Damping loop
    const updateMask = () => {
      const coords = coordsRef.current;
      
      // Interpolate center coordinates
      coords.currentX += (coords.targetX - coords.currentX) * 0.12;
      coords.currentY += (coords.targetY - coords.currentY) * 0.12;
      
      // Interpolate bubble radius
      coords.currentRadius += (coords.targetRadius - coords.currentRadius) * 0.12;

      // Apply CSS webkitMaskImage directly via DOM to bypass React re-renders
      if (layer2) {
        const maskValue = `radial-gradient(circle ${coords.currentRadius}px at ${coords.currentX}px ${coords.currentY}px, black 30%, transparent 100%)`;
        layer2.style.webkitMaskImage = maskValue;
        layer2.style.maskImage = maskValue;
        
        // Slightly reveal alternative border glow on hover
        layer2.style.opacity = coords.currentRadius > 5 ? '1' : '0';
      }

      animationId = requestAnimationFrame(updateMask);
    };

    // Start loop
    updateMask();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full rounded-[24px] lg:rounded-l-[80px] lg:rounded-r-none overflow-hidden border border-[#354f52]/40 bg-[#0f1720] ${className}`}
      style={{
        ...style,
        willChange: 'transform',
      }}
      {...props}
    >
      {/* Layer 1: Professional Portrait */}
      <img
        src="/girl_portrait.png"
        alt="Harmi Pagada original portrait"
        className="w-full h-full object-cover object-center grayscale scale-102 select-none"
        draggable="false"
      />

      {/* Layer 2: Alternative Futuristic Version (masked on hover) */}
      <div 
        ref={layer2Ref}
        className="absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: 0,
          willChange: 'mask-image, -webkit-mask-image, opacity'
        }}
      >
        <img
          src="/girl_portrait_futuristic.png"
          alt="Harmi Pagada tech portrait"
          className="w-full h-full object-cover object-center scale-102 select-none"
          draggable="false"
        />
      </div>

      {/* Ambient glass glare overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none z-20" />

      {/* Luxury Editorial Corner Frames */}
      <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#84a98c]/50 pointer-events-none z-20" />
      <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#84a98c]/50 pointer-events-none z-20" />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#84a98c]/50 pointer-events-none z-20" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#84a98c]/50 pointer-events-none z-20" />

      {/* Soft overlay borders inside */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none z-20" />
    </div>
  );
};

export default InteractivePortrait;
