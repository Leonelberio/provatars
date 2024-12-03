import React, { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HexColorPicker } from 'react-colorful';
import { motion } from 'framer-motion';

interface ColorPickerPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  onColorSelect: (color: string) => void;
  initialColor: string;
  anchorPosition?: { x: number; y: number };
}

export const ColorPickerPopover: React.FC<ColorPickerPopoverProps> = ({
  isOpen,
  onClose,
  onColorSelect,
  initialColor,
  anchorPosition = { x: 0, y: 0 }
}) => {
  const [currentColor, setCurrentColor] = useState(initialColor);

  useEffect(() => {
    setCurrentColor(initialColor);
  }, [initialColor]);

  const handleColorChange = useCallback((color: string) => {
    const hexColor = color.toUpperCase();
    setCurrentColor(hexColor);
    onColorSelect(`bg-[${hexColor}]`);
  }, [onColorSelect]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div 
        className="fixed inset-0 bg-black/20" 
        onClick={onClose}
      />
      
      <motion.div
        className="fixed bg-white rounded-lg shadow-xl p-4"
        style={{
          left: anchorPosition.x - 140,
          top: anchorPosition.y + 40,
          width: 280,
        }}
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute -right-2 -top-2 w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-md text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <HexColorPicker
            color={currentColor}
            onChange={handleColorChange}
            className="w-full !h-48"
          />

          <div className="flex items-center space-x-2 mt-4">
            <div
              className="w-8 h-8 rounded-lg shadow-inner"
              style={{ backgroundColor: currentColor }}
            />
            <input
              type="text"
              value={currentColor}
              onChange={(e) => {
                const value = e.target.value.toUpperCase();
                if (value.match(/^#[0-9A-F]{0,6}$/)) {
                  handleColorChange(value);
                }
              }}
              className="flex-1 px-2 py-1 text-sm border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all uppercase"
              maxLength={7}
              placeholder="#000000"
            />
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}; 