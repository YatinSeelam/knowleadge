import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Magnet, Zap, Menu, X } from 'lucide-react';
import { GoogleUser, renderGoogleButton, signInWithGoogle } from '@/lib/google-auth';

interface HeaderProps {
  user: GoogleUser | null;
  onSignOut: () => void;
  authInitialized?: boolean;
}

const Header: React.FC<HeaderProps> = ({ user, onSignOut }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [shouldRenderGoogleButton, setShouldRenderGoogleButton] = useState(!user);
  const googleButtonRef = useRef<HTMLDivElement>(null);
  const mobileGoogleButtonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle user state changes
  useEffect(() => {
    if (user) {
      // User is logged in - ensure Google button is not rendered
      setShouldRenderGoogleButton(false);
      if (googleButtonRef.current) {
        googleButtonRef.current.innerHTML = '';
      }
      if (mobileGoogleButtonRef.current) {
        mobileGoogleButtonRef.current.innerHTML = '';
      }
    } else {
      // User is not logged in - show Google button
      setShouldRenderGoogleButton(true);
    }
  }, [user]);

  // Render Google button when needed (Desktop)
  useEffect(() => {
    if (shouldRenderGoogleButton && !user && googleButtonRef.current) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        if (googleButtonRef.current && !user) {
          googleButtonRef.current.innerHTML = '';
          renderGoogleButton(googleButtonRef.current);
        }
      }, 50);

      return () => {
        clearTimeout(timer);
        if (googleButtonRef.current) {
          googleButtonRef.current.innerHTML = '';
        }
      };
    }
  }, [shouldRenderGoogleButton, user]);

  // Render Google button for mobile when menu is open
  useEffect(() => {
    if (shouldRenderGoogleButton && !user && showMobileMenu && mobileGoogleButtonRef.current) {
      const timer = setTimeout(() => {
        if (mobileGoogleButtonRef.current && !user && showMobileMenu) {
          mobileGoogleButtonRef.current.innerHTML = '';
          renderGoogleButton(mobileGoogleButtonRef.current);
        }
      }, 100);

      return () => {
        clearTimeout(timer);
        if (mobileGoogleButtonRef.current) {
          mobileGoogleButtonRef.current.innerHTML = '';
        }
      };
    }
  }, [shouldRenderGoogleButton, user, showMobileMenu]);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showMobileMenu && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setShowMobileMenu(false);
      }
    };

    if (showMobileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [showMobileMenu]);

  const handleMobileSignIn = () => {
    signInWithGoogle();
    setShowMobileMenu(false);
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
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
                <Magnet className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
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
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                <Zap className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400 absolute -top-2 left-1 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </motion.div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-600">
                Know<span className="bg-yellow-400 px-1 underline decoration-yellow-400 decoration-4">lead</span>ge
              </h1>
            </div>
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden sm:flex items-center space-x-4">
            {user ? (
              // Show user profile and sign out when signed in
              <>
                {/* Profile Button with Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="relative cursor-pointer"
                  >
                    {/* Profile Image Button */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full border-2 border-gray-800 shadow-[4px_4px_0_0_rgb(17,24,39)] hover:shadow-[6px_6px_0_0_rgb(17,24,39)] transition-all duration-200 overflow-hidden bg-white">
                        {user.picture ? (
                          <img
                            src={user.picture}
                            alt={user.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">${user.name.charAt(0).toUpperCase()}</div>`;
                              }
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      {/* Green Online Indicator - Outside the overflow container */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-800 rounded-full shadow-sm z-10"></div>
                    </div>
                  </motion.div>

                  {/* Dropdown Menu */}
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
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onSignOut}
                  className="px-4 py-2 lg:px-6 lg:py-3 bg-red-500 text-white font-bold rounded-lg border-2 border-gray-800 shadow-[4px_4px_0_0_rgb(17,24,39)] hover:shadow-[6px_6px_0_0_rgb(17,24,39)] transition-all duration-200 text-sm lg:text-base"
                >
                  Sign Out
                </motion.button>
              </>
            ) : shouldRenderGoogleButton ? (
              // Show Google Sign In button ONLY when NOT signed in and should render
              <div className="flex items-center">
                <div
                  ref={googleButtonRef}
                  className="google-signin-button"
                  style={{ minWidth: '120px', minHeight: '40px' }}
                />
              </div>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="mobile-menu-button p-2 bg-white border-2 border-gray-800 rounded-lg shadow-[4px_4px_0_0_rgb(17,24,39)] hover:shadow-[6px_6px_0_0_rgb(17,24,39)] transition-all duration-200"
            >
              {showMobileMenu ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
        />
      )}

      {/* Mobile Menu */}
      {showMobileMenu && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white border-l-2 border-gray-800 shadow-[-8px_0_0_0_rgb(17,24,39)] z-50 sm:hidden"
        >
          <div className="p-6 space-y-6">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4">
              <div className="flex items-center space-x-2">
                <Magnet className="w-6 h-6 text-red-500" />
                <span className="text-lg font-bold text-blue-600">Knowleadge</span>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMobileMenu(false)}
                className="p-2 bg-white border-2 border-gray-800 rounded-lg shadow-[2px_2px_0_0_rgb(17,24,39)] hover:shadow-[4px_4px_0_0_rgb(17,24,39)] transition-all duration-200"
              >
                <X className="w-5 h-5 text-gray-900" />
              </motion.button>
            </div>

            {/* Mobile Auth Section */}
            <div className="space-y-4">
              {user ? (
                // Mobile User Profile
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl">
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
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-base truncate">{user.name}</p>
                      <p className="text-sm text-gray-600 truncate">{user.email}</p>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onSignOut();
                      setShowMobileMenu(false);
                    }}
                    className="w-full px-6 py-3 bg-red-500 text-white font-bold rounded-lg border-2 border-gray-800 shadow-[4px_4px_0_0_rgb(17,24,39)] active:shadow-none active:translate-y-1 transition-all duration-200"
                  >
                    Sign Out
                  </motion.button>
                </div>
              ) : (
                // Mobile Sign In Section - Always show when not signed in
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Sign In to Continue</h3>
                    <p className="text-sm text-gray-600 mb-4">Get personalized lead research</p>
                  </div>
                  
                  {/* Custom Sign In Button for Mobile */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleMobileSignIn}
                    className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-white border-2 border-gray-800 rounded-lg shadow-[4px_4px_0_0_rgb(17,24,39)] hover:shadow-[6px_6px_0_0_rgb(17,24,39)] transition-all duration-200"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="font-bold text-gray-900">Sign in with Google</span>
                  </motion.button>

                  {/* Fallback Google Button (hidden but available) */}
                  <div className="hidden">
                    <div
                      ref={mobileGoogleButtonRef}
                      className="google-signin-button flex justify-center"
                      style={{ minWidth: '200px', minHeight: '44px' }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Footer */}
            <div className="pt-6 border-t-2 border-gray-200">
              <div className="text-center text-sm text-gray-500">
                <p>© 2024 Knowleadge</p>
                <p>AI-Powered Lead Research</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;