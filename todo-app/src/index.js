import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ToDoApp from "./ToDoApp";
import reportWebVitals from "./reportWebVitals";

const TODOS = [
  { id: 0, title: "メモ0", contents: "メモ0\rテスト0" },
  { id: 1, title: "メモ1", contents: "メモ1\rテスト1" },
  { id: 2, title: "メモ2", contents: "メモ2\rテスト2" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDoApp todos={TODOS}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
