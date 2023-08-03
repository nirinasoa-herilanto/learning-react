import { useState, useEffect } from 'react';

const useCounter = ({ operation = 'increment' | 'decrement', value = 1 }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (operation === 'increment') {
        setCounter((prevCounter) => prevCounter + value);
      } else {
        setCounter((prevCounter) => prevCounter - value);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [operation, value]);

  return counter;
};

export default useCounter;
