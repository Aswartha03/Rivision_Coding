import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Redux/actions";

export function DisplayPosts() {
  let { loading, posts, error } = useSelector((state) => state.postsFetch);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      {loading && <p>Loading Posts....</p>}
      {error && <p>Error : {error}</p>}

      {posts?.length && <h3>All Posts</h3>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)",gap:"10px" }}>
        {posts?.length > 0 &&
          posts.slice(0, 9).map((post, i) => (
            <div key={i}>
              <p>Title : {post.title}</p>
              <p>Body : {post.body}</p>
            </div>
          ))}
      </div>
    </>
  );
}
