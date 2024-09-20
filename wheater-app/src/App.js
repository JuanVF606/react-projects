// App.js
import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo.js';
import MapComponent from './MapComponent.js';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [position, setPosition] = useState([-33.4489, -70.6693]); // Santiago como posición inicial

  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const getWeather = async () => {
    if (!city) {
      setError('Please enter a city in Chile.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},CL&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeatherData(data);
        setPosition([data.coord.lat, data.coord.lon]);
        setError('');
      } else {
        setError('City not found.');
      }
    } catch (error) {
      setError('Error fetching weather data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <header className="w-full max-w-4xl mb-8 text-center">
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">Professional Weather App</h1>
        <p className="text-lg text-gray-600 mt-3">
          Get accurate weather updates for any city in Chile.
        </p>
      </header>

      <div className="w-full max-w-xl mb-6">
        <label htmlFor="city-input" className="block text-lg font-semibold text-gray-700 mb-2">City (Chile):</label>
        <input
          id="city-input"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-lg"
        />
      </div>

      <button
        onClick={getWeather}
        className="bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 shadow-md focus:ring-2 focus:ring-blue-500 mb-8"
        disabled={loading}
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : (
          'Get Weather'
        )}
      </button>

      {error && <p className="text-red-500 text-lg mb-4">{error}</p>}

      {weatherData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          <WeatherInfo weatherData={weatherData} />
          <MapComponent position={position} weatherData={weatherData} />
        </div>
      )}
    </div>
  );
}

export default App;
