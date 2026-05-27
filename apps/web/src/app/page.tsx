'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold neon-accent">EAICAIS</div>
        <div className="flex gap-8">
          <Link href="#features" className="hover:text-accent transition">Features</Link>
          <Link href="/pricing" className="hover:text-accent transition">Pricing</Link>
          <Link href="/auth/login" className="px-6 py-2 bg-primary rounded-lg hover:bg-opacity-90 transition">Login</Link>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-bold mb-6">AI Executive Operating System</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Automate your calendar, triage emails, generate content, and run your business with AI</motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 justify-center"
        >
          <Link href="/auth/signup" className="px-8 py-3 gradient-primary rounded-lg font-semibold hover:shadow-lg transition">Start Free</Link>
          <button className="px-8 py-3 border border-accent rounded-lg hover:bg-accent hover:text-background transition">Watch Demo</button>
        </motion.div>
      </section>
    </div>
  )
}