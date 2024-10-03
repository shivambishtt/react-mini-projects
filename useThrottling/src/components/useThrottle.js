import react, { useEffect, useRef, useState } from "react";

function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      setThrottledValue(value);
      ref.current = false;
      setTimeout(() => {
        ref.current = true;
      }, delay);
    }
  }, [value, delay]);
  return throttledValue;
}

export default useThrottle;
