function WeatherDetails({ weather }) {
  if (!weather) return null;

  // Assuming `data` is the API response object
  const sunriseTimestamp = weather.sys.sunrise; // UNIX timestamp
  const sunsetTimestamp = weather.sys.sunset; // UNIX timestamp

  // Convert UNIX timestamp to Date object
  const sunriseDate = new Date(sunriseTimestamp * 1000); // Convert seconds to milliseconds
  const sunsetDate = new Date(sunsetTimestamp * 1000);

  // Format time into a readable format (e.g., HH:MM AM/PM)
  const sunriseTime = sunriseDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunsetTime = sunsetDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const icon = weather.weather[0].icon;
  const tempInCelsius = Math.round(weather.main.temp - 273.15);
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="weather-container">
      <div className="weather-details">
        <div className="first-container">
          <h2 className="weather-city">
            {weather.name} , {weather.sys.country}
          </h2>
          <img src={iconUrl} alt="Weather Icon" />
          <p>Weather: {weather.weather[0].description}</p>
          <p>Temperature: {tempInCelsius}°C</p>
        </div>
        <div className="second-container">
          <p className="humidity">Humidity : {weather.main.humidity}%</p>
          <img src="humid.png" alt="Humidity img" className="humid-icon" />
          <p className="pressure">Pressure: {weather.main.pressure} hPa</p>
          <p className="visibility">
            Visibility:
            {(weather.visibility / 1000).toFixed(1)}
            <span>km</span>
          </p>
        </div>
        <div className="third-container">
          <p className="speed">Wind Speed : {weather.wind.speed} m/s</p>
          <img alt="wind img" src="wind.png" className="wind" />
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
