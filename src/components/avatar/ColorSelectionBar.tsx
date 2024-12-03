import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ColorPickerPopover } from './ColorPickerPopover';

const PRESET_COLORS = [
  { value: '#000000', bgClass: 'bg-[#000000]' },
  { value: '#FFC000', bgClass: 'bg-[#FFC000]' },
  { value: '#A259FF', bgClass: 'bg-[#A259FF]' },
  { value: '#1ABCFE', bgClass: 'bg-[#1ABCFE]' },
  { value: '#0ACF83', bgClass: 'bg-[#0ACF83]' },
  { value: '#FE5F5F', bgClass: 'bg-[#FE5F5F]' },
];

interface ColorSelectionBarProps {
  onColorSelect: (color: string) => void;
  selectedColor?: string;
}

export const ColorSelectionBar: React.FC<ColorSelectionBarProps> = ({
  onColorSelect,
  selectedColor
}) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerAnchor, setPickerAnchor] = useState({ x: 0, y: 0 });

  const handleAddClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPickerAnchor({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
    setIsPickerOpen(true);
  }, []);

  const getInitialColor = useCallback((bgClass?: string) => {
    if (!bgClass) return '#000000';
    const match = bgClass.match(/bg-\[(#[0-9A-Fa-f]{6})\]/);
    return match ? match[1] : '#000000';
  }, []);

  return (
    <div className="flex items-center space-x-1">
      {/* Bouton d'ajout de couleur */}
      <motion.button
        onClick={handleAddClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-0.5"
      >
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <span className="text-sm">+</span>
        </div>
      </motion.button>

      {/* Couleurs prédéfinies */}
      {PRESET_COLORS.map((color) => (
        <motion.button
          key={color.value}
          onClick={() => onColorSelect(color.bgClass)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-6 h-6 rounded-full ${selectedColor === color.bgClass ? 'ring-1 ring-blue-500 ring-offset-1' : ''}`}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{ backgroundColor: color.value }}
          />
        </motion.button>
      ))}

      {/* Color Picker Popover */}
      <ColorPickerPopover
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        onColorSelect={onColorSelect}
        initialColor={getInitialColor(selectedColor)}
        anchorPosition={pickerAnchor}
      />
    </div>
  );
}; 