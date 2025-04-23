'use client'
import Link from 'next/link'

export default function NavButton({ href, icon: Icon, label }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white border border-white/30 rounded-lg shadow hover:bg-white/30 transition"
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  )
}
