import React, { createContext, useContext, useState } from "react";
import { PropDrilling } from "./PropDrilling";
// CPC  
// 1 create 
export let nameContext = createContext()



export function ContextAPIExplnation(){
    let [name,setName] = useState("Chiranjeevi")
    return (
        // 2 provide
        <nameContext.Provider value={name}>
            <h2>Context API</h2>
            <Parent/>
            <PropDrilling/>
        </nameContext.Provider>
    )
}

function Parent(){
    return <Child/>
}


function Child(){
        return <GrandChild/>
}


function GrandChild(){
    // 3 Consume
    let  name = useContext(nameContext)
    return <h3>Name:{name}</h3>
}