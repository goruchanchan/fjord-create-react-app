import React from "react";
import "./ToDo.css";

class EditToDo extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="WrapperEdit">
          <section className="Top">
            <textarea defaultValue={this.props.todo.contents}></textarea>
          </section>
          <section className="Down">
            <button>編集</button>
            <button>削除</button>
          </section>
        </div>
      </div>
    );
  }
}

export default EditToDo;
