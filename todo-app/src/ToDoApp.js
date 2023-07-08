import React from "react";
import ToDoBoard from "./ToDoBoard";
import EditingBoard from "./EditingBoard";
import "./ToDo.css";

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    const tempLocalStorageToDoItems = localStorage.getItem("todoItems");

    if (tempLocalStorageToDoItems === null) {
      this.state = { todoItems: [], maxId: 0 };
    } else {
      this.state = {
        todoItems: JSON.parse(tempLocalStorageToDoItems),
        maxId: Number(localStorage.getItem("maxId")),
      };
    }
    this.handleAddNewToDo = this.handleAddNewToDo.bind(this);
  }

  handleAddNewToDo(newToDo) {
    const todoItems = [...this.state.todoItems, newToDo];
    const maxId = Number(newToDo.id) + 1;
    this.setState({ todoItems, maxId });
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    localStorage.setItem("maxId", maxId);
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
          <ToDoBoard todos={this.state.todoItems} />
        </div>
        <div className="Contents">
          <EditingBoard
            onAddNewToDo={this.handleAddNewToDo}
            todoItems={this.state.todoItems}
            maxId={this.state.maxId}
          />
        </div>
      </div>
    );
  }
}

export default ToDoApp;
