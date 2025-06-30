import React from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import SubtitleSection from '@/components/landing/SubtitleSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import SampleBriefSection from '@/components/landing/SampleBriefSection';
import BetaSignupSection from '@/components/landing/BetaSignupSection';
import Footer from '@/components/landing/Footer';
import BoltBadge from '@/components/ui/BoltBadge';
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
      {/* Header */}
      <Header
        user={user}
        onSignOut={onSignOut}
        authInitialized={authInitialized}
      />

      {/* Hero Section */}
      <HeroSection user={user} />

      {/* Subtitle Section */}
      <SubtitleSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Sample Brief Section */}
      <SampleBriefSection />

      {/* Beta Signup Section */}
      <BetaSignupSection />

      {/* Footer */}
      <Footer />

      {/* Bolt.new Badge */}
      <BoltBadge />
    </div>
  );
};

export default KnowleadgeLanding;