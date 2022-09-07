export const Login = (token) => {
  const action = {
    type: "LOGIN",
    token,
  };
  return action;
};

export const Logout = () => {
  const action = {
    type: "LOGOUT",
  };
  return action;
};
