import React, { Component } from "react";
import NavBar from "./NavBar";
import { updateTodo } from "../actions/todos";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  Form,
  FormField,
  FormFieldArea,
  Button,
} from "../componentStyles";

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.location.state.title,
      content: this.props.location.state.content,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateTodo(this.state, this.props.location.state.id);
    this.props.history.push("/notes");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <NavBar />
        <Form onSubmit={this.handleSubmit}>
          <FormField
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          ></FormField>
          <FormFieldArea
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          ></FormFieldArea>
          <Button type="submit">Update</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { updateTodo })(withRouter(EditTodoForm));
