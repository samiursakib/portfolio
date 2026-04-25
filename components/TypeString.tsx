'use client';

import { useEffect, useMemo, useState } from 'react';

interface Props {
  strings?: string | string[];
  delay?: number;
  deleteSpeed?: number;
  pauseMs?: number;
}

const TypeString = ({ strings = [], delay = 60, deleteSpeed = 30, pauseMs = 1800 }: Props) => {
  const list = useMemo(
    () => (Array.isArray(strings) ? strings : [strings]),
    [strings]
  );

  const [displayed, setDisplayed] = useState('');
  const [strIndex, setStrIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    if (list.length === 0) return;
    const current = list[strIndex];

    if (pausing) {
      const t = setTimeout(() => { setPausing(false); setDeleting(true); }, pauseMs);
      return () => clearTimeout(t);
    }

    if (!deleting) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((i) => i + 1);
        }, delay);
        return () => clearTimeout(t);
      } else if (list.length > 1) {
        setPausing(true);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((i) => i - 1);
        }, deleteSpeed);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setStrIndex((i) => (i + 1) % list.length);
      }
    }
  }, [charIndex, deleting, pausing, strIndex, list, delay, deleteSpeed, pauseMs]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeString;
