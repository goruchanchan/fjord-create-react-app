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
                <a
                  href="#"
                  onClick={() => this.handleClick(todo)}
                  className={todo.completed ? "completed" : ""}
                >
                  {echoFirstLine(todo.text)}
                </a>
              </li>
            ) : (
              <li key={todo.id}>{echoFirstLine(todo.text)}</li>
            )
          )}
          <li>
            <a href="#" onClick={() => this.props.onUnSelectTodo()}>
              +
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ToDoTable;
