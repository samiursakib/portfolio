'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const skillGroups = [
  {
    label: 'Backend & Systems',
    accent: '#7C3AED',
    items: [
      { name: 'NodeJS', icon: 'nodejs' },
      { name: 'ExpressJS', icon: 'expressjs' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'REST APIs', icon: 'restapis' },
      { name: 'Microservices', icon: 'microservices' },
      { name: 'Event-driven Arch', icon: 'eventdriven' },
      { name: 'Serverless', icon: 'serverless' },
    ],
  },
  {
    label: 'Frontend',
    accent: '#06B4F1',
    items: [
      { name: 'ReactJS', icon: 'reactjs' },
      { name: 'NextJS', icon: 'nextjs' },
      { name: 'Typescript', icon: 'typescript' },
      { name: 'Javascript', icon: 'javascript' },
      { name: 'Redux', icon: 'redux' },
      { name: 'TailwindCSS', icon: 'tailwindcss' },
      { name: 'FramerMotion', icon: 'framermotion' },
      { name: 'SCSS', icon: 'scss' },
      { name: 'Remix', icon: 'remix' },
      { name: 'React Query', icon: 'reactquery' },
      { name: 'Zustand', icon: 'zustand' },
      { name: 'SSR / SSG / CSR', icon: 'ssrssg' },
    ],
  },
  {
    label: 'Databases & Data',
    accent: '#0D9488',
    items: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'Redis', icon: 'redis' },
    ],
  },
  {
    label: 'Languages',
    accent: '#E844B6',
    items: [
      { name: 'Typescript', icon: 'typescript' },
      { name: 'Javascript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'Rust', icon: 'rust' },
      { name: 'Go', icon: 'go' },
    ],
  },
  {
    label: 'Infrastructure & Tools',
    accent: '#06B4F1',
    items: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Git', icon: 'git' },
      { name: 'CI/CD', icon: 'cicd' },
      { name: 'Postman', icon: 'postman' },
      { name: 'JMeter', icon: 'jmeter' },
    ],
  },
];

const problemSolving = [
  { label: 'Codeforces', count: '300+ problems', href: 'https://codeforces.com/profile/1704062_Samiur', color: '#1F8ACB' },
  { label: 'LeetCode', count: '400+ problems', href: 'https://leetcode.com/u/samiurRafi', color: '#FFA116' },
  { label: 'CodeChef', count: '2★ rating', href: 'https://www.codechef.com/users/rafi_sakib', color: '#22C55E' },
];

const Skills = () => {
  return (
    <Container>
      <motion.div
        id="skills"
        className="px-6 py-20 max-w-6xl mx-auto w-full"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Section header */}
        <motion.div variants={headingVariants} className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#06B4F1] mb-3">
            What I work with
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Skills</h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B4F1] mx-auto" />
        </motion.div>

        {/* Skill groups */}
        <motion.div variants={headingVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="p-5 rounded-2xl bg-white/60 dark:bg-jet/40 backdrop-blur-sm border border-platinum/40 dark:border-white/8"
              style={{ borderLeft: `3px solid ${group.accent}` }}
            >
              <h3 className="text-sm font-bold text-darker dark:text-lighter mb-3">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/80 dark:bg-shadow/60 border border-platinum/40 dark:border-white/10 text-jet/80 dark:text-platinum/80 font-medium"
                  >
                    <Image
                      src={`/icons/${item.icon}.svg`}
                      alt={item.name}
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain flex-shrink-0"
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Problem solving */}
        <motion.div variants={headingVariants} className="mb-4 flex items-center gap-3">
          <div className="w-1 h-5 rounded-full bg-gradient-to-b from-[#7C3AED] to-[#E844B6]" />
          <h3 className="text-lg font-bold text-darker dark:text-lighter">Algorithmic Problem Solving</h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {problemSolving.map((ps) => (
            <motion.div key={ps.label} variants={cardVariants}>
              <Link
                href={ps.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl
                  bg-white/60 dark:bg-jet/40 backdrop-blur-sm
                  border border-platinum/40 dark:border-white/8
                  hover:shadow-lg transition-all duration-300"
                style={{ ['--accent' as string]: ps.color }}
              >
                <div>
                  <p className="font-bold text-darker dark:text-lighter text-sm group-hover:text-[--accent] transition-colors duration-300">{ps.label}</p>
                  <p className="text-xs text-jet/50 dark:text-platinum/50 mt-0.5">{ps.count}</p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="w-4 h-4 text-jet/30 dark:text-platinum/30 group-hover:text-[--accent] group-hover:translate-x-1 transition-all duration-300">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Skills;
