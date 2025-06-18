import type { Metadata } from "next"
import PoliticaDePrivacidadeClient from "./PoliticaDePrivacidadeClient"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Linkor Brasil em conformidade com a LGPD. Saiba como protegemos seus dados pessoais e garantimos sua privacidade.",
  keywords: ["política de privacidade", "LGPD", "proteção de dados", "privacidade", "linkor", "dados pessoais"],
  openGraph: {
    title: "Política de Privacidade | Linkor",
    description:
      "Política de Privacidade da Linkor Brasil em conformidade com a LGPD. Saiba como protegemos seus dados pessoais e garantimos sua privacidade.",
    url: "https://linkor.host/politica-de-privacidade",
  },
  alternates: {
    canonical: "https://linkor.host/politica-de-privacidade",
  },
}

export default function PoliticaDePrivacidade() {
  return <PoliticaDePrivacidadeClient />
}
