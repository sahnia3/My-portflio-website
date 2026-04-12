"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const PolymarketBotPage = () => {
    return (
        <div className="relative min-h-screen text-white overflow-hidden z-[50] pt-32 pb-20 px-4 md:px-20 bg-[#030014]">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                {/* Header */}
                <div className="flex flex-col gap-5">
                    <Link href="/projects" className="text-gray-400 hover:text-white transition-colors w-fit">
                        &larr; Back to Projects
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        Polymarket Trading Agent
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        An autonomous multi-agent prediction market trading system. Uses Claude as a research brain, 4 independent probability estimators, and a 139-member weather ensemble to identify and trade mispriced bets on Polymarket.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://github.com/sahnia3/polymarket-agent" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#2A0E61] rounded-lg hover:bg-purple-700 transition-all font-semibold">
                            <FaGithub size={20} /> View Code
                        </a>
                    </div>
                </div>

                {/* Hero: Architecture Diagram */}
                <div className="w-full relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-[#2A0E61] group">
                    <Image
                        src="/polymarket-main.png"
                        alt="Polymarket Trading Agent Architecture"
                        width={1920}
                        height={1080}
                        priority
                        className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                    />
                </div>

                {/* Feature Showcase */}
                <div className="flex flex-col gap-20 mt-20">

                    {/* Feature 1: Trading Pipeline */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/polymarket-pipeline.png"
                                alt="Trading Pipeline"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                5-Stage Trading Pipeline
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Every trade flows through a rigorous pipeline: market scanning, deep research from 3 specialized agents, multi-estimator probability forecasting with Platt calibration, 11 pre-trade risk checks, and finally execution via the Polymarket CLOB API with slippage protection.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2: Multi-Agent Architecture */}
                    <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/polymarket-main.png"
                                alt="Agent System"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                13-Agent Orchestration
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                The system orchestrates 13 specialized agents — market scanner, 3 researchers (web, news, data), 4 independent estimators (base, contrarian, calibration, Bayesian), an aggregator, risk manager, trader, orchestrator, and portfolio monitor. Each agent has a focused responsibility and communicates through structured interfaces.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Showcase */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                    {[
                        { value: "13", label: "Active Agents" },
                        { value: "139", label: "Ensemble Members" },
                        { value: "11", label: "Risk Checks" },
                        { value: "92", label: "Open Positions" },
                    ].map((stat) => (
                        <div key={stat.label} className="p-6 bg-[#110d24] border border-[#2A0E61] rounded-xl text-center">
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Technical Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="p-6 bg-[#110d24] border border-[#2A0E61] rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Key Features</h3>
                        <ul className="list-disc list-inside space-y-3 text-gray-300">
                            <li>13-agent orchestration system powered by Claude</li>
                            <li>139-member weather ensemble (GFS + ECMWF + ICON + GEM)</li>
                            <li>4 independent probability estimators with Platt calibration</li>
                            <li>11 pre-trade risk checks (drawdown, concentration, correlation)</li>
                            <li>Quarter-Kelly position sizing for optimal capital allocation</li>
                            <li>Real-time portfolio monitoring and P&L tracking</li>
                            <li>Automated market scanning across 8 prediction categories</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-[#110d24] border border-[#2A0E61] rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Python 3.12", "Claude API", "Polymarket CLOB", "SQLite", "PostgreSQL", "Open-Meteo API", "GDELT", "Binance API", "Quarter-Kelly"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-[#2A0E61]/50 border border-[#2A0E61] rounded-full text-sm text-cyan-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="mt-6 text-gray-400">
                            Built in Python with Claude as the reasoning engine. The trading bot connects to Polymarket&apos;s CLOB (Central Limit Order Book) API for order placement. Weather forecasts use the Open-Meteo API to query GFS, ECMWF, ICON, and GEM ensemble models. All trade history and analysis is persisted in SQLite (6.2MB) with PostgreSQL for analytics.
                        </p>
                    </div>
                </div>

                {/* In-Depth Detail */}
                <div className="mt-10 p-8 bg-[#0b0b0f] border border-[#2A0E61]/40 rounded-xl">
                    <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        In-Depth Project Detail
                    </h3>
                    <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">The Concept</h4>
                            <p>
                                Prediction markets price real-world events as tradeable contracts. When the market price diverges from the true probability, there&apos;s an edge to exploit. This bot autonomously identifies these mispricings, researches the underlying events, estimates true probabilities, and executes trades — all without human intervention.
                            </p>
                        </section>
                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">Evolution: V1 to V4</h4>
                            <p>
                                The system evolved through 4 major versions. V1 used a single LLM estimator and lost money. V2 introduced multi-estimator consensus. V3 added Platt calibration to fix systematic overconfidence. V4 pivoted to weather ensemble trading — using 139 numerical weather model members instead of LLM estimation for weather markets, dramatically improving accuracy on the highest-volume market category.
                            </p>
                        </section>
                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">Risk Management</h4>
                            <p>
                                Every trade must pass 11 independent risk checks before execution. These include maximum drawdown limits, concentration caps (no single market gets too much capital), correlation prevention (avoiding correlated bets), daily loss limits, cooldown periods after losses, and position count caps. The quarter-Kelly criterion ensures position sizes are conservative — betting only 25% of the theoretically optimal amount.
                            </p>
                        </section>
                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">Weather Ensemble</h4>
                            <p>
                                The weather trading module queries 139 ensemble members across 4 major forecast systems: GFS (30 members), ECMWF (50 members), ICON (39 members), and GEM (20 members). By counting what fraction of ensemble members predict a given outcome, the system generates calibrated probability estimates for temperature, precipitation, and extreme weather markets — without relying on LLM estimation at all.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PolymarketBotPage;
