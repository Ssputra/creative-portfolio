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

    const scene = section.closest("section") ?? section
    let cleanupTilt = () => {}
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      if (reduceMotion) {
        gsap.set(".parallax-layer, .hero-orbit, .hero-copy, .hero-visual", { clearProps: "all" })
        return
      }

      gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: scene,
          start: "top 70%",
          end: "bottom top",
          toggleActions: "restart none restart reset",
        },
      })
        .fromTo(".hero-copy", { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.8 })
        .fromTo(".hero-visual", { autoAlpha: 0, scale: 0.94, y: 18 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.9 }, "-=0.55")

      gsap.to(".hero-orbit", {
        rotate: 360,
        duration: 28,
        ease: "none",
        repeat: -1,
      })

      gsap.to(".hero-orbit--inner", {
        rotate: -360,
        duration: 18,
        ease: "none",
        repeat: -1,
      })

      const visual = scene.querySelector<HTMLElement>(".hero-visual")
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches
      if (visual && hasFinePointer) {
        const handlePointerMove = (event: PointerEvent) => {
          const bounds = visual.getBoundingClientRect()
          const x = (event.clientX - bounds.left) / bounds.width - 0.5
          const y = (event.clientY - bounds.top) / bounds.height - 0.5

          gsap.to(visual, {
            rotationY: x * 8,
            rotationX: y * -8,
            transformPerspective: 900,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          })
        }

        const resetTilt = () => {
          gsap.to(visual, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "power3.out",
          })
        }

        visual.addEventListener("pointermove", handlePointerMove)
        visual.addEventListener("pointerleave", resetTilt)

        cleanupTilt = () => {
          visual.removeEventListener("pointermove", handlePointerMove)
          visual.removeEventListener("pointerleave", resetTilt)
        }
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
    }, scene)

    return () => {
      cleanupTilt()
      context.revert()
    }
  }, [])

  return (
    <div ref={sectionRef} className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="hero-orbit pointer-events-none absolute left-1/2 top-1/2 h-[min(72vw,680px)] w-[min(72vw,680px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/10">
        <div className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-purple-300/70 shadow-[0_0_24px_rgba(216,180,254,0.7)]" />
      </div>
      <div className="hero-orbit hero-orbit--inner pointer-events-none absolute left-1/2 top-1/2 h-[min(54vw,500px)] w-[min(54vw,500px)] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full border border-pink-300/10 border-dashed" />
      <div className="parallax-layer parallax-layer--slow absolute -top-24 left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-blob" />
      <div className="parallax-layer parallax-layer--medium absolute top-40 right-10 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="parallax-layer parallax-layer--medium absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl animate-blob animation-delay-4000" />
    </div>
  )
}
