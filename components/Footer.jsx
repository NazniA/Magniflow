import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-16 border-t pt-6 pb-12 text-sm text-gray-600">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div>
                    <div className="font-bold text-magniflow-900">Magniflow</div>
                    <div>© 2025 Magniflow — All rights reserved</div>
                </div>

                <div className="mt-4 md:mt-0">
                    <Link href="/privacy" className="mr-4">
                        Privacy
                    </Link>
                    <Link href="/terms">
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}
