import React from "react";
import styled from "styled-components";
import {
  ButtonLink,
  ListItem,
  ListItemTitle,
  ListItemContent,
  ItemDiv,
} from "../componentStyles";

const ListButton = styled(ButtonLink)`
  margin: 5px;
  width: 150px;
  text-align: center;
`;

const TodoListItem = (props) => {
  const { title, content, id } = props.todo;

  return (
    <ListItem>
      <ItemDiv>
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemContent>{content}</ListItemContent>
      </ItemDiv>
      <ListButton to={`/notes/${id}`}>View</ListButton>
      <ListButton to={{ pathname: `/notes/edit/${id}`, state: props.todo }}>
        Edit
      </ListButton>
    </ListItem>
  );
};

export default TodoListItem;
