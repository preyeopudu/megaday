const Auth = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      let State = true;
      return State;
    case "LOGOUT":
      let data = false;
      return data;
    default:
      return state;
  }
};

export default Auth;
