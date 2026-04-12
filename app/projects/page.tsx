"use client";
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const projects = [
    {
      title: "MapleRewards",
      company: "Fintech / SaaS",
      duration: "2025 – 2026",
      type: "Web",
      description: "The first native Canadian credit card rewards optimizer — maximize cashback and points across 92+ cards and 19 loyalty programs.",
      achievements: [
        "Built full-stack platform with Go/Chi backend (35+ API endpoints) and Next.js frontend totaling 27,760 lines of code",
        "Developed rewards optimization engine ranking cards by effective return per spending category with base and premium redemption values",
        "Integrated AI chat assistant powered by Claude Sonnet for personalized rewards advice and trip planning",
        "Designed portfolio analytics with fee ROI analysis, dollar-gap optimization, and wallet coverage scoring"
      ],
      technologies: ["Go", "PostgreSQL", "Redis", "Next.js", "TypeScript", "Claude API", "Stripe"],
      github: "https://github.com/sahnia3/maplerewards",
      link: "/projects/maplerewards"
    },
    {
      title: "Polymarket Trading Agent",
      company: "AI / Fintech",
      duration: "2025 – 2026",
      type: "AI",
      description: "Autonomous prediction market trading agent with 13-agent AI orchestration and 139-member weather ensemble for probabilistic forecasting.",
      achievements: [
        "Built a 13-agent orchestration system (scanner, researchers, estimators, risk manager, trader) powered by Claude",
        "Engineered a 139-member weather ensemble (GFS + ECMWF + ICON + GEM) for calibrated probabilistic forecasting",
        "Implemented 11 pre-trade risk checks including drawdown heat, concentration limits, and correlation prevention",
        "Developed Platt-calibrated multi-estimator system with quarter-Kelly position sizing across 92 open positions"
      ],
      technologies: ["Python", "Claude API", "Polymarket CLOB", "SQLite", "PostgreSQL", "Open-Meteo"],
      github: "https://github.com/sahnia3/polymarket-agent",
      link: "/projects/polymarket-bot"
    },
    {
      title: "Life-OS Dashboard",
      company: "Productivity / Full-Stack",
      duration: "2026",
      type: "Web",
      description: "Centralized personal operating system with gamification — tracks tasks, fitness, habits, and ideas with XP progression and streak mechanics.",
      achievements: [
        "Architected 8-module system (tasks, fitness, habits, ideas, calendar, AI assistant, Telegram bot, markets)",
        "Built Kanban task board, Pinterest-style ideas grid, and workout logging with GitHub-style heatmap visualization",
        "Implemented gamification layer with XP, badges, streaks, energy-level tracking, and productivity correlation",
        "Integrated Supabase real-time subscriptions, Google OAuth, and Pomodoro focus timer"
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "Claude API"],
      github: "#",
      link: "/projects/life-os"
    },
    {
      title: "Flux Trading Platform",
      company: "Financial Tech",
      duration: "2025",
      type: "Web",
      description: "A high-frequency paper trading platform allowing users to simulate buying and selling of cryptocurrencies, stocks, futures, forex, and commodities.",
      achievements: [
        "Architected a comprehensive paper trading platform using Next.js and TypeScript for a seamless user experience",
        "Implemented real-time market data feeds using WebSockets to ensure instant price updates and low-latency trading",
        "Developed complex backend logic for order matching, portfolio valuation, and margin management",
        "Integrated interactive charts and advanced search functionality to handle thousands of assets efficiently"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "PostgreSQL"],
      github: "https://github.com/sahnia3/Flux-Trading",
      link: "/projects/flux-trading"
    },
    {
      title: "Quantum Information Research",
      company: "STEM Research",
      duration: "2023",
      type: "Research",
      description: "Research assistant position working on STEM education and quantum information.",
      achievements: [
        "Selected for a research assistant position after multiple evaluation rounds",
        "Worked with high-school students under Professor Vishwakarma on a real-life research project",
        "Learned research methodology and promoted the application of STEM in problem-solving"
      ],
      technologies: ["Quantum Computing", "STEM", "Research Methodology"],
      github: "https://github.com/yourusername/quantum-research"
    },
    {
      title: "Abstract Shape Collision Detector",
      company: "Software Project",
      duration: "2024",
      type: "Software",
      description: "Java application for managing geometric shape interactions with UML design patterns.",
      achievements: [
        "Developed a Java application to manage geometric shape interactions using a preset UML class diagram",
        "Engineered and optimized intersection algorithms to detect edge-based shape overlaps",
        "Implemented Composite, Iterator, and Singleton patterns for efficient and scalable management",
        "Conducted extensive testing to ensure adherence to software specifications"
      ],
      technologies: ["Java", "UML", "OOP Design Patterns"],
      github: "https://github.com/yourusername/shape-collision"
    },
    {
      title: "Axesouar.in",
      company: "Web Development",
      duration: "2024",
      type: "Web",
      description: "Built a fully responsive e-commerce website using React.js to showcase 120+ unique jewelry SKUs.",
      achievements: [
        "Designed and developed a full-stack e-commerce platform",
        "Built interactive dashboards and product showcases",
        "Enhanced user experience through a responsive UI",
        "Achieved a significant improvement in user engagement"
      ],
      technologies: ["React.js", "Css", "JavaScript"],
      github: "#", // Add link if available
      link: "/projects/axesouar"
    },
    {
      title: "Portfolio Website",
      company: "Web Development",
      duration: "2025",
      type: "Web",
      description: "A modern portfolio website built with Next.js, Framer Motion, and Tailwind CSS.",
      achievements: [
        "Designed a high-performance personal portfolio with immersive animations",
        "Implemented responsive design for seamless mobile and desktop experience",
        "Utilized modern web technologies for optimal performance"
      ],
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/sahnia3/My-portflio-website",
      link: "/projects/portfolio"
    },
    {
      title: "Emotion Detector Using Deep Learning",
      company: "AI Project",
      duration: "2025",
      type: "AI",
      description: "Deep learning model for real-time emotion detection from facial expressions.",
      achievements: [
        "Developed a deep learning model to detect emotions from facial expressions using CNNs",
        "Trained on the FER-2013 dataset to classify facial emotions accurately",
        "Implemented real-time detection with OpenCV and integrated webcam-based predictions",
        "Built a Flask web app for deployment and optimized model performance through data augmentation"
      ],
      technologies: ["TensorFlow", "Keras", "OpenCV", "Flask"],
      github: "https://github.com/yourusername/emotion-detector"
    }
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden z-[30] pt-48">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        <h1 className="text-5xl font-bold text-center mb-4">My Projects</h1>
        <p className="text-gray-400 text-center mb-16">
          A showcase of my work across various technologies
        </p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['All', 'Research', 'Software', 'Web', 'AI'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full ${activeTab === tab
                ? 'bg-[#2A0E61] text-white'
                : 'bg-[#03001417] text-gray-400'
                } backdrop-blur-md transition-all`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500" />
          <div className="space-y-16">
            {projects
              .filter(proj => activeTab === 'All' || proj.type === activeTab)
              .map((proj, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'} w-1/2`}>
                  <div className="absolute top-0 w-4 h-4 rounded-full bg-purple-500 left-[-8px]"
                    style={{ [index % 2 === 0 ? 'left' : 'right']: '-8px' }} />
                  <div className="p-6 bg-[#1B1B1B]/80 backdrop-blur-sm border-2 border-[#5656578b] rounded-lg shadow-[inset_0_0_10px_rgba(70,70,70,0.5)] hover:border-[#2A0E61] transition-colors duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{proj.title}</h3>
                      <span className="text-sm text-gray-400">{proj.duration}</span>
                    </div>
                    <p className="text-purple-400 mb-2">{proj.company}</p>
                    <p className="text-gray-300 mb-4">{proj.description}</p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {proj.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm">{achievement}</li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700">
                      <div className="flex flex-wrap gap-2">
                        {proj.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-[#2A0E61] rounded-full text-xs text-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {/* @ts-ignore */}
                        {proj.link && (
                          <a
                            href={proj.link}
                            className="px-4 py-2 bg-[#2A0E61]/50 border border-[#2A0E61] rounded-lg text-sm hover:bg-[#2A0E61] transition-all"
                          >
                            View Project
                          </a>
                        )}
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-[#2A0E61] rounded-full hover:bg-purple-700 transition-colors"
                        >
                          <FaGithub size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
