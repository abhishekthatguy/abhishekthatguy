'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInUp, fadeInDown } from '@/styles/animations';

export default function AboutPage() {
  const { themeStyles, effectiveTheme } = useThemeStyles();

  return (
    <div className={`min-h-screen ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}>
      {/* Hero Section */}
      <section className={`py-20 transition-all duration-500 ease-in-out ${
        effectiveTheme === 'dark' 
          ? 'bg-gradient-to-b from-black via-black/95 to-black' 
          : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className={`text-5xl md:text-6xl font-bold mb-4 transition-colors duration-500 ${themeStyles.headingText}`}
              variants={fadeInDown}
              initial="hidden"
              animate="visible"
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
                About
              </motion.span>{' '}
              <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Me</span>
            </motion.h1>
            <p className={`text-xl ${themeStyles.descriptionText} max-w-2xl mx-auto transition-colors duration-500`}>
              AI systems engineer & full-stack architect — building intelligent automation, RAG, and multi-agent systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Animated circular border glow effect - Theme-aware */}
                <motion.div
                  className={`absolute inset-0 rounded-full border-4 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'border-[#FE7743]' : 'border-[#E65100]'
                  }`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: effectiveTheme === 'dark' ? [0.3, 0.5, 0.3] : [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className={`relative w-full h-full rounded-full overflow-hidden border-4 shadow-2xl z-10 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'border-[#FE7743]' : 'border-[#E65100]'
                  }`}
                  style={{
                    boxShadow: effectiveTheme === 'dark' 
                      ? '0 25px 50px -12px rgba(254, 119, 67, 0.25), 0 0 0 1px rgba(254, 119, 67, 0.1)'
                      : '0 25px 50px -12px rgba(230, 81, 0, 0.25), 0 0 0 1px rgba(230, 81, 0, 0.1)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/about_profile.png"
                    alt="Abhishek Singh - AI Systems Engineer & Full-Stack Architect"
                    fill
                    className="object-contain object-center"
                    priority
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Intro */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6"
            >
              <motion.h2 
                className={`text-3xl md:text-4xl font-bold transition-colors duration-500 ${themeStyles.headingText}`}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                <motion.span
                  className="inline-block"
                  style={{
                    backgroundImage: themeStyles.abhishekGradient,
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-block",
                    transition: 'background-image 0.5s ease-in-out'
                  }}
                  animate={gradientAnimation}
                >
                  AI Systems Engineer
                </motion.span>{' '}
                <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}> & Full-Stack Architect</span>
              </motion.h2>
              <p className={`text-lg ${themeStyles.descriptionText} leading-relaxed transition-colors duration-500`}>
                I design and build intelligent automation systems that scale. With <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>7+ years</span> in frontend architecture and performance engineering, I now specialise in <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>applied AI systems</span> — multi-agent orchestration, RAG, and async task pipelines.
              </p>
              <p className={`text-lg ${themeStyles.descriptionText} leading-relaxed transition-colors duration-500`}>
                I built <Link href="/projects/zaytri" className={`${effectiveTheme === 'dark' ? 'text-[#FE7743] hover:text-[#00D9FF]' : 'text-[#E65100] hover:text-[#0288D1]'} font-semibold underline underline-offset-2 transition-colors duration-300`}>Zaytri</Link>, a production-ready AI automation platform with dynamic LLM routing, brand-aware vector search (pgvector), and Celery-based background processing. I bridge product thinking, AI engineering, and scalable architecture — and previously led frontend teams delivering <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>90+ Lighthouse</span> scores.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content Sections */}
      <section className={`py-20 ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {/* Expertise Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className={`rounded-2xl p-8 md:p-12 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>Core Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>AI & LLM Systems</h4>
                  <ul className={`space-y-2 ${themeStyles.descriptionText} transition-colors duration-500`}>
                    <li>• Multi-agent AI system design</li>
                    <li>• LLM orchestration & prompt engineering</li>
                    <li>• RAG & vector search (pgvector)</li>
                    <li>• Multi-LLM routing (Ollama, OpenAI, Gemini)</li>
                    <li>• Cost-optimized hybrid AI (Ollama + cloud)</li>
                  </ul>
                </div>
                <div>
                  <h4 className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>Backend & Infrastructure</h4>
                  <ul className={`space-y-2 ${themeStyles.descriptionText} transition-colors duration-500`}>
                    <li>• FastAPI & async Python</li>
                    <li>• Celery + Redis task pipelines</li>
                    <li>• PostgreSQL + pgvector</li>
                    <li>• Docker, CI/CD, AWS</li>
                    <li>• Next.js, React, TypeScript</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* AI & Automation Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`rounded-2xl p-8 md:p-12 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>AI Systems & Observability</h3>
              <p className={`text-lg ${themeStyles.descriptionText} leading-relaxed mb-4 transition-colors duration-500`}>
                I ship production AI with clear metrics and reliability:
              </p>
              <ul className={`space-y-3 ${themeStyles.descriptionText} transition-colors duration-500`}>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Designing multi-agent workflows with observability and fallbacks</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>RAG pipelines with brand-aware retrieval and tuned embeddings</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Async task queues (Celery/Redis) for scalable background processing</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Premium dashboards (e.g. Next.js) for AI workflows and cost/latency visibility</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Frontend performance: Core Web Vitals, 90+ Lighthouse, SSR/SSG</span>
                </li>
              </ul>
            </motion.div>

            {/* Leadership & Team Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`rounded-2xl p-8 md:p-12 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>Leadership & Delivery</h3>
              <p className={`text-lg ${themeStyles.descriptionText} leading-relaxed mb-4 transition-colors duration-500`}>
                I lead teams and ship outcomes across AI and product:
              </p>
              <ul className={`space-y-3 ${themeStyles.descriptionText} transition-colors duration-500`}>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Leading cross-functional delivery of AI and full-stack products</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Mentoring on applied AI, prompt design, and production ML practices</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Architecting scalable systems that align with business and cost goals</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Working with product, design, and backend on roadmap and feasibility</span>
                </li>
              </ul>
            </motion.div>

            {/* DevOps & AI Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`rounded-2xl p-8 md:p-12 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>DevOps & AI Infrastructure</h3>
              <p className={`text-lg ${themeStyles.descriptionText} leading-relaxed mb-4 transition-colors duration-500`}>
                I run reliable deployment and observability for AI and web apps:
              </p>
              <ul className={`space-y-3 ${themeStyles.descriptionText} transition-colors duration-500`}>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>CI/CD with GitHub Actions, Docker, and AWS</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Deploying FastAPI, Celery workers, and vector DBs (PostgreSQL/pgvector)</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Monitoring, logging, and cost visibility for AI workloads</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 transition-colors duration-500 ${
                    effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
                  }`}>•</span>
                  <span>Next.js, Vercel, and front-end performance (Lighthouse, Core Web Vitals)</span>
                </li>
              </ul>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className={`rounded-2xl p-8 md:p-12 border transition-all duration-500 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-800'
                  : 'bg-white/80 border-gray-300'
              }`}
            >
              <h3 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
                effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'
              }`}>How I Work</h3>
              <p className={`text-lg ${themeStyles.descriptionText} leading-relaxed transition-colors duration-500`}>
                I choose tools and architecture to fit the problem: <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>FastAPI</span> and <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>Celery</span> for AI backends, <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>Next.js</span> or <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>React</span> for interfaces, and the right LLM (Ollama, OpenAI, Gemini) for cost and quality. I focus on product impact, observability, and maintainability rather than a single stack.
              </p>
            </motion.div>
          </div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link href="/">
              <motion.button
                className={`group relative border-2 ${themeStyles.buttonBorder} ${themeStyles.buttonText} px-8 py-3 rounded-full overflow-hidden transition-all duration-500`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: themeStyles.buttonHoverShadow
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: themeStyles.buttonShadow,
                  transition: 'box-shadow 0.5s ease, border-color 0.5s ease, color 0.5s ease'
                }}
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Back to Home
                </span>
                <motion.div
                  className={`absolute inset-0 ${themeStyles.buttonHoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

