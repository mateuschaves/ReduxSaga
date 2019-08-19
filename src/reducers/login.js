const INITIAL_STATE = {
  username: null,
  error: false,
  user: {}
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("LOGIN SUCCESS");
      return {
        ...state,
        username: action.payload.username,
        error: false,
        user: action.payload.user
      };
    case "LOGIN_FAILURE":
      console.log("LOGIN FAILURE");
      return { ...state, error: true };
    case "LOGIN_REQUEST":
      console.log("LOGIN REQUEST");
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
}
