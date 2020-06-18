export default function users(state = {}, action) {
  switch (action.type) {
    case "GET_USER":
      return action.user;
    case "LOGOUT_USER":
      return {}
    default:
      return state;
  }
}
