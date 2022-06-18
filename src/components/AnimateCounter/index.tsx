import React, { useEffect, useState, memo, FC } from 'react';
import { AnimateCounterPropsType } from './types';

const AnimateCounterFC: FC<AnimateCounterPropsType> = (props) => {
  const { value, className } = props;
  const [currentVal, setCurrentVal] = useState(value);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep((value - currentVal) / Math.ceil(400 / 16));
  }, [value]);

  useEffect(() => {
    if (currentVal.toFixed(2) === value.toFixed(2)) {
      return;
    }

    const timeout_id = setTimeout(() => setCurrentVal(currentVal + step), 16);

    return () => clearTimeout(timeout_id);
  }, [value, currentVal, step]);

  return <span className={className}>{Math.floor(currentVal)}</span>;
};

const AnimateCounter = memo(
  AnimateCounterFC,
  (prev, next) => prev.value === next.value
);

AnimateCounter.displayName = 'AnimateCounter';
export default AnimateCounter;
