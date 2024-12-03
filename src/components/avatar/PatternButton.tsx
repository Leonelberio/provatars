import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '@/components/common/Tooltip';

interface Props {
  pattern: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export const PatternButton: React.FC<Props> = ({
  pattern,
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
        className={`relative w-10 h-10 rounded-full overflow-hidden transition-all duration-200
          ${isActive
            ? 'ring-2 ring-blue-500 ring-offset-2 shadow-lg scale-105'
            : 'border-2 border-gray-200 hover:border-blue-300'
          }`}
      >
        <div className={`w-full h-full ${pattern} bg-gray-100`} />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 0 : 0.5 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    </Tooltip>
  );
}; 