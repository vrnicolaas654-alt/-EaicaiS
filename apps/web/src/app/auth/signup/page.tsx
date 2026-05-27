'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name })
      })
      if (res.ok) {
        const data = await res.json()
        localStorage.setItem('token', data.access_token)
        window.location.href = '/dashboard'
      }
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="frosted-card p-8 rounded-2xl max-w-md w-full"
      >
        <h1 className="text-3xl font-bold mb-2 text-center">Get Started</h1>
        <p className="text-gray-400 text-center mb-8">Create your EAICAIS account</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-card border border-primary border-opacity-20 rounded-lg px-4 py-2" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-card border border-primary border-opacity-20 rounded-lg px-4 py-2" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-card border border-primary border-opacity-20 rounded-lg px-4 py-2" required />
          <button type="submit" disabled={loading} className="w-full gradient-primary py-2 rounded-lg font-semibold">Create Account</button>
        </form>
        <p className="text-center text-gray-400 mt-6">Have account? <Link href="/auth/login" className="text-accent">Sign in</Link></p>
      </motion.div>
    </div>
  )
}