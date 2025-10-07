import React, { useState } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

export function WidthTracker() {
  let { width } = useWindowWidth();
  let [theme, setTheme] = useState(localStorage.getItem("theme") || "red");
  function handleTheme() {
    let prevTheme = localStorage.getItem("theme");
    let newtheme = prevTheme == "red" ? "green" : "red";
    localStorage.setItem("theme", newtheme);
    setTheme(newtheme);
  }
  return (
    <>
      <h3>Theme : {theme}</h3>
      <h3 style={{ color: theme }}>Window Width : {width}</h3>
      {width < 768 && <p>Mobile View</p>}
      {width >= 1024 && <p>Desktop View</p>}
      {width > 768 && width < 1024 && <p>Tablet View</p>}

      <button onClick={handleTheme}>Toggle Theme</button>
    </>
  );
}
