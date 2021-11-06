import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./index.scss";
import ToDoList from "./pages/List";
import ToDoCreate from "./pages/Create";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/list" component={ToDoList} />
          <Route exact path="/create" component={ToDoCreate} />
          <Route exact path="/edit/:id" component={ToDoCreate} />
          <Redirect to="/list" />
        </Switch>
      </>
    );
  }
}

export default App;
