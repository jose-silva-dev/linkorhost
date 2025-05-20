"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface MetricProps {
	title: string;
	value: string;
	unit: string;
	description: string;
	delay: number;
}

function Metric({ title, value, unit, description, delay }: MetricProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
			transition={{ duration: 0.7, delay }}
			className="text-center p-8 border-r border-white/10 last:border-r-0"
		>
			<h3 className="text-white text-lg mb-2">{title}</h3>
			<div className="flex items-center justify-center">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={
						isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
					}
					transition={{ duration: 0.5, delay: delay + 0.2 }}
					className="text-6xl md:text-7xl font-bold text-white"
				>
					{value}
				</motion.span>
				<motion.span
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5, delay: delay + 0.4 }}
					className="text-2xl md:text-3xl text-[#F04339] font-medium ml-1"
				>
					{unit}
				</motion.span>
			</div>
			<motion.p
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 0.5, delay: delay + 0.3 }}
				className="text-gray-400 text-sm mt-3 max-w-[250px] mx-auto"
			>
				{description}
			</motion.p>
		</motion.div>
	);
}

export function PerformanceMetrics() {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true, amount: 0.1 });

	return (
		<section className="w-full bg-[#0f0f1a] py-20 relative overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-black/50 to-transparent"></div>

			<div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-black/50 to-transparent"></div>

			<div className="container mx-auto px-4 relative z-10">
				<div ref={containerRef} className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.7 }}
						className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
					>
						Eleve seu projeto com{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B]">
							infraestrutura de alta performance
						</span>{" "}
						para seus servidores.
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="mt-6 text-gray-300 max-w-3xl mx-auto"
					>
						Maximize o desempenho de suas aplicações com a Linkor, referência em
						tecnologia de ponta para hospedagem no Brasil
					</motion.p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
					<Metric
						title="Latência"
						value="15"
						unit="/ms"
						description="Experiência de jogo fluida e resposta rápida com latência mínima."
						delay={0}
					/>
					<Metric
						title="Redes"
						value="1-10"
						unit="GBPS"
						description="Conexão estável e rápida, garantindo serviços sempre disponíveis."
						delay={0.1}
					/>
					<Metric
						title="Suporte 24/7"
						value="24"
						unit="Horas"
						description="Assistência rápida e eficiente a qualquer hora, todos os dias."
						delay={0.2}
					/>
					<Metric
						title="Proteção DDoS"
						value="388"
						unit="Tbps"
						description="Até 23x vezes maior que os maiores ataques DDoS já registrados"
						delay={0.3}
					/>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.7, delay: 0.5 }}
					className="mt-12 text-center"
				>
					<button className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] hover:from-[#FF6B5B] hover:to-[#F04339] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
						Conheça Nossos Planos
					</button>
				</motion.div>
			</div>
		</section>
	);
}
