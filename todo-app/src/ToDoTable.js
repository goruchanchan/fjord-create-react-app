import React from "react";
import "./ToDo.css";

class ToDoTable extends React.Component {
  render() {
    return (
      <div className="ToDoTable">
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoTable;
