'use client';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function CTAForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 🚫 Prevent double submit
        if (loading) return;

        setLoading(true);

        const form = e.target;

        const data = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value,
            time: new Date().toLocaleString(),
        };

        // 🔄 Loading toast
        const toastId = toast.loading('Submitting your request…');

        try {
            /* ---------------- EMAIL ---------------- */
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
                data,
                process.env.NEXT_PUBLIC_EMAILJS_KEY
            );

            toast.success('📧 Email sent successfully', { id: toastId });

            /* ---------------- GOOGLE SHEET ---------------- */
            await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(data),
            });


            toast.success('📊 Saved to Google Sheet', {
                duration: 3000,
            });

            form.reset();
        } catch (error) {
            console.error(error);

            toast.error('❌ Submission failed. Please try again.', {
                id: toastId,
            });
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <input
                name="name"
                required
                placeholder="Name"
                className="w-full border rounded px-3 py-2
        text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full border rounded px-3 py-2
        text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
                name="phone"
                required
                placeholder="Phone"
                className="w-full border rounded px-3 py-2
        text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <textarea
                name="message"
                required
                placeholder="Ask your question"
                rows={3}
                className="w-full border rounded px-3 py-2
        text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-teal-500
        resize-none"
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-600 text-white py-2 rounded-md
        hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed
        transition-all duration-200"
            >
                {loading ? 'Submitting…' : 'Submit'}
            </button>
        </form>
    );
}
