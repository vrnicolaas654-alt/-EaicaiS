'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-card p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold neon-accent">EAICAIS Dashboard</h1>
          <Link href="/" className="text-sm hover:text-accent">Logout</Link>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[{label: 'Chats', value: '12', icon: '💬'}, {label: 'Events', value: '8', icon: '📅'}, {label: 'Emails', value: '156', icon: '📧'}, {label: 'Generated', value: '24', icon: '✨'}].map((s, i) => (
            <motion.div key={i} initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: i * 0.1}} className="frosted-card p-6 rounded-xl">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
              <div className="text-2xl font-bold mt-2">{s.value}</div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div className="frosted-card p-8 rounded-xl">
            <h2 className="text-xl font-bold mb-4">🤖 AI Assistant</h2>
            <p className="text-gray-400 mb-4">Chat with your AI executive assistant</p>
            <button className="px-4 py-2 bg-primary rounded-lg">Open Chat</button>
          </motion.div>
          <motion.div className="frosted-card p-8 rounded-xl">
            <h2 className="text-xl font-bold mb-4">📅 Calendar AI</h2>
            <p className="text-gray-400 mb-4">Manage calendar with AI</p>
            <button className="px-4 py-2 bg-primary rounded-lg">Open Calendar</button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}