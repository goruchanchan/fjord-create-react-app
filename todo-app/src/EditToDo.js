import React from "react";
import "./ToDo.css";
import { echoErrorNoInput } from "./ToDoUtils";

class EditToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: this.props.todo };
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.todo !== this.props.todo) {
      this.setState({
        todo: this.props.todo,
      });
    }
  }

  handleEditInputChange(event) {
    const tempToDo = {
      id: this.props.todo.id,
      text: event.target.value,
    };
    this.setState({ todo: tempToDo });
  }

  handleEditButton() {
    if (this.state.todo === null || this.state.todo.text === "") return;
    this.props.onEditToDo(this.state.todo);
  }

  handleDeleteButton() {
    if (this.state.todo === null) return;
    this.props.onDeleteToDo();
  }

  render() {
    return (
      <div className="App">
        <div className="WrapperEdit">
          <section className="Top">
            <textarea
              value={this.state.todo !== null ? this.state.todo.text : ""}
              onChange={(event) => this.handleEditInputChange(event)}
            ></textarea>
          </section>
          <section className="Down">
            <button onClick={this.handleEditButton}>編集</button>
            <button onClick={this.handleDeleteButton}>削除</button>
          </section>
          {this.state.todo.text === "" ? echoErrorNoInput() : ""}
        </div>
      </div>
    );
  }
}

export default EditToDo;
