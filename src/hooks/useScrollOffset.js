import { useState, useEffect } from 'react';

function useScrollOffset() {

    const [offset, setOffset] = useState({
        x: 0,
        y: 0
    });

    const scrollHandler = (e) => {
        setOffset({
            x: window.pageXOffset,
            y: window.pageYOffset
        });
    };
  
    // Add event listeners
    useEffect(() => {
      window.addEventListener('scroll', scrollHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return offset;
  }

export default useScrollOffset;