'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getProjectById } from '@/data/projects';

// Text gradient animation for smooth color flow
const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  },
};

export default function ProjectDetailPage({ params }) {
  // In Next.js 14, params is synchronous for client components
  const { id } = params || {};
  const project = id ? getProjectById(id) : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Project Not Found</h1>
          <Link href="/#projects">
            <motion.button
              className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-secondary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Back to Projects
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black via-black/95 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <Link 
              href="/#projects" 
              className="text-muted hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <span>←</span> Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${project.color} mb-4 sm:mb-6 shadow-2xl`}>
              <span className="text-4xl sm:text-5xl">{project.icon}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4 px-1">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1">
              {project.description}
            </p>
            <p className="text-base sm:text-lg text-primary mt-3 sm:mt-4 font-semibold">{project.year}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-10 sm:space-y-14 lg:space-y-16">
            {/* STAR Method Sections */}
            {project.star && project.star.length > 0 && (
              <>
                {project.star.map((starItem, starIdx) => (
                  <motion.div
                    key={starIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: starIdx * 0.1 }}
                    className={`bg-gray-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border ${project.borderColor}`}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">
                      {starIdx === 0 ? 'Project Overview' : `Implementation ${starIdx + 1}`}
                    </h2>
                    
                    <div className="space-y-4 sm:space-y-6">
                      {/* Situation */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 flex items-center gap-2">
                          <span className="text-primary">📋</span>
                          <span>Situation</span>
                        </h3>
                        <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed">
                          {starItem.situation}
                        </p>
                      </div>

                      {/* Task */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 flex items-center gap-2">
                          <span className="text-primary">🎯</span>
                          <span>Task</span>
                        </h3>
                        <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed">
                          {starItem.task}
                        </p>
                      </div>

                      {/* Action */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 flex items-center gap-2">
                          <span className="text-primary">⚡</span>
                          <span>Action</span>
                        </h3>
                        <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed">
                          {starItem.action}
                        </p>
                      </div>

                      {/* Result */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 flex items-center gap-2">
                          <span className="text-primary">🏆</span>
                          <span>Result</span>
                        </h3>
                        <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed">
                          {starItem.result}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </>
            )}

            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`bg-gray-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border ${project.borderColor}`}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.tech.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border ${project.borderColor} text-primary bg-transparent hover:bg-primary hover:text-secondary transition-all duration-200 text-xs sm:text-sm font-semibold`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            {(project.links.live || project.links.github) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              >
                {project.links.live && (
                  <Link href={project.links.live} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <motion.button
                      className="w-full sm:w-auto group relative border-2 border-primary text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full overflow-hidden transition-all duration-300 text-sm sm:text-base"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
                      }}
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary font-semibold">
                        View Live Site
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.button>
                  </Link>
                )}
                {project.links.github && (
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <motion.button
                      className="w-full sm:w-auto group relative border-2 border-primary text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full overflow-hidden transition-all duration-300 text-sm sm:text-base"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
                      }}
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary font-semibold">
                        View Code
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.button>
                  </Link>
                )}
              </motion.div>
            )}

            {/* Back to Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-center"
            >
              <Link href="/#projects" className="inline-block w-full sm:w-auto max-w-xs mx-auto">
                <motion.button
                  className="w-full group relative border-2 border-primary text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full overflow-hidden transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(254, 119, 67, 0.6), 0 0 60px rgba(254, 119, 67, 0.3), inset 0 0 20px rgba(254, 119, 67, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary font-semibold">
                    Back to Projects
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

