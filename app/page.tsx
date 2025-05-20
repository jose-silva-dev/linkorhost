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

// Dados dos depoimentos
const testimonials = [
	{
		id: 1,
		name: "Miguel Oliveira",
		role: "CEO",
		company: "TechSolutions",
		image: "/professional-headshot.png",
		rating: 5,
		text: "Desde que migramos para a Linkor, os tempos de carregamento do nosso site diminuíram em 70%. A infraestrutura deles é sólida e a equipe de suporte é incrivelmente responsiva. Melhor decisão que tomamos para nosso e-commerce em crescimento.",
	},
	{
		id: 2,
		name: "Fernanda Lima",
		role: "CTO",
		company: "WebDev Brasil",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FRAME-HOSPEDAGEMDESITES-zh2E6tATHuF7TpcnhHWfJBeTV1ntJq.png",
		rating: 5,
		text: "Nossa experiência com a Linkor tem sido fantástica. Desde a hospedagem até as soluções empresariais, cada aspecto foi tratado com dedicação. Nosso site em WordPress nunca funcionou tão bem.",
	},
	{
		id: 3,
		name: "Carlos Santos",
		role: "Fundador",
		company: "AppStart",
		image: "/professional-man-headshot.png",
		rating: 5,
		text: "À medida que nossa startup cresceu de 10.000 para 1 milhão de usuários, a Linkor cresceu conosco sem esforço. Sua infraestrutura de escalonamento automático lidou com picos de tráfego perfeitamente.",
	},
	{
		id: 4,
		name: "Ana Beatriz",
		role: "Diretora de Marketing",
		company: "E-commerce Express",
		image: "/professional-woman-headshot.png",
		rating: 5,
		text: "A velocidade de carregamento do nosso site melhorou drasticamente após migrarmos para a Linkor. Nossas taxas de conversão aumentaram 35% apenas por causa da melhoria no desempenho. O suporte técnico é excepcional.",
	},
	{
		id: 5,
		name: "Roberto Mendes",
		role: "Desenvolvedor Full Stack",
		company: "DevHouse",
		image: "/professional-man-headshot.png",
		rating: 4,
		text: "Como desenvolvedor, aprecio muito as ferramentas que a Linkor oferece. O ambiente de staging, os pipelines de CI/CD e a facilidade de implantação tornaram meu fluxo de trabalho muito mais eficiente.",
	},
	{
		id: 6,
		name: "Juliana Costa",
		role: "Gerente de Projetos",
		company: "Agência Digital",
		image: "/professional-woman-headshot.png",
		rating: 5,
		text: "Gerenciar múltiplos projetos web se tornou muito mais fácil com a Linkor. O painel de controle intuitivo e as ferramentas de monitoramento nos ajudam a manter tudo funcionando perfeitamente.",
	},
	{
		id: 7,
		name: "Marcelo Alves",
		role: "Proprietário",
		company: "Loja Virtual MegaShop",
		image: "/professional-headshot.png",
		rating: 5,
		text: "Minha loja virtual nunca esteve tão estável. Mesmo durante a Black Friday, com tráfego 10x maior que o normal, o site permaneceu rápido e responsivo. A proteção DDoS da Linkor realmente funciona!",
	},
	{
		id: 8,
		name: "Camila Ferreira",
		role: "Arquiteta de Software",
		company: "TechInnovate",
		image: "/professional-woman-headshot.png",
		rating: 4,
		text: "A flexibilidade da infraestrutura da Linkor nos permitiu escalar conforme necessário. Começamos com um plano básico e crescemos gradualmente sem nenhum tempo de inatividade durante as migrações.",
	},
	{
		id: 9,
		name: "Paulo Henrique",
		role: "Diretor de TI",
		company: "Grupo Empresarial",
		image: "/professional-man-headshot.png",
		rating: 5,
		text: "Após avaliar vários provedores de hospedagem, escolhemos a Linkor pela combinação de desempenho, segurança e custo-benefício. Três anos depois, continuamos extremamente satisfeitos com nossa decisão.",
	},
];

