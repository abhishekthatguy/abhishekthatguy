'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInDown, fadeInUp } from '@/styles/animations';

const item = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  show: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

const itemRight = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  show: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

export default function Projects() {
  const { themeStyles, effectiveTheme } = useThemeStyles();

  return (
    <section id="projects" className={`py-12 sm:py-16 lg:py-20 ${themeStyles.sectionBg} relative overflow-hidden transition-all duration-500 ease-in-out`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 sm:mb-6 ${themeStyles.headingText} transition-colors duration-500`}
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="inline-block"
            style={{
              backgroundImage: themeStyles.subtitleGradient,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              transition: 'background-image 0.5s ease-in-out'
            }}
            animate={gradientAnimation}
          >
            Selected
          </motion.span>{' '}
          <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Projects</span>
        </motion.h2>

        <motion.p
          className={`text-base sm:text-lg ${themeStyles.descriptionText} text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-1 transition-colors duration-500`}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          Throughout my <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>7+ years</span> of experience, I've led development teams and architected scalable solutions across <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>insurance, healthcare, and enterprise domains</span>. These selected projects showcase my expertise in <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>performance optimization</span>, <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>modern frontend architecture</span>, and delivering high-impact results through innovative technical solutions.
        </motion.p>

        {/* Snake Ladder Timeline */}
        <div className="relative">
          {/* Vertical line connecting all projects - Theme-aware */}
          <motion.div
            className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 via-green-500 to-orange-500 hidden lg:block transition-opacity duration-500 ${
              effectiveTheme === 'dark' ? 'opacity-30' : 'opacity-40'
            }`}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ originY: 0 }}
          />

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {projects.slice(0, 4).map((project, index) => {
              const isEven = index % 2 === 0;
              const variants = isEven ? item : itemRight;
              
              return (
                <motion.div
                  key={project.id}
                  variants={variants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Year Badge - Center */}
                  <motion.div
                    className={`relative z-20 flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shadow-2xl border-2 sm:border-4 transition-colors duration-500 ${
                      effectiveTheme === 'dark' ? 'border-[#FE7743]' : 'border-[#E65100]'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl lg:text-5xl mb-0.5 sm:mb-1">{project.icon}</div>
                      <div className="text-[10px] sm:text-xs lg:text-sm font-bold text-white">{project.year}</div>
                    </div>
                    
                    {/* Glowing ring animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-full border-4 ${project.borderColor}`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: effectiveTheme === 'dark' ? [0.5, 0.8, 0.5] : [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Project Card */}
                  <motion.div
                    className={`flex-1 w-full min-w-0 lg:max-w-lg backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border transition-all duration-500 ${
                      effectiveTheme === 'dark'
                        ? `bg-gray-900/60 ${project.borderColor} hover:border-opacity-100`
                        : `bg-white/80 border-gray-300 hover:border-opacity-80`
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-xl sm:text-2xl shadow-lg`}>
                        {project.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 transition-colors duration-500 truncate ${
                          effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                        }`}>
                          {project.title}
                        </h3>
                        <p className={`text-sm mb-4 transition-colors duration-500 ${
                          effectiveTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>{project.year}</p>
                      </div>
                    </div>

                    <p className={`mb-2 sm:mb-3 text-sm md:text-base leading-relaxed transition-colors duration-500 ${
                      effectiveTheme === 'dark' ? 'text-white/90' : 'text-gray-700'
                    }`}>
                      {project.shortDescription}
                    </p>
                    {project.outcomes && project.outcomes.length > 0 && (
                      <ul className={`mb-3 sm:mb-4 text-xs sm:text-sm space-y-0.5 transition-colors duration-500 ${
                        effectiveTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {project.outcomes.slice(0, 3).map((outcome, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} aria-hidden>•</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.tech.slice(0, 6).map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border transition-all duration-500 text-[10px] sm:text-xs font-semibold ${
                            effectiveTheme === 'dark'
                              ? `${project.borderColor} text-[#FE7743] bg-transparent hover:bg-[#FE7743] hover:text-white`
                              : `${project.borderColor} text-[#E65100] bg-transparent hover:bg-[#E65100] hover:text-white`
                          }`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 6 && (
                        <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border text-[10px] sm:text-xs font-semibold transition-colors duration-500 ${
                          effectiveTheme === 'dark'
                            ? `${project.borderColor} text-[#FE7743]/70`
                            : `${project.borderColor} text-[#E65100]/70`
                        }`}>
                          +{project.tech.length - 6} more
                        </span>
                      )}
                    </div>

                    <Link href={`/projects/${project.id}`} className="block">
                      <motion.button
                        className={`w-full group relative border-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full overflow-hidden transition-all duration-500 text-sm sm:text-base ${
                          effectiveTheme === 'dark'
                            ? 'border-[#FE7743] text-[#FE7743]'
                            : 'border-[#E65100] text-[#E65100]'
                        }`}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: effectiveTheme === 'dark'
                            ? '0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)'
                            : '0 0 30px rgba(230, 81, 0, 0.6), 0 0 60px rgba(230, 81, 0, 0.3), inset 0 0 20px rgba(230, 81, 0, 0.2)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          boxShadow: effectiveTheme === 'dark'
                            ? '0 4px 15px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(254, 119, 67, 0.2)'
                            : '0 4px 15px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(230, 81, 0, 0.3)'
                        }}
                      >
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-white font-semibold">
                          Learn More →
                        </span>
                        <motion.div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                            effectiveTheme === 'dark' ? 'bg-[#FE7743]' : 'bg-[#E65100]'
                          }`}
                          initial={false}
                        />
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* View all projects */}
          <motion.div
            className="mt-12 sm:mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="https://portfolio.abhishekthatguy.in"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex flex-col items-center rounded-full border-2 px-8 py-3 transition-all duration-500 hover:scale-105 ${
                effectiveTheme === 'dark'
                  ? 'border-teal-300/60 text-white hover:bg-teal-400/10 hover:border-teal-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]'
                  : 'border-teal-600/60 text-slate-900 hover:bg-teal-500/10 hover:border-teal-600'
              }`}
            >
              <span className="text-base sm:text-lg font-bold">
                View All Projects <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
              <span className={`text-[10px] sm:text-xs ${themeStyles.descriptionText}`}>
                portfolio.abhishekthatguy.in
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 