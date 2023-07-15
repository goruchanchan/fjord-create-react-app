import React from "react";
import "./ToDo.css";
import ToDoTable from "./ToDoTable";

class ToDoBoard extends React.Component {
  render() {
    return (
      <div className="ToDoBoard">
        <h1>一覧</h1>
        <div className="Board">
          <ToDoTable
            todos={this.props.todos}
            onSelectTodo={this.props.onSelectTodo}
          />
        </div>
      </div>
    );
  }
}

export default ToDoBoard;
