"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const MapleRewardsPage = () => {
    return (
        <div className="relative min-h-screen text-white overflow-hidden z-[30] pt-32 pb-20 px-4 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                {/* Header */}
                <div className="flex flex-col gap-5">
                    <Link href="/projects" className="text-gray-400 hover:text-white transition-colors w-fit">
                        &larr; Back to Projects
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        MapleRewards
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        The first native Canadian credit card rewards optimizer. Maximize your cashback and points across 92+ cards and 19 loyalty programs — ranked by real dollar value, not just points.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://github.com/sahnia3/maplerewards" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#2A0E61] rounded-lg hover:bg-purple-700 transition-all font-semibold">
                            <FaGithub size={20} /> View Code
                        </a>
                    </div>
                </div>

                {/* Hero Screenshot */}
                <div className="w-full relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-[#2A0E61] group">
                    <Image
                        src="/maplerewards-optimizer.png"
                        alt="MapleRewards Spend Optimizer"
                        width={1920}
                        height={1080}
                        priority
                        className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                    />
                </div>

                {/* Feature Showcase */}
                <div className="flex flex-col gap-20 mt-20">

                    {/* Feature 1: Spend Optimizer */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/maplerewards-optimizer.png"
                                alt="Spend Optimizer"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Spend Optimizer Engine
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                The core of MapleRewards: tell it what you&apos;re buying, and it ranks every card by real dollar value returned — not just points. Supports base and business class redemption values, so you always know the true worth of your rewards.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2: AI Chat */}
                    <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/maplerewards-chat.png"
                                alt="AI Assistant"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                AI Rewards Assistant
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Powered by Claude Sonnet, the AI assistant answers any question about credit card rewards — from &quot;best way to fly business class to London&quot; to &quot;maximize my points value.&quot; It understands your wallet and gives personalized advice.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3: Trip Planner */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/maplerewards-travel.png"
                                alt="Trip Planner"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Travel Redemption Calculator
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Plan trips using your points. Supports Aeroplan, Amex MR, Avios, Marriott, Hyatt, Hilton, and IHG. Search flights and hotels with real-time availability, and see exactly how many points you need — with economy, business, and first class options.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4: Portfolio Analytics */}
                    <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/maplerewards-portfolio.png"
                                alt="Portfolio Analytics"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Portfolio Analytics
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                See the total dollar value of your rewards portfolio, discover cards you might want, analyze annual fee ROI with breakeven calculations, and find the money you&apos;re leaving on the table with dollar-gap optimization.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technical Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="p-6 bg-[#110d24]/90 backdrop-blur-sm border border-[#2A0E61] rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Key Features</h3>
                        <ul className="list-disc list-inside space-y-3 text-gray-300">
                            <li>Rewards optimizer ranking cards by effective return per category</li>
                            <li>Wallet management with point tracking across 19 loyalty programs</li>
                            <li>AI chat assistant powered by Claude Sonnet 4.5</li>
                            <li>Trip planner with award flight and hotel search</li>
                            <li>Portfolio analytics with fee ROI and dollar-gap analysis</li>
                            <li>Welcome bonus tracking and personalized recommendations</li>
                            <li>92+ Canadian credit cards catalogued with live data</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-[#110d24]/90 backdrop-blur-sm border border-[#2A0E61] rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Go", "Chi Router", "PostgreSQL", "Redis", "Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Claude API", "Stripe", "JWT Auth"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-[#2A0E61]/50 border border-[#2A0E61] rounded-full text-sm text-cyan-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="mt-6 text-gray-400">
                            Full-stack application with a Go backend serving 35+ REST API endpoints and a Next.js frontend. 27,760 lines of code across Go (10,717 LOC) and TypeScript (17,043 LOC). PostgreSQL with 12+ tables and 9 migrations, Redis caching layer, and JWT authentication.
                        </p>
                    </div>
                </div>

                {/* In-Depth Detail */}
                <div className="mt-10 p-8 bg-[#0b0b0f]/90 backdrop-blur-sm border border-[#2A0E61]/40 rounded-xl">
                    <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        In-Depth Project Detail
                    </h3>
                    <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">The Problem</h4>
                            <p>
                                Canadian credit card holders have no native tool to compare rewards across cards. American tools like The Points Guy don&apos;t support Canadian loyalty programs, and existing comparison sites only show earn rates — not real dollar values. MapleRewards fills this gap by being the first platform built specifically for the Canadian market.
                            </p>
                        </section>
                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">Architecture</h4>
                            <p>
                                The backend is built in Go with the Chi router, chosen for its performance with concurrent API calls. PostgreSQL stores card data, user wallets, and spending profiles. Redis provides sub-millisecond caching for card lookups and optimization results. The frontend uses Next.js 16 with React 19 and server components for fast initial loads.
                            </p>
                        </section>
                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">The Optimizer</h4>
                            <p>
                                The optimization engine calculates the effective return for every card across each spending category. It accounts for earn rates, point valuations (using both base and premium redemption values like business class flights), annual fees, and welcome bonuses. Users see a ranked list showing exactly how much real dollar value each card returns for their specific spending pattern.
                            </p>
                        </section>
                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">Market Opportunity</h4>
                            <p>
                                No direct competitors exist in the Canadian market. The platform covers 92+ credit cards across all major issuers (TD, RBC, CIBC, BMO, Scotiabank, AMEX, HSBC) and 19 loyalty programs including Aeroplan, Scene+, PC Optimum, and Marriott Bonvoy. The SaaS model uses Stripe for premium features including advanced analytics and AI chat.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapleRewardsPage;
