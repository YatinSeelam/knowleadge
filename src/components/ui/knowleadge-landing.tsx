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
  authInitialized: boolean;
}

const KnowleadgeLanding: React.FC<KnowleadgeLandingProps> = ({ 
  user, 
  onSignIn, 
  onSignOut, 
  authInitialized 
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        user={user} 
        onSignIn={onSignIn} 
        onSignOut={onSignOut}
        authInitialized={authInitialized}
      />
      <HeroSection user={user} />
      <SubtitleSection />
      <HowItWorksSection />
      <SampleBriefSection />
      <BetaSignupSection />
      <Footer />
    </div>
  );
};

export default KnowleadgeLanding;