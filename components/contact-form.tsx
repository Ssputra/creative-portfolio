"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1200))

    toast({
      title: "Pesan terkirim!",
      description: "Terima kasih telah menghubungi. Saya akan segera membalas pesan Anda.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-6 md:p-8 transition-all duration-300 hover:border-purple-500/50 shadow-xl group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-6 text-white">Kirim Pesan</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs text-zinc-400 font-medium">Nama Anda</label>
              <Input
                placeholder="Masukkan nama..."
                required
                className="bg-zinc-950/60 border-zinc-800 focus:border-purple-500 focus:ring-purple-500/20 text-white placeholder:text-zinc-600 rounded-xl text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-zinc-400 font-medium">Email Anda</label>
              <Input
                type="email"
                placeholder="nama@email.com"
                required
                className="bg-zinc-950/60 border-zinc-800 focus:border-purple-500 focus:ring-purple-500/20 text-white placeholder:text-zinc-600 rounded-xl text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-zinc-400 font-medium">Pesan</label>
              <Textarea
                placeholder="Tuliskan pesan atau kebutuhan Anda..."
                rows={4}
                required
                className="bg-zinc-950/60 border-zinc-800 focus:border-purple-500 focus:ring-purple-500/20 text-white placeholder:text-zinc-600 rounded-xl text-sm resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-medium text-sm rounded-xl py-2.5 gap-2 transition-all mt-2 border-0"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Mengirim pesan...</span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Kirim Pesan</span>
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
