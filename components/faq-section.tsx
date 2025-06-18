"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "Qual é o ping?",
    answer:
      "Os servidores da Linkor oferecem uma média de ping de 15ms em todo o Brasil, proporcionando uma latência mínima e 99,9% de uptime garantido.",
  },
  {
    question: "Qual o tempo de ativação?",
    answer: "Nossos serviços são ativados automaticamente em até 5 minutos após a confirmação do pagamento.",
  },
  {
    question: "Posso solicitar reembolso?",
    answer: "Sim, oferecemos garantia de reembolso de 7 dias para todos os nossos planos, sem perguntas.",
  },
  {
    question: "Quais são os métodos de pagamento aceitos?",
    answer: "Aceitamos cartões de crédito, débito, PIX, PayPal, Mercado Pago e outras formas de pagamento digitais.",
  },
  {
    question: "Vocês oferecem suporte técnico?",
    answer: "Sim, nosso suporte técnico está disponível 24/7 através de chat, email e sistema de tickets.",
  },
  {
    question: "Como funciona a migração gratuita?",
    answer:
      "Nossa equipe técnica realiza a migração completa do seu site sem custo adicional. O processo é feito sem interrupções e com total segurança dos seus dados.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 px-0 text-left flex justify-between items-center hover:text-[#F04339] transition-colors"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 px-0">
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0]) // Primeiro item aberto por padrão

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 bg-[#0C0C17]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-left">
          <span className="inline-block px-3 py-1 text-sm font-medium text-[#F04339] bg-[#F04339]/10 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Perguntas frequentes</h2>
          <p className="text-gray-400 text-lg">Encontre respostas para as dúvidas mais comuns sobre nossos serviços</p>
        </div>

        <div className="space-y-0">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
