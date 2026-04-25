'use client';

import { motion, type Variants } from 'framer-motion';
import Container from './Container';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const experiences = [
  {
    title: 'Software Engineer',
    company: 'EFOLI LLC',
    location: 'Mirpur DOHS, Dhaka',
    period: 'May 2025 — Present',
    current: true,
    accent: '#7C3AED',
    bullets: [
      'Remodelled a whole app following Shopify standard design patterns, achieving the BFS badge.',
      'Designed and implemented a modular discount engine supporting complex business rules — geo-location, customer segmentation, currency, and B2B logic.',
      'Migrated performance-critical logic to Rust using Shopify Functions (WASM), achieving significantly faster execution over JavaScript-based implementations.',
      'Reduced storage costs via optimised file compression and automated deletion cycles for Shopify assets.',
      'Architected a microservice for customer activity logging handling thousands of concurrent events without latency degradation.',
    ],
    tags: ['Node.js', 'TypeScript', 'Remix', 'Rust', 'WASM', 'Liquid', 'Shopify Functions', 'MySQL', 'Microservices', 'DigitalOcean'],
  },
  {
    title: 'Junior Software Engineer (Fullstack)',
    company: 'Wondersoft Solution Limited',
    location: 'Gulshan, Dhaka',
    period: 'June 2024 — April 2025',
    current: false,
    accent: '#06B4F1',
    bullets: [
      'Designed and scaled RESTful APIs for CRM features, supporting 1M+ active users.',
      'Built an event-driven email notification system, improving automation and user engagement.',
      'Integrated Redis caching layer, improving API response time by ~50% and reducing database load.',
      'Resolved critical payment gateway vulnerabilities, improving transaction reliability.',
      'Developed Progressive Web Applications (PWAs) and a fullstack publisher portal dashboard for analytics.',
      'Delivered ~2% annual revenue boost by integrating Google AdSense and fixing payment gateway issues.',
    ],
    tags: ['Node.js', 'TypeScript', 'Express.js', 'Redis', 'MySQL', 'React', 'Next.js', 'PWA', 'AWS'],
  },
];

function HighlightText({ text, accent }: { text: string; accent: string }) {
  const excluded = new Set(['REST', 'API', 'APIs']);
  const parts = text.split(/(B2B logic|B2B|\d[\d,.]*[%+KMBx]*\+?(?:\s*(?:users))?|[A-Z]{2,}s?)/g);
  return (
    <>
      {parts.map((part, i) =>
        (/^\d|^[A-Z]{2}|^B2B/.test(part) && !excluded.has(part)) ? (
          <span key={i} className="font-semibold" style={{ color: accent }}>{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const Experience = () => {
  return (
    <Container>
      <motion.div
        id="experience"
        className="px-6 py-20 max-w-6xl mx-auto w-full"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#7C3AED] mb-3">
            Where I&apos;ve worked
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Experience</h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B4F1] mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED] via-[#06B4F1] to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className={`relative flex flex-col sm:flex-row gap-8 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-1/2 top-6 w-3 h-3 rounded-full -translate-x-1/2 hidden sm:block"
                  style={{ background: exp.accent, boxShadow: `0 0 12px ${exp.accent}` }}
                />

                {/* Date label — desktop */}
                <div className={`hidden sm:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'} pt-5`}>
                  <div className="text-right">
                    <span className="text-xs font-semibold tracking-widest uppercase text-jet/50 dark:text-platinum/50">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: `${exp.accent}20`, color: exp.accent }}>
                        Current
                      </span>
                    )}
                    <p className="text-xs text-jet/40 dark:text-platinum/40 mt-1">{exp.location}</p>
                  </div>
                </div>

                {/* Card */}
                <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'}`}>
                  <div className="relative p-6 rounded-2xl bg-white/60 dark:bg-jet/40 backdrop-blur-sm border border-platinum/40 dark:border-white/8 shadow-md hover:shadow-lg transition-shadow duration-300"
                    style={{ borderLeft: `3px solid ${exp.accent}` }}
                  >
                    {/* Mobile date */}
                    <div className="flex items-center gap-2 mb-3 sm:hidden">
                      <span className="text-xs font-semibold tracking-wide text-jet/50 dark:text-platinum/50">{exp.period}</span>
                      {exp.current && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: `${exp.accent}20`, color: exp.accent }}>
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-darker dark:text-lighter">{exp.title}</h3>
                    <p className="text-sm font-semibold mb-4" style={{ color: exp.accent }}>{exp.company}</p>

                    <ul className="space-y-2.5 mb-5">
                      {exp.bullets.map((b, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.07 }}
                          className="flex gap-3 text-sm text-jet/70 dark:text-platinum/70 leading-relaxed group"
                        >
                          <span
                            className="mt-[9px] flex-shrink-0 h-[2px] w-3 rounded-full transition-all duration-300 group-hover:w-5"
                            style={{ background: `linear-gradient(90deg, ${exp.accent}, ${exp.accent}55)` }}
                          />
                          <span><HighlightText text={b} accent={exp.accent} /></span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-platinum/50 dark:border-white/10 text-jet/60 dark:text-platinum/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Experience;
