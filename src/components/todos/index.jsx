import React, { PureComponent } from "react";
import { v4 as uuidV4 } from "uuid";
import AddTodo from "../add-todo";
import TodoList from "../todo-list";

class Todos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.setState({ todos: JSON.parse(localStorage.getItem("todos")) || [] });
  }
  componentDidUpdate(prevProps, prevState) {
    const { todos: preTodos } = prevState;
    const { todos } = this.state;
    if (todos !== preTodos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }

  addTodoHandler = text => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, { id: uuidV4(), text, completed: false }]
    });
  };

  onCompletedHandler = ({ id, completed }) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, completed: !completed } : todo
      )
    });
  };

  onDeleteHandler = ({ id }) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <AddTodo addTodoHandler={this.addTodoHandler} />
        <TodoList
          todos={todos}
          onCompletedHandler={this.onCompletedHandler}
          onDeleteHandler={this.onDeleteHandler}
        />
      </>
    );
  }
}

export default Todos;
