"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { FaDiscord, FaGoogle } from "react-icons/fa"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maxsuel Monteiro",
    role: "Cliente Linkor",
    text: "Excelente atendimento! Produtos de alta qualidade e uma equipe sempre disposta a ajudar o cliente. Agradeço por ter conhecido a empresa há tanto tempo! Se não fosse a Linkor, estaria perdendo dinheiro com empresas que não se importam com o cliente.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Bruno Oliveira",
    role: "Cliente Linkor",
    text: "Atendimento, suporte, preço e serviço excelentes. Procurei por muito tempo uma 'casa' para meus sites e finalmente encontrei. A Linkor superou todas as minhas expectativas.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Iago Massari",
    role: "Cliente Linkor",
    text: "O que mais me impressiona é a qualidade e o suporte prestado. A Linkor e toda a equipe estão de parabéns. Podem contratar sem medo, vocês não vão se arrepender. A qualidade e o suporte ao cliente são incomparáveis.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-[#0C0C17] relative overflow-hidden w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]">
              clientes dizem
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Depoimentos reais de clientes que confiam na Linkor para seus projetos
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Customer Image */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="w-full max-w-md mx-auto">
                    <div className="aspect-square rounded-2xl bg-gray-950 border border-[#1A1A35] overflow-hidden relative">
                      {/* Placeholder with L logo */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#F04339] to-[#FF6B5B] flex items-center justify-center">
                          <span className="text-white text-6xl font-bold">L</span>
                        </div>
                      </div>

                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                          <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Testimonial Content - Fixed Height Container */}
            <div className="relative h-[400px] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col h-full"
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-[#F04339] fill-current" />
                  </div>

                  {/* Testimonial Text - Fixed Height */}
                  <div className="flex-1 mb-8">
                    <blockquote className="text-xl md:text-2xl text-white leading-relaxed">
                      {currentTestimonial.text}
                    </blockquote>
                  </div>

                  {/* Read Full Review Link */}
                  <button className="text-[#F04339] hover:text-[#FF6B5B] transition-colors mb-8 font-medium text-left">
                    Ler avaliação completa
                  </button>

                  {/* Customer Info */}
                  <div className="mt-auto">
                    <h4 className="text-xl font-bold text-white mb-1">{currentTestimonial.name}</h4>
                    <p className="text-gray-400">{currentTestimonial.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex gap-3 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-[#1A1A35] bg-gray-950 text-gray-400 hover:bg-[#1A1A35] hover:text-white hover:border-[#F04339]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-[#1A1A35] bg-gray-950 text-gray-400 hover:bg-[#1A1A35] hover:text-white hover:border-[#F04339]"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#F04339]" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review Buttons Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Quem Ama Avalia!</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {/* Discord Button */}
            <a
              href="https://discord.gg/linkor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#F04339] to-[#FF6B5B] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-all"
            >
              <FaDiscord className="h-4 w-4 mr-2" />
              Discord
            </a>

            {/* Google Reviews Button */}
            <a
              href="https://www.google.com/maps/place/Linkor+Brasil+Ltda/@-14.4095261,-51.31668,4z/data=!4m8!3m7!1s0x65bb5417651cede3:0xa9e544aa5b0029f1!8m2!3d-14.4095262!4d-51.31668!9m1!1b1!16s%2Fg%2F11m6djbhvr?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#F04339] to-[#FF6B5B] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-all"
            >
              <FaGoogle className="h-4 w-4 mr-2" />
              Google Reviews
            </a>

            {/* Trustpilot Button */}
            <a
              href="https://pt.trustpilot.com/review/linkor.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#F04339] to-[#FF6B5B] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-all"
            >
              <Star className="h-4 w-4 mr-2 fill-current" />
              Trustpilot
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
