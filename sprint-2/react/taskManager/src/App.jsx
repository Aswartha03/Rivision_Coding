import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { AddTask } from "./pages/AddTask";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtask" element={<AddTask />} />
      </Routes>
    </>
  );
}

export default App;
