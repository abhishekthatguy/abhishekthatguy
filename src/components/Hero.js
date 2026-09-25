'use client';
import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { fadeInDown, fadeInUp } from '@/styles/animations';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const SUGGESTIONS = [
  'What do you work on?',
  'Tech stack?',
  'Experience?',
  "Let's connect",
];

const QA_RULES = [
  {
    match: /work|project|build|do\b/i,
    answer:
      'I design and ship AI tools, automation workflows and high-performance applications — multi-agent systems, RAG pipelines and enterprise n8n automations.',
  },
  {
    match: /tech|stack|skill|tool|language/i,
    answer:
      'Core stack: Next.js, React, FastAPI, Postgres + pgvector, Redis, n8n, LangGraph and AWS Bedrock. Python and TypeScript daily.',
  },
  {
    match: /experience|year|background|career/i,
    answer:
      '8+ years building software, 4+ years deep in LLM/AI systems — 30+ projects delivered across insurance, healthcare and SaaS.',
  },
  {
    match: /connect|contact|hire|call|email|together|collaborate/i,
    answer:
      'Easiest ways to reach me: abhishekthatguy@gmail.com or +91 96214 82434 — or drop a note via the contact form below. I respond ASAP.',
  },
];

const DEFAULT_ANSWER =
  'Good question — the quickest answer is over email: abhishekthatguy@gmail.com. Or scroll down and leave a note in the contact form.';

const STATS = [
  { value: '8+', label: 'Years Experience' },
  { value: '4+', label: 'Years in LLM/AI' },
  { value: '30+', label: 'Projects Delivered' },
  { value: '∞', label: 'Still Building' },
];

const GHOST_LOGOS = [
  { text: 'React', top: '8%', left: '30%', size: 'text-4xl', rotate: -8 },
  { text: 'Next.js', top: '14%', left: '48%', size: 'text-5xl', rotate: 4 },
  { text: 'Python', top: '6%', left: '62%', size: 'text-3xl', rotate: -6 },
  { text: 'LangChain', top: '24%', left: '36%', size: 'text-4xl', rotate: -4 },
  { text: 'Docker', top: '32%', left: '52%', size: 'text-3xl', rotate: 6 },
  { text: 'TS', top: '38%', left: '42%', size: 'text-4xl', rotate: -3 },
  { text: 'Postgres', top: '52%', left: '46%', size: 'text-3xl', rotate: 5 },
];

