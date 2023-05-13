import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <br />
        <small>
          <a href="https://github.com/anetabarone/weather-react" target="blank">
            Open-sourced code
          </a>{" "}
          by Aneta Barone, 2023
        </small>
      </header>
    </div>
  );
}

export default App;
