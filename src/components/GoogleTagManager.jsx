import { useEffect } from 'react';

const loadGoogleTagManager = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-RFTZMWZN13');
};

const GoogleTagManager = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-RFTZMWZN13';
    document.head.appendChild(script);

    loadGoogleTagManager();
  }, []);

  return null;
};

export default GoogleTagManager;
