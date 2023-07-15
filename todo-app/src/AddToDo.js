import React from "react";
import ErrorText from "./ErrorText";

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "", noInput: false };
    this.count = this.props.maxId;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ todo: event.target.value, noInput: false });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.todo === "") {
      this.setState({ noInput: true });
      return;
    }

    this.props.onAddNewToDo({
      id: this.count,
      text: this.state.todo,
    });

    this.setState({ todo: "" });
    this.count++;
  }

  render() {
    return (
      <div className="add-to-do">
        <form onSubmit={this.handleSubmit}>
          <div className="WrapperEdit">
            <section className="Top">
              <textarea
                type="text"
                value={this.state.todo}
                onChange={this.handleChange}
              />
            </section>
            <section className="Down">
              <input type="submit" value="追加" />
            </section>
          </div>
        </form>
        {this.state.noInput ? <ErrorText /> : ""}
      </div>
    );
  }
}

export default AddToDo;
