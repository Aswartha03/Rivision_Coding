import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/actions/authActions";

function Auth() {
  let { isAuthenticated } = useSelector((state) => state.auth);
  let dispatch = useDispatch();

  return (
    <>
      {isAuthenticated ? (
        <p style={{ color: "green" }}>Logged In</p>
      ) : (
        <p style={{ color: "red" }}>Logged Out</p>
      )}
      <div style={{ margin: "10px" }}>
        {isAuthenticated ? (
          <button onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <button onClick={() => dispatch(login())}>Login</button>
        )}
      </div>
    </>
  );
}

export default Auth;
