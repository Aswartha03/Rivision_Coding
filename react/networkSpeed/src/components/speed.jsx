import { useState } from "react";

const SpeedTest = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkSpeed = async () => {
    setLoading(true);
    setStatus(null);

    const testUrl = "https://jsonplaceholder.typicode.com/posts/1"; 
    const startTime = performance.now();

    try {
      await fetch(testUrl, { cache: "no-store" }); // avoid caching
      const endTime = performance.now();

      const duration = endTime - startTime; // ms

      // Threshold: < 500ms = fast, otherwise slow
      if (duration < 500) {
        setStatus("fast");
      } else {
        setStatus("slow");
      }
    } catch (err) {
      setStatus("error");
      console.error("Speed test failed:", err);
    }

    setLoading(false);
  };

  return (
    <div className="speed-test">
      <h2>🌐 Network Speed Test</h2>
      <button onClick={checkSpeed} disabled={loading}>
        {loading ? "Testing..." : "Check Speed"}
      </button>

      {status === "fast" && (
        <p className="fast">🚀 Fast Connection</p>
      )}
      {status === "slow" && (
        <p className="slow">🐢 Slow Connection</p>
      )}
      {status === "error" && (
        <p className="error">❌ Could not test speed.</p>
      )}
    </div>
  );
};

export default SpeedTest;
