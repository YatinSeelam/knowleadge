// Google Auth Types
export interface GoogleUser {
  id: string;
  name: string;
  email: string;
  picture?: string;
}

// Google Auth Configuration
const GOOGLE_CLIENT_ID = '800639975168-6uuh2k6c8qo606n5b71d18j4tg47iurr.apps.googleusercontent.com';

// Global callback function
let globalCallback: ((user: GoogleUser) => void) | null = null;

// Initialize Google Auth
export const initializeGoogleAuth = (callback: (user: GoogleUser) => void) => {
  globalCallback = callback;

  // Check for credential in URL parameters (after redirect)
  const urlParams = new URLSearchParams(window.location.search);
  const credential = urlParams.get('credential');

  if (credential) {
    console.log('Found credential in URL, processing...');
    handleCredentialResponse({ credential });
    // Clean up URL
    window.history.replaceState({}, document.title, window.location.pathname);
    return;
  }

  // Wait for Google API to load
  const checkGoogleAPI = () => {
    if (window.google && window.google.accounts) {
      console.log('Google API loaded, initializing...');

      // Get current URL without any parameters      
      // Initialize Google Identity Services with popup mode (more reliable)
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: true,
        ux_mode: 'popup',
      });

      console.log('Google Auth initialized successfully');
    } else {
      console.log('Google API not ready, retrying...');
      setTimeout(checkGoogleAPI, 100);
    }
  };

  checkGoogleAPI();
};

// Handle credential response from Google
const handleCredentialResponse = (response: any) => {
  console.log('Google credential response received:', response);

  try {
    // Decode the JWT token to get user info
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    console.log('Decoded payload:', payload);

    const user: GoogleUser = {
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
    };

    console.log('Parsed user:', user);

    if (globalCallback) {
      globalCallback(user);
    }
  } catch (error) {
    console.error('Error parsing Google credential:', error);
  }
};

// Render Google Sign-In button
export const renderGoogleButton = (element: HTMLElement) => {
  if (!element) {
    console.error('No element provided for Google button');
    return;
  }

  console.log('Rendering Google button in element:', element);

  const checkGoogleAPI = () => {
    if (window.google && window.google.accounts && window.google.accounts.id) {
      try {
        window.google.accounts.id.renderButton(element, {
          theme: 'outline',
          size: 'large',
          type: 'standard',
          text: 'signin_with',
          shape: 'rectangular',
          logo_alignment: 'left',
          width: 200,
        });
        console.log('Google button rendered successfully');
      } catch (error) {
        console.error('Error rendering Google button:', error);
      }
    } else {
      console.log('Google API not ready for button rendering, retrying...');
      setTimeout(checkGoogleAPI, 100);
    }
  };

  checkGoogleAPI();
};

// Manual sign-in trigger
export const signInWithGoogle = () => {
  console.log('Manual sign-in triggered');

  if (window.google && window.google.accounts && window.google.accounts.id) {
    try {
      window.google.accounts.id.prompt();
    } catch (error) {
      console.error('Error triggering Google sign-in:', error);
    }
  } else {
    console.error('Google API not available for manual sign-in');
  }
};

// Sign out function
export const signOut = () => {
  console.log('Google sign out triggered');

  if (window.google && window.google.accounts && window.google.accounts.id) {
    try {
      window.google.accounts.id.disableAutoSelect();
      console.log('Google auto-select disabled');
    } catch (error) {
      console.error('Error during Google sign out:', error);
    }
  }
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          renderButton: (element: HTMLElement, config: any) => void;
          prompt: () => void;
          disableAutoSelect: () => void;
        };
      };
    };
  }
}