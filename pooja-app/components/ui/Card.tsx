import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
