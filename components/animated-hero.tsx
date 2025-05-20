"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	CheckCircle,
	ArrowRight,
	Server,
	Database,
	Shield,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AnimatedHero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	const imageVariants = {
		hidden: { scale: 0.8, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
		},
	};

	const floatingAnimation = {
		y: ["-5px", "5px", "-5px"],
		transition: {
			duration: 4,
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "loop" as const,
			ease: "easeInOut",
		},
	};

	return (
		<section className="py-12 md:py-24 lg:py-32 bg-[#0C0C17] text-white overflow-hidden flex justify-center w-full">
			<div className="container px-4 md:px-6 relative z-10 max-w-7xl">
				<motion.div
					className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
					variants={containerVariants}
					initial="hidden"
					animate={isVisible ? "visible" : "hidden"}
				>
					<div className="space-y-4">
						<motion.div
							variants={itemVariants}
							className="inline-block rounded-lg bg-gradient-to-r from-[#F04339]/20 to-[#FF6B5B]/20 px-3 py-1 text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B] mb-4 backdrop-blur-sm"
						>
							<motion.span
								animate={{ opacity: [0.7, 1, 0.7] }}
								transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
							>
								Plataforma Cloud de Nova Geração
							</motion.span>
						</motion.div>

						<motion.h1
							variants={itemVariants}
							className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
						>
							Melhor plataforma{" "}
							<motion.span
								className="text-transparent bg-clip-text bg-gradient-to-r from-[#F04339] to-[#FF6B5B] inline-block"
								animate={{ scale: [1, 1.03, 1] }}
								transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
							>
								Para seu Projeto
							</motion.span>
						</motion.h1>

						<motion.p
							variants={itemVariants}
							className="text-[#F2F2F3] md:text-xl max-w-lg"
						>
							Com a plataforma da Linkor, você gerencia seus servidores com facilidade.
							Oferecemos VPS de alto desempenho para garantir a melhor experiência.
						</motion.p>

						<motion.ul variants={itemVariants} className="space-y-2">
							{[
								"Infraestrutura de nível empresarial",
								"Migração gratuita assistida",
								"Suporte especializado 24/7",
							].map((item, index) => (
								<motion.li
									key={index}
									className="flex items-center gap-2"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
								>
									<motion.div
										animate={{
											scale: [1, 1.2, 1],
											color: ["#F04339", "#ff6b63", "#F04339"],
										}}
										transition={{
											duration: 2,
											repeat: Number.POSITIVE_INFINITY,
											delay: index * 0.3,
										}}
									>
										<CheckCircle className="h-5 w-5 text-[#F04339]" />
									</motion.div>
									<span>{item}</span>
								</motion.li>
							))}
						</motion.ul>

						<motion.div
							variants={itemVariants}
							className="flex flex-col sm:flex-row gap-3 pt-4"
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								<Button
									size="lg"
									className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] hover:from-[#FF6B5B] hover:to-[#F04339] group"
								>
									Aproveitar ofertas
									<motion.div
										animate={{ x: [0, 5, 0] }}
										transition={{
											duration: 1.5,
											repeat: Number.POSITIVE_INFINITY,
										}}
										className="ml-2"
									>
										<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
									</motion.div>
								</Button>
							</motion.div>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className="flex items-center gap-2 pt-4"
						>
							<div className="flex">
								{[1, 2, 3, 4, 5].map((star) => (
									<motion.svg
										key={star}
										className="h-5 w-5 fill-[#F04339]"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										animate={{
											scale: [1, 1.2, 1],
											opacity: [0.8, 1, 0.8],
										}}
										transition={{
											duration: 2,
											repeat: Number.POSITIVE_INFINITY,
											delay: star * 0.2,
										}}
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</motion.svg>
								))}
							</div>
							<span className="text-sm font-medium">5.0</span>
							<span className="text-sm text-[#F2F2F3]">
								Atendimento mais bem avaliado em 2025
							</span>
						</motion.div>
					</div>

					<motion.div
						className="relative"
						variants={imageVariants}
						animate={isVisible ? "visible" : "hidden"}
					>
						<motion.div className="relative w-full overflow-hidden rounded-xl">
							<motion.div animate={floatingAnimation} className="h-full">
								<Image
									src="/frame-vps-v1.png"
									alt="Infraestrutura Cloud"
									width="520"
									height="520"
									className="object-contain"
									priority
								/>
							</motion.div>

							{/* Floating icons */}
							<motion.div
								className="absolute top-1/4 right-8 bg-white/10 backdrop-blur-md p-2 rounded-full"
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1.2, duration: 0.5 }}
								animate={floatingAnimation}
							>
								<Server className="h-6 w-6 text-[#F04339]" />
							</motion.div>

							<motion.div
								className="absolute bottom-1/4 left-8 bg-white/10 backdrop-blur-md p-2 rounded-full"
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1.4, duration: 0.5 }}
								animate={{
									y: ["-8px", "8px", "-8px"],
									transition: {
										duration: 5,
										repeat: Number.POSITIVE_INFINITY,
										repeatType: "loop",
										ease: "easeInOut",
									},
								}}
							>
								<Database className="h-6 w-6 text-[#FF6B5B]" />
							</motion.div>

							<motion.div
								className="absolute top-1/2 left-1/4 bg-white/10 backdrop-blur-md p-2 rounded-full"
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1.6, duration: 0.5 }}
								animate={{
									y: ["-10px", "10px", "-10px"],
									transition: {
										duration: 6,
										repeat: Number.POSITIVE_INFINITY,
										repeatType: "loop",
										ease: "easeInOut",
									},
								}}
							>
								<Shield className="h-6 w-6 text-[#F04339]" />
							</motion.div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
