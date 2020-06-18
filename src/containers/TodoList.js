import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import TodoListItem from "../components/TodoListItem";
import { TodoContainer, Container, ContainerTitle } from "../componentStyles";

class TodoList extends Component {
  grabTodos = () => {
    if (this.props.todos.length > 0) {
      return this.props.todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ));
    }
  };

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <ContainerTitle> Things to Do: </ContainerTitle>
          <TodoContainer>{this.grabTodos()}</TodoContainer>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(TodoList);
