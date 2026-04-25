'use client';

import Logo from '@/components/Logo';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-platinum/20 dark:border-white/5 py-8"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" aria-label="Home" className="hover:opacity-80 transition-opacity">
          <Logo id="footer" className="h-7 w-auto" />
        </Link>
        <p className="text-xs font-light text-jet/40 dark:text-platinum/40 text-center">
          &copy; {new Date().getFullYear()} Rafi Sakib &mdash; Engineered for performance, built to last.
        </p>
        <div className="flex gap-4">
          {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((nav) => (
            <Link
              key={nav}
              href={`#${nav.toLowerCase()}`}
              className="text-xs text-jet/50 dark:text-platinum/50 hover:text-[#06B4F1] transition-colors duration-200"
            >
              {nav}
            </Link>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
