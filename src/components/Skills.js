'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { fadeInDown, fadeInUp } from '@/styles/animations';
import { skillsCategories } from '@/data/skills';

// Top-to-bottom "window" wipe reveal — plays once on first scroll
const cardVariant = {
  hidden: { opacity: 0, y: 32, clipPath: 'inset(0% 0% 100% 0%)' },
  show: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const TimelineCard = ({ category, index, isDark }) => {
  const side = index % 2 === 0 ? 'left' : 'right';
  const muted = isDark ? 'text-slate-400' : 'text-slate-600';

  return (
    <div
      className={`relative grid grid-cols-1 lg:grid-cols-2 lg:gap-24 items-start ${
        index !== 0 ? 'lg:-mt-6' : ''
      } mt-14 lg:mt-20 first:mt-0`}
    >
      {/* Timeline node */}
      <div className="absolute left-5 lg:left-1/2 top-8 -translate-x-1/2 z-10">
        <motion.div
          className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl shadow-xl ${
            isDark
              ? 'bg-black border-teal-300/40 shadow-teal-500/10'
              : 'bg-white border-teal-500/40 shadow-teal-500/20'
          }`}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.6 }}
        >
          <span aria-hidden="true">{category.emoji}</span>
          <span
            className={`absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
              isDark ? 'bg-teal-300 text-slate-950' : 'bg-teal-500 text-white'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>
      </div>

      {/* Card — alternates sides on desktop */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: index * 0.9 }}
        className={`ml-14 lg:ml-0 ${side === 'left' ? 'lg:col-start-1 lg:pr-4' : 'lg:col-start-2 lg:pl-4'}`}
      >
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className={`group relative overflow-hidden rounded-3xl border p-6 sm:p-8 transition-colors duration-500 ${
            isDark
              ? 'bg-white/[0.04] border-white/10 backdrop-blur-xl hover:border-teal-300/40'
              : 'bg-white/70 border-slate-200 backdrop-blur-xl hover:border-teal-500/40'
          }`}
        >
          {/* top accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(45,212,191,0.08), transparent 70%)',
            }}
          />

          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-orange-400 bg-clip-text text-transparent">
                {category.category}
              </span>
            </h3>
            <p className={`mt-3 text-sm leading-relaxed ${muted}`}>{category.description}</p>

            <div className="mt-6 space-y-5">
              {category.subcategories.map((sub) => (
                <div key={sub.title}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-4 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-teal-400" />
                    <h4 className={`text-[11px] font-bold uppercase tracking-[0.15em] ${muted}`}>
                      {sub.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sub.items.map((skill) => (
                      <Link key={skill.id} href={`/skills/${skill.id}`}>
                        <motion.span
                          whileHover={{ y: -2 }}
                          className={`inline-block rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                            skill.highlight
                              ? isDark
                                ? 'border-teal-300/60 bg-teal-300/15 text-teal-200 shadow-[0_0_12px_rgba(45,212,191,0.25)]'
                                : 'border-teal-500/60 bg-teal-500/15 text-teal-700 shadow-[0_0_12px_rgba(45,212,191,0.25)]'
                              : isDark
                              ? 'border-white/15 text-slate-300 hover:border-teal-300/60 hover:text-teal-200'
                              : 'border-slate-300 text-slate-600 hover:border-teal-500/60 hover:text-teal-600'
                          }`}
                        >
                          {skill.name}
                        </motion.span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Skills() {
  const { themeStyles, effectiveTheme } = useThemeStyles();
  const isDark = effectiveTheme === 'dark';
  const muted = isDark ? 'text-slate-400' : 'text-slate-600';

  return (
    <section
      id="skills"
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        themeStyles.sectionBg
      } ${isDark ? 'text-white' : 'text-slate-900'}`}
    >
      {/* backdrop glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 40% 45% at 85% 20%, rgba(45,212,191,0.06), transparent 70%), radial-gradient(ellipse 40% 45% at 10% 80%, rgba(234,138,74,0.05), transparent 70%)'
            : 'radial-gradient(ellipse 40% 45% at 85% 20%, rgba(45,212,191,0.05), transparent 70%), radial-gradient(ellipse 40% 45% at 10% 80%, rgba(234,138,74,0.04), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 lg:pr-28 xl:pr-32">
        {/* Header */}
        <motion.div
          className="text-center"
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className={`text-xs tracking-[0.45em] mb-4 ${muted}`}>M Y&nbsp;&nbsp;C A P A B I L I T I E S</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            From Architecture{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-orange-400 bg-clip-text text-transparent">
              to Execution
            </span>
          </h2>
        </motion.div>

        <motion.p
          className={`mt-5 text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto ${muted}`}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15 }}
        >
          A blend of deep technical skill and strategic business acumen, honed over{' '}
          <span className="text-teal-300 font-semibold">7+ years</span> of building complex,
          high-performance applications — from system design to final deployment.
        </motion.p>

        {/* Floating timeline */}
        <div className="relative mt-16">
          {/* center line — grows top-to-bottom on scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className={`absolute left-5 lg:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 ${
              isDark
                ? 'bg-gradient-to-b from-teal-300/60 via-white/10 to-transparent'
                : 'bg-gradient-to-b from-teal-500/60 via-slate-300 to-transparent'
            }`}
            aria-hidden="true"
          />


          {skillsCategories.map((category, index) => (
            <TimelineCard key={category.id} category={category} index={index} isDark={isDark} />
          ))}
        </div>

        {/* end cap */}
        <div className="relative flex justify-start lg:justify-center pl-5 lg:pl-0 mt-14">
          <span
            className={`h-2.5 w-2.5 -translate-x-1/2 lg:translate-x-0 rounded-full ${
              isDark ? 'bg-teal-300 shadow-[0_0_12px_rgba(45,212,191,0.8)]' : 'bg-teal-500'
            }`}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
