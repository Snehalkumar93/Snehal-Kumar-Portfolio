import React from 'react';
import { motion } from 'framer-motion';

// Import the generated images
import imgEliiteOne from '../assets/projects/eliiteone_gems.png';
import imgTitanic from '../assets/projects/titanic_predictor.png';
import imgSoulCare from '../assets/projects/soulcare_health.png';
import imgMathAI from '../assets/projects/math_ai_research.png';

/* ───────────────────────── DATA ───────────────────────── */

const projects = [
  {
    number: '01',
    title: 'EliiteOne Gems',
    tech: ['React.js', 'Node.js', 'Express.js'],
    description:
      'Developed a full-stack e-commerce platform with a React.js frontend and Node.js/Express.js REST API backend, deployed on Vercel and Render. Implemented responsive product UI, server-side routing, and production deployment configuration.',
    gradient: 'from-[#ff2a2a]/40 via-red-900/20 to-black',
    image: imgEliiteOne,
    liveLink: 'https://eliite-one-gems.vercel.app/',
    githubLink: 'https://github.com/Snehalkumar93/EliiteOne-Gems',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Titanic Survival Predictor',
    tech: ['Python', 'Flask', 'scikit-learn'],
    description:
      'Built an ML web application using a Support Vector Machine (SVM/RBF kernel) trained on the Titanic dataset to predict passenger survival with confidence scoring. Engineered a Flask REST API serving predictions from serialized model artifacts and deployed on Vercel.',
    gradient: 'from-[#00b4db]/40 via-[#0083B0]/20 to-black',
    image: imgTitanic,
    liveLink: 'https://titanic-rose.vercel.app/',
    githubLink: 'https://github.com/Snehalkumar93/Titanic',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'SoulCare – Mental Health Platform',
    tech: ['HTML', 'CSS', 'JavaScript', 'Gemini API'],
    description:
      'Developed a mental wellness web platform with self-assessment tools, motivational content, and AI-powered chat support via the Gemini API. Integrated personalized wellness recommendations and backend user data management.',
    gradient: 'from-[#a18cd1]/40 via-[#fbc2eb]/20 to-black',
    image: imgSoulCare,
    liveLink: null,
    githubLink: 'https://github.com/Snehalkumar93/SoulCare',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Mathematics in AI – Research',
    tech: ['LaTeX', 'Linear Algebra', 'Probability', 'Optimization'],
    description:
      'Authored an independent research document on the mathematical foundations of ML — linear algebra, probability theory, calculus, and optimization techniques — typeset professionally in LaTeX on Overleaf.',
    gradient: 'from-[#ffb347]/40 via-[#ffcc33]/20 to-black',
    image: imgMathAI,
    liveLink: 'https://www.overleaf.com/project/67355df15208c7d8911dec87',
    githubLink: null,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

/* ───────────────────────── COMPONENT ───────────────────────── */

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#050505] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff2a2a]/5 via-transparent to-transparent opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ──── Section Header ──── */}
        <div data-aos="fade-up" className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block border border-[#ff2a2a]/30 rounded-full px-6 py-2 text-sm text-[#ff2a2a] font-bold mb-6 shadow-[0_0_15px_rgba(255,42,42,0.2)] bg-black/50 backdrop-blur-md uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-orange-500">Projects</span>
            </h2>
            <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              A showcase of my expertise in full-stack development, machine learning, and innovative digital solutions.
            </p>
          </motion.div>
        </div>

        {/* ──── Projects Layout ──── */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Side (Image inside Browser Mockup) */}
                <div className="w-full lg:w-3/5 relative group perspective-1000 z-10">
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: isEven ? -3 : 3, rotateX: 2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-style-3d border border-white/10 bg-[#1e1e20]"
                  >
                    {/* Browser Toolbar */}
                    <div className="absolute top-0 left-0 w-full h-8 md:h-10 bg-[#2a2a2d] border-b border-white/5 flex items-center px-4 z-20">
                      <div className="flex gap-1.5 md:gap-2">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]" />
                      </div>
                      <div className="mx-auto flex-1 max-w-[200px] md:max-w-xs h-4 md:h-5 bg-[#1c1c1e] rounded flex items-center justify-center opacity-50 ml-4 md:ml-8">
                        <span className="text-[8px] md:text-[10px] text-gray-400 font-mono tracking-wider">{project.liveLink ? new URL(project.liveLink).hostname : 'localhost:3000'}</span>
                      </div>
                    </div>
                    
                    {/* Image Container */}
                    <div className="absolute top-8 md:top-10 left-0 w-full h-[calc(100%-2rem)] md:h-[calc(100%-2.5rem)] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Subtle gradient to fade bottom if needed */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Glowing shadow behind the mockup */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10`} />
                  </motion.div>

                  {/* Project Number Floating */}
                  <div className={`absolute -top-12 ${isEven ? '-left-12' : '-right-12'} text-[12rem] font-black text-white/[0.03] select-none pointer-events-none -z-10 hidden md:block`}>
                    {project.number}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff2a2a] shadow-[0_0_20px_rgba(255,42,42,0.15)] backdrop-blur-sm">
                      {project.icon}
                    </div>
                    <span className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
                      Project {project.number}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, ti) => (
                      <span
                        key={ti}
                        className="text-xs font-bold px-4 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-[#ff2a2a]/50 hover:text-white transition-all duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed font-medium mb-10">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    {project.liveLink && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff2a2a] text-white text-sm font-bold hover:bg-[#e02525] hover:shadow-[0_0_30px_rgba(255,42,42,0.4)] transition-all duration-300 relative overflow-hidden group"
                      >
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </span>
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 text-white text-sm font-bold hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ──── Bottom CTA ──── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 text-center"
        >
          <div className="inline-flex flex-col items-center justify-center p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 w-full max-w-3xl mx-auto backdrop-blur-md relative overflow-hidden">
            {/* Glowing orb effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#ff2a2a] opacity-10 blur-[100px] rounded-full pointer-events-none" />
            
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Let's build something amazing together.
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Start a Conversation
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
