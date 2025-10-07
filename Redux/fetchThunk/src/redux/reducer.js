let initialState = {loading: false, data: null, error: null};

function fetchReducer (state = initialState, action) {
  switch (action.type) {
    case 'Fetch_Start':
      return {...state, loading: true};
    case 'Fetch_Success':
      return {...state, loading: false, data: action.payload, error: null};
    case 'Fetch_Error':
      return {...state, loading: false, data: null, error: action.error};
    default:
      return state;
  }
}

export default fetchReducer;
