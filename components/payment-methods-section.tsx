import Image from "next/image"

const paymentMethods = [
  {
    name: "PIX",
    logo: "/pix.png",
    alt: "PIX",
  },
  {
    name: "Visa",
    logo: "/visa.png",
    alt: "Visa",
  },
  {
    name: "Mastercard",
    logo: "/mastercard.png",
    alt: "Mastercard",
  },
  {
    name: "PayPal",
    logo: "/paypal.png",
    alt: "PayPal",
  },
  {
    name: "Mercado Pago",
    logo: "/mercadopago.webp",
    alt: "Mercado Pago",
  },
  {
    name: "Stripe",
    logo: "/stripe.png",
    alt: "Stripe",
  },
]

export default function PaymentMethodsSection() {
  return (
    <section className="py-16 bg-[#0C0C17] border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-left">
          <span className="inline-block px-3 py-1 text-sm font-medium text-[#F04339] bg-[#F04339]/10 rounded-full mb-4">
            Métodos de pagamento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Formas de Pagamento Aceitas</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Oferecemos diversas opções de pagamento para sua comodidade e segurança
          </p>
        </div>

        <div className="flex flex-wrap justify-start items-center gap-8 md:gap-12">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-950/50 rounded-lg border border-gray-800 hover:border-[#F04339]/50 transition-colors min-w-[120px] h-[80px]"
            >
              <Image
                src={method.logo || "/placeholder.svg"}
                alt={method.alt}
                width={60}
                height={40}
                className="object-contain filter brightness-90 hover:brightness-100 transition-all max-h-[40px] w-auto"
              />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-gray-400 text-sm">
            Pagamentos seguros e processados instantaneamente • Parcelamento em até 12x no cartão
          </p>
        </div>
      </div>
    </section>
  )
}
