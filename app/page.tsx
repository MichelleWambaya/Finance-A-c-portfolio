"use client";

import { useState, useEffect } from "react";

const heroImages = [
  "/portrait_primary.jpg",
  "/vintage-camera-with-paper-note-wooden-table.jpg",
  "/wild-green-leaves-with-dew-them.jpg",
];

const portfolioHighlights = [
  { title: "Finance & Economics", image: "/high-angle-shot-lock-around-dollar-bill-black-laptop.jpg", link: "/finance" },
  { title: "Professional Certifications", image: "/20250615_082328.jpg", link: "/finance#certifications" },
  { title: "Technical Projects", image: "/computer-dark-room-with-graphs-screen.jpg", link: "/projects" },
];

export default function HomePage() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextHero = () => setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
  const prevHero = () => setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const nextPortfolio = () => setCurrentPortfolioIndex((prev) => (prev + 1) % portfolioHighlights.length);
  const prevPortfolio = () => setCurrentPortfolioIndex((prev) => (prev - 1 + portfolioHighlights.length) % portfolioHighlights.length);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHeroIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center transform scale-105"
                style={{ 
                  backgroundImage: `url('${img}')`,
                  transform: `scale(${1.05 + scrollY * 0.0002})`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            </div>
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-4xl">
              <div className="overflow-hidden mb-8">
                <h1 className="font-serif text-7xl lg:text-8xl leading-none" style={{ animation: 'slideUp 1s ease-out' }}>
                  Michelle Wambaya
                </h1>
              </div>
              
              <div className="flex items-center gap-8 mb-12">
                <div className="h-px flex-1 bg-gradient-to-r from-gold to-transparent" />
                <span className="text-gold text-sm tracking-[0.3em] uppercase">Portfolio</span>
              </div>
              
              <div className="space-y-6 text-xl lg:text-2xl text-neutral-300 max-w-3xl leading-relaxed">
                <p style={{ animation: 'fadeIn 1s ease-out 0.3s both' }}>
                  Applied economist with a foundation in financial analysis and accounting standards.
                </p>
                <p style={{ animation: 'fadeIn 1s ease-out 0.6s both' }}>
                  Currently exploring the intersection of cloud infrastructure and financial systems.
                </p>
              </div>
              
              <div className="mt-16 flex gap-6" style={{ animation: 'fadeIn 1s ease-out 0.9s both' }}>
                <a href="#work" className="group relative overflow-hidden px-12 py-5 border border-white">
                  <span className="relative z-10 text-sm tracking-wider uppercase transition-colors duration-300 group-hover:text-black">View Work</span>
                  <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </a>
                <a href="#about" className="px-12 py-5 text-sm tracking-wider uppercase text-neutral-400 hover:text-white transition-colors duration-300">
                  About
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={prevHero}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/20 hover:border-white/40 transition-all flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextHero}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/20 hover:border-white/40 transition-all flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`h-px transition-all duration-500 ${
                index === currentHeroIndex ? "w-16 bg-white" : "w-8 bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      <section id="about" className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="text-[20rem] font-serif text-white leading-none">MW</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <div className="text-xs tracking-[0.3em] text-gold mb-6 uppercase">Introduction</div>
                <h2 className="font-serif text-6xl leading-tight mb-8">
                  Numbers tell stories
                </h2>
                <div className="h-px w-24 bg-gold mb-8" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="text-lg text-neutral-300 space-y-6 leading-relaxed">
                <p>
                  Finance professional with certification from the Kenyan Accountants and Secretaries National Examination Board. Studied applied economics at Kenyatta University between 2021 and 2025.
                </p>
                
                <p>
                  Previous experience includes work at Kenya Urban Roads Authority processing purchase orders and maintaining ledger systems. Maintained documentation accuracy above 98 percent across all assigned records.
                </p>
                
                <p>
                  Currently expanding technical capabilities through certifications in financial modeling, investment analysis frameworks, and containerized application deployment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-800">
                <div>
                  <div className="text-5xl font-serif mb-2">98%</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider">Record Accuracy</div>
                </div>
                <div>
                  <div className="text-5xl font-serif mb-2">2024</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider">Finance Internship</div>
                </div>
              </div>

              <div className="relative h-96 mt-12 border border-neutral-800">
                <video
                  src="/finance-background.mp4"
                  className="w-full h-full object-cover opacity-60"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="text-xs tracking-[0.3em] text-gold mb-6 uppercase">Capabilities</div>
            <h2 className="font-serif text-6xl max-w-3xl leading-tight">
              Technical and financial competencies
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-neutral-800">
            <div className="bg-black p-12 hover:bg-neutral-950 transition-colors duration-500">
              <div className="text-sm text-gold mb-4 tracking-wider">01</div>
              <h3 className="font-serif text-2xl mb-6">Financial Analysis</h3>
              <p className="text-neutral-400 leading-relaxed">
                Statement interpretation, ratio analysis, and performance evaluation using standard accounting frameworks.
              </p>
            </div>

            <div className="bg-black p-12 hover:bg-neutral-950 transition-colors duration-500">
              <div className="text-sm text-gold mb-4 tracking-wider">02</div>
              <h3 className="font-serif text-2xl mb-6">Economic Modeling</h3>
              <p className="text-neutral-400 leading-relaxed">
                Applied econometric techniques for forecasting and policy analysis based on academic training.
              </p>
            </div>

            <div className="bg-black p-12 hover:bg-neutral-950 transition-colors duration-500">
              <div className="text-sm text-gold mb-4 tracking-wider">03</div>
              <h3 className="font-serif text-2xl mb-6">Risk Assessment</h3>
              <p className="text-neutral-400 leading-relaxed">
                Framework knowledge for evaluating credit, market, and operational risk in financial institutions.
              </p>
            </div>

            <div className="bg-black p-12 hover:bg-neutral-950 transition-colors duration-500">
              <div className="text-sm text-gold mb-4 tracking-wider">04</div>
              <h3 className="font-serif text-2xl mb-6">Accounts Management</h3>
              <p className="text-neutral-400 leading-relaxed">
                Ledger maintenance, reconciliation processes, and accounts receivable through practical application.
              </p>
            </div>

            <div className="bg-black p-12 hover:bg-neutral-950 transition-colors duration-500">
              <div className="text-sm text-gold mb-4 tracking-wider">05</div>
              <h3 className="font-serif text-2xl mb-6">Cloud Infrastructure</h3>
              <p className="text-neutral-400 leading-relaxed">
                Understanding of containerization and orchestration systems applicable to financial technology platforms.
              </p>
            </div>

            <div className="bg-black p-12 hover:bg-neutral-950 transition-colors duration-500">
              <div className="text-sm text-gold mb-4 tracking-wider">06</div>
              <h3 className="font-serif text-2xl mb-6">Investment Principles</h3>
              <p className="text-neutral-400 leading-relaxed">
                Foundation in portfolio theory, asset valuation, and market analysis through structured certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-32 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="text-xs tracking-[0.3em] text-gold mb-6 uppercase">Selected Work</div>
            <h2 className="font-serif text-6xl">Featured Projects</h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentPortfolioIndex * 100}%)` }}
              >
                {portfolioHighlights.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <a href={item.link} className="block group">
                      <div className="relative h-[70vh]">
                        <div
                          className="w-full h-full bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-105"
                          style={{ backgroundImage: `url('${item.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-16 left-16">
                          <div className="text-xs tracking-[0.3em] text-gold mb-4 uppercase">0{index + 1}</div>
                          <h3 className="font-serif text-5xl text-white mb-4">{item.title}</h3>
                          <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                            <span className="text-sm tracking-wider">Explore</span>
                            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <button
                onClick={prevPortfolio}
                className="w-14 h-14 border border-neutral-700 hover:border-white transition-colors flex items-center justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextPortfolio}
                className="w-14 h-14 border border-neutral-700 hover:border-white transition-colors flex items-center justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex gap-3 mt-8">
              {portfolioHighlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPortfolioIndex(index)}
                  className={`h-px transition-all duration-500 ${
                    index === currentPortfolioIndex ? "w-16 bg-white" : "w-8 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-6xl mb-12 leading-tight">
            Open to opportunities
          </h2>
          <p className="text-xl text-neutral-400 mb-16 leading-relaxed">
            Available for roles in financial analysis, economic research, or positions bridging finance and technology infrastructure.
          </p>
          <div className="flex justify-center gap-6">
            <a href="/contact" className="group relative overflow-hidden px-12 py-5 border border-white">
              <span className="relative z-10 text-sm tracking-wider uppercase transition-colors duration-300 group-hover:text-black">Contact</span>
              <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </a>
            <a href="/finance" className="px-12 py-5 text-sm tracking-wider uppercase text-neutral-400 hover:text-white transition-colors duration-300">
              Full Resume
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}