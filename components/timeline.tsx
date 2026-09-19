"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Lead the frontend development team in building a SaaS platform. Implemented new features, improved performance, and mentored junior developers.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Co.",
    period: "2019 - 2021",
    description:
      "Developed responsive web applications using React and TypeScript. Collaborated with designers and backend engineers to deliver high-quality products.",
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    period: "2017 - 2019",
    description:
      "Built websites and web applications for various clients. Worked with HTML, CSS, JavaScript, and WordPress.",
  },
  {
    title: "Intern",
    company: "Startup Hub",
    period: "2016 - 2017",
    description: "Assisted in developing web applications and learned modern web development practices.",
  },
]

export function Timeline() {
  const isMobile = useMobile()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  })

  return (
    <div ref={containerRef} className="space-y-12 relative">
      {/* Dedicated central timeline connector line with smooth scroll-driven fill */}
      {!isMobile && (
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-zinc-800/80 pointer-events-none overflow-hidden">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="w-full h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-600 origin-top"
          />
        </div>
      )}
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.05 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-zinc-900/90 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {experience.title}
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/60 shrink-0">
                    {experience.period}
                  </span>
                </div>
                <div className="text-sm font-medium text-purple-400 mb-3">
                  {experience.company}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-5 h-5 rounded-full bg-zinc-950 border-2 border-purple-500 z-10 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.05 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
