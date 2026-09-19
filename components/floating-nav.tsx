"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface NavItem {
  name: string
  href: string
  id: string
}

const navItems: NavItem[] = [
  { name: "About", href: "#about", id: "about" },
  { name: "Certificates", href: "#certificates", id: "certificates" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" },
]

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("about")
  const isMobile = useMobile()

  // Sliding pill position state (pure translation, NO scale distortion)
  const navContainerRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [indicator, setIndicator] = useState<{ left: number; width: number; ready: boolean }>({
    left: 0,
    width: 0,
    ready: false,
  })

  // Lock scroll-spy while smooth scrolling from click
  const isClickingRef = useRef(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Update sliding pill position based on active tab
  const updateIndicator = useCallback(() => {
    const activeIndex = navItems.findIndex((item) => item.id === activeSection)
    if (activeIndex !== -1 && tabRefs.current[activeIndex] && navContainerRef.current) {
      const activeEl = tabRefs.current[activeIndex]!
      const containerEl = navContainerRef.current!
      const tabRect = activeEl.getBoundingClientRect()
      const containerRect = containerEl.getBoundingClientRect()

      setIndicator({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
        ready: true,
      })
    }
  }, [activeSection])

  useEffect(() => {
    updateIndicator()
    window.addEventListener("resize", updateIndicator)
    return () => window.removeEventListener("resize", updateIndicator)
  }, [updateIndicator])

  // Precision viewport scroll spy
  const handleScroll = useCallback(() => {
    // Reveal nav smoothly with hysteresis (enter > 120px, exit < 60px)
    const scrollY = window.scrollY
    setIsVisible((prev) => {
      if (scrollY > 120) return true
      if (scrollY < 60) return false
      return prev
    })

    // If user clicked, postpone scroll-spy updates until smooth scroll is 100% finished
    if (isClickingRef.current) {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = setTimeout(() => {
        isClickingRef.current = false
      }, 150)
      return
    }

    // 1. Bottom of page priority: if scrolled to the bottom, active is always "contact"
    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100

    if (isAtBottom) {
      setActiveSection("contact")
      return
    }

    // 2. Reverse scan from bottom to top
    const triggerOffset = 220
    let current = "about"

    for (let i = navItems.length - 1; i >= 0; i--) {
      const item = navItems[i]
      const el = document.getElementById(item.id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= triggerOffset) {
          current = item.id
          break
        }
      }
    }
    setActiveSection(current)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [handleScroll])

  // Clean click handler: set active immediately & smooth scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setActiveSection(id)
    if (isMobile) setIsOpen(false)

    // Lock scroll-spy until smooth scroll has completely finished
    isClickingRef.current = true
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false
    }, 1200)

    const el = document.getElementById(id)
    if (el) {
      const headerOffset = 90
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* Floating Island Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="floating-navbar"
            initial={{ y: -16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -14, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-5 inset-x-0 z-50 flex justify-center pointer-events-none"
          >
            <nav
              aria-label="Navigasi Utama"
              className="pointer-events-auto flex items-center p-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              {isMobile ? (
                /* Mobile button trigger */
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white rounded-full transition-colors active:scale-95"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                  aria-label="Buka menu navigasi"
                >
                  {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                  <span className="capitalize text-zinc-200">{activeSection}</span>
                </button>
              ) : (
                /* Desktop segmented control with pure GPU hardware sliding pill */
                <div
                  ref={navContainerRef}
                  className="relative flex items-center gap-0.5"
                >
                  {/* Single Sliding Pill (Pure translate3d, ZERO scale distortion, ZERO bounce) */}
                  <span
                    aria-hidden="true"
                    className="absolute top-1 bottom-1 rounded-full bg-white/[0.12] border border-white/[0.1] shadow-sm pointer-events-none"
                    style={{
                      transform: `translate3d(${indicator.left}px, 0, 0)`,
                      width: `${indicator.width}px`,
                      opacity: indicator.ready ? 1 : 0,
                      transition: indicator.ready
                        ? "transform 260ms cubic-bezier(0.16, 1, 0.3, 1), width 260ms cubic-bezier(0.16, 1, 0.3, 1), opacity 150ms ease"
                        : "none",
                    }}
                  />

                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id

                    return (
                      <Link
                        key={item.id}
                        ref={(el) => {
                          tabRefs.current[index] = el
                        }}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`relative z-10 px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 select-none ${
                          isActive
                            ? "text-zinc-100 font-semibold"
                            : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/85 backdrop-blur-xl flex flex-col justify-center items-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10 active:scale-95"
              aria-label="Tutup menu"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full max-w-xs space-y-1">
              <div className="text-[11px] font-semibold text-zinc-500 tracking-wider uppercase mb-4 text-center">
                Navigasi
              </div>
              {navItems.map((item) => {
                const isActive = activeSection === item.id

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all active:scale-[0.98] ${
                      isActive
                        ? "bg-white/[0.08] text-white border border-white/10"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="text-[10px] uppercase font-mono text-purple-400">Aktif</span>
                    )}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
