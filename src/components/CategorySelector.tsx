import React from 'react';
import { motion } from 'framer-motion';
import type { CalculatorState, CalculatorData } from '../types/calculator.types';

interface CategorySelectorProps {
    state: CalculatorState;
    setState: React.Dispatch<React.SetStateAction<CalculatorState>>;
    data: CalculatorData;
}

const slideIn = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } }
} as any;

export const CategorySelector: React.FC<CategorySelectorProps> = ({ state, setState, data }) => {
    const handleProfileChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const profile = data.ceilingProfiles.find(p => p.id === e.target.value) || null;
        setState(s => ({ ...s, selections: { ...s.selections, ceilingProfile: profile } }));
    };
    const handleFabricChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const fabric = data.fabricTypes.find(f => f.id === e.target.value) || null;
        setState(s => ({ ...s, selections: { ...s.selections, fabricType: fabric } }));
    };
    const handleLightingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = Array.from(e.target.selectedOptions, opt => opt.value);
        const lighting = data.lightingOptions.filter(l => selected.includes(l.id));
        setState(s => ({ ...s, selections: { ...s.selections, lighting } }));
    };
    return (
        <motion.div
            className="space-y-4 mb-6"
            variants={slideIn}
            initial="hidden"
            animate="visible"
        >
            <div>
                <label className="block mb-1 font-medium">Ceiling Profile</label>
                <select
                    className="w-full rounded-lg p-2 border shadow-sm focus:ring-2 focus:ring-blue-400"
                    value={state.selections.ceilingProfile?.id || ''}
                    onChange={handleProfileChange}
                >
                    <option value="">Select profile</option>
                    {data.ceilingProfiles.map(profile => (
                        <option key={profile.id} value={profile.id}>{profile.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block mb-1 font-medium">Fabric Type</label>
                <select
                    className="w-full rounded-lg p-2 border shadow-sm focus:ring-2 focus:ring-blue-400"
                    value={state.selections.fabricType?.id || ''}
                    onChange={handleFabricChange}
                >
                    <option value="">Select fabric</option>
                    {data.fabricTypes.map(fabric => (
                        <option key={fabric.id} value={fabric.id}>{fabric.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block mb-1 font-medium">Lighting Options</label>
                <select
                    className="w-full rounded-lg p-2 border shadow-sm focus:ring-2 focus:ring-blue-400"
                    multiple
                    value={state.selections.lighting.map(l => l.id)}
                    onChange={handleLightingChange}
                    size={Math.min(4, data.lightingOptions.length)}
                >
                    {data.lightingOptions.map(lighting => (
                        <option key={lighting.id} value={lighting.id}>{lighting.name}</option>
                    ))}
                </select>
            </div>
        </motion.div>
    );
}; 