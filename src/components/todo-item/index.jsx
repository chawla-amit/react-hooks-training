import React from "react";

const TodoItem = ({
  id,
  text,
  completed,
  onCompletedHandler,
  onDeleteHandler
}) => {
  console.log("render item", id);
  return (
    <div
      className={`card d-flex ${
        completed ? "text-white bg-secondary" : "bg-light"
      } mb-3`}
      onClick={() => onCompletedHandler({ id, completed })}
    >
      <div className="d-inline-flex">
        <div className="card-body">{text}</div>
        {completed && (
          <button
            type="button"
            className="close mr-3"
            aria-label="Close"
            onClick={event => {
              event.stopPropagation();
              onDeleteHandler({ id });
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
