import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync } from "../redux/actions";

export function CounterWithMW() {
  let count = useSelector((state) => state.count);
  let dispatch = useDispatch();

  return (
    <>
      <h3>Count : {count}</h3>
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
        <button
          style={{ margin: "10px" }}
          onClick={() => dispatch(incrementAsync())}
        >
          Increment after 2 sec
        </button>
      </div>
    </>
  );
}
