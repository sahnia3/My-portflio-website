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
    <div className="w-full min-h-[65px] h-auto fixed top-6 md:top-10 shadow-lg shadow-[#2A0E61]/50 bg-[#030014c0] backdrop-blur-md z-[50] px-4 md:px-10 pointer-events-auto rounded-xl max-w-7xl mx-auto left-0 right-0">
      <div className="w-full h-[65px] flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#home" className="text-xl font-bold text-white">
          Aditya Sahni
        </a>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {/* Hamburger Icon */}
          <div className="w-6 h-6 flex flex-col justify-around">
            <span className={`block w-6 h-[2px] bg-white transition-all ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
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

        <div className="w-[120px] hidden md:block"></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 py-4 border-t border-[#2A0E61]/40">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-gray-200 hover:text-white transition-colors cursor-pointer text-center text-lg"
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
