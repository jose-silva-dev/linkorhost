"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
	CheckCircle,
	Server,
	Shield,
	Clock,
	Zap,
	Code,
	HeadphonesIcon,
	Database,
	Cloud,
	Cpu,
	Globe,
	Lock,
	ChevronRight,
} from "lucide-react";
import AnimatedHero from "@/components/animated-hero";
import { AnimatedFeature } from "@/components/animated-feature";
import { StatsCounter } from "@/components/stats-counter";
import { PromoCard } from "@/components/promo-card";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { AwardsRecognition } from "@/components/awards-recognition";
import { FeatureShowcase } from "@/components/feature-showcase";
import { PerformanceMetrics } from "@/components/performance-metrics";
import { useState } from "react";
import { motion } from "framer-motion";
import { HostingPlans } from "@/components/hosting-plans";
import { FlexiblePlans } from "@/components/flexible-plans";
import { PremiumContentAccess } from "@/components/premium-content-access";
import { GameServerComparison } from "@/components/game-server-comparison";
import { siteConfig } from "@/config/site";

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

			{/* Feature Showcase */}
			<FeatureShowcase />

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

			{/* Pricing Section */}
			<FlexiblePlans />

			{/* Premium Content Access  */}
			<PremiumContentAccess />

			{/* Premium Tools Section */}
			<section className="py-16 bg-[#0C0C17] relative overflow-hidden w-full">
				<div className="container px-4 md:px-6 relative z-10 mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
							Ferramentas Premium para Desenvolvedores
						</h2>
						<p className="mt-4 text-gray-400 md:text-lg max-w-3xl mx-auto">
							Potencialize seu fluxo de trabalho com nossas ferramentas de
							desenvolvimento de última geração
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-gray-950 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
							<div className="h-48 bg-gradient-to-br from-[#0C0C17] to-[#1E1E30] flex items-center justify-center">
								<Cpu className="h-16 w-16 text-[#F04339]" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-3 text-gray-200">
									Infraestrutura Otimizada
								</h3>
								<p className="text-gray-400 mb-4">
									Servidores de alto desempenho com processadores AMD Ryzen™ 9
									7900X, armazenamento NVMe e configurações otimizadas para
									desenvolvimento.
								</p>
								<ul className="space-y-2 mb-6">
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-[#F04339]" />
										<span className="text-sm text-gray-400">
											Processadores de última geração
										</span>
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-[#F04339]" />
										<span className="text-sm text-gray-400">
											Armazenamento NVMe ultrarrápido
										</span>
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-[#F04339]" />
										<span className="text-sm text-gray-400">
											Rede de alta velocidade
										</span>
									</li>
								</ul>
							</div>
						</div>

						<div className="bg-gray-950 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
							<div className="h-48 bg-gradient-to-br from-[#0C0C17] to-[#1E1E30] flex items-center justify-center">
								<Code className="h-16 w-16 text-[#F04339]" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-3 text-gray-200">
									DevOps Integrado
								</h3>
								<p className="text-gray-400 mb-4">
									Ferramentas de CI/CD, containers Docker, Kubernetes e
									integração com GitHub, GitLab e Bitbucket para um fluxo de
									trabalho contínuo.
								</p>
								<ul className="space-y-2 mb-6">
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-[#F04339]" />
										<span className="text-sm text-gray-400">
											Pipelines de CI/CD automatizados
										</span>
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-[#F04339]" />
										<span className="text-sm text-gray-400">
											Orquestração Kubernetes
										</span>
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-[#F04339]" />
										<span className="text-sm text-gray-400">
											Integração com repositórios Git
										</span>
									</li>
								</ul>
							</div>
						</div>

						<div className="bg-gray-950 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
							<div className="h-48 bg-gradient-to-br from-[#0C0C17] to-[#1E1E30] flex items-center justify-center">
								<Globe className="h-16 w-16 text-[#F04339]" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-3 text-gray-200">
									Plataformas Modernas
								</h3>
								<p className="text-gray-400 mb-4">
									Suporte para as mais recentes tecnologias de desenvolvimento
									web, incluindo Node.js, Python, PHP 8.2, Ruby e frameworks
									modernos.
								</p>
								<ul className="space-y-2 mb-6">
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-[#F04339]" />
										<span className="text-sm text-gray-400">
											Ambientes Node.js otimizados
										</span>
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-[#F04339]" />
										<span className="text-sm text-gray-400">
											Suporte a Python, PHP e Ruby
										</span>
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-[#F04339]" />
										<span className="text-sm text-gray-400">
											Frameworks modernos pré-configurados
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="mt-16 grid md:grid-cols-3 gap-8">
						<div className="bg-gray-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
							<div className="flex items-center justify-center mb-4">
								<div className="h-12 w-12 bg-[#F04339]/10 rounded-full flex items-center justify-center">
									<Lock className="h-6 w-6 text-[#F04339]" />
								</div>
							</div>
							<h3 className="text-xl font-bold text-center mb-2 text-gray-200">
								Segurança Avançada
							</h3>
							<p className="text-center text-gray-400">
								Proteção contra ameaças, certificados SSL, firewall de
								aplicativos web e monitoramento 24/7
							</p>
						</div>

						<div className="bg-gray-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
							<div className="flex items-center justify-center mb-4">
								<div className="h-12 w-12 bg-[#F04339]/10 rounded-full flex items-center justify-center">
									<Database className="h-6 w-6 text-[#F04339]" />
								</div>
							</div>
							<h3 className="text-xl font-bold text-center mb-2 text-gray-200">
								Bancos de Dados Gerenciados
							</h3>
							<p className="text-center text-gray-400">
								MySQL, PostgreSQL, MongoDB e Redis otimizados e totalmente
								gerenciados para seu aplicativo
							</p>
						</div>

						<div className="bg-gray-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
							<div className="flex items-center justify-center mb-4">
								<div className="h-12 w-12 bg-[#F04339]/10 rounded-full flex items-center justify-center">
									<Zap className="h-6 w-6 text-[#F04339]" />
								</div>
							</div>
							<h3 className="text-xl font-bold text-center mb-2 text-gray-200">
								CDN Global
							</h3>
							<p className="text-center text-gray-400">
								Rede de distribuição de conteúdo global para entrega
								ultrarrápida de seus ativos estáticos
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section - Carrossel */}
			{/* <section className="py-16 bg-gray-950 relative overflow-hidden w-full">
				<div className="container px-4 md:px-6 relative z-10 mx-auto">
					<TestimonialCarousel testimonials={siteConfig.testimonials} />
				</div>
			</section> */}

			{/* Avaliações e Reconhecimentos */}
			<AwardsRecognition />

			{/* Promos Grid */}
			<section
				className={`py-16 bg-gray-950 relative overflow-hidden w-full ${siteConfig.promoCard.active ? "block" : "hidden"}`}
			>
				<div className="container px-4 md:px-6 relative z-10 mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gra-200">
							Ofertas Especiais
						</h2>
						<p className="mt-4 text-gray-400 md:text-lg max-w-3xl mx-auto">
							Confira nossas promoções exclusivas e economize em nossos serviços
							premium
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
	);
}
