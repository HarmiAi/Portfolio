import { useState, useEffect } from 'react';

export const useLoader = (duration = 3000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the loader has already run in the current browser session
    const hasLoaded = sessionStorage.getItem('hasLoadedPortfolio');

    if (hasLoaded === 'true') {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasLoadedPortfolio', 'true');
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  return isLoading;
};
