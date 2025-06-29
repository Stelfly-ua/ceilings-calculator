import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { CalculatorState } from '../types/calculator.types';

interface MeasurementInputsProps {
    state: CalculatorState;
    setState: React.Dispatch<React.SetStateAction<CalculatorState>>;
}

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
} as any;

export const MeasurementInputs: React.FC<MeasurementInputsProps> = ({ state, setState }) => {
    const [inputs, setInputs] = useState(state.measurements);
    React.useEffect(() => {
        const handler = setTimeout(() => {
            setState(s => ({ ...s, measurements: inputs }));
        }, 300);
        return () => clearTimeout(handler);
    }, [inputs, setState]);
    return (
        <motion.div
            className="space-y-4 mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
        >
            <div>
                <label className="block mb-1 font-medium">Area (m²)</label>
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    className="w-full rounded-lg p-2 border shadow-sm focus:ring-2 focus:ring-blue-400"
                    value={inputs.area}
                    onChange={e => setInputs(i => ({ ...i, area: parseFloat(e.target.value) || 0 }))}
                />
            </div>
            <div>
                <label className="block mb-1 font-medium">Perimeter (m)</label>
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    className="w-full rounded-lg p-2 border shadow-sm focus:ring-2 focus:ring-blue-400"
                    value={inputs.perimeter}
                    onChange={e => setInputs(i => ({ ...i, perimeter: parseFloat(e.target.value) || 0 }))}
                />
            </div>
            <div>
                <label className="block mb-1 font-medium">Lighting Quantity (pcs)</label>
                <input
                    type="number"
                    min="0"
                    step="1"
                    className="w-full rounded-lg p-2 border shadow-sm focus:ring-2 focus:ring-blue-400"
                    value={inputs.quantity}
                    onChange={e => setInputs(i => ({ ...i, quantity: parseInt(e.target.value) || 0 }))}
                />
            </div>
        </motion.div>
    );
}; 