import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: {
    default: "VPS Gamer com Proteção DDoS no Brasil | Linkor",
    template: "%s | Linkor",
  },
  description:
    "Hospedagem VPS Gamer com proteção DDoS, processadores AMD Ryzen 9 e Intel Xeon, armazenamento NVMe e rede 10Gbps. Ideal para Minecraft, FiveM, Rust, ARK, CS:GO no Brasil.",
  keywords: [
    "VPS Gamer",
    "VPS Brasil",
    "Servidor Minecraft",
    "Servidor FiveM",
    "VPS com DDoS",
    "Hospedagem Gamer",
    "VPS Ryzen",
    "VPS Intel Xeon",
    "Servidor Dedicado",
    "CloudVPS",
    "Hospedagem de Sites",
    "cPanel",
    "Servidor CS:GO",
    "Servidor Rust",
    "Servidor ARK",
    "VPS NVMe",
    "Linkor",
    "Hospedagem Brasil",
    "Servidor de Jogos",
    "VPS Baixa Latência",
    "Proteção DDoS",
    "Datacenter Brasil",
    "VPS Performance",
    "Servidor Satisfactory",
    "Servidor Unturned",
  ],
  authors: [{ name: "Linkor Brasil" }],
  creator: "Linkor Brasil Ltda",
  publisher: "Linkor Brasil Ltda",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://linkor.host/",
    siteName: "Linkor - VPS Gamer e Hospedagem",
    title: "VPS Gamer com Proteção DDoS no Brasil | Linkor",
    description:
      "Hospedagem VPS Gamer com proteção DDoS, processadores AMD Ryzen 9 e Intel Xeon, armazenamento NVMe e rede 10Gbps. Ideal para Minecraft, FiveM, Rust, ARK, CS:GO no Brasil.",
    images: [
      {
        url: "https://linkor.host/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linkor - VPS Gamer com Proteção DDoS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VPS Gamer com Proteção DDoS no Brasil | Linkor",
    description:
      "Hospedagem VPS Gamer com proteção DDoS, processadores AMD Ryzen 9 e Intel Xeon, armazenamento NVMe e rede 10Gbps.",
    images: ["https://linkor.host/og-image.jpg"],
    creator: "@linkorhost",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://linkor.host/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#F04339",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F04339" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0712" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Linkor Brasil Ltda",
              alternateName: "Linkor",
              url: "https://linkor.host",
              logo: "https://linkor.host/logo.png",
              description: "Hospedagem VPS Gamer com proteção DDoS no Brasil",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Pamplona, 145",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                postalCode: "01405-100",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-5236-0123",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              sameAs: ["https://discord.gg/linkor"],
              offers: {
                "@type": "Offer",
                category: "VPS Hosting",
                description: "VPS Gamer com proteção DDoS",
                priceRange: "R$ 59,94 - R$ 399,94",
                priceCurrency: "BRL",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Linkor",
              url: "https://linkor.host",
              description: "VPS Gamer com Proteção DDoS no Brasil",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://linkor.host/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#F04339" />
        <meta name="theme-color" content="#F04339" />
      </head>
      <body className="min-h-screen text-gray-100 font-heading">
        <div className="relative flex flex-col">
          <Navbar />
          <main className="bg-[#0A0712]">
            {children}
            <ContactSection />
            <Footer />
          </main>
        </div>
      </body>
    </html>
  )
}
