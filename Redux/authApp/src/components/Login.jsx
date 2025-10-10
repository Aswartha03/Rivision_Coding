import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login} from "../Redux/actions";

export default function LoginUser() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let dispatch = useDispatch();
  let { loading, token, error } = useSelector((state) => state.auth);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <div>
        <h3>Login</h3>
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
          <button type="submit">Login</button>
        </form>
      </div>
      <div>
        {loading && <p>Loggedin.....</p>}
        {error && <p>Error : {error}</p>}
        {token && <p>Token : {token}</p>}
      </div>
    </>
  );
}
