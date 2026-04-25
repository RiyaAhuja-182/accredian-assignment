"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

export default function CTA() {
	const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
	const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);

	useEffect(() => {
		if (!isSuccess || !message) {
			return;
		}

		const timeoutId = setTimeout(() => {
			setMessage("");
			setIsSuccess(false);
		}, 4000);

		return () => clearTimeout(timeoutId);
	}, [isSuccess, message]);

	const validateForm = () => {
		const nextErrors = { name: "", email: "", phone: "" };

		if (!formData.name.trim()) {
			nextErrors.name = "Please enter your full name.";
		}

		if (!formData.email.trim()) {
			nextErrors.email = "Please enter your email address.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			nextErrors.email = "Please enter a valid email address.";
		}

		const cleanedPhone = formData.phone.replace(/\s+/g, "");
		if (!cleanedPhone) {
			nextErrors.phone = "Please enter your phone number.";
		} else if (!/^[+]?[-()\d\s]{7,20}$/.test(formData.phone)) {
			nextErrors.phone = "Please enter a valid phone number.";
		}

		setErrors(nextErrors);
		return !Object.values(nextErrors).some(Boolean);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!validateForm()) {
			setIsSuccess(false);
			setMessage("Please fix the highlighted fields and try again.");
			return;
		}

		setIsSubmitting(true);
		setMessage("");
		setIsSuccess(false);

		try {
			const response = await fetch("/api/lead", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (!response.ok || !result.success) {
				throw new Error(result.message || "Something went wrong");
			}

			setIsSuccess(true);
			setMessage(`Thanks ${result.data.name}, your details were submitted successfully.`);
			setFormData({ name: "", email: "", phone: "" });
			setErrors({ name: "", email: "", phone: "" });
		} catch (error) {
			setIsSuccess(false);
			setMessage(error.message || "Unable to submit your details right now.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<SectionWrapper id="contact">
			<div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-sky-500/25 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 px-6 py-14 text-white shadow-2xl shadow-blue-950/40 sm:px-10">
				<div className="pointer-events-none absolute -left-20 -top-16 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl" />
				<div className="pointer-events-none absolute -bottom-20 -right-10 h-52 w-52 rounded-full bg-indigo-500/20 blur-3xl" />

				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to transform your workflow?</h2>
				<p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
					Join teams using CloudLift to streamline operations, boost productivity, and scale with
					confidence.
				</p>

				<form
					onSubmit={handleSubmit}
					noValidate
					className="relative mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2"
				>
					<div className="sm:col-span-1">
						<label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-200">
							Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							value={formData.name}
							onChange={handleChange}
							placeholder="Enter your name"
							aria-invalid={Boolean(errors.name)}
							aria-describedby={errors.name ? "name-error" : undefined}
							className={`w-full rounded-xl border bg-slate-800/90 px-4 py-3 text-sm text-white placeholder:text-slate-400 transition duration-300 focus:border-sky-400 focus:shadow-[0_0_0_4px_rgba(56,189,248,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
								errors.name ? "border-rose-400" : "border-slate-600/90"
							}`}
						/>
						{errors.name && (
							<p id="name-error" className="mt-1 text-sm text-rose-300">
								{errors.name}
							</p>
						)}
					</div>

					<div className="sm:col-span-1">
						<label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-200">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="you@company.com"
							aria-invalid={Boolean(errors.email)}
							aria-describedby={errors.email ? "email-error" : undefined}
							className={`w-full rounded-xl border bg-slate-800/90 px-4 py-3 text-sm text-white placeholder:text-slate-400 transition duration-300 focus:border-sky-400 focus:shadow-[0_0_0_4px_rgba(56,189,248,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
								errors.email ? "border-rose-400" : "border-slate-600/90"
							}`}
						/>
						{errors.email && (
							<p id="email-error" className="mt-1 text-sm text-rose-300">
								{errors.email}
							</p>
						)}
					</div>

					<div className="sm:col-span-2">
						<label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-200">
							Phone
						</label>
						<input
							id="phone"
							name="phone"
							type="tel"
							value={formData.phone}
							onChange={handleChange}
							placeholder="+91 98765 43210"
							aria-invalid={Boolean(errors.phone)}
							aria-describedby={errors.phone ? "phone-error" : undefined}
							className={`w-full rounded-xl border bg-slate-800/90 px-4 py-3 text-sm text-white placeholder:text-slate-400 transition duration-300 focus:border-sky-400 focus:shadow-[0_0_0_4px_rgba(56,189,248,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
								errors.phone ? "border-rose-400" : "border-slate-600/90"
							}`}
						/>
						{errors.phone && (
							<p id="phone-error" className="mt-1 text-sm text-rose-300">
								{errors.phone}
							</p>
						)}
					</div>

					<div className="sm:col-span-2">
						<div className="pointer-events-none absolute inset-x-24 bottom-[2.65rem] h-11 rounded-full bg-sky-400/24 blur-2xl" />
						<button
							type="submit"
							disabled={isSubmitting}
							aria-busy={isSubmitting}
							aria-label="Submit lead capture form"
							className="relative inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md shadow-sky-300/18 transition duration-300 hover:scale-105 hover:brightness-95 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
						>
							{isSubmitting ? "Submitting..." : "Get Started"}
						</button>
					</div>
				</form>

				<AnimatePresence mode="wait">
					{message && (
						<motion.p
							key={message}
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -6 }}
							transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
							className={`mx-auto mt-5 flex max-w-2xl items-center justify-center gap-2 text-center text-sm ${
								isSuccess ? "text-emerald-300" : "text-rose-300"
							}`}
						>
							{isSuccess && (
								<svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.78-9.72a.75.75 0 10-1.06-1.06L9.25 10.69 7.78 9.22a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l3.99-3.99z"
										clipRule="evenodd"
									/>
								</svg>
							)}
							{message}
						</motion.p>
					)}
				</AnimatePresence>
			</div>
		</SectionWrapper>
	);
}
