'use client'

export default function TeamMemberCard({ name, role, Icon, linkedInUrl }) {
  return (
    <a
      href={linkedInUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 rounded-xl p-6 text-white shadow hover:shadow-lg transition flex flex-col items-center hover:bg-gray-700"
    >
      <Icon className="w-8 h-8 mb-2 text-blue-400" />
      <p className="text-lg font-medium">{name}</p>
      {role && <p className="text-sm text-gray-400 mt-1">{role}</p>}
    </a>
  )
}
