import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
	title: {
		default: "VPS Gamer com Proteção DDoS no Brasil | Linkor",
		template: `%s - ${siteConfig.name}`,
	},
	description:
		"Hospedagem de servidores com desempenho extremo, baixa latência e proteção DDoS. Ideal para Minecraft, FiveM, Rust, ARK, CS:GO, Satisfactory e outros jogos no Brasil.",
	keywords: [
		"Linkor",
		"VPS Gamer",
		"VPS com Proteção DDoS",
		"VPS para jogos",
		"servidor dedicado",
		"VPS Ryzen",
		"VPS NVMe",
		"servidor no Brasil",
		"servidor de Minecraft",
		"servidor de FiveM",
		"servidor de Rust",
		"servidor de ARK",
		"servidor de CS:GO",
		"servidor de Satisfactory",
		"servidor de Unturned",
		"cloud gaming",
		"baixa latência",
		"infraestrutura brasileira",
		"VPS com alto desempenho",
		"servidor para jogos multiplayer",
		"servidor dedicado para games",
	],
	openGraph: {
		title: "VPS Gamer com Proteção DDoS no Brasil | Linkor",
		description:
			"Hospedagem de jogos com alto desempenho e proteção. VPS com processadores Ryzen, NVMe e datacenter no Brasil para máxima performance.",
		url: "https://linkor.host/",
		siteName: "Linkor",
	},
	twitter: {
		card: "summary_large_image",
		title: "VPS Gamer com Proteção DDoS no Brasil | Linkor",
		description:
			"Desempenho extremo, baixa latência e proteção contra ataques. VPS ideal para jogos como Minecraft, FiveM e mais.",
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<head />
			<body className="min-h-screen text-gray-100 font-heading">
				<div className="relative flex flex-col">
					<Navbar />
					<main className="bg-[#0A0712]">
						{children}
						<Footer />
					</main>
				</div>
			</body>
		</html>
	);
}
