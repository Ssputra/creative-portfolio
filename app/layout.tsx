import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saputra Pramahkota Hati | Network Engineer & Cabling Specialist',
  description: 'Portfolio Saputra Pramahkota Hati, Siswa SMKS PGRI 1 Ngawi. Peraih Juara 3 LKS Nasional 2026 dan Juara 1 LKS Jawa Timur bidang Information Network Cabling.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased selection:bg-emerald-500 selection:text-black">{children}</body>
    </html>
  )
}
