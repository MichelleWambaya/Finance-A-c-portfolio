"use client";

import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { Modal } from "@/components/Modal";

type Certificate = { id: string; title: string; issuer: string; date: string; image: string; skills: string[]; description: string };

const certificates: Certificate[] = [
	{
		id: 'cpa-certification',
		title: 'Certified Public Accountant (CPA)',
		issuer: 'kasneb',
		date: '2023',
		image: '/certificates/cpa.jpg',
		skills: ['Financial Accounting', 'Accounts Receivable', 'Taxation', 'Auditing', 'Financial Analysis'],
		description: 'Professional accounting certification covering financial reporting, taxation, auditing, and business analysis.'
	},
	{
		id: 'kubernetes-finance',
		title: 'Kubernetes and Cloud Native Essentials',
		issuer: 'The Linux Foundation',
		date: '2025',
		image: '/certificates/kubernetes-finance.jpg',
		skills: ['Cloud Computing', 'Container Orchestration', 'DevOps', 'Financial Technology'],
		description: 'Essential skills in cloud-native technologies for modern financial systems and fintech applications.'
	},
	{
		id: 'financial-modeling',
		title: 'Financial Modeling & Analysis',
		issuer: 'Corporate Finance Institute',
		date: '2024',
		image: '/certificates/financial-modeling.jpg',
		skills: ['Excel', 'Financial Modeling', 'Valuation', 'Risk Analysis', 'DCF Analysis'],
		description: 'Advanced certification in financial modeling, valuation techniques, and investment analysis.'
	},
	{
		id: 'cfa-level1',
		title: 'CFA Level I',
		issuer: 'CFA Institute',
		date: '2024',
		image: '/certificates/cfa.jpg',
		skills: ['Investment Analysis', 'Portfolio Management', 'Ethics', 'Economics', 'Financial Markets'],
		description: 'Chartered Financial Analyst Level I certification covering investment analysis and portfolio management fundamentals.'
	},
	{
		id: 'risk-management',
		title: 'Financial Risk Management',
		issuer: 'GARP',
		date: '2024',
		image: '/certificates/frm.jpg',
		skills: ['Risk Assessment', 'Credit Risk', 'Market Risk', 'Operational Risk', 'Basel III'],
		description: 'Professional certification in financial risk management covering various risk types and regulatory frameworks.'
	}
];

export default function FinancePage() {
	const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

	return (
		<PageTransition>
			<div className="py-14">
				<div className="h-64 w-full bg-[url('/high-angle-shot-lock-around-dollar-bill-black-laptop.jpg')] bg-cover bg-center border border-neutral-800 relative">
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
					<div className="absolute bottom-6 left-6">
						<h2 className="text-4xl text-white">Finance & Economics</h2>
						<p className="text-white/90 mt-2 max-w-2xl">Professional finance expertise with a foundation in economic theory and practical application.</p>
					</div>
				</div>

				{/* Experience & Education Section */}
				<section className="mt-16">
					<div className="uppercase text-[11px] tracking-wide text-neutral-500 mb-8">Experience & Education</div>
					<div className="border border-neutral-800">
						<div className="grid md:grid-cols-3 gap-6 p-8">
							<section className="border border-neutral-800 p-8 bg-black/40">
								<header className="flex items-center justify-between">
									<h3 className="font-semibold text-lg">Internships</h3>
									<div className="h-px w-10 bg-gold" />
								</header>
								<ul className="mt-4 text-neutral-300 space-y-3">
									<li>Kenya Urban Roads Authority — Finance Accounting Attachè (2024)</li>
									<li>Processed LPOs and payment vouchers</li>
									<li>Maintained ledger accounts and reconciliations</li>
									<li>98% accuracy rate in financial records</li>
								</ul>
							</section>
							<section className="border border-neutral-800 p-8 bg-black/40">
								<header className="flex items-center justify-between">
									<h3 className="font-semibold text-lg">Education</h3>
									<div className="h-px w-10 bg-gold" />
								</header>
								<ul className="mt-4 text-neutral-300 space-y-3">
									<li>Applied Economics — Kenyatta University (2021–2025)</li>
									<li>Financial Statement Analysis</li>
									<li>Corporate Finance & Econometrics</li>
									<li>Public Policy Analysis</li>
								</ul>
							</section>
							<section className="border border-neutral-800 p-8 bg-black/40">
								<header className="flex items-center justify-between">
									<h3 className="font-semibold text-lg">Professional Development</h3>
									<div className="h-px w-10 bg-gold" />
								</header>
								<ul className="mt-4 text-neutral-300 space-y-3">
									<li>Continuous learning in financial technology and digital transformation</li>
									<li>Professional development through industry certifications</li>
									<li>Advanced Excel and financial modeling expertise</li>
									<li>Risk management and compliance training</li>
								</ul>
							</section>
						</div>
					</div>
				</section>

				{/* Certificates Section - Moved to End */}
				<section className="mt-16">
					<div className="relative border border-neutral-800 p-8">
						<video
							src="/6266434-uhd_2160_3840_25fps.mp4"
							className="absolute inset-0 w-full h-full object-cover -z-10"
							autoPlay
							muted
							loop
							playsInline
						/>
						<div className="absolute inset-0 bg-black/60 -z-10" />
						
						<div className="relative z-10">
							<div className="uppercase text-[11px] tracking-wide text-neutral-500 mb-8">Professional Certifications</div>
							<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
								{certificates.map((cert) => (
									<div 
										key={cert.id}
										className="border border-neutral-800 bg-black/40 cursor-pointer hover:border-gold hover:bg-black/60 transition-all duration-300 transform hover:scale-105"
										onClick={() => setSelectedCert(cert)}
										role="button"
										tabIndex={0}
										onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelectedCert(cert); } }}
									>
										<div className="h-40 bg-cover bg-center" style={{backgroundImage: `url('${cert.image}')`}} />
										<div className="p-4">
											<h4 className="font-serif text-lg">{cert.title}</h4>
											<p className="text-neutral-400 text-xs mt-1">{cert.issuer} • {cert.date}</p>
											<p className="text-neutral-300 text-xs mt-2 line-clamp-2">{cert.description}</p>
											<div className="mt-3 text-gold text-xs font-medium">Tap to view details →</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Enhanced Certificate Modal */}
				{selectedCert && (
					<Modal open={!!selectedCert} onClose={() => setSelectedCert(null)}>
						<div className="max-w-4xl mx-auto bg-black/95 p-8 border border-gold">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<div className="h-80 bg-cover bg-center border border-neutral-700" style={{backgroundImage: `url('${selectedCert.image}')`}} />
								</div>
								<div>
									<h3 className="font-serif text-3xl text-gold">{selectedCert.title}</h3>
									<p className="text-neutral-400 mt-2 text-lg">{selectedCert.issuer} • {selectedCert.date}</p>
									<p className="text-neutral-300 mt-4 text-base leading-relaxed">{selectedCert.description}</p>
									
									<div className="mt-8">
										<h4 className="font-serif text-xl mb-4 text-gold">Skills & Competencies</h4>
										<div className="flex flex-wrap gap-3">
											{selectedCert.skills.map((skill, index) => (
												<span key={index} className="bg-gold/20 border border-gold/30 px-4 py-2 text-sm text-gold">{skill}</span>
											))}
										</div>
									</div>
									
									<div className="mt-8 pt-6 border-t border-neutral-700">
										<button 
											onClick={() => setSelectedCert(null)}
											className="bg-gold text-black px-6 py-2 font-medium hover:bg-gold/80 transition-colors"
										>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
					</Modal>
				)}
			</div>
		</PageTransition>
	);
}
