function WeatherDetails({ weather }) {
  if (!weather) return null;

  // Convert Kelvin to Celsius
  const tempInCelsius = Math.round(weather.temp - 273.15);

  return (
    <div className="weather-container">
      <div className="weather-details">
        <h2 className="weather-city"> {weather.cityName}</h2>
        <p>Temperature: {tempInCelsius}°C</p>
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind Speed: {weather.windSpeed} m/s</p>
        <p>Pressure: {weather.pressure} hPa</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
