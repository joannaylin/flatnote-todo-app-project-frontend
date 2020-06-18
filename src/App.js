import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import history from "./history";
import TodoList from "./containers/TodoList";
import Login from "./components/Login";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import EditTodoForm from "./components/EditTodoForm";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import { getCurrentUser } from "./actions/user";
import styled from "styled-components"

const AppContainer = styled.div`
  display: block;
`

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.getCurrentUser(token);
    }
  }

  render() {
    return (
      <Router history={history}>
        <AppContainer>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/notes/new" component={TodoForm}/>
            <Route exact path="/notes" component={TodoList} />
            <Route exact path="/notes/:id" component={Todo} />
            <Route exact path="/notes/edit/:id" component={EditTodoForm} />
          </Switch>
        </AppContainer>
      </Router>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
