"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

export default function Hero() {
	return (
		<SectionWrapper
			id="home"
			className="relative overflow-hidden pt-20 md:pt-24"
			containerClassName="relative"
		>
			<div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_52%),radial-gradient(circle_at_top_right,_rgba(99,102,241,0.12),_transparent_45%)]" />
			<div className="grid items-center gap-12 lg:grid-cols-2">
				<div>
					<p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 shadow-sm backdrop-blur">
						<span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
						Built for modern SaaS teams
					</p>
					<h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
						Scale your product with confidence and speed.
					</h1>
					<p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
						CloudLift helps you manage operations, automate workflows, and deliver better customer
						experiences from one unified platform.
					</p>
					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<Link
							href="#contact"
							aria-label="Start free trial"
							className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
						>
							Start Free Trial
						</Link>
						<Link
							href="#features"
							aria-label="See feature highlights"
							className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-sky-300 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
						>
							See Features
						</Link>
					</div>
				</div>

				<motion.div
					className="relative"
					animate={{ y: [0, -12, 0] }}
					transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
				>
					<div className="absolute -inset-8 -z-10 rounded-[2.25rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.24),transparent_66%)] blur-3xl opacity-70" />
					<div className="relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-white/86 via-sky-50/70 to-indigo-100/62 p-8 shadow-[0_24px_55px_-24px_rgba(56,189,248,0.42)] backdrop-blur-md transition duration-500 hover:shadow-[0_32px_72px_-26px_rgba(56,189,248,0.5)] sm:p-10">
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-200/18 via-transparent to-indigo-300/14" />
						<div className="mb-5 flex items-center gap-2">
							<span className="h-3 w-3 rounded-full bg-rose-400" />
							<span className="h-3 w-3 rounded-full bg-amber-400" />
							<span className="h-3 w-3 rounded-full bg-emerald-400" />
						</div>

						<div className="grid gap-4 md:grid-cols-[1fr_2.15fr]">
							<div className="rounded-2xl border border-slate-200/80 bg-white/85 p-3.5 shadow-sm">
								<div className="mb-3 h-3 w-24 rounded bg-slate-300" />
								<div className="space-y-2.5">
									<div className="h-2.5 w-full rounded bg-slate-200" />
									<div className="h-2.5 w-5/6 rounded bg-slate-200" />
									<div className="h-2.5 w-4/6 rounded bg-slate-200" />
								</div>
								<div className="mt-4 rounded-lg border border-slate-200 bg-white p-2.5">
									<div className="h-2 w-2/3 rounded bg-slate-200" />
									<div className="mt-2 h-2 w-1/2 rounded bg-slate-100" />
								</div>
								<div className="mt-4 flex -space-x-2">
									<span className="h-7 w-7 rounded-full border-2 border-white bg-sky-400" />
									<span className="h-7 w-7 rounded-full border-2 border-white bg-indigo-400" />
									<span className="h-7 w-7 rounded-full border-2 border-white bg-cyan-400" />
								</div>
							</div>

							<div className="rounded-2xl border border-slate-200/80 bg-white/88 p-4 shadow-sm">
								<div className="mb-3 flex items-center justify-between">
									<div className="h-3 w-24 rounded bg-slate-300" />
									<div className="flex items-center gap-2">
										<span className="inline-flex h-7 items-center rounded-full bg-slate-900 px-3 text-[10px] font-semibold text-white">
											Export
										</span>
										<span className="inline-flex h-7 items-center rounded-full border border-slate-300 bg-white px-3 text-[10px] font-semibold text-slate-700">
											Filter
										</span>
									</div>
								</div>

								<div className="mb-3.5 grid grid-cols-3 gap-2">
									<div className="rounded-lg border border-slate-200 bg-white px-2 py-1.5">
										<div className="h-1.5 w-10 rounded bg-slate-200" />
										<div className="mt-1.5 h-2 w-7 rounded bg-sky-200" />
									</div>
									<div className="rounded-lg border border-slate-200 bg-white px-2 py-1.5">
										<div className="h-1.5 w-10 rounded bg-slate-200" />
										<div className="mt-1.5 h-2 w-9 rounded bg-indigo-200" />
									</div>
									<div className="rounded-lg border border-slate-200 bg-white px-2 py-1.5">
										<div className="h-1.5 w-10 rounded bg-slate-200" />
										<div className="mt-1.5 h-2 w-8 rounded bg-cyan-200" />
									</div>
								</div>

								<div className="mb-4 rounded-xl border border-slate-200 bg-white p-3">
									<div className="mb-2 h-2.5 w-1/3 rounded bg-slate-200" />
									<div className="h-2.5 w-full rounded-full bg-slate-100">
										<div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
									</div>
								</div>

								<div className="grid grid-cols-4 items-end gap-2 rounded-xl border border-slate-200 bg-white p-3">
									<div className="h-10 rounded bg-sky-200" />
									<div className="h-16 rounded bg-sky-300" />
									<div className="h-12 rounded bg-indigo-300" />
									<div className="h-20 rounded bg-indigo-400" />
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</SectionWrapper>
	);
}
