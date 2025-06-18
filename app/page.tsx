"use client"
import { Shield, Clock, Zap, Code, Database, Cloud } from "lucide-react"
import AnimatedHero from "@/components/animated-hero"
import { AnimatedFeature } from "@/components/animated-feature"
import { StatsCounter } from "@/components/stats-counter"
import { PromoCard } from "@/components/promo-card"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { HostingPlans } from "@/components/hosting-plans"
import { FlexiblePlans } from "@/components/flexible-plans"
import { PremiumContentAccess } from "@/components/premium-content-access"
import { GameServerComparison } from "@/components/game-server-comparison"
import { CustomerTestimonials } from "@/components/customer-testimonials"
import { siteConfig } from "@/config/site"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col mx-auto justify-center items-center">
      {/* Hero Section */}
      <AnimatedHero />

      {/* Stats Counter Section */}
      <section className="py-8 bg-[#0C0C17] flex overflow-hidden w-full mx-auto justify-center">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCounter value={250} suffix="+" label="Clientes Ativos" />
            <StatsCounter value={99.99} suffix="%" label="Tempo de Atividade" />
            <StatsCounter value={24} suffix="/7" label="Suporte Humano" />
            <StatsCounter value={5} suffix="+" label="Data Centers no Brasil" />
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <PerformanceMetrics />

      {/* Game Server Comparison*/}
      <GameServerComparison />

      {/* Features Section */}
      <section className="py-16 bg-[#0f0f1a] relative w-full mx-auto justify-center">
        <div className="container px-4 md:px-6 mx-auto z-40">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Infraestrutura{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]">
                completa
              </span>{" "}
              para seu sucesso digital
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedFeature
              icon={<Cloud className="h-6 w-6 text-[#F04339]" />}
              title="Infraestrutura Cloud"
              description="Aproveite nossa infraestrutura cloud de última geração com data centers distribuídos para máxima confiabilidade e desempenho. Escale suas aplicações sem esforço."
              delay={0}
            />

            <AnimatedFeature
              icon={<Shield className="h-6 w-6 text-[#F04339]" />}
              title="Segurança Avançada"
              description="Segurança de nível empresarial com proteção DDoS, WAF e certificados SSL gratuitos. Seus dados e aplicações são protegidos 24/7 contra todas as ameaças."
              delay={0.1}
            />

            <AnimatedFeature
              icon={<Clock className="h-6 w-6 text-[#F04339]" />}
              title="99,99% de Uptime"
              description="Garantimos 99,99% de uptime com nossa infraestrutura redundante e monitoramento contínuo. Seu negócio permanece online mesmo durante picos de tráfego."
              delay={0.2}
            />

            <AnimatedFeature
              icon={<Database className="h-6 w-6 text-[#F04339]" />}
              title="Backups Automáticos"
              description="Backups diários automatizados com retenção de 7 dias e funcionalidade de restauração com um clique. Nunca mais se preocupe com perda de dados."
              delay={0.3}
            />

            <AnimatedFeature
              icon={<Zap className="h-6 w-6 text-[#F04339]" />}
              title="Otimização de Performance"
              description="Configurações de servidor otimizadas com armazenamento SSD e NVMe, redes de entrega de conteúdo e cache avançado para carregamentos de página ultrarrápidos."
              delay={0.4}
            />

            <AnimatedFeature
              icon={<Code className="h-6 w-6 text-[#F04339]" />}
              title="Ferramentas para Desenvolvedores"
              description="Suporte completo para stacks de desenvolvimento modernas, incluindo Node.js, Python, Ruby, PHP 5.6 ao 8.4 e aplicações em contêineres com Docker e Kubernetes."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Hosting Plans Section */}
      <HostingPlans />
      <section className="bg-[#0C0C17] w-full py-4 px-6 flex flex-col md:flex-row items-center justify-center gap-8 mx-auto">
        <p className="text-gray-300 text-center md:text-left font-medium text-sm md:text-base">
          Pagamento facilitado em até <span className="text-white font-semibold">12x no cartão</span>
        </p>
        <div className="items-center gap-4 grid grid-cols-4">
          <Image width={48} height={48} src="./visa.png" alt="Visa" />
          <Image width={48} height={48} src="./discover.webp" alt="Discover" />
          <Image width={48} height={48} src="./americanexpress.png" alt="American Express" />
          <Image width={48} height={48} src="./mastercard.png" alt="MasterCard" />
        </div>
      </section>

      {/* Pricing Section */}
      <FlexiblePlans />

      {/* Premium Content Access  */}
      <PremiumContentAccess />

      {/* Customer Testimonials */}
      <CustomerTestimonials />

      {/* Promos Grid */}
      <section
        className={`py-16 bg-gray-950 relative overflow-hidden w-full ${siteConfig.promoCard.active ? "block" : "hidden"}`}
      >
        <div className="container px-4 md:px-6 relative z-10 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gra-200">Ofertas Especiais</h2>
            <p className="mt-4 text-gray-400 md:text-lg max-w-3xl mx-auto">
              Confira nossas promoções exclusivas e economize em nossos serviços premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div />
            {siteConfig.promoCard.items.map((item, index) => (
              <PromoCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                image={item.image}
                features={item.features}
                ctaText={item.ctaText}
                isChristmas={item.isChristmas}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
