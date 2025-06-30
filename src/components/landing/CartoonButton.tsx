import React from 'react';

interface CartoonButtonProps {
  label: string;
  color?: string;
  hasHighlight?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const CartoonButton: React.FC<CartoonButtonProps> = ({
  label,
  color = 'bg-yellow-400',
  hasHighlight = true,
  disabled = false,
  onClick,
  className = ''
}) => {
  return (
    <div className={`inline-block ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`relative h-12 px-6 text-xl rounded-full font-bold text-gray-800 border-2 border-gray-800 transition-all duration-150 overflow-hidden group
        ${color} hover:shadow-[0_4px_0_0_#374151]
        ${disabled ? 'opacity-50 pointer-events-none' : 'hover:-translate-y-1 active:translate-y-0 active:shadow-none'} ${className}`}
      >
        <span className="relative z-10 whitespace-nowrap">{label}</span>
        {hasHighlight && !disabled && (
          <div className="absolute top-1/2 left-[-100%] w-16 h-24 bg-white/50 -translate-y-1/2 rotate-12 transition-all duration-500 ease-in-out group-hover:left-[200%]"></div>
        )}
      </button>
    </div>
  );
};

export default CartoonButton;