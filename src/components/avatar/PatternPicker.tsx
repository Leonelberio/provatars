import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '@/components/common/Tooltip';
import { patterns } from '@/constants/patterns';

interface PatternPickerProps {
  onSelect: (pattern: string) => void;
  selectedPattern?: string;
}

export const PatternPicker = memo(({ onSelect, selectedPattern }: PatternPickerProps) => {
  return (
    <div className="flex space-x-1">
      {patterns.map((pattern) => (
        <Tooltip key={pattern.name} content={pattern.name}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(pattern.value)}
            className={`w-6 h-6 rounded-full overflow-hidden ${selectedPattern === pattern.value ? 'ring-1 ring-blue-500 ring-offset-1' : ''}`}
          >
            <div 
              className={`w-full h-full ${pattern.value} bg-gray-100`}
              style={{ 
                backgroundSize: '6px 6px',
                backgroundRepeat: 'repeat'
              }} 
            />
          </motion.button>
        </Tooltip>
      ))}
    </div>
  );
}); 