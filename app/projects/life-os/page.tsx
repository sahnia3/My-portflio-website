"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const LifeOSPage = () => {
    return (
        <div className="relative min-h-screen text-white overflow-hidden z-[30] pt-32 pb-20 px-4 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                {/* Header */}
                <div className="flex flex-col gap-5">
                    <Link href="/projects" className="text-gray-400 hover:text-white transition-colors w-fit">
                        &larr; Back to Projects
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        Life-OS Dashboard
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        A centralized personal operating system with gamification. Tracks tasks, fitness, habits, and ideas with XP progression, streak mechanics, and energy-level tracking — all in one dashboard.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#2A0E61] rounded-lg hover:bg-purple-700 transition-all font-semibold">
                            <FaGithub size={20} /> View Code
                        </a>
                    </div>
                </div>

                {/* Hero Screenshot */}
                <div className="w-full relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-[#2A0E61] group">
                    <Image
                        src="/lifeos-main.png"
                        alt="Life-OS Dashboard"
                        width={1920}
                        height={1080}
                        priority
                        className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                    />
                </div>

                {/* Module Showcase */}
                <div className="flex flex-col gap-20 mt-20">

                    {/* Feature 1: Dashboard Home */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/lifeos-main.png"
                                alt="Dashboard Home"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Command Center Dashboard
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                The home dashboard shows everything at a glance — today&apos;s focus tasks, daily habits with completion tracking, a Pomodoro focus timer, upcoming deadlines, weekly stats, and an AI assistant. Real-time data updates via Supabase subscriptions keep everything synced.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2: Tasks & Kanban */}
                    <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/lifeos-tasks.png"
                                alt="Tasks Kanban"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Task Management
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Kanban-style task board with drag-and-drop, priority levels, due dates, and assignment categories. Tasks integrate with the gamification system — completing tasks earns XP and contributes to streak tracking. Academic assignments are auto-prioritized by deadline proximity.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3: Fitness & Habits */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-[#2A0E61]/50 shadow-lg hover:shadow-purple-500/10 transition-shadow">
                            <Image
                                src="/lifeos-fitness.png"
                                alt="Fitness & Habits"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Fitness & Habit Tracking
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Log workouts, track streaks, and visualize consistency with GitHub-style heatmaps. The habit system supports custom habits with flexible schedules, streak protection, and energy-level correlation analysis — showing how habits impact daily productivity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Module Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                    {[
                        { name: "Dashboard", desc: "Widget grid with stats" },
                        { name: "Tasks", desc: "Kanban board with XP" },
                        { name: "Ideas", desc: "Pinterest-style grid" },
                        { name: "Fitness", desc: "Workout & streak tracking" },
                        { name: "Calendar", desc: "Google Calendar sync" },
                        { name: "AI Assistant", desc: "Claude-powered helper" },
                        { name: "Telegram Bot", desc: "Mobile interface" },
                        { name: "Markets", desc: "Polymarket integration" },
                    ].map((mod) => (
                        <div key={mod.name} className="p-4 bg-[#110d24]/90 backdrop-blur-sm border border-[#2A0E61] rounded-xl text-center">
                            <div className="text-lg font-bold text-white">{mod.name}</div>
                            <div className="text-xs text-gray-400 mt-1">{mod.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Technical Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="p-6 bg-[#110d24]/90 backdrop-blur-sm border border-[#2A0E61] rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Key Features</h3>
                        <ul className="list-disc list-inside space-y-3 text-gray-300">
                            <li>8-module personal operating system architecture</li>
                            <li>Gamification with XP, badges, streaks, and levels</li>
                            <li>Pomodoro focus timer with session tracking</li>
                            <li>GitHub-style heatmap for habit visualization</li>
                            <li>Energy level tracking with productivity correlation</li>
                            <li>Real-time sync via Supabase subscriptions</li>
                            <li>Google OAuth authentication</li>
                            <li>Telegram bot for mobile updates</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-[#110d24]/90 backdrop-blur-sm border border-[#2A0E61] rounded-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Google OAuth", "Claude API", "Vercel"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-[#2A0E61]/50 border border-[#2A0E61] rounded-full text-sm text-cyan-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="mt-6 text-gray-400">
                            Built with Next.js 16 and Supabase as the backend-as-a-service. Supabase provides PostgreSQL, real-time subscriptions, authentication, and row-level security out of the box. Deployed on Vercel with automatic previews. The design system uses an indigo primary (#4F46E5) with amber accents (#F59E0B).
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
                            <h4 className="text-xl font-bold text-white mb-3">Why Build This?</h4>
                            <p>
                                Existing productivity tools are fragmented — tasks in Todoist, fitness in Strong, habits in Streaks, notes in Notion. Life-OS unifies everything into a single dashboard with a gamification layer that makes daily consistency feel rewarding. As a student balancing academics, side projects, and fitness, having one source of truth for everything saves context-switching overhead.
                            </p>
                        </section>
                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">Gamification System</h4>
                            <p>
                                Every action earns XP — completing tasks, maintaining streaks, logging workouts, and capturing ideas. XP accumulates into levels with milestone badges. Streaks are the core mechanic: consecutive days of habit completion build multipliers. The system also tracks daily energy levels (1-10) and correlates them with productivity metrics, helping identify patterns like &quot;I&apos;m most productive after morning workouts.&quot;
                            </p>
                        </section>
                        <section>
                            <h4 className="text-xl font-bold text-white mb-3">Architecture Decisions</h4>
                            <p>
                                Supabase was chosen over a custom backend for speed of development — it provides PostgreSQL, auth, real-time subscriptions, and row-level security with minimal setup. The modular architecture means each feature (tasks, fitness, ideas) is a self-contained module with its own schema, components, and API layer. This makes it easy to build and ship one module at a time.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeOSPage;
