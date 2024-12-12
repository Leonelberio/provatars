import { FC, ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  icon: ReactNode;
}

export const Button: FC<ButtonProps> = ({ onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      {icon}
    </button>
  );
}; 