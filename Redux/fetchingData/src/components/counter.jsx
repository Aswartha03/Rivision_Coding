import React, { useEffect, useReducer, useState } from "react";
let initialState = { count: 0 };
function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.field };
    case "decrement":
      return { count: state.count - action.field };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
export function CounterUsingReducer() {
  let [state, dispatch] = useReducer(reducer, initialState);
  let [value, setValue] = useState(1);
  
  function handleReset() {
    setValue(1);
    dispatch({ type: "reset" });
  }
  function handleIncrement() {
    setValue(1);
    dispatch({ type: "increment", field: value });
  }
  function handleDecrement() {
    setValue(1);
    dispatch({ type: "decrement", field: value });
  }

  useEffect(() => {
    console.log("Counter is Updated...");
  }, [state.count]);
  return (
    <>
      <h3>Counter : {state.count}</h3>
      <div>
        <form>
          <input
            style={{ height: "20px", width: "200px" }}
            type="number"
            required
            placeholder="Enter Your Number"
            value={value}
            onChange={(e) => setValue(+e.target.value)}
          />
        </form>
      </div>
      <button style={{ margin: "10px" }} onClick={handleIncrement}>
        Increment
      </button>
      <button style={{ margin: "10px" }} onClick={handleDecrement}>
        Decrement
      </button>
      <button style={{ margin: "10px" }} onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
