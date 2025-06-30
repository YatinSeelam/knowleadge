import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Globe, Linkedin, Instagram, Youtube, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { GoogleUser } from '@/lib/google-auth';
import SparklesCore from './SparklesCore';

interface HeroSectionProps {
  user: GoogleUser | null;
}

interface PlatformType {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  borderColor: string;
  placeholder: string;
}

// Custom Twitter/X Icon Component
const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const platforms: PlatformType[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-400',
    placeholder: 'https://linkedin.com/in/prospect-name'
  },
  {
    id: 'website',
    name: 'Website',
    icon: Globe,
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-400',
    placeholder: 'https://company-website.com'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-400',
    placeholder: 'https://instagram.com/username'
  },
  {
    id: 'twitter',
    name: 'X/Twitter',
    icon: TwitterIcon,
    color: 'text-white',
    bgColor: 'bg-black',
    borderColor: 'border-black',
    placeholder: 'https://x.com/username'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: Youtube,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-400',
    placeholder: 'https://youtube.com/@channel'
  }
];

const HeroSection: React.FC<HeroSectionProps> = ({ user }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  // Check if button should be active
  const getFilledUrls = () => {
    return selectedPlatforms.filter(platformId => urls[platformId]?.trim()).length;
  };

  const isButtonActive = user && selectedPlatforms.length > 0 && getFilledUrls() > 0;

  const togglePlatform = (platformId: string) => {
    if (selectedPlatforms.includes(platformId)) {
      setSelectedPlatforms(prev => prev.filter(id => id !== platformId));
      setUrls(prev => {
        const newUrls = { ...prev };
        delete newUrls[platformId];
        return newUrls;
      });
    } else {
      setSelectedPlatforms(prev => [...prev, platformId]);
    }
  };

  const removePlatform = (platformId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPlatforms(prev => prev.filter(id => id !== platformId));
    setUrls(prev => {
      const newUrls = { ...prev };
      delete newUrls[platformId];
      return newUrls;
    });
  };

  const updateUrl = (platformId: string, url: string) => {
    setUrls(prev => ({
      ...prev,
      [platformId]: url
    }));
  };

  const handleSubmit = async () => {
    // Get all filled URLs with platform names
    const filledUrls = selectedPlatforms
      .filter(platformId => urls[platformId]?.trim())
      .map(platformId => {
        const platform = platforms.find(p => p.id === platformId);
        return {
          platform: platform?.name || platformId,
          url: urls[platformId].trim()
        };
      });

    if (filledUrls.length === 0) {
      alert('Please enter at least one URL');
      return;
    }

    if (!user) {
      alert('Please sign in first');
      return;
    }

    setIsAnimating(true);

    try {
      // Create webhook payload with individual URLs and platform info
      const webhookData = {
        email: user.email,
        name: user.name,
        urls: filledUrls,
        // Also send individual platform URLs for backward compatibility
        linkedin_url: urls.linkedin?.trim() || '',
        website_url: urls.website?.trim() || '',
        instagram_url: urls.instagram?.trim() || '',
        twitter_url: urls.twitter?.trim() || '',
        youtube_url: urls.youtube?.trim() || ''
      };

      console.log('Sending webhook request with:', webhookData);

      const response = await fetch('https://n8n.srv850687.hstgr.cloud/webhook/knowleadge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Webhook response:', result);
        alert('Lead research initiated! You will receive results via email.');
        setUrls({});
        setSelectedPlatforms([]);
      } else {
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
          <span className="relative text-blue-600">
            before you call
            <motion.svg
              className="absolute left-0 bottom-[-8px] w-full h-4"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 5 C 25 0, 75 10, 100 5"
                stroke="#FACC15"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1,
                  times: [0, 0.5, 0.8, 1]
                }}
              />
            </motion.svg>
          </span>
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
          Turn any URL into your competitive advantage.
        </p>

        {/* Multi-Platform Input System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 bg-white border-3 border-gray-900 rounded-3xl shadow-[12px_12px_0_0_rgb(17,24,39)] transform hover:rotate-1 transition-all duration-300">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-6 h-6 border-2 border-yellow-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-8 h-1 bg-blue-400 opacity-60 transform -rotate-12"></div>

            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-2xl font-black text-gray-900 mb-2">Choose Your Platforms</h4>
                <p className="text-gray-600">Select the platforms you want to research</p>
              </div>

              {/* Platform Selection Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {platforms.map((platform) => {
                  const Icon = platform.icon;
                  const isSelected = selectedPlatforms.includes(platform.id);

                  return (
                    <motion.button
                      key={platform.id}
                      onClick={() => togglePlatform(platform.id)}
                      className={`
                        relative p-4 rounded-xl border-2 transition-all duration-200
                        ${isSelected
                          ? `${platform.bgColor} ${platform.borderColor} shadow-md`
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                        }
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <Icon className={`w-8 h-8 ${isSelected ? platform.color : 'text-gray-400'}`} />
                      </div>

                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white"
                        >
                          <span className="text-white text-xs">✓</span>
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* URL Input Fields */}
              {selectedPlatforms.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-3 pt-4 border-t border-gray-200"
                >
                  <h4 className="text-lg font-semibold text-gray-900 text-center">Enter URLs</h4>
                  {selectedPlatforms.map((platformId) => {
                    const platform = platforms.find(p => p.id === platformId);
                    if (!platform) return null;

                    const Icon = platform.icon;

                    return (
                      <motion.div
                        key={platformId}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${platform.bgColor}`}>
                            <Icon className={`w-4 h-4 ${platform.color}`} />
                          </div>
                          <div className="flex-1">
                            <Input
                              type="url"
                              placeholder={platform.placeholder}
                              value={urls[platformId] || ''}
                              onChange={(e) => updateUrl(platformId, e.target.value)}
                              className="w-full border-2 border-gray-300 rounded-xl text-lg p-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50"
                            />
                          </div>
                          <button
                            onClick={(e) => removePlatform(platformId, e)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {/* Submit Button - Using your existing NorthSouthMagnetButton design */}
              {selectedPlatforms.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                >
                  <motion.div
                    animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <button
                      onClick={handleSubmit}
                      disabled={!isButtonActive || isAnimating}
                      className={`relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-2xl overflow-hidden
                        transition-all duration-200 ease-in-out
                        shadow-[0_6px_0_0_rgba(0,0,0,0.3)]
                        border-2 border-gray-800
                        ${isButtonActive && !isAnimating
                          ? 'bg-gradient-to-r from-blue-500 via-gray-300 to-red-500 hover:from-blue-600 hover:via-gray-400 hover:to-red-600 cursor-pointer active:translate-y-0.5 active:shadow-none'
                          : 'bg-gray-400 cursor-not-allowed opacity-50'
                        }
                      `}
                    >
                      {/* South Pole - Left */}
                      <div className={`absolute left-2 top-1/2 transform -translate-y-1/2 text-xs font-black text-white px-2 py-1 rounded ${isButtonActive ? 'bg-blue-600' : 'bg-gray-600'}`}>S</div>

                      {/* North Pole - Right */}
                      <div className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-black text-white px-2 py-1 rounded ${isButtonActive ? 'bg-red-600' : 'bg-gray-600'}`}>N</div>

                      <span className="relative z-10 flex items-center space-x-2 text-gray-900 font-black">
                        {isAnimating ? (
                          <>
                            <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                            <span>Researching...</span>
                          </>
                        ) : (
                          <span>Pull Lead Intel</span>
                        )}
                      </span>

                      {/* Magnetic field lines - only on hover when active */}
                      {isButtonActive && !isAnimating && (
                        <>
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
                        </>
                      )}
                    </button>
                  </motion.div>
                </motion.div>
              )}

              {/* Status Messages */}
              {selectedPlatforms.length > 0 && (
                <div className="text-center text-sm">
                  {!user ? (
                    <p className="text-red-600 font-semibold">Please sign in to start research</p>
                  ) : getFilledUrls() === 0 ? (
                    <p className="text-gray-600">Enter at least one URL to activate research</p>
                  ) : (
                    <p className="text-green-600 font-semibold">
                      Ready to research {getFilledUrls()} platform{getFilledUrls() > 1 ? 's' : ''}!
                    </p>
                  )}
                </div>
              )}
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