const TECH_CARDS = [
  {
    name: 'OpenAI',
    sub: 'LLM',
    className: 'left-[4%] top-[30%]',
    delay: 0,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-300" fill="currentColor">
        <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.99 5.99 0 0 0-3.26 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9 5.97 5.97 0 0 0 4.5 1.99c2.04 0 3.87-.98 5.01-2.49a5.99 5.99 0 0 0 3.28-2.89 6.05 6.05 0 0 0-.75-7.11zM13.99 21.5c-.4 0-.79-.06-1.16-.19l.06-.03 6.24-3.59a.6.6 0 0 0 .3-.51v-7.7l2.63 1.51a.06.06 0 0 1 .03.05 5.02 5.02 0 0 1-8.1 4.46zm1.22-16.7a5.03 5.03 0 0 1-1.92 9.2l-.05-.02-6.23-3.6a.6.6 0 0 1-.3-.51V2.2a.06.06 0 0 0-.03-.05l2.6 1.5a.6.6 0 0 0 .6 0l5.7-3.28a.6.6 0 0 1 .29.09c.46.14 1.18.2 1.34.34zM7.03 12.5l-6.23-3.59a5.02 5.02 0 0 1 7.74-4.37l.04.02v7.2a.6.6 0 0 1-.6.6l-5.7 3.28a.6.6 0 0 1-.29-.08 4.98 4.98 0 0 1-1.57-1.07.6.6 0 0 0-.17-.37z" transform="scale(0.9) translate(1.3 1.3)" />
      </svg>
    ),
  },
  {
    name: 'LangGraph',
    sub: 'Agents',
    className: 'left-[58%] top-[8%]',
    delay: 0.8,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="6" cy="6" r="2.4" />
        <circle cx="18" cy="7" r="2.4" />
        <circle cx="12" cy="18" r="2.4" />
        <path d="M8.2 6.5l7.4.4M7.3 8.2l3.6 7.6M16.9 9.2l-3.7 6.6" />
      </svg>
    ),
  },
  {
    name: 'n8n',
    sub: 'Automation',
    className: 'left-[68%] top-[30%]',
    delay: 1.6,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="5" cy="12" r="2.4" />
        <circle cx="12" cy="6" r="2.4" />
        <circle cx="12" cy="18" r="2.4" />
        <circle cx="19" cy="12" r="2.4" />
        <path d="M7.1 10.9l3-3.4M7.1 13.1l3 3.4M14.3 7.2l2.7 3M14.3 16.8l2.7-3" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    sub: 'pgvector',
    className: 'left-[74%] top-[52%]',
    delay: 2.4,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="6" rx="7" ry="2.8" />
        <path d="M5 6v12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6" />
        <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
      </svg>
    ),
  },
  {
    name: 'aws',
    sub: 'Bedrock',
    className: 'left-[66%] top-[72%]',
    delay: 3.2,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <text x="12" y="11" textAnchor="middle" className="fill-white" fontSize="8" fontWeight="bold">aws</text>
        <path d="M5 15c2.5 1.8 6.5 2.5 9.5 1.8M17.5 15.8l1.6-.5-.5 1.7" stroke="#fb923c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const TECH_CHIPS = [
  { name: 'Python', dot: 'bg-yellow-400', className: 'left-[8%] top-[10%]', delay: 0.4 },
  { name: 'FastAPI', dot: 'bg-teal-300', className: 'left-[32%] top-[4%]', delay: 1.1 },
  { name: 'Next.js', dot: 'bg-white', className: 'left-[42%] top-[20%]', delay: 2.0 },
  { name: 'React', dot: 'bg-cyan-300', className: 'left-[78%] top-[10%]', delay: 0.7 },
  { name: 'TypeScript', dot: 'bg-blue-400', className: 'left-[90%] top-[38%]', delay: 2.8 },
  { name: 'Docker', dot: 'bg-blue-300', className: 'left-[6%] top-[48%]', delay: 1.5 },
  { name: 'Redis', dot: 'bg-red-400', className: 'left-[14%] top-[70%]', delay: 3.4 },
  { name: 'Celery', dot: 'bg-green-400', className: 'left-[44%] top-[84%]', delay: 2.2 },
  { name: 'LangChain', dot: 'bg-emerald-300', className: 'left-[86%] top-[64%]', delay: 1.9 },
  { name: 'Tailwind', dot: 'bg-cyan-400', className: 'left-[62%] top-[20%]', delay: 3.9 },
  { name: 'Node.js', dot: 'bg-lime-400', className: 'left-[26%] top-[34%]', delay: 4.5 },
  { name: 'pgvector', dot: 'bg-violet-400', className: 'left-[58%] top-[88%]', delay: 0.9 },
  { name: 'JFrog', dot: 'bg-green-500', className: 'left-[20%] top-[22%]', delay: 2.6 },
  { name: 'RAG', dot: 'bg-teal-400', className: 'left-[82%] top-[26%]', delay: 3.1 },
  { name: 'Agents', dot: 'bg-orange-400', className: 'left-[36%] top-[48%]', delay: 4.1 },
  { name: 'Devin', dot: 'bg-fuchsia-400', className: 'left-[10%] top-[60%]', delay: 5.0 },
  { name: 'CursorAI', dot: 'bg-sky-400', className: 'left-[30%] top-[76%]', delay: 4.7 },
  { name: 'CrewAI', dot: 'bg-rose-400', className: 'left-[80%] top-[78%]', delay: 5.5 },
];

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/abhishekthatguy',
    icon: (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/abhishekthatguy',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    label: 'Twitter/X',
    href: 'https://twitter.com/abhishekthatguy',
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    label: 'Email',
    href: 'mailto:abhishekthatguy@gmail.com',
    icon: (
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    ),
  },
];

