import { useState, useEffect } from 'react';

function useScrollOffset() {

    const [offset, setOffset] = useState({
        x: 0,
        y: 0
    });

    const scrollHandler = (e) => {
        setOffset({
            x: typeof window !== 'undefined' ? window.pageXOffset : undefined,
            y: typeof window !== 'undefined' ? window.pageYOffset : undefined
        });
    };
  
    // Add event listeners
    useEffect(() => {
        typeof window !== 'undefined' && window.addEventListener('scroll', scrollHandler);
      // Remove event listeners on cleanup
      return () => {
        typeof window !== 'undefined' && window.removeEventListener('scroll', scrollHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return offset;
  }

export default useScrollOffset;