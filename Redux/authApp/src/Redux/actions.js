import axios from "axios"

export let login = (email, password) => {
  return async dispatch => {
    dispatch ({type: 'Login_Start'});
    try {
      let response = await axios.post ('https://reqres.in/api/login', {
        email,
        password,
      });
      dispatch ({type: 'Login_Success', payload: response.data.token});
    } catch (error) {
      dispatch ({type: 'Login_Error', error: 'Login Failed'});
    }
  };
};

export let signUp = (email, password) => {
   
    
  return async dispatch => {
    
    dispatch ({type: 'Signup_Start'});
    try {
      let response = await axios.post ('https://reqres.in/api/register', {
        email,
        password,
      });
      dispatch ({type: 'Signup_Success', payload: response.data.token});
    } catch (error) {
        console.log(error);
        
      dispatch ({type: 'Signup_Error', error: 'Signup Failed'});
    }
  };
};
