// components/FloatingShapes.jsx
import React from "react";

export default function FloatingShapes({ className = "" }) {
    // simple DOM-only floating shapes + particle dots
    return (
        <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
            {/* soft blurred glow */}
            <div className="absolute -left-20 -top-16 w-72 h-72 rounded-full bg-blue-400/30 blur-3xl animate-blob mix-blend-multiply" />
            <div className="absolute right-16 top-10 w-56 h-56 rounded-full bg-cyan-400/25 blur-2xl animate-blob2 mix-blend-screen" />
            {/* floating geometric shapes */}
            <div className="absolute left-8 bottom-20 w-10 h-10 rounded-lg bg-white/20 shadow-lg animate-float" />
            <div className="absolute right-8 bottom-40 w-16 h-16 rounded-full bg-white/10 border border-white/10 animate-slow-float" />
            {/* tiny particles */}
            {Array.from({ length: 12 }).map((_, i) => (
                <span
                    key={i}
                    className="absolute bg-white/80 rounded-full opacity-60"
                    style={{
                        width: `${4 + (i % 3)}px`,
                        height: `${4 + (i % 3)}px`,
                        left: `${10 + (i * 7) % 90}%`,
                        top: `${(i * 13) % 80}%`,
                        transform: `translateY(${(i % 5) * 6}px)`,
                        animation: `particle ${6 + (i % 4)}s linear ${(i % 3) * 0.4}s infinite`
                    }}
                />
            ))}
            <style jsx>{`
        @keyframes particle {
          0% { transform: translateY(0) scale(1); opacity: .9 }
          50% { transform: translateY(-18px) scale(.95); opacity: .6 }
          100% { transform: translateY(0) scale(1); opacity: .9 }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animate-blob2 { animation: blob 10s infinite; }
        @keyframes blob {
          0% { transform: translateY(0) scale(1) }
          33% { transform: translateY(-10px) scale(1.05) }
          66% { transform: translateY(6px) scale(.98) }
          100% { transform: translateY(0) scale(1) }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slow-float { animation: float 10s ease-in-out infinite; }
        @keyframes float {
          0% { transform: translateY(0) }
          50% { transform: translateY(-18px) rotate(6deg) }
          100% { transform: translateY(0) }
        }
      `}</style>
        </div>
    );
}
