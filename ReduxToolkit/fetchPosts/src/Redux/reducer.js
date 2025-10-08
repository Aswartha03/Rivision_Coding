let initialState = {loading: true, posts: null, error: null};

export function postsReducer (state = initialState, action) {
  switch (action.type) {
    case 'Fetch_Start':
      return {loading: true, posts: null, error: null};
    case 'Fetch_Success':
      return {loading: false, posts: action.payload, error: null};
    case 'Fetch_Error':
      return {loading: false, posts: null, error: action.error};
    default:
      return state;
  }
}
