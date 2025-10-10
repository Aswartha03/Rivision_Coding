import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../Redux/actions";

export default function SignUpUser() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let dispatch = useDispatch();
  let { loading, token, error } = useSelector((state) => state.auth);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signUp(email, password));
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div>
        {loading && <p>Signup Loading.....</p>}
        {error && <p>Error : {error}</p>}
        {token && <p>Token : {token}</p>}
      </div>
    </>
  );
}
