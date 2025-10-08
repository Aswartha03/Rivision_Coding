export let fetchPosts = ()=>{
    return async (dispatch)=>{
        dispatch({type:"Fetch_Start"})
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts")
            let result = await response.json()
            dispatch({type:"Fetch_Success" , payload:result})
        } catch (error) {
            dispatch({type:"Fetch_Error" , error:error.message})
        }
    }
}