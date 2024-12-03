import React from 'react';
import { Pattern } from '../../constants/patterns';

type Props = {
  patterns: Pattern[];
  onPatternSelected: (pattern: string) => void;
  activePattern?: string;
};

export const PatternSection: React.FC<Props> = ({
  patterns,
  onPatternSelected,
  activePattern
}) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {patterns.map((pattern) => (
        <button
          key={pattern.name}
          className={`group relative aspect-square rounded-lg border-2 transition-all duration-200 
            ${activePattern === pattern.value
              ? 'border-blue-500 shadow-lg scale-105'
              : 'border-gray-200 hover:border-blue-300 hover:shadow-md hover:scale-102'
            }`}
          onClick={() => onPatternSelected(pattern.value)}
          title={pattern.name}
        >
          <div 
            className="w-full h-full rounded-lg overflow-hidden"
            style={{ background: pattern.preview, backgroundSize: '10px 10px' }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-20">
            <span className="text-white text-xs font-medium">{pattern.name}</span>
          </div>
        </button>
      ))}
    </div>
  );
}; 