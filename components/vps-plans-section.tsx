"use client"

import { Button } from "@/components/ui/button"
import {
  CheckIcon,
  Cpu,
  HardDrive,
  Globe,
  Zap,
  Headphones,
  MemoryStick,
  MessageCircle,
  Server,
  Percent,
  Shield,
} from "lucide-react"
import { useState } from "react"

const intelPlans = [
  {
    name: "PLANO 4R",
    price: "59,94",
    ram: "4 GB",
    cpu: "2 núcleo",
    storage: "40 GB",
    bandwidth: "2TB/mês saída",
    features: ["1 IPv4 e 1 IPv6", "Até 1 Gbps", "AntiDDoS Inline"],
    contractLink: "https://app.linkor.host/store/vps-gamer-intel/plano-4r",
  },
  {
    name: "PLANO 8R",
    price: "119,94",
    ram: "8 GB",
    cpu: "4 núcleos",
    storage: "60 GB",
    bandwidth: "4TB/mês saída",
    features: ["1 IPv4 e 1 IPv6", "Até 1 Gbps", "AntiDDoS Inline"],
    contractLink: "https://app.linkor.host/store/vps-gamer-intel/plano-8r",
  },
  {
    name: "PLANO 12R",
    price: "179,94",
    ram: "12 GB",
    cpu: "6 núcleos",
    storage: "80 GB SSD NVMe",
    bandwidth: "6TB/mês saída",
    features: ["1 IPv4 e 1 IPv6", "Até 1 Gbps", "AntiDDoS Inline"],
    contractLink: "https://app.linkor.host/store/vps-gamer-intel/plano-12r",
  },
  {
    name: "PLANO 16R",
    price: "239,94",
    ram: "16 GB",
    cpu: "8 núcleos",
    storage: "100 GB",
    bandwidth: "8TB/mês saída",
    features: ["1 IPv4 e 1 IPv6", "Até 1 Gbps", "AntiDDoS Inline"],
    contractLink: "https://app.linkor.host/store/vps-gamer-intel/plano-16r",
  },
  {
    name: "PLANO 20R",
    price: "299,94",
    ram: "20 GB",
    cpu: "10 núcleos",
    storage: "120 GB",
    bandwidth: "10TB/mês saída",
    features: ["1 IPv4 e 1 IPv6", "Até 1 Gbps", "AntiDDoS Inline"],
    contractLink: "https://app.linkor.host/store/vps-gamer-intel/plano-20r",
  },
  {
    name: "PLANO 24R",
    price: "359,94",
    ram: "24 GB",
    cpu: "12 núcleos",
    storage: "140 GB",
    bandwidth: "12TB/mês saída",
    features: ["1 IPv4 e 1 IPv6", "Até 1 Gbps", "AntiDDoS Inline"],
    contractLink: "https://app.linkor.host/store/vps-gamer-intel/plano-24r",
  },
]

