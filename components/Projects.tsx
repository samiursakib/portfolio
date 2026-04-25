'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { MdLiveTv } from 'react-icons/md';
import Container from './Container';

function ProjectImage({ src, alt, accent }: { src: string; alt: string; accent: { from: string; to: string } }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center gap-3"
        style={{ background: `linear-gradient(135deg, ${accent.from}18, ${accent.to}12)` }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
          className="w-10 h-10 text-jet/20 dark:text-platinum/20">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span className="text-xs font-medium text-jet/30 dark:text-platinum/30 px-4 text-center">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={340}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setErrored(true)}
    />
  );
}

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const projects = [
  {
    id: 1,
    title: 'Video Conference',
    description: 'Fullstack real-time video communication system built with WebRTC (PeerJS) and Socket.io, featuring a backend signaling server and scalable group messaging.',
    // src: '/projects/chat-app',
    src: '',
    sourceLink: 'https://github.com/samiursakib/video-conference',
    liveDemoLink: 'https://video-conference-client.vercel.app',
    tags: ['WebRTC', 'Socket.io', 'React', 'Node.js', 'P2P'],
    hasLive: true,
  },
  {
    id: 2,
    title: 'Fillup Translation',
    description: 'High-performance CLI tool in Rust for managing localization workflows. Optimised for speed and memory safety using Rust\'s ownership model.',
    // src: '/projects/interactive-image-gallery',
    src: '',
    sourceLink: 'https://github.com/samiursakib/fillup-translation',
    liveDemoLink: '',
    tags: ['Rust', 'CLI', 'Localization', 'Performance'],
    hasLive: false,
  },
  {
    id: 3,
    title: 'Chat App',
    description: 'Real-time chat application with live messaging, Redux state management, and backend API integration.',
    src: '/projects/chat-app',
    sourceLink: 'https://github.com/samiursakib/Chat-App',
    liveDemoLink: 'https://chat-app-amber-two.vercel.app/',
    tags: ['React', 'Redux', 'Node.js', 'WebSocket'],
    hasLive: true,
  },
  {
    id: 4,
    title: 'Interactive Image Gallery',
    description: 'Interactive image gallery with smooth CSS transitions and animations.',
    src: '/projects/interactive-image-gallery',
    sourceLink: 'https://github.com/samiursakib/interactive-image-gallery',
    liveDemoLink: 'https://interactive-image-gallery.vercel.app/',
    tags: ['React', 'CSS', 'Animations'],
    hasLive: true,
  },
  {
    id: 5,
    title: 'DnD Sortable List',
    description: 'Drag and drop sortable list with smooth UX using DnD Kit.',
    src: '/projects/dnd-sortable-list',
    sourceLink: 'https://github.com/samiursakib/dnd-sortable-list',
    liveDemoLink: 'https://dnd-sortable-list.vercel.app/',
    tags: ['React', 'DnD Kit', 'TypeScript'],
    hasLive: true,
  },
  {
    id: 6,
    title: 'BD Districts Density',
    description: 'Data visualisation of Bangladesh population density by district using D3.js and GeoJSON.',
    src: '/projects/bd-districts-density',
    sourceLink: 'https://github.com/samiursakib/bd-districts-density',
    liveDemoLink: 'https://bd-districts-density.vercel.app/',
    tags: ['React', 'D3.js', 'GeoJSON', 'Data Viz'],
    hasLive: true,
  },
];

const accentColors = [
  { from: '#7C3AED', to: '#06B4F1' },
  { from: '#E844B6', to: '#7C3AED' },
  { from: '#06B4F1', to: '#0D9488' },
  { from: '#0D9488', to: '#06B4F1' },
  { from: '#7C3AED', to: '#0D9488' },
  { from: '#06B4F1', to: '#7C3AED' },
];

const Projects = () => {
  return (
    <Container>
      <motion.div
        id="projects"
        className="px-6 py-20 max-w-6xl mx-auto w-full"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Section header */}
        <motion.div variants={headingVariants} className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#7C3AED] mb-3">
            What I&apos;ve built
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text">Projects</h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B4F1] mx-auto" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((p, index) => {
            const accent = accentColors[index % accentColors.length];
            return (
              <motion.div
                key={p.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                className="group relative rounded-2xl overflow-hidden
                  bg-white/60 dark:bg-jet/40 backdrop-blur-sm
                  border border-platinum/40 dark:border-white/8
                  shadow-md hover:shadow-xl hover:shadow-[#06B4F1]/10
                  transition-all duration-300"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                  style={{ background: `linear-gradient(135deg, ${accent.from}22, ${accent.to}22)`, boxShadow: `inset 0 0 0 1px ${accent.from}55` }}
                />

                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <ProjectImage src={`${p.src}/1.png`} alt={p.title} accent={accent} />
                  <div
                    className="absolute inset-0 flex flex-col justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${accent.from}DD, ${accent.to}CC)`, backdropFilter: 'blur(4px)' }}
                  >
                    <p className="text-white text-sm font-light px-6 text-center">{p.description}</p>
                    <div className="flex gap-3 mt-2">
                      {p.hasLive && (
                        <Link href={p.liveDemoLink} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/35 text-white text-xs font-medium border border-white/30 transition-all duration-200 hover:scale-105">
                          <MdLiveTv className="text-sm" /> Live Demo
                        </Link>
                      )}
                      <Link href={p.sourceLink} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/35 text-white text-xs font-medium border border-white/30 transition-all duration-200 hover:scale-105">
                        <BiCodeAlt className="text-sm" /> Source
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-5 relative z-20">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-base text-darker dark:text-lighter mb-1">{p.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {p.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full border border-platinum/50 dark:border-white/10 text-jet/60 dark:text-platinum/60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0 mt-1">
                      {p.hasLive && (
                        <Link href={p.liveDemoLink} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-platinum/40 dark:border-white/10 text-jet/50 dark:text-platinum/50 hover:text-[#06B4F1] hover:border-[#06B4F1]/50 transition-all duration-200">
                          <MdLiveTv className="text-sm" />
                        </Link>
                      )}
                      <Link href={p.sourceLink} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-platinum/40 dark:border-white/10 text-jet/50 dark:text-platinum/50 hover:text-[#7C3AED] hover:border-[#7C3AED]/50 transition-all duration-200">
                        <BiCodeAlt className="text-sm" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Projects;