// Dados dos processadores e planos
const processorsData = {
	intel: {
		id: "intel",
		name: "Intel(R) Xeon(R) Platinum",
		description: "Desempenho empresarial",
		icon: <Server className="h-8 w-8 text-blue-600" />,
		iconBg: "bg-blue-100",
		color: "text-blue-600",
		plans: [
			{
				id: "intel-basic",
				name: "Plano Básico",
				specs: "4 vCPU • 8GB RAM • 120GB SSD NVMe",
				price: "89,90",
				link: "#intel-basic",
				popular: false,
			},
			{
				id: "intel-advanced",
				name: "Plano Avançado",
				specs: "8 vCPU • 16GB RAM • 240GB SSD NVMe",
				price: "159,90",
				link: "#intel-advanced",
				popular: true,
			},
			{
				id: "intel-enterprise",
				name: "Plano Enterprise",
				specs: "16 vCPU • 32GB RAM • 480GB SSD NVMe",
				price: "299,90",
				link: "#intel-enterprise",
				popular: false,
			},
		],
	},
	ryzen7900: {
		id: "ryzen7900",
		name: "AMD Ryzen™ 9 7900X",
		description: "Última geração",
		icon: <Cpu className="h-8 w-8 text-[#F04339]" />,
		iconBg: "bg-red-100",
		color: "text-[#F04339]",
		plans: [
			{
				id: "ryzen7900-basic",
				name: "Plano Básico",
				specs: "2 vCPU • 4GB RAM • 80GB SSD NVMe",
				price: "69,90",
				link: "#ryzen7900-basic",
				popular: false,
			},
			{
				id: "ryzen7900-advanced",
				name: "Plano Avançado",
				specs: "4 vCPU • 8GB RAM • 160GB SSD NVMe",
				price: "129,90",
				link: "#ryzen7900-advanced",
				popular: false,
			},
			{
				id: "ryzen7900-enterprise",
				name: "Plano Empresarial",
				specs: "8 vCPU • 16GB RAM • 320GB SSD NVMe",
				price: "249,90",
				link: "#ryzen7900-enterprise",
				popular: true,
			},
		],
	},
	ryzen5900: {
		id: "ryzen5900",
		name: "AMD Ryzen™ 9 5900X",
		description: "Excelente custo-benefício",
		icon: <Cpu className="h-8 w-8 text-[#F04339]" />,
		iconBg: "bg-red-100",
		color: "text-[#F04339]",
		plans: [
			{
				id: "ryzen5900-basic",
				name: "Plano Econômico",
				specs: "2 vCPU • 4GB RAM • 60GB SSD NVMe",
				price: "49,90",
				link: "#ryzen5900-basic",
				popular: false,
			},
			{
				id: "ryzen5900-advanced",
				name: "Plano Plus",
				specs: "4 vCPU • 8GB RAM • 120GB SSD NVMe",
				price: "99,90",
				link: "#ryzen5900-advanced",
				popular: true,
			},
			{
				id: "ryzen5900-enterprise",
				name: "Plano Pro",
				specs: "6 vCPU • 12GB RAM • 240GB SSD NVMe",
				price: "179,90",
				link: "#ryzen5900-enterprise",
				popular: false,
			},
		],
	},
};

