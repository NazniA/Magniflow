'use client';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function CTAForm({ onSuccess, setLock }) {
    const [loading, setLoading] = useState(false);
    const [showThanks, setShowThanks] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        setLock?.(true);

        const form = e.target;

        const data = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value,
            time: new Date().toLocaleString(),
        };

        const toastId = toast.loading('Submitting your request…');

        try {
            // -------- EMAIL ----------
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
                data,
                process.env.NEXT_PUBLIC_EMAILJS_KEY
            );

            toast.success('📧 Email sent successfully', { id: toastId });

            // -------- GOOGLE SHEET ----------
            await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(data),
            });

            toast.success('📊 Saved to Google Sheet', { duration: 3000 });

            form.reset();

            // 🎉 Popup Thank-you view
            setShowThanks(true);

            setTimeout(() => {
                setShowThanks(false);
                setLoading(false);
                setLock?.(false);
                onSuccess?.();
            }, 1500);

        } catch (error) {
            console.error(error);

            toast.error('❌ Submission failed. Please try again.', {
                id: toastId,
            });

            setLoading(false);
            setLock?.(false);
        }
    };

    // THANK-YOU MESSAGE VIEW
    if (showThanks) {
        return (
            <div className="text-center py-6 animate-fade">
                <h3 className="text-xl font-semibold text-blue-700">
                    🎉 Thank you!
                </h3>
                <p className="text-gray-600 mt-1">
                    We received your message — we’ll contact you shortly.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <input
                name="name"
                required
                placeholder="Name"
                className="w-full border rounded px-3 py-2.5 text-sm sm:text-base
        text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-teal-500
        min-h-[44px]"
            />

            <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full border rounded px-3 py-2.5 text-sm sm:text-base
        text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-teal-500
        min-h-[44px]"
            />

            <input
                name="phone"
                required
                placeholder="Phone"
                className="w-full border rounded px-3 py-2.5 text-sm sm:text-base
        text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-teal-500
        min-h-[44px]"
            />

            <textarea
                name="message"
                required
                placeholder="Ask your question"
                rows={3}
                className="w-full border rounded px-3 py-2.5 text-sm sm:text-base
        text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-teal-500
        resize-none min-h-[88px]"
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-600 text-white py-2.5 rounded-md text-sm sm:text-base
        hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed
        transition-all duration-200 font-medium min-h-[44px]"
            >
                {loading ? 'Submitting…' : 'Submit'}
            </button>
        </form>
    );
}
