import React, { useContext } from "react";
import { authContext } from "./AuthContext";
import { login } from "./login";

export function Private({children}){
    let {token} = useContext(authContext)
    return token ? children : <login/>
}