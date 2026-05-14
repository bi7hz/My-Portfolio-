"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{count}</span>;
}

const socials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    href: "#",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: "#",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.546-1.436-2.35-2.461-2.35-1.229 0-2.311.66-2.504 2.35zm-8.533 4h-5.507v-14h5.402c3.23 0 5.068 1.116 5.068 3.652 0 1.554-1.127 2.766-2.545 3.234 1.741.332 3.013 1.637 3.013 3.56 0 2.294-1.84 3.554-5.431 3.554zm-2.023-6v4.321h1.597c2.315 0 2.658-1.258 2.658-2.155 0-1.196-.465-2.166-2.825-2.166h-1.43zm0-5v3.476h1.229c2.146 0 2.456-.99 2.456-1.729 0-.847-.468-1.747-2.493-1.747h-1.192z"/>
      </svg>
    ),
    href: "#",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[18px] h-[18px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.909A2.25 2.25 0 012.25 6.993V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25" />
      </svg>
    ),
    href: "#",
  },
];

const stats = [
  { num: 2, label: "Years of", sub: "experience" },
  { num: 9, label: "Projects", sub: "completed" },
  { num: 13, label: "Technologies", sub: "mastered" },
];

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden pt-[6.25rem] pb-10 xl:pt-[6.5rem] xl:pb-12">
      <div className="site-shell">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">
          {/* Left Text */}
          <div className="flex-1 w-full text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            <span className="text-[16px] xl:text-[18px] text-white/80 block mb-4 font-medium">Software Developer</span>
            <h1 className="mb-6 text-white text-[50px] sm:text-[60px] lg:text-[70px] xl:text-[80px] leading-[1.03] font-bold flex flex-col gap-2">
              <span>Hello I&apos;m</span>
              <span className="text-accent whitespace-nowrap">Bilal Haider</span>
            </h1>
            <p className="max-w-[560px] mb-7 text-white/65 leading-[1.9] text-[15px]">
              I build responsive, high-quality web applications with a focus on
              performance, usability, and elegant design.
            </p>
            {/* CTA and Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mt-1">
              <a
                href="/cv.pdf"
                target="_blank"
                className="uppercase flex h-[52px] min-w-[214px] items-center justify-center gap-3 border border-accent text-accent px-8 rounded-full hover:bg-accent hover:text-primary transition-all duration-500 font-semibold text-[13px] tracking-[2px]"
              >
                <span>Download CV</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-5 h-5">
                  <path d="M12 15V3m0 12l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
                <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-[44px] h-[44px] border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2 mb-10 lg:mb-0 relative z-10 soft-glow">
            <div className="relative w-[292px] h-[292px] sm:w-[350px] sm:h-[350px] lg:w-[390px] lg:h-[390px] xl:w-[410px] xl:h-[410px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
                className="w-full h-full relative"
              >
                <motion.div
                  animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 z-10 w-full h-full"
                >
                  <svg className="w-full h-full" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle
                      cx="253" 
                      cy="253" 
                      r="250" 
                      stroke="#00ff99" 
                      strokeWidth="3"
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      initial={{ strokeDasharray: "24 10 0 0" }}
                    />
                  </svg>
                </motion.div>
                
                {/* Photo placement */}
                <div className="absolute top-[18px] left-[18px] right-[18px] bottom-[18px] rounded-full overflow-hidden flex items-center justify-center bg-[#1c1c22] border border-white/10">
                  <Image 
                    src="/assets/Wheite.png" 
                    alt="Bilal Haider"
                    fill 
                    className="object-cover object-[center_30%]"
                    quality={100}
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-9">
          <div className="grid w-full grid-cols-1 gap-y-7 gap-x-8 border-t border-white/10 pt-9 sm:grid-cols-3">
            {stats.map((item, index) => {
              return (
                <div
                  className={`flex items-center gap-4 ${
                    index === 0
                      ? "justify-center sm:justify-self-start"
                      : index === 1
                        ? "justify-center sm:justify-self-center"
                        : "justify-center sm:justify-self-end"
                  }`}
                  key={index}
                >
                  <p className="text-[48px] sm:text-[56px] xl:text-[64px] font-extrabold text-white leading-none">
                    <Counter end={item.num} />
                  </p>
                  <div className="flex flex-col ml-1">
                    <span className="text-[14px] text-white/70 block leading-snug max-w-[110px]">{item.label}</span>
                    <span className="text-[14px] text-white/70 block leading-snug">{item.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
