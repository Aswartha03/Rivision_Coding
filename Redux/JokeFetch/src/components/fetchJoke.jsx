import React, { useState } from "react";

export function Joke() {
  let [joke, setJoke] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let [jokes, setJokes] = useState([]);
  async function fetchJoke() {
    setJoke("");
    setLoading(true);
    try {
      let res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      let result = await res.json();
      setLoading(false);
      setJoke(result);
      setJokes((prev) => [result, ...prev].slice(0, 5));
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }
  function handleClearingHistory(){
    setJokes([])
  }
  return (
    <>
      <button onClick={fetchJoke}>Fetch Joke</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error}</p>}
      {joke && (
        <div key={joke.id}>
          <p>Type : {joke.type}</p>
          <p>Setup : {joke.setup}</p>
          <p>Punchline : {joke.punchline}</p>
        </div>
      )}

      {jokes.length >0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Last 5 Jokes:</h3>
          <ul>
            {jokes.map((j, idx) => (
              <li key={idx}>
                <strong>{j.setup}</strong> — {j.punchline}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button disabled={jokes.length==0} onClick={handleClearingHistory}>Clear History</button>
    </>
  );
}
