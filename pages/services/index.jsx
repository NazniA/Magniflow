import Link from "next/link";
import { SERVICES } from "../../data/services";
import Image from 'next/image';
import ServiceCard from '../../components/ServiceCard';
import AnimatedSection from '../../components/AnimatedSection';
import { motion, AnimatePresence, useAnimation } from "framer-motion";
export default function Services() {
    return (
        <div className="text-gray-800">

            {/* HERO SECTION */}


            <section className="relative h-[280px] w-full overflow-hidden">
                <Image
                    src="/service/hero.jpg"
                    alt="Services"
                    fill
                    className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700/70 to-blue-900/70"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-4xl font-bold">Our Expert Services</h1>
                    <p className="mt-2 text-sm opacity-90 max-w-3xl text-center px-4">
                        End-to-end support for your career, education, business, and global opportunities — powered by expert mentorship.
                    </p>
                </div>
            </section>

            {/* INTRO TEXT */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-900">
                        Solutions Designed to Guide & Empower You
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Explore a wide range of personalised services crafted for students,
                        professionals, entrepreneurs, and individuals seeking career clarity,
                        global mobility, or professional growth.
                    </p>
                </div>
            </section>

            
            {/* SERVICES grid */}
            <AnimatedSection className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICES.map(s => <ServiceCard key={s.id} s={s} />)}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA SECTION */}
            <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center rounded-t-3xl">
                <h3 className="text-3xl font-bold">
                    Not sure which service you need?
                </h3>
                <p className="mt-3 max-w-xl mx-auto text-blue-100">
                    Book a personalised consultation — we’ll help you choose the best option
                    based on your background, skills, and goals.
                </p>

                <Link href="/contact">
                    <button className="mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg">
                        Book a Free Consultation
                    </button>
                </Link>
            </section>

            {/* ✅ FOOTER NOW PROPERLY INSIDE RETURN */}
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <div className="text-white font-bold text-xl">Magniflow</div>
                        <p className="mt-3 text-sm">Visa. Tech. Careers. Training. Travel — we help you go global.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">Quick Links</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/courses">Courses</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">Contact</h4>
                        <p className="mt-3 text-sm">contactmagniflow@gmail.com</p>
                        <p className="text-sm mt-1">+44 7407 748717</p>
                    </div>
                </div>
            </footer>

        </div>
    );
}
