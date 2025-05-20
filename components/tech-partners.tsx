"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TechPartner {
	name: string;
	logo: string;
	width: number;
}

export function TechPartners() {
	const partners: TechPartner[] = [
		{ name: "AMD", logo: "/amd_logo.png", width: 120 },
		{ name: "Intel", logo: "/intel_logo.png", width: 140 },
		{ name: "Cirion", logo: "/cirion_logo.png", width: 130 },
		{ name: "Ascent", logo: "/ascent.png", width: 100 },
		{ name: "Cloudflare", logo: "/cloudflare.png", width: 180 },
		{ name: "UPIX", logo: "/Upx.png", width: 140 },
	];

	return (
		<section className="w-full bg-[#0C0C17] py-16 relative overflow-hidden rounded-b-xl">
			<div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0C0C17]/80 to-transparent"></div>

			<div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0C0C17]/80 to-transparent"></div>

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-2xl md:text-3xl font-bold text-white">
						Tecnologias de Ponta que Utilizamos
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-[#F04339] to-[#FF6B5B] mx-auto mt-4"></div>
				</motion.div>

				<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16 lg:gap-x-24">
					{partners.map((partner, index) => (
						<motion.div
							key={partner.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="relative group"
						>
							<Image
								src={partner.logo || "/placeholder.svg"}
								alt={`${partner.name} logo`}
								width={partner.width}
								height={50}
								className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
								style={{ objectFit: "contain", height: "40px" }}
							/>
							<motion.div
								className="absolute -inset-2 -z-10 rounded-lg opacity-0 group-hover:opacity-100"
								transition={{ duration: 0.3 }}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
