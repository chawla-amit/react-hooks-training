import React, { useState } from "react";

const AddTodo = ({ addTodoHandler }) => {
  const [text, onChange] = useState("");

  const onAddClick = event => {
    if (text) {
      onChange("");
      addTodoHandler(text);
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Todo"
        aria-label="Enter Todo"
        aria-describedby="button-addon2"
        onChange={e => onChange(e.target.value)}
        value={text}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={onAddClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
