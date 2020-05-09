import { useState, useEffect } from "react";

const usePersistenceState = (intialState, key) => {
  const storedValue = parseInt(localStorage.getItem(key), 10) || intialState;
  const [state, setState] = useState(storedValue);

  useEffect(() => {
    localStorage.setItem(key, state.toString());
  }, [key, state]);

  return [state, setState];
};

export default usePersistenceState;
