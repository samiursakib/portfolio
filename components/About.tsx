'use client';

import TypeString from '@/components/TypeString';
import { motion, type Variants } from 'framer-motion';

type Token = { text: string; color: string };
const codeLines: (Token[] | null)[] = [
  [{ text: '// Shopify order webhook handler', color: '#546E7A' }],
  [
    { text: 'pub ', color: '#C792EA' }, { text: 'async ', color: '#C792EA' },
    { text: 'fn ', color: '#C792EA' }, { text: 'handle_order', color: '#82AAFF' },
    { text: '(', color: '#89DDFF' },
  ],
  [
    { text: '  payload', color: '#EEFFFF' }, { text: ': ', color: '#89DDFF' },
    { text: 'Json', color: '#82AAFF' }, { text: '<', color: '#89DDFF' },
    { text: 'OrderEvent', color: '#FFCB6B' }, { text: '>,', color: '#89DDFF' },
  ],
  [
    { text: '  db', color: '#EEFFFF' }, { text: ': &', color: '#89DDFF' },
    { text: 'PgPool', color: '#82AAFF' }, { text: ',', color: '#89DDFF' },
  ],
  [
    { text: ') -> ', color: '#89DDFF' }, { text: 'Result', color: '#82AAFF' },
    { text: '<', color: '#89DDFF' }, { text: 'StatusCode', color: '#82AAFF' },
    { text: '> {', color: '#89DDFF' },
  ],
  null,
  [
    { text: '  let ', color: '#C792EA' }, { text: 'discount', color: '#EEFFFF' },
    { text: ' = engine', color: '#89DDFF' },
  ],
  [
    { text: '    ::', color: '#89DDFF' }, { text: 'compute', color: '#82AAFF' },
    { text: '(&event.cart)', color: '#EEFFFF' },
  ],
  [
    { text: '    .', color: '#89DDFF' }, { text: 'await', color: '#C792EA' },
    { text: '?;', color: '#89DDFF' },
  ],
  null,
  [
    { text: '  repo::', color: '#89DDFF' }, { text: 'save', color: '#82AAFF' },
    { text: '(&db, &event, discount)', color: '#EEFFFF' },
  ],
  [
    { text: '    .', color: '#89DDFF' }, { text: 'await', color: '#C792EA' },
    { text: '?;', color: '#89DDFF' },
  ],
  null,
  [
    { text: '  ', color: '' }, { text: 'Ok', color: '#C792EA' },
    { text: '(', color: '#89DDFF' }, { text: 'StatusCode', color: '#82AAFF' },
    { text: '::CREATED)', color: '#89DDFF' },
  ],
  [{ text: '}', color: '#89DDFF' }],
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Radial gradient blobs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute animate-pulse-glow" style={{ top: '-10%', left: '-5%', width: '55%', height: '70%', background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />
        <div className="absolute animate-pulse-glow-delayed" style={{ top: '20%', right: '-10%', width: '50%', height: '60%', background: 'radial-gradient(ellipse at center, rgba(6,180,241,0.20) 0%, rgba(6,180,241,0.07) 45%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)' }} />
        <div className="absolute animate-float-delayed" style={{ bottom: '-5%', left: '25%', width: '40%', height: '45%', background: 'radial-gradient(ellipse at center, rgba(13,148,136,0.18) 0%, rgba(13,148,136,0.06) 50%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }} />
        <div className="absolute animate-pulse-glow" style={{ top: '60%', left: '5%', width: '30%', height: '35%', background: 'radial-gradient(ellipse at center, rgba(232,68,182,0.12) 0%, rgba(232,68,182,0.04) 50%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', animationDelay: '2s' }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute rounded-full animate-float" style={{ top: '15%', right: '12%', width: '12px', height: '12px', background: 'rgba(6,180,241,0.5)', boxShadow: '0 0 20px rgba(6,180,241,0.6)' }} />
        <div className="absolute rounded-full animate-float-delayed" style={{ top: '70%', right: '20%', width: '8px', height: '8px', background: 'rgba(124,58,237,0.6)', boxShadow: '0 0 16px rgba(124,58,237,0.7)' }} />
        <div className="absolute rounded-full animate-float" style={{ top: '40%', left: '8%', width: '6px', height: '6px', background: 'rgba(13,148,136,0.7)', boxShadow: '0 0 14px rgba(13,148,136,0.8)', animationDelay: '0.5s' }} />
        <div className="absolute rounded-full animate-float-delayed" style={{ bottom: '25%', left: '20%', width: '10px', height: '10px', background: 'rgba(232,68,182,0.5)', boxShadow: '0 0 18px rgba(232,68,182,0.6)' }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.12] dark:opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-jet dark:text-lighter" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32 sm:py-40"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div>
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#06B4F1] tracking-widest uppercase">
                <span className="w-8 h-[1px] bg-[#06B4F1] inline-block" />
                Software Engineer
                <span className="w-8 h-[1px] bg-[#06B4F1] inline-block" />
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-darker dark:text-lighter">
                <span className="block mb-2">Hey, I&apos;m</span>
                <span className="gradient-text block min-h-[1.2em]">
                  <TypeString strings={['Rafi Sakib']} />
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base font-light text-jet/70 dark:text-platinum/70 max-w-2xl leading-relaxed mb-6">
              I build production systems with{' '}
              <span className="text-[#06B4F1] font-medium">Node.js</span> &{' '}
              <span className="text-[#0D9488] font-medium">Python</span>, push performance limits with{' '}
              <span className="text-[#F97316] font-medium">Rust</span>, and ship full-stack products with{' '}
              <span className="text-[#818CF8] font-medium">Next.js</span> &{' '}
              <span className="text-[#E844B6] font-medium">Remix</span>.
            </motion.p>

            {/* Bio */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base font-light text-jet/60 dark:text-platinum/60 max-w-2xl leading-7 mb-12">
              Engineering Shopify infrastructure at <span className="text-darker dark:text-lighter font-medium">Efoli LLC</span> — Rust (WASM) migrations, event-driven microservices, and B2B discount engines. Previously scaled to <span className="text-darker dark:text-lighter font-medium">1M+ users</span> at Wondersoft. BSc CSE, <span className="text-darker dark:text-lighter font-medium">CUET</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap sm:flex-nowrap gap-3">
              <a
                href="#experience"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7C3AED]/30"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #06B4F1)' }}
              >
                <span className="relative z-10">View Experience</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)' }} />
              </a>

              <a
                href="/Rafi_Sakib_Resume.pdf"
                download="Rafi Sakib_Software Engineer.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-platinum/50 dark:border-white/15 text-jet dark:text-lighter hover:border-[#06B4F1]/60 hover:text-[#06B4F1] hover:bg-[#06B4F1]/5 transition-all duration-300 hover:scale-105"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-platinum/50 dark:border-white/15 text-jet dark:text-lighter hover:border-[#7C3AED]/60 hover:text-[#7C3AED] hover:bg-[#7C3AED]/5 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right column — code window */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Window */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                style={{ boxShadow: '0 25px 60px rgba(124,58,237,0.25), 0 0 0 1px rgba(255,255,255,0.08)' }}>
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8"
                  style={{ background: '#161825' }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                  <span className="ml-3 text-xs font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    order_handler.rs
                  </span>
                </div>
                {/* Code body */}
                <div className="p-5 font-mono text-[13px] leading-[1.8]" style={{ background: '#0D0F1A' }}>
                  <div className="flex gap-4">
                    {/* Line numbers */}
                    <div className="select-none text-right" style={{ color: 'rgba(255,255,255,0.18)', minWidth: '1.5rem' }}>
                      {codeLines.map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                    {/* Code */}
                    <div className="flex-1 overflow-x-auto">
                      {codeLines.map((line, i) => (
                        <div key={i} className="whitespace-pre">
                          {line === null ? ' ' : line.map((tok, j) => (
                            <span key={j} style={{ color: tok.color || '#EEFFFF' }}>{tok.text}</span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient glow behind window */}
              <div className="absolute inset-0 -z-10 blur-3xl rounded-2xl opacity-30"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.6), rgba(6,180,241,0.4))' }} />
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-light text-jet/40 dark:text-platinum/40 tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#06B4F1]/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
