"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const HeroHome = () => {
  const router = useRouter();

  const handleProjectsClick = () => {
    router.push('/projects');
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto min-h-screen px-4 md:px-20 gap-10 pt-32 md:pt-0">
      <div className="w-full md:w-1/2 text-white z-20 pointer-events-auto px-2 sm:px-6 md:px-0 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Hi, I&apos;m Aditya Sahni
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-400 mb-6">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-8">
          A passionate developer with expertise in Python, React, Java, and numerous technologies. Currently pursuing a Bachelor&apos;s in Computer Science at McMaster University.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button
            onClick={handleProjectsClick}
            className="px-6 py-3 bg-white hover:bg-opacity-90 text-black rounded-md cursor-pointer"
          >
            View My Work →
          </button>
          <a
            href="/Aditya_Sahni_Resume.pdf"
            download="Aditya_Sahni_Resume.pdf"
            className="px-6 py-3 border border-white text-white hover:bg-white/10 rounded-md cursor-pointer"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex-shrink-0">
        <Image
          src="/profile3.jpg"
          alt="Profile picture"
          fill
          className="rounded-full object-cover border border-white/10 shadow-xl"
          sizes="(max-width: 768px) 70vw, 400px"
          priority
        />
      </div>
    </div>
  )
}

export default HeroHome








