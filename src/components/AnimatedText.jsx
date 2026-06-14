import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedText = ({ 
  text, 
  className = "", 
  delay = 0, 
  once = true, 
  type = "word" // "word" or "letter" or "line"
}) => {
  // Split words or characters
  const words = type === "letter" ? text.split("") : text.split(" ");

  // Container variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === "letter" ? 0.03 : 0.05,
        delayChildren: delay,
      }
    }
  };

  // Child variants
  const childVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
      transition: { ease: [0.33, 1, 0.68, 1], duration: 0.8 }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.16, 1, 0.3, 1], duration: 0.8 }
    }
  };

  return (
    <motion.span
      className={`inline-block overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      <span className="inline-flex flex-wrap">
        {words.map((word, i) => (
          <span 
            key={i} 
            className="inline-block overflow-hidden py-1"
            style={{ marginRight: type === "letter" ? "0" : "0.25em" }}
          >
            <motion.span 
              variants={childVariants} 
              className="inline-block"
            >
              {word === " " ? "\u00A0" : word}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.span>
  );
};
export default AnimatedText;
