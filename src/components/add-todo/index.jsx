import React, { PureComponent } from "react";

class AddTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  onChangeHandler = event => {
    this.setState({ text: event.target.value });
  };

  onAddClick = event => {
    const { addTodoHandler } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({ text: "" });
      addTodoHandler(text);
    }
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          aria-label="Enter Todo"
          aria-describedby="button-addon2"
          onChange={this.onChangeHandler}
          value={this.state.text}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={this.onAddClick}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
