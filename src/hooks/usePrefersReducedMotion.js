import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () => (isRenderingOnServer ? true : !window.matchMedia(QUERY).matches);

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);

    const handleChange = event => {
      setPrefersReducedMotion(!event.matches);
    };

    // Use addEventListener if supported; fallback to addListener for older browsers
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange);
    } else {
      mediaQueryList.addListener(handleChange);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleChange);
      } else {
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
}

export default usePrefersReducedMotion;
