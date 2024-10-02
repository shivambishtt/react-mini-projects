import { useState, useCallback } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value || "");

  // when we are calling the debounce function every time it is rendering it is creating different function
  // so when we are typing like hello the result is showing letter by letter instead of a particular word
  // this is happening because we wanted the debounceFun which is taking the args to run only one time
  const debouncedFun = useCallback(debounce(setDebouncedValue, delay), []);
  debouncedFun(value);
  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setDebouncedValue(value);
  //   }, delay);
  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [value]);
  return debouncedValue;
}

export default useDebounce;

function debounce(callback, delay) {
  let timerId;
  return function debouncedFun(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
