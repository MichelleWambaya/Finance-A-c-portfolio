"use client";

import { motion } from "framer-motion";
import clsx from "classnames";

type Project = {
	id: number;
	title: string;
	summary: string;
	tools: string[];
	href: string;
};

type CardProps = {
	project: Project;
	onClick: () => void;
	accent?: "sunflower" | "dusk" | "skyblue" | "nature" | "gold" | "white";
	className?: string;
};

export function Card({ project, onClick, accent = "gold", className }: CardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={clsx("border border-neutral-800 p-6 group cursor-pointer hover:border-gold transition-colors", className)}
			onClick={onClick}
		>
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-lg font-bold">{project.title}</h3>
				<div className={clsx("h-px w-16 transition-colors", {
					"bg-sunflower": accent === "sunflower",
					"bg-dusk": accent === "dusk",
					"bg-skyblue": accent === "skyblue",
					"bg-nature": accent === "nature",
					"bg-gold": accent === "gold",
					"bg-white": accent === "white",
				})} />
			</div>
			<p className="text-neutral-300 group-hover:text-white transition-colors mb-4">{project.summary}</p>
			<div className="flex flex-wrap gap-2">
				{project.tools.map((tool) => (
					<span key={tool} className="text-xs bg-gold/20 text-gold px-2 py-1">
						{tool}
					</span>
				))}
			</div>
		</motion.div>
	);
}