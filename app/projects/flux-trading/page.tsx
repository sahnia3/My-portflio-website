"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const FluxTradingPage = () => {
    // Images array for the gallery
    const images = [
        { src: "/flux-dashboard-secondary.png", alt: "Market Dashboard" },
        { src: "/flux-search.png", alt: "Advanced Search" },
        { src: "/flux-assets.png", alt: "Asset Management" },
        { src: "/flux-academy.png", alt: "Trading Academy" },
    ];

    return (
        <div className="relative min-h-screen text-white overflow-hidden z-[50] pt-32 pb-20 px-4 md:px-20 bg-[#030014]">

            {/* Background stars/effects can be added here if needed, or inherited from layout */}

            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                {/* Header Section */}
                <div className="flex flex-col gap-5">
                    <Link href="/projects" className="text-gray-400 hover:text-white transition-colors w-fit">
                        ← Back to Projects
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        Flux Trading Platform
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        A high-frequency paper trading platform allowing users to simulate buying and selling of cryptocurrencies, stocks, futures, forex, and commodities.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://github.com/sahnia3/Flux-Trading" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#2A0E61] rounded-lg hover:bg-purple-700 transition-all font-semibold">
                            <FaGithub size={20} /> View Code
                        </a>
                        <a href="https://flux-trading-klmw0ddei-aditya-sahnis-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-[#7042f88b] rounded-lg hover:bg-[#7042f88b]/10 transition-all font-semibold">
                            <FaExternalLinkAlt size={18} /> View website
                        </a>
                    </div>
                </div>

                {/* Main Image / Showcase */}
                <div className="w-full relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-[#2A0E61] group">
                    <Image
                        src="/flux-dashboard-main.png"
                        alt="Flux Trading Dashboard"
                        width={1920}
                        height={1080}
                        className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                    />
                </div>

                {/* Vertical Feature Showcase */}
                <div className="flex flex-col gap-20 mt-20">

                    {/* Feature 1 */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/flux-dashboard-secondary.png"
                                alt="Market Dashboard"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Comprehensive Market Overview
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                The main dashboard provides a holistic view of the market, featuring real-time price updates, top gainers/losers, and live market news. Users can customize their watchlist to track their favorite assets, ensuring they never miss a trading opportunity in the fast-paced market environment.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/flux-search.png"
                                alt="Advanced Search"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Instant Asset Lookup
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                The powerful search engine allows users to filter through thousands of assets instantly. Whether searching for a specific stock ticker or a crypto pair, the results are delivered with sub-millisecond latency. This feature is crucial for high-frequency trading where every second counts.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/flux-assets.png"
                                alt="Asset Management"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Portfolio Management
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                A detailed breakdown of current holdings, including unrealized P&L, cumulative performance, and asset allocation. This section helps traders analyze their positions and manage risk effectively by visualizing their exposure across different asset classes.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/flux-academy.png"
                                alt="Trading Academy"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Interactive Learning Modules
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                The Flux Academy offers a structured curriculum for beginners. Users can progress through various modules, covering everything from market fundamentals to advanced technical analysis strategies. This gamified approach encourages users to learn before they burn their virtual capital.
                            </p>
                        </div>
                    </div>

                    {/* Feature 5: The Visual Lab */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/flux-visual-lab.png"
                                alt="The Visual Lab"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                The Visual Lab
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Explore the concepts from the course with our interactive visualizers. Real-time data and simulations to reinforce your learning.
                            </p>
                        </div>
                    </div>

                    {/* Feature 6: Flux AI Lab */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/flux-ai-lab.png"
                                alt="Flux AI Lab"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Flux AI Lab
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Experience the future of trading with our advanced AI Lab. Simulate specific market scenarios to test your strategies without risk. Stuck on a concept? Ask our AI chatbot anything about stocks, trends, or financial data—it&apos;s like having a 24/7 professional mentor by your side.
                            </p>
                        </div>
                    </div>
                </div>


                {/* Technical Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="p-6 bg-[#110d24] border border-[#2A0E61] rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Key Features</h3>
                        <ul className="list-disc list-inside space-y-3 text-gray-300">
                            <li>Real-time market data for simulated trading</li>
                            <li>Support for Stocks, Crypto, Forex, Futures, and Commodities</li>
                            <li>Live news integration for informed trading decisions</li>
                            <li>Portfolio tracking and performance analytics</li>
                            <li>Advanced charting with technical indicators</li>
                            <li>Academy module for learning trading basics</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-[#110d24] border border-[#2A0E61] rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "WebSockets", "Redux", "PostgreSQL"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-[#2A0E61]/50 border border-[#2A0E61] rounded-full text-sm text-cyan-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="mt-6 text-gray-400">
                            Built with performance in mind, utilizing server-side rendering and efficient state management to handle real-time data updates without lag.
                        </p>
                    </div>
                </div>

                {/* Detailed Description */}
                <div className="mt-10 p-8 bg-[#0b0b0f] border border-[#2A0E61]/40 rounded-xl">
                    <h3 className="text-3xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                        In-Depth Project Detail
                    </h3>

                    <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">Project Overview</h4>
                            <p>
                                Flux Trading is a state-of-the-art paper trading simulation platform designed to bridge the gap between theoretical knowledge and practical market experience. It provides a risk-free environment where aspiring traders can execute trades across multiple asset classes—including Cryptocurrencies, Stocks, Forex, and Futures—using real-time market data.
                            </p>
                        </section>

                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">The Challenge</h4>
                            <p>
                                Building a trading platform requires handling massive amounts of data with minimal latency. A delay of a few seconds can mean the difference between profit and loss in the real world. My goal was to replicate this high-stakes environment in a browser-based application, requiring optimized data fetching, state management, and re-rendering strategies.
                            </p>
                        </section>

                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">Technical Implementation</h4>
                            <p>
                                I architected the application using Next.js to leverage server-side rendering for the initial load and SEO. For the live market data, I integrated multiple financial APIs and utilized WebSockets to push real-time updates to the client. This ensures that the price charts and order boks are always synchronized with the global market.
                            </p>
                            <p className="mt-2">
                                The backend handles the complex logic of order matching. When a user places a &quot;Limit Order&quot; or &quot;Stop Loss&quot;, the server continuously monitors the price feed. Once the conditions are met, the order executes instantly, updating the user&apos;s portfolio balance and transaction history.
                            </p>
                        </section>

                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">Key Features & Modules</h4>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Universal Market Access:</strong> Trade thousands of assets from a single unified dashboard.</li>
                                <li><strong>Advanced Charting:</strong> Integrated TradingView-style charts with customizable indicators (RSI, MAXD, Bollinger Bands).</li>
                                <li><strong>Portfolio Analytics:</strong> Visual breakdown of asset allocation, daily P&L, and historical performance.</li>
                                <li><strong>Trading Academy:</strong> A gamified learning module that rewards users for completing lessons on market fundamentals and technical analysis.</li>
                            </ul>
                        </section>

                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">Future Roadmap</h4>
                            <p>
                                The next phase of development involves adding social trading features, allowing users to follow and copy the trades of top performers on the leaderboard. I am also exploring the integration of AI-driven market sentiment analysis to provide traders with predictive insights.
                            </p>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FluxTradingPage;
