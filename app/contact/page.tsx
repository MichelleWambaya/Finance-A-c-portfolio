"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { generateResumePDF } from "@/components/ResumeGenerator";

export default function Contact() {
	const [formData, setFormData] = useState<{
		name: string;
		email: string;
		company: string;
		message: string;
	}>({
		name: "",
		email: "",
		company: "",
		message: ""
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleResumeDownload = () => {
		generateResumePDF("finance");
	};

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-[url('/pexels-junior-teixeira-1064069-2047905.jpg')] bg-cover bg-center bg-fixed" />
				<div className="absolute inset-0 bg-black/80" />
				
				<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
					<motion.h1 
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="font-serif text-5xl md:text-6xl font-bold mb-6"
					>
						Let's Finance Together
					</motion.h1>
					<motion.p 
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto"
					>
						Ready to optimize your financial strategy? 
						Let's discuss your finance and economics needs and create sustainable solutions.
					</motion.p>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="py-20 bg-black">
				<div className="container-max">
					<div className="grid lg:grid-cols-2 gap-16">
						{/* Contact Form */}
						<div>
							<h2 className="font-serif text-3xl mb-8">Send a Message</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
										Full Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white focus:border-gold focus:outline-none"
										required
									/>
								</div>
								
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white focus:border-gold focus:outline-none"
										required
									/>
								</div>
								
								<div>
									<label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
										Company
									</label>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleChange}
										className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white focus:border-gold focus:outline-none"
									/>
								</div>
								
								<div>
									<label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										rows={6}
										className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white focus:border-gold focus:outline-none"
										placeholder="Tell me about your finance and economics needs and how I can help..."
										required
									/>
								</div>
								
								<button
									type="submit"
									className="w-full bg-gold text-white px-8 py-4 font-semibold hover:bg-green-500 transition-colors"
								>
									Send Message
								</button>
							</form>
						</div>

						{/* Contact Information */}
						<div>
							<h2 className="font-serif text-3xl mb-8">Get In Touch</h2>
							
							<div className="space-y-8">
								<div>
									<h3 className="text-xl font-semibold text-gold mb-4">Email</h3>
									<a 
										href="mailto:michellewambaya@gmail.com"
										className="text-neutral-300 hover:text-white transition-colors"
									>
										michellewambaya@gmail.com
									</a>
								</div>
								
								<div>
									<h3 className="text-xl font-semibold text-gold mb-4">LinkedIn</h3>
									<a 
										href="https://linkedin.com/in/michelle-wambaya"
										target="_blank"
										rel="noreferrer"
										className="text-neutral-300 hover:text-white transition-colors"
									>
										linkedin.com/in/michelle-wambaya
									</a>
								</div>
								
								<div>
									<h3 className="text-xl font-semibold text-gold mb-4">GitHub</h3>
									<a 
										href="https://github.com/MichelleWambaya"
										target="_blank"
										rel="noreferrer"
										className="text-neutral-300 hover:text-white transition-colors"
									>
										github.com/MichelleWambaya
									</a>
								</div>
								
								<div>
									<h3 className="text-xl font-semibold text-gold mb-4">Twitter</h3>
									<a 
										href="https://twitter.com/mish_8_0_8"
										target="_blank"
										rel="noreferrer"
										className="text-neutral-300 hover:text-white transition-colors"
									>
										@mish_8_0_8
									</a>
								</div>
							</div>

							{/* Resume Download */}
							<div className="mt-12">
								<h3 className="text-xl font-semibold text-gold mb-6">Resume</h3>
								<button
									onClick={handleResumeDownload}
									className="border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-black transition-colors"
								>
									Download Finance Resume
								</button>
							</div>

							{/* Services */}
							<div className="mt-12">
								<h3 className="text-xl font-semibold text-gold mb-6">Finance & Economics Services</h3>
								<div className="grid grid-cols-1 gap-4">
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-gold" />
										<span className="text-neutral-300">Financial Analysis & Modeling</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-gold" />
										<span className="text-neutral-300">Risk Management & Assessment</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-gold" />
										<span className="text-neutral-300">Investment Analysis & Valuation</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-gold" />
										<span className="text-neutral-300">Corporate Finance Consulting</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-gold" />
										<span className="text-neutral-300">Economic Research & Policy Analysis</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-gold" />
										<span className="text-neutral-300">Public Sector Finance</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</PageTransition>
	);
}