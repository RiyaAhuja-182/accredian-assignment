"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#features", label: "Features" },
	{ href: "#contact", label: "Contact" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setIsScrolled(window.scrollY > 12);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 border-b transition-all duration-300 ${
				isScrolled
					? "border-slate-200/80 bg-white/80 shadow-lg shadow-slate-200/70 backdrop-blur-xl"
					: "border-transparent bg-white/50"
			}`}
		>
			<nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
				<Link href="#home" className="text-xl font-bold tracking-tight text-slate-900">
					CloudLift
				</Link>

				<div className="hidden items-center gap-8 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="group relative text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-900"
						>
							{link.label}
							<span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded bg-sky-600 transition-transform duration-300 group-hover:scale-x-100" />
						</Link>
					))}
				</div>

				<div className="hidden md:block">
					<Link
						href="#contact"
						className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:bg-slate-700"
					>
						Get Started
					</Link>
				</div>

				<button
					type="button"
					onClick={() => setIsOpen((prev) => !prev)}
					className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
					aria-label="Toggle menu"
					aria-expanded={isOpen}
					aria-controls="mobile-menu"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						{isOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</button>
			</nav>

			{isOpen && (
				<div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
					<div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-5">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
							>
								{link.label}
							</Link>
						))}
						<Link
							href="#contact"
							onClick={() => setIsOpen(false)}
							className="inline-flex w-fit rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
						>
							Get Started
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
