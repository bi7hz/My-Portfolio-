"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using modern technologies, clean architecture, and best UI practices.",
    href: ""
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing interfaces focused on user experience, accessibility, and modern design trends.",
    href: ""
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Creating unique and memorable brand identities with clean, modern logo concepts tailored to your business vision.",
    href: ""
  },
  {
    num: "04",
    title: "AI & Machine Learning",
    description: "Developing intelligent solutions using machine learning models, data analysis, and AI tools to automate and enhance digital products.",
    href: ""
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center overflow-hidden pt-[5.2rem] pb-4 xl:pt-[5.55rem] xl:pb-4">
      <div className="site-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.4, ease: "easeOut" } }}
          className="mb-5 xl:mb-6 text-center xl:text-left"
        >
          <span className="section-kicker">Services</span>
          <h1 className="mt-2 text-[34px] sm:text-[39px] xl:text-[42px] font-bold leading-tight text-white">
            What I do
          </h1>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-7 xl:gap-x-20 xl:gap-y-8"
        >
          {services.map((item, index) => {
            return (
              <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-4 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-[38px] xl:text-[44px] font-extrabold text-outline text-transparent transition-all duration-500 group-hover:text-outline-hover leading-none">
                    {item.num}
                  </div>
                  <Link 
                    href={item.href}
                    className="w-[52px] h-[52px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth={2} className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[27px] xl:text-[29px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                {/* description */}
                <p className="text-white/60 text-[14px] leading-[1.65] max-w-[420px]">
                  {item.description}
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full mt-1"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
