"use client"

import { Zap, HardDrive, Shield, Gamepad2, Clock, Headphones } from "lucide-react"

const features = [
  {
    icon: <Zap className="w-8 h-8 text-[#F04339]" />,
    title: "Processadores Avançados",
    description:
      "Processadores que oferecem performance em processos exigentes e aplicações pesadas. Ideal para quem busca velocidade, estabilidade e resposta imediata nos momentos mais intensos.",
  },
  {
    icon: <HardDrive className="w-8 h-8 text-[#F04339]" />,
    title: "SSD NVMe",
    description:
      "Ultravelocidade com SSD NVMe de última geração. Obtenha carregamentos quase instantâneos e máxima performance para servidores de jogos, mods pesados, bancos de dados e muito mais.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#F04339]" />,
    title: "Proteção DDoS",
    description:
      "Sua jogatina sem interrupções. Nossa proteção DDoS avançada mantém seu servidor blindado contra ataques, garantindo estabilidade e segurança 24/7 para você e seus jogadores.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-[#F04339]" />,
    title: "Estabilidade no Jogo",
    description:
      "Acabe com os lags. Conte com a melhor solução de estabilidade de conexão do mercado com a redudância da Linkor, disponível junto à infraestrutura da Linkor.",
  },
  {
    icon: <Clock className="w-8 h-8 text-[#F04339]" />,
    title: "Baixa latência",
    description:
      "Latência mínima, performance máxima. Com infraestrutura localizada em São Paulo, garantimos resposta ultra-rápida e conexões estáveis para todo o Brasil.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-[#F04339]" />,
    title: "Uptime Garantido",
    description:
      "Uptime garantido de 99,9% com suporte confiável. Seus servidores estarão sempre online para você jogar, administrar e crescer, com estabilidade de verdade, dia e noite.",
  },
]

export function VPSFeaturesSection() {
  return (
    <section className="py-20 bg-[#0f0f1a] w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-4">
                {feature.icon}
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
