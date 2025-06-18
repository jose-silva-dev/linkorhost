"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Cpu, Server } from "lucide-react"
import { siteConfig } from "@/config/site"

export function FlexiblePlans() {
  const [selectedProcessor, setSelectedProcessor] = useState(siteConfig.vpsPlans[0].id)
  const [showAllPlans, setShowAllPlans] = useState(false)
  const processor = siteConfig.vpsPlans.find((p) => p.id === selectedProcessor) || siteConfig.vpsPlans[0]

  // Get the first 3 plans or all plans if showAllPlans is true
  const visiblePlans = showAllPlans ? processor.plans : processor.plans.slice(0, 3)

  return (
    <section id="planos-vps" className="py-16 bg-[#0C0C17] w-full scroll-mt-28">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-start max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 mx-auto">
            Servidores VPS no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]">Brasil</span>
          </h2>
          <div className="w-full flex justify-center">
            <p className="text-gray-400 text-lg mb-12 text-center">Liberdade para criar, poder para dominar!</p>
          </div>

          {/* Seleção de processadores - Centralizada */}
          <div className="flex justify-center gap-4 pb-10 mx-auto">
            {siteConfig.vpsPlans.map((proc) => (
              <button
                key={proc.id}
                onClick={() => {
                  setSelectedProcessor(proc.id)
                  setShowAllPlans(false) // Reset expanded plans when switching processors
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors relative ${
                  selectedProcessor === proc.id
                    ? "bg-[#1A1A35] border border-[#F04339]"
                    : "bg-[#0F0F1A] border border-[#1A1A35] hover:border-[#F04339]/50"
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <Cpu className={`w-6 h-6 ${proc.id.includes("intel") ? "text-blue-500" : "text-[#F04339]"}`} />
                </div>
                <div className="text-left">
                  <p className={`font-medium ${selectedProcessor === proc.id ? "text-white" : "text-gray-400"}`}>
                    {proc.name}
                  </p>
                </div>
                {proc.id.includes("intel") && (
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                    +CONFIABILIDADE
                  </span>
                )}
                {proc.id.includes("ryzen") && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-[#F04339] to-[#FF6B5B] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                    +PERFORMANCE
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Planos */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1A35] flex items-center justify-center">
                  <Cpu
                    className={`w-5 h-5 ${selectedProcessor.includes("intel") ? "text-blue-500" : "text-[#F04339]"}`}
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium">{processor.name}</h3>
                  <p className="text-sm text-gray-400">Selecione o plano ideal para você</p>
                </div>
              </div>
              <button
                onClick={() => setShowAllPlans(!showAllPlans)}
                className="text-[#F04339] hover:text-[#F04339]/80 text-sm font-medium"
              >
                {showAllPlans ? "Mostrar menos planos" : "Ver todos os planos"}
              </button>
            </div>

            <div className="space-y-3">
              {visiblePlans.map((plan) => (
                <a href={plan.link} key={plan.id} className="">
                  <motion.div
                    className="bg-[#0F0F1A] border border-[#1A1A35] rounded-md p-4 flex items-center justify-between hover:border-[#F04339]/50 transition-all cursor-pointer my-4"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1A1A35] flex items-center justify-center">
                        <Server className="w-6 h-6 text-[#F04339]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{plan.name}</h4>
                        <p className="text-sm text-gray-400">{plan.specs}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 justify-end">
                        <span className="text-sm text-gray-400 line-through">R$ {plan.price}</span>
                        <p className="text-white font-bold text-xl">
                          <span className="text-[#F04339]">R$</span>{" "}
                          {(Number.parseFloat(plan.price.replace(",", ".")) * 0.8).toFixed(2).replace(".", ",")}
                        </p>
                      </div>
                      <p className="text-xs text-gray-400">Por mês</p>
                      <span className="text-xs text-green-400 font-medium">ECONOMIZE 20% • CUPOM: LINKORHOST</span>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
