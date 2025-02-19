import React from "react";
import ReactDom from "react-dom/client";
import Card from "./components/Card";
import Todo from "./components/Todo";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Card /> */}
    <Todo />
  </React.StrictMode>
);
