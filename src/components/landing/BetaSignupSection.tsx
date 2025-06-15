import React from 'react';
import { motion } from 'framer-motion';
import { Magnet, Zap, Users, Target } from 'lucide-react';
import { Input } from '@/components/ui/input';
import CartoonButton from './CartoonButton';

const BetaSignupSection: React.FC = () => {
  return (
    <section id="beta-signup" className="py-16 px-6 bg-gradient-to-br from-white via-gray-100 to-blue-50 relative overflow-hidden">
      {/* Notebook paper background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            transparent,
            transparent 29px,
            #e0e0e0 29px,
            #e0e0e0 30px
          )`
        }} />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {/* Magnetic attraction effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="space-y-6"
        >
          {/* Animated magnet logo */}
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block relative"
          >
            <div className="relative">
              <Magnet className="w-20 h-20 text-red-500 mx-auto" />
              {/* Magnetic field lines */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-red-300"
              />
              <motion.div
                animate={{ scale: [1.2, 1.5, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 rounded-full border-2 border-red-200"
              />
              {/* Sparks */}
              <Zap className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
              <Zap className="w-4 h-4 text-yellow-400 absolute -bottom-1 -left-2 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </motion.div>

          <h3 className="text-5xl font-black text-gray-900 leading-tight">
            Ready to <span className="text-red-500">Attract</span> More Deals?
          </h3>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join sales professionals who are magnetically attracting better prospects 
            with AI-powered research that makes every conversation count.
          </p>
        </motion.div>
        
        {/* Email signup with magnetic pull effect */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white border-3 border-gray-900 rounded-2xl shadow-[8px_8px_0_0_rgb(17,24,39)]">
              <Input
                placeholder="your@email.com"
                className="flex-1 border-0 text-lg p-4 bg-transparent text-gray-900 placeholder:text-gray-600 focus:ring-0 focus:outline-none"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CartoonButton
                  label="Join Beta"
                  color="bg-yellow-400"
                  className="text-gray-900 whitespace-nowrap"
                />
              </motion.div>
            </div>
          </div>

          {/* Magnetic attraction lines */}
          <motion.div
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 pointer-events-none"
          >
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <path
                d="M50,100 Q200,50 350,100"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="opacity-30"
              />
              <path
                d="M50,100 Q200,150 350,100"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="opacity-30"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Social proof with clean design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12"
        >
          <div className="flex items-center space-x-3 text-gray-600">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-400 shadow-sm">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900">500+ Sales Pros</p>
              <p className="text-sm text-gray-600">Already using Knowleadge</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-gray-600">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-400 shadow-sm">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Zero Spam</p>
              <p className="text-sm text-gray-600">Quality updates only</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-gray-600">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center border-2 border-yellow-400 shadow-sm">
              <Zap className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Early Access</p>
              <p className="text-sm text-gray-600">Be first to try new features</p>
            </div>
          </div>
        </motion.div>

        {/* Handwritten note effect */}
        <motion.div
          initial={{ opacity: 0, rotate: -2 }}
          whileInView={{ opacity: 1, rotate: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-block bg-yellow-100 border-2 border-yellow-400 p-4 rounded-lg transform rotate-1 shadow-lg"
        >
          <p className="text-sm text-gray-600 font-handwriting italic">
            "This tool increased my close rate by 40% in just 2 weeks!" - Mike, Sales Director
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BetaSignupSection;