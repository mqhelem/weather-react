export default function Forecast() {
  function forecastDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }
  return (
    <div class="row">
      <div class="c0l-2">
        <div class="forecast-day">${forecastDay}</div>

        <div class="weather-temperature">
          <span class="max-temperature">19°</span>
          <span class="min-temperature">16</span>
        </div>
      </div>
    </div>
  );
}
