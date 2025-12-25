import { motion } from "framer-motion";
import Link from 'next/link';
import CTAForm from '../components/CTAForm';
import Image from 'next/image';


export default function Contact() {
    return (
        <div className="text-gray-800">

            {/* ================= HERO ================= */}
            <section className="relative h-[240px] sm:h-[280px] w-full overflow-hidden">
                <Image
                    src="/contact/hero.png"
                    alt="Contact"
                    fill
                    className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700/70 to-blue-900/70"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                    <h1 className="text-2xl sm:text-4xl font-bold text-center">Contact Us</h1>
                    <p className="mt-2 text-xs sm:text-sm opacity-90 max-w-3xl text-center px-4 leading-relaxed">
                        We're here to help you with career guidance, training, job support, business consulting,
                        visa assistance and more — let’s build your future together.
                    </p>
                </div>
            </section>

            {/* ================= CONTACT SECTION ================= */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid md:grid-cols-2 gap-8 sm:gap-12">

                {/* ===== LEFT SIDE (INFO) ===== */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4 sm:space-y-6"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 leading-tight">
                        Let's Talk — We're Ready to Assist You
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Whether you're seeking personalised career advice, planning to move abroad,
                        looking for job opportunities, or running a business — our experts are ready
                        to guide you with clarity and confidence.
                    </p>

                    <div className="space-y-4 pt-2 sm:pt-4">
                        <div>
                            <p className="text-xs sm:text-sm text-gray-500">Email us</p>
                            <p className="font-semibold text-sm sm:text-base text-blue-900 break-words">contactmagniflow@gmail.com</p>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="group"
                        >
                            <p className="text-xs sm:text-sm text-gray-500 mb-1">Call / WhatsApp</p>

                            <a
                                href="https://wa.me/447407748717?text=Hello%20Magniflow%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
      inline-flex items-center gap-2 sm:gap-3
      px-3 sm:px-4 py-2 rounded-xl
      bg-green-50 hover:bg-green-100
      border border-green-200
      text-green-700 font-semibold text-sm sm:text-base
      shadow-sm hover:shadow-md
      transition
      min-h-[44px]
    "
                            >
                                {/* WhatsApp Icon */}
                                <motion.span
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 1.6, repeat: Infinity }}
                                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-green-500 text-white"
                                >
                                    <svg
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                    >
                                        <path d="M16.04 2.003C8.29 2.003 2 8.293 2 16.04c0 2.82.83 5.45 2.26 7.67L2 30l6.49-2.13a13.94 13.94 0 0 0 7.55 2.16h.01c7.75 0 14.04-6.29 14.04-14.04S23.8 2.003 16.04 2.003z" />
                                    </svg>
                                </motion.span>

                                <div className="leading-tight">
                                    <div className="text-xs sm:text-sm">Chat on WhatsApp</div>
                                    <div className="text-[10px] sm:text-xs text-green-600">+44 7407 748717</div>
                                </div>
                            </a>
                        </motion.div>


                        <div>
                            <p className="text-xs sm:text-sm text-gray-500">Visit Office</p>
                            <p className="font-semibold text-sm sm:text-base text-blue-900 leading-relaxed">Centurion House, London Rd, Staines TW18 4AX</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-300 my-4 sm:my-6"></div>

                    <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-base sm:text-lg font-semibold text-blue-900">Working Hours</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">Monday – Saturday: 10 AM – 7 PM</p>
                        <p className="text-gray-600 text-xs sm:text-sm">Sunday: Closed</p>
                    </div>
                </motion.div>



                {/* ===== RIGHT SIDE (FORM) ===== */}
                <motion.div
                    id="contactForm"   // 👈 keep this for scrollIntoView
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 sm:p-8 border border-white/30"
                >
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4 sm:mb-6">
                        Send Us a Message
                    </h3>

                    {/* ✅ CTA FORM COMPONENT */}
                    <CTAForm />
                </motion.div>


            </section>



            {/* ================= CTA ================= */}
            <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight px-2">Prefer a direct conversation?</h3>
                    <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base px-4 leading-relaxed">
                        Book a one-on-one session with our expert counsellors.
                    </p>
                    <button
                        onClick={() => {
                            const form = document.getElementById("contactForm");
                            if (form) form.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:scale-105 transition text-sm sm:text-base min-h-[44px] inline-flex items-center justify-center"
                    >
                        Book Appointment
                    </button>

                </div>
            </section>

            {/* ================= MAP SECTION ================= */}
            <section className="relative w-full h-[300px] sm:h-[420px] md:h-[500px] overflow-hidden">

                {/* Optional overlay heading */}
                <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-10
                  bg-white/90 backdrop-blur-md
                  px-3 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg mx-4">
                    <h3 className="text-blue-900 font-semibold text-xs sm:text-sm md:text-base text-center">
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


