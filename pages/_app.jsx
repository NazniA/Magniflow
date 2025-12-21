import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ✅ Toast Provider */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: '#0f172a',
            color: '#fff',
            borderRadius: '12px',
            padding: '12px 16px',
          },
        }}
      />

      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen">
          <Navbar />

          <AnimatePresence mode="wait">
            <motion.main
              key={router.route}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="max-w-6xl mx-auto px-6 py-10 min-h-[70vh]"
            >
              <Component {...pageProps} />
            </motion.main>
          </AnimatePresence>

          <Footer />
        </div>
      )}
    </>
  );
}
