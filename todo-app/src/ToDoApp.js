import React from "react";
import TodoBoard from "./ToDoBoard";
import "./ToDo.css";

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      maxId: 0,
      selectedTodo: { id: null, text: "" },
    };

    this.handleAddNewToDo = this.handleAddNewToDo.bind(this);
    this.handleEditToDo = this.handleEditToDo.bind(this);
    this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
    this.handleSelectToDo = this.handleSelectToDo.bind(this);
    this.handleUnselectToDo = this.handleUnselectToDo.bind(this);
  }

  componentDidMount() {
    const tempLocalStorageToDos = localStorage.getItem("todos");
    if (tempLocalStorageToDos !== null) {
      this.setState({
        todos: JSON.parse(tempLocalStorageToDos),
        maxId: Number(localStorage.getItem("maxId")),
        selectedTodo: { id: null, text: "" },
      });
    }
  }

  updateToDos(todos, maxId) {
    this.setState({ todos, maxId, selectedTodo: { id: null, text: "" } });
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("maxId", maxId);
  }

  handleAddNewToDo(newToDo) {
    const todos = [...this.state.todos, newToDo];
    const maxId = Number(newToDo.id) + 1;
    this.updateToDos(todos, maxId);
  }

  handleEditToDo(targetToDo) {
    const todos = this.state.todos.map((todo) => {
      return todo.id === targetToDo.id ? targetToDo : todo;
    });
    this.updateToDos(todos, this.state.maxId);
  }

  handleSelectToDo(selectedTodo) {
    this.setState({ selectedTodo });
  }

  handleUnselectToDo() {
    this.setState({ selectedTodo: { id: null, text: "+" } });
  }

  handleDeleteToDo() {
    const todos = this.state.todos.filter(
      (todo) => todo.id !== this.state.selectedTodo.id,
    );
    this.updateToDos(todos, this.state.maxId);
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
          onUnselectTodo={this.handleUnselectToDo}
        />
      </div>
    );
  }
}

export default ToDoApp;
