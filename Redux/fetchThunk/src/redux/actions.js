export let fetchData = () => {
  return async (dispatch) => {
    dispatch ({type: 'Fetch_Start'});
    try {
      let res = await fetch ('https://jsonplaceholder.typicode.com/todos');
      let result = await res.json ();
      dispatch ({type: 'Fetch_Success', payload: result});
    } catch (error) {
      dispatch ({type: 'Fetch_Error', error: error.message});
    }
  };
};
