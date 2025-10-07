import React, { useEffect, useState } from "react";

export function Timer() {
  let [count, setCount] = useState(0);
  let [timer, setTimer] = useState(0);

  let handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count > 0) {
      let time = setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
      return () => clearTimeout(time);
    }
  }, [count]);

  return (
    <>
      <h3>Timer : {timer}</h3>
      <h2>Count : {count}</h2>
      <button onClick={handleCount}>Increment Count</button>
    </>
  );
}