const ryzenPlans = [
  {
    name: "PLANO 4R",
    price: "99,94",
    ram: "4 GB",
    cpu: "2 núcleo",
    storage: "40 GB",
    bandwidth: "2TB/mês saída",
    features: ["1 IPv4 e 1 IPv6", "Até 1 Gbps", "AntiDDoS Inline"],
    contractLink: "https://app.linkor.host/store/vps-gamer-amd/plano-4r",
  },
  {
    name: "PLANO 8R",
    price: "159,94",
    ram: "8 GB",
    cpu: "4 núcleos",
    storage: "60 GB",
    bandwidth: "4TB/mês saída",
    features: ["1 IPv4 e 1 IPv6", "Até 1 Gbps", "AntiDDoS Inline"],
    contractLink: "https://app.linkor.host/store/vps-gamer-amd/plano-8r",
  },
  {
    name: "PLANO 12R",
    price: "219,94",
    ram: "12 GB",
    cpu: "6 núcleos",
    storage: "80 GB SSD NVMe",
    bandwidth: "6TB/mês saída",
    features: ["1 IPv4 e 1 IPv6", "Até 1 Gbps", "AntiDDoS Inline"],
    contractLink: "https://app.linkor.host/store/vps-gamer-amd/plano-12r",
  },
  {
    name: "PLANO 16R",
    price: "279,94",
    ram: "16 GB",
    cpu: "8 núcleos",
    storage: "100 GB",
    bandwidth: "8TB/mês saída",
    features: ["1 IPv4 e 1 IPv6", "Até 1 Gbps", "AntiDDoS Inline"],
    contractLink: "https://app.linkor.host/store/vps-gamer-amd/plano-16r",
  },
  {
    name: "PLANO 20R",
    price: "339,94",
    ram: "20 GB",
    cpu: "10 núcleos",
    storage: "120 GB",
    bandwidth: "10TB/mês saída",
    features: ["1 IPv4 e 1 IPv6", "Até 1 Gbps", "AntiDDoS Inline"],
    contractLink: "https://app.linkor.host/store/vps-gamer-amd/plano-20r",
  },
  {
    name: "PLANO 24R",
    price: "399,94",
    ram: "24 GB",
    cpu: "12 núcleos",
    storage: "140 GB",
    bandwidth: "12TB/mês saída",
    features: ["1 IPv4 e 1 IPv6", "Até 1 Gbps", "AntiDDoS Inline"],
    contractLink: "https://app.linkor.host/store/vps-gamer-amd/plano-24r",
  },
]

const getFeatureIcon = (feature: string) => {
  if (feature.includes("IPv4")) return <Globe className="w-4 h-4 text-[#F04339]" />
  if (feature.includes("Gbps")) return <Zap className="w-4 h-4 text-[#F04339]" />
  if (feature.includes("AntiDDoS")) return <Shield className="w-4 h-4 text-[#F04339]" />
  if (feature.includes("Suporte")) return <Headphones className="w-4 h-4 text-[#F04339]" />
  return <CheckIcon className="w-4 h-4 text-[#F04339]" />
}

