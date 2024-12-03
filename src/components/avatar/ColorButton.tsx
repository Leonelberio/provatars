import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '@/components/common/Tooltip';

interface Props {
  color: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export const ColorButton: React.FC<Props> = ({
  color,
  name,
  isActive,
  onClick,
}) => {
  return (
    <Tooltip content={name}>
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-10 h-10 rounded-full transition-all duration-200
          ${isActive
            ? 'ring-2 ring-blue-500 ring-offset-2 shadow-lg scale-105'
            : 'ring-2 ring-white shadow-sm hover:ring-gray-100'
          }`}
      >
        <div 
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: color }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 0.2 : 0 }}
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    </Tooltip>
  );
}; 