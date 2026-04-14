"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    tech: "Next.js / TypeScript / Tailwind CSS / Stripe",
    live: "#",
    github: "#",
    color: "#1a1a1a",
  },
  {
    number: "02",
    title: "Portfolio Dashboard",
    description:
      "A beautifully designed analytics dashboard for tracking projects, skills, and professional growth with interactive data visualizations.",
    tech: "React / Framer Motion / Node.js / MongoDB",
    live: "#",
    github: "#",
    color: "#161a1a",
  },
  {
    number: "03",
    title: "SaaS Landing Page",
    description:
      "A high-converting SaaS landing page with interactive animations, feature showcases, and seamless onboarding flow.",
    tech: "Next.js / Tailwind CSS / Framer Motion / Vercel",
    live: "#",
    github: "#",
    color: "#181a18",
  },
];

function ProjectPreview({ color }: { color: string }) {
  return (
    <div
      className="w-full aspect-[4/3] rounded-2xl border border-[#2a2a2a] overflow-hidden flex items-center justify-center"
      style={{ background: color }}
    >
      {/* Placeholder mockup */}
      <div className="w-full h-full p-6 flex flex-col gap-3">
        {/* Fake browser bar */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          <div className="flex-1 h-4 bg-[#2a2a2a] rounded ml-2" />
        </div>

        {/* Fake content lines */}
        <div className="flex-1 flex flex-col gap-2 mt-2">
          <div className="h-3 bg-[#00ff9d]/20 rounded w-3/4" />
          <div className="h-3 bg-[#2a2a2a] rounded w-full" />
          <div className="h-3 bg-[#2a2a2a] rounded w-5/6" />
          <div className="h-3 bg-[#2a2a2a] rounded w-4/6" />
          <div className="mt-3 h-8 bg-[#00ff9d]/30 rounded-lg w-1/3" />
          <div className="flex-1 grid grid-cols-3 gap-2 mt-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#222] rounded-lg aspect-video" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4"
  >
    <path
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronIcon = ({ dir }: { dir: "left" | "right" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-5 h-5"
    style={{ transform: dir === "left" ? "rotate(180deg)" : "none" }}
  >
    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const goTo = (idx: number) => {
    setDirection(idx > current ? "next" : "prev");
    setCurrent(idx);
  };
  const prev = () => goTo((current - 1 + projects.length) % projects.length);
  const next = () => goTo((current + 1) % projects.length);

  const variants = {
    enter: (dir: "next" | "prev") => ({
      x: dir === "next" ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: "next" | "prev") => ({
      x: dir === "next" ? -60 : 60,
      opacity: 0,
    }),
  };

  const project = projects[current];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-20 px-6 lg:px-10 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">My Work</h2>
        {/* Navigation controls */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-white hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors"
            aria-label="Previous project"
          >
            <ChevronIcon dir="left" />
          </motion.button>
          <span className="text-sm text-gray-500">
            {current + 1} / {projects.length}
          </span>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-white hover:border-[#00ff9d] hover:text-[#00ff9d] transition-colors"
            aria-label="Next project"
          >
            <ChevronIcon dir="right" />
          </motion.button>
        </div>
      </motion.div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
          >
            {/* Left: Project info */}
            <div className="flex-1 max-w-lg">
              {/* Project number */}
              <span className="block text-6xl sm:text-7xl font-bold text-[#1e1e1e] leading-none mb-4 select-none">
                {project.number}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech stack */}
              <p className="text-xs text-[#00ff9d] font-medium uppercase tracking-wider mb-6">
                {project.tech}
              </p>

              {/* Links */}
              <div className="flex items-center gap-4">
                <motion.a
                  href={project.live}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 border border-[#00ff9d] text-[#00ff9d] text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full hover:bg-[#00ff9d]/10 transition-colors"
                >
                  <LinkIcon />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 border border-[#2a2a2a] text-gray-300 text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full hover:border-white hover:text-white transition-colors"
                >
                  <GithubIcon />
                  GitHub
                </motion.a>
              </div>
            </div>

            {/* Right: Preview */}
            <div className="flex-1 w-full">
              <ProjectPreview color={project.color} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot navigation */}
      <div className="flex items-center justify-center gap-2 mt-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-2 bg-[#00ff9d]"
                : "w-2 h-2 bg-[#2a2a2a] hover:bg-[#3a3a3a]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
