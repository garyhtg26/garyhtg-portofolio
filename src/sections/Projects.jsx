'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
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
  );
}
