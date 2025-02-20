import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Routing from "./routes/Routing";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Routing />
    </>
  );
};

export default App;
