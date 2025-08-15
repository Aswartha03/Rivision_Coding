import React, { createContext, useContext, useState } from "react";

let nameContext = createContext();
export function ContextExample() {
  let [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button style={{ margin: "5px" }} type="submit">Submit</button>
      </form>
      <nameContext.Provider value={name}>
        <Parent />
      </nameContext.Provider>
    </>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  let name = useContext(nameContext);
  return <h2>Hello ,{name}</h2>;
}
