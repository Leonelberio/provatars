import { FC } from 'react';

interface AvatarProps {
  backgroundColor: string;
  pattern: string;
  patternColor: string;
  skinColor: string;
}

export const Avatar: FC<AvatarProps> = ({
  backgroundColor,
  pattern,
  patternColor,
  skinColor,
}) => {
  return (
    <div
      className="w-64 h-64 rounded-full mx-auto"
      style={{
        backgroundColor,
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
          `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${skinColor}"/>
            <path d="${pattern}" fill="${patternColor}"/>
          </svg>`
        )}")`,
      }}
    />
  );
}; 