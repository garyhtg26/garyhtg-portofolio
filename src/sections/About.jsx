'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
        <div className="flex flex-col items-center gap-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover"
          />
          <p className="text-lg leading-relaxed max-w-xl">
            I'm a creative developer with a strong foundation in modern web technologies.
            I love combining visuals, code, and interactivity to bring ideas to life. My work
            blends clean design with smooth user experience.
          </p>
          <div className="flex space-x-6 text-2xl mt-4 text-cyan-400">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-white transition" />
            </a>
            <a href="#" aria-label="GitHub">
              <FaGithub className="hover:text-white transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
