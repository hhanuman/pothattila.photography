import { useState, useEffect } from 'react';

function getWindowDimensions() {
  return typeof window === 'undefined' ? 
    { width: 0, height: 0 } : 
    { width: window.innerWidth, height: window.innerHeight };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    typeof window !== 'undefined' && window.addEventListener('resize', handleResize);
    return () => typeof window !== 'undefined' && window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}