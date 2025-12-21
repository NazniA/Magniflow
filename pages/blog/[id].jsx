// pages/blog/[id].jsx
import { useRouter } from "next/router";
import Link from "next/link";
import { BLOGS } from "../../data/blogs";
import { useEffect } from "react";

export default function BlogDetails() {
    const router = useRouter();
    const { id } = router.query;
    const blog = BLOGS.find((b) => b.id.toString() === id);

    useEffect(() => {
        if (typeof window !== "undefined") window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className="p-10 text-center">
                <p>Loading or blog not found.</p>
                <Link href="/blog" className="text-brand underline mt-4 inline-block">
                    Back to blog
                </Link>
            </div>
        );
    }

    // RELATED POSTS: same category first, fallback to first 3 different posts
    let related = BLOGS.filter((b) => b.id !== blog.id && b.category === blog.category).slice(0, 3);
    if (related.length === 0) related = BLOGS.filter((b) => b.id !== blog.id).slice(0, 3);

    const pageUrl =
        (typeof window !== "undefined" && window.location.href) || `https://yourdomain.com/blog/${blog.id}`;

    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
            {/* HERO: full-bleed image with overlay */}
            <header className="relative rounded-lg overflow-hidden shadow-lg">
                <img src={blog.img} alt={blog.title} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute left-6 bottom-6 text-white max-w-2xl">
                    <div className="text-sm text-white/80">{blog.category} • {blog.readTime}</div>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">{blog.title}</h1>
                    <p className="mt-3 text-sm text-white/90">{blog.excerpt}</p>
                    <div className="mt-4 flex gap-3">
                        <Link href="/contact" className="inline-block bg-white text-blue-700 px-4 py-2 rounded-full font-semibold">Book a Call</Link>
                        <Link href="/blog" className="inline-block text-white/90 underline">Back to Blog</Link>
                    </div>
                </div>
            </header>

            {/* TOP HIGHLIGHTS: stat / hero summary */}
            <section className="mt-10 grid md:grid-cols-3 gap-6 items-stretch">
                <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
                    <h2 className="text-2xl font-bold text-blue-900">Quick Summary</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">{blog.excerpt}</p>

                    {/* article content teaser + CTA */}
                    <div className="prose prose-lg mt-6" dangerouslySetInnerHTML={{ __html: blog.contentHtml.split('</p>')[0] + '</p>' }} />
                    <div className="mt-6">
                        <Link href="#full-article" className="inline-block px-5 py-2 bg-blue-700 text-white rounded-full">Read Full Article</Link>
                    </div>
                </div>

                <aside className="bg-gradient-to-b from-blue-600 to-blue-500 text-white p-6 rounded-xl shadow">
                    <div className="flex flex-col items-center gap-4">
                        <div className="rounded-full bg-white/10 h-28 w-28 flex items-center justify-center text-3xl font-bold">48%</div>
                        <div className="text-center">
                            <div className="text-sm opacity-90">Insight</div>
                            <div className="mt-2 font-semibold">Key stat or takeaway related to the article</div>
                        </div>
                        <div className="mt-3 text-sm text-white/90">Use this space to show one important metric or callout that makes the article more persuasive.</div>
                    </div>
                </aside>
            </section>

            {/* MAIN LAYOUT: article + side modules */}
            <section className="mt-12 grid md:grid-cols-3 gap-8">
                {/* MAIN ARTICLE */}
                <article id="full-article" className="md:col-span-2 bg-white p-8 rounded-xl shadow">
                    <div className="mb-4 text-sm text-gray-600">
                        By <span className="font-medium">{blog.author}</span> • {blog.readTime} • {new Date().toLocaleDateString()}
                    </div>

                    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />

                    {/* COURSE-STYLE MODULES: transform key sub-sections to course-like offerings */}
                    <div className="mt-10">
                        <h3 className="text-2xl font-bold text-blue-900">Practical Modules & Takeaways</h3>
                        <div className="mt-6 grid sm:grid-cols-2 gap-4">
                            <div className="p-6 border rounded-lg hover:shadow-lg transition">
                                <h4 className="font-semibold">Module 1 — Core Concept</h4>
                                <p className="text-sm text-gray-600 mt-2">Short actionable task or exercise readers can do today to implement the idea.</p>
                            </div>

                            <div className="p-6 border rounded-lg hover:shadow-lg transition">
                                <h4 className="font-semibold">Module 2 — Hands-on Activity</h4>
                                <p className="text-sm text-gray-600 mt-2">A small project or checklist to apply lessons from the article.</p>
                            </div>

                            <div className="p-6 border rounded-lg hover:shadow-lg transition">
                                <h4 className="font-semibold">Module 3 — Advanced Tips</h4>
                                <p className="text-sm text-gray-600 mt-2">Extra techniques for readers who want to go deeper.</p>
                            </div>

                            <div className="p-6 border rounded-lg hover:shadow-lg transition">
                                <h4 className="font-semibold">Module 4 — Next Steps</h4>
                                <p className="text-sm text-gray-600 mt-2">How to turn small wins into long-term results.</p>
                            </div>
                        </div>
                    </div>

                    {/* "Is this for you" block (courses-like) */}
                    <div className="mt-10 bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold">Is this article right for you?</h3>
                        <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
                            <li>If you’re a graduate preparing for the job market.</li>
                            <li>If you’re a founder seeking early traction.</li>
                            <li>If you lead hiring and want to understand candidate expectations.</li>
                        </ul>
                    </div>
                </article>

                {/* SIDEBAR: enroll form, author, related */}
                <aside className="md:col-span-1 space-y-6">
                    {/* ENROLL / CONTACT FORM */}
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h4 className="font-semibold text-lg">Book a 1:1 Session</h4>
                        <p className="text-sm text-gray-600 mt-2">Get a tailored action plan based on this article.</p>
                        <form action="/api/contact" method="post" className="mt-4 space-y-3">
                            <input name="name" placeholder="Name" required className="w-full border rounded px-3 py-2" />
                            <input name="email" placeholder="Email" required className="w-full border rounded px-3 py-2" />
                            <input name="phone" placeholder="Phone" className="w-full border rounded px-3 py-2" />
                            <input name="topic" defaultValue={blog.title} type="hidden" />
                            <button type="submit" className="mt-2 w-full bg-blue-700 text-white py-2 rounded">Request Session</button>
                        </form>
                    </div>

                    {/* AUTHOR CARD */}
                    <div className="bg-white p-4 rounded-xl shadow text-center">
                        <div className="h-20 w-20 mx-auto rounded-full bg-gray-200 overflow-hidden">
                            <img src="/about/people2.jpg" alt="author" className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-3 font-semibold">{blog.author}</div>
                        <div className="text-sm text-gray-600 mt-1">Magniflow Insights</div>
                        <div className="mt-3">
                            <Link href="/about" className="text-sm underline">About the team</Link>
                        </div>
                    </div>

                    {/* RELATED POSTS (compact) */}
                    <div className="bg-white p-4 rounded-xl shadow">
                        <h4 className="font-semibold">Related posts</h4>
                        <div className="mt-3 space-y-3">
                            {related.map((r) => (
                                <Link key={r.id} href={`/blog/${r.id}`} className="flex items-center gap-3">
                                    <img src={r.img} alt={r.title} className="w-16 h-10 object-cover rounded" />
                                    <div>
                                        <div className="text-xs text-gray-500">— {r.category}</div>
                                        <div className="text-sm font-medium">{r.title}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* QUICK FAQ (courses style) */}
                    <div className="bg-white p-4 rounded-xl shadow">
                        <h4 className="font-semibold">Quick FAQ</h4>
                        <details className="mt-3">
                            <summary className="cursor-pointer">How long does a session take?</summary>
                            <p className="mt-2 text-sm text-gray-600">Typically 45–60 minutes depending on the scope.</p>
                        </details>
                        <details className="mt-2">
                            <summary className="cursor-pointer">Do you offer group sessions?</summary>
                            <p className="mt-2 text-sm text-gray-600">Yes — we run small cohort workshops regularly.</p>
                        </details>
                    </div>
                </aside>
            </section>

            {/* BOTTOM CTA */}
            <section className="mt-12 bg-gradient-to-r from-blue-700 to-blue-500 text-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-bold">Ready to turn this into action?</h3>
                        <p className="mt-2 text-white/90">Book a strategy session and we’ll build a simple plan you can execute this week.</p>
                    </div>
                    <div>
                        <Link href="/contact" className="inline-block bg-white text-blue-700 px-6 py-3 rounded-full font-semibold">
                            Book a call
                        </Link>
                    </div>
                </div>
            </section>
        </main>

    );
}
