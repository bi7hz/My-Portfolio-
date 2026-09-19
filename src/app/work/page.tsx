"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, type WheelEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import thumb1 from "../../../assets/work/thumb1.png";
import thumb2 from "../../../assets/work/thumb2.png";
import thumb3 from "../../../assets/work/thumb3.png";
import kinovaClub from "../../../assets/work/KINOVA CLUB.png";

const projects = [
  {
    num: "01",
    category: "E-Commerce / Web Development",
    title: "VANTA — E-Commerce Store",
    description: "A premium streetwear storefront with responsive browsing, category and sale filtering, dynamic product pages, and a persistent client-side cart.",
    tech: "Next.js 16, React 19, TypeScript, CSS",
    live: "https://vanta-ecommerce.vercel.app/",
    github: "https://github.com/bi7hz/vanta-ecommerce",
    image: "/projects/vanta-ecommerce.webp",
    external: true,
  },
  {
    num: "02",
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
    num: "03",
    category: "Full Stack",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard built for scale.",
    tech: "Next.js, TypeScript, Tailwind CSS, Stripe",
    live: "#",
    github: "#",
    image: thumb1,
  },
  {
    num: "04",
    category: "Frontend",
    title: "Portfolio Dashboard",
    description: "A beautifully designed analytics dashboard for tracking projects, skills, and professional growth with interactive data visualisations.",
    tech: "React, Framer Motion, Node.js, MongoDB",
    live: "#",
    github: "#",
    image: thumb2,
  },
  {
    num: "05",
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
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isDragging, setIsDragging] = useState(false);
  const navigationLocked = useRef(false);
  const navigationLockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelDistance = useRef(0);

  useEffect(() => {
    return () => {
      if (navigationLockTimer.current) clearTimeout(navigationLockTimer.current);
      if (wheelResetTimer.current) clearTimeout(wheelResetTimer.current);
    };
  }, []);

  const prev = () => {
    setDirection("prev");
    setCurrent((projectIndex) => (projectIndex === 0 ? projects.length - 1 : projectIndex - 1));
  };

  const next = () => {
    setDirection("next");
    setCurrent((projectIndex) => (projectIndex === projects.length - 1 ? 0 : projectIndex + 1));
  };

  const lockNavigation = () => {
    if (navigationLocked.current) return false;

    navigationLocked.current = true;
    if (navigationLockTimer.current) clearTimeout(navigationLockTimer.current);
    navigationLockTimer.current = setTimeout(() => {
      navigationLocked.current = false;
    }, 500);

    return true;
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const isHorizontalGesture = Math.abs(event.deltaX) > Math.abs(event.deltaY);
    if (!isHorizontalGesture) return;

    event.preventDefault();
    wheelDistance.current += event.deltaX;

    if (wheelResetTimer.current) clearTimeout(wheelResetTimer.current);
    wheelResetTimer.current = setTimeout(() => {
      wheelDistance.current = 0;
    }, 160);

    if (Math.abs(wheelDistance.current) < 60 || !lockNavigation()) return;

    const wheelDirection = wheelDistance.current > 0 ? "next" : "prev";
    wheelDistance.current = 0;
    if (wheelDirection === "next") {
      next();
      return;
    }

    prev();
  };

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

              <p className="text-accent text-[12px] font-semibold uppercase tracking-[0.16em] -mt-1">
                {project.category}
              </p>

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
            <motion.div
              drag="x"
              dragConstraints={{ left: -90, right: 90 }}
              dragElastic={0.14}
              dragMomentum={false}
              dragSnapToOrigin
              whileDrag={{ opacity: 0.94, scale: 0.99 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(_, info) => {
                setIsDragging(false);
                if (Math.abs(info.offset.x) < 64 || !lockNavigation()) return;
                if (info.offset.x < 0) {
                  next();
                  return;
                }

                prev();
              }}
              onWheel={handleWheel}
              style={{ cursor: isDragging ? "grabbing" : "grab", touchAction: "pan-y" }}
              className="group relative flex h-[360px] w-full select-none items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-[#232329] sm:h-[430px] xl:h-[460px]"
              aria-label="Drag left or right to browse projects"
            >
              <motion.div
                key={project.num}
                initial={{ opacity: 0, x: direction === "next" ? 18 : -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  fill
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1280px) 600px, 100vw"
                  preload={current === 0}
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1c1c22]/35 via-transparent to-transparent" />
            </motion.div>

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
