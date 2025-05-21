"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Network, Gauge, Shield, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function GameServerComparison() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	const features = [
		{
			icon: <Globe className="h-6 w-6 text-[#F04339]" />,
			title: "Otimização em Tempo Real",
			description:
				"Rotas inteligentes que se ajustam automaticamente para garantir a menor latência. Conecte-se aos seus jogos com um único clique e diga adeus aos travamentos e desconexões.",
		},
		{
			icon: <Network className="h-6 w-6 text-[#F04339]" />,
			title: "Traffic Shaper",
			description:
				"Otimizamos o tráfego da sua conexão para priorizar dados de jogos e reduzir interferências. Garanta rotas mais rápidas, estáveis e com desempenho superior em qualquer partida.",
		},
		{
			icon: <Shield className="h-6 w-6 text-[#F04339]" />,
			title: "Multi-Internet",
			description:
				"Conecte-se com múltiplas redes simultaneamente. Em caso de falha ou instabilidade em uma delas, a troca é feita automaticamente e sem interrupções.",
		},
		{
			icon: <Gauge className="h-6 w-6 text-[#F04339]" />,
			title: "FPS Boost",
			description:
				"Ajustamos e otimizamos o sistema operacional e os recursos do servidor para entregar o máximo de desempenho em jogos — mais frames por segundo, menor tempo de resposta.",
		},
	];

	return (
		<section className="py-16 bg-[#0C0C17] relative overflow-hidden w-full">
			<div className="container px-4 md:px-6 relative z-10 mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
						Desempenho <span className="text-[#F04339]">Superior</span> para
						seus Jogos
					</h2>
					<p className="mt-4 text-gray-300 md:text-xl max-w-3xl mx-auto">
						Compare a diferença entre servidores de jogos hospedados na Linkor e
						na concorrência
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-6 mb-16">
					{/* Lado Linkor */}
					<motion.div
						className="flex-1 bg-[#0F0F1A] rounded-xl overflow-hidden border-2 border-[#1A1A35] shadow-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
						transition={{ duration: 0.5 }}
					>
						<div className="p-4 bg-gradient-to-r from-[#1A1A35] to-[#0F0F1A] flex items-center justify-between">
							<div className="flex items-center">
								<Server className="h-5 w-5 text-[#F04339] mr-2" />
								<h3 className="font-bold text-white">
									Servidor Hospedado na Linkor 👍
								</h3>
							</div>
							<div className="bg-[#F04339]/10 text-[#F04339] text-xs font-bold px-2 py-1 rounded-full">
								RECOMENDADO
							</div>
						</div>

						<div className="relative h-[300px] bg-black">
							<video
								src="https://www.exitlag.com/templates/exit-lag/img/promotion/ExlV5/Exitlag_V5_ON.webm"
								className="object-cover opacity-70 z-0"
								autoPlay
								muted
								loop
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
									<div className="flex items-center justify-between">
										<div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 inline-flex items-center">
											<div className="mr-4">
												<p className="text-xs text-gray-400">Ping Estimado</p>
												<p className="text-2xl font-bold text-green-400">
													15ms
												</p>
											</div>
											<div>
												<p className="text-xs text-gray-400">FPS</p>
												<p className="text-2xl font-bold text-green-400">60</p>
											</div>
										</div>
										<div className="bg-black/70 backdrop-blur-sm rounded-lg p-2">
											<div className="flex items-center space-x-2">
												<div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
												<span className="text-xs text-white font-medium">
													ONLINE
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/30">
								<div className="flex items-center">
									<div className="h-2 w-2 bg-green-400 rounded-full mr-2"></div>
									<span className="text-xs text-green-400 font-medium">
										Hospedado na Linkor
									</span>
								</div>
							</div>

							<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
								<div className="text-green-400 font-bold text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
									VANTAGEM NO PVP
								</div>
							</div>
						</div>

						<div className="p-6 bg-[#0F0F1A] relative z-10">
							<h4 className="text-xl font-bold text-white mb-2">
								Experiência Premium
							</h4>
							<ul className="space-y-3">
								<li className="flex items-start">
									<div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-3">
										<div className="h-2 w-2 bg-green-500 rounded-full"></div>
									</div>
									<span className="text-gray-300">
										Ping baixo e estável (2-15ms)
									</span>
								</li>
								<li className="flex items-start">
									<div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-3">
										<div className="h-2 w-2 bg-green-500 rounded-full"></div>
									</div>
									<span className="text-gray-300">
										Taxa de frames consistente (60+ FPS)
									</span>
								</li>
								<li className="flex items-start">
									<div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-3">
										<div className="h-2 w-2 bg-green-500 rounded-full"></div>
									</div>
									<span className="text-gray-300">
										Sem quedas ou travamentos
									</span>
								</li>
								<li className="flex items-start">
									<div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-3">
										<div className="h-2 w-2 bg-green-500 rounded-full"></div>
									</div>
									<span className="text-gray-300">Proteção DDoS Gamer Inclusa</span>
								</li>
							</ul>

							<div className="mt-6">
								<Link
									href={siteConfig.gameServer.link}
									className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#F04339] to-[#FF6B5B] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-all"
								>
									Ver Planos de Servidores
								</Link>
							</div>
						</div>
					</motion.div>

					{/* Lado Concorrente */}
					<motion.div
						className="flex-1 bg-[#0F0F1A] rounded-xl overflow-hidden border-2 border-[#1A1A35] shadow-lg opacity-90"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className="p-4 bg-gradient-to-r from-[#1A1A35] to-[#0F0F1A] flex items-center justify-between">
							<div className="flex items-center">
								<Server className="h-5 w-5 text-gray-400 mr-2" />
								<h3 className="font-bold text-white">
									Servidor da Concorrência ​​👎
								</h3>
							</div>
							<div className="bg-gray-700/30 text-gray-400 text-xs font-bold px-2 py-1 rounded-full">
								NÃO RECOMENDADO
							</div>
						</div>

						<div className="relative h-[300px] bg-black">
							<video
								src="https://www.exitlag.com/templates/exit-lag/img/promotion/ExlV5/Exitlag_V5_OFF.webm"
								className="object-cover opacity-70"
								autoPlay
								muted
								loop
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
									<div className="flex items-center justify-between">
										<div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 inline-flex items-center">
											<div className="mr-4">
												<p className="text-xs text-gray-400">Ping Estimado</p>
												<p className="text-2xl font-bold text-red-400">87ms</p>
											</div>
											<div>
												<p className="text-xs text-gray-400">FPS</p>
												<p className="text-2xl font-bold text-red-400">35</p>
											</div>
										</div>
										<div className="bg-black/70 backdrop-blur-sm rounded-lg p-2">
											<div className="flex items-center space-x-2">
												<div className="h-3 w-3 bg-red-400 rounded-full animate-pulse"></div>
												<span className="text-xs text-white font-medium">
													INSTÁVEL
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="absolute top-4 right-4 bg-red-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-red-500/30">
								<div className="flex items-center">
									<div className="h-2 w-2 bg-red-400 rounded-full mr-2"></div>
									<span className="text-xs text-red-400 font-medium">
										Hospedado em outra host
									</span>
								</div>
							</div>
						</div>

						<div className="p-6 bg-[#0F0F1A] relative z-10">
							<h4 className="text-xl font-bold text-white mb-2">
								Experiência Limitada
							</h4>
							<ul className="space-y-3">
								<li className="flex items-start">
									<div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 mr-3">
										<div className="h-2 w-2 bg-red-500 rounded-full"></div>
									</div>
									<span className="text-gray-300">
										Ping alto e instável (65-160ms)
									</span>
								</li>
								<li className="flex items-start">
									<div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 mr-3">
										<div className="h-2 w-2 bg-red-500 rounded-full"></div>
									</div>
									<span className="text-gray-300">
										Quedas frequentes de FPS (abaixo de 45)
									</span>
								</li>
								<li className="flex items-start">
									<div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 mr-3">
										<div className="h-2 w-2 bg-red-500 rounded-full"></div>
									</div>
									<span className="text-gray-300">
										Travamentos em momentos críticos
									</span>
								</li>
								<li className="flex items-start">
									<div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 mr-3">
										<div className="h-2 w-2 bg-red-500 rounded-full"></div>
									</div>
									<span className="text-gray-300">
										Proteção DDoS básica ou inexistente
									</span>
								</li>
							</ul>

							<div className="mt-6">
								<button
									className="w-full inline-flex items-center justify-center bg-gray-700 text-gray-300 font-medium py-3 px-6 rounded-lg opacity-70 cursor-not-allowed"
									disabled
								>
									Não Recomendado
								</button>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Features */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className="bg-[#0F0F1A] p-6 rounded-lg border border-[#1A1A35] hover:border-[#F04339]/50 transition-all cursor-pointer"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
							transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
						>
							<div className="h-12 w-12 rounded-full bg-[#F04339]/10 flex items-center justify-center mb-4">
								{feature.icon}
							</div>
							<h3 className="text-lg font-bold text-white mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-400 text-sm">{feature.description}</p>
						</motion.div>
					))}
				</div>

				<div className="mt-12 text-center">
					<Link
						href={siteConfig.gameServer.link}
						className="inline-flex items-center justify-center bg-gradient-to-r from-[#F04339] to-[#FF6B5B] text-white font-medium py-3 px-8 rounded-lg hover:opacity-90 transition-all"
					>
						Escolha seu Plano de Servidor de Jogos
					</Link>
				</div>
			</div>
		</section>
	);
}
