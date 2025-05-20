"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	CheckIcon,
	XIcon,
	ServerIcon,
	DatabaseIcon,
	GlobeIcon,
	ShieldIcon,
	ZapIcon,
	InfoIcon,
	ArrowRightIcon,
	PlusIcon,
	MinusIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PlanFeature {
	text: string;
	included: boolean;
	tooltip?: string;
	highlight?: boolean;
}

interface HostingPlan {
	id: string;
	name: string;
	price: string;
	annualPrice?: string;
	storage: string;
	bandwidth: string;
	domains: string;
	databases: string;
	features: PlanFeature[];
	recommended?: boolean;
}

const cpanelPlans = [
	{
		id: "starter",
		name: "Starter",
		price: "19,90",
		annualPrice: "15,90",
		storage: "10 GB SSD NVMe",
		bandwidth: "Ilimitado",
		domains: "1 domínio",
		databases: "5 MySQL",
		features: [
			{ text: "cPanel Completo", included: true },
			{ text: "Certificado SSL Grátis", included: true },
			{ text: "5 Contas de Email", included: true },
			{
				text: "Backup Diário",
				included: true,
				tooltip: "Backups automáticos com retenção de 7 dias",
			},
			{ text: "Construtor de Sites", included: false },
			{ text: "Proteção Cloudflare", included: false },
			{ text: "LiteSpeed Web Server", included: true, highlight: true },
			{ text: "PHP 8.2", included: true },
			{ text: "Instalador de aplicativos", included: true },
			{ text: "Migração gratuita", included: true },
		],
	},
	{
		id: "business",
		name: "Business",
		price: "39,90",
		annualPrice: "31,90",
		storage: "25 GB SSD NVMe",
		bandwidth: "Ilimitado",
		domains: "5 domínios",
		databases: "20 MySQL",
		features: [
			{ text: "cPanel Completo", included: true },
			{ text: "Certificado SSL Grátis", included: true },
			{ text: "20 Contas de Email", included: true },
			{
				text: "Backup Diário",
				included: true,
				tooltip: "Backups automáticos com retenção de 15 dias",
			},
			{ text: "Construtor de Sites", included: true, highlight: true },
			{ text: "Proteção Cloudflare", included: true, highlight: true },
			{ text: "LiteSpeed Web Server", included: true },
			{ text: "PHP 8.2", included: true },
			{ text: "Instalador de aplicativos", included: true },
			{ text: "Migração gratuita", included: true },
			{ text: "Cache avançado", included: true, highlight: true },
			{ text: "CDN integrada", included: true },
		],
		recommended: true,
	},
	{
		id: "enterprise",
		name: "Enterprise",
		price: "79,90",
		annualPrice: "63,90",
		storage: "50 GB SSD NVMe",
		bandwidth: "Ilimitado",
		domains: "Ilimitados",
		databases: "Ilimitados MySQL",
		features: [
			{ text: "cPanel Completo", included: true },
			{ text: "Certificado SSL Grátis", included: true },
			{ text: "Contas de Email Ilimitadas", included: true, highlight: true },
			{
				text: "Backup Diário",
				included: true,
				tooltip: "Backups automáticos com retenção de 30 dias",
			},
			{ text: "Construtor de Sites", included: true },
			{ text: "Proteção Cloudflare Premium", included: true, highlight: true },
			{ text: "LiteSpeed Web Server", included: true },
			{ text: "PHP 8.2", included: true },
			{ text: "Instalador de aplicativos", included: true },
			{ text: "Migração gratuita", included: true },
			{ text: "Cache avançado", included: true },
			{ text: "CDN integrada", included: true },
			{ text: "IP dedicado", included: true, highlight: true },
			{ text: "Recursos dedicados", included: true, highlight: true },
			{ text: "Suporte prioritário", included: true, highlight: true },
		],
	},
];

