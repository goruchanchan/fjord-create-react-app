import React from "react";
import "./ToDo.css";
import ToDoTable from "./ToDoTable";
import EditToDo from "./EditToDo";
import AddToDo from "./AddToDo";

class EditingBoard extends React.Component {
  render() {
    const isEdit = true;
    return (
      <div className="EditingBoard">
        <h1>編集</h1>
        <div className="Board">
          <div className="Wrapper">
            <section className="Left">
              <ToDoTable
                todos={this.props.todoItems}
                onSelectTodo={this.props.onSelectTodo}
              />
            </section>
            <section className="Right">
              {isEdit ? (
                <EditToDo
                  todo={this.props.selectedTodo}
                  onEditToDo={this.props.onEditToDo}
                  onDeleteToDo={this.props.onDeleteToDo}
                />
              ) : (
                <AddToDo
                  onAddNewToDo={this.props.onAddNewToDo}
                  maxId={this.props.maxId}
                />
              )}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default EditingBoard;
