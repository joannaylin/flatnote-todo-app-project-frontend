import history from "../history";
const apiURL = "http://localhost:3000/api/v1/";

export const loginUser = (user) => {
  return (dispatch) => {
    const formObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    };

    fetch(`${apiURL}login`, formObj)
      .then((resp) => resp.json())
      .then((data) => {
        const user = data.user;
        if (user) {
          const todos = user.todos;
          dispatch({ type: "GET_USER", user });
          dispatch({ type: "GET_TODOS", todos });
          localStorage.setItem("token", data.jwt);
          history.push("/notes");
        }
      });
  };
};

export const signUpUser = (user) => {
  return (dispatch) => {
    const formObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    };

    fetch(`${apiURL}users`, formObj)
      .then((resp) => resp.json())
      .then((data) => {
        const user = data.user;
        const todos = data.todos
        dispatch({ type: "GET_USER", user });
        dispatch({ type: "GET_TODOS", todos });
        localStorage.setItem("token", data.jwt);
        history.push("/notes");
      });
  };
};

export const getCurrentUser = (token) => {
  return (dispatch) => {
    const formObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`${apiURL}profile`, formObj)
      .then((resp) => resp.json())
      .then((data) => {
        const user = data.user;
        const todos = user.todos;
        dispatch({ type: "GET_USER", user });
        dispatch({ type: "GET_TODOS", todos });
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT_USER" });
  };
};
