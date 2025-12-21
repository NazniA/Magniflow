// components/MagneticCard.jsx
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MagneticCard({ children, className = "" }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-50, 50], [10, -10]);
    const rotateY = useTransform(x, [-50, 50], [-10, 10]);

    function handleMouse(e) {
        const rect = ref.current.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX);
        y.set(posY);
    }

    function reset() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{
                rotateX,
                rotateY,
                x,
                y,
                transformStyle: "preserve-3d"
            }}
            className={`transition-transform duration-200 ${className}`}
        >
            {children}
        </motion.div>
    );
}
