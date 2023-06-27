import "./ToDo.css";

function EditToDo() {
  return (
    <div className="App">
      <div className="WrapperEdit">
        <section className="Top">
          <textarea></textarea>
        </section>
        <section className="Down">
          <button>編集</button>
          <button>削除</button>
        </section>
      </div>
    </div>
  );
}

export default EditToDo;
