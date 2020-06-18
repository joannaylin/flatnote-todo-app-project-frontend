export default function todos(state = [], action) {
  switch (action.type) {
    case "GET_TODOS":
      return [...action.todos]
    case "ADD_TODO":
      return state.concat(action.todo)
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "UPDATE_TODO":
      const updatedTodo = action.todo
      return state.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
    default:
      return state;
  }
}

