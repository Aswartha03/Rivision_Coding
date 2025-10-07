import React, { useEffect, useReducer, useState } from "react";

let initialState = { count: +localStorage.getItem("count") || 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
export function CounterUsingReducer() {
  let [state, dispatch] = useReducer(reducer, initialState);
  let [inputValue, setInputValue] = useState(1);
  useEffect(() => {
    localStorage.setItem("count", state.count);
    console.log("Counter Updated!....");
  }, [state.count]);
  return (
    <>
      <h2> Counter : {state.count}</h2>
      <form>
        <input
          type="number"
          value={inputValue}
          required
          placeholder="Enter Number"
          onChange={(e) => setInputValue(+e.target.value)}
        />
      </form>
      <div>
        <button
          style={{ margin: "10px" }}
          onClick={() => dispatch({ type: "increment", payload: inputValue })}
        >
          Increment
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => dispatch({ type: "decrement", payload: inputValue })}
        >
          Decrement
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </>
  );
}
