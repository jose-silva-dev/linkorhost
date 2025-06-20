"use client"

import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"
import Image from "next/image"

export function VPSHeroSection() {
  return (
    <section className="py-20 bg-[#0C0C17] relative overflow-hidden w-full">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F04339]/10 to-[#FF6B5B]/10 border border-[#F04339]/20 rounded-full px-4 py-2">
                <div className="inline-flex items-center gap-1 bg-gradient-to-r from-[#F04339] to-[#FF6B5B] rounded-full px-3 py-1">
                  <span className="text-white font-medium text-xs">NOVO</span>
                </div>
                <span className="text-[#F04339] font-medium text-sm">
                  Proteção DDoS avançada com Cloudflare Magic Transit & UPX AntiDDoS
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Servidores VPS com
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]">
                  mais liberdade e controle
                </span>
              </h1>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-[#F04339]" />
                <span className="text-gray-300">VPS ativada em 60s</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-[#F04339]" />
                <span className="text-gray-300">Escalabilidade para crescimento</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-[#F04339]" />
                <span className="text-gray-300">Proteção DDoS com as maiores</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-gray-400">R$</span>
                <span className="text-5xl font-bold text-white">59,94</span>
                <span className="text-gray-400">/mês</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => document.getElementById("vps-plans")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] hover:from-[#FF6B5B] hover:to-[#F04339] text-white px-8 py-3 text-lg"
                >
                  Escolha seu plano
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard */}
          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 space-y-6">
              {/* Server Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Brasil"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                  <span className="text-white font-medium">Brasil</span>
                  <span className="text-sm text-gray-400">15 ms</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-1 h-4 bg-[#F04339] rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Servidores ao redor do mundo</p>
                  <div className="flex gap-1 mt-1">
                    {["🇧🇷", "🇺🇸", "🇨🇦", "🇵🇹", "🇩🇪", "🇫🇷"].map((flag, i) => (
                      <span key={i} className="text-sm">
                        {flag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Server Info */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#F04339] rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">U</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">srv-4767.linkor.com.br</p>
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      143.0.0.0{" "}
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[#F04339]">Online</span>
                      </span>
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Uso da CPU</p>
                    <p className="text-2xl font-bold text-white">5%</p>
                    <div className="h-8 bg-gray-700 rounded relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F04339] to-[#FF6B5B] opacity-20"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Uso de memória</p>
                    <p className="text-2xl font-bold text-white">15%</p>
                    <div className="h-8 bg-gray-700 rounded relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F04339] to-[#FF6B5B] opacity-20"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Tráfego de entrada</p>
                    <p className="text-2xl font-bold text-white">535.4 MB</p>
                    <div className="h-8 bg-gray-700 rounded relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F04339] to-[#FF6B5B] opacity-20"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Tráfego de saída</p>
                    <p className="text-2xl font-bold text-white">367.8 MB</p>
                    <div className="h-8 bg-gray-700 rounded relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F04339] to-[#FF6B5B] opacity-20"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
