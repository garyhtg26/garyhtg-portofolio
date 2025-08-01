'use client';

import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-semibold">Frontend Developer @ Creative Studio</h3>
            <p className="text-gray-300">Jan 2022 - Present</p>
            <p className="text-base mt-2">Building interactive websites and UI for various clients using React, GSAP, and WebGL.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">UI/UX Designer @ Freelance</h3>
            <p className="text-gray-300">2020 - 2021</p>
            <p className="text-base mt-2">Designed interfaces and brand identities for small businesses and startups.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