export function VPSPlansSection() {
  const [couponMessage, setCouponMessage] = useState<string | null>(null)
  const [selectedProcessor, setSelectedProcessor] = useState<"intel" | "ryzen">("intel")

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText("LINKOR20")
    setCouponMessage("✅ Cupom copiado!")
    setTimeout(() => {
      setCouponMessage(null)
    }, 3000)
  }

  const currentPlans = selectedProcessor === "intel" ? intelPlans : ryzenPlans

  return (
    <section id="vps-plans" className="py-20 bg-[#0C0C17] w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Servidores VPS no Brasil</h2>
          <p className="text-gray-400 md:text-lg max-w-3xl mx-auto">
            Escolha o plano ideal para seu negócio e evolua conforme suas necessidades.
          </p>
        </div>

        {/* Processor Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-2 flex gap-2">
            <Button
              onClick={() => setSelectedProcessor("intel")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 ${
                selectedProcessor === "intel"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-transparent hover:bg-gray-800/50 text-gray-400 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-medium text-blue-300">CONFIABILIDADE</div>
                  <div className="text-sm font-bold">INTEL XEON</div>
                </div>
              </div>
            </Button>

            <Button
              onClick={() => setSelectedProcessor("ryzen")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 ${
                selectedProcessor === "ryzen"
                  ? "bg-[#F04339] hover:bg-[#FF6B5B] text-white"
                  : "bg-transparent hover:bg-gray-800/50 text-gray-400 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#F04339] rounded-sm flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-medium text-red-300">PERFORMANCE</div>
                  <div className="text-sm font-bold">AMD RYZEN</div>
                </div>
              </div>
            </Button>
          </div>
        </div>

        {/* Coupon Button */}
        <div className="text-center mb-8">
          <Button
            onClick={handleCopyCoupon}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              couponMessage
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-gradient-to-r from-[#F04339] to-[#FF6B5B] hover:from-[#FF6B5B] hover:to-[#F04339] text-white"
            }`}
          >
            {couponMessage || "🎫 Clique e Copie o Cupom com 20% Vitálicio - Cupom LinkorHost"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentPlans.map((plan, index) => {
            const discountedPrice = (Number.parseFloat(plan.price) * 0.8).toFixed(2)

            return (
              <div
                key={`${selectedProcessor}-${index}`}
                className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-[#F04339]/30 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]">
                        <del className="text-gray-500 text-lg font-normal mr-1">R${plan.price}</del>
                        R${discountedPrice}
                      </span>
                      <span className="text-gray-400 text-sm">/mês*</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* RAM Display */}
                    <div className="bg-gray-800/30 rounded-lg p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <MemoryStick className="w-3 h-3 text-white" />
                        <span className="text-xs text-gray-400 uppercase tracking-wide">RAM</span>
                      </div>
                      <div className="text-2xl font-bold text-white">{plan.ram}</div>
                    </div>

                    {/* CPU & Storage Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800/30 rounded-lg p-3 text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Cpu className="w-3 h-3 text-white" />
                          <span className="text-xs text-gray-400">CPU</span>
                        </div>
                        <div className="text-sm font-semibold text-white">{plan.cpu}</div>
                      </div>
                      <div className="bg-gray-800/30 rounded-lg p-3 text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <HardDrive className="w-3 h-3 text-white" />
                          <span className="text-xs text-gray-400">SSD em RAID 1</span>
                        </div>
                        <div className="text-sm font-semibold text-white">{plan.storage}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          {getFeatureIcon(feature)}
                          <span className="text-sm text-gray-300">
                            {feature}
                            {feature.includes("Gbps") && (
                              <span className="ml-2 px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full text-xs">
                                {plan.bandwidth}
                              </span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => (window.location.href = plan.contractLink)}
                    className="w-full bg-gradient-to-r from-[#F04339] to-[#FF6B5B] hover:from-[#FF6B5B] hover:to-[#F04339] text-white"
                  >
                    Contratar
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Price Match Section */}
        <div className="mt-20">
          <div className="bg-[#0D131F] border border-gray-800/50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-gradient-to-r from-[#F04339] to-[#FF6B5B] text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  TEM UMA OFERTA OU VALOR MELHOR?
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Podemos cobrir o valor e você pode ser elegível a créditos!
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Envie uma mensagem no nosso <span className="font-semibold text-[#F04339]">atendimento</span> para
                  negociar agora com nossa equipe. Te retornaremos em alguns minutos.
                </p>
                <Button
                  onClick={() => (window.location.href = "https://wa.me/551152360123")}
                  className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] hover:from-[#FF6B5B] hover:to-[#F04339] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Negociar agora
                </Button>
              </div>

              <div className="relative flex items-center justify-center">
                {/* Animated VPS Discount Illustration */}
                <div className="relative">
                  {/* Main Server */}
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 shadow-2xl animate-pulse">
                    <Server className="w-16 h-16 text-white mx-auto mb-4" />
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">VPS Premium</div>
                      <div className="text-blue-200 text-sm">Alta Performance</div>
                    </div>

                    {/* Discount Badge */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#F04339] to-[#FF6B5B] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm animate-bounce">
                      <div className="text-center">
                        <Percent className="w-4 h-4 mx-auto" />
                        <div>OFF</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-8 -left-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-12 h-12 flex items-center justify-center animate-float">
                    <span className="text-white font-bold text-xs">%</span>
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full w-10 h-10 flex items-center justify-center animate-float-delayed">
                    <span className="text-white font-bold text-xs">$</span>
                  </div>

                  <div className="absolute top-1/2 -left-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center animate-float-slow">
                    <span className="text-white font-bold text-xs">%</span>
                  </div>

                  {/* Animated Rings */}
                  <div className="absolute inset-0 border-2 border-[#F04339]/30 rounded-full animate-ping"></div>
                  <div className="absolute inset-4 border-2 border-[#FF6B5B]/20 rounded-full animate-ping animation-delay-1000"></div>
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 border border-gray-600 rounded-lg rotate-12"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-gray-600 rounded-lg -rotate-12"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-gray-600 rounded-lg rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite 2s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}