export default function Hero() {
  const { themeStyles, effectiveTheme } = useThemeStyles();
  const isDark = effectiveTheme === 'dark';
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const ask = (question) => {
    const q = (question || input).trim();
    if (!q) return;
    const rule = QA_RULES.find((r) => r.match.test(q));
    setMessages((prev) => [...prev.slice(-3), { q, a: rule ? rule.answer : DEFAULT_ANSWER }]);
    setInput('');
  };

  const muted = isDark ? 'text-slate-400' : 'text-slate-600';
  const card = isDark
    ? 'bg-white/[0.04] border-white/10 backdrop-blur-xl'
    : 'bg-white/70 border-slate-200 backdrop-blur-xl';

  // Mouse-tracked parallax for the portrait + floating layers
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 55, damping: 18 });
  const smy = useSpring(my, { stiffness: 55, damping: 18 });
  const floatX = useTransform(smx, (v) => v * -16);
  const floatY = useTransform(smy, (v) => v * -12);
  const photoX = useTransform(smx, (v) => v * 9);
  const photoY = useTransform(smy, (v) => v * 7);

  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen flex flex-col overflow-hidden transition-colors duration-500 ${
        themeStyles.sectionBg
      } ${isDark ? 'text-white' : 'text-slate-900'}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse 55% 70% at 75% 55%, rgba(234,138,74,0.14) 0%, rgba(45,212,191,0.07) 45%, transparent 75%)'
              : 'radial-gradient(ellipse 55% 70% at 75% 55%, rgba(234,138,74,0.10) 0%, rgba(45,212,191,0.05) 45%, transparent 75%)',
          }}
        />

        {/* Ghost tech logos */}
        {GHOST_LOGOS.map((g) => (
          <span
            key={g.text}
            className={`absolute font-extrabold tracking-tight select-none blur-[2px] ${g.size} ${
              isDark ? 'text-white/[0.05]' : 'text-slate-900/[0.05]'
            }`}
            style={{ top: g.top, left: g.left, transform: `rotate(${g.rotate}deg)` }}
          >
            {g.text}
          </span>
        ))}

        {/* Portrait */}
        <motion.div
          className={`absolute right-0 bottom-0 h-full w-[56vw] max-w-[880px] transition-opacity duration-500 ${
            isDark ? 'opacity-40 md:opacity-90' : 'opacity-30 md:opacity-80'
          }`}
          style={{ x: photoX, y: photoY }}
        >
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background: isDark
                ? 'linear-gradient(to right, #000 0%, rgba(0,0,0,0.75) 28%, transparent 65%), linear-gradient(to top, #000 2%, rgba(0,0,0,0.6) 18%, transparent 45%)'
                : 'linear-gradient(to right, #f9fafb 0%, rgba(249,250,251,0.75) 28%, transparent 65%), linear-gradient(to top, #f9fafb 2%, rgba(249,250,251,0.6) 18%, transparent 45%)',
            }}
          />
          <Image
            src="/Editpng-2.png"
            alt="Abhishek Singh"
            fill
            priority
            quality={85}
            sizes="(max-width: 1200px) 55vw, 880px"
            className="object-cover"
            style={{
              objectPosition: 'right top',
              WebkitMaskImage:
                'radial-gradient(ellipse 100% 92% at 68% 58%, black 52%, rgba(0,0,0,0.55) 78%, transparent 96%)',
              maskImage:
                'radial-gradient(ellipse 100% 92% at 68% 58%, black 52%, rgba(0,0,0,0.55) 78%, transparent 96%)',
            }}
          />
        </motion.div>

        {/* Orbit arcs */}
        <svg
          className="absolute right-0 top-0 h-full w-[58vw] max-w-[920px] hidden lg:block opacity-70"
          viewBox="0 0 920 900"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="orbit" x1="0" y1="0" x2="920" y2="900">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#fb923c" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M120 700 C 200 300, 500 120, 880 60" stroke="url(#orbit)" strokeWidth="1.2" strokeDasharray="2 6" />
          <path d="M60 500 C 300 200, 600 200, 900 400" stroke="url(#orbit)" strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="455" cy="305" r="3" fill="#2dd4bf" />
          <circle cx="700" cy="165" r="3" fill="#fb923c" />
          <circle cx="590" cy="490" r="2.5" fill="#2dd4bf" />
        </svg>

        {/* Floating tech cards + chips */}
        <motion.div
          className="absolute right-20 top-0 h-full w-[52vw] max-w-[840px] hidden lg:block"
          style={{ x: floatX, y: floatY }}
          aria-hidden="true"
        >
          {TECH_CHIPS.map((t) => (
            <motion.span
              key={t.name}
              className={`absolute ${t.className} inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-semibold shadow-lg ${
                isDark
                  ? 'bg-black/60 border-white/15 text-slate-200 backdrop-blur-md'
                  : 'bg-white/80 border-slate-300 text-slate-700 backdrop-blur-md'
              }`}
              animate={{ y: [0, -8, 0], rotate: [0, 1.5, -1.5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: t.delay }}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
              {t.name}
            </motion.span>
          ))}

          {TECH_CARDS.map((t) => (
            <motion.div
              key={t.name}
              className={`absolute ${t.className}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: t.delay }}
            >
              <div
                className={`flex flex-col items-center gap-1.5 rounded-2xl border px-5 py-4 shadow-2xl ${
                  isDark
                    ? 'bg-black/70 border-cyan-400/30 backdrop-blur-xl shadow-cyan-500/10'
                    : 'bg-white/80 border-teal-500/30 backdrop-blur-xl'
                }`}
              >
                {t.icon}
                <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.name}</span>
                <span className={`text-[9px] uppercase tracking-wider ${muted}`}>{t.sub}</span>
              </div>
            </motion.div>
          ))}

          {/* Handwritten note */}
          <span
            className={`absolute right-[6%] top-[14%] text-3xl leading-tight -rotate-6 ${
              isDark ? 'text-white/85' : 'text-slate-700'
            }`}
            style={{ fontFamily: "'Bradley Hand','Segoe Script','Comic Sans MS',cursive" }}
          >
            Good Code
            <br />
            Better
            <br />
            Tomorrow
          </span>
        </motion.div>
      </div>

      {/* Top bar */}
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-4 pb-4 border-b backdrop-blur-xl transition-colors duration-500 ${
          isDark ? 'bg-black/70 border-white/10' : 'bg-white/70 border-slate-200'
        }`}
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
      >
        <Link href="/" className="group leading-tight">
          <span className="text-2xl font-extrabold tracking-tight">
            Abhishek{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">
              Singh
            </span>
            <span className="ml-1 inline-block h-2.5 w-2.5 rounded-full bg-orange-400 align-middle" />
          </span>
          <span className={`block text-[11px] tracking-[0.22em] mt-1.5 ${muted}`}>
            AI&nbsp;&nbsp;•&nbsp;&nbsp;AUTOMATE&nbsp;&nbsp;•&nbsp;&nbsp;BUILD&nbsp;&nbsp;•&nbsp;&nbsp;REPEAT
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 md:pr-20 lg:pr-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                item.label === 'Home'
                  ? isDark
                    ? 'text-white'
                    : 'text-slate-900'
                  : isDark
                  ? 'text-slate-300 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
              {item.label === 'Home' && (
                <span className="block mx-auto mt-1 h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
              )}
            </a>
          ))}
          <Link
            href="/portfolio"
            className="flex flex-col items-center rounded-full border border-teal-400/60 px-6 py-2 transition-all hover:bg-teal-400/10 hover:border-teal-400"
          >
            <span className="text-sm font-semibold">
              View Projects <span className="align-middle">→</span>
            </span>
            <span className={`text-[10px] font-normal leading-none ${muted}`}>
              portfolio.abhishekthatguy.in
            </span>
          </Link>
        </nav>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center px-6 sm:px-10 lg:px-16 xl:pl-24 xl:pr-24">
        <div className="w-full max-w-3xl pt-4 pb-10">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <p className={`text-sm tracking-[0.4em] mb-5 flex items-center gap-3 ${muted}`}>
              <span className="h-px w-8 bg-orange-400 inline-block" />
              HEY,&nbsp;I’M
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
              Abhishek
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-orange-400 bg-clip-text text-transparent">
                Singh
              </span>
            </h1>
            <h2 className={`mt-5 text-xl sm:text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>
              AI Automation Engineer / Applied AI Engineer
            </h2>
            <p className={`mt-4 max-w-xl text-base sm:text-lg leading-relaxed ${muted}`}>
              I build AI tools, automation workflows and high-performance applications that turn
              complex problems into simple solutions.
            </p>
            <div className={`mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium tracking-wide ${muted}`}>
              <span className={`${isDark ? 'text-white' : 'text-slate-900'} border-b-2 border-teal-400 pb-0.5`}>
                Build
              </span>
              <span>•</span>
              <span>Automate</span>
              <span>•</span>
              <span>Scale</span>
              <span>•</span>
              <span>Learn</span>
              <span>•</span>
              <span>Repeat</span>
            </div>
          </motion.div>

          {/* Ask me anything */}
          <motion.div
            className={`mt-8 rounded-2xl border p-5 sm:p-6 shadow-2xl max-w-2xl ${card}`}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-400/15 text-teal-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                  <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
                </svg>
              </span>
              <div>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Ask me anything
                </p>
                <p className={`text-xs ${muted}`}>About my work, experience, skills, or just say hello!</p>
              </div>
            </div>

            {messages.length > 0 && (
              <div className="mt-4 space-y-3 max-h-40 overflow-y-auto pr-1">
                {messages.map((m, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-sm font-medium text-teal-300">You: {m.q}</p>
                    <p className={`text-sm leading-relaxed ${muted}`}>{m.a}</p>
                  </div>
                ))}
              </div>
            )}

            <form
              className={`mt-4 flex items-center gap-3 rounded-full border pl-5 pr-1.5 py-1.5 ${
                isDark ? 'border-white/15 bg-black/30' : 'border-slate-300 bg-white/80'
              }`}
              onSubmit={(e) => {
                e.preventDefault();
                ask();
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question here..."
                aria-label="Ask me anything"
                className={`flex-1 bg-transparent text-sm outline-none ${
                  isDark ? 'placeholder-slate-500 text-white' : 'placeholder-slate-400 text-slate-900'
                }`}
              />
              <button
                type="submit"
                aria-label="Send question"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white transition-all hover:bg-orange-400 hover:scale-105 shadow-lg shadow-orange-500/30"
              >
                <svg className="h-4 w-4 -rotate-45" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>

            <div className="mt-4 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all hover:border-teal-400 hover:text-teal-300 ${
                    isDark ? 'border-white/15 text-slate-300' : 'border-slate-300 text-slate-600'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className={`mt-10 grid grid-cols-2 sm:grid-cols-4 divide-x max-w-2xl ${
              isDark ? 'divide-white/10' : 'divide-slate-300'
            }`}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.18 }}
          >
            {STATS.map((s, i) => (
              <div key={s.label} className={i === 0 ? 'pr-4' : 'px-4'}>
                <p className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {s.value}
                </p>
                <p className={`mt-1 text-xs ${muted}`}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className={`relative z-20 border-t px-6 sm:px-10 lg:px-16 xl:pr-24 py-4 text-xs ${
          isDark ? 'border-white/10' : 'border-slate-200'
        }`}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.25 }}
      >
        <div className="flex items-center justify-between gap-6">
          <div className={`flex items-center gap-2 ${muted}`}>
            <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Based in Pune, India</span>
            <span className={`hidden sm:inline pl-3 ml-1 border-l ${isDark ? 'border-white/15' : 'border-slate-300'}`}>
              Open to exciting opportunities
            </span>
          </div>

          <div className={`hidden md:flex flex-col items-center gap-1.5 ${muted}`}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="8" y="2" width="8" height="14" rx="4" />
              <line x1="12" y1="6" x2="12" y2="9" className="animate-pulse" />
            </svg>
            <span className="tracking-[0.3em]">SCROLL DOWN</span>
          </div>

          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`transition-colors ${muted} hover:text-teal-300`}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  {s.icon}
                </svg>
              </a>
            ))}
            <span
              className={`hidden lg:flex items-center gap-2 border-l pl-5 tracking-[0.25em] ${
                isDark ? 'border-white/15' : 'border-slate-300'
              } ${muted}`}
            >
              <span className="h-px w-6 bg-orange-400 inline-block" />
              TURNING IDEAS INTO IMPACT
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
