import React, { forwardRef } from 'react';

interface Props {
  children: React.ReactNode;
  skinTone: string;
  className?: string;
}

export const SvgAvatarContainer = forwardRef<HTMLDivElement, Props>(({
  children,
  skinTone,
  className = ''
}, ref) => {
  return (
    <div 
      id="avatar-container"
      ref={ref}
      className={`relative ${className}`}
      style={{
        '--skin-tone': skinTone.replace('bg-[', '').replace(']', '')
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}); 