import React, { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { HexColorPicker } from 'react-colorful';

interface ColorPickerProps {
  onClose: () => void;
  onColorSelect: (color: string) => void;
  initialColor?: string;
}

export const ColorPicker = memo(({ onClose, onColorSelect, initialColor = '#FF0000' }: ColorPickerProps) => {
  const [color, setColor] = useState(initialColor);

  const handleColorChange = useCallback((newColor: string) => {
    setColor(newColor);
  }, []);

  const handleSubmit = useCallback(() => {
    onColorSelect(color);
    onClose();
  }, [color, onColorSelect, onClose]);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl p-4 w-64"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute right-0 top-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Color Picker */}
        <div className="mb-4">
          <HexColorPicker
            color={color}
            onChange={handleColorChange}
            className="w-full !rounded-lg"
          />
        </div>

        {/* Aperçu et input */}
        <div className="flex items-center space-x-2 mb-4">
          <div
            className="w-10 h-10 rounded-lg shadow-inner"
            style={{ backgroundColor: color }}
          />
          <input
            type="text"
            value={color}
            onChange={(e) => handleColorChange(e.target.value)}
            className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Bouton appliquer */}
        <button
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          Appliquer
        </button>
      </div>
    </motion.div>
  );
}); 