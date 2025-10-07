export let update = (name, value) => {
  return {type: 'Update', field: name, payload: value};
};
export let resetForm = () => {
  return {type: 'reset'};
};
