'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ReactNode, Children } from 'react';

interface StaggeredGridProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  animation?: 'fadeUp' | 'scale' | 'bounce';
  threshold?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  bounce: {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3
      }
    }
  }
};

export default function StaggeredGrid({ 
  children, 
  staggerDelay = 0.1, 
  className = '',
  animation = 'fadeUp',
  threshold = 0.1
}: StaggeredGridProps) {
  const { ref, isInView } = useInView({ threshold });

  const childrenArray = Children.toArray(children);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants[animation]}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut" 
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
} 