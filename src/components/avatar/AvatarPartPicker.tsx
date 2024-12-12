import React from 'react';
import { AvatarPart } from './AvatarPart';
import { ModernButtonContainer } from './ModernButtonContainer';

type Props = {
  path: string;
  withBorder?: boolean;
  isActive?: boolean;
  onDirectHairSelect?: () => void;
  onDirectFaceSelect?: () => void;
  onDirectEyesSelect?: () => void;
  onDirectMouthSelect?: () => void;
  onDirectOutfitSelect?: () => void;
  onDirectFacialHairSelect?: () => void;
  onDirectAccessoriesSelect?: () => void;
  onDirectBackgroundSelect?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AvatarPartPicker = ({ 
  path, 
  withBorder = true,
  isActive = false,
  onDirectHairSelect,
  onDirectFaceSelect,
  onDirectEyesSelect,
  onDirectMouthSelect,
  onDirectOutfitSelect,
  onDirectFacialHairSelect,
  onDirectAccessoriesSelect,
  onDirectBackgroundSelect,
  onClick,
  ...rest 
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onDirectHairSelect) {
      onDirectHairSelect();
    } else if (onDirectFaceSelect) {
      onDirectFaceSelect();
    } else if (onDirectEyesSelect) {
      onDirectEyesSelect();
    } else if (onDirectMouthSelect) {
      onDirectMouthSelect();
    } else if (onDirectOutfitSelect) {
      onDirectOutfitSelect();
    } else if (onDirectFacialHairSelect) {
      onDirectFacialHairSelect();
    } else if (onDirectAccessoriesSelect) {
      onDirectAccessoriesSelect();
    } else if (onDirectBackgroundSelect) {
      onDirectBackgroundSelect();
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <ModernButtonContainer 
      withBorder={withBorder}
      isActive={isActive}
      onClick={handleClick}
      {...rest}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <AvatarPart path={path} />
      </div>
    </ModernButtonContainer>
  );
};
