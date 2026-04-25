import Link from "next/link";

const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#features", label: "Features" },
	{ href: "#contact", label: "Contact" },
];

const socialLinks = [
	{
		href: "#",
		label: "Twitter",
		icon: (
			<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.6.8-2.5 1-1.4-1.5-3.8-1.5-5.3-.1-1 .9-1.4 2.3-1.1 3.6-3.1-.2-6-1.7-8-4.1-1 1.8-.5 4 1.1 5.2-.6 0-1.2-.2-1.8-.5 0 1.9 1.3 3.6 3.2 4-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.8A8.3 8.3 0 013 18.4c1.6 1 3.5 1.5 5.4 1.5 6.5 0 10.1-5.5 10.1-10.3v-.5c.7-.5 1.3-1.1 1.8-1.9-.7.3-1.4.5-2.1.6.7-.5 1.3-1.2 1.8-2z" />
			</svg>
		),
	},
	{
		href: "#",
		label: "LinkedIn",
		icon: (
			<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M6.9 8.5H3.7V20h3.2V8.5zM5.3 7.1c1 0 1.8-.8 1.8-1.8S6.3 3.5 5.3 3.5s-1.8.8-1.8 1.8.8 1.8 1.8 1.8zM20.3 13.5c0-3.1-1.7-5.2-4.8-5.2-1.4 0-2.5.8-3 1.5V8.5H9.3V20h3.2v-6.2c0-1.6.9-2.6 2.2-2.6 1.3 0 2 1 2 2.6V20h3.2v-6.5z" />
			</svg>
		),
	},
	{
		href: "#",
		label: "GitHub",
		icon: (
			<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M12 .7a11.3 11.3 0 00-3.6 22c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1 1 .1.7 2.4 3.5 1.8.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.4-5.5-6A4.6 4.6 0 016.6 9c-.2-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11 11 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.2 3.2.8.9 1.3 2.1 1.3 3.5 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.3 11.3 0 0012 .7z" />
			</svg>
		),
	},
];

export default function Footer() {
	return (
		<footer className="border-t border-slate-200 bg-white">
			<div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10">
				<div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
					<p className="text-lg font-bold tracking-tight text-slate-900">CloudLift</p>

					<div className="flex flex-wrap items-center gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
							>
								{link.label}
							</Link>
						))}
					</div>

					<div className="flex items-center gap-3">
						{socialLinks.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-900 hover:text-white"
								aria-label={item.label}
							>
								{item.icon}
							</Link>
						))}
					</div>
				</div>

				<p className="text-sm text-slate-500">© {new Date().getFullYear()} CloudLift. All rights reserved.</p>
			</div>
		</footer>
	);
}
