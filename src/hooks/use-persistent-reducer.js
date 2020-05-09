import { useReducer, useEffect } from "react";
import { initialState } from "../utils/todo-reducer";

const usePersistentReducer = (reducer, key) => {
  const storedState =
    JSON.parse(localStorage.getItem(key) || null) || initialState;
  const [state, dispatch] = useReducer(reducer, storedState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
};

export default usePersistentReducer;
