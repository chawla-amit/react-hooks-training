import { v4 as uuidV4 } from "uuid";

export const initialState = {
  todos: []
};
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

const todoReducer = (state, { type, payload }) => {
  const { todos } = state;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...todos, { id: uuidV4(), text: payload, completed: false }]
      };
    case COMPLETE_TODO:
      const { id, completed } = payload;
      return {
        ...state,
        todos: todos.map(todo =>
          todo.id === id ? { ...todo, completed: !completed } : todo
        )
      };
    case DELETE_TODO:
      const { id: todoId } = payload;
      return {
        ...state,
        todos: todos.filter(todo => todo.id !== todoId)
      };
    default:
      return state;
  }
};

export default todoReducer;
