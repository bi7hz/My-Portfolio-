"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import thumb1 from "../../../assets/work/thumb1.png";
import thumb2 from "../../../assets/work/thumb2.png";
import thumb3 from "../../../assets/work/thumb3.png";
import kinovaClub from "../../../assets/work/KINOVA CLUB.png";

const projects = [
  {
    num: "01",
    category: "Fitness Platform",
    title: "KINOVA CLUB",
    description: "A premium bilingual fitness membership platform with immersive visuals, dynamic interactions, and a modern responsive experience.",
    tech: "Next.js, TypeScript, Tailwind CSS",
    live: "https://kinova-club.vercel.app/#home",
    github: "https://github.com/bi7hz/Kinova-Club",
    image: kinovaClub,
    external: true,
  },
  {
    num: "02",
    category: "Full Stack",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard built for scale.",
    tech: "Next.js, TypeScript, Tailwind CSS, Stripe",
    live: "#",
    github: "#",
    image: thumb1,
  },
  {
    num: "03",
    category: "Frontend",
    title: "Portfolio Dashboard",
    description: "A beautifully designed analytics dashboard for tracking projects, skills, and professional growth with interactive data visualisations.",
    tech: "React, Framer Motion, Node.js, MongoDB",
    live: "#",
    github: "#",
    image: thumb2,
  },
  {
    num: "04",
    category: "Landing Page",
    title: "SaaS Landing Page",
    description: "A high-converting SaaS landing page with interactive animations, feature showcases, and a seamless onboarding flow optimised for conversions.",
    tech: "Next.js, Tailwind CSS, Framer Motion",
    live: "#",
    github: "#",
    image: thumb3,
  },
];

export default function WorkPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const project = projects[current];

  return (
    <section className="min-h-screen section-pad flex flex-col justify-center xl:px-0 overflow-hidden">
      <div className="site-shell">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
          className="flex flex-col lg:flex-row lg:gap-10 xl:gap-12 soft-glow"
        >
          {/* Text Content */}
          <div className="w-full lg:w-[48%] flex flex-col lg:justify-between order-2 lg:order-none relative z-10">
            <div className="flex flex-col gap-6 h-full sm:mt-8 lg:mt-0 xl:pr-6">
              {/* number */}
              <div className="text-7xl xl:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* title */}
              <h2 className="text-[36px] xl:text-[42px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* description */}
              <p className="text-white/60 text-[14px] leading-[1.85] max-w-[560px]">{project.description}</p>
              
              {/* stack */}
              <p className="text-accent text-[14px] font-semibold">{project.tech}</p>
              
              {/* border */}
              <div className="border-b border-white/15"></div>
              
              {/* buttons */}
              <div className="flex items-center gap-4 mt-2">
                <Link href={project.live} target={project.external ? "_blank" : undefined} rel={project.external ? "noopener noreferrer" : undefined} aria-label={`${project.title} live project`} className="group/action relative w-[56px] h-[56px] rounded-full bg-[#232329] border border-white/5 flex justify-center items-center text-white hover:text-accent hover:border-accent/45 transition-all duration-300">
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-white px-3 py-1 text-[11px] font-semibold text-[#1c1c22] opacity-0 translate-y-1 pointer-events-none whitespace-nowrap transition-all duration-200 group-hover/action:opacity-100 group-hover/action:translate-y-0">
                    Live Project
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.1} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </Link>
                <Link href={project.github} target={project.external ? "_blank" : undefined} rel={project.external ? "noopener noreferrer" : undefined} aria-label={`${project.title} GitHub`} className="group/action relative w-[56px] h-[56px] rounded-full bg-[#232329] border border-white/5 flex justify-center items-center text-white hover:text-accent hover:border-accent/45 transition-all duration-300">
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-white px-3 py-1 text-[11px] font-semibold text-[#1c1c22] opacity-0 translate-y-1 pointer-events-none whitespace-nowrap transition-all duration-200 group-hover/action:opacity-100 group-hover/action:translate-y-0">
                    GitHub
                  </span>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[23px] h-[23px]">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Slider Content */}
          <div className="w-full lg:w-[52%] order-1 lg:order-none mb-12 lg:mb-0 relative min-h-[390px] z-10">
            <div className="h-[360px] sm:h-[430px] xl:h-[460px] relative group flex justify-center items-center bg-[#232329] rounded-[18px] border border-white/10 overflow-hidden">
               <Image
                 fill
                 src={project.image}
                 alt={project.title}
                 className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                 sizes="(min-width: 1280px) 600px, 100vw"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c22]/35 via-transparent to-transparent" />
            </div>

            {/* Slider navigation buttons */}
            <div className="absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 lg:w-max z-20 flex gap-2 w-full justify-between lg:w-fit lg:justify-none lg:right-1/2 lg:translate-x-1/2 mt-8">
              <button 
                 onClick={prev}
                 aria-label="Previous project"
                 className="bg-accent hover:bg-accent-hover text-[#1c1c22] text-[22px] w-[46px] h-[46px] flex justify-center items-center transition-all mt-4 mb-[-32px] lg:mb-0 lg:mt-0 lg:mr-3 rounded-full shadow-lg"
              >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
              </button>
              <button 
                 onClick={next}
                 aria-label="Next project"
                 className="bg-accent hover:bg-accent-hover text-[#1c1c22] text-[22px] w-[46px] h-[46px] flex justify-center items-center transition-all mt-4 mb-[-32px] lg:mb-0 lg:mt-0 rounded-full shadow-lg"
              >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
