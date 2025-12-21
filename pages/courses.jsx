import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Courses() {
    return (
        <div className="text-gray-800">

            {/* HERO SECTION */}
            <section className="relative min-h-[65vh] flex items-center justify-center text-center bg-gradient-to-br from-blue-800 to-blue-600 text-white overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 opacity-25 bg-[url('/images/hero-bg.png')] bg-cover bg-center"></div>
                <div className="absolute w-[600px] h-[600px] bg-blue-400 opacity-20 blur-3xl rounded-full -right-40 -top-40"></div>

                <div className="relative z-10 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold"
                    >
                        Career & Professional Transformation Programs
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-3xl mx-auto mt-5 text-blue-100 text-lg"
                    >
                        Industry-aligned training, expert consulting, and structured mentorship across visa & immigration, business growth, IT consulting, professional training, and global mobility — designed for individuals and organisations targeting international success.
                    </motion.p>
                </div>
            </section>

            {/* COURSES INTRO */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-blue-900 leading-tight">
                        Learn Skills That Make You Future-Ready
                    </h2>

                    <p className="mt-5 text-gray-600 leading-relaxed">
                        At <span className="font-semibold">Magniflow</span>,Our programs are designed to go beyond traditional learning. We focus on building practical skills, strategic clarity, and global readiness required to succeed in today’s competitive international landscape. Our training combines career development, IT consulting exposure, business understanding, and visa awareness into one integrated learning experience.
                    </p>

                    <p className="mt-4 text-gray-600">
                        Each program is supported by experienced consultants, real-world frameworks, industry tools, and personalised mentoring. Whether you are preparing for global employment, planning a business venture, navigating visa processes, or upgrading your technical expertise — our courses provide structured pathways with measurable outcomes.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/images/courses1.jpg"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-xl object-cover"
                        alt="Career training and growth"
                    />
                </motion.div>
            </section>

            {/* STAT SECTION */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

                <div className="flex justify-center">
                    <div className="relative h-64 w-64 rounded-full border-[12px] border-blue-500 flex items-center justify-center">
                        <div className="absolute inset-3 bg-white rounded-full flex items-center justify-center text-center px-5">
                            <p className="text-blue-700 font-semibold text-lg">
                                65% of graduates lack industry-ready skills — we help you close that gap.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-blue-900">Why Practical Skills and Strategic Guidance Matter</h3>
                    <p className="mt-4 text-gray-600">
                        Degrees alone are no longer sufficient to compete globally. Employers, immigration systems, and businesses value applied skills, clarity of direction, and execution capability. Our programs focus on hands-on learning, real-case scenarios, and expert guidance — enabling participants to confidently move from learning to implementation.
                    </p>
                </div>
            </section>

            {/* COURSE OPTIONS */}
            <section className="bg-gray-50 py-20">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-900">
                    Choose the Training That Matches Your Goals
                </h2>
                <p className="text-center mt-3 text-gray-600">
                    Practical, personalised, outcome-focused learning experiences.
                </p>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 mt-12">

                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
                    >
                        <h4 className="font-bold text-xl text-blue-800 mb-3">Entrepreneur Growth Program</h4>
                        <p className="text-gray-600 text-sm">
                            A comprehensive program for founders, entrepreneurs, and business leaders looking to launch, structure, or scale their business with expert consulting support.
                        </p>

                        <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                            <li>✔ Business idea validation and feasibility assessment</li>
                            <li>✔ Market research, competitor analysis, and positioning</li>
                            <li>✔ Business registration, compliance basics, and documentation guidance</li>
                            <li>✔ Branding strategy, digital presence, and go-to-market planning</li>
                            <li>✔ Investment readiness, funding strategy, and execution roadmap</li>
                        </ul>

                        <Link href="/contact" className="block mt-6 text-center bg-blue-700 text-white py-2 rounded-lg">
                            Join Now
                        </Link>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
                    >
                        <h4 className="font-bold text-xl text-blue-800 mb-3">Visa & Compliance Workshop</h4>
                        <p className="text-gray-600 text-sm">
                            A focused workshop designed to build awareness and clarity around visa processes, compliance requirements, and documentation best practices.
                        </p>

                        <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                            <li>✔ Overview of major UK and international visa categories</li>
                            <li>✔ Documentation planning and compliance checklist</li>
                            <li>✔ SOP and supporting document guidance</li>
                            <li>✔ Risk identification and application strategy</li>
                            <li>✔ Immigration compliance fundamentals for individuals and businesses</li>
                        </ul>

                        <Link href="/contact" className="block mt-6 text-center bg-blue-700 text-white py-2 rounded-lg">
                            Start Your Journey
                        </Link>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
                    >
                        <h4 className="font-bold text-xl text-blue-800 mb-3">Career Readiness Program</h4>
                        <p className="text-gray-600 text-sm">
                            Prepare yourself for international careers with a structured, mentor-led program focused on employability, professional branding, and job market readiness.
                        </p>

                        <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                            <li>✔ Professionally structured CV and ATS-optimised resume</li>
                            <li>✔ LinkedIn personal branding and recruiter engagement strategy</li>
                            <li>✔ Interview preparation (HR, behavioural, and technical rounds)</li>
                            <li>✔ Global and UK job market insights with role mapping</li>
                            <li>✔ Continuous mentoring, progress tracking, and feedback</li>
                        </ul>

                        <Link href="/contact" className="block mt-6 text-center bg-blue-700 text-white py-2 rounded-lg">
                            Book Session
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* WHO IS THIS FOR */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

                <div>
                    <h3 className="text-3xl font-bold text-blue-900">Who Should Join These Programs?</h3>

                    <p className="mt-4 text-gray-600">These programs are suitable for individuals and organisations seeking clarity, skill development, and global readiness, including:</p>

                    <ul className="mt-5 space-y-3 text-gray-700 text-sm">
                        <li>✔ Entrepreneurs and business owners planning to launch or expand</li>
                        <li>✔ Working professionals planning career growth or global mobility</li>
                        <li>✔ Individuals seeking structured guidance across career, visa, or business planning</li>
                        <li>✔ Graduates facing challenges with job placement or direction</li>
                        <li>✔ Students preparing for international education or employment</li>
                    </ul>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/images/courses2.jpg"
                        width={550}
                        height={380}
                        className="rounded-2xl shadow-xl object-cover"
                        alt="Training & development"
                    />
                </motion.div>
            </section>

            {/* EXPERTISE SECTION */}
            <section className="py-20 bg-gray-50">
                <h2 className="text-center text-3xl font-bold text-blue-900">
                    Learn With Experts Who Understand Your Journey
                </h2>

                <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 text-center gap-10 px-10">

                    <div>
                        <h4 className="font-semibold text-blue-800">Career Strategy</h4>
                        <p className="text-sm text-gray-600 mt-2">Strategic planning aligned with global job markets, visa requirements, and long-term career growth.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-blue-800">Skill Development</h4>
                        <p className="text-sm text-gray-600 mt-2">Hands-on, industry-relevant skills designed to meet real employer and business expectations.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-blue-800">Global Job Market</h4>
                        <p className="text-sm text-gray-600 mt-2">Insights into international hiring practices, compliance awareness, and cross-border career planning.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-700 text-white text-center rounded-none">
                <h3 className="text-2xl font-bold">
                    Take the First Step Toward Your Career Transformation
                </h3>

                <p className="max-w-xl mx-auto mt-3 text-blue-100">
                    Success begins with clarity and the right guidance. Our experts help you define your direction, build relevant skills, and execute your plans with confidence.
                </p>

                <Link href="/contact">
                    <button className="mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow">
                        Book Your Appointment
                    </button>
                </Link>
            </section>

            {/* FORM SECTION */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <h3 className="text-3xl font-bold text-blue-900">Need Help Choosing the Right Course?</h3>

                    <p className="mt-3 text-gray-600">
                        We’ll guide you based on your background, interests and future goals.
                    </p>

                    <p className="mt-3 text-gray-600">
                        Fill out this quick form — our team will contact you with personalised recommendations.
                    </p>
                </div>

                <form className="bg-white shadow-lg rounded-xl p-6">
                    <input className="form-input" placeholder="Name" required />
                    <input className="form-input mt-3" placeholder="Email" required />
                    <input className="form-input mt-3" placeholder="Phone" required />

                    <select className="form-input mt-3" required>
                        <option value="">Select Course</option>
                        <option>Career Readiness Program</option>
                        <option>Entrepreneur Growth Program</option>
                        <option>Visa Process Workshop</option>
                    </select>

                    <button className="mt-5 w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition">
                        Submit
                    </button>
                </form>
            </section>

            {/* FAQ */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h3 className="text-3xl font-bold text-blue-900">Frequently Asked Questions</h3>

                <div className="mt-6 space-y-4">
                    {[
                        "How do I know which course suits my goals?",
                        "Do these programs help with job placement?",
                        "Is this suitable for beginners?",
                        "What support do I receive after the training?",
                        "Do you provide long-term mentorship packages?",
                    ].map((q, i) => (
                        <details key={i} className="bg-gray-100 p-4 rounded-lg group">
                            <summary className="cursor-pointer font-semibold text-blue-800">{q}</summary>
                            <p className="mt-2 text-gray-600 text-sm">
                                Our programs are designed to be flexible and personalised. We assess your goals, experience, and future plans before recommending the most suitable learning or consulting pathway. Ongoing support, mentoring, and guidance are provided beyond the training period to ensure real-world application.
                            </p>
                        </details>
                    ))}
                </div>
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
