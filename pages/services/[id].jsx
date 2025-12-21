import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SERVICES } from "../../data/services";

/* ------------------ Animations ------------------ */
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" }
    }
};
/* ------------------------------------------------ */

export default function ServiceDetails() {
    const router = useRouter();
    const { id } = router.query;
    const service = SERVICES.find((s) => s.id === id);

    /* Parallax effect */
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, 80]);

    if (!service) {
        return (
            <div className="py-20 text-center text-gray-600">
                Loading service…
            </div>
        );
    }

    return (
        <div className="text-gray-800">

            {/* ================= HERO ================= */}
            <section className="relative h-[42vh] overflow-hidden">
                <motion.div style={{ y: heroY }} className="absolute inset-0">
                    <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-white">

                    {/* Breadcrumb */}
                    <nav className="text-sm text-blue-200 mb-4">
                        <Link href="/" className="hover:underline">Home</Link> /
                        <Link href="/services" className="hover:underline ml-1">Services</Link> /
                        <span className="ml-1 text-white">{service.title}</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold max-w-4xl">
                        {service.title}
                    </h1>

                    <p className="mt-4 max-w-2xl text-blue-100 text-lg">
                        {service.short}
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-14">

                {/* ===== LEFT CONTENT ===== */}
                <div className="lg:col-span-2 space-y-16">

                    {/* Overview */}
                    <motion.section
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-blue-900">
                            Overview
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
                            {service.details}
                        </p>
                    </motion.section>

                    {/* Visual Break */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative h-[320px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src={service.img}
                            alt={service.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Features */}
                    {service.features && (
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-blue-900">
                                What You’ll Get
                            </h3>

                            <div className="mt-6 grid sm:grid-cols-2 gap-4">
                                {service.features.map((f, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        className="flex gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100"
                                    >
                                        <span className="text-blue-700 font-bold">✔</span>
                                        <span className="text-gray-700 text-sm">{f}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {/* Who this is for */}
                    <motion.section
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-gray-50 border rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-blue-900">
                            Who Is This For?
                        </h3>

                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li>• Students & early professionals</li>
                            <li>• Working professionals & job switchers</li>
                            <li>• Founders & startup teams</li>
                            <li>• Individuals relocating internationally</li>
                            <li>• Anyone seeking clarity & structure</li>
                        </ul>
                    </motion.section>
                </div>

                {/* ===== RIGHT SIDEBAR (STICKY) ===== */}
                <aside className="space-y-8 lg:sticky lg:top-28 h-fit">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg border p-6"
                    >
                        <h3 className="text-xl font-semibold text-blue-900">
                            Service Summary
                        </h3>

                        <p className="mt-3 text-gray-600 text-sm">
                            {service.short}
                        </p>

                        <div className="mt-4 space-y-2 text-sm">
                            <p>🎯 Target: <strong>{service.target}</strong></p>
                            <p>⏳ Duration: <strong>Depends on scope</strong></p>
                            <p>👤 Support: <strong>1-on-1 Expert</strong></p>
                        </div>

                        <Link
                            href="/contact"
                            className="block mt-6 text-center bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                        >
                            Book Consultation
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-blue-50 border border-blue-200 rounded-2xl p-6"
                    >
                        <h4 className="font-bold text-blue-800">
                            Why Magniflow?
                        </h4>
                        <ul className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>• Global experience</li>
                            <li>• Clear documentation</li>
                            <li>• Industry-aligned mentoring</li>
                            <li>• Proven success paths</li>
                        </ul>
                    </motion.div>

                </aside>
            </section>

            {/* ================= CTA ================= */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16"
            >
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-3xl font-bold">
                            Ready to move forward?
                        </h3>
                        <p className="mt-4 text-blue-100 text-lg">
                            Book a personalised session and get a clear roadmap.
                        </p>
                    </div>

                    <div className="flex md:justify-end">
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:scale-105 transition"
                        >
                            Book a Call
                        </Link>
                    </div>
                </div>
            </motion.section>


            {/* Footer */}
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
