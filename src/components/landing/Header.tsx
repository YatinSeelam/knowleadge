import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Magnet, Zap } from 'lucide-react';
import { GoogleUser, renderGoogleButton } from '@/lib/google-auth';

interface HeaderProps {
  user: GoogleUser | null;
  onSignIn: () => void;  // Add this line
  onSignOut: () => void;
  authInitialized: boolean;
}

const Header: React.FC<HeaderProps> = ({ user, onSignOut, authInitialized = false }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const googleButtonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [buttonRendered, setButtonRendered] = useState(false);

  // Clear button immediately when user signs in
  useEffect(() => {
    if (user && googleButtonRef.current) {
      console.log('User signed in - clearing Google button immediately');
      googleButtonRef.current.innerHTML = '';
      setButtonRendered(false);
    }
  }, [user]);

  // Render button only when conditions are met
  useEffect(() => {
    if (!user && authInitialized && googleButtonRef.current && !buttonRendered) {
      console.log('Rendering Google button - conditions met');
      googleButtonRef.current.innerHTML = '';
      renderGoogleButton(googleButtonRef.current);
      setButtonRendered(true);
    } else if (user && buttonRendered) {
      console.log('User exists - ensuring button is cleared');
      if (googleButtonRef.current) {
        googleButtonRef.current.innerHTML = '';
      }
      setButtonRendered(false);
    }
  }, [user, authInitialized, buttonRendered]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Magnet className="w-8 h-8 text-red-500" />
            </motion.div>

            {/* Magnetic field rings */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full border-2 border-red-300"
            />
            <motion.div
              animate={{
                scale: [1.2, 1.6, 1.2],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full border-2 border-blue-300"
            />

            {/* Dynamic sparks */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0"
            >
              <Zap className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              <Zap className="w-3 h-3 text-yellow-400 absolute -top-2 left-1 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </motion.div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-blue-600">
              Know<span className="bg-yellow-400 px-1 underline decoration-yellow-400 decoration-4">lead</span>ge
            </h1>
          </div>
        </div>

        {/* Auth Section */}
        <div className="flex items-center space-x-4">
          {user ? (
            // Show user profile and sign out when signed in
            <div className="flex items-center space-x-4">
              {/* Profile Button with Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="relative cursor-pointer"
                >
                  {/* Profile Image Button - Use actual user's Google profile picture */}
                  <div className="w-12 h-12 rounded-full border-2 border-gray-800 shadow-[4px_4px_0_0_rgb(17,24,39)] hover:shadow-[6px_6px_0_0_rgb(17,24,39)] transition-all duration-200 transform hover:-translate-y-1 overflow-hidden bg-white relative">
                    {user.picture ? (
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load - use user's initial
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">${user.name.charAt(0).toUpperCase()}</div><div class="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 border-2 border-white rounded-full shadow-sm"></div>`;
                          }
                        }}
                      />
                    ) : (
                      // Fallback if no picture URL - use user's initial
                      <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                    )}

                    {/* Green Online Indicator - Positioned properly at bottom-right */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 border-2 border-white rounded-full shadow-sm"></div>
                  </div>
                </motion.div>

                {/* Dropdown Menu - Dynamic width that adjusts to content */}
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-max bg-white border-2 border-gray-800 rounded-lg shadow-[8px_8px_0_0_rgb(17,24,39)] z-50"
                  >
                    <div className="p-4">
                      <div className="flex items-center space-x-3">
                        {user.picture ? (
                          <img
                            src={user.picture}
                            alt={user.name}
                            className="w-12 h-12 rounded-full border-2 border-gray-300 flex-shrink-0"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="w-12 h-12 bg-blue-500 rounded-full border-2 border-gray-300 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">${user.name.charAt(0).toUpperCase()}</div>`;
                              }
                            }}
                          />
                        ) : (
                          <div className="w-12 h-12 bg-blue-500 rounded-full border-2 border-gray-300 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <div className="flex-shrink-0">
                          <p className="font-bold text-gray-900 text-base mb-1 whitespace-nowrap">{user.name}</p>
                          <p className="text-sm text-gray-600 whitespace-nowrap">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sign Out Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSignOut}
                className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg border-2 border-gray-800 shadow-[4px_4px_0_0_rgb(17,24,39)] hover:shadow-[6px_6px_0_0_rgb(17,24,39)] transition-all duration-200 transform hover:-translate-y-1"
              >
                Sign Out
              </motion.button>
            </div>
          ) : (
            // Show Google Sign In button ONLY when NOT signed in AND auth is initialized
            authInitialized && (
              <div className="flex items-center">
                <div ref={googleButtonRef} className="google-signin-button" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;