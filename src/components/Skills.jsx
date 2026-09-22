import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const skillsList = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', invert: true },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', invert: true },
  { name: 'scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Salesforce', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg' },
  { name: 'Gemini API', fallback: 'AI' },
  { name: 'NLP', fallback: 'NLP' },
  { name: 'Render', fallback: 'R' }
];

const Skills = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Initialize particles with random positions and velocities
    const particles = skillsList.map((skill, index) => {
      return {
        x: Math.random() * (width - 100), // rough initial offset
        y: Math.random() * (height - 100),
        vx: (Math.random() - 0.5) * 1.0, // X velocity (slightly slower for professional look)
        vy: (Math.random() - 0.5) * 1.0, // Y velocity
        width: 0,
        height: 0,
        element: itemsRef.current[index]
      };
    });

    // Wait a brief moment to get accurate dimensions after render
    setTimeout(() => {
      particles.forEach(p => {
        if (p.element) {
          p.width = p.element.offsetWidth;
          p.height = p.element.offsetHeight;
        }
      });
    }, 100);

    let mouse = { x: -1000, y: -1000 };
    
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const update = () => {
      particles.forEach(p => {
        // Base movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls smoothly
        if (p.x <= 0) { p.x = 0; p.vx *= -1; }
        if (p.x + p.width >= width) { p.x = width - p.width; p.vx *= -1; }
        if (p.y <= 0) { p.y = 0; p.vy *= -1; }
        if (p.y + p.height >= height) { p.y = height - p.height; p.vy *= -1; }

        // Mouse repulsion logic
        const centerX = p.x + p.width / 2;
        const centerY = p.y + p.height / 2;
        
        const dx = centerX - mouse.x;
        const dy = centerY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const repelRadius = 150; // Distance at which skills start running away
        
        if (dist < repelRadius) {
          const force = (repelRadius - dist) / repelRadius;
          // Apply strong repulsion force away from mouse
          p.x += (dx / dist) * force * 12;
          p.y += (dy / dist) * force * 12;
          
          // Slightly increase natural velocity to make it "scatter"
          p.vx += (dx / dist) * force * 0.4;
          p.vy += (dy / dist) * force * 0.4;
          
          // Cap maximum velocity so they don't fly too fast forever
          const maxSpeed = 3.5;
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > maxSpeed) {
            p.vx = (p.vx / speed) * maxSpeed;
            p.vy = (p.vy / speed) * maxSpeed;
          }
        } else {
          // Friction: slowly return to normal floating speed if they were flying fast
          const normalSpeed = 0.8;
          const currentSpeed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (currentSpeed > normalSpeed) {
            p.vx *= 0.98;
            p.vy *= 0.98;
          }
        }

        // Apply position via CSS transform for high performance
        if (p.element) {
          p.element.style.transform = `translate(${p.x}px, ${p.y}px)`;
        }
      });

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="skills" className="py-24 bg-[#050505] relative overflow-hidden font-sans border-t border-white/[0.05]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 relative z-20 pointer-events-none">
          <span className="inline-block border border-[#ff2a2a]/30 rounded-full px-5 py-1.5 text-sm text-[#ff2a2a] font-bold mb-4 bg-black/50 backdrop-blur-md uppercase tracking-widest shadow-[0_0_15px_rgba(255,42,42,0.2)]">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-orange-500">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Hover your mouse over the icons to see them react! Catch them if you can.
          </p>
        </div>
        
        {/* Interactive Floating Container */}
        <div 
          ref={containerRef}
          className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
        >
          {/* Decorative glowing center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-[#ff2a2a] opacity-5 blur-[100px] rounded-full pointer-events-none" />
          
          {skillsList.map((skill, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="absolute top-0 left-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-lg transition-colors duration-300 hover:bg-white/10 hover:border-[#ff2a2a]/40 hover:shadow-[0_0_25px_rgba(255,42,42,0.4)] group select-none"
              style={{ willChange: 'transform' }}
              title={skill.name} // Native tooltip to show name on hover
            >
              {skill.icon ? (
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className={`w-7 h-7 md:w-8 md:h-8 object-contain pointer-events-none ${skill.invert ? 'filter invert opacity-80' : 'opacity-90'}`}
                />
              ) : (
                <span className="text-white/80 font-black text-sm md:text-base pointer-events-none">
                  {skill.fallback}
                </span>
              )}

              {/* Custom tooltip that appears strictly above */}
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[11px] text-white font-bold whitespace-nowrap bg-black/80 px-2.5 py-1 rounded-md border border-white/10 pointer-events-none">
                {skill.name}
              </div>
            </div>
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

export default Skills;
