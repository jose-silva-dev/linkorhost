"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface PromoCardProps {
	image: string;
	title: string;
	subtitle: string;
	features: string[];
	price: string;
	originalPrice?: string;
	ctaText: string;
	isChristmas?: boolean;
}

export function PromoCard({
	image,
	title,
	subtitle,
	features,
	price,
	originalPrice,
	ctaText,
	isChristmas = false,
}: PromoCardProps) {
	return (
		<motion.div
			className="bg-[#0C0C17] rounded-xl overflow-hidden shadow-lg"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			whileHover={{ scale: 1.02 }}
		>
			<div className="relative">
				<Image
					src={image || "/placeholder.svg"}
					alt={title}
					width={600}
					height={600}
					className="w-full object-cover"
				/>
			</div>
			<div className="p-6 text-white">
				<h3 className="text-2xl font-bold mb-1">{title}</h3>
				<p className="text-gray-300 mb-4">{subtitle}</p>

				<ul className="space-y-2 mb-6">
					{features.map((feature, index) => (
						<li key={index} className="flex items-center gap-2">
							<CheckCircle className="h-5 w-5 text-[#F04339]" />
							<span className="text-gray-300">{feature}</span>
						</li>
					))}
				</ul>

				<div className="flex items-center gap-4 mb-6">
					<div>
						{originalPrice && (
							<div className="text-gray-400 text-sm line-through">
								De R$ {originalPrice}
							</div>
						)}
						<div className="text-white text-2xl font-bold">
							{isChristmas ? (
								<span className="text-green-400">R$ {price}</span>
							) : (
								<span>R$ {price}</span>
							)}
							<span className="text-sm font-normal text-gray-300">/mês</span>
						</div>
					</div>

					<Button className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] hover:from-[#FF6B5B] hover:to-[#F04339] ml-auto">
						{ctaText}
					</Button>
				</div>

				{isChristmas && (
					<div className="text-center text-sm text-gray-300">
						<span className="text-green-400">🎄 Promoção de Natal</span> -
						Oferta por tempo limitado
					</div>
				)}
			</div>
		</motion.div>
	);
}
