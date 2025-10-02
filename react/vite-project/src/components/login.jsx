import React, { useContext, useState } from "react";
import { authContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { Products } from "./products";

export function login() {
  let [email, setEmail] = useState("null");
  let [password, setPassword] = useState("null");
  let { login } = useContext(authContext);
  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://reqres.in/api.login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "x-a[i-key": "reqres-free-v1",
        },
        body: JSON.stringify({ email, password }),
      });
      let data = await res.json();
      if (res.ok && data.token) {
        login(data.token);
        navigate(<Products/>);
      } else alert("Wrong Details");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
