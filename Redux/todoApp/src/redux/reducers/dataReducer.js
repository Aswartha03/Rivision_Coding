const initialState = { todos: [] };

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'update':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.field
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'delete':
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.field)
      };

    default:
      return state;
  }
}

export default todoReducer;
