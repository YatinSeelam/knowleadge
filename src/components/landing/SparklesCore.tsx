import React from 'react';
import { motion } from 'framer-motion';

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

const SparklesCore: React.FC<SparklesProps> = (props) => {
  const { className, particleColor = "#FFE65A", particleDensity = 20 } = props;
  
  return (
    <div className={className}>
      {Array.from({ length: particleDensity }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: Math.random() * 400 - 200,
            y: Math.random() * 200 - 100
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-1 h-1 rounded-full"
          style={{ backgroundColor: particleColor }}
        />
      ))}
    </div>
  );
};

export default SparklesCore;