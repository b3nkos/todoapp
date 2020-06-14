import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import TaskList from "../components/Task/TaskList";

import "../css/App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path="/" component={TaskList} />
    </BrowserRouter>
  );
}

export default App;
