import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CategorySelector } from './CategorySelector';
import { MeasurementInputs } from './MeasurementInputs';
import { PriceDisplay } from './PriceDisplay';
import type { CalculatorState } from '../types/calculator.types';
import calculatorData from '../assets/calculatorData.json';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
} as any;

export const PriceCalculator: React.FC = () => {
    const [state, setState] = useState<CalculatorState>({
        selections: {
            ceilingProfile: null,
            fabricType: null,
            lighting: [],
        },
        measurements: { area: 0, perimeter: 0, quantity: 0 },
        pricing: { subtotal: 0, tax: 0, total: 0 },
    });

    // Dummy price calculation logic
    useEffect(() => {
        const { ceilingProfile, fabricType, lighting } = state.selections;
        const { area, perimeter, quantity } = state.measurements;
        let subtotal = 0;
        if (ceilingProfile) subtotal += perimeter * ceilingProfile.pricePerMeter;
        if (fabricType) subtotal += area * fabricType.pricePerSqM;
        if (lighting.length) subtotal += lighting.reduce((sum: number, l) => sum + l.pricePerPiece * quantity, 0);
        const tax = Math.round(subtotal * 0.2);
        const total = subtotal + tax;
        setState((s: CalculatorState) => ({ ...s, pricing: { subtotal, tax, total } }));
    }, [state.selections, state.measurements]);

    return (
        <motion.div
            className="max-w-md mx-auto mt-8 p-6 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl backdrop-blur-md"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Stretch Ceiling Price Calculator</h2>
            <CategorySelector state={state} setState={setState} data={calculatorData} />
            <MeasurementInputs state={state} setState={setState} />
            <PriceDisplay pricing={state.pricing} />
        </motion.div>
    );
}; 