import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { GoogleUser } from '@/lib/google-auth';
import SparklesCore from './SparklesCore';
import NorthSouthMagnetButton from './NorthSouthMagnetButton';

interface HeroSectionProps {
  user: GoogleUser | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({ user }) => {
  const [url, setUrl] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = async () => {
    if (!url.trim()) {
      alert('Please enter a URL');
      return;
    }

    if (!user) {
      alert('Please sign in first');
      return;
    }

    setIsAnimating(true);
    
    try {
      console.log('Sending webhook request with:', {
        url: url,
        email: user.email,
        name: user.name
      });

      const response = await fetch('https://n8n.srv850687.hstgr.cloud/webhook/knowleadge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url,
          email: user.email,
          name: user.name
        }),
      });

      console.log('Webhook response status:', response.status);

      if (response.ok) {
        const result = await response.json();
        console.log('Webhook response:', result);
        alert('Lead research initiated! You will receive results via email.');
        setUrl(''); // Clear the input after successful submission
      } else {
        const errorText = await response.text();
        console.error('Webhook error response:', errorText);
        throw new Error(`Failed to submit request: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting webhook:', error);
      alert('Error submitting request. Please try again.');
    } finally {
      setTimeout(() => setIsAnimating(false), 2000);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh+50px)] flex items-center justify-center px-6 py-12 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background Paper Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            transparent,
            transparent 24px,
            #e0e0e0 24px,
            #e0e0e0 25px
          )`
        }} />
      </div>

      {/* Sparkles Background */}
      <SparklesCore
        className="absolute inset-0 w-full h-full"
        particleColor="#FFE65A"
        particleDensity={50}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 mt-20">
        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 drop-shadow-lg"
        >
          Know your lead
          <br />
          <span className="text-blue-600">before you call</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-yellow-100 border-2 border-yellow-400 px-6 py-3 rounded-xl inline-block transform -rotate-1 shadow-md"
        >
          <p className="text-lg font-bold text-gray-900 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
            AI-Powered Lead Research
          </p>
        </motion.div>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Every conversation starts with an advantage.
        </p>

        {/* Input and Button - Ultra Clean Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-8 bg-white border-3 border-gray-900 rounded-3xl shadow-[12px_12px_0_0_rgb(17,24,39)] transform hover:rotate-1 transition-all duration-300">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-6 h-6 border-2 border-yellow-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-8 h-1 bg-blue-400 opacity-60 transform -rotate-12"></div>
            
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-2xl font-black text-gray-900 mb-2">Drop Your Prospect URL</h4>
                <p className="text-gray-600">LinkedIn, website, social profile - we'll handle the rest</p>
              </div>
              
              <div className="relative">
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://linkedin.com/in/prospect-name"
                  className="w-full border-2 border-gray-300 rounded-xl text-lg p-4 pr-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit();
                    }
                  }}
                />
                <Globe className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              
              <motion.div
                animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <NorthSouthMagnetButton
                  label="Pull Lead Intel"
                  onClick={handleSubmit}
                  disabled={isAnimating}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {isAnimating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-green-50 border-2 border-green-400 rounded-lg max-w-md mx-auto shadow-md"
          >
            <div className="flex items-center space-x-2 justify-center">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bold text-green-700">Researching prospect...</span>
            </div>
            <p className="text-sm text-green-600 mt-2 text-center">
              Results will be sent to {user?.email}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
