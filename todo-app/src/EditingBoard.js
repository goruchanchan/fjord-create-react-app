import React from "react";
import "./ToDo.css";
import ToDoTable from "./ToDoTable";
import EditToDo from "./EditToDo";

class EditingBoard extends React.Component {
  render() {
    return (
      <div className="EditingBoard">
        <h1>編集</h1>
        <div className="Board">
          <div className="Wrapper">
            <section className="Left">
              <ToDoTable todos={this.props.todos} />
            </section>
            <section className="Right">
              <EditToDo todo={this.props.todos[0]}/>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default EditingBoard;
