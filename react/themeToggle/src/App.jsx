import { ThemeProvider } from "./components/context";
import ThemeToggle from './components/toggle';
function App() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Theme Toggle App</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
