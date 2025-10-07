import React, { useState } from "react";

export function Joke() {
  let [joke, setJoke] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  async function fetchJoke() {
    setJoke("")
    setLoading(true);
    try {
      let res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      let result = await res.json();
      setLoading(false);
      setJoke(result);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
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
    </>
  );
}
