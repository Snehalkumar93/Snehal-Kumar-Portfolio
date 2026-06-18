import React from 'react';
import stackImage from '../assets/about/image.jpeg';

const skillsData = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'C', 'Java', 'C++'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Flask'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'Firebase', 'Supabase', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Render'],
  },
  {
    category: 'ML / AI',
    skills: ['scikit-learn', 'OpenCV', 'Gemini API'],
  },
];

const About = () => {
  let globalDelay = 0;

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img
                  src={stackImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Info Content + Skills */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="flex-1 text-white mt-8 md:mt-0 relative z-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Hello!
          </h2>
          <p className="text-lg font-bold mb-10 leading-relaxed max-w-3xl text-red-50">
            Hi, my name is{' '}
            <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">
              Snehal Kumar
            </span>
            , a motivated and detail-oriented Computer Science Engineering student at{' '}
            <span className="text-black font-extrabold">
              Allenhouse Institute of Technology
            </span>{' '}
            based in Lucknow, India. I have hands-on experience in developing
            innovative software solutions. Skilled in web development, AI integration,
            and database management, with a strong foundation in programming and
            problem-solving.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillsData.map((group) => (
              <div key={group.category}>
                <h3
                  data-aos="fade-up"
                  data-aos-delay={(globalDelay += 50, globalDelay)}
                  className="text-sm uppercase tracking-[0.25em] font-black text-black mb-3"
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    globalDelay += 40;
                    return (
                      <span
                        key={skill}
                        data-aos="zoom-in"
                        data-aos-delay={globalDelay}
                        className="bg-black text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 cursor-default select-none"
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
      <div
        className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse"
        style={{ animationDelay: '1s' }}
      >
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};

export default About;
