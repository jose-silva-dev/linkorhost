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
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function HostingPlans() {
	const [activeTab, setActiveTab] = useState("cpanel");
	const [isAnnual, setIsAnnual] = useState(false);
	const [expandedFeatures, setExpandedFeatures] = useState<
		Record<string, boolean>
	>({});

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
						Hospedagem de Site
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl text-center">
						Obtenha mais com a Hospedagem de Site da Linkor
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
										Corporativo
									</TabsTrigger>
									<TabsTrigger
										value="plesk"
										className="data-[state=active]:bg-[#1A1A35] data-[state=active]:text-white text-gray-400 h-10 px-6"
									>
										Gamer
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
										Trienal
										<span className="bg-[#F04339]/10 text-[#F04339] text-xs px-2 py-0.5 rounded-full">
											-40%
										</span>
									</span>
								</div>
							</div>

							<TabsContent value="cpanel" className="mt-0">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
									{siteConfig.cpanelPlans.map((plan) => (
										<PlanCard
											key={plan.id}
											plan={plan}
											isAnnual={isAnnual}
											isExpanded={!!expandedFeatures[plan.id]}
											toggleFeatures={() => toggleFeatures(plan.id)}
										/>
									))}
								</div>
							</TabsContent>

							<TabsContent value="plesk" className="mt-0">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
									{siteConfig.pleskPlans.map((plan) => (
										<PlanCard
											key={plan.id}
											plan={plan}
											isAnnual={isAnnual}
											isExpanded={!!expandedFeatures[plan.id]}
											toggleFeatures={() => toggleFeatures(plan.id)}
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
}: {
	plan: (typeof siteConfig.cpanelPlans)[0];
	isAnnual: boolean;
	isExpanded: boolean;
	toggleFeatures: () => void;
}) {
	const price = isAnnual ? plan.annualPrice || plan.price : plan.price;
	const featuresLimit = 5;
	const hasMoreFeatures = plan.features.length > featuresLimit;

	return (
		<div className="bg-gray-950 border rounded-lg transition-all duration-300 cursor-pointer border-[#F04339] shadow-[0_0_20px_rgba(240,67,57,0.15)]">
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
					<Link href={plan.link}>
						<Button className="w-full py-5 rounded-md bg-[#F04339] hover:bg-[#F04339]/90 text-white">
							Selecionar
						</Button>
					</Link>

					<Link href={plan.link}>
						<Button
							variant="outline"
							className="w-full py-5 rounded-md border-[#1A1A35] text-white bg-[#1A1A35] hover:text-white hover:bg-[#1A1A35]"
						>
							<span>Ver detalhes</span>
							<ArrowRightIcon className="w-4 h-4 ml-2" />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
