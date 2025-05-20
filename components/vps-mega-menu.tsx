import Link from "next/link"
import { Box, Server, Shield } from "lucide-react"

export default function ServidoresMegaMenu() {
  return (
    <div className="w-full p-5 bg-white rounded-lg border shadow-xl">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
        <div>
          <p className="pl-2 opacity-80 text-[11px] pb-2 text-gray-900">
            VPS
            <div className="relative w-[25px] h-[1px] bg-gradient-to-r from-purple-400 to-pink-500" />
          </p>
          {[
            {
              href: "/vps-intel-qct",
              icon: Server,
              title: "VPS Intel - QCT Alta Densidade",
              description: "Servidores custo-benefício único.",
            },
            {
              href: "/vps-amd-7900x",
              icon: Server,
              title: "VPS - AMD Ryzen 9 7900X",
              description: "Servidor veloz para traders.",
            },
            {
              href: "/vps-amd-5900x",
              icon: Server,
              title: "VPS - AMD Ryzen 9 5900X",
              description: "Hospedagem de alta performance.",
            },
          ].map((item, index) => (
            <Link href={item.href} key={`1${index}${item.href}`}>
              <div className="p-2 rounded-lg flex gap-2">
                <div className="">
                  <item.icon
                    size={32}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg text-white"
                  />
                </div>
                <div>
                  <p className="text-[13px] text-gray-800 font-semibold">{item.title}</p>
                  <p className="text-[11px] text-gray-700">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/vps-amd-7900x">
          <div className="relative bg-gradient-to-b from-purple-500 to-pink-500 h-52 rounded-lg">
            <div className="absolute bottom-0 p-4 text-white">
              <div className="mb-2">
                <div className="bg-white/20 p-2 rounded-lg inline-block">
                  <Server size={32} className="text-white" />
                </div>
              </div>
              <p className="text-lg font-bold">AMD Ryzen 9 7900X</p>
              <p className="text-sm">Nossa melhor máquina para seu servidor.</p>
            </div>
          </div>
        </Link>
        <div className="">
          <p className="pl-2 opacity-80 text-[11px] pb-2 text-gray-300">
            DEDICADOS
            <div className="relative w-[60px] h-[1px] bg-gradient-to-r from-purple-400 to-pink-500" />
          </p>
          {[
            {
              href: "/servidor-dedicado",
              icon: Server,
              title: "Servidor Dedicado",
              description: "Seu próprio dedicado, não compartilhe recursos.",
            },
            {
              href: "/colocation",
              icon: Server,
              title: "Colocation",
              description: "Hospede seu servidor em nossa infraestrutura.",
            },
          ].map((item, index) => (
            <Link href={item.href} key={`2${index}${item.href}`}>
              <div className="p-2 hover:bg-[#303030] rounded-lg flex gap-2">
                <div className="">
                  <item.icon
                    size={32}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg text-white"
                  />
                </div>
                <div>
                  <p className="text-[13px] text-gray-300 font-semibold">{item.title}</p>
                  <p className="text-[11px] text-gray-500">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="">
          <p className="pl-2 opacity-80 text-[11px] pb-2 text-gray-300">
            COLOCATION
            <div className="relative w-[25px] h-[1px] bg-gradient-to-r from-purple-400 to-pink-500" />
          </p>
          {[
            {
              href: "/status",
              icon: Shield,
              title: "Status da Rede",
              description: "Mantenha-se informado do nosso status de rede.",
            },
            {
              href: "/cliente",
              icon: Box,
              title: "Área do Cliente",
              description: "Acesse sua conta e gerencie seus serviços.",
            },
          ].map((item, index) => (
            <Link href={item.href} key={`3${index}${item.href}`}>
              <div className="p-2 hover:bg-[#303030] rounded-lg flex gap-2">
                <div className="">
                  <item.icon
                    size={32}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg text-white"
                  />
                </div>
                <div>
                  <p className="text-[13px] text-gray-300 font-semibold">{item.title}</p>
                  <p className="text-[11px] text-gray-500">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
