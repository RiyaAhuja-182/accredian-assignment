"use client";

import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

const testimonialContainer = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.14,
		},
	},
};

const testimonialItem = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
	},
};

const testimonials = [
	{
		name: "Maya Rodriguez",
		role: "Product Lead, NovaStack",
		review:
			"CloudLift helped our team reduce operational overhead by 40%. The onboarding was smooth and the support has been excellent.",
	},
	{
		name: "Ethan Clarke",
		role: "Founder, Metricly",
		review:
			"The automation workflows are a game-changer. We shipped faster in the first month than in the previous quarter.",
	},
	{
		name: "Priya Menon",
		role: "COO, OrbitFlow",
		review:
			"From analytics to collaboration, everything feels cohesive. Our entire organization now works from a single source of truth.",
	},
];

export default function Testimonials() {
	return (
		<SectionWrapper>
			<div className="mb-12 text-center">
				<h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
					Trusted by fast-moving teams
				</h2>
				<p className="mt-4 text-base leading-7 text-slate-600">
					Teams across industries rely on CloudLift to simplify growth and scale confidently.
				</p>
			</div>

			<motion.div
				className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
				variants={testimonialContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				{testimonials.map((item) => (
					<motion.article
						key={item.name}
						variants={testimonialItem}
						className="group rounded-2xl border border-slate-300/70 bg-gradient-to-b from-white via-white to-sky-50/60 p-7 shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl hover:shadow-sky-100/80"
					>
						<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition duration-300 group-hover:bg-sky-600 group-hover:text-white">
							<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path d="M10.4 7.2C7.6 8.1 6 10.2 6 13.7v3.1h5.2v-5H8.8c.1-1.7 1-2.8 2.5-3.4l-.9-1.2zm7 0c-2.8.9-4.4 3-4.4 6.5v3.1h5.2v-5h-2.4c.1-1.7 1-2.8 2.5-3.4l-.9-1.2z" />
							</svg>
						</div>
						<p className="text-sm leading-7 text-slate-600">&ldquo;{item.review}&rdquo;</p>
						<div className="mt-7 flex items-center gap-3 border-t border-slate-200/80 pt-5">
							<div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-xs font-semibold text-white">
								{item.name
									.split(" ")
									.slice(0, 2)
									.map((part) => part[0])
									.join("")}
							</div>
							<div>
								<p className="text-base font-extrabold tracking-tight text-slate-900">{item.name}</p>
								<p className="text-sm text-slate-500">{item.role}</p>
							</div>
						</div>
					</motion.article>
				))}
			</motion.div>
		</SectionWrapper>
	);
}
