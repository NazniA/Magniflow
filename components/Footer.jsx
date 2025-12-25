import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-12 sm:mt-16 border-t pt-6 pb-8 sm:pb-12 text-xs sm:text-sm text-gray-600">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <div className="font-bold text-magniflow-900 text-sm sm:text-base">Magniflow</div>
                    <div className="text-xs sm:text-sm">© 2025 Magniflow — All rights reserved</div>
                </div>

                <div className="flex gap-4 sm:gap-6">
                    <Link 
                        href="/privacy" 
                        className="hover:text-magniflow-900 transition min-h-[44px] flex items-center"
                    >
                        Privacy
                    </Link>
                    <Link 
                        href="/terms"
                        className="hover:text-magniflow-900 transition min-h-[44px] flex items-center"
                    >
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}
