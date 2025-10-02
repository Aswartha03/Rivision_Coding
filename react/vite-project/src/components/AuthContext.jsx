import React from "react";

export let authContext = createContext("");
export function AuthContext({ children }) {
  let [token, setToken] = useState(() => localStorage.getItem("token"));
  let login = (newToken) => {};
  let logout = () => {};
  return (
    <>
      <authContext.Provider value={{ token, login, logout }}>
        <children />
      </authContext.Provider>
    </>
  );
}
