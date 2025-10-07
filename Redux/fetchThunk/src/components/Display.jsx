import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";

export function DisplayData() {
  let { loading, data, error } = useSelector((state) => state.fetch);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading....</p>}
      {error && <p>Error : {error}</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeate(2,1fr)",
          gap: "10px",
        }}
      >
        {data &&
          data.map((item, i) => (
            <div key={i}>
              <p>Title : {item.title}</p>
            </div>
          ))}
      </div>
    </>
  );
}
