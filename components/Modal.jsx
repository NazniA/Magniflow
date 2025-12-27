import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ open, onClose, children, disabled }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* BACKDROP */}
                    <div
                        className={`absolute inset-0 bg-black/60 backdrop-blur-md ${disabled ? "cursor-not-allowed" : "cursor-pointer"
                            }`}
                        onClick={() => !disabled && onClose()}
                    />

                    {/* MODAL BOX */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-md w-[92%]"
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
