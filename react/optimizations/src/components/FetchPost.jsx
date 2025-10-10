import React, { useEffect, useState } from "react";

export function fetchPostById({ id }) {
  let [data, setData] = useState("");

  async function fetchPost(id) {
    try {
      let response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      
      let result = await response.json();
      setData(result);
    } catch (error) {
      return error.message;
    }
  }
  useEffect(() => {
    fetchPost(id);
  }, [id]);

console.log(data)
  return (
    <>
      <div>
        
        </div>  
    </>
  )
}
