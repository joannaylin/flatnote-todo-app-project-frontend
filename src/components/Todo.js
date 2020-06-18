import React, { Component } from "react";
import NavBar from "./NavBar";
import { removeTodo } from "../actions/todos";
import { connect } from "react-redux";
import {
  ButtonLink,
  Container,
  ListItem,
  ListItemTitle
} from "../componentStyles";
import styled from "styled-components";

const TodoItem = styled(ListItem)`
  display: block;   
  height: 400px;
  width: 700px;
  margin-bottom: 20px;
`;

const TodoTitle = styled(ListItemTitle)`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const TodoContent = styled.p`
  font-style: italic;
  padding: 15px;
  text-indent: -15px;
  margin-bottom: 210px;
`;

class Todo extends Component {

  render() {
    const matchId = parseInt(this.props.match.params.id);
    const currentTodo = this.props.todos.find((todo) => todo.id === matchId);
    if (currentTodo) {
      return (
        <div>
          <NavBar />
          <Container>
            <TodoItem>
              <TodoTitle>{currentTodo.title}</TodoTitle>
              <TodoContent>{currentTodo.content}</TodoContent>
              <ButtonLink to="/notes">Back</ButtonLink>
              <ButtonLink
                to={{
                  pathname: `/notes/edit/${currentTodo.id}`,
                  state: currentTodo,
                }}
              >
                Edit
              </ButtonLink>
              <ButtonLink
                to="/notes"
                onClick={() => this.props.removeTodo(currentTodo.id)}
              >
                Delete
              </ButtonLink>
            </TodoItem>
          </Container>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { removeTodo })(Todo);
