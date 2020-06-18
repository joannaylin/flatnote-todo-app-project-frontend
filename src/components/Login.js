import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/user";
import { withRouter } from "react-router";
import { Button, LoginForm, LoginFormField } from "../componentStyles";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state);
    this.setState({
      username: "",
      password: "",
    });
    this.props.history.push("/notes");
  };

  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit}>
        <LoginFormField
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <LoginFormField
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <Button type="submit">Login</Button>
        <Button onClick={() => this.props.history.push("/")}>Back</Button>
      </LoginForm>
    );
  }
}

export default connect(null, { loginUser })(withRouter(Login));
