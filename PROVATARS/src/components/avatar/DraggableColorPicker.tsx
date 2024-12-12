import React, { useRef, useState } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { HexColorPicker } from 'react-colorful';

interface Props {
  color: string;
  onChange: (color: string) => void;
  onClose: () => void;
}

const recentColors = [
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFC000',
  '#A259FF',
];

export const DraggableColorPicker: React.FC<Props> = ({ color, onChange, onClose }) => {
  const constraintsRef = useRef(null);
  const dragControls = useDragControls();
  const [position, setPosition] = useState({ x: 0, y: -200 });

  return (
    <motion.div
      ref={constraintsRef}
      className="fixed inset-0 pointer-events-none z-50"
    >
      <motion.div
        drag
        dragControls={dragControls}
        dragMomentum={false}
        dragElastic={0.1}
        initial={{ opacity: 0, scale: 0.95, x: position.x, y: position.y }}
        animate={{ opacity: 1, scale: 1, x: position.x, y: position.y }}
        exit={{ opacity: 0, scale: 0.95 }}
        onDragEnd={(event, info) => {
          setPosition({ x: info.point.x, y: info.point.y });
        }}
        className="absolute pointer-events-auto bg-white rounded-xl shadow-2xl p-4"
        style={{ width: '280px' }}
      >
        {/* Barre de titre draggable */}
        <div 
          className="flex items-center justify-between mb-4 cursor-move"
          onPointerDown={(e) => dragControls.start(e)}
        >
          <div className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm font-medium text-gray-700">
              Sélecteur de couleur
            </span>
          </div>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>

        {/* Color Picker */}
        <div className="relative">
          <HexColorPicker
            color={color}
            onChange={onChange}
            className="!w-full"
          />
          <motion.div
            className="absolute inset-0 bg-black/5 rounded-lg pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Couleurs récentes et input */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {recentColors.map((recentColor) => (
                <motion.button
                  key={recentColor}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onChange(recentColor)}
                  className="w-6 h-6 rounded-full border-2 border-white shadow-sm transition-transform"
                  style={{ backgroundColor: recentColor }}
                />
              ))}
            </div>
            <input
              type="text"
              value={color}
              onChange={(e) => onChange(e.target.value)}
              className="w-24 px-2 py-1 text-sm border border-gray-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all uppercase"
              maxLength={7}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}; 