export const loginSuccess = username => ({
  type: "LOGIN_SUCCESS",
  payload: { username }
});

export const loginFailure = _ => ({
  type: "LOGIN_FAILURE",
  payload: {}
});
