import React from 'react';
import { motion } from 'framer-motion';

const SubtitleSection: React.FC = () => {
  return (
    <section className="py-8 px-6 bg-gradient-to-b from-blue-50 to-gray-50 relative">
      {/* Notebook paper texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            transparent,
            transparent 24px,
            #e0e0e0 24px,
            #e0e0e0 25px
          )`
        }} />
        <div className="absolute top-0 left-20 w-0.5 h-full bg-red-400 opacity-30"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Sticky note style subtitle */}
          <div className="inline-block bg-yellow-100 border-2 border-yellow-400 p-6 rounded-lg transform -rotate-1 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              From URL to Deal in 3 Simple Steps
            </h3>
            <p className="text-gray-600 text-lg">
              Watch how Knowleadge transforms any prospect link into your competitive advantage
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-3 h-3 bg-blue-400 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-1 bg-yellow-400 transform rotate-12"
            />
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="w-3 h-3 bg-red-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubtitleSection;