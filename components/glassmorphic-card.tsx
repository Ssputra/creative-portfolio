"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
}

export function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.05 }}
      className="h-full"
    >
      <div className="relative overflow-hidden rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-6 md:p-8 transition-all duration-300 hover:border-purple-500/50 hover:bg-zinc-900/80 shadow-xl group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  )
}
