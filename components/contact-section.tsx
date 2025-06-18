import { MessageCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Discord",
      description: "Comunidade ativa",
      buttonText: "Entrar no Discord",
      href: "https://discord.gg/linkor",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp",
      description: "Resposta em minutos",
      buttonText: "Conversar agora",
      href: "https://wa.me/5511523601234",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Telefone",
      description: "Suporte 24/7",
      buttonText: "+55 11 5236-0123",
      href: "tel:+5511523601234",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "E-mail",
      description: "Orçamentos e dúvidas",
      buttonText: "Enviar e-mail",
      href: "mailto:suporte@linkor.host",
    },
  ]

  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para levar seu negócio ao próximo nível?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Fale com nossos especialistas e descubra como a Linkor pode transformar sua infraestrutura digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 text-center hover:bg-slate-700/70 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] p-3 rounded-full text-white">
                  {method.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{method.description}</p>
              <Button asChild className="bg-slate-600 hover:bg-slate-500 text-white border-0 w-full">
                <a href={method.href} target="_blank" rel="noopener noreferrer">
                  {method.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
