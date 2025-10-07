let initialState = {count: 0};

function counterReducer (state = initialState, action) {
//   console.log ('Action received:', action);
  switch (action.type) {
    case 'Increment':
      return {...state, count: state.count + 1};
    case 'Decrement':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
}
export default counterReducer;
