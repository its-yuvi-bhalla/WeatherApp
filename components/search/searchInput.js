'use client'
export default function SearchInput({ city, setCity, onSearch }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800/90 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onSearch}
        className="px-6 py-2 bg-pink-800 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  )
}
