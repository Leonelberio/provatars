import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  withBorder?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AvatarButtonPickerContainer: React.FC<Props> = ({
  children,
  className = "",
  withBorder = true,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={`p-6 ${withBorder ? "border-2 border-black" : ""} rounded-full overflow-hidden relative ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
