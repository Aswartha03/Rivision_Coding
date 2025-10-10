// The <Document /> component should contain two major elements,
// textarea and a div acting as the document container.
import React, { useState } from "react";

export function DocumentPage() {
  let [data, setData] = useState("");
  let [todos, setTodos] = useState([]);
  let [first,setFirst] = useState(0)
  function handleSubmit(e) {
    if (e.key == "Enter" ) {
      e.preventDefault();
      setTodos((prev) => [data, ...prev]);
      setData("");
      setTimeout(()=>{
        setFirst("null")
      },2000)
    }
  }
  return (
    <>
      <div>
        <textarea
          style={{
            margin: "10px",
            width: "200px",
            padding: "10px",
          }}
          name="data"
          value={data}
          onKeyDown={handleSubmit}
          placeholder="Enter Text"
          onChange={(e) => setData(e.target.value)}
        ></textarea>
      </div>

      <div>
        {todos?.length > 0 && (
          <ul>
            {todos.map((todo, i) => (
              <li
                key={i}
                style={{
                  color: i == first ? "blue" : "gray",
                }}
              >
                Data : {todo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
