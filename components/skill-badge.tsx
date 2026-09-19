"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 p-5 h-full transition-all duration-300 hover:border-purple-500/50 hover:bg-zinc-900/80 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-white text-sm group-hover:text-purple-300 transition-colors">
              {name}
            </span>
            <span className="text-xs font-mono text-zinc-400 font-medium">
              {level}%
            </span>
          </div>

          <div className="relative h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
