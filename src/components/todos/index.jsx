import React, { useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import AddTodo from "../add-todo";
import TodoList from "../todo-list";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = text => {
    setTodos([...todos, { id: uuidV4(), text, completed: false }]);
  };

  const onCompletedHandler = ({ id, completed }) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !completed } : todo
      )
    );
  };

  const onDeleteHandler = ({ id }) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

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
