"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const AxesouarPage = () => {
    return (
        <div className="relative min-h-screen text-white overflow-hidden z-[50] pt-32 pb-20 px-4 md:px-20 bg-[#030014]">

            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors w-fit">
                    ← Back to Projects
                </Link>

                {/* Hero Section */}
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        Axesouar.in
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        A premium e-commerce experience designed for a unique jewelry brand. Showcasing over 120+ exclusive SKUs with a focus on visual storytelling and seamless user navigation.
                    </p>
                    <div className="flex gap-4">
                        {/* Using a real-looking link based on title, fallback to # if not confirmed */}
                        <a href="https://axesouar.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#2A0E61] rounded-lg hover:bg-purple-700 transition-all font-semibold">
                            <FaExternalLinkAlt size={18} /> Visit Website
                        </a>
                    </div>
                </div>

                {/* Main Showcase */}
                <div className="w-full relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-[#2A0E61]">
                    <Image
                        src="/axesouar.png"
                        alt="Axesouar Homepage"
                        width={1920}
                        height={1080}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Technical & Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="p-6 bg-[#110d24] border border-[#2A0E61] rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Project Highlights</h3>
                        <ul className="list-disc list-inside space-y-3 text-gray-300">
                            <li>Fully responsive design optimized for mobile and desktop</li>
                            <li>Dynamic product catalog supporting 120+ unique items</li>
                            <li>Optimized image loading and caching for fast performance</li>
                            <li>Seamless intuitive navigation for enhanced user experience</li>
                            <li>Custom styling to match the brand's aesthetic identity</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-[#110d24] border border-[#2A0E61] rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {["React.js", "JavaScript", "CSS3", "HTML5", "Responsive Design"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-[#2A0E61]/50 border border-[#2A0E61] rounded-full text-sm text-cyan-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="mt-6 text-gray-400">
                            The core focus was on creating a lightweight, high-performance frontend that lets the high-quality product imagery take center stage.
                        </p>
                    </div>
                </div>

                <div className="mt-10 p-8 bg-[#0b0b0f] border border-[#2A0E61]/40 rounded-xl">
                    <h3 className="text-3xl font-bold mb-6 text-white">Development Story</h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                        <p>
                            For Axesouar, the challenge was to translate a diverse collection of jewelry into a digital format that felt as premium as the products themselves. I architected the frontend to be modular, ensuring that adding new stock or changing collections is straightforward.
                        </p>
                        <p>
                            Accessibility and speed were paramount. I utilized modern React practices to manage state efficiently, ensuring that filtering and searching through the 120+ SKUs feels instant. The responsive layout guarantees that customers have a flawless shopping experience whether they are on a phone, tablet, or laptop.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AxesouarPage;
