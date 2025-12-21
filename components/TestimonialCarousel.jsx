'use client';
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REVIEWS = [
    // 🇮🇳 INDIA (3)
    {
        name: "James Carter",
        role: "Business Owner — United Kingdom",
        text: "Magniflow’s business and IT consulting helped us optimise operations and plan scalable technology solutions.",
        rating: 5,
        flag: "🇬🇧",
        img: "/testimonials/2.jpg"
    },
    {
        name: "Amit Verma",
        role: "Startup Founder — India",
        text: "Magniflow guided us through UK business registration, compliance, and IT consulting. Their structured approach saved us months of trial and error.",
        rating: 5,
        flag: "🇮🇳",
        img: "/testimonials/1.jpg"
    },
    {
        name: "Usman Khan",
        role: "Student Visa Applicant — Pakistan",
        text: "Magniflow explained the visa process step-by-step and helped me avoid common mistakes. Highly reliable support.",
        rating: 5,
        flag: "🇵🇰",
        img: "/testimonials/3.jpg"
    },

    {
        name: "Sophie Williams",
        role: "Graduate Job Seeker — United Kingdom",
        text: "From CV optimisation to interview strategy, the guidance was practical and highly effective.",
        rating: 5,
        flag: "🇬🇧",
        img: "/testimonials/2.jpg"
    },
    {
        name: "Daniel Brooks",
        role: "Relocation Client — United Kingdom",
        text: "Their visa and relocation planning made my international move smooth and stress-free.",
        rating: 4,
        flag: "🇬🇧",
        img: "/testimonials/2.jpg"
    },
    {
        name: "Neha Sharma",
        role: "Skilled Worker Visa Applicant — India",
        text: "Clear visa guidance, document review, and honest timelines. I felt confident throughout the UK visa process.",
        rating: 5,
        flag: "🇮🇳",
        img: "/testimonials/1.jpg"
    },
    {
        name: "Rahul Mehta",
        role: "IT Professional — India",
        text: "The career mentoring and technical roadmap helped me transition into a global role with clarity and confidence.",
        rating: 4,
        flag: "🇮🇳",
        img: "/testimonials/1.jpg"
    },

    {
        name: "Ayesha Malik",
        role: "Aspiring Entrepreneur — Pakistan",
        text: "Business consulting combined with visa guidance gave me a clear plan to expand internationally.",
        rating: 5,
        flag: "🇵🇰",
        img: "/testimonials/3.jpg"
    }
];


export default function TestimonialCarousel() {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);

    const start = () => {
        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % REVIEWS.length);
        }, 7000); // slow auto slide
    };

    const stop = () => clearInterval(intervalRef.current);

    useEffect(() => {
        start();
        return () => stop();
    }, []);

    return (
        <section
            className="relative w-full py-14 overflow-hidden"
            style={{
                backgroundImage: "url('/testimonials/t-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            <div
                className="relative max-w-4xl mx-auto px-6"
                onMouseEnter={stop}
                onMouseLeave={start}
            >
                <div className="relative max-w-xl mx-auto">

                    {/* SLIDE */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 18, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -18, scale: 0.96 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ rotateX: 4, rotateY: -4 }}
                            className="relative bg-white/10 backdrop-blur-xl 
                                       border border-white/20 
                                       rounded-xl px-6 py-5 
                                       shadow-xl text-center"
                        >

                            {/* Glow sweep */}
                            <motion.div
                                className="absolute inset-0 rounded-xl opacity-20"
                                animate={{ opacity: [0.2, 0.45, 0.2] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                style={{
                                    background:
                                        "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)"
                                }}
                            />

                            {/* Avatar */}
                            <img
                                src={REVIEWS[index].img}
                                alt={REVIEWS[index].name}
                                className="w-12 h-12 rounded-full object-cover 
                                           mx-auto border-2 border-white mb-3"
                            />

                            {/* Stars */}
                            <div className="flex justify-center mb-2">
                                {Array.from({ length: REVIEWS[index].rating }).map((_, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="text-yellow-400 text-sm mx-0.5"
                                    >
                                        ★
                                    </motion.span>
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-sm text-gray-100 italic leading-relaxed">
                                “{REVIEWS[index].text}”
                            </p>

                            {/* Name + Flag */}
                            <h4 className="mt-3 text-sm font-semibold text-white">
                                {REVIEWS[index].name} <span className="ml-1">{REVIEWS[index].flag}</span>
                            </h4>

                            <p className="text-xs text-gray-300">
                                {REVIEWS[index].role}
                            </p>

                            {/* Progress */}
                            <div className="mt-4 h-1 bg-white/20 rounded overflow-hidden">
                                <motion.div
                                    key={index}
                                    className="h-full bg-teal-400"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 7 }}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots */}
                    <div className="flex justify-center mt-4 gap-2">
                        {REVIEWS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all
                                    ${i === index ? "bg-white scale-110" : "bg-white/40"}`}
                            />
                        ))}
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={() => setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)}
                        className="absolute -left-10 top-1/2 -translate-y-1/2 
                                   hidden md:flex w-8 h-8 
                                   bg-white/10 hover:bg-white/20 
                                   text-white rounded-full 
                                   items-center justify-center"
                    >
                        ←
                    </button>

                    <button
                        onClick={() => setIndex((prev) => (prev + 1) % REVIEWS.length)}
                        className="absolute -right-10 top-1/2 -translate-y-1/2 
                                   hidden md:flex w-8 h-8 
                                   bg-white/10 hover:bg-white/20 
                                   text-white rounded-full 
                                   items-center justify-center"
                    >
                        →
                    </button>

                </div>
            </div>
        </section>
    );
}
