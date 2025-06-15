import { useState, useEffect } from 'react';
import './App.css';
import KnowleadgeLanding from '@/components/ui/knowleadge-landing';
import { initializeGoogleAuth, signInWithGoogle, signOut, GoogleUser } from '@/lib/google-auth';

function App() {
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const savedUser = localStorage.getItem('google_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        console.log('Restored user from localStorage:', parsedUser);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('google_user');
      }
    }

    // Initialize Google Auth
    initializeGoogleAuth((user: GoogleUser) => {
      console.log('Google Auth callback triggered with user:', user);
      setUser(user);
      localStorage.setItem('google_user', JSON.stringify(user));
      setAuthInitialized(true);
    });

    // Mark as initialized after a short delay to ensure Google Auth is ready
    setTimeout(() => {
      setAuthInitialized(true);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSignIn = () => {
    console.log('Manual sign in triggered');
    signInWithGoogle();
  };

  const handleSignOut = () => {
    console.log('Sign out triggered');
    setUser(null);
    localStorage.removeItem('google_user');
    signOut();
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <KnowleadgeLanding 
        user={user} 
        onSignIn={handleSignIn} 
        onSignOut={handleSignOut}
        authInitialized={authInitialized}
      />
    </div>
  );
}

export default App;