import Image from "next/image";
import Link from "next/link";

import { HeadphonesIcon } from "lucide-react";
import { AiFillMessage } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

export function Footer() {
	const footerData = {
		company: {
			logo: {
				src: "./logo-1.png",
				alt: "logo linkor",
				width: 120,
				height: 120,
			},
			description:
				"Porque Deus amou o mundo de tal maneira, que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna - (João 3:16)",
		},
		sections: [
			{
				title: "Hospedagem",
				items: [
					{
						label: "Hospedagem de Site",
						href: "https://app.linkor.host/store/hospedagem-de-site",
					},
					{
						label: "Hospedagem em Cloud",
						href: "#",
					},
					{
						label: "Hospedagem Wordpress",
						href: "#",
					},
					{
						label: "Hospedagem de Site Gamer",
						href: "https://app.linkor.host/store/hospedagem-de-site-gamer",
					},
				],
			},
			{
				title: "Serviços",
				items: [
					{
						label: "Certificados SSL",
						href: "https://app.linkor.host/store/ssl-certificates",
					},
					{
						label: "Serviços de Email",
						href: "https://app.linkor.host/store/email-services",
					},
					{
						label: "Segurança de Site",
						href: "https://app.linkor.host/store/sitelock",
					},
					{
						label: "Backup de Website",
						href: "https://app.linkor.host/store/codeguard",
					},
					{
						label: "Ferramenta SEO",
						href: "https://app.linkor.host/store/marketgoo",
					},
				],
			},
			{
				title: "Fale Conosco",
				items: [
					{
						icon: <HeadphonesIcon className="h-5 w-5 text-[#F04339]" />,
						label: "Atendimento Geral",
						description: "+55 11 5236-0123",
					},
					{
						icon: <AiFillMessage className="h-5 w-5 text-[#F04339]" />,
						label: "Via Discord",
						description: "discord/invite/#",
					},
					{
						icon: <IoIosMail className="h-5 w-5 text-[#F04339]" />,
						label: "Via Email",
						description: "suporte@linkor.host",
					},
				],
			},
		],
		legal: {
			cnpj: "59.818.181/0001-00",
			devBy: {
				// label: "Desenvolvido por",
				// href: "https://loctor.dev",
				// brand: "Loctor",
			},
			links: [
				{ label: "Termos de Serviço", href: "" },
				{ label: "Política de Privacidade", href: "" },
				{ label: "Política de Reembolso", href: "" },
			],
		},
	};

	return (
		<footer className="bg-[#080810] text-white py-16 flex overflow-hidden justify-center">
			<div className="container px-4 md:px-6 relative z-10">
				<div className="grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
					<div>
						<div className="flex items-center gap-2 mb-8">
							<Image
								alt={footerData.company.logo.alt}
								src={footerData.company.logo.src}
								width={footerData.company.logo.width}
								height={footerData.company.logo.height}
							/>
						</div>
						<p className="text-sm text-gray-400 mb-6">
							{footerData.company.description}
						</p>
					</div>

					{footerData.sections.map((section, i) => (
						<div key={i}>
							<h4 className="font-medium text-lg mb-6 text-white">
								{section.title}
							</h4>
							<ul className="space-y-4">
								{section.items.map((item: any, index: number) => (
									<li key={index}>
										{"icon" in item ? (
											<div className="flex items-center gap-3">
												<div className="bg-gradient-to-r from-[#F04339]/20 to-[#FF6B5B]/20 p-2 rounded-full">
													{item.icon}
												</div>
												<div>
													<p className="text-sm font-medium text-white">
														{item.label}
													</p>
													<p className="text-sm text-[#F04339]">
														{item.description}
													</p>
												</div>
											</div>
										) : (
											<Link
												href={item.href}
												className="text-gray-400 hover:text-[#F04339] transition-colors"
											>
												{item.label}
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="border-t border-gray-800 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-6">
						<p className="text-sm text-gray-500">
							Linkor Brasil Ltda, uma empresa brasileira ❤ Copyright &copy; 2024
							- {new Date().getFullYear()} | CNPJ {footerData.legal.cnpj}
						</p>
						<a
							href={footerData.legal.devBy.href}
							target="_blank"
							className="text-sm text-gray-400 mt-4 md:mt-0"
						>
							{footerData.legal.devBy.label}{" "}
							<span className="text-[#F04339]">
								{footerData.legal.devBy.brand}
							</span>
						</a>
						<div className="flex gap-4 items-center">
							{footerData.legal.links.map((link, i) => (
								<a
									key={i}
									href={link.href}
									target="_blank"
									className="text-sm text-gray-400 mt-4 md:mt-0 hover:text-[#F04339]"
								>
									{link.label}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
