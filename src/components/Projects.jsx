import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import the generated images
import imgEliiteOne from '../assets/projects/eliiteone_gems.png';
import imgTitanic from '../assets/projects/titanic_predictor.png';
import imgSoulCare from '../assets/projects/soulcare_health.png';
import imgMathAI from '../assets/projects/math_ai_research.png';
import imgAiFriend from '../assets/projects/ai_friend.jpg';
import imgHeartDisease from '../assets/projects/heart_disease.jpg';
import imgMlInsurance from '../assets/projects/ml_insurance.jpg';

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
  {
    number: '05',
    title: 'AI Friend – Chatbot',
    tech: ['Python', 'Gemini API', 'Streamlit'],
    description:
      'Built an intelligent AI chatbot companion with memory and contextual awareness, powered by Google Gemini API for natural conversational interactions.',
    accentColor: '#8b5cf6',
    glowFrom: '#8b5cf6',
    glowTo: '#6366f1',
    image: imgAiFriend,
    liveLink: null,
    githubLink: 'https://github.com/Snehalkumar93/Ai-friend',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Heart Disease Predictor',
    tech: ['Python', 'scikit-learn', 'KNN', 'Flask'],
    description:
      'Developed a machine learning web app using K-Nearest Neighbors (KNN) algorithm to predict heart disease risk based on patient health metrics and clinical data.',
    accentColor: '#ef4444',
    glowFrom: '#ef4444',
    glowTo: '#f97316',
    image: imgHeartDisease,
    liveLink: null,
    githubLink: 'https://github.com/Snehalkumar93/HeartDisease',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'ML Insurance Cost Predictor',
    tech: ['Python', 'Jupyter', 'Random Forest', 'Pandas'],
    description:
      'Built an insurance premium prediction model using Random Forest Regression with EDA, feature engineering, and correlation analysis on health and demographic data.',
    accentColor: '#10b981',
    glowFrom: '#10b981',
    glowTo: '#14b8a6',
    image: imgMlInsurance,
    liveLink: null,
    githubLink: 'https://github.com/Snehalkumar93/Ml-insurance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

/* ───────────────────────── SLIDE VARIANTS ───────────────────────── */

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 15 : -15,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? -15 : 15,
    zIndex: 0,
  }),
};

/* ───────────────────────── PROGRESS BAR ───────────────────────── */

