import { useState, useEffect } from 'react';

function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);
  
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
  
    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };
  
    // Add event listeners
    useEffect(() => {
        typeof window !== 'undefined' && window.addEventListener('keydown', downHandler);
        typeof window !== 'undefined' && window.addEventListener('keyup', upHandler);
      // Remove event listeners on cleanup
      return () => {
        typeof window !== 'undefined' && window.removeEventListener('keydown', downHandler);
        typeof window !== 'undefined' && window.removeEventListener('keyup', upHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return keyPressed;
  }

export default useKeyPress;