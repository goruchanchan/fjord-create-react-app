import React from "react";
import ToDoBoard from "./ToDoBoard";
import EditingBoard from "./EditingBoard";
import "./ToDo.css";

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    const tempLocalStorageToDoItems = localStorage.getItem("todoItems");

    if (tempLocalStorageToDoItems === null) {
      this.state = { todoItems: [], maxId: 0, selectedTodo: null };
    } else {
      this.state = {
        todoItems: JSON.parse(tempLocalStorageToDoItems),
        maxId: Number(localStorage.getItem("maxId")),
        selectedTodo: JSON.parse(tempLocalStorageToDoItems),
      };
    }
    this.handleAddNewToDo = this.handleAddNewToDo.bind(this);
    this.handleEditToDo = this.handleEditToDo.bind(this);
    this.handleSelectToDo = this.handleSelectToDo.bind(this);
  }

  handleAddNewToDo(newToDo) {
    const todoItems = [...this.state.todoItems, newToDo];
    const maxId = Number(newToDo.id) + 1;
    this.setState({ todoItems, maxId });
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    localStorage.setItem("maxId", maxId);
  }

  handleEditToDo(targetToDo) {
    console.log(targetToDo);
    const updatedToDoItems = this.state.todoItems.map((todo) => {
      return todo.id === targetToDo.id ? targetToDo : todo;
    });
    this.setState({ todoItems: updatedToDoItems });
    localStorage.setItem("todoItems", JSON.stringify(updatedToDoItems));
  }

  handleSelectToDo(targetToDo) {
    this.setState({ selectedTodo: targetToDo });
  }

  render() {
    return (
      <div className="ToDoApp">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <div className="Contents">
          <ToDoBoard
            todos={this.state.todoItems}
            onSelectTodo={this.handleSelectToDo}
          />
        </div>
        <div className="Contents">
          <EditingBoard
            onAddNewToDo={this.handleAddNewToDo}
            onEditToDo={this.handleEditToDo}
            todoItems={this.state.todoItems}
            maxId={this.state.maxId}
            onSelectTodo={this.handleSelectToDo}
            selectedTodo={this.state.selectedTodo}
          />
        </div>
      </div>
    );
  }
}

export default ToDoApp;