const ProgressBar = ({ isActive, accentColor, duration, isPaused }) => {
  return (
    <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
      {isActive && (
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}cc)` }}
          initial={{ width: '0%' }}
          animate={{ width: isPaused ? undefined : '100%' }}
          transition={{
            duration: duration / 1000,
            ease: 'linear',
          }}
          key={`progress-${isActive}-${isPaused}`}
        />
      )}
    </div>
  );
};

/* ───────────────────────── SLIDE CARD ───────────────────────── */

const SlideCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-5xl mx-auto px-2 sm:px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Colored Glow Behind Card */}
        <motion.div
          className="absolute -inset-4 sm:-inset-6 rounded-3xl blur-3xl -z-10"
          style={{
            background: `radial-gradient(ellipse at center, ${project.glowFrom}35, ${project.glowTo}15, transparent 70%)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0.3,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Main Card */}
        <motion.div
          className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] group"
          animate={{
            borderColor: isHovered ? `${project.accentColor}30` : 'rgba(255,255,255,0.08)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Top accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[3px] z-20"
            style={{
              background: `linear-gradient(90deg, ${project.glowFrom}, ${project.glowTo})`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          />

          {/* Layout: Image + Content side by side on desktop */}
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="relative w-full md:w-[55%] aspect-[16/10] md:aspect-auto md:min-h-[400px] overflow-hidden">
              <motion.img
                src={project.image}
                alt={`Screenshot of ${project.title} project`}
                loading="lazy"
                className="w-full h-full object-cover object-top"
                animate={{ scale: isHovered ? 1.08 : 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0c0c0e] hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent md:hidden" />

              {/* Project Number Badge */}
              <div className="absolute top-4 left-4 z-10">
                <motion.span
                  className="text-xs font-black tracking-[0.3em] uppercase px-3 py-1.5 rounded-xl backdrop-blur-md"
                  style={{
                    color: project.accentColor,
                    backgroundColor: `${project.accentColor}18`,
                    border: `1px solid ${project.accentColor}30`,
                    boxShadow: `0 0 20px ${project.accentColor}15`,
                  }}
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.number}
                </motion.span>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-[45%] p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center relative">
              {/* Floating particles decorative */}
              <div className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-20 blur-2xl pointer-events-none"
                style={{ backgroundColor: project.accentColor }}
              />

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <motion.div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border shrink-0"
                  style={{
                    color: project.accentColor,
                    borderColor: `${project.accentColor}30`,
                    backgroundColor: `${project.accentColor}10`,
                  }}
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {project.tech.map((t, ti) => (
                  <motion.span
                    key={ti}
                    className="text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border"
                    style={{
                      color: project.accentColor,
                      borderColor: `${project.accentColor}25`,
                      backgroundColor: `${project.accentColor}0a`,
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + ti * 0.1, duration: 0.4 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: `${project.accentColor}20`,
                      borderColor: `${project.accentColor}50`,
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {project.liveLink && (
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white text-xs sm:text-sm font-bold transition-shadow duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${project.glowFrom}, ${project.glowTo})`,
                      boxShadow: `0 8px 30px ${project.glowFrom}35`,
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/[0.06] text-white text-xs sm:text-sm font-bold border border-white/10 hover:bg-white/[0.12] hover:border-white/25 transition-all duration-300 backdrop-blur-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ───────────────────────── MAIN COMPONENT ───────────────────────── */

const AUTOPLAY_INTERVAL = 3000; // 3 seconds

const Projects = () => {
  const [[activeIndex, direction], setSlide] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const totalSlides = projects.length;

  const goToSlide = useCallback((index, dir) => {
    setSlide([index, dir]);
  }, []);

  const nextSlide = useCallback(() => {
    setSlide(([prev]) => [(prev + 1) % totalSlides, 1]);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setSlide(([prev]) => [(prev - 1 + totalSlides) % totalSlides, -1]);
  }, [totalSlides]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [isPaused, nextSlide, activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentProject = projects[activeIndex];

  // Drag/swipe threshold (px)
  const SWIPE_THRESHOLD = 50;

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (offset.x < -SWIPE_THRESHOLD || swipe < -500) {
      nextSlide();
    } else if (offset.x > SWIPE_THRESHOLD || swipe > 500) {
      prevSlide();
    }
  };

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

        {/* ──── Slideshow Carousel ──── */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slide Container */}
          <div className="relative min-h-[420px] sm:min-h-[450px] md:min-h-[420px] flex items-center cursor-grab active:cursor-grabbing" style={{ perspective: '1200px' }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 35 },
                  opacity: { duration: 0.35 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.5 },
                }}
                className="w-full"
                style={{ position: 'absolute', width: '100%' }}
              >
                <SlideCard project={currentProject} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/[0.15] hover:border-white/25 transition-all duration-300 group"
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous project"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/[0.15] hover:border-white/25 transition-all duration-300 group"
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next project"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Dot Indicators + Progress */}
          <div className="flex items-center justify-center gap-3 mt-8 sm:mt-10">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index, index > activeIndex ? 1 : -1)}
                className="group relative flex flex-col items-center gap-2"
                aria-label={`Go to project ${index + 1}: ${project.title}`}
              >
                {/* Dot */}
                <motion.div
                  className="relative rounded-full transition-all duration-300"
                  animate={{
                    width: activeIndex === index ? 40 : 12,
                    height: 12,
                    backgroundColor: activeIndex === index ? project.accentColor : 'rgba(255,255,255,0.15)',
                    boxShadow: activeIndex === index ? `0 0 15px ${project.accentColor}50` : 'none',
                  }}
                  whileHover={{
                    backgroundColor: activeIndex === index ? project.accentColor : 'rgba(255,255,255,0.3)',
                    scale: 1.15,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Tooltip on hover */}
                <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] text-gray-400 font-bold whitespace-nowrap bg-black/80 px-2 py-1 rounded-md backdrop-blur-sm border border-white/10">
                  {project.title}
                </span>
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="flex items-center justify-center mt-4">
            <span className="text-xs text-gray-500 font-mono tracking-wider">
              <span className="text-white font-bold" style={{ color: currentProject.accentColor }}>
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="mx-1.5">/</span>
              <span>{String(totalSlides).padStart(2, '0')}</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
