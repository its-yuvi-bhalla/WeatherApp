'use client'

import Link from 'next/link'
import TeamMemberCard from '../../components/team/teamMemberCard'
import { Brain, Laptop2, Hammer } from 'lucide-react'


export default function TeamPage() {
  const backgroundImage = "/background.avif";
  const linkedInLink = 'https://www.linkedin.com/in/'
  const teamMembers = [
    {
      name: 'Yuvraj Bhalla',
      icon: Brain,
      linkedInUrl: `${linkedInLink}yuvraj-bhalla/`
    },
    {
      name: 'Japsanjam Singh',
      icon: Laptop2,
      linkedInUrl: `${linkedInLink}japsanjam-singh-7094ab2a3/`
    },
    {
      name: 'Amandeep Singh',
      icon: Hammer,
      linkedInUrl: `${linkedInLink}amandeep-singh-46491726a/`
    },
  ]

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          `url('${backgroundImage}')`,
      }}
    >
      <div className="bg-gray-900/80 backdrop-blur-lg p-10 rounded-xl shadow-xl w-full max-w-3xl text-center border border-white/20">
        <h1 className="text-4xl font-bold mb-8 text-white">Meet the Team</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <TeamMemberCard
              key={idx}
              name={member.name}
              Icon={member.icon}
              linkedInUrl={member.linkedInUrl}
            />
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
