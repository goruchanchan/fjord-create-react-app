import React from "react";
import "./ToDo.css";
import { echoFirstLine } from "./ToDoUtils";

class ToDoTable extends React.Component {
  handleClick = (todo) => {
    this.props.onSelectTodo(todo);
  };

  render() {
    return (
      <div className="ToDoTable">
        <ul>
          {this.props.todos.map((todo) =>
            todo.id !== this.props.selectedTodo.id ? (
              <li key={todo.id}>
                <button
                  className="UniqueLink"
                  onClick={() => this.handleClick(todo)}
                >
                  <div className="Underline">{echoFirstLine(todo.text)}</div>
                </button>
              </li>
            ) : (
              <li key={todo.id}>{echoFirstLine(todo.text)}</li>
            ),
          )}
          <li>
            <button
              className="UniqueLink"
              onClick={() => this.props.onUnSelectTodo()}
            >
              +
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ToDoTable;
