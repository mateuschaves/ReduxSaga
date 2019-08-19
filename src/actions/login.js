export const loginRequest = username => ({
  type: "LOGIN_REQUEST",
  payload: { username }
});

export const loginSuccess = (username, user) => ({
  type: "LOGIN_SUCCESS",
  payload: { username, user }
});

export const loginFailure = _ => ({
  type: "LOGIN_FAILURE",
  payload: {}
});
