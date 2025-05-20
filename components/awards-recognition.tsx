"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Shield, Star, TrendingUp, ThumbsUp, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TechPartners } from "@/components/tech-partners"

export function AwardsRecognition() {
  const [activeTab, setActiveTab] = useState("reviews")

  return (
    <section className="py-16 bg-[#0C0C17] relative overflow-hidden w-full text-[#0C0C17]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C17]/5 to-transparent full-width-bg"></div>

      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl text-gray-200 font-bold tracking-tighter sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Avaliações e Reconhecimentos
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-400 md:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Reconhecidos pela excelência em serviços de hospedagem e infraestrutura cloud
          </motion.p>
        </div>

        {/* Tabs de navegação */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-950 rounded-full p-1 shadow-md">
            <Button
              variant="ghost"
              className={`rounded-full px-6 ${
                activeTab === "reviews"
                  ? "bg-gradient-to-r from-[#F04339] to-[#FF6B5B] text-white"
                  : "text-[#484848] hover:text-[#F04339]"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              <Star className="mr-2 h-4 w-4" />
              Avaliações
            </Button>
            {/* <Button
              variant="ghost"
              className={`rounded-full px-6 ${
                activeTab === "awards"
                  ? "bg-gradient-to-r from-[#F04339] to-[#FF6B5B] text-white"
                  : "text-[#484848] hover:text-[#F04339]"
              }`}
              onClick={() => setActiveTab("awards")}
            >
              <Award className="mr-2 h-4 w-4" />
              Prêmios
            </Button>
            <Button
              variant="ghost"
              className={`rounded-full px-6 ${
                activeTab === "certifications"
                  ? "bg-gradient-to-r from-[#F04339] to-[#FF6B5B] text-white"
                  : "text-[#484848] hover:text-[#F04339]"
              }`}
              onClick={() => setActiveTab("certifications")}
            >
              <Shield className="mr-2 h-4 w-4" />
              Certificações
            </Button> */}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-8 md:grid-cols-12"
            >
              {/* Google Reviews */}
              <div className="md:col-span-5 bg-gray-950 rounded-xl shadow-lg p-6 border border-gray-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Image src="/google-logo.png" alt="Google" width={100} height={40} />
                  <div className="ml-auto">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.svg
                          key={star}
                          className="h-5 w-5 fill-[#FBBC05]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          transition={{
                            duration: 2,
                            delay: star * 0.1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 5,
                          }}
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </motion.svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Baseado em 1.247 avaliações</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">5 estrelas</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-[#FBBC05] h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">4 estrelas</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-[#FBBC05] h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "10%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">10%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">3 estrelas</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-[#FBBC05] h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "3%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">2 estrelas</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-[#FBBC05] h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "1%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">1 estrela</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-[#FBBC05] h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "1%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">1%</span>
                  </div>
                </div>

                {/* Comentários em destaque */}
                <div className="border-t border-gray-900 pt-6 space-y-4">
                  <h4 className="font-medium text-gray-300">Comentários em Destaque</h4>
                  <motion.div
                    className="bg-[#0C0C17] p-4 rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        R
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-200">Ricardo Almeida</p>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-3 w-3 fill-[#FBBC05]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      "Serviço excepcional! O suporte técnico é rápido e eficiente. Meu site nunca esteve tão rápido."
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-[#0C0C17] p-4 rounded-lg"
                    
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                        M
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-200">Mariana Costa</p>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-3 w-3 fill-[#FBBC05]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      "Migrei meu e-commerce para a Linkor e a diferença foi impressionante. Velocidade, estabilidade e
                      suporte de primeira."
                    </p>
                  </motion.div>
                </div>

                <div className="mt-6 flex justify-center">
                  <motion.div
                    className="flex items-center bg-[#F04339]/10 px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(240, 67, 57, 0.2)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-2xl font-bold text-[#F04339] mr-2">4.8</span>
                    <span className="text-sm text-gray-300">Avaliação média</span>
                  </motion.div>
                </div>
              </div>

              {/* Reclame Aqui e Prêmios */}
              <div className="md:col-span-7 text-gray-300">
                <div className="grid grid-cols-2 gap-6 h-full mx-auto">
                  {/* Reclame Aqui */}
                  <motion.div
                    className="bg-gray-950 rounded-xl shadow-lg p-6 border border-gray-800 hover:shadow-xl transition-shadow h-full"
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="flex items-center mb-6">
                      <Image src="/logo-reclame-aqui.png" alt="Reclame Aqui" width={140} height={40} />
                      <motion.div
                        className="ml-auto bg-[#4CAF50]/20 px-2 py-1 rounded text-xs text-[#4CAF50] font-medium"
                        animate={{
                          backgroundColor: [
                            "rgba(76, 175, 80, 0.1)",
                            "rgba(76, 175, 80, 0.2)",
                            "rgba(76, 175, 80, 0.1)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        RA1000
                      </motion.div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <div className="w-24 text-sm font-medium">Reputação:</div>
                        <div className="flex-1 flex items-center">
                          <motion.span
                            className="text-lg font-bold text-[#4CAF50]"
                            animate={{
                              color: ["#4CAF50", "#3d9140", "#4CAF50"],
                            }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            Ótima
                          </motion.span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-sm font-medium">Índice:</div>
                        <div className="flex-1">
                          <motion.span
                            className="text-lg font-bold"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            9.8
                          </motion.span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-sm font-medium">Respondidas:</div>
                        <div className="flex-1">
                          <motion.span
                            className="text-lg font-bold"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                          >
                            100%
                          </motion.span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-sm font-medium">Solução:</div>
                        <div className="flex-1">
                          <motion.span
                            className="text-lg font-bold"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            98.4%
                          </motion.span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      className="bg-[#0C0C17] p-4 rounded-lg"
                      
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <p className="text-sm text-gray-300 italic">
                        "A Linkor demonstra excelência no atendimento ao cliente, com tempo médio de resposta de 1h32min
                        e resolução de problemas em menos de 24 horas."
                      </p>
                      <p className="text-xs text-gray-500 mt-2">— Análise Reclame Aqui, 2024</p>
                    </motion.div>
                  </motion.div>

                  {/* Prêmios e Certificações */}
                  <motion.div
                    className="bg-gray-950 rounded-xl shadow-lg p-6 border border-gray-800 hover:shadow-xl transition-shadow h-full"
                    
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <h3 className="text-lg font-bold mb-4 text-gray-200">Prêmios e Certificações</h3>

                    <div className="space-y-6">
                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <motion.div
                          className="h-16 w-16 bg-[#F04339]/10 rounded-full flex items-center justify-center"
                          animate={{
                            backgroundColor: [
                              "rgba(240, 67, 57, 0.1)",
                              "rgba(240, 67, 57, 0.2)",
                              "rgba(240, 67, 57, 0.1)",
                            ],
                          }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Award className="h-8 w-8 text-[#F04339]" />
                        </motion.div>
                        <div>
                          <h4 className="font-medium text-gray-300">Melhor Hospedagem 2023</h4>
                          <p className="text-sm text-gray-500">TechMasters Awards</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <motion.div
                          className="h-16 w-16 bg-[#F04339]/10 rounded-full flex items-center justify-center"
                          animate={{
                            backgroundColor: [
                              "rgba(240, 67, 57, 0.1)",
                              "rgba(240, 67, 57, 0.2)",
                              "rgba(240, 67, 57, 0.1)",
                            ],
                          }}
                          transition={{ duration: 3, delay: 1, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <TrendingUp className="h-8 w-8 text-[#F04339]" />
                        </motion.div>
                        <div>
                          <h4 className="font-medium text-gray-300">Melhor Custo-Benefício</h4>
                          <p className="text-sm text-gray-500">Cloud Computing Brasil</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <motion.div
                          className="h-16 w-16 bg-[#F04339]/10 rounded-full flex items-center justify-center"
                          animate={{
                            backgroundColor: [
                              "rgba(240, 67, 57, 0.1)",
                              "rgba(240, 67, 57, 0.2)",
                              "rgba(240, 67, 57, 0.1)",
                            ],
                          }}
                          transition={{ duration: 3, delay: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Shield className="h-8 w-8 text-[#F04339]" />
                        </motion.div>
                        <div>
                          <h4 className="font-medium text-gray-300">Certificação</h4>
                          <p className="text-sm text-gray-500">Segurança da Informação</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "awards" && (
            <motion.div
              key="awards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    className="h-24 w-24 bg-[#F04339]/10 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0],
                      backgroundColor: ["rgba(240, 67, 57, 0.1)", "rgba(240, 67, 57, 0.2)", "rgba(240, 67, 57, 0.1)"],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Award className="h-12 w-12 text-[#F04339]" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-[#0C0C17]">Melhor Hospedagem 2023</h3>
                <p className="text-center text-[#484848] mb-4">TechMasters Awards</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    "Reconhecida pela excelência em infraestrutura, desempenho e suporte ao cliente."
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    className="h-24 w-24 bg-[#F04339]/10 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0],
                      backgroundColor: ["rgba(240, 67, 57, 0.1)", "rgba(240, 67, 57, 0.2)", "rgba(240, 67, 57, 0.1)"],
                    }}
                    transition={{ duration: 5, delay: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <TrendingUp className="h-12 w-12 text-[#F04339]" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-[#0C0C17]">Melhor Custo-Benefício</h3>
                <p className="text-center text-[#484848] mb-4">Cloud Computing Brasil</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    "Oferece o melhor valor por real investido entre todos os provedores cloud avaliados."
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    className="h-24 w-24 bg-[#F04339]/10 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0],
                      backgroundColor: ["rgba(240, 67, 57, 0.1)", "rgba(240, 67, 57, 0.2)", "rgba(240, 67, 57, 0.1)"],
                    }}
                    transition={{ duration: 5, delay: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ThumbsUp className="h-12 w-12 text-[#F04339]" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-[#0C0C17]">Melhor Suporte Técnico</h3>
                <p className="text-center text-[#484848] mb-4">Hosting Review 2024</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    "Tempo de resposta médio de 15 minutos e 98% de taxa de resolução no primeiro contato."
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "certifications" && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="h-40 bg-gradient-to-br from-[#0C0C17] to-[#1E1E30] flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      y: [0, -10, 0],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Image src="/iso-27001.png" alt="ISO 27001" width={100} height={100} />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#0C0C17]">Certificação</h3>
                  <p className="text-[#484848] mb-4">
                    Certificação internacional que garante os mais altos padrões de segurança da informação e gestão de
                    dados.
                  </p>
                  <div className="flex items-center">
                    <BadgeCheck className="h-5 w-5 text-[#4CAF50] mr-2" />
                    <span className="text-sm text-[#484848]">Verificado e Certificado</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="h-40 bg-gradient-to-br from-[#0C0C17] to-[#1E1E30] flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      y: [0, -10, 0],
                    }}
                    transition={{ duration: 3, delay: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Image src="/gdpr-badge.png" alt="GDPR Compliant" width={100} height={100} />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#0C0C17]">GDPR Compliant</h3>
                  <p className="text-[#484848] mb-4">
                    Conformidade total com o Regulamento Geral de Proteção de Dados da União Europeia.
                  </p>
                  <div className="flex items-center">
                    <BadgeCheck className="h-5 w-5 text-[#4CAF50] mr-2" />
                    <span className="text-sm text-[#484848]">Verificado e Certificado</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="h-40 bg-gradient-to-br from-[#0C0C17] to-[#1E1E30] flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      y: [0, -10, 0],
                    }}
                    transition={{ duration: 3, delay: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Image src="/soc-2-badge.png" alt="SOC 2" width={100} height={100} />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#0C0C17]">SOC 2 Tipo II</h3>
                  <p className="text-[#484848] mb-4">
                    Certificação que atesta os controles de segurança, disponibilidade e confidencialidade dos nossos
                    sistemas.
                  </p>
                  <div className="flex items-center">
                    <BadgeCheck className="h-5 w-5 text-[#4CAF50] mr-2" />
                    <span className="text-sm text-[#484848]">Verificado e Certificado</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contador de estatísticas */}
        <motion.div
          className="mt-16 bg-[#0C0C17] rounded-t-xl shadow-lg p-8 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-200">Números que Comprovam Nossa Excelência</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                98%
              </motion.div>
              <p className="text-gray-400 mt-2">Satisfação dos clientes</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                15min
              </motion.div>
              <p className="text-gray-400 mt-2">Tempo médio de resposta</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                99.99%
              </motion.div>
              <p className="text-gray-400 mt-2">Uptime garantido</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                +50
              </motion.div>
              <p className="text-gray-400 mt-2">Prêmios e reconhecimentos</p>
            </div>
          </div>
        </motion.div>

       {/* Tech Partners Section */}
      <TechPartners />
      </div>
    </section>
  )
}
