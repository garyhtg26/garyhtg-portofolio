'use client';

import React from "react";
// import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
// import dynamic from 'next/dynamic';

// const SpinningCanvas = dynamic(() => import("../components/SpinningCanvas"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm [Your Name]
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          A passionate frontend developer who loves crafting engaging web experiences with animation and 3D.
        </motion.p>
        {/* <div className="w-full h-[300px] mt-8">
          <Spline scene="https://prod.spline.design/qDWShnyLwczk5o62/scene.splinecode" />
        </div>
        <SpinningCanvas /> */}
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I'm a creative developer with a strong foundation in modern web technologies.
            I love combining visuals, code, and interactivity to bring ideas to life. My work
            blends clean design with smooth user experience.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
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

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">Project #{i}</h3>
                <p className="text-sm text-gray-300">A cool description of what this project does and what tech was used.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-400">
        © 2025 Your Name. All rights reserved.
      </footer>
    </main>
  );
}