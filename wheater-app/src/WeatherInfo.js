// WeatherInfo.js
import React from 'react';
import { FaTemperatureHigh, FaWind, FaTint, FaSun, FaCloudSun } from 'react-icons/fa';

const WeatherInfo = ({ weatherData }) => (
  <div className="weather-info p-8 bg-white rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6">{weatherData.name}</h2>
    <div className="grid grid-cols-2 gap-6 text-lg text-gray-600">
      <WeatherDetail icon={FaTemperatureHigh} label="Temperature" value={`${weatherData.main.temp}°C`} />
      <WeatherDetail icon={FaTint} label="Humidity" value={`${weatherData.main.humidity}%`} />
      <WeatherDetail icon={FaWind} label="Wind Speed" value={`${weatherData.wind.speed} m/s`} />
      <WeatherDetail icon={FaCloudSun} label="Condition" value={weatherData.weather[0].description} />
      <WeatherDetail icon={FaSun} label="Sunrise" value={new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()} />
      <WeatherDetail icon={FaSun} label="Sunset" value={new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()} />
    </div>
  </div>
);

const WeatherDetail = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-3">
    <Icon className="text-red-500" />
    <p>{label}: {value}</p>
  </div>
);

export default React.memo(WeatherInfo);
