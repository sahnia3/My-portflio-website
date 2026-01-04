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
          src="/flux-dashboard-main.png"
          title="Flux Trading Platform"
          description="A high-frequency paper trading platform for stocks, crypto, and forex. Features real-time data, news integration, and simulated trading."
          link="/projects/flux-trading"
          className="w-full md:w-1/3"
        />
        <ProjectCard
          src="/axesouar.png"
          title="Axesouar.in"
          description="Built a fully responsive e-commerce website using React.js to showcase 120+ unique jewelry SKUs, providing an intuitive browsing and shopping experience for customers."
          link="/projects/axesouar"
          className="w-full md:w-1/3"
        />
        <ProjectCard
          src="/spaceportfolio.png"
          title="Portfolio Website"
          description="A modern portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Features smooth animations and a responsive design."
          link="/projects/portfolio"
          className="w-full md:w-1/3"
        />
      </div>
    </div>
  );
};

export default Projects;
