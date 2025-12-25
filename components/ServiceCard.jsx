'use client';
import Link from 'next/link';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function ServiceCard({ s }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-80, 80], [6, -6]);
    const rotateY = useTransform(x, [-80, 80], [-6, 6]);

    function handleMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    }

    function reset() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.article
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            whileHover={{ y: -4 }}
            className="relative min-h-[220px] sm:h-[250px] rounded-xl 
                 overflow-hidden 
                 bg-black/30 backdrop-blur-lg 
                 border border-white/30 
                 shadow-lg transition"
        >
            {/* IMAGE */}
            <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* CONTENT */}
            <div
                className="relative z-10 h-full px-4 sm:px-5 pt-3 sm:pt-4 pb-3 sm:pb-4 
                   flex flex-col justify-between text-white"
                style={{ transform: 'translateZ(24px)' }}
            >
                {/* TOP CONTENT */}
                <div>
                    <h3 className="text-sm sm:text-base font-semibold leading-snug">
                        {s.title}
                    </h3>

                    <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
                        {s.short}
                    </p>
                </div>

                {/* CTA — pulled up */}
                <div className="flex items-center justify-between text-xs sm:text-sm 
                        pt-2 border-t border-white/20 mt-2">
                    <Link
                        href={`/services/${s.id}`}
                        className="font-medium text-blue-400 hover:text-blue-300 min-h-[44px] flex items-center"
                    >
                        Learn more →
                    </Link>

                    <Link
                        href="/contact"
                        className="text-gray-300 hover:text-white min-h-[44px] flex items-center"
                    >
                        Enquire
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}
