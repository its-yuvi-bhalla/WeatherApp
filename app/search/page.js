'use client'

import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function SearchPage() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')

  const suggestedCities = ['Toronto', 'Vancouver', 'Calgary', 'New York']

  const fetchWeather = async (selectedCity) => {
    const queryCity = selectedCity || city
    if (!queryCity) {
      setError('⚠️ Please enter a city.')
      setWeather(null)
      return
    }

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      )
      setWeather(res.data)
      setError('')
      setCity(queryCity)
    } catch {
      setError('❌ City not found. Try again.')
      setWeather(null)
    }
  }

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-4 flex items-center justify-center"
      style={{
        backgroundImage: "url('background.avif')",
      }}
    >
      <div className="relative z-10 bg-gray-800/40 backdrop-blur-lg p-10 rounded-xl text-white shadow-xl w-full max-w-2xl text-center border border-white/20">
        <h1 className="text-4xl font-bold mb-6 flex justify-center items-center gap-2 text-white">
          🔍 Search Weather
        </h1>

        {/* Input & Button */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800/90 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => fetchWeather()}
            className="px-6 py-2 bg-pink-800 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {/* Suggested Cities */}
        <div className="flex flex-wrap gap-3 justify-around mb-6">
          {suggestedCities.map((c, idx) => (
            <button
              key={idx}
              onClick={() => fetchWeather(c)}
              className="px-4 py-1.5 bg-gray-800 border border-gray-500 text-white rounded-full hover:bg-gray-700 transition text-sm"
            >
              📍 {c}
            </button>
          ))}
        </div>

        {/* Error */}
        {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}

        {/* Weather Result */}
        {weather && (
          <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 mt-4">
            <h2 className="text-2xl font-bold mb-1">📍 {weather.name}</h2>
            <p className="text-gray-300 capitalize mb-3">☁️ {weather.weather[0].description}</p>
            <div className="flex justify-between text-lg text-gray-100">
              <p>🌡️ {weather.main.temp}°C</p>
              <p>💨 {weather.wind.speed} m/s</p>
            </div>
          </div>
        )}

        {/* Back Button */}
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 px-5 py-2 bg-gray-800 text-white border border-gray-600 rounded-full shadow hover:bg-gray-700 transition"
        >
          ← <span className="font-medium">Back to Home</span>
        </Link>
      </div>
    </main>
  )
}
