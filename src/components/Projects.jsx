import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

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
      'Developed a full-stack e-commerce platform with a React.js frontend and Node.js/Express.js REST API backend, deployed on Vercel and Render.',
    accentColor: '#ff2a2a',
    glowFrom: '#ff2a2a',
    glowTo: '#ff6b35',
    image: imgEliiteOne,
    liveLink: 'https://eliite-one-gems.vercel.app/',
    githubLink: 'https://github.com/Snehalkumar93/EliiteOne-Gems',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Titanic Survival Predictor',
    tech: ['Python', 'Flask', 'scikit-learn'],
    description:
      'Built an ML web application using SVM trained on the Titanic dataset to predict passenger survival with confidence scoring.',
    accentColor: '#00b4db',
    glowFrom: '#00b4db',
    glowTo: '#0083B0',
    image: imgTitanic,
    liveLink: 'https://titanic-rose.vercel.app/',
    githubLink: 'https://github.com/Snehalkumar93/Titanic',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'SoulCare – Mental Health',
    tech: ['HTML', 'CSS', 'JavaScript', 'Gemini API'],
    description:
      'Developed a mental wellness web platform with self-assessment tools, motivational content, and AI-powered chat support.',
    accentColor: '#a18cd1',
    glowFrom: '#a18cd1',
    glowTo: '#fbc2eb',
    image: imgSoulCare,
    liveLink: null,
    githubLink: 'https://github.com/Snehalkumar93/SoulCare',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Mathematics in AI',
    tech: ['LaTeX', 'Linear Algebra', 'Probability'],
    description:
      'Authored an independent research document on the mathematical foundations of ML — linear algebra, probability, and optimization.',
    accentColor: '#ffb347',
    glowFrom: '#ffb347',
    glowTo: '#ffcc33',
    image: imgMathAI,
    liveLink: 'https://www.overleaf.com/project/67355df15208c7d8911dec87',
    githubLink: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

/* ───────────────────────── 3D TILT CARD ───────────────────────── */

const TiltCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/touch devices
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Motion values for mouse-following tilt
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth spring physics for natural tilt feel
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [12, -12]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), {
    stiffness: 200,
    damping: 30,
  });

  // Shine/glare position
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Touch handlers for mobile
  const handleTouchStart = () => {
    if (isMobile) setIsHovered(true);
  };
  const handleTouchEnd = () => {
    if (isMobile) setTimeout(() => setIsHovered(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative"
      style={{ perspective: '1200px' }}
    >
      {/* Colored Glow Behind Card */}
      <motion.div
        className="absolute -inset-4 rounded-3xl blur-2xl -z-10"
        style={{
          background: `radial-gradient(ellipse at center, ${project.glowFrom}30, ${project.glowTo}10, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.15,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* 3D Tilting Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          rotateX: !isMobile && isHovered ? rotateX : 0,
          rotateY: !isMobile && isHovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-xl md:rounded-2xl overflow-hidden bg-[#111113] border border-white/[0.08] cursor-pointer group"
      >
        {/* Glare/Shine Effect */}
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.12) 0%, transparent 60%)`
            ),
          }}
        />

        {/* Image Section */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
          <motion.img
            src={project.image}
            alt={`Screenshot of ${project.title} project`}
            loading="lazy"
            className="w-full h-full object-cover object-top"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent" />

          {/* Colored top border accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: `linear-gradient(90deg, ${project.glowFrom}, ${project.glowTo})`,
            }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Project Number */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
            <motion.span
              className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg backdrop-blur-md"
              style={{
                color: project.accentColor,
                backgroundColor: `${project.accentColor}15`,
                border: `1px solid ${project.accentColor}25`,
              }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.number}
            </motion.span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-3.5 sm:p-4 md:p-5 relative" style={{ transform: isMobile ? 'none' : 'translateZ(30px)' }}>
          {/* Icon + Title */}
          <div className="flex items-center gap-2 sm:gap-2.5 mb-2.5 sm:mb-3">
            <motion.div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center border shrink-0"
              style={{
                color: project.accentColor,
                borderColor: `${project.accentColor}30`,
                backgroundColor: `${project.accentColor}10`,
              }}
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {project.icon}
            </motion.div>
            <h3 className="text-base sm:text-lg md:text-xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-[11px] sm:text-xs leading-relaxed mb-3 sm:mb-4 overflow-hidden"
            animate={{
              height: isMobile ? 'auto' : (isHovered ? 'auto' : '32px'),
              opacity: isMobile ? 0.8 : (isHovered ? 1 : 0.6),
            }}
            transition={{ duration: 0.4 }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
            {project.tech.map((t, ti) => (
              <motion.span
                key={ti}
                className="text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full border"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}20`,
                  backgroundColor: `${project.accentColor}08`,
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: `${project.accentColor}20`,
                  borderColor: `${project.accentColor}50`,
                }}
                transition={{ duration: 0.2 }}
              >
                {t}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {project.liveLink && (
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-white text-[10px] sm:text-[11px] font-bold transition-shadow duration-300"
                style={{
                  background: `linear-gradient(135deg, ${project.glowFrom}, ${project.glowTo})`,
                  boxShadow: isHovered
                    ? `0 8px 25px ${project.glowFrom}40`
                    : `0 4px 15px ${project.glowFrom}20`,
                }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </motion.a>
            )}
            {project.githubLink && (
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/[0.06] text-white text-[10px] sm:text-[11px] font-bold border border-white/10 hover:bg-white/[0.12] hover:border-white/25 transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ───────────────────────── MAIN COMPONENT ───────────────────────── */

const Projects = () => {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="bg-[#050505] pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-32 px-4 sm:px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff2a2a]/5 via-transparent to-transparent opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ──── Section Header ──── */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block border border-[#ff2a2a]/30 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm text-[#ff2a2a] font-bold mb-4 sm:mb-6 shadow-[0_0_15px_rgba(255,42,42,0.2)] bg-black/50 backdrop-blur-md uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-4 sm:mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-orange-500">Projects</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              A showcase of my expertise in full-stack development, machine learning, and innovative digital solutions.
            </p>
          </motion.div>
        </div>

        {/* ──── 2×2 3D Tilting Cards Grid ──── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* ──── Bottom CTA ──── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 text-center"
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
