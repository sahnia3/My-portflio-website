"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full h-[65px] fixed top-6 md:top-10 shadow-lg shadow-[#2A0E61]/50 bg-[#030014c0] backdrop-blur-md z-[50] px-4 md:px-10 pointer-events-auto">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#home" className="text-xl font-bold text-white">
          Aditya Sahni
        </a>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="block w-6 h-[2px] bg-white mb-1.5 transition-all" />
          <span className="block w-6 h-[2px] bg-white mb-1.5 transition-all" />
          <span className="block w-6 h-[2px] bg-white transition-all" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="w-[120px]"></div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 bg-[#0b0b0f] border border-[#2A0E61]/40 rounded-lg py-3 px-4 shadow-lg shadow-[#2A0E61]/30">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-gray-200 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

export default Navbar;
