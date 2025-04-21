import Link from 'next/link'

export default function TeamPage() {
  const teamMembers = [
    { name: 'Yuvraj Bhalla', emoji: '🧠' },
    { name: 'Japsanjam Singh', emoji: '💻' },
    { name: 'Amandeep Singh', emoji: '🛠️' },
  ]

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('background.avif')",
      }}
    >
      <div className="relative z-10 bg-gray-800/40 backdrop-blur-lg p-10 rounded-xl text-white shadow-xl w-full max-w-2xl text-center border border-white/20">
        <h1 className="text-4xl font-bold mb-8 text-white">👥 Meet the Team</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-800/80 rounded-xl p-6 text-white transition border border-amber-100"
            >
              <div className="text-3xl mb-2">{member.emoji}</div>
              <p className="text-lg font-medium">{member.name}</p>
            </div>
          ))}
        </div>

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
