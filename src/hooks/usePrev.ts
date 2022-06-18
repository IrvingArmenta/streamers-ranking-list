import { useEffect, useRef } from 'react';

const usePrev = <T>(value: T) => {
  const prevChildrenRef = useRef<T>();

  useEffect(() => {
    prevChildrenRef.current = value;
  }, [value]);

  return prevChildrenRef.current;
};

export default usePrev;
