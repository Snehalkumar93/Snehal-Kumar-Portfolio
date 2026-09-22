import React from 'react';

const Footer = () => {
  return (
    <footer aria-label="Site footer" className="bg-[#050505] text-gray-400 py-16 px-6 md:px-12 w-full border-t border-white/[0.05] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-[#ff2a2a] opacity-5 blur-[120px] rounded-[100%] pointer-events-none" />

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 relative z-10">
        
        {/* Brand & Bio (Col span 5) */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <a href="#" className="text-white text-3xl font-black tracking-tight inline-block">
            Snehal<span className="text-[#ff2a2a]">.</span>
          </a>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            A passionate Full Stack Developer and AI Enthusiast dedicated to building scalable web applications and intelligent systems.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/Snehalkumar93" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/snehal-kumar93" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links (Col span 3) */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-3">Navigation</h3>
          <a href="#about" className="hover:text-white transition-colors w-fit font-medium">About Me</a>
          <a href="#experience" className="hover:text-white transition-colors w-fit font-medium">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors w-fit font-medium">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors w-fit font-medium">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors w-fit font-medium">Contact</a>
        </div>

        {/* Contact Info (Col span 4) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-3">Contact Info</h3>
          <div className="flex flex-col gap-4">
            <a href="mailto:Snehal.kumar633@gmail.com" className="hover:text-white transition-colors flex items-center gap-3 group font-medium">
              <svg className="w-5 h-5 text-gray-500 group-hover:text-[#ff2a2a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Snehal.kumar633@gmail.com
            </a>
            <a href="tel:+917518575573" className="hover:text-white transition-colors flex items-center gap-3 group font-medium">
              <svg className="w-5 h-5 text-gray-500 group-hover:text-[#ff2a2a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +91 7518575573
            </a>
            <div className="flex items-center gap-3 font-medium">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Kanpur, India</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-sm font-medium">
          &copy; {new Date().getFullYear()} Snehal Kumar. All rights reserved.
        </p>
        <p className="text-sm font-medium flex items-center gap-2">
          Designed & Built with 
          <svg className="w-4 h-4 text-[#ff2a2a] animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
