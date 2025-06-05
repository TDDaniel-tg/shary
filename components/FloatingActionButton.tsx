'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Phone, MessageCircle, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';

export default function FloatingActionButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { items } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const fabVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const actionButtonVariants = {
    hidden: { scale: 0, opacity: 0, y: 20 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    })
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fabVariants}
        >
          {/* Action buttons */}
          <AnimatePresence>
            {isExpanded && (
              <>
                {/* Cart button */}
                <motion.div
                  custom={0}
                  variants={actionButtonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href="/cart"
                    className="relative flex items-center justify-center w-12 h-12 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {totalItems > 0 && (
                      <motion.span
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  </Link>
                </motion.div>

                {/* WhatsApp button */}
                <motion.div
                  custom={1}
                  variants={actionButtonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href="https://wa.me/74957734375"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </motion.div>

                {/* Phone button */}
                <motion.div
                  custom={2}
                  variants={actionButtonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href="tel:+74957734375"
                    className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            onClick={isExpanded ? () => setIsExpanded(false) : scrollToTop}
            onDoubleClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center w-14 h-14 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              rotate: isExpanded ? 45 : 0,
              backgroundColor: isExpanded ? "#ec4899" : "#ec4899"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {isExpanded ? (
              <motion.div
                initial={{ rotate: -45 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                ✕
              </motion.div>
            ) : (
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowUp className="w-6 h-6" />
              </motion.div>
            )}
          </motion.button>

          {/* Tooltip */}
          <motion.div
            className="absolute right-16 bottom-2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: isExpanded ? 0 : 1, x: isExpanded ? 10 : 0 }}
            transition={{ delay: 1 }}
          >
            {isExpanded ? 'Закрыть' : 'Наверх / Двойной клик для меню'}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 