"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  Award, 
  Calendar, 
  Building2, 
  ZoomIn, 
  ExternalLink, 
  Trophy, 
  Copy, 
  Check, 
  Network, 
  ShieldCheck 
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export interface CertificateItem {
  id: string
  title: string
  subtitle?: string
  field: string
  level: "Nasional" | "Provinsi" | "Kabupaten"
  category: "lks" | "mikrotik"
  rank: string
  issuer: string
  date: string
  certificateNo: string
  participantNo?: string
  imageSrc: string
  pdfSrc?: string
  description: string
  orientation: "landscape" | "portrait"
  badgeColorClass: string
  borderHoverClass: string
  accentColor: string
  isFeatured?: boolean
}

const certificatesData: CertificateItem[] = [
  {
    id: "lks-nasional-2026",
    title: "Juara 3 LKS Dikmen Tingkat Nasional 2026",
    subtitle: "Kategori Siswa SMK Berprestasi Nasional",
    field: "Information Network Cabling (Teknik Pengkabelan Jaringan Informasi)",
    level: "Nasional",
    category: "lks",
    rank: "Juara 3 Nasional",
    issuer: "Pusat Prestasi Nasional, Kementerian Pendidikan Dasar dan Menengah",
    date: "1 Agustus 2026",
    certificateNo: "21336/PPN/SMK/2026",
    imageSrc: "/certificates/sertifikat-lks-nasional.png",
    pdfSrc: "/certificates/Saputra Pramahkota Hati.pdf",
    description: "Meraih Juara 3 dalam Lomba Kompetensi Siswa (LKS) Tingkat Nasional Tahun 2026 bidang Information Network Cabling yang diselenggarakan luring di Jakarta & Jawa Barat.",
    orientation: "landscape",
    badgeColorClass: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    borderHoverClass: "hover:border-amber-500/50 hover:shadow-[0_16px_48px_-12px_rgba(245,158,11,0.2)]",
    accentColor: "amber",
    isFeatured: true,
  },
  {
    id: "lks-provinsi-2026",
    title: "Juara 1 LKS Tingkat Provinsi Jawa Timur 2026",
    subtitle: "Peringkat 1 LKS Ke-34 Jawa Timur",
    field: "Information Network Cabling",
    level: "Provinsi",
    category: "lks",
    rank: "Juara 1 Provinsi",
    issuer: "Dinas Pendidikan Provinsi Jawa Timur",
    date: "10 April 2026",
    certificateNo: "400.3/2082/101.3/2026",
    imageSrc: "/certificates/sertifikat-lks-provinsi.png",
    description: "Meraih Juara 1 dalam Lomba Kompetensi Siswa (LKS) Jenjang Pendidikan Menengah Tingkat Provinsi Jawa Timur Ke-34 bidang Information Network Cabling.",
    orientation: "landscape",
    badgeColorClass: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    borderHoverClass: "hover:border-emerald-500/50 hover:shadow-[0_12px_40px_-15px_rgba(16,185,129,0.15)]",
    accentColor: "emerald",
  },
  {
    id: "lks-kabupaten-2026",
    title: "Juara 1 LKS Tingkat Kabupaten Ngawi 2026",
    subtitle: "Perwakilan Wilayah Menuju Jawa Timur",
    field: "Information Network Cabling",
    level: "Kabupaten",
    category: "lks",
    rank: "Juara 1 Kabupaten",
    issuer: "Cabang Dinas Pendidikan Wilayah Madiun",
    date: "26 Februari 2026",
    certificateNo: "420/0801/101.1.16/2026",
    imageSrc: "/certificates/sertifikat-lks-kabupaten.jpeg",
    description: "Meraih Juara 1 dalam Lomba Kompetensi Siswa (LKS) Dikmen Jenjang SMK Tingkat Kabupaten Ngawi Tahun 2026 dan menjadi wakil resmi ke tingkat provinsi.",
    orientation: "landscape",
    badgeColorClass: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    borderHoverClass: "hover:border-sky-500/50 hover:shadow-[0_12px_40px_-15px_rgba(14,165,233,0.15)]",
    accentColor: "sky",
  },
  {
    id: "ojm-mikrotik-2026",
    title: "Peserta Olimpiade Jaringan MikroTik 2026",
    subtitle: "Ajang Kompetisi Jaringan SMK Nasional (Edisi IX)",
    field: "Jaringan Komputer & MikroTik RouterOS",
    level: "Nasional",
    category: "mikrotik",
    rank: "Peserta Tingkat Nasional",
    issuer: "MikroTik & PT Citraweb Solusi Teknologi",
    date: "3 September 2026",
    certificateNo: "OJM/2026/10089",
    participantNo: "26050030266",
    imageSrc: "/certificates/sertifikat-ojm-mikrotik-2026.jpeg",
    description: "Berpartisipasi aktif sebagai delegasi resmi SMKS PGRI 1 Ngawi dalam ajang bergengsi Olimpiade Jaringan MikroTik (OJM) ke-IX tingkat SMK se-Indonesia.",
    orientation: "portrait",
    badgeColorClass: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    borderHoverClass: "hover:border-indigo-500/50 hover:shadow-[0_12px_40px_-15px_rgba(99,102,241,0.15)]",
    accentColor: "indigo",
  },
  {
    id: "ojm-mikrotik-2025",
    title: "Peserta Olimpiade Jaringan MikroTik 2025",
    subtitle: "Ajang Kompetisi Jaringan SMK Nasional (Edisi VIII)",
    field: "Jaringan Komputer & MikroTik RouterOS",
    level: "Nasional",
    category: "mikrotik",
    rank: "Peserta Tingkat Nasional",
    issuer: "MikroTik & PT Citraweb Solusi Teknologi",
    date: "3 September 2025",
    certificateNo: "OJM/2025/8358",
    participantNo: "25050025914",
    imageSrc: "/certificates/sertifikat-ojm-mikrotik-2025.jpeg",
    description: "Berpartisipasi aktif sebagai delegasi resmi SMKS PGRI 1 Ngawi dalam ajang Olimpiade Jaringan MikroTik (OJM) ke-VIII tingkat SMK se-Indonesia.",
    orientation: "portrait",
    badgeColorClass: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    borderHoverClass: "hover:border-indigo-500/50 hover:shadow-[0_12px_40px_-15px_rgba(99,102,241,0.15)]",
    accentColor: "indigo",
  },
]

