let initialState = {isAuthenticated: false};
function authReducer (state = initialState, action) {
  switch (action.type) {
    case 'Login':
      return {isAuthenticated: true};
    case 'Logout':
      return {isAuthenticated: false};
    default:
      return state;
  }
}
export default authReducer;
