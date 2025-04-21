import Link from 'next/link'

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-4 flex items-center justify-center"
      style={{
        backgroundImage: `url('background.avif')`,
      }}
    >
      
      <div className="relative z-10 bg-gray-800/40 backdrop-blur-lg p-10 rounded-xl text-white shadow-xl w-full max-w-2xl text-center border border-white/20">
        <div className="text-6xl mb-4">⛅</div>
        <h1 className="text-4xl font-bold mb-3">WeatherApp</h1>
        <p className="text-lg text-gray-200 mb-6">
          Get real-time weather updates for any city — fast, modern and easy to use.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/search"
            className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white border border-white/30 rounded-lg shadow hover:bg-white/30 transition"
          >
            🔍 <span>Search Weather</span>
          </Link>
          <Link
            href="/team"
            className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white border border-white/30 rounded-lg shadow hover:bg-white/30 transition"
          >
            👨‍💻 <span>Meet the Team</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
