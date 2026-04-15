import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (onComplete) onComplete();
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#061825]"
        >
          <div className="relative">
            {/* Pulse Ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.5, 2],
                opacity: [0.5, 0.2, 0]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute inset-0 rounded-full border-2 border-[#8AD5E0]"
            />
            
            {/* Center Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full border-4 border-white/10 border-t-[#8AD5E0]"
            />
            
            {/* Inner Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#8AD5E0]"
            >
              SA
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}