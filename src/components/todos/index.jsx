import React, { useCallback } from "react";
import AddTodo from "../add-todo";
import TodoList from "../todo-list";
import todoReducer, {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from "../../utils/todo-reducer";
import usePersistentReducer from "../../hooks/use-persistent-reducer";

const Todos = () => {
  const [state, dispatch] = usePersistentReducer(todoReducer, "todos");
  const { todos = [] } = state;

  const addTodoHandler = useCallback(
    text => {
      dispatch({ type: ADD_TODO, payload: text });
    },
    [dispatch]
  );

  const onCompletedHandler = useCallback(
    todo => {
      dispatch({ type: COMPLETE_TODO, payload: todo });
    },
    [dispatch]
  );

  const onDeleteHandler = useCallback(
    todo => {
      dispatch({ type: DELETE_TODO, payload: todo });
    },
    [dispatch]
  );

  return (
    <>
      <AddTodo addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onCompletedHandler={onCompletedHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </>
  );
};

export default Todos;
