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
        <footer>
          <small>
            Open-source code by{" "}
            <a
              href="https://www.linkedin.com/in/maranda-valentin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maranda Valentin
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
