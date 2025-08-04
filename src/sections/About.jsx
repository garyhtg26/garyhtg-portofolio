'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        {/* Image Card with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, y: 50 }}
          whileInView={{ opacity: 1, rotate: -6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-3 pt-3 pb-6 rounded-sm shadow-lg w-[200px] rotate-[-6deg] hover:rotate-0 hover:scale-105 transition"
        >
          <img
            src="/images/me.jpg"
            alt="Profile"
            className="rounded-sm w-full h-auto object-cover"
          />
        </motion.div>

        {/* Text & Social with Framer Motion */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            I'm a creative developer with a strong foundation in modern web technologies.
            I love combining visuals, code, and interactivity to bring ideas to life. My work
            blends clean design with smooth user experience.
          </p>

          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            {[
              { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/garyhtg' },
              { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/garyhtg26' },
              { icon: <FaInstagram />, label: 'Instagram', href: 'http://instagram.com/garyhtg' },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 backdrop-blur-md bg-white/5 text-white hover:bg-white/10 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
