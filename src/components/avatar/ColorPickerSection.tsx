import React, { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useColorHistory } from '@/hooks/useColorHistory';
import { ColorPickerPopover } from './ColorPickerPopover';
import '@/styles/transitions.css';

const PRESET_COLORS = [
  { value: '#FF0000', name: 'Rouge', bgClass: 'bg-[#FF0000]' },
  { value: '#00FF00', name: 'Vert', bgClass: 'bg-[#00FF00]' },
  { value: '#0000FF', name: 'Bleu', bgClass: 'bg-[#0000FF]' },
  { value: '#FFC000', name: 'Or', bgClass: 'bg-[#FFC000]' },
  { value: '#A259FF', name: 'Violet', bgClass: 'bg-[#A259FF]' },
  { value: '#1ABCFE', name: 'Bleu clair', bgClass: 'bg-[#1ABCFE]' },
];

type Props = {
  onColorSelected: (color: string) => void;
  initialColor?: string;
};

export const ColorPickerSection: React.FC<Props> = ({ 
  onColorSelected,
  initialColor = '#000000'
}) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerPosition, setPickerPosition] = useState({ x: 0, y: 0 });
  const { colors: recentColors, addColor } = useColorHistory(5);
  const addButtonRef = useRef<HTMLButtonElement>(null);

  const handleColorChange = useCallback((color: string) => {
    addColor(color.replace(/^bg-\[(#[0-9A-Fa-f]{6})\]$/, '$1'));
    onColorSelected(color);
  }, [onColorSelected, addColor]);

  const handleAddClick = useCallback(() => {
    if (addButtonRef.current) {
      const rect = addButtonRef.current.getBoundingClientRect();
      setPickerPosition({ x: rect.left + rect.width / 2, y: rect.top });
    }
    setIsPickerOpen(true);
  }, []);

  const getInitialColor = useCallback((bgClass?: string) => {
    if (!bgClass) return '#000000';
    const match = bgClass.match(/bg-\[(#[0-9A-Fa-f]{6})\]/);
    return match ? match[1] : bgClass.startsWith('#') ? bgClass : '#000000';
  }, []);

  return (
    <>
      <motion.div 
        className="flex items-center space-x-2 p-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Bouton pour ouvrir le color picker */}
        <motion.button
          ref={addButtonRef}
          onClick={handleAddClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-blue-500 to-green-500 p-0.5"
          aria-label="Ouvrir le sélecteur de couleur"
        >
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <span className="text-xl">+</span>
          </div>
        </motion.button>

        {/* Couleurs prédéfinies */}
        {PRESET_COLORS.map(({ value, name, bgClass }) => (
          <motion.button
            key={value}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleColorChange(bgClass)}
            className={`w-10 h-10 rounded-full transition-all duration-200
              ${initialColor === value || initialColor === bgClass
                ? 'ring-2 ring-blue-500 ring-offset-2 shadow-md' 
                : 'ring-1 ring-gray-200 hover:ring-blue-200'
              }`}
            aria-label={`Sélectionner la couleur ${name}`}
            aria-pressed={initialColor === value || initialColor === bgClass}
          >
            <div 
              className="w-full h-full rounded-full background-transition"
              style={{ backgroundColor: value }}
            />
          </motion.button>
        ))}

        {/* Séparateur */}
        <div className="w-px h-8 bg-gray-200 mx-2" />

        {/* Couleurs récentes */}
        {recentColors.length > 0 && (
          <div className="flex items-center space-x-2">
            {recentColors.map((recentColor) => (
              <motion.button
                key={recentColor}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleColorChange(`bg-[${recentColor}]`)}
                className="w-8 h-8 rounded-full ring-1 ring-gray-200 hover:ring-blue-200 transition-all"
                style={{ backgroundColor: recentColor }}
                aria-label={`Utiliser la couleur récente ${recentColor}`}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Color Picker Popover */}
      <ColorPickerPopover
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        onColorSelect={handleColorChange}
        initialColor={getInitialColor(initialColor)}
        anchorPosition={pickerPosition}
      />
    </>
  );
}; 