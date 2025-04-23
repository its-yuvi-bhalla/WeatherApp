'use client'
import {
  MapPin,
  Cloud,
  Clock,
  Thermometer,
  Wind,
  Droplets,
  ThermometerSnowflake,
} from 'lucide-react'

export default function WeatherCard({ weather, cityTime }) {
  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 mt-4">
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
        <MapPin className="w-5 h-5" /> {weather.name}
      </h2>
      <p className="text-gray-300 flex items-center gap-2 mb-3 capitalize">
        <Cloud className="w-5 h-5" /> {weather.weather[0].description}
      </p>
      <p className="text-sm text-gray-400 flex items-center gap-2 mb-3">
        <Clock className="w-4 h-4" />
        <span className="text-white">{cityTime}</span>
      </p>
      <div className="grid grid-cols-2 gap-4 text-lg text-gray-100">
        <p className="flex items-center gap-2">
          <Thermometer className="w-5 h-5" />
          Temp: {weather.main.temp}°C
        </p>
        <p className="flex items-center gap-2">
          <Wind className="w-5 h-5" />
          Wind: {weather.wind.speed} m/s
        </p>
        <p className="flex items-center gap-2">
          <Droplets className="w-5 h-5" />
          Humidity: {weather.main.humidity}%
        </p>
        <p className="flex items-center gap-2">
          <ThermometerSnowflake className="w-5 h-5" />
          Feels like: {weather.main.feels_like}°C
        </p>
      </div>
    </div>
  )
}
