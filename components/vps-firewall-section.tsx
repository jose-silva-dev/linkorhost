"use client"

import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export function VPSFirewallSection() {
  return (
    <section className="py-20 bg-[#0C0C17] w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Firewall Interface */}
          <div className="space-y-6">
            {/* Firewall Management */}
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                  <span className="text-white font-medium">Nome do firewall</span>
                  <span className="text-white font-medium">Número de regras</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-white">fire-wall-main1</span>
                      <span className="bg-[#F04339] text-white text-xs px-2 py-1 rounded">ATIVO</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-white">4</span>
                      <button className="text-[#F04339] hover:text-[#FF6B5B]">Desativar</button>
                      <button className="text-gray-400">•••</button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-white">fire-wall-main2</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-white">4</span>
                      <button className="text-blue-400 hover:text-blue-300">Ativar</button>
                      <button className="text-gray-400">•••</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Firewall Rules */}
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6">
              <h3 className="text-white font-medium mb-4">Regras do firewall</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left text-gray-400 pb-2">Ação</th>
                      <th className="text-left text-gray-400 pb-2">Protocolo</th>
                      <th className="text-left text-gray-400 pb-2">Porta (ou intervalo)</th>
                      <th className="text-left text-gray-400 pb-2">Fonte</th>
                      <th className="text-left text-gray-400 pb-2">Detalhe da fonte</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-800">
                      <td className="py-2 text-white">Aceitar</td>
                      <td className="py-2 text-white">SSH</td>
                      <td className="py-2 text-white">22</td>
                      <td className="py-2 text-white">Qualquer fonte</td>
                      <td className="py-2 text-white">:/0</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2 text-white">Aceitar</td>
                      <td className="py-2 text-white">HTTP</td>
                      <td className="py-2 text-white">80</td>
                      <td className="py-2 text-white">MyIP</td>
                      <td className="py-2 text-white">200.148.53.69:3213.96.3.local:224</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-white">Recusar</td>
                      <td className="py-2 text-white">Qualquer um</td>
                      <td className="py-2 text-white">0 - 65535</td>
                      <td className="py-2 text-white">Personalizada</td>
                      <td className="py-2 text-white">128.0.0.1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F04339] to-[#FF6B5B] rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Firewall e proteção contra DDoS</h2>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              Proteja seu servidor virtual em cada etapa do processo. Com a filtragem de DDoS da Linkor e o firewall
              fácil de configurar, você pode manter afastado qualquer tráfego nocivo.
            </p>

            <Button
              onClick={() => document.getElementById("vps-plans")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] hover:from-[#FF6B5B] hover:to-[#F04339] text-white px-8 py-3 text-lg"
            >
              Começar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
