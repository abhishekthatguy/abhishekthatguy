"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInUp, fadeInDown } from '@/styles/animations';

export default function About() {
  const { themeStyles, effectiveTheme } = useThemeStyles();

  return (
    <section 
      id="about" 
      className={`py-20 ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold text-center mb-16 ${themeStyles.headingText} transition-colors duration-500`}
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
            About
          </motion.span>{" "}
          <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}>Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h3
              className={`text-2xl md:text-3xl font-bold mb-6 ${themeStyles.headingText} transition-colors duration-500`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
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
              </motion.span>{" "}
              <span className={effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'}> & Full-Stack Architect</span>
            </motion.h3>

            <motion.div
              className={`space-y-4 text-base md:text-lg ${themeStyles.descriptionText} leading-relaxed transition-colors duration-500`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <p>
                I design and build intelligent automation systems that scale. With{" "}
                <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>7+ years</span>{" "}
                in frontend architecture and performance engineering, I now specialize in{" "}
                <span className={`${effectiveTheme === 'dark' ? 'text-[#00D9FF]' : 'text-[#0288D1]'} font-semibold transition-colors duration-500`}>applied AI systems</span>
                — including multi-agent orchestration, Retrieval-Augmented Generation (RAG), and async task pipelines.
              </p>
              <p>
                I built{" "}
                <Link href="/projects/zaytri" className={`${effectiveTheme === 'dark' ? 'text-[#FE7743] hover:text-[#00D9FF]' : 'text-[#E65100] hover:text-[#0288D1]'} font-semibold underline underline-offset-2 transition-colors duration-300`}>
                  Zaytri
                </Link>
                , a production-ready AI automation platform that coordinates specialized agents through dynamic LLM routing, brand-aware vector search (pgvector), and Celery-based background processing.
              </p>
              <p className="font-medium">
                My expertise spans:
              </p>
              <ul className={`space-y-1.5 pl-4 list-disc ${themeStyles.descriptionText}`}>
                <li>Multi-agent AI system design</li>
                <li>LLM orchestration & prompt engineering</li>
                <li>FastAPI + async backend architecture</li>
                <li>Redis & Celery task pipelines</li>
                <li>PostgreSQL + vector search</li>
                <li>Cost-optimized hybrid AI infrastructure (Ollama + OpenAI)</li>
              </ul>
              <p>
                Previously, I led frontend teams and delivered high-performance UI systems achieving{" "}
                <span className={`${effectiveTheme === 'dark' ? 'text-[#FE7743]' : 'text-[#E65100]'} font-semibold transition-colors duration-500`}>90+ Lighthouse</span>{" "}
                scores. Today, I bridge product thinking, AI engineering, and scalable architecture.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link href="/about">
                <motion.button
                  className={`group relative border-2 ${themeStyles.buttonBorder} ${themeStyles.buttonText} px-8 py-3 rounded-full overflow-hidden transition-all duration-500`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: themeStyles.buttonHoverShadow,
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: themeStyles.buttonShadow,
                    transition: 'box-shadow 0.5s ease, border-color 0.5s ease, color 0.5s ease'
                  }}
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    Full bio & expertise
                  </span>
                  <motion.div
                    className={`absolute inset-0 ${themeStyles.buttonHoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={false}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated circular border glow effect - Theme-aware */}
              <motion.div
                className={`absolute inset-0 rounded-full border-4 ${effectiveTheme === 'dark' ? 'border-[#FE7743]' : 'border-[#E65100]'} transition-colors duration-500`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className={`relative w-full h-full rounded-full overflow-hidden border-4 ${effectiveTheme === 'dark' ? 'border-[#FE7743]' : 'border-[#E65100]'} shadow-2xl z-10 transition-colors duration-500`}
                style={{
                  boxShadow: effectiveTheme === 'dark' 
                    ? '0 25px 50px -12px rgba(254, 119, 67, 0.25), 0 0 0 1px rgba(254, 119, 67, 0.1)'
                    : '0 25px 50px -12px rgba(230, 81, 0, 0.25), 0 0 0 1px rgba(230, 81, 0, 0.1)'
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src="/about_profile.png"
                  alt="Abhishek Singh - AI Systems Engineer & Full-Stack Architect"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
