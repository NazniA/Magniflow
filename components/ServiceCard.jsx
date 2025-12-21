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
            className="relative h-[250px] rounded-xl 
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
                className="relative z-10 h-full px-5 pt-4 pb-4 
                   flex flex-col justify-between text-white"
                style={{ transform: 'translateZ(24px)' }}
            >
                {/* TOP CONTENT */}
                <div>
                    <h3 className="text-base font-semibold leading-snug">
                        {s.title}
                    </h3>

                    <p className="mt-1.5 text-sm text-gray-300 leading-relaxed">
                        {s.short}
                    </p>
                </div>

                {/* CTA — pulled up */}
                <div className="flex items-center justify-between text-sm 
                        pt-2 border-t border-white/20">
                    <Link
                        href={`/services/${s.id}`}
                        className="font-medium text-blue-400 hover:text-blue-300"
                    >
                        Learn more →
                    </Link>

                    <Link
                        href="/contact"
                        className="text-gray-300 hover:text-white"
                    >
                        Enquire
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}
