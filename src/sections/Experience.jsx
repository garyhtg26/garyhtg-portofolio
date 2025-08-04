'use client';

import React from 'react';
import { motion } from 'framer-motion';

function getDurationSince(start, end = null) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return `${years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : ''}${
    months > 0 ? ` ${months} mo` : ''
  }`.trim();
}

export default function Experience() {
  const jobs = [
    {
      company: 'PT Asuransi Jasa Indonesia',
      location: 'Jakarta, Indonesia',
      type: 'Full-time',
      roles: [
        {
          title: 'Officer IT Business Solution',
          start: '2024-05',
          end: null,
          desc: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Developed insurance tools apps (web & mobile)</li>
              <li>Designed UI/UX interfaces using Figma</li>
              <li>Built features using React.js, Spring Boot, Laravel, and Java</li>
              <li>Maintained CI/CD pipelines with Jenkins and GitLab</li>
            </ul>
          ),
          
         },
        {
          title: 'Officer Development Program',
          start: '2023-05',
          end: '2024-04',
          desc: 'Selected as a future leader candidate through the 2023 BUMN Joint Recruitment Program and underwent intensive training to gain a comprehensive understanding of the company’s end-to-end business processes.',
        },
      ],
    },
    {
      company: 'PT. Cerdas Digital Indonesia (Timedoor Academy)',
      location: 'Remote',
      type: 'Part-time',
      roles: [
        {
          title: 'Teacher (Part Time)',
          start: '2022-08',
          end: null,
          desc: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Educated students from grades 1–12 through project-based learning</li>
              <li>Taught algorithmic thinking and game development using Phaser</li>
              <li>Introduced web and mobile development with JavaScript & React Native</li>
              <li>Guided students in beginner-level AI concepts using Python</li>
            </ul>
          ),
          
         },
      ],
    },
    {
      company: 'Lippo Malls Indonesia',
      location: 'Jakarta Barat, Indonesia',
      type: 'Full-time',
      roles: [
        {
          title: 'Frontend Developer',
          start: '2022-06',
          end: '2023-05',
          desc: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Created innovative web applications using .NET, MVC Framework</li>
              <li>Maintained and improved website performance and usability</li>
              <li>Collaborated with backend & design teams to enhance UX</li>
            </ul>
          ),
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <ul className="space-y-12">
          {jobs.map((job, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold">{job.company}</h3>
                <p className="text-gray-400 text-sm">
                  {job.location} · {job.type}
                </p>
              </div>

              <div className="mt-4 space-y-6 border-l border-gray-700 pl-4">
                {job.roles.map((role, i) => (
                  <div key={i}>
                    <h4 className="text-lg font-semibold">{role.title}</h4>
                    <p className="text-gray-300 text-sm">
                      {new Date(role.start).toLocaleString('default', {
                        month: 'short',
                        year: 'numeric',
                      })}{' '}
                      –{' '}
                      {role.end
                        ? new Date(role.end).toLocaleString('default', {
                            month: 'short',
                            year: 'numeric',
                          })
                        : 'Present'}{' '}
                      · {getDurationSince(role.start, role.end)}
                    </p>
                    <div className="mt-2 text-base text-gray-100">{role.desc}</div>
                  </div>
                ))}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
