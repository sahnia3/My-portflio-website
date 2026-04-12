import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/maplerewards-optimizer.png"
          title="MapleRewards"
          description="The first native Canadian credit card rewards optimizer. Full-stack Go/Next.js platform with AI chat, trip planner, and portfolio analytics across 92+ cards."
          link="/projects/maplerewards"
          className="w-full md:w-1/3"
        />
        <ProjectCard
          src="/polymarket-main.png"
          title="Polymarket Trading Agent"
          description="Autonomous AI trading bot with 13-agent orchestration, 139-member weather ensemble, and 11 pre-trade risk checks for prediction market trading."
          link="/projects/polymarket-bot"
          className="w-full md:w-1/3"
        />
        <ProjectCard
          src="/lifeos-main.png"
          title="Life-OS Dashboard"
          description="Personal operating system with gamification — tracks tasks, fitness, habits, and ideas with XP progression, streak mechanics, and a Pomodoro timer."
          link="/projects/life-os"
          className="w-full md:w-1/3"
        />
      </div>
    </div>
  );
};

export default Projects;
