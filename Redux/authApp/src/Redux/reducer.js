let initialState = {loading: false, token: null, error: null};

export function authReducer (state = initialState, action) {
  switch (action.type) {
    case 'Login_Start':
    case 'Signup_Start':
      return {loading: true, token: null, error: null};

    case 'Login_Success':
    case 'Signup_Success':
      return {loading: false, token: action.payload, error: null};

    case 'Login_Error':
    case 'Signup_Error':
      return {loading: false, token: null, error: action.error};

    default:
      return state;
  }
}
