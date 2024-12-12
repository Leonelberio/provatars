import React from 'react';
import { GradientPreset } from '../../constants/gradients';

type Props = {
  gradients: GradientPreset[];
  onGradientSelected: (gradient: string) => void;
  activeGradient?: string;
};

export const GradientSection: React.FC<Props> = ({
  gradients,
  onGradientSelected,
  activeGradient
}) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {gradients.map((gradient) => (
        <button
          key={gradient.name}
          className={`group relative h-16 rounded-lg border-2 transition-all duration-200 overflow-hidden
            ${activeGradient === gradient.value
              ? 'border-blue-500 shadow-lg scale-105'
              : 'border-gray-200 hover:border-blue-300 hover:shadow-md hover:scale-102'
            }`}
          onClick={() => onGradientSelected(gradient.value)}
          title={gradient.name}
        >
          <div 
            className="absolute inset-0"
            style={{ background: gradient.preview }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-30">
            <span className="text-white text-sm font-medium drop-shadow-lg">
              {gradient.name}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}; 