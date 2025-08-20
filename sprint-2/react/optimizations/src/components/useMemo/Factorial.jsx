import React, { useMemo, useState } from "react";

export function FactorialExample() {
  let [count, setCount] = useState(0);
  let [number, setNumber] = useState(4);
  let factorial = useMemo(() => {
    console.log("Calculating the Factorial");
    function Fact(n) {
      if (n == 0 || n == 1) return 1;
      return n * Fact(n - 1);
    }
    return Fact(number);
  },[number]);
  return (
    <>
      <h2>Factorial of {number} is : {factorial}</h2>
      <button onClick={() => setNumber(number + 1)}>
        Increase Number : {number}
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increase Count : {count}
      </button>
    </>
  );
}
