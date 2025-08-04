'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const projectData = [
  {
    title: 'Jasmin by Jasindo',
    desc: 'Jasmin is a comprehensive mobile app developed by Asuransi Jasindo, combining motor vehicle claims, agricultural, and health insurance into one platform.',
    image: '/images/grid1.png',
    tech: ['Mobile App', 'React Native', 'JavaScript'],
    details: 'Jasmin offers a seamless experience for managing policies, submitting claims, and accessing services. Developed using React Native and JavaScript, I contributed to system design, UI/UX, and development, while implementing a CI/CD pipeline for efficient testing and deployment.',
    gallery: ['/images/1a.png', '/images/1b.png', '/images/1c.png'],
  },

  {
    title: 'Ruang Data Jasindo',
    desc: 'Ruang Data Jasindo is an integrated data hub platform developed to centralize and organize all Jasindo’s resources.',
    image: '/images/grid2.png',
    tech: ['React js', 'Tableau', 'Node.js'],
    details: 'Ruang Data Jasindo serves as the central hub for Jasindo’s internal resources. I led the development, starting with system design and defining brand guidelines, integrating logos and their meanings. Using React, TailwindCSS, and Node.js, I built a responsive platform with intuitive navigation and a CMS for real-time updates, ensuring efficient resource management and accessibility.',
    gallery: ['/images/2a.png', '/images/2b.png'],
  }

];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const openModal = (project) => {
    setActiveProject(project);
    setSlideIndex(0);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projectData.map((project, i) => (
            <motion.div
              key={i}
              onClick={() => openModal(project)}
              className="cursor-pointer bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 text-white max-w-4xl w-full rounded-xl overflow-hidden shadow-xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* Image Carousel */}
              <div className="relative w-full h-[500px] bg-black">
                <img
                  src={activeProject.gallery[slideIndex]}
                  alt="project slide"
                  className="w-full h-full object-cover"
                />

                {/* Carousel Controls */}
                {activeProject.gallery.length > 1 && (
                  <>
                    {/* Left */}
                    <button
                      onClick={() =>
                        setSlideIndex(
                          (slideIndex - 1 + activeProject.gallery.length) %
                          activeProject.gallery.length
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 
                   bg-black/70 text-white border border-white/30 
                   p-3 rounded-full hover:bg-black/90 
                   shadow-lg transition"
                    >
                      <FiChevronLeft className="text-2xl" />
                    </button>

                    {/* Right */}
                    <button
                      onClick={() =>
                        setSlideIndex((slideIndex + 1) % activeProject.gallery.length)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 
                   bg-black/70 text-white border border-white/30 
                   p-3 rounded-full hover:bg-black/90 
                   shadow-lg transition"
                    >
                      <FiChevronRight className="text-2xl" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {activeProject.gallery.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSlideIndex(idx)}
                          className={`w-3 h-3 rounded-full border border-white/30 ${idx === slideIndex ? 'bg-black/90' : 'bg-black/30'
                            }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>


              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{activeProject.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{activeProject.details}</p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
