import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Loader from "./Loader";
import Error from "./Error";
import WeatherDetails from "./WeatherDetails";

const KEY = "228c77c56b377c0f59a980d7ca909fde";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // New state for tracking search
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [isBox, setIsBox] = useState(false);

  useEffect(
    function () {
      const fetchWeather = async () => {
        if (!searchQuery || !isBox) {
          return;
        }

        try {
          setIsLoading(true);
          setIsError("");

          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&APPID=${KEY}`
          );

          if (!res.ok) throw new Error("Failed to Fetch the City");

          const data = await res.json();
          if (data.response === "False") throw new Error("City not found");

          setWeather(data);
          console.log(data);
        } catch (err) {
          setIsError(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchWeather();
    },
    [searchQuery, isBox] // Changed dependency from input to searchQuery
  );

  const handleSearch = (searchInput) => {
    if (searchInput.length >= 3) {
      setSearchQuery(searchInput); // Store the search term
      setInput(""); // Clear the input
      setIsBox(true);
    }
  };

  return (
    <div>
      <Navbar input={input} setInput={setInput} onSearch={handleSearch} />
      {isBox && (
        <>
          {isLoading && <Loader />}
          {!isLoading && !isError && weather && (
            <WeatherDetails weather={weather} />
          )}
          {isError && <Error message={isError} />}
        </>
      )}
    </div>
  );
}
