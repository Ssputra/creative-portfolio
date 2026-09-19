"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function GsapParallaxBackground() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      if (reduceMotion) {
        gsap.set(".parallax-layer", { yPercent: 0 })
        return
      }

      gsap.to(".parallax-layer--slow", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      })

      gsap.to(".parallax-layer--medium", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <div ref={sectionRef} className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="parallax-layer parallax-layer--slow absolute -top-24 left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-blob" />
      <div className="parallax-layer parallax-layer--medium absolute top-40 right-10 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="parallax-layer parallax-layer--medium absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl animate-blob animation-delay-4000" />
    </div>
  )
}
