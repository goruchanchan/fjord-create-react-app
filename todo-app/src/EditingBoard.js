import React from "react";
import "./ToDo.css";
import ToDoTable from "./ToDoTable";
import EditToDo from "./EditToDo";
import AddToDo from "./AddToDo";

class EditingBoard extends React.Component {
  render() {
    return (
      <div className="EditingBoard">
        <h1>編集</h1>
        <div className="Board">
          <div className="Wrapper">
            <section className="Left">
              <ToDoTable todos={this.props.todoItems} />
            </section>
            <section className="Right">
              {/* <EditToDo todo={this.props.todos[0]}/> */}
              <AddToDo
                onAddNewToDo={this.props.onAddNewToDo}
                maxId={this.props.maxId}
              />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default EditingBoard;
