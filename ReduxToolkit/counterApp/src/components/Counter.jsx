import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Redux/actions";

export default function Counter() {
  let count = useSelector((state) => state.count);
  let dispatch = useDispatch();

  return (
    <>
      <div>Count : {count}</div>
      <button style={{ margin: "10px" }} onClick={() => dispatch(increment())}>
        INC
      </button>
      <button onClick={() => dispatch(decrement())}>DEC</button>
      <button style={{ margin: "10px" }} onClick={() => dispatch(reset())}>
        Reset
      </button>
    </>
  );
}
