// components/HeroRight.jsx
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTransform } from 'framer-motion';

const images = [
  '/hero/hero1.jpg',
  '/hero/hero2.jpg',
  '/hero/hero3.jpg'
];

export default function HeroRight({ scrollYProgress }) {
  const [index, setIndex] = useState(0);
  const parallaxX = useTransform(scrollYProgress || 0, [0,1], [0, -30]);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* subtle decorative blobs */}
      <motion.div
        className="absolute -left-40 -top-28 w-[520px] h-[520px] rounded-full bg-blue-500 opacity-10 blur-[120px]"
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-[-120px] top-20 w-[420px] h-[420px] rounded-full bg-cyan-400 opacity-8 blur-[100px]"
        animate={{ x: [0, -30, 20, 0], y: [0, 10, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* carousel with parallax */}
      <motion.div style={{ x: parallaxX }} className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </motion.div>

      {/* keep content readable with soft dark gradient at bottom only (optional) */}
      <div className="absolute left-0 right-0 bottom-0 h-36 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* decorative floating dots (very subtle) */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/40"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 95}%`,
            filter: 'blur(4px)'
          }}
          animate={{
            y: [ -6, 6, -6 ],
            opacity: [0.08, 0.45, 0.08]
          }}
          transition={{ duration: Math.random() * 8 + 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