export default function Home() {
	const [selectedProcessor, setSelectedProcessor] =
		useState<string>("ryzen7900");

	const processor =
		processorsData[selectedProcessor as keyof typeof processorsData];

	return (
		<div className="flex flex-col mx-auto justify-center items-center">
			{/* Hero Section */}
			<AnimatedHero />

			{/* Stats Counter Section */}
			<section className="py-8 bg-[#0C0C17] flex overflow-hidden w-full mx-auto justify-center">
				<div className="container px-4 md:px-6 relative z-10">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<StatsCounter value={10} suffix="K+" label="Clientes" />
						<StatsCounter value={99.99} suffix="%" label="Uptime" />
						<StatsCounter value={24} suffix="/7" label="Suporte" />
						<StatsCounter value={50} suffix="+" label="Data Centers" />
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
							description="Backups diários automatizados com retenção de 30 dias e funcionalidade de restauração com um clique. Nunca mais se preocupe com perda de dados."
							delay={0.3}
						/>

						<AnimatedFeature
							icon={<Zap className="h-6 w-6 text-[#F04339]" />}
							title="Otimização de Performance"
							description="Configurações de servidor otimizadas com armazenamento SSD, redes de entrega de conteúdo e cache avançado para carregamentos de página ultrarrápidos."
							delay={0.4}
						/>

						<AnimatedFeature
							icon={<Code className="h-6 w-6 text-[#F04339]" />}
							title="Ferramentas para Desenvolvedores"
							description="Suporte completo para stacks de desenvolvimento modernas, incluindo Node.js, Python, Ruby, PHP 8.2 e aplicações em contêineres com Docker e Kubernetes."
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

			<section className="py-16 bg-[#0C0C17] relative overflow-hidden w-full hidden">
				<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-black/50 to-transparent" />

				<div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-black/50 to-transparent" />

				<div className="container px-4 md:px-6 relative z-10 mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Planos Flexíveis para Cada Negócio
						</h2>
						<p className="mt-4 text-g md:text-xl max-w-3xl mx-auto">
							Escolha o plano perfeito para suas necessidades. Todos os planos
							incluem nossa infraestrutura principal sem taxas ocultas.
						</p>
					</div>

					<section className="container mx-auto px-6 flex-grow">
						<section className="pt-[5%] flex flex-col">
							<div className="flex flex-col xl:flex-row items-start gap-16">
								{/* Seleção de Processadores */}
								<div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full xl:w-auto">
									{Object.values(processorsData).map((proc) => (
										<motion.div
											key={proc.id}
											className={`flex flex-col duration-200 hover:bg-gray-950/70 cursor-pointer items-center justify-center bg-gray-950 border-2 rounded-lg p-6 transition-all ${
												selectedProcessor === proc.id
													? `border-gray-800 shadow-lg`
													: "border-gray-800"
											}`}
											onClick={() => setSelectedProcessor(proc.id)}
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											<div
												className={`h-16 w-16 ${proc.iconBg} rounded-full flex items-center justify-center mb-4`}
											>
												{proc.icon}
											</div>
											<p
												className={`text-center font-bold ${selectedProcessor === proc.id ? proc.color : "text-gray-400"}`}
											>
												{proc.name}
											</p>
											<p className="text-center text-sm text-gray-500 mt-2">
												{proc.description}
											</p>
											{selectedProcessor === proc.id && (
												<div
													className={`mt-4 px-3 py-1 rounded-full text-xs font-medium ${
														proc.id === "intel"
															? "bg-blue-100 text-blue-600"
															: "bg-red-100 text-[#F04339]"
													}`}
												>
													Selecionado
												</div>
											)}
										</motion.div>
									))}
								</div>

								{/* Planos para o processador selecionado */}
								<div className="w-full mt-8 xl:mt-0">
									<div className="flex items-center justify-between mb-6">
										<div className="flex items-center">
											<div
												className={`h-12 w-12 ${processor.iconBg} rounded-full flex items-center justify-center`}
											>
												{processor.icon}
											</div>
											<div className="ml-4">
												<p className={`text-xl font-bold ${processor.color}`}>
													{processor.name}
												</p>
												<p className="text-sm text-gray-400">
													{processor.description}
												</p>
											</div>
										</div>
										<div>
											<Link
												href="#"
												className={`text-sm font-medium text-center ${processor.color} flex items-center hover:underline`}
											>
												Ver todos os planos
												<ChevronRight className="h-4 w-4 ml-1" />
											</Link>
										</div>
									</div>

									<div className="grid gap-6">
										{processor.plans.map((plan) => (
											<Link key={plan.id} href={plan.link} className="block">
												<motion.div
													className={`border-2 z-0 ${
														plan.popular
															? `border-${processor.id === "intel" ? "blue-500" : "[#F04339]"}`
															: "border-gray-800"
													} bg-gray-950 p-6 rounded-lg flex items-center justify-between hover:shadow-md transition-all relative`}
													whileHover={{ scale: 1.01, y: -5 }}
													whileTap={{ scale: 0.99 }}
												>
													{plan.popular && (
														<div
															className={`absolute -top-3 right-4 z-10 ${
																processor.id === "intel"
																	? "bg-gradient-to-r from-blue-500 to-blue-600"
																	: "bg-gradient-to-r from-[#F04339] to-[#FF6B5B]"
															} text-white text-xs font-bold px-3 py-1 rounded-full`}
														>
															POPULAR
														</div>
													)}
													<div className="flex items-center">
														<div
															className={`h-12 w-12 ${processor.iconBg} rounded-full flex items-center justify-center`}
														>
															<Server
																className={`h-6 w-6 ${processor.id === "intel" ? "text-blue-600" : "text-[#F04339]"}`}
															/>
														</div>
														<div className="ml-4">
															<h3 className="font-bold text-gray-200">
																{plan.name}
															</h3>
															<p className="text-sm text-gray-400 mt-1">
																{plan.specs}
															</p>
														</div>
													</div>
													<div className="text-right">
														<h3 className="font-bold text-gray-200">
															<span
																className={
																	processor.id === "intel"
																		? "text-blue-600"
																		: "text-[#F04339]"
																}
															>
																R${" "}
															</span>
															{plan.price}
														</h3>
														<p className="text-sm text-gray-400">Por mês</p>
													</div>
												</motion.div>
											</Link>
										))}
									</div>
								</div>
							</div>
						</section>

						<section className="pt-[5%]">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
								<Card className="bg-gray-950 rounded-sm shadow-sm border border-gray-800 hover:shadow-md transition-all">
									<div className="p-4">
										<div className="flex gap-2">
											<Zap size={18} className="mt-1 text-[#F04339]" />
											<h3 className="font-bold text-gray-200">Segurança</h3>
										</div>
										<p className="text-gray-400 text-[14px] pt-1">
											Proteção com Cloudflare, firewall premium e DNS de alta
											performance para conexões seguras e rápidas.
										</p>
									</div>
								</Card>
								<Card className="bg-gray-950 rounded-sm shadow-sm border border-gray-800 hover:shadow-md transition-all">
									<div className="p-4">
										<div className="flex gap-2">
											<Clock size={18} className="mt-1 text-[#F04339]" />
											<h3 className="font-bold text-gray-200">Uptime 99,9%</h3>
										</div>
										<p className="text-gray-400 text-[14px] pt-1">
											Garantimos 99,9% de uptime, mantendo seus sites e
											aplicações sempre online e sem interrupções.
										</p>
									</div>
								</Card>
								<Card className="bg-gray-950 rounded-sm shadow-sm border border-gray-800 hover:shadow-md transition-all">
									<div className="p-4">
										<div className="flex gap-2">
											<HeadphonesIcon
												size={18}
												className="mt-1 text-[#F04339]"
											/>
											<h3 className="font-bold text-gray-200">
												Suporte rápido
											</h3>
										</div>
										<p className="text-gray-400 text-[14px] pt-1">
											Suporte ágil e eficiente, pronto para ajudar você a
											qualquer hora, com atendimento rápido e amigável.
										</p>
									</div>
								</Card>
							</div>
						</section>
					</section>
				</div>
			</section>

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
			<section className="py-16 bg-gray-950 relative overflow-hidden w-full">
				<div className="container px-4 md:px-6 relative z-10 mx-auto">
					<TestimonialCarousel testimonials={testimonials} />
				</div>
			</section>

			{/* Avaliações e Reconhecimentos */}
			<AwardsRecognition />

			{/* Promos Grid */}
			<section
				className={`py-16 bg-gray-950 relative overflow-hidden w-full ${siteConfig.promoCard ? "block" : "hidden"}`}
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
						<PromoCard
							image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DV%20WHATSAPP-JfqpYpH7Ye56LN6S0ldMWFHv0Ztgua.png"
							title="AMD Ryzen™ 9 7900X"
							subtitle="4.7GHz - Até 5.6 GHz"
							features={[
								"2vCPU Ryzen 9",
								"2GB RAM DDR5",
								"40GB NVME",
								"1 IPv4 (/32)",
								"1 IPv6 (/128)",
								"Windows 2012 Até 2025!",
							]}
							price="50,00"
							originalPrice="99,00"
							ctaText="Contratar Agora"
						/>

						<PromoCard
							image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/natal-linkor-500x500-ovjTWyNV5J1tUBBmy6Gz4K8ofaprLI.png"
							title="cPanel ECO-5"
							subtitle="Perfeito para iniciantes"
							features={[
								"Hospedagem para um domínio",
								"5 GB de armazenamento NVMe",
								"1 Conta de e-mail grátis",
								"Tráfego Ilimitado",
								"Litespeed Webserver + QUIC.cloud",
								"Backup semanal",
							]}
							price="6,99"
							ctaText="Aproveitar Oferta"
							isChristmas={true}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
