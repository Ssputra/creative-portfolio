"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Award } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { CertificatesSection } from "@/components/certificates-section"
import { GsapParallaxBackground } from "@/components/gsap-parallax-background"

export default function Portfolio() {
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.2])
  const heroY = useTransform(scrollY, [0, 500], [0, 80])
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.96])

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <GsapParallaxBackground />

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
          className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="hero-copy space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4 mt-4">
                <span className="relative z-10">Network Engineer & Cabling Specialist</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-2xl sm:text-3xl text-zinc-400 mb-2 font-medium">Halo, Saya</span>
              <span className="text-white">
                Saputra Pramahkota Hati
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-[600px] leading-relaxed">
              Siswa SMKS PGRI 1 Ngawi dengan spesialisasi Teknik Pengkabelan Jaringan Informasi (Information Network Cabling) dan infrastruktur jaringan. Peraih Juara 3 LKS Nasional 2026 & Juara 1 LKS Jawa Timur 2026.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#certificates">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-medium gap-2 border-0">
                  <Award className="h-4 w-4" />
                  Lihat Prestasi & Sertifikat
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
                >
                  Hubungi Saya
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/shinekyaw" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/shinekyawkyawaung/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>             
              <Link href="mailto:shinekyawkyawaung@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero-visual flex justify-center">
            <CreativeHero />
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.05 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Saputra Pramahkota Hati"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.05 }}
              className="space-y-6"
            >
              <GlassmorphicCard>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Saya adalah siswa SMKS PGRI 1 Ngawi dengan dedikasi tinggi pada bidang Teknik Jaringan Komputer, khususnya spesialisasi <strong className="text-white">Information Network Cabling</strong> dan infrastruktur jaringan.
                </p>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mt-4">
                  Terbiasa melakukan instalasi kabel jaringan terstruktur (Fiber Optic & Copper/UTP), pengujian jaringan (OTDR, Optical Power Meter, Fluke Tester), terminasi, rack management, serta konfigurasi perangkat jaringan (Mikrotik, Switching & Routing).
                </p>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mt-4">
                  Melalui ketekunan dan bimbingan, saya bersyukur telah dipercaya mewakili sekolah dan Provinsi Jawa Timur hingga berhasil meraih <strong className="text-purple-400">Juara 3 LKS Dikmen Tingkat Nasional Tahun 2026</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Nama Lengkap</div>
                    <div className="font-medium text-white">Saputra Pramahkota Hati</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Sekolah</div>
                    <div className="font-medium text-white">SMKS PGRI 1 Ngawi</div>
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Prestasi Utama</div>
                    <div className="font-medium text-purple-400">Juara 3 LKS Dikmen Tingkat Nasional 2026</div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="#certificates">
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white gap-2">
                      <Award className="w-4 h-4 text-purple-400" />
                      Lihat Semua Sertifikat
                    </Button>
                  </Link>
                </div>
              </GlassmorphicCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificates & Achievements Section */}
      <CertificatesSection />

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Information Network Cabling" level={95} />
            <SkillBadge name="Fiber Optic Splicing & OTDR" level={92} />
            <SkillBadge name="MikroTik RouterOS & MTCNA" level={88} />
            <SkillBadge name="Structured Cabling (UTP/STP)" level={95} />
            <SkillBadge name="Fluke Cable Certification" level={90} />
            <SkillBadge name="Switching & VLAN Configuration" level={85} />
            <SkillBadge name="Routing & IP Subnetting" level={85} />
            <SkillBadge name="Server & Rack Management" level={88} />
            <SkillBadge name="Network Troubleshooting" level={90} />
            <SkillBadge name="Network Security Basics" level={78} />
            <SkillBadge name="Linux Server Administration" level={75} />
            <SkillBadge name="Wireless Networking" level={82} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Infrastruktur & Implementasi Jaringan" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Perancangan Backbone Fiber Optik"
              description="Instalasi dan terminasi kabel backbone fiber optic single-mode antar gedung sekolah dengan standarisasi ODF dan pengujian OTDR."
              tags={["Fiber Optic", "OTDR", "ODF", "Fusion Splicer"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#contact"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Implementasi Jaringan Lab Komputer"
              description="Penarikan kabel UTP Cat6 terstruktur, patch panel, cable management rack server, dan pengujian flukemeter kanal penuh."
              tags={["UTP Cat6", "Patch Panel", "Fluke Tester", "Rack Server"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#contact"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Manajemen Bandwidth & VLAN MikroTik"
              description="Konfigurasi router MikroTik untuk pembagian bandwidth dinamis per lab, isolasi lalu lintas VLAN, dan captive portal autentikasi."
              tags={["MikroTik", "VLAN", "Queue Tree", "Hotspot"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#contact"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Instalasi Data Center Mini SMK"
              description="Perapian kabel (cable neatening), dokumentasi penomoran port jaringan, serta instalasi UPS dan grounding perangkat server."
              tags={["Data Center", "Grounding", "Cable Dressing", "UPS"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#contact"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Troubleshooting Redundansi Jaringan"
              description="Penerapan failover link dual-ISP menggunakan routing statis berbobot (distance) dan pemantauan latensi berkala."
              tags={["Failover", "Dual ISP", "Routing", "Monitoring"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#contact"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Portofolio Personal Berbasis Next.js"
              description="Website portofolio interaktif yang memverifikasi kredensial kejuaraan LKS dan olimpiade jaringan dengan scroll-driven animations."
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#contact"
              repoUrl="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="Pengalaman & Rekam Jejak" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Hubungi & Kolaborasi" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6 text-white">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium text-zinc-200">saputra.pramahkota@smkspgri1ngawi.sch.id</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Sekolah & Status</div>
                    <div className="font-medium text-zinc-200">SMKS PGRI 1 Ngawi (TKJ / INC)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Award className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Prestasi Nasional</div>
                    <div className="font-medium text-purple-300">Juara 3 LKS Tingkat Nasional 2026</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4 text-white">Status Saat Ini</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-zinc-300 text-sm">Terbuka untuk kesempatan magang, pelatihan, dan kolaborasi industri</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="text-purple-400">Saputra</span>
              <span className="text-white ml-1">Pramahkota Hati</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Saputra Pramahkota Hati. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/shinekyaw" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shinekyawkyawaung/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:shinekyawkyawaung@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
