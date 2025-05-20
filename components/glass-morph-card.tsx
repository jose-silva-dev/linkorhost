"use client";

import type React from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface GlassMorphCardProps {
	children: React.ReactNode;
	className?: string;
}

export function GlassMorphCard({ children, className }: GlassMorphCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;

		const rect = cardRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = (y - centerY) / 20;
		const rotateY = (centerX - x) / 20;

		cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	};

	const handleMouseLeave = () => {
		if (!cardRef.current) return;
		cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
	};

	return (
		<motion.div
			ref={cardRef}
			className={cn(
				"flex flex-col border-2 border-[#F2F2F3] rounded-lg overflow-hidden transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl",
				className,
			)}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true, margin: "-50px" }}
		>
			{children}
		</motion.div>
	);
}
