import React from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import SubtitleSection from '@/components/landing/SubtitleSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import SampleBriefSection from '@/components/landing/SampleBriefSection';
import BetaSignupSection from '@/components/landing/BetaSignupSection';
import Footer from '@/components/landing/Footer';
import { GoogleUser } from '@/lib/google-auth';

interface KnowleadgeLandingProps {
  user: GoogleUser | null;
  onSignIn: () => void;
  onSignOut: () => void;
  authInitialized?: boolean;
}

const KnowleadgeLanding: React.FC<KnowleadgeLandingProps> = ({
  user,
  onSignOut,
  authInitialized
}) => {
  return (
    <div className="w-full min-h-screen bg-white relative">
      <Header user={user} onSignOut={onSignOut} authInitialized={authInitialized} />
      <HeroSection user={user} />
      <SubtitleSection />
      <HowItWorksSection />
      <SampleBriefSection />
      <BetaSignupSection />
      <Footer />

      {/* Bolt Badge - Made Much Larger */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://bolt.new/"
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer"
        >
          <img
            src="/bolt.png"
            alt="Powered by Bolt"
            className="w-32 h-32 rounded-full shadow-[8px_8px_0_0_rgb(17,24,39)] border-3 border-gray-900 hover:shadow-[12px_12px_0_0_rgb(17,24,39)] hover:-translate-y-1 transition-all duration-200 bg-white"
          />
        </a>
      </div>
    </div>
  );
};

export default KnowleadgeLanding;
