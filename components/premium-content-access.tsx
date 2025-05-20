"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
	{
		name: "Envato Elements",
		logo: "/conteudos/provider_envato.svg",
		width: 180,
		height: 60,
	},
	{
		name: "Freepik",
		logo: "/conteudos/provider_freepik.svg",
		width: 70,
		height: 20,
	},

	{
		name: "Flaticon",
		logo: "/conteudos/provider_flaticon.svg",
		width: 180,
		height: 60,
	},
	{
		name: "GPL Vault",
		logo: "/conteudos/provider_gplvault.svg",
		width: 180,
		height: 60,
	},
	{
		name: "Storyblocks",
		logo: "/conteudos/provider_storyblocks.png",
		width: 180,
		height: 60,
	},
	{
		name: "Motion Array",
		logo: "/conteudos/provider_motionarray.svg",
		width: 180,
		height: 60,
	},
	{
		name: "IconScout",
		logo: "/conteudos/provider_iconscout.png",
		width: 180,
		height: 60,
	},
	{
		name: "GPLZONE",
		logo: "/conteudos/provider_gplzone.svg",
		width: 180,
		height: 60,
	},
	{
		name: "FestingerVault",
		logo: "/conteudos/provider_festingervault.svg",
		width: 180,
		height: 60,
	},
	{
		name: "Artlist",
		logo: "/conteudos/provider_artlist.svg",
		width: 180,
		height: 60,
	},
	{
		name: "ProductionCrate",
		logo: "/conteudos/provider_productioncrate.svg",
		width: 180,
		height: 60,
	},
];

const categories = [
	{
		title: "IMAGENS, VETORES E FOTOS",
		count: "+20 milhões",
		description:
			"Inclui fotos, vetores, vídeos, imagens, PSD e modelos gráficos.",
	},
	{
		title: "MODELOS, FONTES E ÁUDIOS",
		count: "+900.000",
		description: "Inclui apresentações, banco de vídeos, fontes e arquivos 3D.",
	},
	{
		title: "TEMAS E PLUGINS WORDPRESS",
		count: "+20.000",
		description:
			"Inclui temas e plugins premium WordPress e extensões para ecommerce.",
	},
];

export function PremiumContentAccess() {
	return (
		<section className="py-16 bg-gray-950 w-full">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-8">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Tenha Acesso Grátis a Conteúdos Premium
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Ao contratar determinados planos de hospedagem, você desbloqueia o acesso a uma seleção incrível de materiais premium — sem pagar nada a mais por isso!
					</p>
				</div>

				{/* Logos dos parceiros */}
				<div className="grid grid-cols-4 gap-x-5 gap-y-5 justify-center mx-auto">
					{partners.map((partner, index) => (
						<motion.div
							key={partner.name}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="flex items-center justify-center"
						>
							<Image
								src={partner.logo || "/placeholder.svg"}
								alt={partner.name}
								width={partner.width}
								height={partner.height}
								className="max-h-12 w-auto object-contain"
							/>
						</motion.div>
					))}
				</div>

				{/* Categorias de conteúdo */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-14">
					{categories.map((category, index) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
							className="text-center"
						>
							<h3 className="text-sm font-semibold text-gray-500 mb-2">
								{category.title}
							</h3>
							<p className="text-4xl font-bold mb-3">{category.count}</p>
							<p className="text-gray-500 text-sm">{category.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
