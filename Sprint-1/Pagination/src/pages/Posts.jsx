import React, { useEffect, useState } from "react";
import axios from "axios";
export function Posts() {
  let [posts, setPosts] = useState([]);
  let [isLoading, setIsloading] = useState(false);
  let [isError, setError] = useState(false);
  let [currentPage, setPage] = useState(1);
  async function fetchPosts() {
    setIsloading(true);
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setIsloading(false);
      setPosts(response.data);
      // console.log(response.data);
      setError(false);
    } catch (error) {
      setError(true);
      setIsloading(false);
      console.log("Error:", error.message);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  let handlePrev = () => {
    if (currentPage > 1) setPage((page) => page - 1);
  };
  let handleNext = () => {
    if (currentPage < totalPages) setPage((page) => page + 1);
  };

  let limit = 5;
  let totalPages = Math.ceil(posts.length / limit);
  let end = limit * currentPage;
  let start = end - limit;
  let array = posts?.slice(start, end);

  return (
    <>
      <h2>All Posts</h2>
      <button
        style={{ margin: "5px" }}
        disabled={currentPage == 1}
        onClick={handlePrev}
      >
        Prev{" "}
      </button>
      <button disabled={currentPage == totalPages} onClick={handleNext}>
        Load More...
      </button>
      <h4>Current Page : {currentPage}</h4>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something Went Wrong...</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {array.length > 0 &&
          array.map((post, idx) => {
            return (
              <div key={idx}>
                <h2>Title : {post.title}</h2>
                <p>Body : {[post.body]}</p>
              </div>
            );
          })}
      </div>
      <h4>Go to Pages</h4>
      <button style={{ margin: "5px" }} disabled={currentPage==2} onClick={() => setPage((page) => page - 2)}>
        {currentPage - 2}
      </button>{" "}
      <button style={{ margin: "5px" }} disabled={currentPage==1} onClick={() => setPage((page) => page - 1)}>
        {currentPage - 1}
      </button>{" "}
      <button style={{ margin: "5px" }} onClick={() => setPage((page) => page +1)}>{currentPage + 1}</button>
      <button style={{ margin: "5px" }} onClick={() => setPage((page) => page + 2)}>{currentPage + 2}</button>
    </>
  );
}

// https://jsonplaceholder.typicode.com/posts
