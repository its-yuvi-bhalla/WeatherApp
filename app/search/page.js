'use client'

import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

import SearchInput from '../../components/search/searchInput'
import SuggestedCities from '../../components/search/suggestedCities'
import WeatherCard from '../../components/search/weatherCard'

export default function SearchPage() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')
  const [cityFact, setCityFact] = useState('')

  // suggested cities
  const suggestedCities = ['Toronto', 'Vancouver', 'Calgary', 'New York']

  // retrieve time (use day.js or Date())
  const getCityTime = (timezoneOffset) => {
    const localDate = new Date()
    const utc = localDate.getTime() + localDate.getTimezoneOffset() * 60000
    const cityTime = new Date(utc + 1000 * timezoneOffset)
    return cityTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  // fetch details on clicking search 
  // params: city
  const fetchWeather = async (selectedCity) => {
    const queryCity = selectedCity || city
    if (!queryCity) {
      setError('Please enter a city.')
      setWeather(null)
      setCityFact('')
      return
    }

    try {
      // retrieve weather data from API
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      )
      setWeather(res.data)
      setError('')
      setCity(queryCity)
      console.log(res)

      // Wikipedia API for facts 
      // takes the city in input
      const wikiRes = await axios.get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${queryCity}`
      )
      if (wikiRes.data?.extract) {
        setCityFact(wikiRes.data.extract)
      } else {
        setCityFact('')
      }
    } catch {
      // error handling
      setError('City not found. Try again.')
      setWeather(null)
      setCityFact('')
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
        <h1 className="text-4xl font-bold mb-6 text-white">Search Weather</h1>

        <SearchInput city={city} setCity={setCity} onSearch={() => fetchWeather()} />

        <SuggestedCities cities={suggestedCities} onCityClick={fetchWeather} />

        {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}

        {weather && (
          <>
            <WeatherCard weather={weather} cityTime={getCityTime(weather.timezone)} />
            {cityFact && (
              <div className="mt-6 bg-gray-700/70 p-4 rounded text-left text-sm text-white shadow">
                <h3 className="text-lg font-semibold mb-2">📘 About {weather.name}</h3>
                <p>{cityFact}</p>
              </div>
            )}
          </>
        )}

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
