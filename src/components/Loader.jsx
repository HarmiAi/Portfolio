import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const name = "Harmi Pagada";

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      filter: "blur(12px)",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const letterVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      textShadow: '0 0 0px rgba(132, 169, 140, 0)'
    },
    visible: { 
      y: 0, 
      opacity: 1,
      textShadow: '0 0 12px rgba(132, 169, 140, 0.6), 0 0 24px rgba(132, 169, 140, 0.3)',
      transition: { 
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: '160px', 
      opacity: 0.7,
      transition: { 
        delay: 0.9, 
        duration: 0.6, 
        ease: "easeInOut" 
      } 
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#071714]"
    >
      <div className="relative flex flex-col items-center select-none">
        <h1 className="flex overflow-hidden text-3xl sm:text-5xl font-black tracking-widest text-[#f8fafc] font-sans">
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`inline-block ${char === " " ? "w-3 sm:w-5" : ""}`}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        
        {/* Accent glow scratch line below */}
        <motion.div
          variants={lineVariants}
          className="h-[2px] mt-3 bg-[#84a98c] shadow-[0_0_8px_#84a98c]"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.1, duration: 0.4 }}
          className="text-[10px] uppercase tracking-[0.25em] text-[#cad2c5] mt-2.5"
        >
          Loading Portfolio
        </motion.p>
      </div>

      {/* Decorative center orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#84a98c]/5 rounded-full blur-[80px] pointer-events-none" />
    </motion.div>
  );
};

export default Loader;
