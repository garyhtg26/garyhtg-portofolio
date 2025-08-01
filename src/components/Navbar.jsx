import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-black text-white py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">garyhtg</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-base font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 text-base font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition" onClick={toggleMenu}>About</a>
          <a href="#experience" className="hover:text-white transition" onClick={toggleMenu}>Experience</a>
          <a href="#projects" className="hover:text-white transition" onClick={toggleMenu}>Projects</a>
        </div>
      )}
    </nav>
  );
}
