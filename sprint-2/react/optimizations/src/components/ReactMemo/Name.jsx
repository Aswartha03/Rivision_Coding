import React, { useState } from "react";
export function Parent() {
  let [count, setCount] = useState(0);
  return (
    <>
      <Child name="Mahesh" />
      <button onClick={() => setCount(count + 1)}>
        Increase count : {count}
      </button>
    </>
  );
}
let Child = React.memo(({name}) => {
  console.log("Inside the Child Component.....");
  return <h2>Hello , {name}</h2>;
});
