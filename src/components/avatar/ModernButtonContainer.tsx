import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  withBorder?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ModernButtonContainer: React.FC<Props> = ({
  children,
  className = "",
  isActive = false,
  withBorder = true,
  ...rest
}) => {
  return (
    <div className="relative group">
      {/* Cercle extérieur */}
      <div className={`
        absolute inset-0 
        rounded-full 
        border-[2px] border-white/20
        transition-all duration-200
        group-hover:border-white/30
        ${isActive ? 'border-white/40' : ''}
      `} />
      
      {/* Bouton principal */}
      <button
        type="button"
        className={`
          relative
          w-10 h-10
          rounded-full
          bg-white
          flex items-center justify-center
          transition-all duration-200
          shadow-sm hover:shadow-md
          overflow-hidden
          ${className}
        `}
        {...rest}
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {children}
        </div>
      </button>
    </div>
  );
}; 