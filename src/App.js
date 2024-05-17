import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World from Johannesburg</p>
        <a
          className="App-link"
          href="https://github.com/mqhelem/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Nomqhele Mhlanga
        </a>
        <Weather city="New york" />
      </header>
    </div>
  );
}

export default App;
