'use client';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.9, type:'spring', stiffness:120 }}>
        <div className="flex flex-col items-center">
          <img src="/logo.jpeg" alt="logo" className="h-32 w-32 object-contain" />
          <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.6 }}>
            <h2 className="text-2xl font-bold logo-gradient">Magniflow</h2>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
