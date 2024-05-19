import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState("Johannesburg");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showWeatherDetails(response) {
    setLoaded(true);
    setWeather({
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeatherDetails);
  }
  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your city"
          className="cityName"
          onChange={updateCity}
        />
        <input type="submit" value="Search city" />
      </form>
      <hr></hr>
      <h1>{city}</h1>
    </div>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <h1>{setCity}</h1>
        <div className="weather">
          <p className="details">
            Temperature: <strong>{Math.round(weather.temperature)}℃ </strong>,
            Humidity: <strong>{Math.round(weather.humidity)}%</strong>
            <br />
            Description: {weather.description}, Wind:{" "}
            <strong>
              {Math.round(weather.wind)}
              km/hr
            </strong>
          </p>
          <img class="icon" src={weather.icon} alt={weather.description} />
        </div>
      </div>
    );
  } else {
    return form;
  }
}
