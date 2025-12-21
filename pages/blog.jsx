import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
    const blogs = [
        {
            id: 1,
            title: "Smart Strategies for Startup Marketing in 2025",
            category: "Career",
            desc: "Marketing trends are evolving faster than ever. This guide breaks down simple, effective tactics that new businesses can use to reach customers, build trust, and grow sustainably.",
            img: "/blog/b1.jpeg"
        },
        {
            id: 2,
            title: "Essential Skills UK Employers Look for in Modern Professionals",
            category: "Business",
            desc: "If you're preparing for opportunities in the UK, understanding employer expectations is the first step. Learn which skills matter most today and how to position yourself confidently.",
            img: "/blog/b2.jpg"
        },
        {
            id: 3,
            title: "How New Founders Can Build a Strong Business Blueprint",
            category: "Entrepreneurship",
            desc: "Launching a business can feel overwhelming. This article guides you through the fundamentals — market understanding and strategy-building to ensure long-term success.",
            img: "/blog/b3.jpg"
        },
        {
            id: 4,
            title: "Top CV Improvements Every Graduate Should Make in 2025",
            category: "Career",
            desc: "A polished CV opens doors. Learn modern formatting rules, keyword strategies, and practical improvements that help your profile stand out to UK recruiters.",
            img: "/blog/b4.jpg"
        },
        {
            id: 5,
            title: "Developing Confidence & Skills That Impress UK Hiring Teams",
            category: "Business",
            desc: "Beyond technical skills, employers value clarity, confidence, and adaptability. Here’s how to develop an impactful professional presence.",
            img: "/blog/b5.jpeg"
        },
        {
            id: 6,
            title: "A Beginner’s Guide to Scaling Your Startup Smartly",
            category: "Entrepreneurship",
            desc: "Growth requires planning. Learn how successful founders scale with customer focus, stable systems, and long-term strategies.",
            img: "/blog/b6.jpeg"
        }
    ];

    return (
        <div className="pb-20">

            {/* HERO BANNER */}
            <section className="relative bg-gray-100 h-72 flex items-center justify-center text-center">
                <div className="absolute inset-0">
                    <img src="/patterns/hero-bg.jpg" className="w-full h-full object-cover opacity-30" />
                </div>

                <div className="relative z-10">
                    <h3 className="text-lg text-gray-700">Insights Hub</h3>
                    <h1 className="text-3xl md:text-4xl font-bold text-brand mt-2 px-4">
                        Career & Business Growth Blogs for UK Professionals & Entrepreneurs
                    </h1>
                </div>
            </section>

            {/* BLOG GRID */}
            <div className="max-w-6xl mx-auto px-6 mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
                {blogs.map(blog => (
                    <div key={blog.id} className="bg-white shadow rounded-xl overflow-hidden">
                        <div className="h-56 w-full overflow-hidden">
                            <img src={blog.img} alt={blog.title} className="w-full h-full object-cover hover:scale-110 transition" />
                        </div>

                        <div className="p-6">
                            <p className="text-brand text-sm font-medium">— {blog.category}</p>
                            <h3 className="font-semibold text-lg mt-1">{blog.title}</h3>
                            <p className="text-sm text-gray-600 mt-3">{blog.desc}</p>

                            <Link href={`/blog/${blog.id}`}>
                                <button className="mt-5 px-4 py-2 bg-brand text-white rounded-md text-sm hover:bg-brand-dark">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

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
