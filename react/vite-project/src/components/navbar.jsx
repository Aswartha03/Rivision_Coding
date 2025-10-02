import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "./AuthContext";

export function Navbar() {
  let { token, logout } = useContext(authContext);

  return (
    <>
      <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        height:"50px",
        border:"1px solid gray"
      }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {!token ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </>
  );
}
