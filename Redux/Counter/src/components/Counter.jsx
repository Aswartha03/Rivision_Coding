import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../redux/actions";
function Counter() {
  let {count} = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <>
      <h2>Count : {count}</h2>
      <div>
        <button
          style={{ margin: "10px" }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button style={{ margin: "10px" }} onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </>
  );
}

export { Counter };
