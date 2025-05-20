"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AnimatedFeatureProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	delay?: number;
}

export function AnimatedFeature({
	icon,
	title,
	description,
	delay = 0,
}: AnimatedFeatureProps) {
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [controls, isInView]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, y: 30 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.5, delay },
				},
			}}
		>
			<Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 h-full bg-gray-950 backdrop-blur-sm">
				<CardHeader className="pb-2">
					<motion.div
						className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#F04339]/10 to-[#FF6B5B]/10"
						whileHover={{
							scale: 1.1,
							backgroundColor: "rgba(240, 67, 57, 0.2)",
						}}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
					>
						{icon}
					</motion.div>
					<CardTitle className="text-gray-200">{title}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-gray-400">{description}</p>
				</CardContent>
			</Card>
		</motion.div>
	);
}
