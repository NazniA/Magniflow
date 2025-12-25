'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLink = (href, label) => {
        const active = pathname === href || pathname.startsWith(href + '/');
        return (
            <Link
                href={href}
                className={`relative font-medium transition-colors
          ${active ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
          after:bg-blue-600 after:origin-left after:scale-x-0
          hover:after:scale-x-100 after:transition-transform
          ${active ? 'after:scale-x-100' : ''}`}
            >
                {label}
            </Link>
        );
    };

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/logo2.jpeg"
                        alt="Magniflow logo"
                        className="h-14 md:h-16 w-auto object-contain"
                    />
                    <div className="leading-tight">
                        <div className="text-xl font-bold text-magniflow-900">Magniflow</div>
                        <div className="text-xs font-medium tracking-wide text-magniflow-900 dark:text-blue-200">
                            BUSINESS | CAREER | EDUCATION
                    </div>
                    </div>
                </div>


                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center text-sm relative">

                    {navLink('/', 'Home')}

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <div className="flex items-center gap-1 cursor-pointer">
                            {navLink('/services', 'Services')}
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                            </svg>
                        </div>

                        <div className="absolute left-0 mt-3 w-64 bg-white rounded-xl shadow-lg
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-200">
                            <ul className="p-2 text-sm">
                                <li><Link href="/services/visa-immigration" className="block px-3 py-2 hover:bg-gray-50 rounded">Visa & Immigration</Link></li>
                                <li><Link href="/services/it-solutions" className="block px-3 py-2 hover:bg-gray-50 rounded">IT Solutions</Link></li>
                                <li><Link href="/services/career-counselling" className="block px-3 py-2 hover:bg-gray-50 rounded">Career Counselling</Link></li>
                                <li><Link href="/services/tech-training" className="block px-3 py-2 hover:bg-gray-50 rounded">Tech Training</Link></li>
                                <li><Link href="/services/tourism-travel" className="block px-3 py-2 hover:bg-gray-50 rounded">Travel & Tourism</Link></li>
                            </ul>
                        </div>
                    </div>

                    {navLink('/courses', 'Courses')}
                    {navLink('/blog', 'Blog')}
                    {navLink('/about', 'About')}

                    {/* Contact CTA */}
                    <Link
                        href="/contact"
                        className={`px-4 py-2 rounded-full font-medium transition
              ${pathname === '/contact'
                                ? 'bg-blue-600 text-white'
                                : 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-gray-700 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Toggle menu"
                >
                    <span className="text-2xl">☰</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t shadow-lg">
                    <div className="flex flex-col p-4 space-y-3 text-sm">
                        <Link 
                            href="/" 
                            onClick={() => setMobileOpen(false)}
                            className="py-2 px-3 hover:bg-gray-50 rounded min-h-[44px] flex items-center"
                        >
                            Home
                        </Link>
                        <Link 
                            href="/services" 
                            onClick={() => setMobileOpen(false)}
                            className="py-2 px-3 hover:bg-gray-50 rounded min-h-[44px] flex items-center"
                        >
                            Services
                        </Link>
                        <Link 
                            href="/courses" 
                            onClick={() => setMobileOpen(false)}
                            className="py-2 px-3 hover:bg-gray-50 rounded min-h-[44px] flex items-center"
                        >
                            Courses
                        </Link>
                        <Link 
                            href="/blog" 
                            onClick={() => setMobileOpen(false)}
                            className="py-2 px-3 hover:bg-gray-50 rounded min-h-[44px] flex items-center"
                        >
                            Blog
                        </Link>
                        <Link 
                            href="/about" 
                            onClick={() => setMobileOpen(false)}
                            className="py-2 px-3 hover:bg-gray-50 rounded min-h-[44px] flex items-center"
                        >
                            About
                        </Link>
                        <Link 
                            href="/contact" 
                            onClick={() => setMobileOpen(false)} 
                            className="text-blue-600 font-semibold py-2 px-3 hover:bg-gray-50 rounded min-h-[44px] flex items-center"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
