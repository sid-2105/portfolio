"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export const Section = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2 // Triggers when 20% of the element is in view
  });

  // Animation variants for the Section
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // custom cubic-bezier for smooth feel
        // Stagger children animations
        staggerChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      className={`my-8 p-4 flex items-center justify-center relative md:p-8 ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

export const WrapSection = ({ children, className }) => {
  // Animation variants for WrapSection
  const wrapVariants = {
    hidden: {
      opacity: 0,
      scale: 0.98,
      x: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        // This will animate child elements with a slight delay
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div
      className={`w-full max-w-[1024px] ${className}`}
      variants={wrapVariants}
    >
      {children}
    </motion.div>
  );
};
