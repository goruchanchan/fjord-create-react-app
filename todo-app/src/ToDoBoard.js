import "./ToDo.css";
import ToDoTable from "./ToDoTable";

function ToDoBoard() {
  return (
    <div className="ToDoBoard">
      <h1>一覧</h1>
      <div className="Board">
        <ToDoTable />
      </div>
    </div>
  );
}

export default ToDoBoard;
