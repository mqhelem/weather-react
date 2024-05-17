import "./App.css";
import SearchCity from "./Weather";

function App() {
  return (
    <div class="weather-app">
      <form id="searchForm">
        <input class="city" id="city" placeholder="Enter your city" />
        <input class="submit" type="submit" value="Search" />
      </form>

      <div class="weather">
        <div>
          <h1 class="current-city" id="current-city">
            Paris
          </h1>
          <p class="weather-details">
            <span id="time"></span>, <span id="description"></span> <br />
            Humidity: <strong id="humidity"></strong>, Wind:
            <strong id="wind"></strong>
          </p>
        </div>
        <div class="current-temperature">
          <img
            class="icon"
            id="icon"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          />
          <span class="temperature" id="temperature"></span>
          <span class="unit">°C</span>
        </div>
      </div>
      <div class="weather-forecast" id="forecast"></div>
      <footer>
        Coded by
        <a href="https://github.com/mqhelem">Nomqhele Mhlanga,</a> source code
        hosted in
        <a href="https://github.com/mqhelem/weather-react">Github,</a>
        app available at
        <a href="https://weatherfourcast.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}

export default App;
