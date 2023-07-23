import React from "react";
import TodoBoard from "./ToDoBoard";
import "./ToDo.css";

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    const tempLocalStorageToDos = localStorage.getItem("todos");

    if (tempLocalStorageToDos === null) {
      this.state = {
        todos: [],
        maxId: 0,
        selectedTodo: { id: null, text: "" },
      };
    } else {
      this.state = {
        todos: JSON.parse(tempLocalStorageToDos),
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
    const todos = [...this.state.todos, newToDo];
    const maxId = Number(newToDo.id) + 1;
    this.setState({ todos, maxId });
    this.setState({ selectedTodo: { id: null, text: "" } });
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("maxId", maxId);
  }

  handleEditToDo(targetToDo) {
    const todos = this.state.todos.map((todo) => {
      return todo.id === targetToDo.id ? targetToDo : todo;
    });
    this.setState({ todos });
    this.setState({ selectedTodo: { id: null, text: "" } });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  handleSelectToDo(selectedTodo) {
    this.setState({ selectedTodo });
  }

  handleUnSelectToDo() {
    this.setState({ selectedTodo: { id: null, text: "+" } });
  }

  handleDeleteToDo() {
    const todos = this.state.todos.filter(
      (todo) => todo.id !== this.state.selectedTodo.id,
    );
    this.setState({ todos });
    this.setState({ selectedTodo: { id: null, text: "" } });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  render() {
    return (
        <div className="Contents">
          <TodoBoard
            onAddNewToDo={this.handleAddNewToDo}
            onEditToDo={this.handleEditToDo}
            onDeleteToDo={this.handleDeleteToDo}
            todos={this.state.todos}
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
