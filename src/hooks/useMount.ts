import { useRef, useEffect } from 'react';

export const useMount = () => {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      // When component unmounts, set isMounted to false
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};