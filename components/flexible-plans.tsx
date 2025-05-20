"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Cpu, Server } from "lucide-react"

const processors = [
  {
    id: "ryzen7900",
    name: "AMD Ryzen™ 9 7900X",
    icon: "/processor-ryzen.png",
    plans: [
      {
        id: "starter",
        name: "Plano Starter",
        specs: "2 vCPU • 4GB RAM • 80GB SSD NVMe",
        price: "69,90",
        color: "#F04339",
      },
      {
        id: "advanced",
        name: "Plano 1",
        specs: "4 vCPU • 8GB RAM • 160GB SSD NVMe",
        price: "129,90",
        color: "#F04339",
      },
      {
        id: "enterprise",
        name: "Plano 2",
        specs: "8 vCPU • 16GB RAM • 320GB SSD NVMe",
        price: "249,90",
        color: "#F04339",
      },
    ],
  },
  {
    id: "ryzen5900",
    name: "AMD Ryzen™ 9 5900X",
    icon: "/processor-ryzen.png",
    plans: [
      {
        id: "starter",
        name: "Plano Starter",
        specs: "2 vCPU • 4GB RAM • 60GB SSD NVMe",
        price: "49,90",
        color: "#F04339",
      },
      {
        id: "advanced",
        name: "Plano 1",
        specs: "4 vCPU • 8GB RAM • 120GB SSD NVMe",
        price: "99,90",
        color: "#F04339",
      },
      {
        id: "enterprise",
        name: "Plano 2",
        specs: "6 vCPU • 12GB RAM • 240GB SSD NVMe",
        price: "179,90",
        color: "#F04339",
      },
    ],
  },
  {
    id: "intel",
    name: "Intel(R) Xeon(R) Platinum",
    icon: "/processor-intel.png",
    plans: [
      {
        id: "starter",
        name: "Plano Starter",
        specs: "4 vCPU • 8GB RAM • 120GB SSD NVMe",
        price: "89,90",
        color: "#3B82F6",
      },
      {
        id: "advanced",
        name: "Plano 1",
        specs: "8 vCPU • 16GB RAM • 240GB SSD NVMe",
        price: "159,90",
        color: "#3B82F6",
      },
      {
        id: "enterprise",
        name: "Plano 2",
        specs: "16 vCPU • 32GB RAM • 480GB SSD NVMe",
        price: "299,90",
        color: "#3B82F6",
      },
    ],
  },
]

const applications = [
  {
    id: "wordpress",
    name: "WordPress",
    logo: "/wordpress-logo.png",
  },
  {
    id: "magento",
    name: "Magento",
    logo: "/magento-logo.png",
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    logo: "/woocommerce-logo.png",
  },
  {
    id: "prestashop",
    name: "PrestaShop",
    logo: "/prestashop-logo.png",
  },
  {
    id: "joomla",
    name: "Joomla",
    logo: "/joomla-logo.png",
  },
  {
    id: "drupal",
    name: "Drupal",
    logo: "/drupal-logo.png",
  },
  {
    id: "nodejs",
    name: "Node.js",
    logo: "/nodejs-logo.png",
  },
  {
    id: "laravel",
    name: "Laravel",
    logo: "/placeholder-bop1n.png",
  },
]

export function FlexiblePlans() {
  const [selectedProcessor, setSelectedProcessor] = useState("ryzen7900")
  const processor = processors.find((p) => p.id === selectedProcessor) || processors[0]

  return (
    <section className="py-16 bg-[#0C0C17] w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-start max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 mx-auto">Servidores Virtualizados & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]">
                Dedicados
              </span></h2>
          <div className="w-full flex justify-center">
             <p className="text-gray-400 text-lg mb-12 text-center">
               Liberdade para criar, poder para dominar!
              </p>
          </div>
          
          {/* Seleção de processadores */}
          <div className="flex flex-wrap gap-4 mb-8 w-full justify-center">
            {processors.map((proc) => (
              <button
                key={proc.id}
                onClick={() => setSelectedProcessor(proc.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
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
              <Link href="#" className="text-[#F04339] hover:text-[#F04339]/80 text-sm font-medium">
                Ver todos os planos
              </Link>
            </div>

            <div className="space-y-3">
              {processor.plans.map((plan) => (
                <Link href={`#${plan.id}`} key={plan.id} className="">
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
                      <p className="text-white font-bold text-xl">
                        <span className="text-[#F04339]">R$</span> {plan.price}
                      </p>
                      <p className="text-xs text-gray-400">Por mês</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}