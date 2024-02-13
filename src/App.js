import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>
        <small>Open-source code by Maranda Valentin</small>
      </footer>
    </div>
  );
}
