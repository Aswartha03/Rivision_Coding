import "./App.css";
import { ContextExample } from "./contexts/Name";
import { NameWithoutContext } from "./contexts/NameWithout";
import { Posts } from "./pages/posts";


function App() {
  return <>
  <NameWithoutContext/>
  <ContextExample/>
 <Posts/>
  </>;
}

export default App;
