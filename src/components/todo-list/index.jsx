import React from "react";
import TodoItem from "../todo-item";

const TodoList = ({ todos, onCompletedHandler, onDeleteHandler }) => {
  return (
    <>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          onCompletedHandler={onCompletedHandler}
          onDeleteHandler={onDeleteHandler}
        />
      ))}
    </>
  );
};

export default React.memo(TodoList);
