import { FC } from 'react';
import { Button } from './Button';
import { BackgroundIcon } from './icons/BackgroundIcon';
import { PatternIcon } from './icons/PatternIcon';
import { ColorIcon } from './icons/ColorIcon';
import { SkinColorIcon } from './icons/SkinColorIcon';

interface ControlsProps {
  onBackgroundColorChange: () => void;
  onPatternChange: () => void;
  onPatternColorChange: () => void;
  onSkinColorChange: () => void;
}

export const Controls: FC<ControlsProps> = ({
  onBackgroundColorChange,
  onPatternChange,
  onPatternColorChange,
  onSkinColorChange,
}) => {
  return (
    <div className="flex gap-2 justify-center mt-8">
      <Button onClick={onBackgroundColorChange} icon={<BackgroundIcon />} />
      <Button onClick={onPatternChange} icon={<PatternIcon />} />
      <Button onClick={onPatternColorChange} icon={<ColorIcon />} />
      <Button onClick={onSkinColorChange} icon={<SkinColorIcon />} />
    </div>
  );
}; 