export function CertificatesSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Semua")
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filterTabs = [
    { label: "Semua", count: certificatesData.length },
    { label: "Nasional", count: certificatesData.filter((c) => c.level === "Nasional").length },
    { label: "Provinsi", count: certificatesData.filter((c) => c.level === "Provinsi").length },
    { label: "Kabupaten", count: certificatesData.filter((c) => c.level === "Kabupaten").length },
  ]

  const filteredCertificates = selectedFilter === "Semua"
    ? certificatesData
    : certificatesData.filter((item) => item.level === selectedFilter)

  const isSemuaMode = selectedFilter === "Semua"
  const featuredNational = isSemuaMode ? filteredCertificates.find((c) => c.id === "lks-nasional-2026") : null
  const lksRegionalCerts = isSemuaMode 
    ? filteredCertificates.filter((c) => c.category === "lks" && !c.isFeatured)
    : []
  const mikrotikCerts = isSemuaMode
    ? filteredCertificates.filter((c) => c.category === "mikrotik")
    : []

  const handleCopyNo = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <section id="certificates" className="py-24 relative border-t border-zinc-800/80 bg-zinc-950/70">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-[400px] h-[300px] bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" />
            Prestasi & Sertifikasi Terverifikasi
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Sertifikat & Rekam Jejak Prestasi
          </h2>
          <p className="text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed">
            Pembuktian kompetensi di bidang Information Network Cabling dan infrastruktur jaringan tingkat Kabupaten, Provinsi, hingga Tingkat Nasional.
          </p>

          {/* Quick Metrics Trust Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl mt-8 pt-6 border-t border-zinc-800/80">
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center">
              <div className="text-lg md:text-xl font-bold text-amber-400">Juara 3</div>
              <div className="text-[11px] text-zinc-400 font-medium">LKS Nasional 2026</div>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center">
              <div className="text-lg md:text-xl font-bold text-emerald-400">Juara 1</div>
              <div className="text-[11px] text-zinc-400 font-medium">LKS Jawa Timur 2026</div>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center">
              <div className="text-lg md:text-xl font-bold text-sky-400">Juara 1</div>
              <div className="text-[11px] text-zinc-400 font-medium">LKS Kab. Ngawi 2026</div>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center">
              <div className="text-lg md:text-xl font-bold text-indigo-400">2x Delegasi</div>
              <div className="text-[11px] text-zinc-400 font-medium">OJM MikroTik (25/26)</div>
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-8 p-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-inner">
            {filterTabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setSelectedFilter(tab.label)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-150 flex items-center gap-1.5 ${
                  selectedFilter === tab.label
                    ? "bg-zinc-800 text-white shadow-sm border border-zinc-700/80"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[11px] py-0.2 px-1.5 rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Layout */}
        {isSemuaMode ? (
          /* "Semua" View: Categorized Bento Presentation */
          <div className="space-y-12">
            
            {/* TIER 1: Featured National LKS Championship Card */}
            {featuredNational && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-amber-400 tracking-wider uppercase">
                  <Award className="w-4 h-4" />
                  Pencapaian Tertinggi Nasional
                </div>
                
                <div className="group relative rounded-2xl border border-amber-500/25 bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-zinc-950 p-6 md:p-8 transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_16px_48px_-12px_rgba(245,158,11,0.2)] overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Framed Landscape Preview with Natural Aspect Ratio */}
                    <div
                      className="lg:col-span-5 relative aspect-[16/11] w-full bg-zinc-950/90 rounded-xl border border-zinc-800/90 p-3 flex items-center justify-center cursor-pointer group-hover:border-amber-500/40 transition-colors shadow-2xl"
                      onClick={() => setSelectedCert(featuredNational)}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={featuredNational.imageSrc}
                          alt={featuredNational.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                          priority
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900/95 text-zinc-100 text-xs font-medium border border-zinc-700 shadow-xl">
                          <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                          Inspeksi Resolusi Penuh
                        </span>
                      </div>
                    </div>

                    {/* Metadata Content */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-amber-500/15 text-amber-300 border-amber-500/30">
                            <Trophy className="w-3.5 h-3.5" />
                            {featuredNational.rank}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-zinc-400 bg-zinc-800/80 border border-zinc-700/50">
                            Pusat Prestasi Nasional
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                          {featuredNational.title}
                        </h3>
                        <p className="text-sm font-medium text-amber-300/90 mb-3">
                          Bidang: {featuredNational.field}
                        </p>
                        <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                          {featuredNational.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-800 text-xs text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-zinc-500 shrink-0" />
                          <span className="truncate">{featuredNational.issuer}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-zinc-500 shrink-0" />
                          <span>{featuredNational.date}</span>
                        </div>
                        <div className="flex items-center gap-2 sm:col-span-2">
                          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="font-mono text-zinc-400">No. Sertifikat: {featuredNational.certificateNo}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Button
                          onClick={() => setSelectedCert(featuredNational)}
                          size="sm"
                          className="bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs gap-1.5"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                          Lihat Sertifikat
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TIER 2: Regional LKS Pathway (Provinsi & Kabupaten) - 2-Column Landscape Cards */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                <Trophy className="w-4 h-4" />
                Jalur Prestasi LKS Regional (Juara 1)
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lksRegionalCerts.map((cert) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`group relative flex flex-col rounded-2xl border border-zinc-800/90 bg-zinc-900/40 hover:bg-zinc-900/70 transition-all duration-200 ${cert.borderHoverClass} overflow-hidden`}
                  >
                    {/* Natural Landscape Frame (16:11 fits Indonesian A4 certificates) */}
                    <div
                      className="relative aspect-[16/11] w-full bg-zinc-950/90 p-3 flex items-center justify-center cursor-pointer border-b border-zinc-800/80 group-hover:bg-zinc-950 transition-colors"
                      onClick={() => setSelectedCert(cert)}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={cert.imageSrc}
                          alt={cert.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/95 text-zinc-100 text-xs font-medium border border-zinc-700 shadow-md">
                          <ZoomIn className="w-3.5 h-3.5 text-white" />
                          Inspeksi Sertifikat
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border ${cert.badgeColorClass}`}>
                            {cert.rank}
                          </span>
                          <span className="text-[11px] text-zinc-500 font-mono">
                            Tingkat {cert.level}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                          {cert.title}
                        </h3>

                        <p className="text-xs font-medium text-emerald-400/90 mb-2.5">
                          {cert.field}
                        </p>

                        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                          {cert.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-zinc-800/80 space-y-2.5 text-xs text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                          <span className="truncate">{cert.issuer}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                            <span>{cert.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedCert(cert)}
                            className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 hover:underline text-xs"
                          >
                            Detail
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* TIER 3: MikroTik Olympiad Track - Dedicated Horizontal Split Cards for Portrait Format */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
                <Network className="w-4 h-4" />
                Kompetensi Jaringan: Olimpiade MikroTik Nasional (OJM)
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mikrotikCerts.map((cert) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`group relative flex flex-col sm:flex-row gap-5 p-5 rounded-2xl border border-zinc-800/90 bg-zinc-900/40 hover:bg-zinc-900/70 transition-all duration-200 ${cert.borderHoverClass} items-center`}
                  >
                    {/* Dedicated Portrait Frame (Natural A4 Vertical Ratio) */}
                    <div
                      className="relative w-40 sm:w-44 aspect-[1/1.414] shrink-0 bg-zinc-950 rounded-xl border border-zinc-800 p-2 shadow-xl flex items-center justify-center cursor-pointer group-hover:border-indigo-500/40 transition-colors"
                      onClick={() => setSelectedCert(cert)}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={cert.imageSrc}
                          alt={cert.title}
                          fill
                          sizes="(max-width: 640px) 160px, 176px"
                          className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900/95 text-zinc-100 text-[11px] font-medium border border-zinc-700 shadow-md">
                          <ZoomIn className="w-3 h-3 text-indigo-400" />
                          Buka
                        </span>
                      </div>
                    </div>

                    {/* Metadata & Details */}
                    <div className="flex-1 flex flex-col justify-between w-full h-full py-1">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border ${cert.badgeColorClass}`}>
                            {cert.rank}
                          </span>
                          <span className="text-[11px] text-zinc-500 font-mono">
                            {cert.subtitle?.split("(")[1]?.replace(")", "") || "SMK Nasional"}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                          {cert.title}
                        </h3>

                        <p className="text-xs text-indigo-400/90 font-medium mb-2">
                          {cert.field}
                        </p>

                        <p className="text-xs text-zinc-400 leading-relaxed mb-3 line-clamp-2">
                          {cert.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-3 border-t border-zinc-800/80 text-xs text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                          <span className="truncate">{cert.issuer}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                            <span>{cert.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedCert(cert)}
                            className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 hover:underline text-xs"
                          >
                            Detail
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* Filtered View: Uniform Grid with Responsive Frame */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col rounded-2xl border border-zinc-800/90 bg-zinc-900/40 hover:bg-zinc-900/70 transition-all duration-200 ${cert.borderHoverClass} overflow-hidden`}
              >
                {/* Certificate Frame */}
                <div
                  className={`relative w-full bg-zinc-950/90 p-4 flex items-center justify-center cursor-pointer border-b border-zinc-800/80 group-hover:bg-zinc-950 transition-colors ${
                    cert.orientation === "portrait" ? "aspect-[4/3]" : "aspect-[16/11]"
                  }`}
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={cert.imageSrc}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/95 text-zinc-100 text-xs font-medium border border-zinc-700 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-white" />
                      Lihat Sertifikat
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border ${cert.badgeColorClass}`}>
                        {cert.rank}
                      </span>
                      <span className="text-[11px] text-zinc-500 font-mono">
                        Tingkat {cert.level}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-xs font-medium text-emerald-400/90 mb-2.5">
                      {cert.field}
                    </p>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80 space-y-2.5 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      <span className="truncate">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                        <span>{cert.date}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 hover:underline text-xs"
                      >
                        Detail
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Dialog for Full-Res Inspection */}
      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-4xl bg-zinc-900 border-zinc-800 text-zinc-100 p-0 overflow-hidden shadow-2xl">
          {selectedCert && (
            <div>
              <DialogHeader className="p-5 md:p-6 border-b border-zinc-800 bg-zinc-900/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border ${selectedCert.badgeColorClass}`}>
                    {selectedCert.rank}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    Tingkat {selectedCert.level}
                  </span>
                </div>
                <DialogTitle className="text-xl md:text-2xl font-bold text-white">
                  {selectedCert.title}
                </DialogTitle>
                <DialogDescription className="text-zinc-400 text-xs mt-1">
                  {selectedCert.issuer} • {selectedCert.date}
                </DialogDescription>
              </DialogHeader>

              {/* Certificate Full Inspection Container with Adaptive Ratio */}
              <div className={`relative w-full bg-zinc-950 flex items-center justify-center p-4 sm:p-6 ${
                selectedCert.orientation === "portrait" ? "h-[540px]" : "h-[440px] sm:h-[500px]"
              }`}>
                <div className="relative w-full h-full">
                  <Image
                    src={selectedCert.imageSrc}
                    alt={selectedCert.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Modal Footer with Verification Actions */}
              <div className="p-4 md:p-6 bg-zinc-900/95 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-zinc-300 font-medium">
                    <span>No. Sertifikat:</span>
                    <code className="font-mono text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700/60">
                      {selectedCert.certificateNo}
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopyNo(selectedCert.certificateNo, "cert-no")}
                      className="text-zinc-400 hover:text-white transition-colors p-1"
                      title="Salin nomor sertifikat"
                    >
                      {copiedId === "cert-no" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  {selectedCert.participantNo && (
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span>No. Peserta:</span>
                      <code className="font-mono text-zinc-300 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700/60">
                        {selectedCert.participantNo}
                      </code>
                      <button
                        type="button"
                        onClick={() => handleCopyNo(selectedCert.participantNo!, "part-no")}
                        className="text-zinc-400 hover:text-white transition-colors p-1"
                        title="Salin nomor peserta"
                      >
                        {copiedId === "part-no" ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedCert(null)}
                    className="border-zinc-700 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white text-xs px-4"
                  >
                    Tutup
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
