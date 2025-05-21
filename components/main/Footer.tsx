import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#03001417] backdrop-blur-md text-white py-6 mt-20 relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a 
              href="https://github.com/sahnia3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors p-2 rounded-full hover:bg-[#ffffff10] cursor-pointer z-50"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/sahniaditya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors p-2 rounded-full hover:bg-[#ffffff10]"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:sahni.aditya5096@gmail.com"
              className="hover:text-purple-500 transition-colors p-2 rounded-full hover:bg-[#ffffff10]"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © {currentYear} Aditya Sahni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer