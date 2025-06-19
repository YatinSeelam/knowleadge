import React from 'react';
import { motion } from 'framer-motion';

interface NorthSouthMagnetButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const NorthSouthMagnetButton: React.FC<NorthSouthMagnetButtonProps> = ({ 
  label, 
  onClick, 
  className, 
  disabled 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-2xl overflow-hidden
        bg-gradient-to-r from-blue-500 via-gray-300 to-red-500
        hover:from-blue-600 hover:via-gray-400 hover:to-red-600
        active:translate-y-0.5 active:shadow-none
        transition-all duration-200 ease-in-out
        shadow-[0_6px_0_0_rgba(0,0,0,0.3)]
        border-2 border-gray-800
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {/* South Pole - Left */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs font-black text-white bg-blue-600 px-2 py-1 rounded">S</div>
      
      {/* North Pole - Right */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-black text-white bg-red-600 px-2 py-1 rounded">N</div>
      
      <span className="relative z-10 flex items-center space-x-2 text-gray-900 font-black">
        <span>{label}</span>
      </span>
      
      {/* Magnetic field lines - only on hover */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: [0, 1, 1.2, 0], opacity: [0, 0.6, 0.3, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 rounded-2xl border-2 border-yellow-400"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: [0, 1, 1.2, 0], opacity: [0, 0.6, 0.3, 0] }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute inset-0 rounded-2xl border-2 border-yellow-400"
      />
    </button>
  );
};

export default NorthSouthMagnetButton;