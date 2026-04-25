'use client';
import { motion } from 'framer-motion';

// Three nodes forming a network triangle — distributed systems mark
const PATHS = {
  bottom: 'M 4,38 Q 22,52 40,38',
  left:   'M 22,5 Q -2,26 4,38',
  right:  'M 22,5 Q 46,26 40,38',
};

const NODES = [
  { cx: 22, cy: 5 },
  { cx: 4,  cy: 38 },
  { cx: 40, cy: 38 },
];

const SW = 3.5;
const NR = 4.5;

function Logo({ animated = false, className = '', id = 'default' }: { animated?: boolean; className?: string; id?: string }) {
  const gid = `lg-${id}`;

  const defs = (
    <defs>
      <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#06B4F1" />
      </linearGradient>
    </defs>
  );

  const strokeProps = {
    fill: 'none' as const,
    stroke: `url(#${gid})`,
    strokeWidth: SW,
    strokeLinecap: 'round' as const,
  };

  if (animated) {
    return (
      <motion.svg viewBox="0 0 44 46" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logo">
        {defs}
        <motion.path d={PATHS.bottom} {...strokeProps}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.1 }}
        />
        <motion.path d={PATHS.left} {...strokeProps}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.6 }}
        />
        <motion.path d={PATHS.right} {...strokeProps}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 1.0 }}
        />
        {NODES.map((n, i) => (
          <motion.circle key={i} cx={n.cx} cy={n.cy} fill={`url(#${gid})`}
            initial={{ r: 0, opacity: 0 }}
            animate={{ r: NR, opacity: 1 }}
            transition={{ duration: 0.35, ease: 'backOut', delay: 1.4 + i * 0.1 }}
          />
        ))}
        <motion.circle cx={22} cy={27} fill={`url(#${gid})`}
          initial={{ r: 0, opacity: 0 }}
          animate={{ r: 3, opacity: 0.7 }}
          transition={{ duration: 0.35, ease: 'backOut', delay: 1.75 }}
        />
      </motion.svg>
    );
  }

  return (
    <svg viewBox="0 0 44 46" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Logo">
      {defs}
      <path d={PATHS.bottom} {...strokeProps} />
      <path d={PATHS.left}   {...strokeProps} />
      <path d={PATHS.right}  {...strokeProps} />
      {NODES.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r={NR} fill={`url(#${gid})`} />
      ))}
      <circle cx={22} cy={27} r={3} fill={`url(#${gid})`} opacity={0.7} />
    </svg>
  );
}

export default Logo;
