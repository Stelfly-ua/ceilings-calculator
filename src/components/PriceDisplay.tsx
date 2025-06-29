import React from 'react';
import { motion } from 'framer-motion';

interface PriceDisplayProps {
    pricing: {
        subtotal: number;
        tax: number;
        total: number;
    };
}

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
} as any;

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ pricing }) => {
    return (
        <motion.div
            className="rounded-xl p-4 bg-white/70 dark:bg-gray-800/70 shadow-md backdrop-blur-md"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
        >
            <div className="flex justify-between mb-2">
                <span className="font-medium">Subtotal</span>
                <span>{(pricing.subtotal / 100).toFixed(2)} ₽</span>
            </div>
            <div className="flex justify-between mb-2">
                <span className="font-medium">Tax (20%)</span>
                <span>{(pricing.tax / 100).toFixed(2)} ₽</span>
            </div>
            <div className="flex justify-between text-lg font-bold mb-4">
                <span>Total</span>
                <span>{(pricing.total / 100).toFixed(2)} ₽</span>
            </div>
            <button
                className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md transition duration-300 hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="button"
                tabIndex={0}
            >
                Export PDF (soon)
            </button>
        </motion.div>
    );
}; 