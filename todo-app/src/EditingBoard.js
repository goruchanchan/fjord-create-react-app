import "./ToDo.css";
import ToDoTable from "./ToDoTable";
import EditToDo from "./EditToDo";

function EditingBoard() {
  return (
    <div className="EditingBoard">
      <h1>編集</h1>
      <div className="Board">
        <div className="Wrapper">
          <section className="Left">
            <ToDoTable />
          </section>
          <section className="Right">
            <EditToDo />
          </section>
        </div>
      </div>
    </div>
  );
}

export default EditingBoard;
