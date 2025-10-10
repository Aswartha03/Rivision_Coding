import "./App.css";
import LoginUser from "./components/Login";
import SignUpUser from "./components/Signup";

function App() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Redux Authentication App</h1>
        <SignUpUser />
        <hr />
        <LoginUser />
      </div>
    </>
  );
}

export default App;
