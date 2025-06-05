'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useEffect } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ 
  value, 
  duration = 2, 
  suffix = '', 
  className = '' 
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  
  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0
  });
  
  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={className}
    >
      <motion.span>{display}</motion.span>
    </motion.div>
  );
} 