let initialForm = {title: ''};

function formReducer (state = initialForm, action) {
  switch (action.type) {
    case 'Update':
      return {...state, [action.field]: action.payload};
    case 'reset':
      return initialForm;
    default:
      return state;
  }
}
export default formReducer;
