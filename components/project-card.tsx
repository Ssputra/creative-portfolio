"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
}

export function ProjectCard({ title, description, tags, image, demoUrl, repoUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.05 }}
      className="group h-full"
    >
      <div
        className="relative h-full overflow-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800 transition-all duration-300 group-hover:border-purple-500/50 hover:bg-zinc-900/80 flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative overflow-hidden h-48 bg-zinc-950">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          />
        </div>

        <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
          <div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
              {title}
            </h3>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-3">
              {description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-zinc-800 text-zinc-300 border border-zinc-700/60 text-xs font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-zinc-800/80 mt-auto">
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs gap-1.5" asChild>
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5" />
                Code
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white border-0 text-xs gap-1"
              asChild
            >
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
