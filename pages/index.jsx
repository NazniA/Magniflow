// pages/index.jsx
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import AnimatedSection from '../components/AnimatedSection';

import MagneticButton from '../components/MagneticButton';
import { SERVICES } from '../data/services';
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialCarousel from "../components/TestimonialCarousel";
import CTAForm from '../components/CTAForm';
import dynamic from "next/dynamic";

const ServiceCard = dynamic(() => import("../components/ServiceCard"), {
    ssr: false,
    loading: () => <div className="h-28 rounded-xl bg-gray-100 animate-pulse" />
});





function StatBlock({ label, value, suffix = "", icon, color = "teal" }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.4 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            controls.start({
                val: value,
                opacity: 1,
                y: 0,
                transition: { duration: 6, ease: "easeOut" }
            });
        } else {
            controls.set({ val: 0, opacity: 0, y: 20 });
            setDisplayValue(0);
        }
    }, [inView, value, controls]);

    const formatNumber = (num) =>
        new Intl.NumberFormat("en-IN").format(num);

    return (
        <motion.div
            ref={ref}
            initial={{ val: 0, opacity: 0, y: 20 }}
            animate={controls}
            whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.04
            }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
            className="relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl overflow-hidden group"
            onUpdate={(latest) => {
                if (latest.val !== undefined) {
                    setDisplayValue(Math.floor(latest.val));
                }
            }}
        >

            {/* ✅ ANIMATED GLOW PULSE */}
            <motion.div
                className="absolute inset-0 blur-3xl opacity-30"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                    background:
                        color === "blue"
                            ? "radial-gradient(circle, rgba(59,130,246,0.7), transparent)"
                            : "radial-gradient(circle, rgba(45,212,191,0.7), transparent)"
                }}
            />

            {/* ✅ FLOATING PARTICLES */}
            {Array.from({ length: 6 }).map((_, i) => (
                <motion.span
                    key={i}
                    className="absolute w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white/70"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                    animate={{
                        y: [0, -18, 0],
                        opacity: [0.1, 0.8, 0.1]
                    }}
                    transition={{
                        duration: Math.random() * 4 + 3,
                        repeat: Infinity
                    }}
                />
            ))}

            {/* ICON */}
            <div className="relative z-10 text-xl sm:text-2xl mb-1">
                {icon}
            </div>

            {/* NUMBER */}
            <h3 className="relative z-10 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {formatNumber(displayValue)}{suffix}
            </h3>

            {/* LABEL */}
            <p className="relative z-10 mt-1 text-gray-300 text-[10px] sm:text-xs uppercase tracking-wide">
                {label}
            </p>

            {/* PROGRESS */}
            <div className="relative z-10 mt-3 sm:mt-4 h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className={`h-full ${color === "blue" ? "bg-blue-500" : "bg-teal-400"}`}
                    initial={{ width: "0%" }}
                    animate={{ width: inView ? "100%" : "0%" }}
                    transition={{ duration: 6, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
}














// ⭐⭐⭐ MAIN HOME PAGE ⭐⭐⭐
export default function Home() {
    return (
        <div className="text-gray-800">

<section
  className="
    relative w-full
    min-h-[55vh]          /* much shorter on mobile */
    md:min-h-[80vh]
    lg:min-h-screen
    flex items-center justify-center
  "
  style={{
    backgroundImage: "url('/hero/hero1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />

  <div
  className="
    relative z-10
    w-[94%]
    max-w-3xl
    px-4 py-4                /* smaller on mobile */
    sm:px-6 sm:py-6
    md:px-10 md:py-10
    bg-black/45 backdrop-blur-xl
    rounded-xl md:rounded-3xl
    shadow-2xl
    text-center text-white
  "
>

    <p className="inline-block mb-3 px-3 py-1 rounded-full bg-white/15 text-xs sm:text-sm tracking-wide text-blue-200">
      Trusted Global Visa • Tech • Career • Training • Travel Partner
    </p>

<h1
  className="
    font-extrabold
    leading-tight
    text-[1.35rem]
    sm:text-[1.8rem]
    md:text-[2.2rem]
    lg:text-[2.8rem]
  "
>
  Empowering Your Global Journey
</h1>


    <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base max-w-2xl mx-auto text-gray-200">

      End-to-end expertise across visa & immigration services, IT consultancy, career guidance, technical training and international travel — all in one trusted platform.
    </p>

    <div className="mt-6 sm:mt-7 flex justify-center">
      <Link
        href="/services"
        className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-magniflow-900 hover:bg-magniflow-500 text-white font-semibold shadow-xl transition"
      >
        Explore Services
      </Link>
    </div>
  </div>
</section>




            {/* FEATURE BOXES */}
            <AnimatedSection className="py-8 sm:py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6">
                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow text-center">
                        
                        <h3 className="font-semibold text-base sm:text-lg">Global Expertise</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Deep expertise across Visa Immigration, Startup Advisory, Business Consulting, IT Solutions, Training, and Travel to create reliable international pathways.</p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow text-center">
                       
                        <h3 className="font-semibold text-base sm:text-lg">End-to-End Solutions</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Complete support across strategy, documentation, execution, technology delivery, and ongoing mentorship.</p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow text-center">
                        
                        <h3 className="font-semibold text-base sm:text-lg">People-First Approach</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">Personalised plans, practical execution, and measurable outcomes designed around your goals.</p>
                    </div>
                </div>
            </AnimatedSection>

            {/* ABOUT + INTRO VIDEO */}
            <AnimatedSection className="py-12 sm:py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-magniflow-900 leading-tight">Your Partner for Visa, Tech & International Growth</h2>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                            Magniflow is a multidisciplinary consulting platform bringing together certified immigration consultants, startup and business advisors, experienced engineers, IT consultants, career coaches, and travel specialists. We work closely with individuals, professionals, founders, and organisations to design clear, compliant, and growth-focused roadmaps that support both personal and business ambitions.
                            
                        </p>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">

                            From startup ideation, business registration, compliance, and scaling, to enterprise-grade IT consulting, technology implementation, and digital transformation, we provide practical, hands-on guidance at every stage. Our approach ensures that decisions are informed, execution is structured, and outcomes are measurable.
                        </p>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                        Whether you require a strategic visa pathway, business or startup consulting, a production-ready IT solution, job-oriented training, or end-to-end international travel and relocation support, Magniflow combines deep domain expertise with a trusted global network to help you move confidently across borders, industries, and markets.
                        </p>
                    </div>

                    <div>
                        <div className="aspect-video rounded-lg overflow-hidden shadow bg-black/5">
                            {/* use a hosted mp4 or placeholder image */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
>
  <iframe
                                    src="https://www.youtube.com/embed/Fs-uNX0tpm8?loop=1&playlist=Fs-uNX0tpm8"
    title="Magniflow Introduction"
    className="w-full h-full"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
    allowFullScreen
  />
</motion.div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* PASSIONATE - three pillars */}
            <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 leading-tight px-2">We are passionate about transforming lives & businesses</h2>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">Practical, measurable support across visa, tech, career development, training and travel.</p>
                </div>

                <div className="max-w-6xl mx-auto mt-8 sm:mt-10 grid md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6">
                    <div className="bg-white rounded-xl shadow p-5 sm:p-6 hover:shadow-lg transition">
                        <h3 className="font-semibold text-base sm:text-lg text-blue-900">Visa, Business & IT Consulting</h3>
                        <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">Integrated advisory services covering visa strategy, business setup, compliance, and IT consulting ,ensuring alignment between global mobility, operational planning, and technology execution.</p>
                    </div>

                    <div className="bg-white rounded-xl shadow p-5 sm:p-6 hover:shadow-lg transition">
                        <h3 className="font-semibold text-base sm:text-lg text-blue-900">Career Counselling & Training</h3>
                        <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">Structured career guidance, CV optimisation, interview preparation, job-market strategy, and industry-aligned technical training designed for domestic and international roles.</p>
                    </div>

                    <div className="bg-white rounded-xl shadow p-5 sm:p-6 hover:shadow-lg transition">
                        <h3 className="font-semibold text-base sm:text-lg text-blue-900">Travel & Relocation Services</h3>
                        <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">End-to-end travel planning, documentation, relocation coordination, and settlement support for individuals, families, and professionals moving internationally.</p>
                    </div>
                </div>
            </section>

            {/* SERVICES grid */}
            <AnimatedSection className="py-12 sm:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Our Services</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {SERVICES.map(s => <ServiceCard key={s.id} s={s} />)}
                    </div>
                </div>
            </AnimatedSection>

            {/* BENEFITS + DETAILS */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 px-4 sm:px-6 items-center">
                    <div>
                        <p className="text-xs sm:text-sm text-blue-500 font-medium">Benefits, commitment & values</p>
                        <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mt-2 leading-tight">Why choose Magniflow?</h3>

                        <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                            <details className="border rounded-lg p-3 sm:p-4 bg-gray-50">
                                <summary className="cursor-pointer font-semibold text-sm sm:text-base text-blue-800 min-h-[44px] flex items-center">End-to-end Support</summary>
                                <p className="mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">Comprehensive services covering visas, tech delivery, career development, training and travel logistics.</p>
                            </details>

                            <details className="border rounded-lg p-3 sm:p-4 bg-gray-50">
                                <summary className="cursor-pointer font-semibold text-sm sm:text-base text-blue-800 min-h-[44px] flex items-center">Expert Team</summary>
                                <p className="mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">Consultants, senior engineers and certified trainers with real-world experience and global exposure.</p>
                            </details>

                            <details className="border rounded-lg p-3 sm:p-4 bg-gray-50">
                                <summary className="cursor-pointer font-semibold text-sm sm:text-base text-blue-800 min-h-[44px] flex items-center">Transparent Process</summary>
                                <p className="mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">Clear steps, documented milestones, and communication at every stage.</p>
                            </details>
                        </div>
                    </div>

                    <div>
                        <img src="/home/benefits.png" alt="team" className="rounded-xl shadow-lg w-full h-60 sm:h-80 object-cover" />
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-950 to-black text-white relative overflow-hidden">

                {/* BACKGROUND LINES */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight px-2"
                    >
                        Our Global Impact in Numbers
                    </motion.h2>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
                        Measurable results across immigration, technology, careers and global mobility.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">

                    <StatBlock
                        label="Careers Transformed"
                        value={4000}
                        suffix="+"
                        icon="🎯"
                        color="teal"
                    />

                    <StatBlock
                        label="Businesses Supported"
                        value={300}
                        suffix="+"
                        icon="🏢"
                        color="blue"
                    />

                    <StatBlock
                        label="Countries Served"
                        value={15}
                        suffix="+"
                        icon="🌍"
                        color="teal"
                    />

                    <StatBlock
                        label="Client Success Rate"
                        value={94}
                        suffix="%"
                        icon="✅"
                        color="blue"
                    />

                </div>
            </section>










            {/* EXPERT GUIDE */}
            <section className="py-12 sm:py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <h3 className="text-sm sm:text-base text-teal-600">Expert guide</h3>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 leading-tight px-2">Learn from mentors, consultants & tech leaders</h2>

                    <div className="mt-8 sm:mt-10 grid md:grid-cols-3 gap-6 sm:gap-8 items-start">
                        <div>
                            <h4 className="font-semibold text-sm sm:text-base">Career Pathways</h4>
                            <p className="text-xs sm:text-sm mt-2 text-gray-600 leading-relaxed">Align your skills with the best international opportunities.</p>
                        </div>

                        <div className="text-center">
                            <img src="/images/mentor.jpg" alt="mentor" className="mx-auto rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover shadow-lg" />
                        </div>

                        <div>
                            <h4 className="font-semibold text-sm sm:text-base">Tech & Business Setup</h4>
                            <p className="text-xs sm:text-sm mt-2 text-gray-600 leading-relaxed">From MVP to scale — technology and compliance expertise to support growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY TRUST US — Premium Glass */}
            {/* WHY TRUST US — Stripe Accent */}
            <section
                className="relative py-16 sm:py-24 overflow-hidden text-white"
                style={{
                    backgroundImage: "url('/home/trust.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* BRAND GRADIENT OVERLAY */}
                <div
                    className="
      absolute inset-0
      bg-gradient-to-br
      from-magniflow-900/85 via-magniflow-500/75 to-magniflow-900/90
      dark:from-black/90 dark:via-black/80 dark:to-black/90
    "
                />

                {/* DARK CONTRAST LAYER */}
                <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="relative max-w-2xl pl-4 sm:pl-6">

                        {/* LEFT ACCENT LINE */}
                        <span
                            className="
          absolute left-0 top-1
          h-full w-[2px] sm:w-[3px]
          rounded-full
          bg-gradient-to-b
          from-blue-400 via-cyan-300 to-blue-500
          shadow-[0_0_16px_rgba(59,130,246,0.6)]
        "
                        />

                        {/* Heading */}
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            Why trust{" "}
                            <span className="text-blue-200 dark:text-cyan-300">
                                Magniflow
                            </span>
                            ?
                        </h3>

                        {/* Description */}
                        <p className="mt-4 sm:mt-5 text-blue-100 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                            We combine immigration expertise, engineering capability,
                            career counselling, technical training, and international
                            travel planning to deliver structured, compliant, and
                            outcome-driven solutions.
                        </p>

                        {/* Points */}
                        <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-blue-100 dark:text-gray-300">
                            <li>✔ Global visa & immigration expertise</li>
                            <li>✔ Product-grade IT & engineering consulting</li>
                            <li>✔ Industry-aligned career & technical training</li>
                            <li>✔ Trusted international travel & relocation support</li>
                        </ul>
                    </div>
                </div>
            </section>









            {/* COURSES */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 leading-tight px-2">Courses Designed to Launch Your Career</h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 px-4">Choose a plan that fits your goals and timeline.</p>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 grid md:grid-cols-3 gap-4 sm:gap-6">
                    <div className="p-6 sm:p-8 bg-blue-50 border rounded-xl shadow">
                        <h3 className="text-lg sm:text-xl font-bold text-blue-900">Starter Plan</h3>
                        <ul className="mt-3 sm:mt-4 text-gray-700 text-xs sm:text-sm space-y-2 leading-relaxed">
                            <li>• CV & LinkedIn optimisation</li>
                            <li>• Mock interviews & feedback</li>
                            <li>• Job application strategy</li>
                        </ul>
                    </div>

                    <div className="p-6 sm:p-8 bg-blue-50 border rounded-xl shadow">
                        <h3 className="text-lg sm:text-xl font-bold text-blue-900">Growth Plan</h3>
                        <ul className="mt-3 sm:mt-4 text-gray-700 text-xs sm:text-sm space-y-2 leading-relaxed">
                            <li>• Business setup & compliance</li>
                            <li>• Market research & digital strategy</li>
                            <li>• Advanced project-based training</li>
                        </ul>
                    </div>

                    <div className="p-6 sm:p-8 bg-blue-50 border rounded-xl shadow">
                        <h3 className="text-lg sm:text-xl font-bold text-blue-900">Premium Plan</h3>
                        <ul className="mt-3 sm:mt-4 text-gray-700 text-xs sm:text-sm space-y-2 leading-relaxed">
                            <li>• 1-on-1 mentorship & workshops</li>
                            <li>• Tech project support & portfolio guidance</li>
                            <li>• Immigration & relocation planning</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {/* ✅ ULTRA-THIN FULL-WIDTH TESTIMONIALS */}
            <section
                className="relative py-8 sm:py-10 overflow-hidden"
                style={{
                    backgroundImage: "url('/testimonials/bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/75" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">

                    <p className="text-teal-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">
                        Client Reviews
                    </p>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-1">
                        What Our Clients Say
                    </h2>

                    {/* ✅ Ultra-compact carousel */}
                    <div className="mt-4 sm:mt-6">
                        <TestimonialCarousel />
                    </div>

                </div>
            </section>






            {/* LATEST NEWS */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center">Latest News</h2>

                    <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
                        {[
                            { title: "Worldwide Private Equity Final Report 2024", img: "/blog/b1.jpeg" },
                            { title: "Practical Tips for Tech Hiring & Upskilling", img: "/blog/b2.jpg" },
                            { title: "Marketing & Growth Strategies for Startups", img: "/blog/b3.jpg" }
                        ].map((b, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                                <img src={b.img} className="w-full h-40 sm:h-44 object-cover" alt={b.title} />
                                <div className="p-3 sm:p-4">
                                    <p className="text-[10px] sm:text-xs text-teal-600 mb-1">— Insights</p>
                                    <h4 className="font-semibold text-sm sm:text-base leading-snug">{b.title}</h4>
                                    <Link href="/blog" className="inline-block mt-2 sm:mt-3 text-teal-600 hover:underline text-xs sm:text-sm">
                                        Read more →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA form */}
            <section className="py-12 sm:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6 sm:gap-8 items-center bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold leading-tight">Book your personalised consultation today</h3>
                        <p className="mt-3 sm:mt-4 text-white/90 text-sm sm:text-base leading-relaxed">Special launch offer available for new clients — a tailored roadmap and an expert session to start your journey.</p>
                    </div>

                    <div className="bg-white p-4 sm:p-6 rounded-xl">
                        <CTAForm/>

                            
                    </div>
                </div>
            </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" data-testid="footer-logo">Magniflow</h3>
                            <p className="text-gray-400" data-testid="footer-tagline">Visa. Tech. Careers. Training. Travel — we help you go global.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4" data-testid="footer-services-title">Services</h4>
              <ul className="space-y-2 text-gray-400">
                                <li><Link href="services/visa-immigration">Visa & Immigration</Link></li>
                                <li><Link href="services/it-solutions">IT Consultation</Link></li>
                                <li><Link href="services/career-counselling">Career Counselling</Link></li>
                                <li><Link href="services/tech-training">Training</Link></li>
                                <li><Link href="services/tourism-travel">International Travelling</Link></li>

              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" data-testid="footer-company-title">Company</h4>
              <ul className="space-y-2 text-gray-400">
                                <li><Link href="about">About Us</Link></li>
                                <li><Link href="courses">Courses</Link></li>
                                <li><Link href="blog">Blog</Link></li>
                                <li><Link href="about">contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" data-testid="footer-contact-title">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm break-words">info@magniflow.co.uk</p>
                                <p className="text-xs sm:text-sm mt-1">+44 7407 748717</p>
                                <p className="mt-2 sm:mt-3 text-xs sm:text-sm break-words">London,UK</p>

              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" data-testid="footer-copyright">
            <p>© 2025 Magniflow. All rights reserved.</p>
          </div>
        </div>
      </footer>

        </div>
    );
}


