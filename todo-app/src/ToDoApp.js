import React from "react";
import TodoBoard from "./ToDoBoard";
import "./ToDo.css";

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    const tempLocalStorageToDoItems = localStorage.getItem("todoItems");

    if (tempLocalStorageToDoItems === null) {
      this.state = {
        todoItems: [],
        maxId: 0,
        selectedTodo: { id: null, text: "" },
      };
    } else {
      this.state = {
        todoItems: JSON.parse(tempLocalStorageToDoItems),
        maxId: Number(localStorage.getItem("maxId")),
        selectedTodo: { id: null, text: "" },
      };
    }
    this.handleAddNewToDo = this.handleAddNewToDo.bind(this);
    this.handleEditToDo = this.handleEditToDo.bind(this);
    this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
    this.handleSelectToDo = this.handleSelectToDo.bind(this);
    this.handleUnSelectToDo = this.handleUnSelectToDo.bind(this);
  }

  handleAddNewToDo(newToDo) {
    const todoItems = [...this.state.todoItems, newToDo];
    const maxId = Number(newToDo.id) + 1;
    this.setState({ todoItems, maxId });
    this.setState({ selectedTodo: { id: null, text: "" } });
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    localStorage.setItem("maxId", maxId);
  }

  handleEditToDo(targetToDo) {
    const todoItems = this.state.todoItems.map((todo) => {
      return todo.id === targetToDo.id ? targetToDo : todo;
    });
    this.setState({ todoItems });
    this.setState({ selectedTodo: { id: null, text: "" } });
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }

  handleSelectToDo(selectedTodo) {
    this.setState({ selectedTodo });
  }

  handleUnSelectToDo() {
    this.setState({ selectedTodo: { id: null, text: "+" } });
  }

  handleDeleteToDo() {
    const updatedToDoItems = this.state.todoItems.filter(
      (todo) => todo.id !== this.state.selectedTodo.id,
    );
    this.setState({ todoItems: updatedToDoItems });
    this.setState({ selectedTodo: { id: null, text: "" } });
    localStorage.setItem("todoItems", JSON.stringify(updatedToDoItems));
  }

  render() {
    return (
        <div className="Contents">
          <TodoBoard
            onAddNewToDo={this.handleAddNewToDo}
            onEditToDo={this.handleEditToDo}
            onDeleteToDo={this.handleDeleteToDo}
            todoItems={this.state.todoItems}
            maxId={this.state.maxId}
            onSelectTodo={this.handleSelectToDo}
            selectedTodo={this.state.selectedTodo}
            onUnSelectTodo={this.handleUnSelectToDo}
          />
      </div>
    );
  }
}

export default ToDoApp;
