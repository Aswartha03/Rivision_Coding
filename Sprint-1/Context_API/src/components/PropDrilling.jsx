import React, { useContext, useState } from "react";
import { nameContext } from "./ContextAPI";

export function PropDrilling() {
  let [name, setName] = useState("Aswartha");
  return <Parent user={name} />;
}

function Parent({ user }) {
  return <Child name={user} />;
}

function Child({ name }) {
  return <GrandChild user={name} />;
}

function GrandChild({ user }) {
    let name1 = useContext(nameContext)
    console.log(name1)
  return (
    <>
      <h2>Prop Drilling</h2>
      <h3>Name : {user}</h3>
      <h4>Name from context API : {name1}</h4>
    </>
  );
}
