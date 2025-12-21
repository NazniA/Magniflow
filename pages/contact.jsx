import { motion } from "framer-motion";
import Link from 'next/link';
import CTAForm from '../components/CTAForm';
import Image from 'next/image';


export default function Contact() {
    return (
        <div className="text-gray-800">

            {/* ================= HERO ================= */}
            <section className="relative h-[280px] w-full overflow-hidden">
                <Image
                    src="/contact/hero.png"
                    alt="Contact"
                    fill
                    className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700/70 to-blue-900/70"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="mt-2 text-sm opacity-90 max-w-3xl text-center px-4">
                        We're here to help you with career guidance, training, job support, business consulting,
                        visa assistance and more — let’s build your future together.
                    </p>
                </div>
            </section>

            {/* ================= CONTACT SECTION ================= */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

                {/* ===== LEFT SIDE (INFO) ===== */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-blue-900">
                        Let's Talk — We're Ready to Assist You
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Whether you're seeking personalised career advice, planning to move abroad,
                        looking for job opportunities, or running a business — our experts are ready
                        to guide you with clarity and confidence.
                    </p>

                    <div className="space-y-4 pt-4">
                        <div>
                            <p className="text-sm text-gray-500">Email us</p>
                            <p className="font-semibold text-blue-900">contactmagniflow@gmail.com</p>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="group"
                        >
                            <p className="text-sm text-gray-500 mb-1">Call / WhatsApp</p>

                            <a
                                href="https://wa.me/447407748717?text=Hello%20Magniflow%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
      inline-flex items-center gap-3
      px-4 py-2 rounded-xl
      bg-green-50 hover:bg-green-100
      border border-green-200
      text-green-700 font-semibold
      shadow-sm hover:shadow-md
      transition
    "
                            >
                                {/* WhatsApp Icon */}
                                <motion.span
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 1.6, repeat: Infinity }}
                                    className="flex items-center justify-center w-9 h-9 rounded-full bg-green-500 text-white"
                                >
                                    <svg
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path d="M16.04 2.003C8.29 2.003 2 8.293 2 16.04c0 2.82.83 5.45 2.26 7.67L2 30l6.49-2.13a13.94 13.94 0 0 0 7.55 2.16h.01c7.75 0 14.04-6.29 14.04-14.04S23.8 2.003 16.04 2.003z" />
                                    </svg>
                                </motion.span>

                                <div className="leading-tight">
                                    <div className="text-sm">Chat on WhatsApp</div>
                                    <div className="text-xs text-green-600">+44 7407 748717</div>
                                </div>
                            </a>
                        </motion.div>


                        <div>
                            <p className="text-sm text-gray-500">Visit Office</p>
                            <p className="font-semibold text-blue-900">Centurion House, London Rd, Staines TW18 4AX</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-300 my-6"></div>

                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-blue-900">Working Hours</h3>
                        <p className="text-gray-600 text-sm">Monday – Saturday: 10 AM – 7 PM</p>
                        <p className="text-gray-600 text-sm">Sunday: Closed</p>
                    </div>
                </motion.div>



                {/* ===== RIGHT SIDE (FORM) ===== */}
                <motion.div
                    id="contactForm"   // 👈 keep this for scrollIntoView
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/30"
                >
                    <h3 className="text-xl font-bold text-blue-900 mb-6">
                        Send Us a Message
                    </h3>

                    {/* ✅ CTA FORM COMPONENT */}
                    <CTAForm />
                </motion.div>


            </section>



            {/* ================= CTA ================= */}
            <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
                <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
                    <h3 className="text-3xl font-bold">Prefer a direct conversation?</h3>
                    <p className="text-blue-100 max-w-2xl mx-auto">
                        Book a one-on-one session with our expert counsellors.
                    </p>
                    <button
                        onClick={() => {
                            const form = document.getElementById("contactForm");
                            if (form) form.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:scale-105 transition"
                    >
                        Book Appointment
                    </button>

                </div>
            </section>

            {/* ================= MAP SECTION ================= */}
            <section className="relative w-full h-[420px] md:h-[500px] overflow-hidden">

                {/* Optional overlay heading */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10
                  bg-white/90 backdrop-blur-md
                  px-6 py-3 rounded-xl shadow-lg">
                    <h3 className="text-blue-900 font-semibold text-sm md:text-base">
                        📍 Our Office Location — London, United Kingdom
                    </h3>
                </div>

                {/* Google Map iframe */}
                <iframe
                    title="Magniflow Office Location"
                    src="https://www.google.com/maps?q=51.4361174,-0.5017508&z=17&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>


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

/* Tailwind utility for form input */
