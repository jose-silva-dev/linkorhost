"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
	Server,
	Shield,
	Zap,
	Clock,
	Database,
	Code,
	ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface Feature {
	id: string;
	title: string;
	link: string;
	description: string;
	icon: React.ReactNode;
	image: string;
	color: string;
}

export function FeatureShowcase() {
	const [activeFeature, setActiveFeature] = useState<string>("performance");

	const features: Feature[] = [
		{
			id: "performance",
			title: "Desempenho Excepcional",
			link: "#",
			description:
				"Servidores equipados com processadores AMD Ryzen™ 9 e Intel® Xeon® Platinum, armazenamento NVMe e rede de 10Gbps para garantir velocidade máxima para suas aplicações.",
			icon: <Zap className="h-6 w-6" />,
			image: "/cloud-infrastructure-3d.png",
			color: "from-blue-500 to-purple-600",
		},
		{
			id: "security",
			title: "Segurança Avançada",
			link: "#",
			description:
				"Proteção DDoS de nível empresarial, firewalls inteligentes, certificados SSL gratuitos e monitoramento 24/7 para manter seus dados seguros.",
			icon: <Shield className="h-6 w-6" />,
			image:
				"/placeholder.svg?height=400&width=600&query=cybersecurity%20shield%20protection%20digital%20concept",
			color: "from-red-500 to-orange-500",
		},
		{
			id: "uptime",
			title: "99,99% de Uptime",
			link: "#",
			description:
				"Infraestrutura redundante, balanceamento de carga automático e sistemas de backup garantem que seu site permaneça online mesmo durante picos de tráfego.",
			icon: <Clock className="h-6 w-6" />,
			image:
				"/placeholder.svg?height=400&width=600&query=server%20uptime%20monitoring%20dashboard%20digital",
			color: "from-green-500 to-teal-500",
		},
		{
			id: "scalability",
			title: "Escalabilidade Instantânea",
			link: "#",
			description:
				"Aumente ou diminua recursos conforme necessário, sem tempo de inatividade. Pague apenas pelo que usar com nossa infraestrutura cloud flexível.",
			icon: <Server className="h-6 w-6" />,
			image:
				"/placeholder.svg?height=400&width=600&query=cloud%20computing%20scalability%20concept%20digital",
			color: "from-purple-500 to-indigo-600",
		},
		{
			id: "database",
			title: "Bancos de Dados Otimizados",
			link: "#",
			description:
				"MySQL, PostgreSQL, MongoDB e Redis totalmente gerenciados e otimizados para desempenho máximo com backups automáticos.",
			icon: <Database className="h-6 w-6" />,
			image:
				"/placeholder.svg?height=400&width=600&query=database%20management%20system%20digital%20concept",
			color: "from-yellow-500 to-amber-600",
		},
		{
			id: "developer",
			title: "Ferramentas para Desenvolvedores",
			link: "#",
			description:
				"Integração com Git, CI/CD, containers Docker, Kubernetes e suporte para todas as principais linguagens e frameworks modernos.",
			icon: <Code className="h-6 w-6" />,
			image:
				"/placeholder.svg?height=400&width=600&query=software%20development%20tools%20code%20digital",
			color: "from-cyan-500 to-blue-600",
		},
	];

	const currentFeature =
		features.find((f) => f.id === activeFeature) || features[0];

	return (
		<section className="py-20 bg-[#0C0C17] relative overflow-hidden w-full">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold">
						Recursos de Classe Mundial para seu{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]">
							Negócio Digital
						</span>
					</h2>
					<p className="mt-4 text-[#8f8f8f] md:text-lg max-w-3xl mx-auto">
						Nossa plataforma combina tecnologia de ponta com facilidade de uso
						para impulsionar seu crescimento online
					</p>
				</motion.div>

				<div className="grid md:grid-cols-12 gap-8 items-center">
					<div className="md:col-span-5 order-2 md:order-1">
						<div className="bg-gray-950 rounded-2xl p-6 md:p-8 shadow-lg">
							<div className="space-y-4 mb-8">
								{features.map((feature) => (
									<motion.div
										key={feature.id}
										onClick={() => setActiveFeature(feature.id)}
										className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
											activeFeature === feature.id
												? `bg-[#0C0C17] text-white shadow-md`
												: "bg-[#0C0C17] text-gray-200"
										}`}
										whileHover={{ x: activeFeature === feature.id ? 0 : 5 }}
										whileTap={{ scale: 0.98 }}
									>
										<div
											className={`w-12 h-12 rounded-full flex items-center justify-center ${
												activeFeature === feature.id
													? `bg-gradient-to-r ${feature.color} bg-opacity-10`
													: `bg-gradient-to-r ${feature.color} bg-opacity-10`
											}`}
										>
											{feature.icon}
										</div>
										<div>
											<h3
												className={`font-bold ${activeFeature === feature.id ? "text-white" : "text-gray-400"}`}
											>
												{feature.title}
											</h3>
											{activeFeature === feature.id && (
												<motion.p
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: "auto" }}
													exit={{ opacity: 0, height: 0 }}
													className="text-sm mt-2"
												>
													{feature.description}
												</motion.p>
											)}
										</div>
										{activeFeature === feature.id && (
											<motion.div
												initial={{ opacity: 0, scale: 0 }}
												animate={{ opacity: 1, scale: 1 }}
												className="ml-auto"
											>
												<ChevronRight className="h-5 w-5" />
											</motion.div>
										)}
									</motion.div>
								))}
							</div>

							<div className="text-center">
								<Link href={`${siteConfig.app}/store/hospedagem-de-site-gamer`}>
									<Button className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] hover:from-[#FF6B5B] hover:to-[#F04339] text-white">
										Explorar Todos os Recursos
									</Button>
								</Link>
							</div>
						</div>
					</div>

					<div className="md:col-span-7 order-1 md:order-2">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeFeature}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.5 }}
								className="relative"
							>
								<div
									className={`absolute inset-0 bg-gradient-to-br ${currentFeature.color} rounded-2xl opacity-20 blur-2xl`}
								/>
								<div className="relative bg-gray-950 rounded-2xl shadow-xl overflow-hidden border border-gray-900">
									<div className="p-6">
										<div className="flex items-center gap-4 mb-6">
											<div
												className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentFeature.color} flex items-center justify-center text-white`}
											>
												{currentFeature.icon}
											</div>
											<h3 className="text-xl font-bold text-gray-200">
												{currentFeature.title}
											</h3>
										</div>

										<div className="aspect-video relative rounded-lg overflow-hidden mb-6">
											<Image
												src={currentFeature.image || "/placeholder.svg"}
												alt={currentFeature.title}
												fill
												className="object-cover"
											/>
										</div>

										<p className="text-gray-300">
											{currentFeature.description}
										</p>

										<div className="mt-6 flex justify-end">
											<Link href={currentFeature.link}>
												<Button className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] hover:from-[#FF6B5B] hover:to-[#F04339] text-white">
													Saiba Mais
													<ChevronRight className="ml-2 h-4 w-4" />
												</Button>
											</Link>
										</div>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
