import React, { useState } from "react";

export function NameWithoutContext() {
  let [user, setUser] = useState("Aswartha");
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child name={user} />;
}

function Child({ name }) {
  return <GrandChild user={name} />;
}

function GrandChild({ user }) {
  return <h3>Name : {user}</h3>;
}
