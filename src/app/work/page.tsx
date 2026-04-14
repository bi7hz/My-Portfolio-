"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard built for scale.",
    tech: "Next.js, TypeScript, Tailwind CSS, Stripe",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Portfolio Dashboard",
    description: "A beautifully designed analytics dashboard for tracking projects, skills, and professional growth with interactive data visualisations.",
    tech: "React, Framer Motion, Node.js, MongoDB",
    live: "#",
    github: "#",
  },
  {
    num: "03",
    category: "Landing Page",
    title: "SaaS Landing Page",
    description: "A high-converting SaaS landing page with interactive animations, feature showcases, and a seamless onboarding flow optimised for conversions.",
    tech: "Next.js, Tailwind CSS, Framer Motion",
    live: "#",
    github: "#",
  },
];

export default function WorkPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const project = projects[current];

  return (
    <section className="min-h-screen pt-32 pb-12 flex flex-col justify-center xl:px-0">
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
          className="flex flex-col xl:flex-row xl:gap-[30px]"
        >
          {/* Text Content */}
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-full sm:mt-12 xl:mt-0">
              {/* number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* description */}
              <p className="text-white/60 text-[15px]">{project.description}</p>
              
              {/* stack */}
              <p className="text-accent text-[15px] font-semibold">{project.tech}</p>
              
              {/* border */}
              <div className="border border-white/20"></div>
              
              {/* buttons */}
              <div className="flex items-center gap-4 mt-2">
                <Link href={project.live} className="w-[60px] h-[60px] rounded-full bg-[#232329] flex justify-center items-center group">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px] text-white group-hover:text-accent">
                    <path d="M4 12V4h8 M14 3l7 7-7 7 M3 21l7-7 M10 21h10v-8" />
                  </svg>
                </Link>
                <Link href={project.github} className="w-[60px] h-[60px] rounded-full bg-[#232329] flex justify-center items-center group">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px] text-white group-hover:text-accent">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Slider Content */}
          <div className="w-full xl:w-[50%] order-1 xl:order-none mb-12 xl:mb-0 relative min-h-[400px]">
            <div className="h-[460px] relative group flex justify-center items-center bg-[#232329] rounded-xl border border-white/5 overflow-hidden">
               {/* Browser Chrome Placeholder for mockups */}
               <div className="absolute top-0 left-0 w-full h-[40px] bg-[#1c1c22] border-b border-white/5 flex items-center px-4 gap-2 z-10">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
               </div>
               
               <div className="text-white/20 text-4xl font-bold mt-10">
                 Project Preview
               </div>

               {/* Optional actual image */}
               {/* <Image fill src={project.image} alt={project.title} className="object-cover" /> */}
            </div>

            {/* Slider navigation buttons */}
            <div className="absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 xl:w-max z-20 flex gap-2 w-full justify-between xl:w-fit xl:justify-none xl:right-1/2 xl:translate-x-1/2 mt-8">
              <button 
                 onClick={prev}
                 className="bg-accent hover:bg-accent-hover text-[#1c1c22] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all mt-4 mb-[-34px] xl:mb-0 xl:mt-0 xl:mr-4 rounded-xl shadow-lg"
              >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
              </button>
              <button 
                 onClick={next}
                 className="bg-accent hover:bg-accent-hover text-[#1c1c22] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all mt-4 mb-[-34px] xl:mb-0 xl:mt-0 rounded-xl shadow-lg"
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
