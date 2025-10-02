import React, { useEffect, useState } from "react";


export function Products(){
    let [products,setProducts] = useState([])
    async function fetch(){
        try {
            let res = await fetch("https://fakestoreapi.com/products") 
            let data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{
        fetch()
    },[])
    // console.log(products)
    

}