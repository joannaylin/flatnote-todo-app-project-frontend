import React, { Component } from "react";
import NavBar from "./NavBar";
import { addTodo } from "../actions/todos";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  Form,
  FormField,
  FormFieldArea,
  Button,
  Container,
} from "../componentStyles";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo({ ...this.state, user_id: this.props.user });
    this.setState({
      title: "",
      content: "",
    });
    this.props.history.push("/notes");
  };

  render() {
    return (
      <div>
        <NavBar />
        <Form onSubmit={this.handleSubmit}>
          <FormField
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          ></FormField>
          <FormFieldArea
            type="text"
            name="content"
            placeholder="What do you need to do?"
            value={this.state.content}
            onChange={this.handleChange}
          ></FormFieldArea>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.id,
  };
};

export default connect(mapStateToProps, { addTodo })(withRouter(TodoForm));
