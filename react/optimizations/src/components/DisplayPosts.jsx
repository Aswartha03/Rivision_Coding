import React, { useEffect, useState } from "react";


export function DisplayPosts() {
  let [postsId, setPostsId] = useState([]);

  async function fetchPosts() {
    try {
      let response = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      let result = await response.json();
      setPostsId(result);
    } catch (error) {
      return error.message;
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(postsId);
}
