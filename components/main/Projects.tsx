import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-20 px-20 justify-center items-stretch">
        <ProjectCard
          src="/axesouar.png"
          title="Axesouar.in"
          description="Built a fully responsive e-commerce website using React.js to showcase 120+ unique jewelry SKUs, providing an intuitive browsing and shopping experience for customers."
          className="w-full md:w-[600px] h-[500px]"
          imageHeight="h-[350px]"
        />
        <ProjectCard
          src="/spaceportfolio.png"
          title="Portfolio Website"
          description="A modern portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Features smooth animations and a responsive design."
          className="w-full md:w-[600px] h-[500px]"
          imageHeight="h-[350px]"
        />
        <ProjectCard
          src="/budgettracker.png"
          title="Budget tracker"
          description="A desktop application for budget tracking. Allows you to record spending by price and category. "
          className="w-full md:w-[600px] h-[500px]"
          imageHeight="h-[350px]"
        />
      </div>
    </div>
  );
};

export default Projects;
