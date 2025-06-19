import React from 'react';
import { motion } from 'framer-motion';
import { Magnet } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t-2 border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Magnet className="w-6 h-6 text-red-500" />
          <span className="text-xl font-bold text-blue-600">Knowleadge</span>
        </div>
        <p className="text-gray-600">
          © 2024 Knowleadge. Making every sales conversation count.
        </p>
        
        {/* Decorative doodles */}
        <div className="mt-8 flex justify-center space-x-8 opacity-30">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-8 h-1 bg-yellow-400 transform rotate-12"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-6 border-2 border-blue-400 rounded-full"
          />
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="w-8 h-1 bg-red-400 transform -rotate-12"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;