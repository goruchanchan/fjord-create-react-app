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
                  href="#"
                  onClick={() => this.handleClick(todo)}
                  className={todo.completed ? "completed" : ""}
                >
                  <div className="Underline">
                    <div className="UniqueLink">
                      {" "}
                      {echoFirstLine(todo.text)}
                    </div>{" "}
                  </div>
                </button>
              </li>
            ) : (
              <li key={todo.id}>{echoFirstLine(todo.text)}</li>
            ),
          )}
          <li>
            <button onClick={() => this.props.onUnSelectTodo()}>
              <div className="UniqueLink">+</div>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ToDoTable;
