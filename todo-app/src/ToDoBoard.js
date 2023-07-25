import React from "react";
import "./ToDo.css";
import ToDoTable from "./ToDoTable";
import EditToDo from "./EditToDo";
import AddToDo from "./AddToDo";

class TodoBoard extends React.Component {
  render() {
    let title = "一覧";
    if (
      this.props.selectedTodo.id !== null ||
      this.props.selectedTodo.text !== ""
    ) {
      title = "編集";
    }

    return (
      <div className="EditingBoard">
        <h1> {title} </h1>
        <div className="Board">
          <div className="Wrapper">
            <section className="Left">
              <ToDoTable
                todos={this.props.todos}
                selectedTodo={this.props.selectedTodo}
                onSelectTodo={this.props.onSelectTodo}
                onUnselectTodo={this.props.onUnselectTodo}
              />
            </section>
            <section className="Right">
              {this.props.selectedTodo.id !== null && (
                <EditToDo
                  todo={this.props.selectedTodo}
                  onEditToDo={this.props.onEditToDo}
                  onDeleteToDo={this.props.onDeleteToDo}
                />
              )}
              {this.props.selectedTodo.id === null &&
                this.props.selectedTodo.text === "+" && (
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

export default TodoBoard;
