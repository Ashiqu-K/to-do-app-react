import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./index.scss";
import ToDoList from "./pages/List";
import ToDoCreate from "./pages/Create";
import NotFoundPage from "./pages/NotFound";
import Navbar from "./components/Navbar";

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/list" component={ToDoList} />
      <Route exact path="/create" component={ToDoCreate} />
      <Route exact path="/edit/:id" component={ToDoCreate} />
      <Redirect exact from="/" to="/list" />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
