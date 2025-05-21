"use client";
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const projects = [
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
      title: "Budget Tracker Application",
      company: "Web Development",
      duration: "2024",
      type: "Web",
      description: "Full-stack expense tracker with SQLAlchemy and interactive visualizations.",
      achievements: [
        "Designed and developed a full-stack expense tracker with Flask and SQLAlchemy",
        "Built interactive dashboards using Chart.js for monthly and category-wise expense visualization",
        "Enhanced user experience through a responsive UI using HTML, CSS, and Bootstrap",
        "Achieved a 35% improvement in user satisfaction through dynamic visualizations"
      ],
      technologies: ["Flask", "SQLAlchemy", "Chart.js", "Bootstrap"],
      github: "https://github.com/yourusername/budget-tracker"
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
              className={`px-6 py-2 rounded-full ${
                activeTab === tab 
                  ? 'bg-[#2A0E61] text-white' 
                  : 'bg-[#03001417] text-gray-400'
              } backdrop-blur-md transition-all`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500"/>
          <div className="space-y-16">
            {projects
              .filter(proj => activeTab === 'All' || proj.type === activeTab)
              .map((proj, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'} w-1/2`}>
                  <div className="absolute top-0 w-4 h-4 rounded-full bg-purple-500 left-[-8px]" 
                       style={{ [index % 2 === 0 ? 'left' : 'right']: '-8px' }} />
                  <div className="p-6 bg-[#1B1B1B] border-2 border-[#5656578b] rounded-lg shadow-[inset_0_0_10px_rgba(70,70,70,0.5)]">
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
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex flex-wrap gap-2">
                        {proj.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-[#2A0E61] rounded-full text-xs text-white">
                            {tech}
                          </span>
                        ))}
                      </div>
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
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
