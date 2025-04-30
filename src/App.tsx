import React, { useEffect, useState } from 'react';
import './App.css';

const API_KEY = '5aeb9552096f4348b0773319253004';

function App() {
  const [weather, setWeather] = useState<any>(null);
  const [city, setCity] = useState('Lahore');

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">F3 WeatherMate</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 border rounded mb-4"
        placeholder="Enter city name"
      />
      {weather && (
        <div className="text-center bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold">{weather.name}</h2>
          <p className="text-lg">{weather.weather[0].description}</p>
          <p className="text-xl font-bold">{weather.main.temp} °C</p>
        </div>
      )}
    </div>
  );
}

export default App;