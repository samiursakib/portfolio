"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { PiMoonStarsFill } from "react-icons/pi";

const navs = ["About", "Experience", "Skills", "Projects", "Contact"];

const Header = () => {
  const [isDarkModeOn, setDarkModeOn] = useState(true);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navs.map((n) => n.toLowerCase());
      let current = "about";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const dark = saved !== 'light';
    setDarkModeOn(dark);
    document.body.classList.toggle('dark', dark);
  }, []);

  const toggleDark = () => {
    const next = !isDarkModeOn;
    setDarkModeOn(next);
    document.body.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 pb-3 bg-lighter/60 dark:bg-darker/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6">

        {/* Pill */}
        <div className="flex items-center py-2">

          {/* Logo */}
          <Link href="/" aria-label="Home" className="flex-shrink-0">
            <Logo animated id="nav" className="h-8 w-auto" />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden sm:flex flex-1 justify-center items-center gap-7">
            {navs.map((nav) => {
              const isActive = activeSection === nav.toLowerCase();
              return (
                <Link
                  key={nav}
                  href={`#${nav.toLowerCase()}`}
                  className={`relative text-sm font-light transition-colors duration-300 group ${
                    isActive
                      ? "text-[#06B4F1]"
                      : "text-jet/70 dark:text-platinum/80 hover:text-[#06B4F1] dark:hover:text-[#06B4F1]"
                  }`}
                >
                  {nav}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B4F1] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right controls — always visible */}
          <div className="flex items-center gap-1 ml-auto sm:ml-0">

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              className="w-8 h-8 flex items-center justify-center rounded-full text-jet/70 dark:text-platinum hover:text-[#06B4F1] dark:hover:text-[#06B4F1] transition-colors duration-300 text-base"
              aria-label="Toggle dark mode"
            >
              {isDarkModeOn ? <PiMoonStarsFill /> : <BsFillSunFill />}
            </button>

            {/* Mobile hamburger */}
            <button
              className="flex sm:hidden relative justify-center items-center w-8 h-8"
              onClick={() => setIsOverlayOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span className={`absolute h-[1.5px] bg-darker dark:bg-lighter rounded-full block transition-all duration-300 ${isOverlayOpen ? "w-5 rotate-45" : "w-4 -translate-y-[5px]"}`} />
              <span className={`absolute h-[1.5px] bg-darker dark:bg-lighter rounded-full block transition-all duration-300 ${isOverlayOpen ? "opacity-0 w-5" : "opacity-100 w-5"}`} />
              <span className={`absolute h-[1.5px] bg-darker dark:bg-lighter rounded-full block transition-all duration-300 ${isOverlayOpen ? "w-5 -rotate-45" : "w-4 translate-y-[5px]"}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2 rounded-2xl ${
            isOverlayOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } `}
        >
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navs.map((nav) => {
              const isActive = activeSection === nav.toLowerCase();
              return (
                <Link
                  key={nav}
                  href={`#${nav.toLowerCase()}`}
                  onClick={() => setIsOverlayOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-light transition-all duration-200 ${
                    isActive
                      ? "text-[#06B4F1] bg-[#06B4F1]/10"
                      : "text-jet/70 dark:text-platinum/80 hover:text-[#06B4F1] hover:bg-[#06B4F1]/5"
                  }`}
                >
                  {nav}
                </Link>
              );
            })}
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;
