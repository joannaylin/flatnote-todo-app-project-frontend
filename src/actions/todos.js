const todoURL = "http://localhost:3000/todos";

export function addTodo(todo) {
  return (dispatch) => {
    const formObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo }),
    };

    fetch(todoURL, formObj)
      .then((resp) => resp.json())
      .then((todo) => dispatch({ type: "ADD_TODO", todo }));
  };
}

export function removeTodo(id) {
  return (dispatch) => {
    fetch(`${todoURL}/${id}`, { method: "DELETE" }).then(() =>
      dispatch({ type: "REMOVE_TODO", id })
    );
  };
}

export function updateTodo(todo, id) {
  return (dispatch) => {
    dispatch({ type: "UPDATE_TODO", todo });

    const formObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    };
    fetch(`${todoURL}/${id}`, formObj)
      .then((resp) => resp.json())
      .then((todo) => dispatch({ type: "UPDATE_TODO", todo }));
  };
}
