"use client"

import { Monitor, Terminal, Cpu, MapPin } from "lucide-react"

const projects = [
  {
    icon: <Monitor className="w-12 h-12 text-[#F04339]" />,
    title: "VPS Windows",
    description: "Nos servidores VPS da Linkor, você pode criar uma VPS Windows e aproveitar todos os recursos.",
  },
  {
    icon: <Terminal className="w-12 h-12 text-[#F04339]" />,
    title: "VPS Linux",
    description:
      "Nos servidores VPS da Linkor, você pode criar uma VPS Linux ou Ubuntu e aproveitar todos os recursos.",
  },
  {
    icon: <Cpu className="w-12 h-12 text-[#F04339]" />,
    title: "VPS Ryzen",
    description: "Em todos os nossos servidores VPS contamos com os melhores e mais atuais processadores AMD Ryzen.",
  },
  {
    icon: <MapPin className="w-12 h-12 text-[#F04339]" />,
    title: "VPS Brasil",
    description:
      "Servidores localizados em São Paulo, com a menor latência do país, garantindo um serviço sem lags e com alta velocidade.",
  },
]

export function VPSProjectsSection() {
  return (
    <section className="py-20 bg-[#0C0C17] w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Você pode hospedar qualquer projeto,</h2>
          <p className="text-gray-400 md:text-lg">seja servidor de jogo, BOT, site e outras aplicações.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">{project.icon}</div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
