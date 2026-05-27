'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto mb-20">
        <div className="text-2xl font-bold neon-accent">EAICAIS</div>
        <Link href="/" className="hover:text-accent">Back</Link>
      </nav>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
        <p className="text-center text-gray-400 mb-16">Choose your plan</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[{name: 'Free', price: '$0', features: ['Limited AI', 'Basic features']}, {name: 'Pro', price: '$29', features: ['Unlimited AI', 'Calendar AI', 'Image/Video'], highlight: true}, {name: 'Enterprise', price: 'Custom', features: ['Team collab', 'Advanced automation']}].map((p, i) => (
            <motion.div key={i} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} className={`frosted-card p-8 rounded-2xl ${p.highlight ? 'ring-2 ring-accent' : ''}`}>
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <div className="text-3xl font-bold mb-6">{p.price}</div>
              <ul className="space-y-2 mb-8">{p.features.map((f, j) => <li key={j} className="text-gray-300">✓ {f}</li>)}</ul>
              <Link href="/auth/signup" className="block text-center py-2 rounded-lg font-semibold bg-primary">Get Started</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}