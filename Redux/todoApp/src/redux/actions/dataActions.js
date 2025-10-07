export let AddTodo = form => {
  return {type: 'add', payload: form};
};

export let deleteTodo = id => {
  return {type: 'delete', field: id};
};

export let updateTodo = id => {
  return {type: 'update', field: id};
};
