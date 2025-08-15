import React, { useState, useEffect } from "react";

export function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div
      style={{
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        backgroundColor: isOnline ? "green" : "red",
        display: "inline-block",
        margin: "20px",
      }}
    >
    </div>
  );
}
