import { useState, useEffect } from "react";

const usePersistentState = (intialState, key) => {
  const storedValue = parseInt(localStorage.getItem(key), 10) || 0;
  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default usePersistentState;
