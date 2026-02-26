'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { gradientAnimation, fadeInDown, fadeInUp } from '@/styles/animations';

const achievements = [
  { text: 'Built live AI platform Zaytri', href: '/projects/zaytri' },
  { text: 'Achieved 100/100 performance portfolio', href: '/projects/nextjs-portfolio' },
  { text: 'Led teams & implemented enterprise systems', href: '/#experience' },
];

export default function Achievements() {
  const { themeStyles, effectiveTheme } = useThemeStyles();

  return (
    <section
      id="achievements"
      className={`py-12 sm:py-16 ${themeStyles.sectionBg} transition-all duration-500 ease-in-out`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className={`text-2xl sm:text-3xl font-extrabold text-center mb-8 ${themeStyles.headingText} transition-colors duration-500`}
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="inline-block"
            style={{
              backgroundImage: themeStyles.subtitleGradient,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
              transition: 'background-image 0.5s ease-in-out',
            }}
            animate={gradientAnimation}
          >
            Achievements
          </motion.span>
        </motion.h2>

        <motion.ul
          className="space-y-3 sm:space-y-4"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {achievements.map((item, index) => (
            <motion.li
              key={index}
              variants={fadeInUp}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 border transition-all duration-300 ${
                effectiveTheme === 'dark'
                  ? 'bg-gray-900/40 border-gray-700/50 hover:border-[#FE7743]/40'
                  : 'bg-white/80 border-gray-200/60 hover:border-[#E65100]/40'
              }`}
            >
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  effectiveTheme === 'dark'
                    ? 'bg-[#FE7743]/20 text-[#FE7743]'
                    : 'bg-[#E65100]/15 text-[#E65100]'
                }`}
              >
                {index + 1}
              </span>
              <Link
                href={item.href}
                className={`flex-1 text-base sm:text-lg font-medium ${themeStyles.descriptionText} hover:underline transition-colors duration-300 ${
                  effectiveTheme === 'dark' ? 'hover:text-[#FE7743]' : 'hover:text-[#E65100]'
                }`}
              >
                {item.text}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
