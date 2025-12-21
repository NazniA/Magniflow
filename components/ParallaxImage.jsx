// components/ParallaxImage.jsx
import { useEffect, useRef } from "react";

export default function ParallaxImage({ src, alt = "", className = "", speed = 0.3 }) {
    const ref = useRef();

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        function onScroll() {
            const rect = node.getBoundingClientRect();
            // move image slightly based on viewport offset
            const offset = window.innerHeight - rect.top;
            const translate = Math.max(Math.min((offset * speed) / 10, 30), -30);
            node.style.transform = `translateY(${-translate}px)`;
        }
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [speed]);

    return (
        <div ref={ref} className={`will-change-transform transition-transform duration-500 ${className}`}>
            <img src={src} alt={alt} className="w-full h-auto rounded-lg shadow-lg object-cover" />
        </div>
    );
}
