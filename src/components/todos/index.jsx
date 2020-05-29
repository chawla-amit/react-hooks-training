import React, { useReducer, useCallback } from "react";
import { v4 as uuidV4 } from "uuid";
import AddTodo from "../add-todo";
import TodoList from "../todo-list";

const ADD_TODO = "ADD_TODO";
const ON_COMPLETED = "ON_COMPLETED";
const ON_DELETE = "ON_DELETE";

const intialState = {
  todos: []
};

const todoReducer = (state, { type, payload }) => {
  const { todos } = state;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...todos, { id: uuidV4(), text: payload, completed: false }]
      };
    case ON_COMPLETED:
      return {
        ...state,
        todos: todos.map(todo =>
          todo.id === payload.id
            ? { ...todo, completed: !payload.completed }
            : todo
        )
      };
    case ON_DELETE:
      return {
        ...state,
        todos: todos.filter(todo => todo.id !== payload.id)
      };
    default:
      return state;
  }
};

const Todos = () => {
  const [state, dispatch] = useReducer(todoReducer, intialState);
  const { todos } = state;

  const addTodoHandler = useCallback(
    text => {
      dispatch({ type: ADD_TODO, payload: text });
    },
    [dispatch]
  );

  const onCompletedHandler = useCallback(
    ({ id, completed }) => {
      dispatch({ type: ON_COMPLETED, payload: { id, completed } });
    },
    [dispatch]
  );

  const onDeleteHandler = useCallback(
    ({ id }) => {
      dispatch({ type: ON_DELETE, payload: { id } });
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
