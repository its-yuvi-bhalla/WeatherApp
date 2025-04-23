'use client'
export default function SuggestedCities({ cities, onCityClick }) {
  return (
    <div className="flex flex-wrap gap-3 justify-around mb-6">
      {cities.map((city, idx) => (
        <button
          key={idx}
          onClick={() => onCityClick(city)}
          className="px-4 py-1.5 bg-gray-800 border border-gray-500 text-white rounded-full hover:bg-gray-700 transition text-sm"
        >
          {city}
        </button>
      ))}
    </div>
  )
}