const pleskPlans = [
	{
		id: "basic",
		name: "Basic",
		price: "24,90",
		annualPrice: "19,90",
		storage: "15 GB SSD NVMe",
		bandwidth: "Ilimitado",
		domains: "2 domínios",
		databases: "10 MySQL",
		features: [
			{ text: "Plesk Obsidian", included: true },
			{ text: "Certificado SSL Grátis", included: true },
			{ text: "10 Contas de Email", included: true },
			{ text: "Backup Semanal", included: true },
			{ text: "WordPress Toolkit", included: false },
			{ text: "Proteção Imunify360", included: false },
			{ text: "Git integrado", included: true, highlight: true },
			{ text: "Docker suporte", included: false },
			{ text: "Node.js, Python, PHP", included: true },
			{ text: "Migração gratuita", included: true },
		],
	},
	{
		id: "professional",
		name: "Professional",
		price: "49,90",
		annualPrice: "39,90",
		storage: "30 GB SSD NVMe",
		bandwidth: "Ilimitado",
		domains: "10 domínios",
		databases: "30 MySQL",
		features: [
			{ text: "Plesk Obsidian", included: true },
			{ text: "Certificado SSL Grátis", included: true },
			{ text: "30 Contas de Email", included: true },
			{ text: "Backup Diário", included: true },
			{ text: "WordPress Toolkit", included: true, highlight: true },
			{ text: "Proteção Imunify360", included: true, highlight: true },
			{ text: "Git integrado", included: true },
			{ text: "Docker suporte", included: true, highlight: true },
			{ text: "Node.js, Python, PHP", included: true },
			{ text: "Migração gratuita", included: true },
			{ text: "CI/CD pipeline", included: true, highlight: true },
			{ text: "Staging environments", included: true },
		],
		recommended: true,
	},
	{
		id: "ultimate",
		name: "Ultimate",
		price: "89,90",
		annualPrice: "71,90",
		storage: "75 GB SSD NVMe",
		bandwidth: "Ilimitado",
		domains: "Ilimitados",
		databases: "Ilimitados MySQL",
		features: [
			{ text: "Plesk Obsidian", included: true },
			{ text: "Certificado SSL Grátis", included: true },
			{ text: "Contas de Email Ilimitadas", included: true, highlight: true },
			{ text: "Backup Diário", included: true },
			{ text: "WordPress Toolkit Deluxe", included: true, highlight: true },
			{ text: "Proteção Imunify360 Premium", included: true, highlight: true },
			{ text: "Git integrado", included: true },
			{ text: "Docker suporte", included: true },
			{ text: "Node.js, Python, PHP", included: true },
			{ text: "Migração gratuita", included: true },
			{ text: "CI/CD pipeline", included: true },
			{ text: "Staging environments", included: true },
			{ text: "IP dedicado", included: true, highlight: true },
			{ text: "Recursos dedicados", included: true, highlight: true },
			{ text: "Suporte prioritário", included: true, highlight: true },
		],
	},
];

