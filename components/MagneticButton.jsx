'use client';
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function MagneticButton({ children, className = '', style = {}, onClick }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-40, 40], [10, -10]);
  const rotateY = useTransform(x, [-40, 40], [-10, 10]);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    x.set(mx / 6);
    y.set(my / 6);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y, rotateX, rotateY, transformStyle: 'preserve-3d', ...style }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
