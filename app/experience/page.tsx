"use client";
import React, { useState } from 'react';

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const experiences = [
    {
      title: "TD Bank",
      company: "Software Engineer Co-op",
      location: "Toronto, Ontario",
      duration: "Sep 2025 - Dec 2025",
      type: "Work",
      description: "Automated data workflows and reporting across security operations using the Microsoft stack.",
      achievements: [
        "Engineered an automated ETL pipeline with Power Automate to extract unstructured Confluence data into SQL-ready CSVs, cutting manual entry latency by 90%.",
        "Built SQL stored procedures that processed TMX user requests and categorized users into Blocklist, Watchlist, and Safelist based on real-time security logic.",
        "Eliminated 5+ hours of weekly manual QA by implementing validation scripts that enforced data integrity prior to ingestion.",
        "Designed a high-availability Power BI dashboard to monitor aggregator logins and SLA metrics, optimizing DAX for faster refresh and query performance."
      ]
    },
    {
      title: "Axesouár — Jewellery (Freelance)",
      company: "Full-Stack Web Developer",
      location: "Hamilton, Ontario",
      duration: "2025",
      type: "Work",
      description: "Built a fully responsive e-commerce website using React.js to showcase 120+ unique jewelry SKUs, providing an intuitive browsing and shopping experience for customers.",
      achievements: [
        "Leveraged a broad tech stack—including React.js, Node.js, REST APIs, Firebase, and MongoDB—to build a scalable full-stack platform, which helped to increase site-wide flow by 60%."
      ]
    },
    {
      title: "DocOnline Health India Pvt. Ltd.",
      company: "Assistant Software Developer",
      location: "Mumbai, India",
      duration: "May 2024 - Sep 2024",
      type: "Work",
      description: "Collaborated within an Agile team to build and deploy a scalable platform that aggregates medical data from live external sources.",
      achievements: [
        "Engineered and integrated REST APIs to handle real-time data ingestion, validation, and processing, improving the accuracy of healthcare insights.",
        "Architected a cloud-native workflow on AWS (EC2, S3, and Lambda) to deliver a cost-efficient serverless infrastructure that reduced operational overhead."
      ]
    }
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden z-[30] pt-32 md:pt-48">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Experience</h1>
        <p className="text-gray-400 text-center mb-16">
          My professional journey and achievements
        </p>
        
        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {['All', 'Work', 'Leadership', 'Research'].map((tab) => (
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

        {/* Timeline */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500"/>
          <div className="space-y-10 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-8' : 'lg:mr-auto lg:pr-8'}`}
              >
                <div
                  className="hidden lg:block absolute top-0 w-4 h-4 rounded-full bg-purple-500"
                  style={{ [index % 2 === 0 ? 'left' : 'right']: '-8px' }}
                />
                <div className="p-5 sm:p-6 bg-[#1B1B1B] border-2 border-[#5656578b] rounded-lg shadow-[inset_0_0_10px_rgba(70,70,70,0.5)]">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="text-sm text-gray-400">{exp.duration}</span>
                  </div>
                  <p className="text-purple-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.location}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 text-sm">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
