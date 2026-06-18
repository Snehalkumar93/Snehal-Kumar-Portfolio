import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import assets
import heroImage from '../assets/hero video/WhatsApp Image 2026-06-18 at 2.13.01 PM (1).jpeg';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-[#050505]">
      {/* Dynamic Animated Background without Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none" />
        
        {/* Moving glowing orbs */}
        <motion.div 
          animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#ff2a2a]/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [50, -50, 50], y: [50, -50, 50] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]"
        />
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/80 to-[#050505] z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-center md:justify-between items-center text-left w-full min-h-screen pt-28 md:pt-20">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full relative z-30">
          
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2a2a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff2a2a]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-white uppercase">Available for Work</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tighter"
          >
            Hi, I'm Snehal <span className="text-[#ff2a2a]">Kumar</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              Software Engineer
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 text-sm md:text-lg font-medium mb-10 max-w-md leading-relaxed"
          >
            Computer Science Engineering student passionate about building impactful web applications using React, Node.js and modern AI technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-row flex-wrap items-center gap-4 w-full"
          >
            {/* View My Work */}
            <a 
              href="#projects"
              className="px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm rounded-full bg-white text-black font-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] tracking-wide uppercase"
            >
              View My Work
            </a>
            
            {/* Download Resume */}
            <a 
              href="/Resume_Snehal_Kumar.pdf"
              download="Snehal_Kumar_Resume.pdf"
              className="px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm rounded-full bg-[#ff2a2a] text-white font-black hover:bg-[#e02525] transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,42,42,0.3)] hover:shadow-[0_0_30px_rgba(255,42,42,0.5)] flex items-center gap-2 tracking-wide uppercase"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex gap-4">
              <a href="https://github.com/Snehalkumar93" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/snehal-kumar93" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Animated Floating Avatar */}
        <div className="flex w-full lg:w-1/2 justify-center lg:justify-end items-center relative z-20 mb-12 md:mb-0 perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: 'spring', bounce: 0.4 }}
            className="relative"
          >
            {/* Spinning background rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border-[1px] border-dashed border-[#ff2a2a]/30 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-16 border-[1px] border-[#ff2a2a]/10 rounded-full"
            />
            
            {/* Floating animation for the avatar itself */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 h-56 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-gradient-to-br from-[#ff2a2a] to-black shadow-[0_0_50px_rgba(255,42,42,0.3)] overflow-hidden"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black relative">
                <img 
                  src={heroImage} 
                  alt="Snehal Kumar Avatar"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] saturate-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            {/* Decorative Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl"
            >
              <span className="text-2xl">💻</span>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-10 -left-10 bg-[#ff2a2a]/20 backdrop-blur-md border border-[#ff2a2a]/40 p-4 rounded-2xl shadow-xl"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
      >
        <div className="animate-bounce flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Scroll</span>
          <svg className="w-5 h-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
