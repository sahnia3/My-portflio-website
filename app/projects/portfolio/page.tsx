"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const PortfolioPage = () => {
    return (
        <div className="relative min-h-screen text-white overflow-hidden z-[50] pt-32 pb-20 px-4 md:px-20 bg-[#030014]">

            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors w-fit">
                    ← Back to Projects
                </Link>

                {/* Hero */}
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        Portfolio Website
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        A showcase of my journey as a Full-Stack Developer. Built with modern web technologies to demonstrate high-performance animations and immersive UI design.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://github.com/sahnia3/My-portflio-website/tree/main" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#2A0E61] rounded-lg hover:bg-purple-700 transition-all font-semibold">
                            <FaGithub size={20} /> View Code
                        </a>
                    </div>
                </div>

                <div className="w-full relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-[#2A0E61]">
                    <Image
                        src="/spaceportfolio.png"
                        alt="Portfolio Screenshot"
                        width={1920}
                        height={1080}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Technical Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="p-6 bg-[#110d24] border border-[#2A0E61] rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Key Features</h3>
                        <ul className="list-disc list-inside space-y-3 text-gray-300">
                            <li>3D Space-themed background with particle effects</li>
                            <li>Smooth framer-motion animations for page transitions</li>
                            <li>Responsive grid layouts for project showcasing</li>
                            <li>Interactive skill visualization</li>
                            <li>Optimized performance with Next.js Server Components</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-[#110d24] border border-[#2A0E61] rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-[#2A0E61]/50 border border-[#2A0E61] rounded-full text-sm text-cyan-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="mt-6 text-gray-400">
                            Leveraging the latest features of Next.js for SEO and performance, combined with Tailwind for rapid, beautiful styling.
                        </p>
                    </div>
                </div>

                <div className="mt-10 p-8 bg-[#0b0b0f] border border-[#2A0E61]/40 rounded-xl">
                    <h3 className="text-3xl font-bold mb-6 text-white">Concept & Design</h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                        <p>
                            I wanted my portfolio to be more than just a resume—it needed to be an experience. The "Black Hole" and space theme represents the infinite possibilities of technology and my deep curiosity about the unknown.
                        </p>
                        <p>
                            Every interaction is designed to feel smooth and purposeful. From the hero section animations to the project card hover effects, the goal was to create a memorable browsing experience that highlights my attention to detail and passion for frontend engineering.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PortfolioPage;
