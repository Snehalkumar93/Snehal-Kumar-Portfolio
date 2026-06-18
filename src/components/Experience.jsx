import React from 'react';
import { motion } from 'framer-motion';

/* ───────────────────────── DATA ───────────────────────── */

const timelineData = [
  {
    type: 'work',
    title: 'Web Development Intern',
    org: 'OasisInfobyte',
    period: 'Nov 2024 – Dec 2024',
    bullets: [
      'Built responsive web interfaces using HTML, CSS, and JavaScript, improving cross-browser compatibility and usability.',
      'Debugged frontend issues and contributed to feature development and deployment workflows, ensuring timely delivery.',
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.193 23.193 0 0112 15c-3.183 0-6.22-.64-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    type: 'education',
    title: 'Bachelor of Technology – CSE',
    org: 'Allenhouse Institute of Technology, Kanpur',
    period: '2023 – 2027',
    bullets: [],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    type: 'education',
    title: 'Intermediate',
    org: 'SR Education Centre',
    period: '2023',
    bullets: [],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const trainings = [
  { name: 'Data Structures & Algorithms Training', year: '2025' },
  { name: 'Mathematics & Logic in Computer Science', year: '' },
  { name: 'SWAMLCS-24 – Applications of Mathematics & Logic in CS', year: 'Aug 2024' },
  { name: 'E-Summit\'24 – IIT Kanpur Entrepreneurship Cell', year: 'Jan 2025' },
  { name: 'Competitive Programming Workshop – GFG', year: '2025' },
  { name: 'Career Guidance Webinar – E-Cell IIT Hyderabad', year: '2025' },
  { name: 'Generative AI Mastery Workshop (GenAI Buildathon)', year: 'Aug 2025' },
];

const achievements = [
  {
    title: 'Smart India Hackathon (SIH)',
    desc: 'Selected at college level among competitive participants.',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Chess Competition – 2nd Position',
    desc: 'Awarded 2nd position at college event.',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v-2h-2v2zm1-10c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
      </svg>
    ),
  },
  {
    title: 'HackStreet 4.0 Hackathon',
    desc: 'Participated in the hackathon organized by IEEE Student Branch JIIT, Noida.',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
  },
  {
    title: 'Nexify\'26 Hackathon',
    desc: 'Successfully participated, showcasing innovation and technical skills.',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
      </svg>
    ),
  },
];

/* ───────────────────────── COMPONENT ───────────────────────── */

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ──── Section Header ──── */}
        <div data-aos="fade-up" className="text-center mb-20">
          <span className="inline-block border border-gray-700 rounded-full px-5 py-1.5 text-sm text-gray-400 font-bold mb-6 bg-gray-900/60 backdrop-blur-sm">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Experience <span className="text-[#ff2a2a]">&</span> Education
          </h2>
        </div>

        {/* ──── Timeline ──── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff2a2a] via-gray-700 to-transparent md:-translate-x-px" />

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                data-aos={isLeft ? 'fade-right' : 'fade-left'}
                data-aos-delay={index * 150}
                className={`relative flex items-start mb-16 last:mb-0 ${
                  /* Mobile: always right of line. Desktop: alternate */
                  'ml-16 md:ml-0'
                } ${
                  isLeft
                    ? 'md:flex-row md:justify-start'
                    : 'md:flex-row-reverse md:justify-start'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[-40px] md:left-1/2 md:-translate-x-1/2 top-6 z-20 w-4 h-4 rounded-full bg-[#ff2a2a] border-4 border-[#0a0a0a] shadow-[0_0_12px_rgba(255,42,42,0.6)]`}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-[#ff2a2a]/40 transition-all duration-500 shadow-lg hover:shadow-[0_8px_30px_rgba(255,42,42,0.15)] w-full md:w-[45%] ${
                    isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
                  }`}
                >
                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#ff2a2a]/10 text-[#ff2a2a]">
                      {item.icon}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ff2a2a]">
                      {item.type === 'work' ? 'Experience' : 'Education'}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-white mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-semibold text-sm mb-1">{item.org}</p>
                  <p className="text-gray-500 text-sm font-medium mb-4">{item.period}</p>

                  {item.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {item.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ──── Training & Workshops ──── */}
        <div className="mt-32">
          <div data-aos="fade-up" className="text-center mb-14">
            <span className="inline-block border border-gray-700 rounded-full px-5 py-1.5 text-sm text-gray-400 font-bold mb-6 bg-gray-900/60 backdrop-blur-sm">
              Continuous Learning
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Training <span className="text-[#ff2a2a]">&</span> Workshops
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainings.map((t, i) => (
              <motion.div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-[#ff2a2a]/40 hover:bg-gray-800/80 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#ff2a2a] opacity-60 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white text-sm font-semibold leading-snug">{t.name}</p>
                    {t.year && (
                      <p className="text-gray-500 text-xs font-medium mt-1">{t.year}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ──── Achievements ──── */}
        <div className="mt-32">
          <div data-aos="fade-up" className="text-center mb-14">
            <span className="inline-block border border-gray-700 rounded-full px-5 py-1.5 text-sm text-gray-400 font-bold mb-6 bg-gray-900/60 backdrop-blur-sm">
              Milestones
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-[#ff2a2a]/50 transition-all duration-500 shadow-lg hover:shadow-[0_12px_40px_rgba(255,42,42,0.12)] text-center group cursor-default"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#ff2a2a]/10 text-[#ff2a2a] mb-4 group-hover:bg-[#ff2a2a]/20 transition-colors">
                  {a.icon}
                </div>
                <h4 className="text-white font-bold text-sm mb-2 leading-snug">{a.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
