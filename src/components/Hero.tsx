"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 12, label: "Years of", sublabel: "experience" },
  { value: 26, label: "Projects", sublabel: "completed" },
  { value: 8, label: "Technologies", sublabel: "mastered" },
  { value: 500, label: "Code", sublabel: "commits" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
];

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 lg:px-10 max-w-7xl mx-auto"
    >
      {/* Main two-column layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6 flex-1 py-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 max-w-xl"
        >
          {/* Intro tag */}
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-4 font-light">
            Software Developer
          </p>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3">
            Hello I&apos;m
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00ff9d] leading-tight mb-6">
            Luke Coleman
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and technologies.
          </p>

          {/* CTA + Socials row */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Download CV button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-[#00ff9d] text-[#00ff9d] text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#00ff9d]/10 transition-colors duration-200"
            >
              Download CV
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4"
              >
                <path
                  d="M12 15V3m0 12l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:border-[#00ff9d] hover:text-[#00ff9d] transition-all duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Profile Image with animated ring */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="188"
                  stroke="#00ff9d"
                  strokeWidth="2"
                  strokeDasharray="22 14"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Counter-rotating arc segments for depth */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4"
            >
              <svg viewBox="0 0 360 360" className="w-full h-full" fill="none">
                <path
                  d="M 180 10 A 170 170 0 0 1 350 180"
                  stroke="#00ff9d"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
                <path
                  d="M 180 350 A 170 170 0 0 1 10 180"
                  stroke="#00ff9d"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Profile image circle */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-[#2a2a2a] bg-[#1a1a1a]">
              {/* Placeholder gradient — replace with <Image> later */}
              <div className="w-full h-full bg-gradient-to-br from-[#1e1e1e] via-[#222] to-[#1a1a1a] flex items-end justify-center">
                {/* Silhouette placeholder */}
                <svg
                  viewBox="0 0 200 220"
                  className="w-4/5 text-[#2a2a2a]"
                  fill="currentColor"
                >
                  <circle cx="100" cy="70" r="45" />
                  <ellipse cx="100" cy="200" rx="75" ry="60" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#2a2a2a] pt-10 mt-4"
      >
        {stats.map((stat, i) => (
          <div key={i} className="flex items-baseline gap-3">
            <span className="text-4xl sm:text-5xl font-bold text-white leading-none">
              <AnimatedCounter target={stat.value} />
            </span>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 leading-tight">{stat.label}</span>
              <span className="text-xs text-gray-400 leading-tight">{stat.sublabel}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
