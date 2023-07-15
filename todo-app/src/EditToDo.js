import React from "react";
import "./ToDo.css";

class EditToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: props.todo, isEditing: false };
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
  }

  handleEditInputChange(event) {
    const tempToDo = { id: this.props.todo.id, text: event.target.value };
    this.setState({ todo: tempToDo });
  }

  handleEditButton() {
    console.log(this.state.todo);
    if (this.state.todo.text === "") return;
    this.props.onEditToDo(this.state.todo);
  }

  render() {
    return (
      <div className="App">
        <div className="WrapperEdit">
          <section className="Top">
            <textarea
              defaultValue={this.props.todo.text}
              onChange={(event) => this.handleEditInputChange(event)}
            ></textarea>
          </section>
          <section className="Down">
            <button onClick={this.handleEditButton}>確定</button>
            <button>削除</button>
          </section>
        </div>
      </div>
    );
  }
}

export default EditToDo;
