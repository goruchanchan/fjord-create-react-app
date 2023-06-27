import React from "react";
import ToDoBoard from "./ToDoBoard";
import EditingBoard from "./EditingBoard";
import "./ToDo.css";

class ToDoApp extends React.Component {
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
          <ToDoBoard todos={this.props.todos} />
        </div>
        <div className="Contents">
          <EditingBoard todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

export default ToDoApp;
