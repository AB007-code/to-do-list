import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "../components/Todo";
import Form from "../components/Form";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default Routing;
