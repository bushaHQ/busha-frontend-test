import { useRef, useEffect } from 'react';

export const useMount = () => {
  const isMounted = useRef(true);

  useEffect(() => {

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};
