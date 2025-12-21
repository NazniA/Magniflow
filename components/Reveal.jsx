// components/Reveal.jsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Reveal({ children, className = "", delay = 0, y = 24 }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
