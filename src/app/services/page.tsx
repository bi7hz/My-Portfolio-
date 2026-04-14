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
    <section className="min-h-screen pb-12 xl:pb-24 flex flex-col justify-center items-center" style={{ paddingTop: '150px' }}>
      <div className="max-w-[1140px] w-full px-6 xl:px-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[80px] xl:gap-[100px]"
        >
          {services.map((item, index) => {
            return (
              <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500 group-hover:text-outline-hover">
                    {item.num}
                  </div>
                  <Link 
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth={2} className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                {/* description */}
                <p className="text-white/60 text-[14px] max-w-[400px]">
                  {item.description}
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full mt-2"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
