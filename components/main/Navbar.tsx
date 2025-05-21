import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-10 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[50] px-10 pointer-events-auto">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#home" className="text-xl font-bold text-white">
          Aditya Sahni
        </a>

        <div className="flex items-center gap-8">
          <Link href="/" className="text-white hover:text-purple-500 transition-colors cursor-pointer">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About</Link>
          <Link href="/experience" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Experience</Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Projects</Link>
          <Link href="/blog" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Blog</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</Link>
        </div>

        <div className="w-[120px]"></div>
      </div>
    </div>
  );
};

export default Navbar;
