import type { Metadata } from "next"
import TermosDeServicoClient from "./TermosDeServicoClient"

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description:
    "Termos de Serviço da Linkor Brasil. Conheça as condições de uso dos nossos serviços de VPS Gamer, hospedagem de sites e servidores dedicados.",
  keywords: ["termos de serviço", "condições de uso", "linkor", "vps gamer", "hospedagem"],
  openGraph: {
    title: "Termos de Serviço | Linkor",
    description:
      "Termos de Serviço da Linkor Brasil. Conheça as condições de uso dos nossos serviços de VPS Gamer, hospedagem de sites e servidores dedicados.",
    url: "https://linkor.host/termos-de-servico",
  },
  alternates: {
    canonical: "https://linkor.host/termos-de-servico",
  },
}

export default function TermosDeServico() {
  return <TermosDeServicoClient />
}
