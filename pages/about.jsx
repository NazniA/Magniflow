import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
export default function About() {
    const [open, setOpen] = useState(0);

    return (
        <div className="text-gray-800">

            {/* -------------------------------- */}
            {/* HERO BANNER */}
            {/* -------------------------------- */}
            <section className="relative h-[280px] w-full overflow-hidden">
                <Image
                    src="/about/hero.png"
                    alt="About Magniflow"
                    fill
                    className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700/70 to-blue-900/70"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="mt-2 text-sm opacity-90">
                        Home &gt; About Us
                    </p>
                </div>
            </section>

            {/* -------------------------------- */}
            {/* STRIPED BANNER */}
            {/* -------------------------------- */}
            <section className="py-16 px-6 flex justify-center">
                <div className="max-w-4xl bg-white rounded-xl shadow-lg p-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>

                    <h3 className="text-center text-sm text-gray-500">About Us</h3>
                    <h2 className="text-2xl font-bold text-center text-blue-700 mt-1">
                        Your Strategic Consulting Partner for Business & Careers
                    </h2>
                    <p className="text-center mt-3 text-gray-600">
                        Magniflow is a multidisciplinary consulting platform supporting individuals, professionals, startups, and organisations with structured guidance across visa & immigration, business consulting, IT advisory, professional training, and international travel.
                    </p>
                </div>
            </section>

            {/* -------------------------------- */}
            {/* WHO WE ARE */}
            {/* -------------------------------- */}
            <section className="py-8 px-6 flex justify-center">
                <div className="max-w-5xl grid md:grid-cols-2 gap-10">
                    <Image
                        src="/about/people1.jpg"
                        width={500}
                        height={350}
                        className="rounded-lg shadow"
                        alt="Team meeting"
                    />

                    <div>
                        <h2 className="text-3xl font-bold">Clarity and Strategic Direction for Every Business and Career Journey.</h2>
                        <p className="mt-3 text-gray-600">
                            Magniflow exists to simplify complex global decisions. We provide expert-led consulting services that help individuals and businesses confidently navigate visa systems, international careers, business setup, technology transformation, training, and global mobility.

                            Our approach combines regulatory understanding, technical expertise, and practical execution. We do not offer generic advice — we design clear roadmaps, identify risks early, and support execution at every stage to ensure measurable outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------------------- */}
            {/* VISION / MISSION BLOCK */}
            {/* -------------------------------- */}
            <section className="py-10 px-6 flex justify-center">
                <div className="max-w-5xl bg-gray-100 rounded-xl p-8 grid md:grid-cols-2 gap-8">

                    <div>
                        <p className="italic text-gray-500">Recent Case Study</p>
                        <h2 className="text-3xl font-bold mb-4">Who We Are?</h2>

                        {/* Vision */}
                        <div className="border rounded-lg overflow-hidden mb-3">
                            <button
                                onClick={() => setOpen(open === 1 ? 0 : 1)}
                                className="w-full text-left p-3 font-semibold flex justify-between"
                            >
                                <span>Our Vision</span>
                                <span>{open === 1 ? '-' : '+'}</span>
                            </button>
                            {open === 1 && (
                                <p className="p-4 bg-white text-gray-600">
                                    Our vision is to become a trusted global consulting partner for individuals and businesses seeking international growth. We aim to remove uncertainty from immigration, business expansion, and technology decisions by delivering transparent, compliant, and future-ready solutions.
                                </p>
                            )}
                        </div>

                        {/* Mission */}
                        <div className="border rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpen(open === 2 ? 0 : 2)}
                                className="w-full text-left p-3 font-semibold flex justify-between"
                            >
                                <span>Our Mission</span>
                                <span>{open === 2 ? '-' : '+'}</span>
                            </button>
                            {open === 2 && (
                                <p className="p-4 bg-white text-gray-600">
                                    Our mission is to simplify global mobility and business growth through structured consulting, compliance-focused planning, technology alignment, and continuous advisory support. We work to ensure every client moves forward with clarity, confidence, and long-term stability.
                                </p>
                            )}
                        </div>
                    </div>

                    <Image
                        src="/about/people2.jpg"
                        width={500}
                        height={350}
                        className="rounded-lg shadow"
                        alt="Team discussion"
                    />
                </div>
            </section>

            {/* -------------------------------- */}
            {/* HOW IT STARTED */}
            {/* -------------------------------- */}
            <section className="py-12 px-6 flex justify-center">
                <div className="max-w-5xl grid md:grid-cols-2 gap-12 items-center">
                    <Image src="/about/people3.png" width={500} height={350} className="rounded-lg shadow" />

                    <div>
                        <h2 className="text-3xl font-bold">How it all started?</h2>
                        <p className="mt-3 text-gray-700 leading-relaxed">
                            Magniflow was founded to address a recurring challenge — individuals and organisations struggling to navigate international opportunities without clear, reliable guidance.

                            Students were unsure about education pathways and visa processes. Professionals faced difficulties with global career transitions and skill alignment. Entrepreneurs and businesses lacked clarity around company formation, compliance, and technology strategy.

                            Magniflow was created to bridge this gap by offering integrated consulting across immigration, business advisory, IT consulting, training, and travel — delivered through a structured, transparent, and outcome-driven model.
                            <br /><br />
                            We built Magniflow to offer clarity, direction, and confidence through personalised support.
                        </p>
                        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700">
                            Get appointment
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 px-6 bg-black text-white">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
                    <div className="border border-white/40 rounded-lg p-6">
                        <h2 className="text-4xl font-bold text-blue-400">500+</h2>
                        <p className="mt-2">businesses supported with planning & consultancy.</p>
                        
                    </div>
                    <div className="border border-white/40 rounded-lg p-6">
                        <h2 className="text-4xl font-bold text-blue-400">200+</h2>
                        <p className="mt-2">careers shaped through personalised guidance.</p>
                    </div>
                </div>
            </section>

            {/* -------------------------------- */}
            {/* WHO WE HELP */}
            {/* -------------------------------- */}
            <section className="py-16 px-6 flex justify-center">
                <div className="max-w-5xl text-center">
                    <h2 className="text-3xl font-bold text-blue-600">Who we help?</h2>

                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        {[
                            {
                                title: "Entrepreneurs & Business Owners",
                                text:
                                    "We work with entrepreneurs, startups, and business leaders to provide consulting on business formation, compliance, IT architecture, digital transformation, and international expansion.",
                            },
                            {
                                title: "Professionals",
                                text:
                                    "We assist working professionals with visa strategies, international job transitions, IT upskilling, career progression planning, and long-term global mobility solutions.",
                            },
                            {
                                title: "Students & Graduates",
                                text:
                                    "We support students and graduates with international education planning, visa guidance, career counselling, skill development, and job readiness programmes designed for global markets.",
                            },
                        ].map((c, i) => (
                            <div
                                key={i}
                                className="p-6 border rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition"
                            >
                                <h3 className="text-xl font-bold text-blue-700 mb-2">{c.title}</h3>
                                <p className="text-gray-600">{c.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* -------------------------------- */}
            {/* WHAT WE DO */}
            {/* -------------------------------- */}
            <section className="py-12 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold">What We Do</h2>
                        <p className="mt-4 leading-relaxed opacity-90">
                            At Magniflow, we deliver integrated consulting services that align immigration, business strategy, technology, training, and travel under one framework. Our role is to guide decision-making, manage complexity, and support execution — ensuring compliance, scalability, and long-term success.

                            We partner with our clients from planning through implementation, offering advisory support that adapts as goals and circumstances evolve.
                        </p>
                    </div>

                    <Image
                        src="/about/people4.jpg"
                        width={500}
                        height={350}
                        className="rounded-lg shadow"
                    />
                </div>
            </section>

            {/* -------------------------------- */}
            {/* FOCUS AREAS */}
            {/* -------------------------------- */}
            <section
                className="py-16 px-6 bg-center bg-cover"
                style={{ backgroundImage: "url('/about/focus-bg.jpg')" }}
            >
                <div className="max-w-6xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-8">Our focus areas:</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Visa & Immigration Consulting",
                                text: "Comprehensive visa advisory including eligibility assessment, documentation planning, compliance guidance, and strategic immigration pathways for individuals, professionals, and businesses.",
                            },
                            {
                                title: "Business & IT Consulting",
                                text: "Business setup, regulatory compliance, startup advisory, IT architecture planning, technology implementation, automation, and digital transformation services tailored to organisational goals.",
                            },
                            {
                                title: "Entrepreneur Support",
                                text: "Job-oriented technical training, professional upskilling, interview readiness, relocation planning, and end-to-end travel support for individuals and groups.",
                            },
                        ].map((c, i) => (
                            <div
                                key={i}
                                className="p-6 border border-white/40 backdrop-blur-xl bg-white/10 rounded-xl hover:bg-white/20 transition"
                            >
                                <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                                <p className="opacity-90">{c.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* -------------------------------- */}
            {/* WHY CHOOSE US */}
            {/* -------------------------------- */}
            <section className="py-16 px-6 flex justify-center">
                <div className="max-w-5xl grid md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>

                        {[
                            "Personalised Consulting — strategies aligned to individual and business objectives",
                            "Multidisciplinary Expertise — immigration, business, IT, training, and trave.",
                            "End-to-End Support — from planning and compliance to execution.",
                            "Practical Outcomes — solutions designed for real-world application.",
                            "Trusted Advisory Model — transparent processes and long-term partnerships.",
                        ].map((text, i) => (
                            <p key={i} className="mb-3 text-gray-700">• {text}</p>
                        ))}
                    </div>

                    <Image
                        src="/about/people5.jpeg"
                        width={500}
                        height={350}
                        className="rounded-lg shadow"
                    />
                </div>
            </section>

            {/* -------------------------------- */}
            {/* WHAT ARE WE ABOUT */}
            {/* -------------------------------- */}
            <section className="py-16 px-6 bg-white flex justify-center">
                <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">
                    <Image src="/about/people3.png" width={500} height={350} className="rounded-lg shadow" />

                    <div>
                        <h2 className="text-3xl font-bold mb-4">What are we about?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Magniflow is built on clarity, accountability, and results. We believe informed decisions lead to sustainable success. Our role is to simplify complexity, provide expert insight, and support execution so our clients can progress with confidence across borders, industries, and markets.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------------------- */}
            {/* FAQ */}
            {/* -------------------------------- */}
            <section className="py-16 px-6 flex justify-center">
                <div className="max-w-5xl grid md:grid-cols-2 gap-12">
                    {/* FAQ Left */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">FAQ</h2>

                        {[
                            {
                                q: "What business support do you provide?",
                                a: "We offer startup advisory, company registration, compliance consulting, IT strategy, technology implementation, and growth-focused business planning.",
                            },
                            {
                                q: "Do you support students or working professionals?",
                                a: "Yes. We support students, early-career professionals, experienced specialists, and individuals planning international education or employment transitions.",
                            },
                            {
                                q: "How can career counselling help me?",
                                a: "Our counselling combines career strategy with visa planning, skill assessment, and global job market insights to help you make informed, long-term career decisions.",
                            },
                        ].map((f, i) => (
                            <div key={i} className="border rounded-lg mb-3 overflow-hidden">
                                <button
                                    onClick={() => setOpen(open === i + 10 ? 0 : i + 10)}
                                    className="flex justify-between w-full p-3 font-semibold"
                                >
                                    {f.q} <span>{open === i + 10 ? "-" : "+"}</span>
                                </button>
                                {open === i + 10 && (
                                    <p className="p-4 text-gray-700 bg-gray-50">{f.a}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right image */}
                    <Image src="/about/people6.jpeg" width={500} height={350} className="rounded-lg shadow" />
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