export function HostingPlans() {
	const [activeTab, setActiveTab] = useState("cpanel");
	const [isAnnual, setIsAnnual] = useState(false);
	const [expandedFeatures, setExpandedFeatures] = useState<
		Record<string, boolean>
	>({});
	const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

	const plans = activeTab === "cpanel" ? cpanelPlans : pleskPlans;

	const toggleFeatures = (planId: string) => {
		setExpandedFeatures((prev) => ({
			...prev,
			[planId]: !prev[planId],
		}));
	};

	return (
		<section className="py-24 bg-[#0C0C17] w-full">
			<div className="container px-4 mx-auto max-w-7xl">
				<div className="flex flex-col items-center mb-16">
					<h2 className="text-4xl font-bold tracking-tight text-white mb-4">
						Hospedagem Web
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl text-center">
						Infraestrutura de alta performance com tecnologia de ponta para seu
						site
					</p>
				</div>

				<div className="flex flex-col space-y-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-6">
						<Tabs
							value={activeTab}
							onValueChange={setActiveTab}
							className="w-full"
						>
							<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
								<TabsList className="bg-gray-950 border border-[#1A1A35] p-1 h-12">
									<TabsTrigger
										value="cpanel"
										className="data-[state=active]:bg-[#1A1A35] data-[state=active]:text-white text-gray-400 h-10 px-6"
									>
										cPanel
									</TabsTrigger>
									<TabsTrigger
										value="plesk"
										className="data-[state=active]:bg-[#1A1A35] data-[state=active]:text-white text-gray-400 h-10 px-6"
									>
										Plesk
									</TabsTrigger>
								</TabsList>

								<div className="flex items-center gap-3">
									<span className="text-gray-400 text-sm">Mensal</span>
									<Switch
										checked={isAnnual}
										onCheckedChange={setIsAnnual}
										className="data-[state=checked]:bg-[#F04339]"
									/>
									<span className="text-gray-400 text-sm flex items-center gap-2">
										Anual
										<span className="bg-[#F04339]/10 text-[#F04339] text-xs px-2 py-0.5 rounded-full">
											-20%
										</span>
									</span>
								</div>
							</div>

							<TabsContent value="cpanel" className="mt-0">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
									{cpanelPlans.map((plan) => (
										<PlanCard
											key={plan.id}
											plan={plan}
											isAnnual={isAnnual}
											isExpanded={!!expandedFeatures[plan.id]}
											toggleFeatures={() => toggleFeatures(plan.id)}
											isSelected={selectedPlan === plan.id}
											onSelect={() =>
												setSelectedPlan(
													plan.id === selectedPlan ? null : plan.id,
												)
											}
										/>
									))}
								</div>
							</TabsContent>

							<TabsContent value="plesk" className="mt-0">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
									{pleskPlans.map((plan) => (
										<PlanCard
											key={plan.id}
											plan={plan}
											isAnnual={isAnnual}
											isExpanded={!!expandedFeatures[plan.id]}
											toggleFeatures={() => toggleFeatures(plan.id)}
											isSelected={selectedPlan === plan.id}
											onSelect={() =>
												setSelectedPlan(
													plan.id === selectedPlan ? null : plan.id,
												)
											}
										/>
									))}
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
}

function PlanCard({
	plan,
	isAnnual,
	isExpanded,
	toggleFeatures,
	isSelected,
	onSelect,
}: {
	plan: (typeof cpanelPlans)[0];
	isAnnual: boolean;
	isExpanded: boolean;
	toggleFeatures: () => void;
	isSelected: boolean;
	onSelect: () => void;
}) {
	const price = isAnnual ? plan.annualPrice || plan.price : plan.price;
	const featuresLimit = 5;
	const hasMoreFeatures = plan.features.length > featuresLimit;

	return (
		<div
			className={cn(
				"bg-gray-950 border rounded-lg transition-all duration-300 cursor-pointer",
				isSelected
					? "border-[#F04339] shadow-[0_0_20px_rgba(240,67,57,0.15)]"
					: "border-[#1A1A35] hover:border-[#F04339]/50",
			)}
		>
			<div className="p-6">
				<div className="flex justify-between items-start mb-6">
					<div>
						<h3 className="text-xl font-medium text-white">{plan.name}</h3>
						<div className="flex items-baseline mt-2">
							<span className="text-3xl font-bold text-white">R$ {price}</span>
							<span className="text-sm text-gray-400 ml-2">/mês</span>
						</div>
					</div>
					{plan.recommended && (
						<div className="bg-[#F04339]/10 text-[#F04339] text-xs px-3 py-1.5 rounded-md font-medium">
							Recomendado
						</div>
					)}
				</div>

				<div className="space-y-4 mb-6">
					<div className="flex items-center gap-3">
						<ServerIcon className="w-4 h-4 text-[#F04339]" />
						<span className="text-gray-300">{plan.storage}</span>
					</div>
					<div className="flex items-center gap-3">
						<ZapIcon className="w-4 h-4 text-[#F04339]" />
						<span className="text-gray-300">Tráfego {plan.bandwidth}</span>
					</div>
					<div className="flex items-center gap-3">
						<GlobeIcon className="w-4 h-4 text-[#F04339]" />
						<span className="text-gray-300">{plan.domains}</span>
					</div>
					<div className="flex items-center gap-3">
						<DatabaseIcon className="w-4 h-4 text-[#F04339]" />
						<span className="text-gray-300">{plan.databases}</span>
					</div>
				</div>

				<div className="space-y-3 mb-6">
					{plan.features
						.slice(0, isExpanded ? undefined : featuresLimit)
						.map((feature, index) => (
							<div key={index} className="flex items-start gap-3">
								{feature.included ? (
									<CheckIcon
										className={cn(
											"w-4 h-4 mt-0.5",
											feature.highlight ? "text-[#F04339]" : "text-emerald-500",
										)}
									/>
								) : (
									<XIcon className="w-4 h-4 mt-0.5 text-gray-600" />
								)}
								<span
									className={cn(
										"text-sm",
										feature.included
											? feature.highlight
												? "text-white font-medium"
												: "text-gray-300"
											: "text-gray-500",
									)}
								>
									{feature.text}
									{feature.tooltip && (
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger asChild>
													<InfoIcon className="inline-block h-3 w-3 ml-1 text-gray-500 cursor-help" />
												</TooltipTrigger>
												<TooltipContent className="bg-[#1A1A35] border-[#1A1A35] text-white">
													<p>{feature.tooltip}</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									)}
								</span>
							</div>
						))}

					{hasMoreFeatures && (
						<button
							onClick={toggleFeatures}
							className="flex items-center gap-1 text-sm text-[#F04339] hover:text-[#F04339]/80 transition-colors mt-2"
						>
							{isExpanded ? (
								<>
									<MinusIcon className="w-3 h-3" />
									<span>Mostrar menos</span>
								</>
							) : (
								<>
									<PlusIcon className="w-3 h-3" />
									<span>Mostrar mais</span>
								</>
							)}
						</button>
					)}
				</div>

				<div className="flex flex-col gap-3">
					<Button
						onClick={onSelect}
						className={cn(
							"w-full py-5 rounded-md transition-colors",
							isSelected
								? "bg-[#F04339] hover:bg-[#F04339]/90 text-white"
								: "bg-[#F04339] hover:bg-[#F04339] text-white",
						)}
					>
						{isSelected ? "Selecionado" : "Selecionar"}
					</Button>

					<Button
						variant="outline"
						className="w-full py-5 rounded-md border-[#1A1A35] text-white bg-[#1A1A35] hover:text-white hover:bg-[#1A1A35]"
					>
						<span>Ver detalhes</span>
						<ArrowRightIcon className="w-4 h-4 ml-2" />
					</Button>
				</div>
			</div>
		</div>
	);
}
