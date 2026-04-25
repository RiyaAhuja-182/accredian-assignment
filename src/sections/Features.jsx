"use client";

import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

const cardContainer = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.12,
		},
	},
};

const cardItem = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

const features = [
	{
		title: "Smart Automation",
		description: "Reduce repetitive tasks with automation rules that run exactly when you need them.",
		icon: (
			<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
				<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		),
	},
	{
		title: "Live Analytics",
		description: "Track key performance metrics in real time and make faster, data-driven decisions.",
		icon: (
			<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
				<path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M7 16l3-3 3 2 4-5" />
			</svg>
		),
	},
	{
		title: "Team Collaboration",
		description: "Keep everyone aligned with shared workspaces, comments, and workflow visibility.",
		icon: (
			<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
				<path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
				<circle cx="9" cy="7" r="4" />
				<path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" />
				<path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" />
			</svg>
		),
	},
	{
		title: "Enterprise Security",
		description: "Protect your data with role-based controls, audit logs, and secure cloud infrastructure.",
		icon: (
			<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
			</svg>
		),
	},
];

export default function Features() {
	return (
		<SectionWrapper id="features">
			<div className="mb-12 max-w-2xl">
				<h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
					Everything you need to grow your SaaS.
				</h2>
				<p className="mt-4 text-base leading-7 text-slate-600">
					Powerful modules designed to help your team move faster and deliver exceptional customer
					experiences.
				</p>
			</div>

			<motion.div
				className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
				variants={cardContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				{features.map((feature) => (
					<motion.article
						key={feature.title}
						variants={cardItem}
						className="group cursor-pointer rounded-2xl border border-slate-200/90 bg-gradient-to-b from-sky-50/60 to-white p-6 shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-2 hover:scale-105 hover:border-sky-400/70 hover:shadow-2xl hover:shadow-sky-100/70 active:scale-95"
					>
						<div className="mb-4 inline-flex rounded-full bg-sky-100 p-3 text-sky-700 transition duration-300 group-hover:-rotate-6 group-hover:bg-sky-600 group-hover:text-white">
							{feature.icon}
						</div>
						<h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
						<p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
					</motion.article>
				))}
			</motion.div>
		</SectionWrapper>
	);
}
